import {Router} from 'express'
import * as gamesCtrl from '../controllers/games.js'

const router = Router()

function isLoggedIn(req, res, next){
  if (req.isAuthenticated()) return next();
  res.redirect('auth/google')
}

router.post('/search', isLoggedIn, gamesCtrl.search)
router.get('/:id', isLoggedIn, gamesCtrl.show)

export{
  router
}
