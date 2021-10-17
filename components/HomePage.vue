<template>
  <div class="w-full">
    <header class="header flex items-center bg-brand-primary">
      <div class="w-full max-w-5xl px-4 md:mx-auto">
        <img src="~/static/deputy.png" class="header-img" alt="Deputy" />
        <h1 class="sr-only">Deputy</h1>
      </div>
    </header>
    <div class="main">
      <header class="w-full pt-16 pb-4 text-center font-bold">
        <h2 class="text-3xl text-brand-primary">{{ $t('good_company') }}</h2>
      </header>
      <Filters />
      <CompanyList />
    </div>
  </div>
</template>
<script>
  export default {
    async fetch () {
      await this.$store.dispatch('partners/fetchCompanies')
    }
  }
</script>
<style scoped>
  .main {
    background: linear-gradient(0deg, #FFFFFF -23.92%, #F3F5F6 100%);
    background-size: 100% 350px;
    background-repeat: no-repeat;
  }

  .header {
    height: 70px;
    display: flex;
    align-items: center;
  }

  .header-img {
    width: 138px;
    height: 26px;
  }
</style>
