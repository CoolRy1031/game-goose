import {Router} from 'express'
import * as reviewsCtrl from '../controllers/reviews.js'

const router = Router()

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

router.post('/:id', isLoggedIn, reviewsCtrl.create)

export {
  router
}