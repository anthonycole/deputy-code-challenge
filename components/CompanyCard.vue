<template>
  <article class="mb-4 md:mb-0 md:h-full justify-between flex flex-col items-center bg-white p-10">
    <div class="min-h-28 max-h-28">
      <img class="object-contain h-20 max-h-20" :src=company.image_url :alt=company.company_name />
    </div>
    <div class="my-4">
      <h1 class="sr-only">{{ company.company_name }}</h1>
      <p tabindex="0" class="text-brand-text">{{ company.excerpt }}</p>
    </div>
    <div class="flex flex-col">
      <p class="inline-flex mb-4">
        <a href="#" class="text-brand-links font-bold">Read More</a>
        <img class="ml-2" src="~/assets/images/arrow-right-blue.svg" alt="Read More" />
      </p>
      <p class="inline-flex text-xs text-brand-text uppercase tracking-wider">
        <img class="mr-2" src="~/assets/images/clock.svg" alt="Read More" />{{ calculateReadingTime(company.word_count)}} min read
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
