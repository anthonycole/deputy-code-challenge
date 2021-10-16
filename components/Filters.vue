<template>
  <nav>
    <p>Filter By</p>
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
