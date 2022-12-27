import About from "../models/About.js";

export const postAbout = async (req, res) => {
    const { visions, mission, values } = req.body
    const doc = new About({ _id: 0 })
    doc.visions.push(visions)
    doc.mission.push(mission)
    doc.values.push(values)
    return await doc.save().then(result => {
        res.status(200).json({
            status: 200,
            message: "Successfully posted!",
            data: result
        })
    }).catch(err => {
        res.status(401).json({
            status: 401,
            message: "Error",
            error: err
        })
    })
}

export const getAbout = async (req, res) => {
    return await About.find({}).toArray().then(result =>
        res.status(200).json({
            status: 200,
            message: "Successfully fetched!",
            data: result
        })
    ).catch(err => {
        res.status(401).json({
            status: 401,
            message: "Error",
            error: err
        })
    })
}

export const deleteAbout = async (req, res) => {
    return await About.findOneAndDelete({ _id: 0 }).then(result => {
        res.status(200).json({
            status: 200,
            message: "Successfully deleted!",
            data: result
        })
    }).catch(err => {
        res.status(500).json({
            status: 500,
            message: "Error!",
            error: err
        })
    })
}
