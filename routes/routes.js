import express from 'express'
import launcherController from '../controllers/launcherController.js'
import instanceController from '../controllers/instanceController.js'
const router = express.Router()

router.get('/launcher/config', launcherController.getConfig)
router.get('/launcher/news', launcherController.getNews)
router.get('/files', instanceController.getList)
router.get('/files/:instance', instanceController.getInstance)
router.get('/instances/:instance/:fileName', instanceController.getDownloadFile)

export default router