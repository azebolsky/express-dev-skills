module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

const skills = [
    {title: 'Javascript', level: 2},
    {title: 'Python', level: 1},
    {title: 'React', level: 1},
    {title: 'PostgreSQL', level: 1},
    {title: 'CSS', level: 2}
];

function deleteOne(id) {
    skills.splice(id, 1);
}

function create(skill) {
    skills.push(skill);
}

// will return all of the above skills
function getAll() {
    return skills;
}

function getOne(id) {
    const skillResult = skills[id];
    return skillResult;
};