import mawad from "../models/mawad.js"

export const postMawad = async (req, res) => {
  const { program, classes, time, madah } = req.body
  const oneMawad = new mawad()
  oneMawad.program = program
  oneMawad.class = classes
  oneMawad.time = time
  oneMawad.madah = madah
  return await oneMawad.save().then(result => {
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

export const getMawad = async (req, res) => {
  return await mawad.find().then(result => {
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

export const deleteMawad = async (req, res) => {
  return await mawad.findByIdAndDelete(req.params.id).then(result => {
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
