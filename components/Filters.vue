<template>
  <nav class="filters-grid filters-grid-responsive">
    <div class="filters-grid-text">
      <p class="filters-grid-text-link">{{ $t("filter_by") }}</p>
    </div>
    <nav-dropdown title="industries" v-bind:type="MENU_ITEMS.INDUSTRY" v-bind:items="filters.INDUSTRY" />
    <nav-dropdown title="location" v-bind:type="MENU_ITEMS.LOCATION" v-bind:items="filters.LOCATION"  />
    <nav-dropdown title="company_size" v-bind:type="MENU_ITEMS.COMPANY_SIZE" v-bind:items="filters.COMPANY_SIZE" />
    <nav-dropdown title="use_case" v-bind:type="MENU_ITEMS.USE_CASE" v-bind:items="filters.USE_CASE" />
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

<style scoped>
  @media (min-width: 768px) {
    .filters-grid-responsive {
      padding: 0;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 0.75rem;
      max-width: 56rem;
    }

    .filters-grid-text {
      grid-column: auto;
      text-align: center;
    }
  }

  .filters-grid {
    padding: 1rem;
    margin: 0 auto;
    display: grid;
    align-items: center;
    max-width: auto;
  }

  .filters-grid-text {
    color: var(--color-text);
    text-transform: uppercase;
  }

  .filters-grid-text-link {
    color: var(--color-text);
    font-size: 0.875rem;
    line-height: 1.25rem;
  };
</style>
