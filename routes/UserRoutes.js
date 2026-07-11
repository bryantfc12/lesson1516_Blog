import express from 'express'
const router = express.Router()

import {userForm, storeUser, dashboardUser} from '../controllers/UserController.js'

// buat link untuk server js bisa di akses
router.get("/", dashboardUser)
router.get("/create", userForm)
router.post("/store", storeUser)

export default router