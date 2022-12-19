import Associate from "../models/Associate.js";

export const postAssociate = async (req, res) => {
    const { name, desc, location } = req.body
    const pic = req.file
    const associate = new Associate({
        name: name,
        desc: desc,
        location: location
    })

    return await associate.save().then(result => {
        const id = result._id;
        fs.rename(pic.path, `./uploads/faculties/${id}.${pic.mimetype.split('/')[1]}`, (err) => {
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
    }).catch(err => {
        res.status(401).json({
            status: 401,
            message: "Error",
            error: err
        })
    })
}

export const getAssociates = async (req, res) => {
    return await Associate.find({}).then(result => {
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
export const getAssociate = async (req, res) => {
    return await Associate.findId(req.query.id).then(result => {
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

export const deleteAssociate = async (req, res) => {
    return await Associate.findByIdAndDelete(req.params.id).then(result => {
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
}