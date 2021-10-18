<template>
  <div>
    <ul class="mt-8 mx-auto w-full pt-4 px-4 md:pt-0 md:px-0 md:mb-4 grid grid-cols-1 md:grid-cols-3 md:gap-4 items-center md:max-w-5xl">
      <li class="md:h-full" v-for="company in companies" v-bind:key="company.company_id">
        <company-card v-bind:company="company" />
      </li>
    </ul>
    <ul>
      <li class="lol" v-for="page in pagination" v-bind:key="page">
        <button @click="togglePage(page)">{{ page }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { countdown } from '~/utilities';

export default {
  computed: {
    companies () {
      const { menu, partners } = this.$store.state
      return this.$store.getters["partners/filteredCompanies"](menu);
    },
    pagination () {
      return countdown(this.$store.getters["partners/pages"]).sort();
    }
  },
  watch: {
    '$route.query': '$fetch'
  },
  async fetch() {
    // Called also on query changes
    const page = this.$route.params.id || 1;

    this.$store.commit(`partners/SET_PAGE`, page);
  },
  methods: {
    togglePage(id) {
      this.$router.push({ path: `/page/${id}` })
    }
  }
}
</script>
