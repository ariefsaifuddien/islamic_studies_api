import haikah from "../models/haikah";

export const postHaikah = async (req, res) => {
    const { title, work, details } = req.body
    const oneHaikah = new haikah()
    oneHaikah.title = title
    oneHaikah.work = work
    oneHaikah.details.push(...details)
    return await oneHaikah.save().then(result => {
        res.status(201).json({
            status: 201,
            message: "Successfully fetched!",
            data: result
        })
    }).catch(err => {
        console.log(err)
        res.status(500).json({
            status: 500,
            message: "Error!",
            error: err
        })
    })
}

export const getHaikah = async (req, res) => {
    return await haikah.find({}).toArray().then(result => {
        console.log(result)
        res.status(200).json({
            status: 200,
            message: "Successfully fetched!",
            data: result
        })
    }).catch(err => {
        console.log(err)
        res.status(400).json({
            status: 400,
            message: "Error",
            error: err
        })
    })
}

export const deleteHaikah = async (req, res) => {
    return await haikah.findByIdAndDelete(req.params.id).then(result => {
        console.log(result)
        res.status(200).json({
            status: 200,
            message: "Successfully fetched!",
            data: result
        })
    }).catch(err => {
        console.log(err)
        res.status(400).json({
            status: 400,
            message: "Error",
            error: err
        })
    })
}
