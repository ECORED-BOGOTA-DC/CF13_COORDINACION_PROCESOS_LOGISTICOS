<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Gestión del talento humano

    .d-flex.flex-wrap.mb-5
      .col-xl-7.col-lg-6.pe-lg-4.order-2.order-lg-1
        p La gestión del talento humano no solo se reconoce como una herramienta para fortalecer el capital humano de la organización, ya que hace referencia a un gran proceso global que está formado por los siguientes subprocesos:
        ul.lista-ul--separador
          li.pb-2.mb-2(data-aos="fade-right")
            span.fw-bold(style="color: #FE7062") a.
            | Capacitación y selección.
          li.pb-2.mb-2(data-aos="fade-right")
            span.fw-bold(style="color: #FE7062") b.
            | Formación y desarrollo.
          li.pb-2.mb-2(data-aos="fade-right")
            span.fw-bold(style="color: #FE7062") c.
            | Compensación y beneficios.
          li.pb-2.mb-2(data-aos="fade-right")
            span.fw-bold(style="color: #FE7062") d.
            | Evaluación de desempeño.
          li.pb-2.mb-2(data-aos="fade-right")
            span.fw-bold(style="color: #FE7062") e.
            | Relaciones laborales.
      img.col-xl-5.col-lg-6.order-1.order-lg-2.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema2/img-1.png" data-aos="fade-left" style="max-width: 505px" alt="Imagen decorativa")

    .container-100.py-5.mb-4(
      style="background-color: #E6FAF9"
    )
      .d-flex.flex-wrap.align-items-start.position-relative
        img.col-md-5.col-lg-4.mx-auto.mb-4(src="@/assets/curso/temas/tema2/img-2.svg" style="max-width: 400px;" data-aos="fade-right" alt="Imagen decorativa")
        .col-md-7.col-lg-8.ps-md-4
          ul
            li.d-flex.align-items-start(data-aos="fade-left")
              img.pt-2.me-2(src="@/assets/curso/temas/tema1/decorador-1.svg" data-aos="fade-right" style="max-width: 11px; min-width: 11px")
              p <b>¿Qué es un sistema de gestión?</b>
                br
                | Es un conjunto de políticas, conceptos y prácticas coherentes entre sí, con el propósito de alcanzar objetivos organizacionales de la empresa de manera eficiente y eficaz.
            li.d-flex.align-items-start(data-aos="fade-left")
              img.pt-2.me-2(src="@/assets/curso/temas/tema1/decorador-1.svg" data-aos="fade-right" style="max-width: 11px; min-width: 11px")
              p <b>¿Qué es un recurso?</b>
                br
                | Se refiere a los medios con los que cuentan las organizaciones para realizar sus tareas y lograr sus objetivos.
            li.d-flex.align-items-start(data-aos="fade-left")
              img.pt-2.me-2(src="@/assets/curso/temas/tema1/decorador-1.svg" data-aos="fade-right" style="max-width: 11px; min-width: 11px")
              p <b>¿Qué es un Recurso Humano?</b>
                br
                | Hace referencia al factor más importante, que son las personas que forman parte de la organización y que desempeñan en ellas determinadas funciones; sin embargo, las personas no son un recurso que la organización consume, utiliza y genera costos. No debe verse proyectado solo en cifras como números u objetos, más bien, debe apreciarse como la pieza fundamental para el logro de los objetivos y metas de la empresa.
            li.d-flex.align-items-start(data-aos="fade-left")
              img.pt-2.me-2(src="@/assets/curso/temas/tema1/decorador-1.svg" data-aos="fade-right" style="max-width: 11px; min-width: 11px")
              p <b>¿Qué es el Talento humano?</b>
                br
                | Es la interacción de las habilidades que posee toda persona y de las cuales se pueden identificar como: sus características, sus conocimientos, experiencias, inteligencia, pericia, actitud, carácter, e iniciativa, que constituye a la final las competencias para aprender y desarrollarse en los diferentes contextos organizacionales dentro de la organización en el nuevo marco de globalización.
    
    p.mb-4.text-center.fw-bold(data-aos="fade-right") Ahora vemos los diferentes tipos de recursos organizacionales:

    .col-lg-10.col-xl-8.mx-auto(data-aos="zoom-in")
      ImagenInfografica.color-acento-botones.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema2/img-3.svg' alt="infografia sobre los diferentes tipo de recursos organizacionales en la gestión de talento humano")

        .tarjeta.color-acento-botones--borde.p-3(x="17%" y="80%" numero="+")
          p.fw-bold Recursos humanos
          p.mb-0 Son las personas que hacen parte de la organización, dependiendo del nivel jerárquico en el que se encuentre, es decir, que función cumplen en las organizaciones en cada uno de los niveles, ya sea en el alto, medio o bajo.
        .tarjeta.color-acento-botones--borde.p-3(x="33.5%" y="18%" numero="+")
          p.fw-bold Recursos mercadológicos
          p.mb-0 Son aquellos medios por los cuales la organización localiza entre el contacto e influye en sus clientes y usuarios, es decir, todas aquellas formas por la cual la organización entra en contacto con el cliente, ya sea por medio de actividades de promociones que hagan a sus clientes por medio de correos, invitaciones entre otros.
        .tarjeta.color-acento-botones--borde.p-3(x="50%" y="80%" numero="+")
          p.fw-bold Recursos financieros
          p.mb-0 Es el capital que se dispone para la operación diaria de la organización, es decir, los dineros, los recursos, el inventario que se hace líquido que está en la caja, la cartera que se recupera, es todo ese dinero que se dispone para la recuperación de la cartera.
        .tarjeta.color-acento-botones--borde.p-3(x="66.5%" y="18%" numero="+")
          p.fw-bold Recursos físicos y materiales
          p.mb-0 Dentro de los recursos necesarios para las operaciones básicas en toda organización encontramos los siguientes, por ejemplo: la infraestructura física (local; bodega, insumos), todo aquello que necesita la empresa para funcionar en lo físico, lo que hace necesario el funcionamiento de la empresa por medio de los recursos físicos y materiales.
        .tarjeta.color-acento-botones--borde.p-3(x="83%" y="80%" numero="+")
          p.fw-bold Recursos administrativos
          p.mb-0 Por medio de este se planea, organiza, dirige y controla las actividades de la organización, si vemos aquí claramente nos está hablando del proceso administrativo, es decir, planear, organizar, dirigir y controlar, con el propósito de lograr los objetivos organizacionales.
    
    .container-100.py-2(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-2.png')})`}"
      style="background-size: contain; background-repeat: no-repeat; background-position: center"
    )
      .col-lg-10.col-xl-8.mx-auto
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Figura 2.
          span Modelo gestión del talento humano vs gestión del recurso humano
        img.mb-4.mx-auto(src="@/assets/curso/temas/tema2/img-4.svg" style="max-width: 821px;" data-aos="fade-left" alt="Imagen que indica los aspectos del modelo de talento humano y el de recurso humano, los cuales son: Gestión de talento humano: Maximizar el talento con el que cuenta la organización Promueve el desarrollo y liderazgo Planeación para el personal a mediano y largo plazo Una estrategia integral para capacitar y retener Inclusión a todos los niveles de la organización Gestión del recurso humano: Pago de nóminas, vacaciones, incentivos y beneficios. Ubicación, selección y requisitos de contratación. Se enfoca en el cumplimiento de lo táctico por parte del personal. Contratar para cumplir requerimientos de perfiles. Involucra a todos los niveles de requerimientos.")
        p En la figura 2 se puede apreciar que existen varias diferencias entre la gestión del talento humano y la gestión del recurso humano, toda vez que la gestión del talento humano se centra en las acciones que conducen al bienestar de la organización partiendo del bienestar del funcionario, mientras que la gestión del recurso humano se focaliza en el cumplimiento del trabajo y el reconocimiento de los derechos del funcionario como trabajador, aunque cabe aclarar que estos dos tipos de gestión tienen el mismo objetivo que es la optimización de los recursos para el eficiente funcionamiento de la organización.
    
    Separador 
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_2_1 2.1 Dirección del talento humano
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-5.jpg')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Se relaciona en un proceso, que surgió en los años 20 y se continúa adoptando por las organizaciones, ya que reconocen el impulso del éxito de sus negocios gracias al talento y habilidades de sus empleados desarrolladas en sus funciones asignadas. 
    
    .d-flex.flex-wrap.mb-5.mb-lg-4
      img.col-lg-4.col-xl-3.mx-auto.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema2/img-6.png" style="max-width: 295px;" data-aos="fade-left" alt="Imagen decorativa")
      .col-lg-8.col-xl-9.ps-lg-4(data-aos="fade-right")
        p.fw-bold ¿Por qué es importante la Dirección del Talento Humano?
        ul.lista-ul--separador
          li.pb-2.mb-2
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Es de vital importancia, ya que de esta depende la evolución y competitividad de una empresa.
          li.pb-2.mb-2
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Permiten que la gran mayoría de sus empleados accedan a los conocimientos para el desarrollo de sus actividades diarias.
          li.pb-2.mb-2
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Reduce la brecha que existe entre la empresa y el trabajador.
          li.pb-2.mb-2
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Crea un mejoramiento continuo para obtener mayor eficiencia.
          li.pb-2.mb-2
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Ayuda a la disminución de la rotación del personal.
          li.pb-2.mb-2
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Aporta a la retención del talento clave en la organización.
    
    p.fw-bold.text-center(data-aos="fade-right") La dirección del talento humano se basa en unos pilares fundamentales, entre estos podemos destacar los siguientes:

    .d-flex.flex-wrap.justify-content-center.mb-5.col-xl-10.mx-auto
      .col-xl.px-md-2.d-flex(data-aos="fade-right")
        .tarjeta-edit-1.w-100.me-md-0(style="border-radius: 0; background: linear-gradient(0deg, #F8F8F8 0%,  #FFFFFF 100%);")
          img.mx-auto.mb-4(src="@/assets/curso/temas/tema2/img-7.svg" style="max-width: 146px" alt="Imagen decorativa")
          h5.mb-0.text-center La Planeación
      
      .col-xl.px-md-2.d-flex(data-aos="flip-up")
        .tarjeta-edit-1.w-100.me-md-0(style="border-radius: 0; background: linear-gradient(0deg, #F8F8F8 0%,  #FFFFFF 100%);")
          img.mx-auto.mb-4(src="@/assets/curso/temas/tema2/img-8.svg" style="max-width: 146px" alt="Imagen decorativa")
          h5.mb-0.text-center La Organización
      
      .col-xl.px-md-2.d-flex(data-aos="fade-left")
        .tarjeta-edit-1.w-100.me-md-0(style="border-radius: 0; background: linear-gradient(0deg, #F8F8F8 0%,  #FFFFFF 100%);")
          img.mx-auto.mb-4(src="@/assets/curso/temas/tema2/img-9.svg" style="max-width: 146px" alt="Imagen decorativa")
          h5.mb-0.text-center La Coordinación
    
    .d-flex.flex-wrap.mb-5
      .col-xl-8.col-lg-7.pe-lg-4.order-2.order-lg-1
        p.fw-bold(data-aos="fade-right") También podemos reconocer que aporta grandes cosas fundamentales en el desarrollo del direccionamiento del talento humano como:
        ul.lista-ul--separador
          li.pb-2.mb-2(data-aos="fade-right")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Desarrollo del conocimiento en la organización.
          li.pb-2.mb-2(data-aos="fade-right")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Generar y promover prácticas de RRHH.
          li.pb-2.mb-2(data-aos="fade-right")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Promover la gestión cultural.
          li.pb-2.mb-2(data-aos="fade-right")
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Gestión del cambio en la empresa.
      img.col-xl-4.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema2/img-10.svg" data-aos="fade-left" style="max-width: 505px" alt="Imagen decorativa")

    .tarjeta-avatar-b.col-xl-11.mx-xl-auto
      .tarjeta-avatar-b__img(data-aos="fade-right")
        img.mx-auto(src='@/assets/curso/temas/tema2/img-11.svg' style="max-width: 104px" alt="Imagen decorativa")
      .tarjeta.tarjeta--azul.ps-lg-5(style="background-color: #F6F6F6")
        .p-4.py-md-3.d-flex.flex-wrap.align-items-center
          p.mb-0.order-2.order-md-1.col-md.pe-md-4(data-aos="fade-left") En el país existe una ley que la regula, la ley 1164 del 2007, por la cual se establecen las obligaciones y procesos de planeación, formación y control de servicios que cada empleado tiene de acuerdo a sus funciones asignadas.
    
    Separador 
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_2_2 2.2 Funciones de la dirección del talento humano
    
    p.mb-5(data-aos="fade-right") Dentro del proceso del direccionamiento del talento humano encontramos las siguientes funciones:
    
    .d-flex.flex-wrap.mb-5
      img.col-lg-4.col-xl-3.mx-auto.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema2/img-12.svg" style="max-width: 295px;" data-aos="fade-left" alt="Imagen decorativa")
      .col-lg-8.col-xl-9.ps-lg-4(data-aos="fade-right")
        ul.mb-0
          li.d-flex.align-items-start
            img.pt-2.me-2(src="@/assets/curso/temas/tema1/decorador-1.svg" data-aos="fade-right" style="max-width: 11px; min-width: 11px")
            p <b>Atraer</b>
              br
              | Nos relaciona la forma de como buscamos atraer a las organizaciones los mejores talentos.
          li.d-flex.align-items-start
            img.pt-2.me-2(src="@/assets/curso/temas/tema1/decorador-1.svg" data-aos="fade-right" style="max-width: 11px; min-width: 11px")
            p <b>Desarrollar</b>
              br
              | Es como potencializamos sus capacidades y destrezas.
          li.d-flex.align-items-start
            img.pt-2.me-2(src="@/assets/curso/temas/tema1/decorador-1.svg" data-aos="fade-right" style="max-width: 11px; min-width: 11px")
            p <b>Retener</b>
              br
              | Se relaciona a las políticas que están utilizando las organizaciones para hacer de las personas que trabajan en la organización una persona con vocación, que ame lo que desarrolla y se sienta identificada con su cargo o función, la cual le permita quedarse por muchos más años.
    
    p.mb-5(data-aos="fade-right") En toda organización, cuando hablamos de educación nos referimos a que es de gran importancia realizar los procesos de selección, adaptación y capacitación dentro del ambiente organizacional y cultural para así poder tener el mejor talento. A continuación, encontramos los siguientes modelos estratégicos:

    .d-flex.flex-wrap.mb-4
      TabsA.color-acento-contenido.col-lg-8.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
        .tarjeta.p-4(titulo="El entrenamiento" style="background-color: #E6FAF9")
          p.mb-0 Es posibilitar espacios para que el personal de trabajo pueda adquirir habilidades que le permitan realizar su trabajo con productividad. <b>(Hacer)</b>.
        .tarjeta.p-4(titulo="La capacitación" style="background-color: #E6FAF9")
          p.mb-0 Enseñar a sus empleados a pensar, el para qué se ejecuta el trabajo. <b>(Saber hacer)</b>.
        .tarjeta.p-4(titulo="El desarrollo de personal" style="background-color: #E6FAF9")
          p.mb-0 Identificar motivaciones y deseos que impulsen a realizar el trabajo con entusiasmo. <b>(Hacer + Saber + Querer)</b>.
        .tarjeta.p-4(titulo="El desarrollo organizacional" style="background-color: #E6FAF9")
          p.mb-0 Enseñar a pensar acorde a la organización. (valores, metas y proyecciones). Hacemos una sumatoria, <b>(Hacer + Saber + Querer + Proyectar)</b>.
      img.col-lg-4.mx-auto.mb-4.mb-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema2/img-13.svg" style="max-width: 400px;" data-aos="fade-left" alt="Imagen decorativa")
    
    Separador 
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_2_3 2.3 Entrada, transformación y salida
    
    p.mb-5(data-aos="fade-right") Reconocemos que en la sociedad moderna casi todo proceso productivo se realiza por medio de las organizaciones. Así, la sociedad moderna e industrializada se caracteriza por ser una sociedad compuesta por organizaciones que constituyen sistemas abiertos.

    .tarjeta-avatar-b.col-xl-8.mx-xl-auto.mb-5
      .tarjeta-avatar-b__img(data-aos="fade-right")
        img.mx-auto(src='@/assets/curso/temas/tema2/img-14.svg' style="max-width: 104px" alt="Imagen decorativa")
      .tarjeta.tarjeta--azul.ps-lg-5(style="background-color: #F6F6F6")
        .p-4.py-md-3.d-flex.flex-wrap.align-items-center
          p.mb-0.order-2.order-md-1.col-md.pe-md-4(data-aos="fade-left") <b>Un sistema es:</b> un conjunto de elementos dinámicamente relacionados que desarrollan una actividad en su entorno en busca del logro de determinado objetivo o propósito que nos conduce al éxito.

    p.mb-5(data-aos="fade-right") Podemos decir que un sistema es un conjunto de elementos (partes o áreas compuestas del sistema), que realizan una actividad (operación o proceso), para alcanzar un objetivo o propósito (finalidad).

    p.mb-5.text-center.fw-bold(data-aos="fade-right") Por lo tanto, debemos tener presente que un sistema está constituido por cuatro elementos esenciales:

    .container-100.py-5.mb-4(
      style="background-color: #E6FAF9"
    )
      .d-flex.flex-wrap.align-items-start.position-relative
        img.col-md-5.col-lg-4.mx-auto.mb-4(src="@/assets/curso/temas/tema2/img-15.svg" style="max-width: 400px;" data-aos="fade-right" alt="Imagen decorativa")
        .col-md-7.col-lg-8.ps-md-4(data-aos="fade-left")
          ul
            li.d-flex.align-items-start
              img.pt-2.me-2(src="@/assets/curso/temas/tema1/decorador-1.svg" data-aos="fade-right" style="max-width: 11px; min-width: 11px")
              p <b>Entradas o insumos</b>
                br
                | Todo sistema recibe entradas o insumos provenientes del ambiente externo.
            li.d-flex.align-items-start
              img.pt-2.me-2(src="@/assets/curso/temas/tema1/decorador-1.svg" data-aos="fade-right" style="max-width: 11px; min-width: 11px")
              p <b>Proceso u operación</b>
                br
                | Es un núcleo del sistema donde las entradas son procesadas o transformadas en salidas o resultados.
            li.d-flex.align-items-start
              img.pt-2.me-2(src="@/assets/curso/temas/tema1/decorador-1.svg" data-aos="fade-right" style="max-width: 11px; min-width: 11px")
              p <b>Salidas o resultados</b>
                br
                | Constituye el resultado de la operación del sistema.
            li.d-flex.align-items-start
              img.pt-2.me-2(src="@/assets/curso/temas/tema1/decorador-1.svg" data-aos="fade-right" style="max-width: 11px; min-width: 11px")
              p <b>Retroalimentación</b>
                br
                | Constituye parte de todo el proceso desde el inicio hasta su fin, logrando su objetivo propuesto.

    p.mb-5(data-aos="fade-right") La función productiva de toda empresa, se reconoce como un proceso de transformación para obtener un producto final, es decir, que un sistema productivo es un proceso en el cual sé dé manejo a los recursos que entran, se logra obtener una salida, la buena marcha de un sistema se mide por las nociones de eficiencia y de productividad, como la relación entre entradas y salidas. Esto se refleja en la siguiente figura:

    .container-100.py-2(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-1.png')})`}"
      style="background-size: contain; background-repeat: no-repeat; background-position: center"
    )
      .col-lg-10.col-xl-8.mx-auto
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Figura 3.
          span Modelo del sistema productivo como proceso de transformación
        img.mb-4.mx-auto(src="@/assets/curso/temas/tema2/img-16.svg" style="max-width: 821px;" data-aos="fade-left" alt="Imagen que contiene el modelo del sistema productivo como proceso de transformación, el cual se da así: Entrada Producción - Salidas - Servicios y productos - Retroalimentación - Energía, materiales, servicios y protocolos, mano de obra, capital, información")

    p(data-aos="fade-right") Como actividad logística dentro del sistema del proceso de transformación tenemos que proveer los conocimientos necesarios para apoyar la competitividad del recurso humano a cargo de procesos que impliquen la optimización de los recursos durante la producción, distribución y comercialización.
    p.mb-5(data-aos="fade-right") Las empresas industriales se dedican a la fabricación de un determinado producto, por lo que deberán proveerse de materias primas que transformarán en dicho producto, para posteriormente distribuirlo a sus clientes. 

    .cajon.color-primario.p-4.mb-4(data-aos="fade-left" style="background-color: #F2F6FE")
      p.mb-0 El proceso de fabricación en las empresas industriales supone unos gastos y la utilización de un sistema de producción, basado en el desarrollo del conocimiento y desarrollo de las actividades que realice el personal o capital humano de la empresa, cuyo objetivo es lograr satisfacer necesidades en los clientes a través de los productos o servicios que la empresa ofrece.
    
    Separador 
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_2_4 2.4 Manual de procesos y procedimientos logísticos
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-17.jpg')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 El manual de procesos, es también conocido como manual de procedimientos, el cual permite que una organización funcione de manera correcta, debido a que es ahí donde se establecen los estamentos, las políticas, normas, reglamentos, sanciones y todos aquellos lineamientos que se tienen en cuenta para una adecuada gestión de la organización. Dentro del manual de procesos y procedimientos logísticos se establecen las operaciones y actividades que debe realizar el personal de operación logística en las organizaciones.
    
    p.mb-5(data-aos="fade-right") Se considera que la estructura de un proceso logístico debe tener muy claramente desarrolladas las cinco operaciones: 
    .d-flex.flex-wrap.mb-5.mb-lg-4
      img.col-lg-4.col-xl-3.mx-auto.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema2/img-18.svg" style="max-width: 295px;" data-aos="fade-left" alt="Imagen decorativa")
      TabsA.color-acento-contenido.col-lg-8.col-xl-9.ps-lg-4(data-aos="fade-right")
        .tarjeta.p-4(titulo="Compras" style="background-color: #E6FAF9")
          p.mb-0 Hace parte de la etapa de aprovisionamiento en la que se determina cuáles son los materiales, materias primas e insumos que se necesiten en el proceso de transformación de productos terminados para luego venderlos entre los clientes.
        .tarjeta.p-4(titulo="Servicio al cliente" style="background-color: #E6FAF9")
          p.mb-0 Es una herramienta muy importante del <em>marketing</em>, relacionado con un conjunto de estrategias que la empresa diseña para el logro de la satisfacción de los clientes ante la competencia, cumpliendo las expectativas de los clientes internos y externos. Dentro de la cadena de suministro se relaciona como el proceso que abarca todo el ciclo de la orden desde su inicio hasta su fin.
        .tarjeta.p-4(titulo="Gestión de inventarios" style="background-color: #E6FAF9")
          p.mb-0 Es otro proceso que podemos destacar dentro de la logística y está relacionado con el control y manejo de los productos.
        .tarjeta.p-4(titulo="Almacenamiento" style="background-color: #E6FAF9")
          p.mb-0 Consiste en el manejo temporal de los insumos, materias primas y productos terminados, los cuales son puestos bajo control y seguimiento en un determinado espacio para evitar su deterioro hasta el momento de la entrega al cliente.
        .tarjeta.p-4(titulo="Transporte" style="background-color: #E6FAF9")
          p.mb-0 Medio para movilizar bienes o personas desde un punto hasta otro.

    p.mb-5(data-aos="fade-right") La logística se refiere y está compuesta por una serie de actividades o procesos, que unidos de una manera eficiente generan un resultado producto terminado o servicio prestado. Según Escudero (2019, P.2); “La logística es una actividad que tiene como finalidad satisfacer las necesidades del cliente, proporcionando productos y servicios en el momento, lugar y cantidad que los solicita, y todo ello al mínimo coste”.

    .container-100.py-2(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-1.png')})`}"
      style="background-size: contain; background-repeat: no-repeat; background-position: center"
    )
      .col-lg-8.col-xl-6.mx-auto
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Figura 4.
          span Modelo sistema de procedimiento logístico
        img.mb-4.mx-auto(src="@/assets/curso/temas/tema2/img-19.svg" style="max-width: 610px;" data-aos="fade-left" alt="Imagen del modelo sistema de procedimiento logístico, el cual se da así: Compras - Servicio al cliente - Gestor de inventarios - Almacenamiento - Trnasporte")

    Separador 
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_2_5 2.5 Programa de Seguridad y Salud en el Trabajo (SST)
    
    p.mb-5(data-aos="fade-right") El programa de Seguridad y Salud en el trabajo consiste en la planeación y ejecución de las actividades de medicina, seguridad e higiene industrial, que tiene como objetivo mantener, cuidar y mejorar la salud de los trabajadores en las empresas.

    p.text-center.fw-bold(data-aos="fade-right") Para ampliar este concepto revisemos las siguientes definiciones:

    .mb-4.col-xl-10.mx-auto.tarjeta--container.row(data-aos="fade-left")
      .position-relative.col-md.tarjeta.color-primario.p-4.p-xl-5(style="background-color: #C4F2F1")
        .col-lg-10.col-xl-11.mx-auto.ps-lg-3
          h3.text-center ¿Qué es la Seguridad y <br>Salud en el Trabajo (SST)?
          p Consiste en el desarrollo de un proceso lógico y por etapas, basado en la mejora continua, con el objetivo de anticipar, reconocer, evaluar y controlar los riesgos que puedan afectar la seguridad y salud en el trabajo de los empleados.

          p La Seguridad y Salud en el Trabajo es la disciplina que trata la prevención de lecciones y enfermedades causadas por las lecciones de trabajo (guía técnica de seguridad y salud en el trabajo para las <em>mipymes</em>).
          img.img-float-left(src='@/assets/curso/temas/tema2/img-20.svg' style="max-width: 115px" alt="Imagen decorativa")

      .position-relative.col-md.tarjeta.color-acento-botones.p-4.p-xl-5(style="background-color: #D8E4FD")
        .col-lg-10.col-xl-11.mx-auto.pe-lg-3
          h3.text-center ¿En qué consiste el sistema de gestión <br>de la Seguridad y Salud en el Trabajo?
          p Consiste en el desarrollo de un proceso lógico, basado en la mejora continua con el objetivo de anticipar, reconocer, evaluar los riesgos que puedan afectar la Seguridad y Salud en el Trabajo.
          img.mx-auto(src='@/assets/curso/temas/tema2/img-22.svg' style="max-width: 379px" alt="Imagen decorativa")
          img.img-float-right(src='@/assets/curso/temas/tema2/img-21.svg' style="max-width: 115px" alt="Imagen decorativa")
    
    p.mb-5.text-center(data-aos="fade-right") Siendo un sistema de gestión sus principios deben estar enfocados en el ciclo PHVA (Planear, Hacer Verificar y Actuar).

    .container-100.py-2.mb-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-1.png')})`}"
      style="background-size: contain; background-repeat: no-repeat; background-position: center"
    )
      .col-lg-10.col-xl-8.mx-auto
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Figura 5.
          span Modelo ciclo PHVA
        img.mb-4.mx-auto(src="@/assets/curso/temas/tema2/img-23.svg" style="max-width: 820px;" data-aos="fade-left" alt="Imagen del modelo ciclo PHVA, el cual se da de la siguiente manera: Actuar: ¿Qué aprendimos? ¿Qué errores no se pueden repetir? ¿Qué aciertos se pueden tomar? ¿Qué podemos mejorar? Planear: ¿Qué se hará?, ¿Cómo?, ¿Cuándo?, ¿Dónde? ¿Quién lo hará?, ¿Con quién?, ¿Para qué? ¿Cómo se evaluará lo realizado?, ¿Con qué datos?, ¿Para qué evaluar? Verificar: ¿Se hizo lo planeado? ¿Se lograron los resultados? ¿Qué mecanismos se tienen para verificar el SG SST? ¿Qué impacto se logró en cuanto a la accidentalidad y enfermedades laborales? Hacer: Ejecutar lo planeado Recolectar todos los datos necesarios Documentar todo lo realizado y lo que no se pudo realizar")

    .tarjeta.color-primario.p-3.col-lg-10.mx-auto(style="background: linear-gradient(-90deg, rgba(58,180,177,1) 0%, rgba(26,15,145,1) 100%);" data-aos="flip-up")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema2/img-24.svg" alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.texto-blanco
              h3.mb-1 Obligaciones y responsabilidades
              p.text-small Es importante que a continuación, lea y revise detenidamente el documento web de la ANDI Asociación Nacional de Empresarios de Colombia (2020) que muestra la jurisprudencia:
              ul
                li
                  i.lista-ul__vineta(style="color: #57DBD8")
                  | Artículo 2.2.4.6.8. Obligaciones de los empleadores.
                li
                  i.lista-ul__vineta(style="color: #57DBD8")
                  | Artículo 2.2.4.6.10. Responsabilidades de los trabajadores.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://cmdcertification.com/wp-content/uploads/2018/09/02-DIA-3-Lectura-y-Taller-1.pdf" target="_blank")
                span Ir al enlace
                i.fas.fa-link

</template>

<script>
import TabsA from '../components/TabsA.vue'
export default {
  name: 'Tema2',
  components: { TabsA },
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

<style lang="sass">
.img-float-left
  position: absolute
  top: 50%
  transform: translateY(-50%)
  left: -57px
  @media (max-width: 1200px)
    left: -50px
  @media (max-width: 991px)
    display: none
.img-float-right
  position: absolute
  top: 50%
  transform: translateY(-50%)
  right: -57px
  @media (max-width: 1200px)
    right: -50px
  @media (max-width: 991px)
    display: none
</style>
