<template>
  <nav class="mx-auto w-full px-4 md:p-0 grid grid-cols-1 md:grid-cols-5 md:gap-3 items-center md:max-w-4xl">
    <div class="col-auto md:text-center">
      <p class="uppercase text-brand-text text-sm">{{ $t("filter_by") }}</p>
    </div>
    <nav-dropdown title="industries" v-bind:type="MENU_ITEMS.INDUSTRY" v-bind:items="filters.industry" />
    <nav-dropdown title="location" v-bind:type="MENU_ITEMS.LOCATION" v-bind:items="filters.location"  />
    <nav-dropdown title="company_size" v-bind:type="MENU_ITEMS.COMPANY_SIZE" v-bind:items="filters.company_size" />
    <nav-dropdown title="use_case" v-bind:type="MENU_ITEMS.USE_CASE" v-bind:items="filters.use_case" />
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
      return this.$store.getters["partners/filters"];
    }
  }
}
</script>
