import visit from "../models/visit.js"

export const addVisitor = async (req, res) => {
  const { count } = req.body

  const counts = new visit({ count: 0 })

  await visit.find().then(c => {
    if (!c[0]) {
      counts.save().then(o => res.json({ message: 'الزائر', data: o }))
    }

    if (c[0]) {
      visit.updateOne({ _id: c[0]._id }, { count: c[0].count + JSON.parse(count) }).then(data => {
        return res.status(201).json({
          status: 201,
          message: 'الزائر!',
        })
      })
    }
  })
}

export const getVisitor = async (req, res) => {
  await visit.find().then(counts => {
    res.status(200).json({
      status: 200,
      message: 'ظهرت بتمام',
      data: counts[0]?.count
    })
  }).catch(err => {
    res.status(500).json({
      status: 500,
      message: "Error!",
      error: err
    })
  })
}