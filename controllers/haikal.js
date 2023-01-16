import haikal from "../models/haikal.js"

export const postHaikal = async (req, res) => {
  const { category, works, description } = req.body
  const oneHaikal = new haikal()
  oneHaikal.category = category
  oneHaikal.description = description
  oneHaikal.works.push(...works)
  return await oneHaikal.save().then(result => {
    res.status(201).json({
      status: 201,
      message: "أضيفت بنجاح",
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

export const getHaikal = async (req, res) => {
  return await haikal.find().then(result => {
    res.status(200).json({
      status: 200,
      message: "ظهرت بنجاح",
      data: result
    })
  }).catch(err => {
    res.status(400).json({
      status: 400,
      message: "Error",
      error: err
    })
  })
}

export const deleteHaikal = async (req, res) => {
  return await haikal.findByIdAndDelete(req.params.id).then(result => {
    res.status(200).json({
      status: 200,
      message: "حذفت بنجاح"
    })
  }).catch(err => {
    res.status(400).json({
      status: 400,
      message: "Error",
      error: err
    })
  })
}
