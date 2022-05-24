let projects=[
    {
        id:1,
        nombreProyecto: 'Forja',
        descripcion:'Proyecto académico de diseño web de la empresa Forja, uso de HTML y CSS, Mobile First.',
        enlaceRepositorio:'https://github.com/VivianaMurillom/project_forja',
        enlaceVista:'https://vivianamurillom.github.io/project_forja/',
        imagenProyecto:'https://prnt.sc/YP4frfPLhsEx'
    },
    {
        id:2,
        nombreProyecto: 'Forja javaScript',
        descripcion:'Proyecto académico basado en el proyecto Forja donde se integra funcionalidades javaScript.',
        enlaceRepositorio:'https://github.com/VivianaMurillom/forja_javaScript',
        enlaceVista:'https://vivianamurillom.github.io/forja_javaScript/',
        imagenProyecto:'https://prnt.sc/YP4frfPLhsEx'
    },
    {
        id:3,
        nombreProyecto: 'Redvindicadas',
        descripcion:'Colaboración al proyecto académico informativo sobre feminismo y sexualidad.',
        enlaceRepositorio:'https://github.com/ricoththth/redvindicadas',
        enlaceVista:'https://ricoththth.github.io/redvindicadas/',
        imagenProyecto:'./img_projects/redvindicadas.jpg'
    }
]

export function getAllProjects(){
    return projects;
}