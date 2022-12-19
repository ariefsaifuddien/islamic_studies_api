import Fees from "../models/Fees";

export const postFees = async (req, res) => {
    const { conditions, pounds, dollar } = req.body
    const fee = new Fees()
    fee.conditions.push(...conditions)
    fee.pounds = pounds
    fee.dollars = dollar
    return await fee.save().then(result => {
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

export const getFees = async (req, res) => {
    return await Fees.find({}).then(result => {
        res.status(200).json({
            status: 200,
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