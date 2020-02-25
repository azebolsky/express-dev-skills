const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');

// we will mount this router/skills
// / represents everything after skills

router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);
// equivalent to post to /skills

module.exports = router;
