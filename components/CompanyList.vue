<template>
  <div>
    <ul class="companies-grid">
      <li class="md:h-full" v-for="company in companyList" v-bind:key="company.company_id">
        <company-card v-bind:company="company" />
      </li>
    </ul>
    <ul class="pagination">
      <li class="pagination-item" v-for="page in pagination" v-bind:key="page">
        <button @click="togglePage(page)">{{ page }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { countdown } from '~/utilities';
import { PAGINATION_COUNT } from '../constants';

export default {
  computed: {
    companies () {
      const { menu } = this.$store.state
      return this.$store.getters["partners/filteredCompanies"](menu);
    },
    companyList() {
      const { menu } = this.$store.state;
      return this.$store.getters["partners/filteredCompaniesPaginate"](menu);
    },
    pagination () {
      const count = Math.ceil(this.companies.length / PAGINATION_COUNT);
      return countdown(count).sort();
    },
  },
  watch: {
    '$route.query': '$fetch'
  },
  methods: {
    togglePage(id) {
      this.$router.push({ path: `/page/${id}` });
      this.$store.commit(`partners/SET_PAGE`, id);
    }
  }
}
</script>
<style scoped>
  @media (min-width: 768px) {
    .companies-grid {
      padding: 0;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      max-width: 56rem;
      margin-bottom: 1rem;
    }
  }

  .companies-grid {
    margin: 0 auto;
    max-width: 64rem;
    margin-top: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-bottom: 1rem;
    display: grid;
    gap: 1rem;
    height: 100%;
  }

  .pagination {
    display: flex;
    padding-top: 0.5rem;
    padding-left: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    margin-bottom: 1rem;
  }

  .pagination-item {
    background: var(--color-white);
    color: var(--color-text);
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin-right: 0.25rem;
  }
</style>
