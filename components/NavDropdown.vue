<template>
  <menu class="relative inline-block max-w-48 pl-0">
    <button @focusin="toggleMenu()" class="dropdown-background text-sm text-left w-full rounded bg-white border border-color-brand-secondary px-5 py-2 block text-brand-text" @click="active = !active">
      {{ title }}
    </button>
    <div role="navigation" class="md:shadow-lg z-50 md:max-h-96 overflow-y-scroll origin-top-left mt-2 md:absolute left-0 w-full md:w-80 bg-white rounded border border-color-grey p-5 text-brand-text" v-if="active">
      <div class="flex justify-between mb-4">
        <p>{{ getActiveMenuItems() }} Selected</p>
        <button class="text-brand-links font-bold underline" @click="clearSelectedItems()">Clear</button>
      </div>
      <ul>
        <li v-for="item of items" v-bind:key="item"><button v-bind:class="{'bg-brand-primary text-white menu-item-active-background': checkIsActive(item), 'bg-gray-100': !checkIsActive(item)}" @click="click(item)" class="text-left rounded bg-gray-100 px-8 py-4 mb-1.5 w-full">{{ item }} ({{ getMenuItemCount(item) }}) </button></li>
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
    toggleMenu() {
      window.addEventListener('keydown', (e) => {
        if (e.key == 'Escape') {
          this.active = !this.active;
        }
      });
    },
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
  .dropdown-background {
    background-image: url('~/assets/images/arrow-down.svg');
    background-position: 90% center;
    background-repeat: no-repeat;
    background-size: 7px 10px;
  }

  .menu-item-active-background {
    background-image: url('~/assets/images/checkbox-white.svg');
    background-position: 10px center;
    background-repeat: no-repeat;
    background-size: 15px 11px;
  }
</style>

