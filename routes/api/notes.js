const express = require('express')
const router = express.Router()

const notesCtrl = require('../../controllers/api/note')

// router.route('/notes', notesCtrl.getNotes)
// router.route('/create').post()
// router.route(/:id).get().put().delete()


// router.post('/notes/new', notesCtrl.create)
// router.post('/login', usersCtrl.logIn)

// router.route('/notes')
    // .get(notesCtrl.getNotes)
    // .post(notesCtrl.create)

// router.route('/:id')

router.get('/', notesCtrl.read)
router.post('/new', notesCtrl.create)


module.exports = router