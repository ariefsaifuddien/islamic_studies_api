import haikal from "../models/haikal.js"

export const postHaikal = async (req, res) => {
  const { category, works, description } = req.body
  const oneHaikal = new haikal()
  oneHaikal.category = category
  oneHaikal.position = category == 1 ? 'مجلس كلية الدراسات الإسلامية' : category == 2 ? 'عميد الكلية' : category == 3 ? 'نائب عميد الكلية' : category == 4 ? 'رؤوساء الأقسام' : category == 5 ? 'مسجل الكلية' : category == 6 ? 'رئيس وحدة الشؤون التعليمية' : category == 7 ? 'رئيس وحدة الشؤون الثقافية والاجتماعية' : category == 8 ? 'رئيس وحدة شؤون الخدمة المجتمعية' : category == 9 ? 'رئيس وحدة الكليات المنتسبة' : category == 10 ? 'رئيس وحدة شؤون الجودة وترقية الأداء' : 'رئيس وحدة شؤون الدراسات العليا'
  oneHaikal.description = description
  oneHaikal.works.push(...works)

  return await haikal.find({ category }).then(async rest => {
    console.log(rest)

    if (rest[0]) {
      const wor = []
      wor.push(...works)
      await haikal.findOneAndUpdate({ _id: rest[0]._id }, {
        description,
        works: wor
      }).then(result => {
        res.status(201).json({
          status: 201,
          message: "جددت بنجاح",
          data: result
        })
      }).catch(err => {
        res.status(500).json({
          status: 500,
          message: "Error!",
          error: err
        })
      })
    } else {
      await oneHaikal.save().then(result => {
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
  }).catch(err => {
    res.status(500).json({
      status: 500,
      message: "Error!",
      error: err
    })
  })
}

export const getHaikal = async (req, res) => {
  return await haikal.find().sort('category').then(result => {
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
