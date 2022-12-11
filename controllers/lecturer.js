import Lecturer from "../models/Lecturer.js";

export const postLecturer = async (req, res) => {
    const { name, qualification, specialization } = req.body
    console.log(name + " " + qualification + " " + specialization)
    const lecturer = new Lecturer({
        lecturer_name: name,
        specialization: specialization,
        qualification: qualification
    })

    return await lecturer.save().then(result => {
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

export const getLecturers = async (req, res) => {
    return await Lecturer.find({}).then(result => {
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
    const { spec } = req.body
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
    const { id } = req.params
    return await Lecturer.find({ _id: id }).then(result => {
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

export const updateLecturer = async (req, res) => {
    const { id, name, spec, qual, details } = req.body
    return await Lecturer.findOneAndUpdate({ _id: id }, {
        lecturer_name: name,
        qualification: qual,
        specialization: spec
    }).then(result => {
        res.status(200).json({
            status: 200,
            message: "Successfully updated!",
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

export const deleteLecturer = async (req, res) => {
    return await Lecturer.findByIdAndDelete(req.params.id).then(result => {
        res.status(200).json({
            status: 200,
            message: "Successfully deleted!",
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