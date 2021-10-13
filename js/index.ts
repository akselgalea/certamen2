interface Antecedente {
    id: number;
    descripcion: string;
    fecha: Date;
}

interface Paciente {
    id : 1,
    nombre : string,
    edad : number,
    genero : number,
    fecnac : Date,
    telefono : string,
    email : string,
    rut : string,
    region : number,
    comuna : number,
    usv : {
        estatura : string,
        peso : string,
        freqcardiaca : number
    }
    antecedentes : Array<Antecedente>
}

interface Comuna {
    id : number;
    nombre : string;
}

interface Region {
    id : number;
    nombre : string;
    comunas : Array<Comuna>;
}

let persona : Paciente = {
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

    
}

let generos = [
    "Sin definir",
    "Masculino",
    "Femenino"
]

let regiones : Array<Region> = [
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

function calcEdad(fecnac : Date) {
    let hoy = new Date();
    let t_month = hoy.getMonth();
    let t_day = hoy.getDate();
    let t_year = hoy.getFullYear();

    let month = fecnac.getMonth();
    let day = fecnac.getDate();
    let year = fecnac.getFullYear();

    let edad = t_year-year;

    if(month > t_month) {
        edad--;
    } else if(month < t_month) {
        edad++;
    } else if(month == t_month){
        if(day < t_day) edad++;
    }

    return edad;
}

function getEdad(fecnac : Date) {
    let month_s;
    let month = fecnac.getMonth();
    let day = fecnac.getDate().toString();
    let year = fecnac.getFullYear().toString();
    let edad = calcEdad(fecnac);
    
    switch(month) {
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
    for(let i = 0; i < regiones.length; i++) {
        if(regiones[i].id == id) {
            return regiones[i].nombre;
        }
    }

    return "No se encontro la region"
}

function getComuna(idRegion, id) {
    for(let i = 0; i < regiones.length; i++) {
        if(regiones[i].id == idRegion) {
            for(let j = 0; j < regiones[i].comunas.length; j++) {
                if(regiones[i].comunas[j].id == id) {
                    return regiones[i].comunas[j].nombre;
                }
            }
        }
    }

    return "No se encontro la comuna"
}

function deleteAnte(id) {
    for(let i = 0; i < persona.antecedentes.length; i++) {
        if(persona.antecedentes[i].id == id) {
            persona.antecedentes[i] = null;
        }
    }
}