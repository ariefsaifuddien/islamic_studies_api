import admin from "../models/admin.js"
import bcrypt from 'bcrypt'

export const addAdmin = async (req, res) => {
  const { name, email, password } = req.body

  const salt = await bcrypt.genSalt(10)

  const admins = new admin({
    name, email, password: await bcrypt.hash(password, salt)
  })

  return await admin.find({ email }).then(result => {
    if (result[0]) {
      return res.status(400).json({
        status: 400,
        message: 'المشرف  بهذا الاسم موجود',
      })

    } else if (!result[0]) {
      return admins.save().then(data => {
        res.status(201).json({
          status: 201,
          message: 'أنت مسجل كمشررف',
          data
        })
      }).catch(err => {
        res.status(402).json({
          status: 402,
          message: err.message
        })
      })
    }
  })
}

export const getAdmin = async (req, res) => {
  const { email, password } = req.body
  const adminLog = await admin.findOne({ email })
  if (adminLog && password) {

    const login = await bcrypt.compare(password, adminLog.password)

    if (login) {
      return await admin.findOne({ email: adminLog.email }).then(data => {

        res.status(200).json({
          message: 'دخلت بجاح',
          status: 200,
          data,
        })
      }).catch(err => res.json({
        message: 'فشلت المحاولة، لست مشرفا',
        error: err.message
      }))
    } else {
      return res.status(400).json({
        status: 400,
        message: 'أدخل البيانات الصحيحة'
      })
    }
  } else {
    return res.status(400).json({
      status: 400,
      message: 'أدخل البيانات الصحيحة'
    })
  }
}

export const adminData = async (req, res) => {
  return await admin.find({ _id: req.params.id }).then(data => {
    if (data[0]) {
      res.status(200).json({
        status: 200,
        message: 'ظهرت بنجاح',
        data
      })
    } else {
      res.status(404).json({
        status: 404,
        message: 'لا يوجد المشرف',
      })
    }
  }).catch(err => {
    res.status(400).json({
      status: 400,
      message: err.message
    })
  })
}

export const allAdmins = async (req, res) => {
  return await admin.find().then(data => {
    if (data[0]) {
      res.status(200).json({
        status: 200,
        message: 'ظهرت بنجاح',
        data
      })
    } else {
      res.status(404).json({
        status: 404,
        message: 'لا يوجد المشرف',
      })
    }
  }).catch(err => {
    res.status(400).json({
      status: 400,
      message: err.message
    })
  })
}

export const deleteAdmin = async (req, res) => {
  return await admin.find({ _id: req.params.id }).then(data => {
    if (data[0]) {
      admin.deleteOne({ _id: req.params.id }).then(re => {
        res.status(200).json({
          status: 200,
          message: 'حذفت بنجاح'
        })
      })
    } else {
      res.status(404).json({
        status: 404,
        message: 'لا يوجد المشرف',
      })
    }
  }).catch(err => {
    res.status(400).json({
      status: 400,
      message: err.message
    })
  })
}