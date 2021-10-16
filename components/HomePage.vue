<template>
  <div>
    <header class="header">
      <div class="header-grid">
        <img src="~/static/deputy.png" class="header-img" alt="Deputy" />
        <h1 class="sr-only">Deputy</h1>
      </div>
    </header>
    <header>
      <h2>You're in good company</h2>
    </header>
    <Filters />
    <CompanyList />
  </div>
</template>

<style scoped>
  .header {
    height: 70px;
    display: flex;
    align-items: center;
    background: #093149;
  }

  .header-img {
    width: 138px;
    height: 26px;
  }

  .header-grid {
    flex-grow: 1;
    margin: 0 auto;
    align-items: center;
    width: 100%;
    max-width: 1060px;
  }

  .sr-only {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

</style>
