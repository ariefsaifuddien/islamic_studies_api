import tasjeel from "../models/tasjeel.js"

export const postTasjeel = async (req, res) => {
  const { sharat } = req.body
  const doc = new tasjeel()
  doc.sharat = sharat
  return await doc.save().then(result => {
    res.status(200).json({
      status: 200,
      message: "أضيفت بنجاح",
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

export const getTasjeel = async (req, res) => {
  return await tasjeel.find().then(result =>
    res.status(200).json({
      status: 200,
      message: "ظهرت بنجاح",
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

export const deleteTasjeel = async (req, res) => {
  return await tasjeel.findOneAndDelete({ _id: req.params.id }).then(result => {
    res.status(200).json({
      status: 200,
      message: "حذفت بنجاح",
    })
  }).catch(err => {
    res.status(500).json({
      status: 500,
      message: "Error!",
      error: err
    })
  })
}
