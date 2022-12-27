import Lecturer from "../models/Lecturer.js";
import fs from "fs"

export const postLecturer = async (req, res) => {
    const { name, qualification, specialization } = req.body
    const pic = req.files['avatar'][0]
    const file = req.files['file'][0]
    const lecturer = new Lecturer({
        lecturer_name: name,
        specialization: specialization,
        qualification: qualification,
        picExt: pic.mimetype.split('/')[1],
        fileExt: file.originalname.split(".")[1]
    })

    console.log(file.originalname.split(".")[1])

    return await lecturer.save().then(result => {
        fs.rename(pic.path, `./uploads/lecturers/pictures/${result._id}.${pic.mimetype.split('/')[1]}`, (err) => {
            if (!err) {
                fs.rename(file.path, `./uploads/lecturers/files/${result._id}.${file.originalname.split(".")[1]}`, (err) => {
                    if (!err) {
                        console.log('Successfully renamed')
                        res.status(201).json({
                            status: 201,
                            message: "Successfully posted!",
                            data: result
                        })
                    } else {
                        res.status(500).json({
                            status: 500,
                            message: "Error",
                            error: err
                        })
                    }
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
        res.status(401).json({
            status: 401,
            message: "Error",
            error: err
        })
    })
}

export const getLecturers = async (req, res) => {
    console.log("here")
    return await Lecturer.find({}).then(result => {
        console.log("Inside")
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

export const getLecturersBySpecialization = async (req, res) => {
    const { spec } = req.params
    return await Lecturer.find({ specialization: spec }).then(result => {
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

export const getLecturer = async (req, res) => {
    const { id } = req.query
    console.log(id)
    return await Lecturer.find({ _id: id }).then(result => {
        res.status(200).json({
            status: 200,
            message: "Successfully fetched!",
            data: result
        })
    }).catch(err => {
        console.log(err)
        res.status(404).json({
            status: 404,
            message: "Error!",
            error: err
        })
    })
}

export const deleteLecturer = async (req, res) => {
    return await Lecturer.findByIdAndDelete(req.params.id).then(result => {
        fs.unlink(`./uploads/lecturers/pictures/${req.params.id}.${result.picExt}`, (err) => {
            if (!err) {
                fs.unlink(`./uploads/lecturers/files/${req.params.id}.${result.fileExt}`, (err) => {
                    if (!err) {
                        console.log("Succesfully deleted")
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
            }
            else {
                res.status(500).json({
                    status: 500,
                    message: "Error!",
                    error: err
                })
            }
        })
    }).catch(err => {
        res.status(404).json({
            status: 404,
            message: "Error!",
            error: err
        })
    })
}


//only for development
export const deleteAll = async (req, res) => {
    return await Lecturer.deleteMany({ __v: 0 }).then(result => {
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