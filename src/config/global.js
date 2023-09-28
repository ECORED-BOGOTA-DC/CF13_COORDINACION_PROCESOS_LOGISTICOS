export default {
  global: {
    componenteFormativo: 'Dirigir el talento humano',
    descripcionCurso:
      'En este componente formativo se desarrollan los diferentes ejes temáticos sobre el direccionamiento del talento humano en las organizaciones, encauzado al sistema logístico integral organizacional, donde se proyectan y planean actividades de mercadeo, dirigir el talento humano, generar propuestas de mejoramiento del ambiente organizacional, coordinar y apoyar el programa de seguridad y salud en el trabajo y la selección del capital humano, entre otros.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/float-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/float-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/float-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conceptos generales gestión del talento humano',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Gestión del conocimiento',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Capital humano',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Planeación estratégica del talento humano',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Importancia del talento humano en las organizaciones',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Responsabilidad del talento humano en las organizaciones',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión del talento humano',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Dirección del talento humano',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Funciones de la dirección del talento humano',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Entrada, transformación y salida',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Manual de procesos y procedimientos logísticos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Programa de Seguridad y Salud en el Trabajo (SST)',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'El talento humano en la gestión logística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Gestión del talento humano por competencias',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Necesidades del talento humano en los procesos logísticos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Perfiles de cargos en los procesos logísticos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Capacitación y desarrollo del talento humano en los procesos logísticos',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Evaluación y plan de mejora del talento humano',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Evaluación del talento humano',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Evaluación del desempeño',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Técnicas de evaluación',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Mejoramiento continuo',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Plan de capacitación',
            hash: 't_4_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/121523_CF013_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Necesidades del talento humano en los procesos logísticos',
      referencia:
        'Armijos, F. Bermúdez, A. & Mora N. (2009). <em>Gestión de administración de los Recursos Humanos.</em>',
      tipo: 'Articulo',
      link:
        'http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S2218-36202019000400163',
    },
  ],
  glosario: [
    {
      termino: 'Accidente laboral',
      significado:
        'evento que sucede dentro de la empresa en donde uno o más colaboradores presentan una dificultad de salud física o mental inesperada, que lo afecta en el desarrollo de sus labores.',
    },
    {
      termino: 'Análisis',
      significado:
        'distinción y separación de las partes de algo para conocer su composición. (RAE, 2020).',
    },
    {
      termino: 'Análisis ocupacional',
      significado:
        'proceso en el que se identifican las necesidades de una ocupación o perfil ocupacional, pueden verse las aptitudes y responsabilidades que las personas deben tener para desempeñar satisfactoriamente una función.',
    },
    {
      termino: 'Competencia',
      significado:
        'habilidad demostrada para aplicar conocimientos y aptitudes (ISO 9000:2000).',
    },
    {
      termino: 'Eficacia',
      significado: 'indicador de metas, objetivos, acercamiento al logro.',
    },
    {
      termino: 'Eficiencia',
      significado:
        'indicador de menor costo de una meta según los factores usados para ello.',
    },
    {
      termino: 'Enfermedad profesional',
      significado:
        'enfermedad que es generada a causa del cumplimiento y desarrollo de actividades laborales en una persona.',
    },
    {
      termino: 'Planificación administrativa',
      significado:
        'proceso racional de previsión, estructuración, diseño y asignación óptima de recursos organizaciones, para alcanzar resultados en un tiempo y espacio dados.',
    },
    {
      termino: 'Reclutamiento',
      significado:
        'es una actividad de la empresa que se ocupa de atraer a las personas adecuadas para un determinado puesto de trabajo.',
    },
    {
      termino: 'Vacante',
      significado:
        'puesto de trabajo disponible en la empresa que aún no está cubierto.',
    },
  ],
  referencias: [
    {
      referencia:
        'ANDI Asociación Nacional de Empresarios de Colombia. (2020). <em>Obligaciones de los empleadores.</em>',
      link:
        'https://cmdcertification.com/wp-content/uploads/2018/09/02-DIA-3-Lectura-y-Taller-1.pdf',
    },
    {
      referencia:
        'Chiavenato, I. (2007). <em>Administración Recursos Humanos.</em> Mc GrawHill.',
      link: '',
    },
    {
      referencia:
        'Escudero, M. J. (2013). <em>Gestión Logística y Comercial.</em> Mc GrawHill.',
      link: '',
    },
    {
      referencia:
        'Gerencia de Recursos Humanos. (2012). <em>Evaluación de desempeño.</em>',
      link:
        'http://gerenciaderecursoshumanosipc.blogspot.com/2012/01/evaluacion-de-desempeno.html',
    },
    {
      referencia:
        'HBP Human Business Partner. (2014). <em>Pruebas Online de evaluación de talento humano.</em>',
      link: 'https://www.youtube.com/watch?v=jsW5yEbZMTQ',
    },
    {
      referencia:
        'ISO 9000:2000. (2000). <em>Las normas ISO 9000:2000 de Sistemas de Gestión de la Calidad.</em>',
      link:
        'https://gestiondecalidadmpn.files.wordpress.com/2012/02/iso-9000-2000-sistemas-de-gestic3b3n-de-la-calidad-conceptos-y-vocabulario.pdf',
    },
    {
      referencia:
        'Kabboul, F. (2014). <em>Proceso de mejoramiento continuo.</em>',
      link:
        'https://gestionempresarial14.wordpress.com/proceso-de-mejoramiento-continuo/',
    },
    {
      referencia:
        'Nagales, G. (2007). La gestión del conocimiento como fuente de innovación. <em>Revista Escuela de Administración de Negocios</em>, núm. 61, septiembre-diciembre, 2007, pp. 77-87.',
      link: 'https://www.redalyc.org/pdf/206/20611495008.pdf',
    },
    {
      referencia:
        'QuestionPro (s.f.). Desempeño laboral: Qué es, cómo medirlo y mejorarlo.',
      link: 'https://www.questionpro.com/blog/es/desempeno-laboral/',
    },
    {
      referencia: 'RAE. (2020). Análisis.',
      link: 'https://dle.rae.es/an%C3%A1lisis',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nelly Parra Guarín',
          cargo: 'Adecuación instruccional',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Gustavo Alonso Pineda',
          cargo: 'Experto Temático',
          centro:
            'Regional Huila - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdron',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Revisor Metodológico y Pedagógico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Revisión y corrección de estilo',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Eulises Orduz Amézquita',
          cargo: 'Diseño web',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Edinson Castañeda Oviedo',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
