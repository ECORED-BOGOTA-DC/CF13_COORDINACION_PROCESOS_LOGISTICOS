<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Titulo de primer nivel
    
    img.mb-4.mb-md-auto(src="@/assets/curso/temas/tema1/img-1.png" data-aos="fade-right")
    .tarjeta.tarjeta-edit-2.col-xl-10.mx-auto.mb-5
      p.mb-0 Para comprender la importancia del talento humano y todas las acciones logísticas permeadas por este factor que resulta fundamental en el desarrollo de todos los procesos organizacionales, primero es necesario conocer y comprender los conceptos que se presentan a continuación:
    
    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_1_1 1.1 Gestión del conocimiento
    
    .bloque-texto-g.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-2.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Las organizaciones reconocen la gran importancia de la gestión de conocimiento, ya que se perfila como una nueva forma de manejar desde la gerencia los procesos organizacionales. Direccionados en su objetivo fundamental el cual radica en la identificación, la captura, el desarrollo, la distribución y la retención del conocimiento organizacional, teniendo su origen en las personas que forman parte de la organización, sean clientes internos o externos.

    .d-flex.flex-wrap.mb-5.mb-lg-4
      .col-lg-8.col-xl-9.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
        p Cada persona que forma parte de la organización debe reconocer a la gestión del conocimiento, como un conjunto de estrategias, que abarcan una serie de actividades de las cuales se pueden identificar las siguientes:
        ul.lista-ul--separador
          li.pb-2.mb-2
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | La identificación de los conocimientos, que necesita la empresa para su desarrollo y logro del éxito.
          li.pb-2.mb-2
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | La adquisición de nuevos conocimientos necesarios para el desarrollo de las metas.
          li.pb-2.mb-2
            i.fas.fa-angle-right(style="color: #FE7062; font-size: 20px")
            | La aplicación de conocimientos de forma efectiva en beneficio lógico.
      img.col-lg-4.col-xl-3.mx-auto.mb-4.mb-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema1/img-3.svg" style="max-width: 295px;" data-aos="fade-left")
    
    .mx-auto.col-lg-10.mb-5
      .titulo-sexto.color-acento-botones(data-aos="fade-right")
        h5 Figura 1.
        span Estructura del modelo de desarrollo de la gestión del conocimiento
      img.mx-auto(src="@/assets/curso/temas/tema1/img-4.svg" style="max-width: 1031px;" data-aos="fade-left")

    .tarjeta-avatar-b.col-xl-11.me-xl-auto
      .tarjeta-avatar-b__img
        img.mx-auto(src='@/assets/curso/temas/tema1/img-5.svg' style="max-width: 104px")
      .tarjeta.tarjeta--azul.ps-lg-5(style="background-color: #F6F6F6")
        .p-4.py-md-3.d-flex.flex-wrap.align-items-center
          p.mb-0.order-2.order-md-1.col-md.pe-md-4(data-aos="fade-right") De acuerdo con Nagales (2007), la gestión del conocimiento es un proceso de logística caracterizado por su lógica, orden y organización; también es sistemático para producir, transferir y aplicar en situaciones concretas una combinación armónica de saberes, experiencias, valores, información contextual y apreciaciones expertas que proporcionan un marco para su evaluación e incorporación de nuevas experiencias e información.

    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_1_2 1.2 Capital humano 
    
    .d-flex.flex-wrap.mb-5.mb-lg-4
      .col-lg-8.col-xl-9.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
        p Cuando hablamos del capital humano globalizado, nos referimos al valor económico de las habilidades personales técnicas y profesionales que cada individuo posee para el desarrollo de las diferentes actividades o funciones asignadas por la organización.
        .cajon.color-acento-contenido.p-4.mb-4(data-aos="fade-left")
          p.mb-0 Si al capital humano se le añade el capital financiero se logra obtener el desarrollo de la persona y mejora de sus actividades.
        p El capital humano es reconocido en la industria global como un término manejado en diferentes teorías económicas del crecimiento, donde se puede definir como una de las capacidades, experiencias, destrezas y habilidades que poseemos los empleados de una organización, la cual permite solucionar o satisfacer las necesidades y problemas de nuestros clientes internos y externos dentro del ambiente organizacional.
      img.col-lg-4.col-xl-3.mx-auto.mb-4.mb-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema1/img-6.png" style="max-width: 295px;" data-aos="fade-left")
    p.mb-5 En el mundo moderno global se reconoce que el hombre es un ser social que cuenta con habilidades a desarrollar en el ambiente laboral o vida social en la que se encuentre. El hombre siempre se ha caracterizado por permanecer gran parte de su vida en la empresa ya que gran parte de su tiempo lo dedica siempre a ella para dar lo mejor, logrando satisfacer una de sus necesidades personales o profesionales o para crecer como un ser humano íntegro con calidad.

    p.text-center.fw-bold El capital humano de un individuo se calcula como el valor actual de todos los beneficios.

    .col-xl-9.mx-auto.mb-5
      .tarjeta-avatar-b.tarjeta-avatar-b-1.col-xl-11.me-auto
        .tarjeta-avatar-b__img
          img.mx-auto(src='@/assets/curso/temas/tema1/img-7.svg' style="max-width: 88px")
        .tarjeta.tarjeta-e-1.tarjeta--azul.ps-lg-5.d-flex.align-items-center(style="background-color: #F6F6F6; box-shadow: 0 2px 4px 4px #00000010")
          .p-4.py-md-3
            h3.mb-0.order-2.order-md-1.col-md.fw-bold(data-aos="fade-right") <em>Capital humano= conjunto de habilidades + conocimiento + competencias</em>

    .col-xl-10.mx-auto
      p.mb-5 Es importante conocer que, dentro de las organizaciones, existen varios tipos de capital necesarios para llevar a cabo su actividad económica, los cuales se pueden entender así:





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
