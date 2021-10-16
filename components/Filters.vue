<template>
  <nav class="mx-auto w-full px-4 md:p-0 grid grid-cols-1 md:grid-cols-5 md:gap-3 items-center md:max-w-4xl">
    <div class="col-auto md:text-right">
      <p class="uppercase text-brand-text text-sm">Filter By</p>
    </div>
    <nav-dropdown title="Industries" v-bind:type="MENU_ITEMS.INDUSTRY" v-bind:items="filters.industry" />
    <nav-dropdown title="Location" v-bind:type="MENU_ITEMS.LOCATION" v-bind:items="filters.location"  />
    <nav-dropdown title="Company Size" v-bind:type="MENU_ITEMS.COMPANY_SIZE" v-bind:items="filters.company_size" />
    <nav-dropdown title="Use Case" v-bind:type="MENU_ITEMS.USE_CASE" v-bind:items="filters.use_case" />
  </nav>
</template>

<script>
import { MENU_ITEMS } from '../constants';

export default {
  data () {
    return {
      MENU_ITEMS,
    }
  },
  computed: {
    filters () {
      return this.$store.state.partners.filters;
    }
  },
  async fetch () {
    await this.$store.dispatch('partners/fetchCompanies')
  }
}
</script>
