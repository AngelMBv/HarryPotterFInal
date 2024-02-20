document.addEventListener("DOMContentLoaded", function () {
    const casaSelector = document.getElementById("casaSelector");
    const casaImage = document.getElementById("casaImage");
    const casaName = document.getElementById("casaName");
    const casaFounder = document.getElementById("casaFounder");
    const casaValues = document.getElementById("casaValues");

    const personajeSelector = document.getElementById("personajeSelector");
    const personajeImage = document.getElementById("personajeImage");
    const personajeName = document.getElementById("personajeName");
    const personajeDescription = document.getElementById("personajeDescription");
    const personajeSpell = document.getElementById("personajeSpell");

    const personajes = {
        harry: "gryffindor",
        ron: "gryffindor",
        hermione: "gryffindor",
        cedric: "hufflepuff",
        luna: "ravenclaw",
        dumbledore: "gryffindor",
        sirius: "gryffindor",
        snape: "slytherin",
        draco: "slytherin",
        voldemort: "slytherin"
    };

    casaSelector.addEventListener("change", function () {
        const selectedCasa = casaSelector.value;
        casaImage.src = `img/${selectedCasa}.png`;

        // Restablecer la flip-card de personajes a la imagen por defecto
        personajeImage.src = "img/Logo2.png";

        // Restablecer la información de la flip-card de personajes
        personajeName.textContent = "";
        personajeDescription.textContent = "";
        personajeSpell.textContent = "";

        switch (selectedCasa) {
            case "gryffindor":
                casaName.textContent = "Gryffindor";
                casaFounder.textContent = "Godric Gryffindor";
                casaValues.textContent = "Valores: Valentía, Coraje, Audacia";
                break;
            case "slytherin":
                casaName.textContent = "Slytherin";
                casaFounder.textContent = "Salazar Slytherin";
                casaValues.textContent = "Valores: Astucia, Ambición, Determinación";
                break;
            case "hufflepuff":
                casaName.textContent = "Hufflepuff";
                casaFounder.textContent = "Helga Hufflepuff";
                casaValues.textContent = "Valores: Lealtad, Paciencia, Justicia";
                break;
            case "ravenclaw":
                casaName.textContent = "Ravenclaw";
                casaFounder.textContent = "Rowena Ravenclaw";
                casaValues.textContent = "Valores: Inteligencia, Creatividad, Sabiduría";
                break;
            default:
                casaName.textContent = "";
                casaFounder.textContent = "";
                casaValues.textContent = "";
                break;
        }

        personajeSelector.innerHTML = '<option value="">Selecciona tu personaje</option>';
        for (const personaje in personajes) {
            if (personajes[personaje] === selectedCasa) {
                const option = document.createElement("option");
                option.value = personaje;
                option.textContent = personaje.charAt(0).toUpperCase() + personaje.slice(1);
                personajeSelector.appendChild(option);
            }
        }
    });

    personajeSelector.addEventListener("change", function () {
        const selectedPersonaje = personajeSelector.value;
        personajeImage.src = `img/${selectedPersonaje}.png`;

        switch (selectedPersonaje) {
            case "harry":
                personajeName.textContent = "Harry Potter";
                personajeDescription.textContent = "El famoso mago y protagonista de la serie.";
                personajeSpell.textContent = "Hechizo más usado: Expecto Patronum";
                break;
            case "ron":
                personajeName.textContent = "Ron Weasley";
                personajeDescription.textContent = "Mejor amigo de Harry y Hermione.";
                personajeSpell.textContent = "Hechizo más usado: Wingardium Leviosa";
                break;
            case "hermione":
                personajeName.textContent = "Hermione Granger";
                personajeDescription.textContent = "Una de las brujas más inteligentes de su generación.";
                personajeSpell.textContent = "Hechizo más usado: Alohomora";
                break;
            case "cedric":
                personajeName.textContent = "Cedric Diggory";
                personajeDescription.textContent = "Un valiente mago de Hufflepuff.";
                personajeSpell.textContent = "Hechizo más usado: Lumos";
                break;
            case "luna":
                personajeName.textContent = "Luna Lovegood";
                personajeDescription.textContent = "Una estudiante de Ravenclaw conocida por su singularidad.";
                personajeSpell.textContent = "Hechizo más usado: Patronus";
                break;
            case "dumbledore":
                personajeName.textContent = "Albus Dumbledore";
                personajeDescription.textContent = "El director de Hogwarts y un poderoso mago.";
                personajeSpell.textContent = "Hechizo más usado: Locomotor Wibbly";
                break;
            case "sirius":
                personajeName.textContent = "Sirius Black";
                personajeDescription.textContent = "El padrino de Harry y un animago.";
                personajeSpell.textContent = "Hechizo más usado: Transformación Animagus";
                break;
            case "snape":
                personajeName.textContent = "Severus Snape";
                personajeDescription.textContent = "Un maestro de pociones y espía.";
                personajeSpell.textContent = "Hechizo más usado: Sectumsempra";
                break;
            case "draco":
                personajeName.textContent = "Draco Malfoy";
                personajeDescription.textContent = "Un estudiante de Slytherin y rival de Harry.";
                personajeSpell.textContent = "Hechizo más usado: Expelliarmus";
                break;
            case "voldemort":
                personajeName.textContent = "Lord Voldemort";
                personajeDescription.textContent = "El mago tenebroso y antagonista principal.";
                personajeSpell.textContent = "Hechizo más usado: Avada Kedavra";
                break;
            default:
                personajeName.textContent = "";
                personajeDescription.textContent = "";
                personajeSpell.textContent = "";
                break;
        }
    });
});

