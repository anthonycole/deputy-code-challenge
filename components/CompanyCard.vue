<template>
  <article>
    <img :src=company.image_url :alt=company.company_name />
    <h1>{{ company.company_name }}</h1>
    <p>{{ company.company_size }}</p>
    <p>{{ company.excerpt }}</p>
    <p><a href="#">Read More</a></p>
    <p>{{ calculateReadingTime(company.word_count)}} min read</p>
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
