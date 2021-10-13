"use strict";
var persona = {
    id: 1,
    nombre: "Pepito Perez",
    edad: 43,
    genero: 1,
    fecnac: new Date(1979, 8, 21),
    email: "pepito.perez@gmail.com",
    telefono: "111111111",
    rut: "11111111-1",
    region: 1,
    comuna: 3,
    usv: {
        estatura: "1.75m",
        peso: "70kg",
        freqcardiaca: 70
    },
    antecedentes: [
        {
            id: 1,
            descripcion: "Hospitalizado por bronquitis",
            fecha: new Date(2005, 4, 23)
        },
        {
            id: 2,
            descripcion: "Hospitalizado por intoxicacion",
            fecha: new Date(2005, 4, 23)
        }
    ]
};
var generos = [
    "Sin definir",
    "Masculino",
    "Femenino"
];
var regiones = [
    {
        id: 1,
        nombre: "Valparaiso",
        comunas: [
            {
                id: 1,
                nombre: "Valparaiso"
            },
            {
                id: 2,
                nombre: "Quilpue"
            },
            {
                id: 3,
                nombre: "Viña del Mar"
            }
        ]
    },
    {
        id: 2,
        nombre: "Metropolitana",
        comunas: [
            {
                id: 1,
                nombre: "Santiago"
            },
            {
                id: 2,
                nombre: "Puente Alto"
            },
            {
                id: 3,
                nombre: "La Florida"
            }
        ]
    }
];
function calcEdad(fecnac) {
    var hoy = new Date();
    var t_month = hoy.getMonth();
    var t_day = hoy.getDate();
    var t_year = hoy.getFullYear();
    var month = fecnac.getMonth();
    var day = fecnac.getDate();
    var year = fecnac.getFullYear();
    var edad = t_year - year;
    if (month > t_month) {
        edad--;
    }
    else if (month < t_month) {
        edad++;
    }
    else if (month == t_month) {
        if (day < t_day)
            edad++;
    }
    return edad;
}
function getEdad(fecnac) {
    var month_s;
    var month = fecnac.getMonth();
    var day = fecnac.getDate().toString();
    var year = fecnac.getFullYear().toString();
    var edad = calcEdad(fecnac);
    switch (month) {
        case 0:
            month_s = "Enero";
            break;
        case 1:
            month_s = "Febrero";
            break;
        case 2:
            month_s = "Marzo";
            break;
        case 3:
            month_s = "Abril";
            break;
        case 4:
            month_s = "Mayo";
            break;
        case 5:
            month_s = "Junio";
            break;
        case 6:
            month_s = "Julio";
            break;
        case 7:
            month_s = "Agosto";
            break;
        case 8:
            month_s = "Septiembre";
            break;
        case 9:
            month_s = "Octubre";
            break;
        case 10:
            month_s = "Noviembre";
            break;
        case 11:
            month_s = "Diciembre";
            break;
    }
    return month_s + " " + day + ", " + year + ", " + edad + " años";
}
function getRegion(id) {
    for (var i = 0; i < regiones.length; i++) {
        if (regiones[i].id == id) {
            return regiones[i].nombre;
        }
    }
    return "No se encontro la region";
}
function getComuna(idRegion, id) {
    for (var i = 0; i < regiones.length; i++) {
        if (regiones[i].id == idRegion) {
            for (var j = 0; j < regiones[i].comunas.length; j++) {
                if (regiones[i].comunas[j].id == id) {
                    return regiones[i].comunas[j].nombre;
                }
            }
        }
    }
    return "No se encontro la comuna";
}
function deleteAnte(id) {
    for (var i = 0; i < persona.antecedentes.length; i++) {
        if (persona.antecedentes[i].id == id) {
            persona.antecedentes[i] = null;
        }
    }
}
