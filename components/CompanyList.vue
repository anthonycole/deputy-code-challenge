<template>
  <ul class="mt-8 mx-auto w-full pt-4 px-4 md:pt-0 md:px-0 md:mb-4 grid grid-cols-1 md:grid-cols-3 md:gap-4 items-center md:max-w-5xl">
    <li class="md:h-full" v-for="company in companies" v-bind:key="company.company_id">
      <company-card v-bind:company="company" />
    </li>
  </ul>
</template>

<script>

export default {
  computed: {
    companies () {
      return this.$store.getters["partners/filteredCompanies"](this.$store.state.menu);
    },
  },
  async fetch () {
    await this.$store.dispatch('partners/fetchCompanies')
  }
}
</script>
