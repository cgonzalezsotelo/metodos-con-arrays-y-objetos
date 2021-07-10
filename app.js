document.write('<p>Estadisticas centro medico ñuñoa</p>');

var radiologias = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

var traumatologias = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];

var dentals = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];

//Agregar código para el desafio 2 aquí

// 1.- Horas agregadas a Traumatología con método concat

let addHoursTraumatology = [{
    hora: "09:00",
    Especialista: "RENÉ POBLETE",
    Paciente: "ANA GELLONA",
    RUT: "13123329-7",
    Previsión: "ISAPRE"
}, {
    hora: "09:30",
    Especialista: "MARIA SOLAR",
    Paciente: "RAMIRO ANDRADE",
    RUT: "12221451-K",
    Previsión: "FONASA" 
}, {
    hora: "10:00",
    Especialista: "RAUL LOYOLA",
    Paciente: "CARMEN ISLA",
    RUT: "10112348-3",
    Previsión: "ISAPRE"
}, {
    hora: "10:30",
    Especialista: "ANTONIO LARENAS",
    Paciente: "PABLO LOAYZA",
    RUT: "13453234-1",
    Previsión: "ISAPRE"
}, {
    hora: "12:00",
    Especialista: "MATIAS ARAVENA",
    Paciente: "SUSANA POBLETE",
    RUT: "14345656-6",
    Previsión: "FONASA"
}];

let hoursTraumatology = traumatologias.concat(addHoursTraumatology);
console.log(hoursTraumatology);

// 2.- Eliminar primera y última hora de radiología con métodos shift y pop respectivamente.

radiologias.pop();
radiologias.shift();
console.log(radiologias);

// 3.- Imprimir consultas médicas dental a través de métodos join.

for (let dental of dentals) {
    dental + "<br>"
    document.write(`${dental.hora} - ${dental.especialista} - ${dental.paciente} - ${dental.rut} - ${dental.prevision} <br>`);
    }

// 4.- Imprimir todos los pacientes

const allPatients = radiologias.concat(dentals, traumatologias)

allPatients.forEach((patient) => {
    document.write(`${patient.paciente} <br>`)
}) 

// 5.- Filtrar pacientes ISAPRE

let patientsDentalIsapre = dentals.filter(patient => {
    if (patient.prevision === "ISAPRE"){
        return patient
    }
})

console.log(patientsDentalIsapre)

// 6.- Filtrar pacientes FONASA

let patientTraumatologyFonasa = traumatologias.filter(patient => {
    if (patient.prevision === "FONASA") {
        return patient
    }
})

console.log(patientTraumatologyFonasa)

//Agregar código para el desafio 2 aquí

document.write(`<p>Cantidad de atenciones para Radiología: ${radiologias.length}</p>`);
document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologias.length}</p>`);
document.write(`<p>Cantidad de atenciones para Dental: ${dentals.length}</p>`);


document.write(`<p>Primera atencion: ${radiologias[0].paciente} - ${radiologias[0].prevision} | Última atención: ${radiologias[radiologias.length -1].paciente} - ${radiologias[radiologias.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${traumatologias[0].paciente} - ${traumatologias[0].prevision} | Última atención: ${traumatologias[traumatologias.length -1].paciente} - ${traumatologias[traumatologias.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${dentals[0].paciente} - ${dentals[0].prevision} | Última atención: ${dentals[dentals.length -1].paciente} - ${dentals[dentals.length -1].prevision}.</p>`);