<template>
  <menu>
    <button @click="active = !active">
      {{ title }}
    </button>
    <div role="navigation" v-if="active">
      <p>{{ getActiveMenuItems() }} Selected</p>
      <button @click="clearSelectedItems()">Clear</button>
      <ul>
        <li v-for="item of items" v-bind:key="item" v-bind:class="{'active': checkIsActive(item)}"><button @click="click(item)">{{ item }} ({{ getMenuItemCount(item) }}) </button></li>
      </ul>
    </div>
  </menu>
</template>

<script>
export default {
  props: ['title', 'items', 'type'],
  data () {
    return {
      active: false,
    }
  },
  methods: {
    checkIsActive(menuItme) {
      return this.$store.state.menu[this.type].some(item => item == menuItme);
    },
    getActiveMenuItems() {
      return this.$store.state.menu[this.type].length;
    },
    getMenuItemCount(item) {
      return this.$store.state.partners.counter[this.type][item]
    },
    click(item) {
      this.$store.commit(`menu/TOGGLE_${this.type}`, item);
      this.$store.commit(`partners/FILTER_COMPANIES`, this.$store.state.menu);
    },
    clearSelectedItems() {
      this.$store.commit(`menu/CLEAR_${this.type}`);
      this.$store.commit(`partners/FILTER_COMPANIES`, this.$store.state.menu);
    }
  }
}
</script>

<style scoped>
  .active {
    border: 1px solid pink;
  }
</style>
