import kuepa from './components/study/Kuepa.jfif';

let studies=[
    {
        id:1,
        nombre:'Tech Power',
        institucion: 'Kuepa Edutech',
        titulo: 'Técnico laboral en Procesamiento y Digitación de datos',
        fechaInicio: 'Enero de 2022',
        fechaFinalizacion: 'Agosto de 2022',
        imagen: {kuepa}
    },
    {
        id:2,
        nombre:'Misión TIC',
        institucion: 'Universidad de Antioquia',
        titulo: 'Programa de Formación Habilidades en programación',
        fechaInicio: 'Mayo de 2021',
        fechaFinalizacion: 'Diciembre de 2021'
    },
    {
        id:3,
        nombre:'Logística',
        institucion: 'Servicio Nacional Aprendizaje SENA',
        titulo: 'Tecnólogo en Gestión Logística',
        fechaInicio: 'Enero de 2015',
        fechaFinalizacion: 'Noviembre de 2016'
    }
]

export function getAllStudies(){
    return studies;
}

export function getStudy(id){
    return studies.find((theStudy)=> theStudy.id===id)
}