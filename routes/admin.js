import express from "express"
import { addAdmin, adminData, allAdmins, deleteAdmin, getAdmin } from "../controllers/admin.js"

export const adminRouter = express.Router()

adminRouter.post('/register', addAdmin)
adminRouter.post('/login', getAdmin)
adminRouter.get('/', allAdmins)
adminRouter.get('/:id', adminData)
adminRouter.delete('/delete/:id', deleteAdmin)