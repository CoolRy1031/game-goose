import { Router } from 'express'
import * as messagesCtrl from "../controllers/messages.js"

const router = Router()

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

router.get('/', isLoggedIn, messagesCtrl.index)
router.post('/', isLoggedIn, messagesCtrl.create)
router.get(':id', isLoggedIn, messagesCtrl.show)
router.post(':id', isLoggedIn, messagesCtrl.reply)

export {
  router
}