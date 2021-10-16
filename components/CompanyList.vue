<template>
  <section>
    <company-card v-for="company in companies" v-bind:key="company.company_id" v-bind:company="company" />
  </section>
</template>

<script>

export default {
  computed: {
    companies () {
      return this.$store.state.partners.filteredCompanies;
    },
  },
  async fetch () {
    await this.$store.dispatch('partners/fetchCompanies')
  }
}
</script>
