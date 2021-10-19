<template>
  <div>
    <header class="header">
      <div class="header-inner">
        <img src="~/static/deputy.png" class="header-img" alt="Deputy" />
        <h1 class="sr-only">Deputy</h1>
      </div>
    </header>
    <div class="main">
      <header class="header-welcome-container">
        <h2 class="header-welcome-text">{{ $t('good_company') }}</h2>
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
  .header {
    height: 70px;
    display: flex;
    align-items: center;
    background-color: var(--color-primary);
    padding: 1rem;
  }

  .header-inner {
    width: 100%;
    max-width: var(--grid-width);
    margin: 0 auto;
  }

  .header-welcome-container {
    padding-top: 4rem;
    padding-bottom: 1rem;
    text-align: center;
  }

  .header-welcome-text {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: bold;;
    color: var(--color-primary)
  }

  .header-img {
    width: 138px;
    height: 26px;
  }

  @media (min-width: 768px) {
    .main {
      background: linear-gradient(0deg, #FFFFFF -23.92%, #F3F5F6 100%);
      background-size: 100% 350px;
      background-repeat: no-repeat;
    }
  }
</style>
