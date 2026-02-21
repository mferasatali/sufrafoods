<template>
  <v-app-bar
    class="px-md-12 glass-effect"
    elevation="0"
    height="100"
    sticky
  >
    <v-container class="d-flex align-center">
      <div class="d-flex align-center cursor-pointer" @click="$emit('scroll', 'hero')">
        <v-img
          src="/sufra.png"
          alt="Sufra Foods"
          width="60"
          height="60"
          class="mr-3"
        />
        <div class="d-flex flex-column">
          <span class="text-h6 font-weight-bold primary--text tracking-tight">SUFRAH FOODS</span>
          <span class="text-caption secondary--text font-italic mt-n1">Homemade with Love</span>
        </div>
      </div>

      <v-spacer />

      <div class="d-none d-md-flex align-center gap-8">
        <a v-for="item in navItems" 
           :key="item.id" 
           class="nav-item text-button font-weight-bold"
           @click.prevent="$emit('scroll', item.id)">
          {{ item.label }}
        </a>
        <v-btn
          color="primary"
          rounded="xl"
          size="large"
          class="px-8 elevation-4"
          href="https://wa.me/923001234567"
          target="_blank"
        >
          Order Now
        </v-btn>
      </div>

      <v-app-bar-nav-icon class="d-md-none" @click="$emit('toggle-drawer')" />
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
defineEmits(['scroll', 'toggle-drawer']);

const navItems = [
  { label: 'Menu', id: 'menu' },
  { label: 'Deals', id: 'deals' },
  { label: 'Reviews', id: 'reviews' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Contact', id: 'contact' }
];
</script>

<style scoped>
.nav-item {
  color: var(--primary);
  text-decoration: none;
  cursor: pointer;
  position: relative;
  transition: var(--transition);
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent);
  transition: var(--transition);
}

.nav-item:hover::after {
  width: 100%;
}

.tracking-tight {
  letter-spacing: -0.5px;
}

.gap-8 {
  gap: 32px;
}
</style>
