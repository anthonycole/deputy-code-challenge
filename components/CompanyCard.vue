<template>
  <article class="card">
    <div class="card-company-image-container">
      <img class="card-company-image" :src=company.image_url :alt="'Logo for ' + company.company_name" />
    </div>
    <div class="card-company-info">
      <h1 class="sr-only">{{ company.company_name }}</h1>
      <p tabindex="0" class="card-company-info-text">{{ company.excerpt }}</p>
    </div>
    <div class="card-read-more-container">
      <p class="card-read-more-link-container">
        <a href="#" class="card-read-more-link">{{ $t("read_more") }}</a>
        <img class="card-read-more-link-image" src="~/assets/images/arrow-right-blue.svg" alt="Read More Image" />
      </p>
      <p class="card-reading-time-container-link">
        <img class="card-reading-time-image" src="~/assets/images/clock.svg" alt="Clock Image " />{{ $t("min_read", {count: calculateReadingTime(company.word_count)}) }}
      </p>
    </div>
  </article>
</template>

<script>
import { AVERAGE_READING_TIME } from '../constants';

export default {
  props: ['company'],
  methods: {
    calculateReadingTime(time) {
      return Math.round(time/AVERAGE_READING_TIME);
    }
  },
}
</script>

<style scoped>
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--color-white);
    padding: 2.25rem;
  }

  .card-company-image-container {
    min-height: 7rem;
    max-height: 7rem;
  }

  .card-company-image {
    object-fit: contain;
    height: 5rem;
    max-height: 5rem;
  }

  .card-company-info {
    margin-top: 1rem;
    margin-bottom: 1rem;
    flex-grow: 1;
  }

  .card-company-info-text {
    color: var(--color-text);
  }

  .card-read-more-container {
    display: flex;
    flex-direction: column;
  }

  .card-read-more-link-container {
    display: inline-flex;
    margin-bottom: 0.5rem;
  }

  .card-read-more-link-image {
    margin-left: 0.5rem;
  }

  .card-read-more-link {
    color: var(--color-links);
    font-weight: bold;
  }

  .card-reading-time-container {
    margin-right: 0.5rem;
  }

  .card-reading-time-image {
    margin-right: 0.5rem;
  }

  .card-reading-time-container-link {
    color: var(--color-text);
    display: inline-flex;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-size: 0.75rem;
    line-height: 1rem;
  }

  @media (min-width: 768px) {
    .card {
      height: 100%;
      margin-bottom: 0;
    }
  }
</style>
