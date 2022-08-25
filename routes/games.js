import {Router} from 'express'
import * as gamesCtrl from '../controllers/games.js'

const router = Router()

function isLoggedIn(req, res, next){
  if (req.isAuthenticated()) return next();
  res.redirect('auth/google')
}

router.post('/search', isLoggedIn, gamesCtrl.search)
router.get('/:id', isLoggedIn, gamesCtrl.show)
router.patch('/:id/addToCollection', isLoggedIn, gamesCtrl.addToCollection)
router.patch('/:id/removeFromCollection', isLoggedIn, gamesCtrl.removeFromCollection)

export{
  router
}
