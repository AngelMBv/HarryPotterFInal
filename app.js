const express = require('express');
const app = express();

// Datos de ejemplo de personajes
const characters = [
    { name: "Harry Potter", house: "Gryffindor", role: "Estudiante de Hogwarts" },
    { name: "Hermione Granger", house: "Gryffindor", role: "Estudiante de Hogwarts" },
    { name: "Ron Weasley", house: "Gryffindor", role: "Estudiante de Hogwarts" },
    { name: "Albus Dumbledore", house: "Gryffindor", role: "Director de Hogwarts" },
    { name: "Severus Snape", house: "Slytherin", role: "Profesor de Hogwarts" },
    { name: "Sirius Black", house: "Gryffindor", role: "Miembro de la Orden del Fénix" },
    { name: "Bellatrix Lestrange", house: "Slytherin", role: "Mortífago" },
    { name: "Draco Malfoy", house: "Slytherin", role: "Estudiante de Hogwarts" },
    { name: "Neville Longbottom", house: "Gryffindor", role: "Estudiante de Hogwarts" },
    { name: "Luna Lovegood", house: "Ravenclaw", role: "Estudiante de Hogwarts" },
    { name: "Ginny Weasley", house: "Gryffindor", role: "Estudiante de Hogwarts" },
    { name: "Fred Weasley", house: "Gryffindor", role: "Estudiante de Hogwarts" },
    { name: "George Weasley", house: "Gryffindor", role: "Estudiante de Hogwarts" },
    { name: "Cedric Diggory", house: "Hufflepuff", role: "Estudiante de Hogwarts" },
    { name: "Cho Chang", house: "Ravenclaw", role: "Estudiante de Hogwarts" },
    { name: "Horace Slughorn", house: "Slytherin", role: "Profesor de Hogwarts" },
    { name: "Gilderoy Lockhart", house: "Ravenclaw", role: "Profesor de Hogwarts" },
    { name: "Dolores Umbridge", house: "Slytherin", role: "Profesor de Hogwarts" },
    { name: "Minerva McGonagall", house: "Gryffindor", role: "Profesor de Hogwarts" },
    { name: "Rubeus Hagrid", house: "Gryffindor", role: "Guardabosques de Hogwarts" },
    { name: "Remus Lupin", house: "Gryffindor", role: "Miembro de la Orden del Fénix" },
    { name: "Nymphadora Tonks", house: "Hufflepuff", role: "Miembro de la Orden del Fénix" },
    { name: "Kingsley Shacklebolt", house: "Unknown", role: "Miembro de la Orden del Fénix" },
    { name: "Arthur Weasley", house: "Gryffindor", role: "Empleado del Ministerio de Magia" },
    { name: "Molly Weasley", house: "Gryffindor", role: "Empleado del Ministerio de Magia" },
    { name: "Percy Weasley", house: "Gryffindor", role: "Empleado del Ministerio de Magia" },
    { name: "Cornelius Fudge", house: "Unknown", role: "Ministro de Magia" },
    { name: "Rufus Scrimgeour", house: "Unknown", role: "Ministro de Magia" },
    { name: "Dolores Umbridge", house: "Slytherin", role: "Alto oficial del Ministerio de Magia" },
    { name: "Kingsley Shacklebolt", house: "Unknown", role: "Empleado del Ministerio de Magia" },
    { name: "Percy Weasley", house: "Gryffindor", role: "Empleado del Ministerio de Magia" },
    { name: "Barty Crouch Jr.", house: "Unknown", role: "Mortífago" },
    { name: "Peter Pettigrew", house: "Gryffindor", role: "Mortífago" },
    { name: "Lucius Malfoy", house: "Slytherin", role: "Mortífago" },
    { name: "Regulus Black", house: "Slytherin", role: "Mortífago" },
    { name: "Fenrir Greyback", house: "Unknown", role: "Mortífago" },
    { name: "Yaxley", house: "Unknown", role: "Mortífago" },
    { name: "Antonin Dolohov", house: "Unknown", role: "Mortífago" },
    { name: "Walden Macnair", house: "Unknown", role: "Mortífago" },
    { name: "Augustus Rookwood", house: "Unknown", role: "Mortífago" },
    { name: "Igor Karkaroff", house: "Unknown", role: "Mortífago" },
    { name: "Bellatrix Lestrange", house: "Slytherin", role: "Mortífago" },
    { name: "Rodolphus Lestrange", house: "Unknown", role: "Mortífago" },
    { name: "Rabastan Lestrange", house: "Unknown", role: "Mortífago" },
    { name: "Gibbon", house: "Unknown", role: "Mortífago" },
    { name: "Alecto Carrow", house: "Unknown", role: "Mortífago" },
    { name: "Amycus Carrow", house: "Unknown", role: "Mortífago" },
];

// Ruta para obtener todos los personajes
app.get('/characters', (req, res) => {
    res.json(characters);
});

// Ruta para obtener estudiantes de Hogwarts
app.get('/students', (req, res) => {
    const hogwartsStudents = characters.filter(character => character.role === "Estudiante de Hogwarts");
    res.json(hogwartsStudents);
});

// Ruta para obtener miembros de la Orden del Fénix
app.get('/orderofthephoenix', (req, res) => {
    const orderMembers = characters.filter(character => character.role === "Miembro de la Orden del Fénix");
    res.json(orderMembers);
});

// Ruta para obtener mortífagos
app.get('/deathEaters', (req, res) => {
    const deathEaters = characters.filter(character => character.role === "Mortífago");
    res.json(deathEaters);
});

// Ruta para obtener empleados del Ministerio de Magia
app.get('/ministryEmployees', (req, res) => {
    const ministryEmployees = characters.filter(character => character.role === "Empleado del Ministerio de Magia");
    res.json(ministryEmployees);
});

// Ruta para obtener personajes por casa de Hogwarts
app.get('/hogwarts/:house', (req, res) => {
    const house = req.params.house;
    const hogwartsCharacters = characters.filter(character => character.house === house);
    res.json(hogwartsCharacters);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
