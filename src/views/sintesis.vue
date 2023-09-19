<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-5(data-aos="fade-right") Dirigir el talento humano implica gestionar eficazmente a las personas en una organización para alcanzar los objetivos empresariales. Esto incluye reclutamiento, selección, capacitación, motivación y retención del personal. El enfoque busca liderar y desarrollar a los empleados para mejorar la productividad y competitividad de la organización.

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Esquema gráfico que resume lo abordado en el componente formativo, indicando lo relacionado con la dirección del talento humano, la cual se compone de: Gestión del talento humano: Capacitación y selección. Formación y desarrollo. Compensación y beneficios. Evaluación de desempeño. Relaciones laborales. El talento humano en la gestión logística: Gestión por competencias. Necesidades de TH. Perfiles de cargos. Capacitación y desarrollo. Evaluación y plan de mejora del talento: Calidad y precisión del trabajo. Capacidad y cumplimiento de objetivos. Habilidades de colaboración. Habilidades para resolver problemas.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
