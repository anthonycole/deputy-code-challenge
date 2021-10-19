<template>
  <div>
    <div class="nav-menu">
      <button @focusin="toggleMenu()" class="menu-button" @click="active = !active">
        {{ $t(title) }}
      </button>
      <div role="navigation" class="menu-dropdown" v-if="active">
        <div class="menu-top-container">
          <p>{{ getActiveMenuItems() }} Selected</p>
          <button class="menu-button-clear" @click="clearSelectedItems()">Clear</button>
        </div>
        <ul>
          <li v-for="item of items" v-bind:key="item"><button v-bind:class="{'menu-item-selected': checkIsActive(item)}" @click="click(item)" class="menu-item">{{ item }} ({{ getMenuItemCount(item) }}) </button></li>
        </ul>
      </div>
    </div>
  </div>
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
      return this.$store.getters["partners/counter"][this.type][item];
    },
    click(item) {
      this.$store.commit(`menu/TOGGLE_${this.type}`, item);
    },
    clearSelectedItems() {
      this.$store.commit(`menu/CLEAR_${this.type}`);
    }
  }
}
</script>

<style scoped>
  .nav-menu {
    position: relative;
    width: 100%;
    display: inline-block;
  }

  .menu-button {
    display: block;
    width: 100%;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: left;
    border-radius: var(--border-radius);
    border-width: 1px;
    border-color: var(--color-border);
    color: var(--color-text);
    background-color: var(--color-white);
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    background-image: url('~/assets/images/arrow-down.svg');
    background-position: 90% center;
    background-repeat: no-repeat;
    background-size: 7px 10px;
  }

  .menu-dropdown {
    padding: 1.25rem;
    background-color: var(--color-white);
    border-width: 1px;
    color: var(--color-text);
    border-color: var(--color-border);
    border-radius: .25rem;
    margin-top: 0.5rem;
    padding: 1.25rem;
    left: 0;
    z-index: 50;
    height: 24rem;
    max-height: 24rem;
    overflow-y: auto;
    transform-origin: top left;
  }

  .menu-top-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .menu-button-clear {
    color: var(--color-links);
    font-weight: bold;
    text-decoration: underline;
  }

  .menu-item {
    width: 100%;
    background-color: var(--color-secondary);
    text-align: left;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 1.5rem;
    border-radius: var(--border-radius);
    margin-bottom: 0.375rem;
  }

  .menu-item-selected {
    background-image: url('~/assets/images/checkbox-white.svg');
    background-position: 10px center;
    background-repeat: no-repeat;
    background-size: 15px 11px;
    background-color: var(--color-primary);
    color: var(--color-white);
  }

  @media (min-width: 768px) {
    .menu-dropdown {
      width: 20rem;
      position: absolute;
      max-height: 96rem;
      box-shadow:  0 0 #0000, 0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
  }
</style>

