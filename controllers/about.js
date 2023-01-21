import about from "../models/about.js"

export const postAbout = async (req, res) => {
  const { category, point } = req.body
  const doc = new about()
  doc.category = category
  doc.point = point
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

export const getAbout = async (req, res) => {
  return await about.find().then(result =>
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

export const deleteAbout = async (req, res) => {
  return await about.findOneAndDelete({ _id: req.params.id }).then(result => {
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
