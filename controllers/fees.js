import Fees from "../models/fees.js"

export const postFees = async (req, res) => {
  const { name, pound, dollar } = req.body
  const fee = new Fees()
  fee.name = name
  fee.pound = pound
  fee.dollar = dollar
  return await fee.save().then(result => {
    res.status(201).json({
      status: 201,
      message: "أضيفت بتمام",
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

export const getFees = async (req, res) => {
  return await Fees.find().then(result => {
    res.status(200).json({
      status: 200,
      message: "ظهرت بتمام",
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

export const delFee = async (req, res) => {
  return await Fees.deleteOne({ _id: req.params.id }).then(result => {
    res.status(200).json({
      status: 200,
      message: "حذفت بتمام"
    })
  }).catch(err => {
    res.status(500).json({
      status: 500,
      message: "Error!",
      error: err
    })
  })
}