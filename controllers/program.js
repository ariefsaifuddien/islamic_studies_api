import Program from "../models/Program.js";
import fs from "fs"
export const postProgram = async (req, res) => {
    const { title, details, category } = req.body
    const pic = req.file
    const pro = new Program({
        title: title,
        details: details,
        date: new Date(),
        category: category,
        picExt: pic.mimetype.split('/')[1]
    })

    console.log(title)

    return await pro.save().then(result => {
        const id = result._id;
        fs.rename(pic.path, `./uploads/programs/${id}.${pic.mimetype.split('/')[1]}`, (err) => {
            if (!err) {
                console.log('Successfully renamed')
                res.status(201).json({
                    status: 201,
                    message: "Successfully created!",
                    data: result
                })
            } else {
                res.status(400).json({
                    status: 500,
                    message: "Error",
                    error: err
                })
            }
        })
    }).catch(err => {
        console.log(err)
        res.status(500).json({
            status: 500,
            message: "error",
            error: err
        })
    })
}

export const getPrograms = async (req, res) => {
    return await Program.find({}).then(result => {
        res.status(200).json({
            status: 200,
            message: "Successfully fetched!",
            data: result
        })
    }).catch(err => {
        res.status(404).json({
            status: 404,
            message: "Error!",
            error: err
        })
    })
}

export const getProgram = async (req, res) => {
    return await Program.findById(req.query.id).then(result => {
        res.status(200).json({
            status: 200,
            message: "Successfully fetched!",
            data: result
        })
    }).catch(err => {
        res.status(404).json({
            status: 404,
            message: "Error!",
            error: err
        })
    })
}

export const deleteProgram = async (req, res) => {
    return await Program.findByIdAndDelete(req.params.id).then(result => {
        fs.unlink(`./uploads/programs/${req.params.id}.${result.picExt}`, (err) => {
            if (!err) {
                console.log("Succesfully delete image")
                res.status(200).json({
                    status: 200,
                    message: "Successfully deleted!",
                    data: result
                })
            } else {
                res.status(500).json({
                    status: 500,
                    message: "Error!",
                    error: err
                })
            }
        })
    }).catch(err => {
        res.status(500).json({
            status: 500,
            message: "Error!",
            error: err
        })
    })
}

export const getProgramsByCategory = async (req, res) => {
    return await Program.find({ category: req.params.category }).then(result => {
        res.status(200).json({
            status: 200,
            message: "Successfully fetched!",
            data: result
        })
    }).catch(err => {
        res.status(404).json({
            status: 404,
            message: "Error",
            error: err
        })
    })
}

export const deleteAll = async (req, res) => {
    return await Program.deleteMany({ __v: 0 }).then(result => {
        res.status(200).json({
            status: 200,
            message: "Successfully deleted All!",
            data: result
        })
    }).catch(err => {
        res.status(404).json({
            status: 404,
            message: "Error!",
            error: err
        })
    })
}
