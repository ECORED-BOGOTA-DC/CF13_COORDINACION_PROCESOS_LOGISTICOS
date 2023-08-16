<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Gestión del talento humano

    .d-flex.flex-wrap.mb-5
      .col-xl-7.col-lg-6.pe-lg-4.order-2.order-lg-1
        p La gestión del talento humano no solo se reconoce como una herramienta para fortalecer el capital humano de la organización, ya que hace referencia a un gran proceso global que está formado por los siguientes subprocesos:
        ul.lista-ul--separador
          li.pb-2.mb-2
            span.fw-bold(style="color: #FE7062") a.
            | Capacitación y selección.
          li.pb-2.mb-2
            span.fw-bold(style="color: #FE7062") b.
            | Formación y desarrollo.
          li.pb-2.mb-2
            span.fw-bold(style="color: #FE7062") c.
            | Compensación y beneficios.
          li.pb-2.mb-2
            span.fw-bold(style="color: #FE7062") d.
            | Evaluación de desempeño.
          li.pb-2.mb-2
            span.fw-bold(style="color: #FE7062") e.
            | Relaciones laborales.
      img.col-xl-5.col-lg-6.order-1.order-lg-2.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema2/img-1.png" style="max-width: 505px")

    .container-100.py-5.mb-4(
      style="background-color: #E6FAF9"
    )
      .d-flex.flex-wrap.align-items-start.position-relative
        img.col-md-5.col-lg-4.mx-auto.mb-4(src="@/assets/curso/temas/tema2/img-2.svg" style="max-width: 400px;" data-aos="fade-right")
        .col-md-7.col-lg-8.ps-md-4(data-aos="fade-left")
          ul
            li.d-flex.align-items-start
              img.pt-2.me-2(src="@/assets/curso/temas/tema1/decorador-1.svg" data-aos="fade-right" style="max-width: 11px; min-width: 11px")
              p <b>¿Qué es un sistema de gestión?</b>
                br
                | Es un conjunto de políticas, conceptos y prácticas coherentes entre sí, con el propósito de alcanzar objetivos organizacionales de la empresa de manera eficiente y eficaz.
            li.d-flex.align-items-start
              img.pt-2.me-2(src="@/assets/curso/temas/tema1/decorador-1.svg" data-aos="fade-right" style="max-width: 11px; min-width: 11px")
              p <b>¿Qué es un recurso?</b>
                br
                | Se refiere a los medios con los que cuentan las organizaciones para realizar sus tareas y lograr sus objetivos.
            li.d-flex.align-items-start
              img.pt-2.me-2(src="@/assets/curso/temas/tema1/decorador-1.svg" data-aos="fade-right" style="max-width: 11px; min-width: 11px")
              p <b>¿Qué es un Recurso Humano?</b>
                br
                | Hace referencia al factor más importante, que son las personas que forman parte de la organización y que desempeñan en ellas determinadas funciones; sin embargo, las personas no son un recurso que la organización consume, utiliza y genera costos. No debe verse proyectado solo en cifras como números u objetos, más bien, debe apreciarse como la pieza fundamental para el logro de los objetivos y metas de la empresa.
            li.d-flex.align-items-start
              img.pt-2.me-2(src="@/assets/curso/temas/tema1/decorador-1.svg" data-aos="fade-right" style="max-width: 11px; min-width: 11px")
              p <b>¿Qué es el Talento humano?</b>
                br
                | Es la interacción de las habilidades que posee toda persona y de las cuales se pueden identificar como: sus características, sus conocimientos, experiencias, inteligencia, pericia, actitud, carácter, e iniciativa que constituye a la final las competencias para aprender y desarrollarse en los diferentes contextos organizacionales dentro de la organización en el nuevo marco de globalización.
    
    p.mb-4.text-center.fw-bold Ahora vemos los diferentes tipos de recursos organizacionales:

    .col-lg-10.col-xl-8.mx-auto
      ImagenInfografica.color-acento-botones.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema2/img-3.svg' alt="infografia sobre los diferentes tipo de recursos organizacionales en la gestión de talento humano")

        .tarjeta.color-acento-botones--borde.p-3(x="17%" y="80%" numero="+")
          p.fw-bold Recursos humanos
          p Son las personas que hacen parte de la organización, dependiendo del nivel jerárquico en el que se encuentre, es decir que función cumplen en las organizaciones en cada uno de los niveles ya sea en el alto, medio o bajo.
        .tarjeta.color-acento-botones--borde.p-3(x="33.5%" y="18%" numero="+")
          p.fw-bold Recursos mercadológicos
          p Son aquellos medios por los cuales la organización localiza entre el contacto e influye en sus clientes y usuarios, es decir todas aquellas formas por la cual la organización entra en contacto con el cliente, ya sea por medio de actividades de promociones que hagan a sus clientes por medio de correos, invitaciones entre otros.
        .tarjeta.color-acento-botones--borde.p-3(x="50%" y="80%" numero="+")
          p.fw-bold Recursos financieros
          p Es el capital que se dispone para la operación diaria de la organización, es decir los dineros, los recursos, el inventario que se hace líquido que está en la caja, la cartera que se recupera, es todo ese dinero que se dispone para la recuperación de la cartera.
        .tarjeta.color-acento-botones--borde.p-3(x="66.5%" y="18%" numero="+")
          p.fw-bold Recursos físicos y materiales
          p Dentro de los recursos necesarios para las operaciones básicas en toda organización encontramos los siguientes, por ejemplo: la infraestructura física (local; bodega, insumos), todo aquello que necesita la empresa para funcionar en lo físico, lo que hace necesario el funcionamiento de la empresa por medio de los recursos físicos y materiales.
        .tarjeta.color-acento-botones--borde.p-3(x="83%" y="80%" numero="+")
          p.fw-bold Recursos administrativos
          p Por medio de este se planea, organiza, dirige y controla las actividades de la organización, si vemos aquí claramente nos está hablando del proceso administrativo es decir planear, organizar, dirigir y controlar, con el propósito de lograr los objetivos organizacionales.
    
    .container-100.py-2(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-2.png')})`}"
      style="background-size: contain; background-repeat: no-repeat; background-position: center"
    )
      .col-lg-10.col-xl-8.mx-auto
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Figura 2.
          span Modelo gestión del talento humano vs gestión del recurso humano
        img.mb-4.mx-auto(src="@/assets/curso/temas/tema2/img-4.svg" style="max-width: 821px;" data-aos="fade-left")
        p En la figura 2 se puede apreciar que existen varias diferencias entre la gestión del talento humano y la gestión del recurso humano, toda vez que la gestión del talento humano se centra en las acciones que conducen al bienestar de la organización partiendo del bienestar del funcionario, mientras que la gestión del recurso humano se focaliza en el cumplimiento del trabajo y el reconocimiento de los derechos del funcionario como trabajador, aunque cabe aclarar que estos dos tipos de gestión tienen el mismo objetivo que es la optimización de los recursos para el eficiente funcionamiento de la organización.
    
    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_2_1 2.1 Dirección del talento humano
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-5.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Se relaciona en un proceso, que surgió en los años 20 y se continúa adoptando por las organizaciones, ya que reconocen el impulso del éxito de sus negocios gracias al talento y habilidades de sus empleados desarrolladas en sus funciones asignadas. 
    
    .d-flex.flex-wrap.mb-5.mb-lg-4
      img.col-lg-4.col-xl-3.mx-auto.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema2/img-6.png" style="max-width: 295px;" data-aos="fade-left")
      .col-lg-8.col-xl-9.ps-lg-4(data-aos="fade-right")
        p.fw-bold ¿Por qué es importante la Dirección del Talento Humano?
        ul.lista-ul--separador
          li.pb-2.mb-2
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Es de vital importancia ya que de esta depende la evolución y competitividad de una empresa.
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
    
    p.fw-bold.text-center La dirección del talento humano se basa en unos pilares fundamentales, entre estos podemos destacar los siguientes:

    .d-flex.flex-wrap.justify-content-center.mb-5.col-xl-10.mx-auto
      .col-xl.px-md-2.d-flex
        .tarjeta-edit-1.w-100.me-md-0(style="border-radius: 0; background: linear-gradient(0deg, #F8F8F8 0%,  #FFFFFF 100%);")
          img.mx-auto.mb-4(src="@/assets/curso/temas/tema2/img-7.svg" style="max-width: 146px")
          h5.mb-0.text-center La Planeación
      
      .col-xl.px-md-2.d-flex
        .tarjeta-edit-1.w-100.me-md-0(style="border-radius: 0; background: linear-gradient(0deg, #F8F8F8 0%,  #FFFFFF 100%);")
          img.mx-auto.mb-4(src="@/assets/curso/temas/tema2/img-8.svg" style="max-width: 146px")
          h5.mb-0.text-center La Organización
      
      .col-xl.px-md-2.d-flex
        .tarjeta-edit-1.w-100.me-md-0(style="border-radius: 0; background: linear-gradient(0deg, #F8F8F8 0%,  #FFFFFF 100%);")
          img.mx-auto.mb-4(src="@/assets/curso/temas/tema2/img-9.svg" style="max-width: 146px")
          h5.mb-0.text-center La Coordinación
    
    .d-flex.flex-wrap.mb-5
      .col-xl-8.col-lg-7.pe-lg-4.order-2.order-lg-1
        p La gestión del talento humano no solo se reconoce como una herramienta para fortalecer el capital humano de la organización, ya que hace referencia a un gran proceso global que está formado por los siguientes subprocesos:
        ul.lista-ul--separador
          li.pb-2.mb-2
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Desarrollo del conocimiento en la organización.
          li.pb-2.mb-2
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Generar y promover prácticas de RRHH.
          li.pb-2.mb-2
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Promover la gestión cultural.
          li.pb-2.mb-2
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | Gestión del cambio en la empresa.
      img.col-xl-4.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema2/img-10.svg" style="max-width: 505px")

    .tarjeta-avatar-b.col-xl-11.mx-xl-auto
      .tarjeta-avatar-b__img
        img.mx-auto(src='@/assets/curso/temas/tema2/img-11.svg' style="max-width: 104px")
      .tarjeta.tarjeta--azul.ps-lg-5(style="background-color: #F6F6F6")
        .p-4.py-md-3.d-flex.flex-wrap.align-items-center
          p.mb-0.order-2.order-md-1.col-md.pe-md-4(data-aos="fade-right") En el país existe una ley que la regula, la ley 1164 del 2007, por la cual se establecen las obligaciones y procesos de planeación, formación y control de servicios que cada empleado tiene de acuerdo a sus funciones asignadas.
    
    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_2_2 2.2 Funciones de la dirección del talento humano
    
    .d-flex.flex-wrap.mb-5
      img.col-lg-4.col-xl-3.mx-auto.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema2/img-12.svg" style="max-width: 295px;" data-aos="fade-left")
      .col-lg-8.col-xl-9.ps-lg-4(data-aos="fade-right")
        ul
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
    
    p.mb-5 En toda organización cuando hablamos de educación nos referimos a que es de gran importancia realizar los procesos de selección, adaptación y capacitación dentro del ambiente organizacional y cultural para así poder tener el mejor talento. A continuación, encontramos los siguientes modelos estratégicos:
</template>

<script>
export default {
  name: 'Tema2',
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
