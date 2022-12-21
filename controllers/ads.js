import Advertisement from "../models/Advertisement.js";
import fs from "fs/promises"
export const postAds = async (req, res) => {
    const { title, desc } = req.body
    const pic = req.file
    const newAds = new Advertisement({
        title: title,
        description: desc,
        picExt: pic.mimetype.split('/')[1]
    })
    return await newAds.save().then(result => {
        fs.rename(pic.path, `./uploads/ads/${result._id}.${pic.mimetype.split('/')[1]}`).then(() => {
            console.log('Successfully renamed')
            res.status(201).json({
                status: 201,
                message: "Successfully posted!",
                data: result
            })
        }).catch(err => {
            res.status(500).json({
                status: 500,
                message: "Error",
                error: err
            })
        }).catch(err => {
            res.status(500).json({
                status: 500,
                message: "Error",
                error: err
            })
        })
    })
}

export const getAds = async (req, res) => {
    return await Advertisement.find({}).sort("desc").then(result => {
        res.status(200).json({
            status: 200,
            message: "Successfully fetched!",
            data: result
        })
    }).catch(err => {
        res.status(500).json({
            status: 500,
            message: "Error",
            error: err
        })
    })
}

export const getOneAds = async (req, res) => {
    const { id } = req.query
    return await Advertisement.find({ _id: id }).then(result => {
        res.status(200).json({
            status: 200,
            message: "Successfully fetched!",
            data: result
        })
    }).catch(err => {
        res.status(500).json({
            status: 500,
            message: "Error",
            error: err
        })
    })
}


export const deleteAds = async (req, res) => {
    const { id } = req.params
    return await Advertisement.findByIdAndDelete(id).then(result => {
        fs.unlink(`./uploads/ads/${result._id}.${result.picExt}`).then(() => {
            res.status(200).json({
                status: 200,
                message: "Successfully deleted!",
                data: result
            })
        }).catch(err => {
            res.status(500).json({
                status: 500,
                message: "Error",
                error: err
            })
        })
    }).catch(err => {
        res.status(500).json({
            status: 500,
            message: "Error",
            error: err
        })
    })
}