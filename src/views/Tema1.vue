<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Conceptos generales gestión del talento humano
    
    img.mb-4.mb-md-auto(src="@/assets/curso/temas/tema1/img-1.png" data-aos="fade-right" alt="Imagen decorativa")
    .tarjeta.tarjeta-edit-2.col-xl-10.mx-auto.mb-4(data-aos="fade-right")
      p.mb-0 Para comprender la importancia del talento humano y todas las acciones logísticas permeadas por este factor que resulta fundamental en el desarrollo de todos los procesos organizacionales, primero es necesario conocer y comprender los conceptos que se presentan a continuación:
    
    Separador 
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_1_1 1.1 Gestión del conocimiento
    
    .bloque-texto-g.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-2.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Las organizaciones reconocen la gran importancia de la gestión de conocimiento, ya que se perfila como una nueva forma de manejar desde la gerencia los procesos organizacionales. Direccionados en su objetivo fundamental, el cual radica en la identificación, la captura, el desarrollo, la distribución y la retención del conocimiento organizacional, teniendo su origen en las personas que forman parte de la organización, sean clientes internos o externos.

    .d-flex.flex-wrap.mb-5.mb-lg-4
      .col-lg-8.col-xl-9.pe-lg-4.order-2.order-lg-1
        p(data-aos="fade-right") Cada persona que forma parte de la organización debe reconocer a la gestión del conocimiento, como un conjunto de estrategias, que abarcan una serie de actividades de las cuales se pueden identificar las siguientes:
        ul.lista-ul--separador
          li.pb-2.mb-2(data-aos="fade-right")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | La identificación de los conocimientos, que necesita la empresa para su desarrollo y logro del éxito.
          li.pb-2.mb-2(data-aos="fade-right")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | La adquisición de nuevos conocimientos necesarios para el desarrollo de las metas.
          li.pb-2.mb-2(data-aos="fade-right")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | La aplicación de conocimientos de forma efectiva en beneficio lógico.
      img.col-lg-4.col-xl-3.mx-auto.mb-4.mb-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema1/img-3.svg" style="max-width: 295px;" data-aos="fade-left" alt="Imagen decorativa")
    
    .mx-auto.col-lg-10.mb-5
      .titulo-sexto.color-acento-botones(data-aos="fade-right")
        h5 Figura 1.
        span Estructura del modelo de desarrollo de la gestión del conocimiento
      img.mx-auto(src="@/assets/curso/temas/tema1/img-4.svg" style="max-width: 1031px;" data-aos="fade-left" alt="Imagen que contiene un esquema que relaciona los aspectos de la gestión del conocimiento en las organizaciones, los cuales son: Barras de integración de conocimiento: Diversidad del conocimiento. Dispersión del conocimiento. Complejidad del conocimiento. Transferencia de conocimiento: Elementos del proceso: Consecución y apropiación del conocimiento. Tratamiento y resolución de problemas. Análisis e implementación de posibles soluciones. Prototipado y experimentación. Proceso de transferencia: Integrar nuevos conocimientos. Localización y adaptación del conocimiento. Diseño de nuevos productos, servicios y procesos. Acciones de la gestión del conocimiento: Entender las necesidades y oportunidades del conocimiento. Construcción del conocimiento relevante para el negocio. Organizar y distribuir el conocimiento relevante para la organización. Creación de condiciones para aplicación del conocimiento en las organizaciones. Explotación del conocimiento en la empresa.")

    .tarjeta-avatar-b.col-xl-11.me-xl-auto
      .tarjeta-avatar-b__img(data-aos="fade-right")
        img.mx-auto(src='@/assets/curso/temas/tema1/img-5.svg' style="max-width: 104px" alt="Imagen decorativa")
      .tarjeta.tarjeta--azul.ps-lg-5(style="background-color: #F6F6F6")
        .p-4.py-md-3.d-flex.flex-wrap.align-items-center
          p.mb-0.order-2.order-md-1.col-md.pe-md-4(data-aos="fade-right") De acuerdo con Nagales (2007), la gestión del conocimiento es un proceso de logística caracterizado por su lógica, orden y organización; también es sistemático para producir, transferir y aplicar en situaciones concretas una combinación armónica de saberes, experiencias, valores, información contextual y apreciaciones expertas que proporcionan un marco para su evaluación e incorporación de nuevas experiencias e información.

    Separador 
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_1_2 1.2 Capital humano 
    
    .d-flex.flex-wrap.mb-4.mb-lg-5
      .col-lg-8.col-xl-9.pe-lg-4.order-2.order-lg-1
        p(data-aos="fade-right") Cuando hablamos del capital humano globalizado, nos referimos al valor económico de las habilidades personales, técnicas y profesionales que cada individuo posee para el desarrollo de las diferentes actividades o funciones asignadas por la organización.
        .cajon.color-acento-contenido.p-4.mb-4(data-aos="fade-right")
          p.mb-0 Si al capital humano se le añade el capital financiero, se logra obtener el desarrollo de la persona y mejora de sus actividades.
        p(data-aos="fade-right") El capital humano es reconocido en la industria global como un término manejado en diferentes teorías económicas del crecimiento, donde se puede definir como una de las capacidades, experiencias, destrezas y habilidades que poseemos los empleados de una organización, la cual permite solucionar o satisfacer las necesidades y problemas de nuestros clientes internos y externos dentro del ambiente organizacional.
      img.col-lg-4.col-xl-3.mx-auto.mb-4.mb-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema1/img-6.png" style="max-width: 295px;" data-aos="fade-left" alt="Imagen decorativa")
    
    p.mb-5(data-aos="fade-right") En el mundo moderno global se reconoce que el hombre es un ser social que cuenta con habilidades a desarrollar en el ambiente laboral o vida social en la que se encuentre. El hombre siempre se ha caracterizado por permanecer gran parte de su vida en la empresa, ya que gran parte de su tiempo lo dedica siempre a ella para dar lo mejor, logrando satisfacer una de sus necesidades personales o profesionales o para crecer como un ser humano íntegro con calidad.
    p.text-center.fw-bold(data-aos="fade-right") El capital humano de un individuo se calcula como el valor actual de todos los beneficios.

    .col-xl-9.mx-auto.mb-5
      .tarjeta-avatar-b.tarjeta-avatar-b-1.col-xl-11.me-auto
        .tarjeta-avatar-b__img(data-aos="fade-right")
          img.mx-auto(src='@/assets/curso/temas/tema1/img-7.svg' style="max-width: 88px" alt="Imagen decorativa")
        .tarjeta.tarjeta-e-1.tarjeta--azul.ps-lg-5.d-flex.align-items-center(style="background-color: #F6F6F6; box-shadow: 0 2px 4px 4px #00000010")
          .p-4.py-md-3
            h3.mb-0.order-2.order-md-1.col-md.fw-bold(data-aos="fade-right") <em>Capital humano= conjunto de habilidades + conocimiento + competencias</em>

    .col-xl-10.mx-auto(data-aos="fade-right")
      p.mb-5 Es importante conocer que, dentro de las organizaciones, existen varios tipos de capital necesarios para llevar a cabo su actividad económica, los cuales se pueden entender así:

    .container-100.py-2(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-1.png')})`}"
      style="background-size: contain; background-repeat: no-repeat; background-position: center"
    )
      .d-flex.flex-wrap.justify-content-center.mb-5.col-xl-10.mx-auto
        .col-xl.px-md-2.d-flex(data-aos="fade-right")
          .tarjeta-edit-1.w-100.me-md-0
            span.number-tj 01
            img.mx-auto.mb-4(src="@/assets/curso/temas/tema1/tj-1.svg" style="max-width: 152px" alt="Imagen decorativa Capital emitido")
            h5.mb-0.text-center Capital emitido:
            p.mb-0.text-center acciones
        
        .col-xl.px-md-2.d-flex(data-aos="flip-right")
          .tarjeta-edit-1.w-100.me-md-0
            span.number-tj 02
            img.mx-auto.mb-4(src="@/assets/curso/temas/tema1/tj-2.svg" style="max-width: 152px" alt="Imagen decorativa Capital fijo")
            h5.mb-0.text-center Capital fijo:
            p.mb-0.text-center bienes
        
        .col-xl.px-md-2.d-flex(data-aos="flip-up")
          .tarjeta-edit-1.w-100.me-md-0
            span.number-tj 03
            img.mx-auto.mb-4(src="@/assets/curso/temas/tema1/tj-3.svg" style="max-width: 152px" alt="Imagen decorativa Capital financiero")
            h5.mb-0.text-center Capital financiero:
            p.mb-0.text-center recursos monetarios
        
        .col-xl.px-md-2.d-flex(data-aos="flip-left")
          .tarjeta-edit-1.w-100.me-md-0
            span.number-tj 04
            img.mx-auto.mb-4(src="@/assets/curso/temas/tema1/tj-4.svg" style="max-width: 152px" alt="Imagen decorativa Capital social")
            h5.mb-0.text-center Capital social:
            p.mb-0.text-center aportes de los socios 
        
        .col-xl.px-md-2.d-flex(data-aos="fade-left")
          .tarjeta-edit-1.w-100.me-md-0
            span.number-tj 05
            img.mx-auto.mb-4(src="@/assets/curso/temas/tema1/tj-5.svg" style="max-width: 152px" alt="Imagen decorativa Capital humano")
            h5.mb-0.text-center Capital humano:
            p.mb-0.text-center valor agregado  

    p.text-center.fw-bold.mb-5(data-aos="fade-right") Algunos aspectos fundamentales de la gestión moderna del talento humano se centran básicamente en 3 tipos de esfuerzos:

    .container-100.py-5.mb-5(
      style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(233,255,254,1) 50%, rgba(255,255,255,1) 100%);"
    )
      .row.justify-content-center
        .col-lg-4.col-md-6.col-11.mb-4
          .crd_hover_txt.w-100(data-aos="flip-right")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/tjs-1.jpg" alt="Imagen decorativa Contar que se trabaja con seres humanos")
            .crd_hover_txt--body(style="background-color: #91B3FAF0")
              h5.mb-3.text-center Contar que se trabaja con seres humanos
              p.mb-0 Son personas dotadas de personalidad con información relevante y conocimientos, habilidades, capacidades que les permiten vivir en una sociedad.

        .col-lg-4.col-md-6.col-11.mb-4
          .crd_hover_txt.w-100(data-aos="flip-up")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/tjs-2.jpg" alt="Imagen decorativa Auto-activos organizacionalmente")
            .crd_hover_txt--body(style="background-color: #57DBD8F0")
              h5.mb-3.text-center Auto-activos organizacionalmente
              p.mb-0 Las personas se convierten en impulso según sus estados y dinamizan cualquier organización. 

        .col-lg-4.col-md-6.col-11
          .crd_hover_txt.w-100(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/tjs-3.jpg" alt="Imagen decorativa Socios de la organización")
            .crd_hover_txt--body(style="background-color: #91B3FAF0")
              h5.mb-3.text-center Socios de la organización
              p.mb-0 Son individuos que invierten en las organizaciones espacios de trabajo con esfuerzo, responsabilidad, compromiso, empeño y riesgo, entre otros, con la intención de recibir un valor agregado a cambio.
    
    .tarjeta-avatar-b.col-xl-8.mx-xl-auto.mb-5
      .tarjeta-avatar-b__img(data-aos="fade-right")
        img.mx-auto(src='@/assets/curso/temas/tema1/img-8.svg' style="max-width: 104px" alt="Imagen decorativa")
      .tarjeta.tarjeta--azul.ps-lg-5(style="background-color: #F6F6F6")
        .p-4.py-md-3.d-flex.flex-wrap.align-items-center
          p.mb-0.order-2.order-md-1.col-md.pe-md-4(data-aos="fade-right") A cambio de los esfuerzos, las personas buscan recibir incentivos que se pueden ver representados en salarios, incentivos emocionales, bonos, recursos financieros, crecimiento profesional, capacitación o estudio, entre otros. 
    
    p.fw-bold.text-center.mb-5(data-aos="fade-right") También se cuenta con las personas como recurso y como socio como se ve a continuación:

    .d-flex.flex-wrap.align-items-start.mb-4.position-relative
      img.col-md-5.col-lg-4.mx-auto.mb-4(src="@/assets/curso/temas/tema1/img-9.svg" style="max-width: 400px;" data-aos="fade-right" alt="Imagen decorativa")
      .col-md-7.col-lg-8.ps-md-4(data-aos="fade-left")
        LineaTiempoD.color-secundario.mb-5(data-aos="zoom-in")
          div(numero="1" titulo="Características de las personas como recurso humano")
            ul.lista-ul--color
              li
                i.fas.fa-angle-right(style="color: #1A0F91")
                | Empleados pendientes solo de su función.
              li
                i.fas.fa-angle-right(style="color: #1A0F91")
                | Cumplidores de horario rígido y no negociable.
              li
                i.fas.fa-angle-right(style="color: #1A0F91")
                | Ejecutores de órdenes expresas.
              li
                i.fas.fa-angle-right(style="color: #1A0F91")
                | Subordinación al punto de dependencia de los jefes o líderes.
              li
                i.fas.fa-angle-right(style="color: #1A0F91")
                | Fieles a las organizaciones.
              li
                i.fas.fa-angle-right(style="color: #1A0F91")
                | Requieren jefes.
              li
                i.fas.fa-angle-right(style="color: #1A0F91")
                | Se especializan en un punto de trabajo
              li
                i.fas.fa-angle-right(style="color: #1A0F91")
                | Se consideran mano de obra
          div(numero="2" titulo="Características de las personas como socios")
            ul.lista-ul--color
              li
                i.fas.fa-angle-right(style="color: #1A0F91")
                | Son colaboradores.
              li
                i.fas.fa-angle-right(style="color: #1A0F91")
                | Formadores de equipos.
              li
                i.fas.fa-angle-right(style="color: #1A0F91")
                | Los incentivos al igual que las metas son negociadas.
              li
                i.fas.fa-angle-right(style="color: #1A0F91")
                | Se preocupan por los datos y resultados.
              li
                i.fas.fa-angle-right(style="color: #1A0F91")
                | Buena atención.
              li
                i.fas.fa-angle-right(style="color: #1A0F91")
                | Buscan la satisfacción del cliente.
              li
                i.fas.fa-angle-right(style="color: #1A0F91")
                | Están vinculados a la misión y a la visión de la empresa.
              li
                i.fas.fa-angle-right(style="color: #1A0F91")
                | Interdependencia entre colegas y equipo.
              li
                i.fas.fa-angle-right(style="color: #1A0F91")
                | Son propositivos.
              li
                i.fas.fa-angle-right(style="color: #1A0F91")
                | Enfatizan en la ética y la responsabilidad.
              li
                i.fas.fa-angle-right(style="color: #1A0F91")
                | Enfatizan en el conocimiento.
              li
                i.fas.fa-angle-right(style="color: #1A0F91")
                | Saben que representan inteligencia y talento.

    Separador 
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_1_3 1.3 Planeación estratégica del talento humano 

    .d-flex.flex-wrap.mb-5.mb-lg-4
      img.col-lg-4.col-xl-3.mx-auto.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/img-10.png" style="max-width: 295px;" data-aos="fade-left" alt="Imagen decorativa")
      .col-lg-8.col-xl-9.ps-lg-4
        .cajon.color-acento-contenido.p-4.mb-4(data-aos="fade-left")
          p.mb-0 Cuando hablamos de la planeación estratégica del talento humano, nos referimos a la administración y direccionamiento del recurso humano, en este caso cada organización tiene dentro de su estructura organizacional el departamento de talento humano, el cual, se encarga de organizar y planificar recursos y funciones, el reclutamiento del recurso humano de la empresa, la selección de personal, la promoción profesional dentro de la empresa mediante planes de carrera, los planes de formación, diseñar y aplicar la evaluación del desempeño de los funcionarios y cuidar el clima organizacional, todo proyectado al funcionamiento eficiente de la estructura organizacional.
        p(data-aos="fade-left") En este sentido, es necesario definir algunas variables fundamentales en la planeación estratégica del talento humano de la organización, como son:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta-edit-acordion" data-aos="zoom-in")
      .d-flex.flex-wrap(titulo="Gestión del talento humano")
        .d-flex.flex-wrap.col-xl-11.mx-auto
          .col-lg-8.pe-lg-4.mb-lg-0.mb-4
            p Hace referencia “al conjunto de políticas y prácticas necesarias para dirigir cargos gerenciales relacionados con personas o recursos; colocando en práctica los diferentes procesos de reclutamiento, recompensas y evaluación de desempeño” (Chiavenato, 2007).
            p.mb-0 La tarea básica de la Gestión del Talento Humano es fortalecer y dotar al Capital Humano de actitudes y conocimientos, para el logro del éxito, funcionario motivado, capacitado e incentivado por sus logros obtenidos en el desarrollo de sus actividades, es una persona que se entrega y trabajo con calidad en busca de superarse y satisfacer sus necesidades tanto personales como las de la organización.
          img.col-lg-4.mx-auto.mb-4.mb-lg-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema1/img-11.png" style="max-width: 315px" alt="Imagen decorativa")
      .d-flex.flex-wrap(titulo="Planificación estratégica del talento humano")
        .col-xl-11.mx-auto
          p Se refiere al comportamiento de la organización.
            br
            br
            |Es el proceso de decisión relacionado con los recursos humanos necesarios para alcanzar los objetivos organizacionales en determinado periodo, para ello, debemos definir con anticipación la fuerza laboral necesaria para realizar la acción organizacional futura.
      .d-flex.flex-wrap(titulo="Características de la planificación de capital humano")
        .col-xl-11.mx-auto
          p La planificación del talento es la capacidad de anticipar el movimiento de los colaboradores al interior de las empresas, buscando acercarlos más a su centro misional, este sistema permite ajustar la oferta de personal interna y externa en un periodo dado. El propósito de hacer esto es, usar el mejor recurso de la empresa con eficiencia en la búsqueda de los objetivos.
          p.mb-0 La planeación estratégica de recursos humanos es la fuerza con la que se nivela el personal, más exactamente su flujo porque ya se cuenta con la experiencia de que la alta rotación no es buena por varios motivos, con cada despido se va una parte de la empresa, ninguna misión empresarial apunta al rápido despido del personal, también se busca la posibilidad de facilitar la continuidad de los procesos a pesar de las personas que van de ingreso y de salida.
      .d-flex.flex-wrap(titulo="Bases de la planificación del capital humano")
        .d-flex.flex-wrap.col-xl-11.mx-auto
          .col-lg-8.pe-lg-4.mb-lg-0.mb-4
            p.mb-4 <b style="color: #1A0F91">La demanda de trabajo:</b> es el número de candidatos posibles a postular a un puesto de trabajo.
              br
              |<b style="color: #1A0F91">La oferta de trabajo:</b> las empresas que poseen las vacantes, que deben ser llenadas por los colaboradores.
              br
              br
              |Para elaborar la planeación del capital humano debemos realizar un plan de recursos humanos que permita: 
            p.mb-1 <b style="color: #1A0F91">1.</b> Definir el organigrama de la empresa
            p.mb-1 <b style="color: #1A0F91">2.</b> Establecer la compensación del equipo directivo
            p.mb-1 <b style="color: #1A0F91">3.</b> Identificar puestos requeridos y perfiles
            p.mb-1 <b style="color: #1A0F91">4.</b> Determinar la política de recursos humanos
            p.mb-1 <b style="color: #1A0F91">5.</b> Fijar las políticas operativas
            p.mb-1 <b style="color: #1A0F91">6.</b> Identificar las necesidades de plantilla
          img.col-lg-4.mx-auto.mb-4.mb-lg-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema1/img-12.png" style="max-width: 315px" alt="Imagen decorativa")

    .d-flex.mb-4(data-aos="fade-right")
      h3.titulo-h3 Objetivos de la planificación estratégica
    
    p.mb-5(data-aos="fade-right") Son varios los objetivos de la planificación estratégica, pero entre los más significativos se tienen:

    .row.justify-content-center
      .col-md-6.col-xl-4.mb-4.d-flex
        .w-100.tarjeta-numerada.color-primario.p-5.py-2.d-flex.align-items-center(data-aos="fade-right")
          .tarjeta-numerada__numero(style="top: auto")
            .h2 1
          p.text-small.mb-0 Optimizar el factor humano de la empresa.

      .col-md-6.col-xl-4.mb-4.d-flex
        .w-100.tarjeta-numerada.color-acento-contenido.p-5.py-2.d-flex.align-items-center(data-aos="flip-up")
          .tarjeta-numerada__numero(style="top: auto")
            .h2 2
          p.text-small.mb-0 Formar personal con base a las necesidades de la empresa.

      .col-md-6.col-xl-4.mb-4.d-flex
        .w-100.tarjeta-numerada.color-primario.p-5.py-2.d-flex.align-items-center(data-aos="fade-left")
          .tarjeta-numerada__numero(style="top: auto")
            .h2 3
          p.text-small.mb-0 Fomentar el mejor clima laboral posible.
      .col-md-6.col-xl-4.mb-4.d-flex
        .w-100.tarjeta-numerada.color-acento-contenido.p-5.py-2.d-flex.align-items-center(data-aos="fade-right")
          .tarjeta-numerada__numero(style="top: auto")
            .h2 4
          p.text-small.mb-0 Motivar la participación de los colaboradores y que se consideren importantes para la organización.

      .col-md-6.col-xl-4.mb-4.d-flex
        .w-100.tarjeta-numerada.color-primario.p-5.py-2.d-flex.align-items-center(data-aos="flip-up")
          .tarjeta-numerada__numero(style="top: auto")
            .h2 5
          p.text-small.mb-0 Contribuir con productividad de la empresa al máximo.

    .d-flex.flex-wrap.mb-5
      img.col-lg-4.col-xl-3.mx-auto.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/img-13.png" style="max-width: 295px;" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-8.col-xl-9.ps-lg-4
        .cajon.color-acento-contenido.p-4.mb-4(data-aos="fade-left")
          p.mb-0 La planeación estratégica de recursos humanos se puede identificar como el proceso que surge del análisis de las necesidades reales de la empresa en su entorno interno referente al recurso humano que debe estar disponible con cada movimiento de la empresa para mantenerla en un buen entorno interno y externo.
        p.mb-0(data-aos="fade-left") La planeación estratégica del talento humano se relaciona que es un sistema que permite definir estrategias y métodos que construyen al cumplimiento diario de los objetivos y metas establecidas por la organización permitiendo el éxito del desarrollo organizacional y la articulación y objetividad en los programas, planes y proyectos.
    
    .tarjeta-avatar-b.col-xl-11.mx-xl-auto.mb-5
      .tarjeta-avatar-b__img(data-aos="fade-right")
        img.mx-auto(src='@/assets/curso/temas/tema1/img-14.svg' style="max-width: 104px" alt="Imagen decorativa")
      .tarjeta.tarjeta--azul.ps-lg-5(style="background-color: #F6F6F6")
        .p-4.py-md-3.d-flex.flex-wrap.align-items-center
          p.mb-0.order-2.order-md-1.col-md.pe-md-4(data-aos="fade-left") Los objetivos estratégicos deben suponer un paso intermedio entre la misión y visión de la organización. Los cuales deben ser definidos en forma clara y precisa y comprensible, las cuales deben expresar las metas últimas y más importantes que permitan a la organización orientarse hacia su misión y visión corporativa.

    p.mb-5.text-center.fw-bold En este punto es importante precisar a grandes rasgos los conceptos de misión y visión:

    TabsB.color-acento-contenido.mb-5(data-aos="zoom-in")
      .p-4.py-4.py-md-5(
        titulo="Misión"
        :icono="require('@/assets/curso/temas/tema1/img-15.svg')"
        style="background-color: #E6FAF9"
      )
        p Toda organización tiene una misión que cumplir, se reconoce que la misión representa la razón de existencia de una empresa, que es la finalidad u objetivo que le condujo a la creación de la organización. La misión debe ser objetiva, clara, alcanzable y, sobre todo… inspiradora.
        p Para el diseño y elaboración de la misión debemos intentar resolver las siguientes preguntas:
        .d-flex.flex-wrap.align-items-center
          .col-lg-7.order-2.order-lg-1.pe-lg-4
            ul
              li.d-flex.align-items-start
                img.me-2.pt-2(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 11px; min-width: 11px")
                | ¿Quiénes somos empresarialmente? 
              li.d-flex.align-items-start
                img.me-2.pt-2(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 11px; min-width: 11px")
                | ¿Por qué hacemos lo que hacemos? 
              li.d-flex.align-items-start
                img.me-2.pt-2(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 11px; min-width: 11px")
                | ¿Cuál es el negocio de la empresa? 
              li.d-flex.align-items-start
                img.me-2.pt-2(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 11px; min-width: 11px")
                | ¿Cuál es el nicho de mercado de la empresa? 
              li.d-flex.align-items-start
                img.me-2.pt-2(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 11px; min-width: 11px")
                | ¿A qué se dedica la empresa? 
              li.d-flex.align-items-start
                img.me-2.pt-2(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 11px; min-width: 11px")
                | ¿Cuál es la razón de ser de la empresa? 
              li.d-flex.align-items-start
                img.me-2.pt-2(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 11px; min-width: 11px")
                | ¿Quién es el público objetivo de la empresa? 
              li.d-flex.align-items-start
                img.me-2.pt-2(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 11px; min-width: 11px")
                | ¿Cuál es el ámbito geográfico de acción de la empresa? 
              li.d-flex.align-items-start
                img.me-2.pt-2(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 11px; min-width: 11px")
                | ¿Cuál es la ventaja competitiva que ofrece la empresa?
          .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-auto
            img.mx-auto(src="@/assets/curso/temas/tema1/img-17.svg" data-aos="fade-right" alt="Imagen decorativa")
      .p-4.py-4.py-md-5.d-flex.flex-wrap.align-items-center(
        titulo="Visión"
        :icono="require('@/assets/curso/temas/tema1/img-16.svg')"
        style="background-color: #E6FAF9"
      )
        .col-lg-7.order-2.order-lg-1.pe-lg-4
          p La visión de una empresa es una meta de plazo amplio donde se establece la inspiración sobre los logros de la organización y lo que se proyecta a futuro, así la visión siempre define la ruta a seguir, tanto para el personal de directivos y los empleados de la misma. Para redactarla es necesario reflexionar sobre el estado actual de la empresa y hasta donde se quiere llegar. La visión puede escribirse en una frase o un párrafo, debe ser es que sea clara, concreta y concisa.
        .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-auto
          img.mx-auto(src="@/assets/curso/temas/tema1/img-18.svg" data-aos="fade-right" alt="Imagen decorativa")

    .mx-auto.col-lg-10.mb-4
      .titulo-sexto.color-acento-botones(data-aos="fade-right")
        h5 Tabla 1.
        span Misión y visión

      .tabla-a.color-primario.mb-4
        table
          thead
            tr(style="background-color: #E9F0FE" data-aos="fade-right")
              th
              th Misión
              th Visión
          tbody(style="background-color: white;")
            tr(data-aos="fade-right")
              td.fw-bold(style="background-color: #F9FBFF") Significado
              td Función que se espera cumplir en el presente.
              td Proyección de lo que se espera alcanzar en el futuro.
            tr(data-aos="fade-right")
              td.fw-bold(style="background-color: #F9FBFF") Características
              td Es concreta, precisa y específica.
              td Es clara, gráfica y global.
    
    Separador 
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_1_4 1.4 Importancia del talento humano en las organizaciones
    
    .d-flex.flex-wrap.mb-5
      .col-xl-7.col-lg-6.pe-lg-4.order-2.order-lg-1
        p(data-aos="fade-right") Para alcanzar los objetivos las empresas administran una serie de recursos, que incluyen no solo dinero o materiales, sino también el talento de las personas que debe ser gestionado para maximizar su valor, para esto debemos asegurarnos que las personas dentro de la empresa: 
        ul.lista-ul--separador
          li.pb-2.mb-2(data-aos="fade-right")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Hagan lo que deban hacer.
          li.pb-2.mb-2(data-aos="fade-right")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Sean las correctas para trabajar ahí y desarrollar dicha función.
          li.pb-2.mb-2(data-aos="fade-right")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Sepan lo que deben saber.
          li.pb-2.mb-2(data-aos="fade-right")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Permanezcan en la organización.
      img.col-xl-5.col-lg-6.order-1.order-lg-2.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema1/img-19.png" style="max-width: 505px" alt="Imagen decorativa")

    p.mb-5(data-aos="fade-right") Para que las personas hagan lo que deben hacer, debes tener una buena organización del trabajo en puestos específicos que se relacionen claramente y faciliten el logro de los objetivos, todas las actividades de la empresa deben ser organizadas y descritas en puestos de trabajo y estar contempladas en una estructura organizacional que se representa gráficamente en un organigrama; este organigrama te permitirá: 

    .row.justify-content-center.mb-5
      .col-md-6.col-xl-4.mb-4.d-flex
        .w-100.tarjeta-numerada.color-primario.p-5.py-2.d-flex.align-items-center(data-aos="fade-right")
          .tarjeta-numerada__numero(style="top: auto")
            .h2 1
          p.text-small.mb-0 Establecer áreas y puestos de trabajo

      .col-md-6.col-xl-4.mb-4.d-flex
        .w-100.tarjeta-numerada.color-acento-contenido.p-5.py-2.d-flex.align-items-center(data-aos="flip-up")
          .tarjeta-numerada__numero(style="top: auto")
            .h2 2
          p.text-small.mb-0 Clarificar la asignación de responsabilidades 

      .col-md-6.col-xl-4.mb-4.d-flex
        .w-100.tarjeta-numerada.color-primario.p-5.py-2.d-flex.align-items-center(data-aos="fade-left")
          .tarjeta-numerada__numero(style="top: auto")
            .h2 3
          p.text-small.mb-0 Marcar los canales de supervisión y control formal

    .tarjeta-avatar-b.col-xl-8.mx-xl-auto.mb-5
      .tarjeta-avatar-b__img(data-aos="fade-right")
        img.mx-auto(src='@/assets/curso/temas/tema1/img-20.svg' style="max-width: 104px" alt="Imagen decorativa")
      .tarjeta.tarjeta--azul.ps-lg-5(style="background-color: #F6F6F6")
        .p-4.py-md-3.d-flex.flex-wrap.align-items-center
          p.mb-0.order-2.order-md-1.col-md.pe-md-4(data-aos="fade-left") Tanto el organigrama como la descripción de cada puesto deben estar por escrito para evitar dudas o duplicar funciones además deben ser comunicados abiertamente.

    p(data-aos="fade-right") Sin duda uno de los recursos más importantes con los que cuenta en todo momento cualquier tipo de empresa son las personas que día a día entregan gran parte de su vida a ellas para el logro del éxito tanto personal como empresarial, la necesidad de gestionar este recurso tan valioso ha hecho que las empresas dediquen un área a su gestión y dirección, la denominada y llamada Gestión del Talento Humano.

    Separador 
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_1_5 1.5 Responsabilidad del talento humano en las organizaciones
    
    .container-100.py-2(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-1.png')})`}"
      style="background-size: contain; background-repeat: no-repeat; background-position: center"
    )
      .bloque-texto-g.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-21.jpg')})`}" data-aos="fade-right"
        )
        .bloque-texto-g__texto.p-4(data-aos="fade-left")
          p.mb-0 Una de las principales responsabilidades del Departamento de Talento Humano es administrar el capital humano (talento), de forma que los objetivos de la organización sean cumplidos gracias al desarrollo de las funciones que cada integrante de la organización realiza con amor.

      p.mb-5(data-aos="fade-right") No todos los departamentos de RR.HH. son iguales en todas las empresas, ya que se deben adaptar a las necesidades y objetivos de la compañía de la que forman parte. A pesar de esto existen una serie de funciones y responsabilidades comunes en todos ellos, entre ellas encontramos las siguientes:

      .mb-4.col-xl-10.mx-auto.tarjeta--container.row
        .col-md.tarjeta.color-primario.p-4.p-xl-5(style="background-color: #C4F2F1" data-aos="fade-right")
          .row.justify-content-center.mb-4
            .col-6
              figure
                img.mx-auto(src='@/assets/curso/temas/tema1/img-22.svg' style="max-width: 152px" alt="Imagen decorativa")
          h3.text-center Funciones
          ul
            li.d-flex.align-items-start
              img.pt-2.me-2(src="@/assets/curso/temas/tema1/decorador-1.svg" data-aos="fade-right" style="max-width: 11px; min-width: 11px")
              | Planificación y selección de personal.
            li.d-flex.align-items-start
              img.pt-2.me-2(src="@/assets/curso/temas/tema1/decorador-1.svg" data-aos="fade-right" style="max-width: 11px; min-width: 11px")
              | Administración del personal.
            li.d-flex.align-items-start
              img.pt-2.me-2(src="@/assets/curso/temas/tema1/decorador-1.svg" data-aos="fade-right" style="max-width: 11px; min-width: 11px")
              | Evaluación y desarrollo.
            li.d-flex.align-items-start
              img.pt-2.me-2(src="@/assets/curso/temas/tema1/decorador-1.svg" data-aos="fade-right" style="max-width: 11px; min-width: 11px")
              | Formación.
            li.d-flex.align-items-start
              img.pt-2.me-2(src="@/assets/curso/temas/tema1/decorador-1.svg" data-aos="fade-right" style="max-width: 11px; min-width: 11px")
              | Relaciones laborales.

        .col-md.tarjeta.color-acento-botones.p-4.p-xl-5(style="background-color: #D8E4FD" data-aos="fade-left")
          .row.justify-content-center.mb-4
            .col-6
              figure
                img.mx-auto(src='@/assets/curso/temas/tema1/img-23.svg' style="max-width: 152px" alt="Imagen decorativa")
          h3.text-center Responsabilidades
          ul
            li.d-flex.align-items-start
              img.pt-2.me-2(src="@/assets/curso/temas/tema1/decorador-2.svg" data-aos="fade-right" style="max-width: 11px; min-width: 11px")
              | Fomentar la comunicación interna.
            li.d-flex.align-items-start
              img.pt-2.me-2(src="@/assets/curso/temas/tema1/decorador-2.svg" data-aos="fade-right" style="max-width: 11px; min-width: 11px")
              | Crear un código de conducta.
            li.d-flex.align-items-start
              img.pt-2.me-2(src="@/assets/curso/temas/tema1/decorador-2.svg" data-aos="fade-right" style="max-width: 11px; min-width: 11px")
              | Clima laboral.
    
    p.text-center(data-aos="fade-right") Estas funciones y responsabilidades permiten mejorar la gestión del talento humano dentro de la organización en pro y desarrollo de la misma

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
