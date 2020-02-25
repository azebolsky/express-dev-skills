const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
};

function deleteSkill(req, res) {
    const skillId = req.params.id;
    Skill.deleteOne(skillId);
    res.redirect('/skills');
}

function create(req, res) {
    const skill = req.body;
    skill.level = 1;
    Skill.create(req.body);
    // data has changed so use redirect
    res.redirect('/skills');
}

function newSkill(req, res) {
    res.render('skills/new'); // skills/new in views does not exist yet!
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}

function show(req, res) {
    const skillId = req.params.id;
    const skill = Skill.getOne(skillId);
    res.render('skills/show', {
        skill,
        skillId
    });
};