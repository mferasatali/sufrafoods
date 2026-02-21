<template>
  <div class="modern-landing">
    <TheHeader @scroll="scrollTo" @toggle-drawer="drawer = !drawer" />
    
    <v-navigation-drawer v-model="drawer" temporary location="right" class="glass-effect">
      <v-list class="pa-6">
        <v-list-item
          v-for="item in navItems"
          :key="item.id"
          @click="scrollTo(item.id); drawer = false"
          class="mb-4 rounded-xl"
          :title="item.label"
        />
        <v-btn
          color="primary"
          block
          rounded="xl"
          size="large"
          class="mt-6"
          href="https://wa.me/923001234567"
        >
          Order Now
        </v-btn>
      </v-list>
    </v-navigation-drawer>

    <main>
      <HeroSection @scroll="scrollTo" />
      
      <div class="reveal-on-scroll">
        <MenuSection />
      </div>
      
      <div class="reveal-on-scroll">
        <ReviewsSection />
      </div>
      
      <!-- Contact Section -->
      <section id="contact" class="py-16 py-md-24">
        <v-container>
          <v-card class="modern-card bg-primary pa-8 pa-md-16 text-center white--text">
            <h2 class="text-h3 text-md-h2 font-weight-black mb-6 white--text">Ready to Taste the Best?</h2>
            <p class="text-h6 opacity-80 mb-10 max-w-600 mx-auto white--text">
              Whether it's a small craving or a large event, we're here to serve you the best homemade food in Lahore.
            </p>
            <div class="d-flex flex-column flex-sm-row gap-4 justify-center">
              <v-btn
                color="accent"
                size="x-large"
                rounded="xl"
                class="px-12 elevation-8"
                href="https://wa.me/923001234567"
                target="_blank"
              >
                Order on WhatsApp
                <v-icon end icon="mdi-whatsapp" />
              </v-btn>
              <v-btn
                variant="outlined"
                color="white"
                size="x-large"
                rounded="xl"
                class="px-12"
                href="tel:+923001234567"
              >
                Call Us Now
              </v-btn>
            </div>
          </v-card>
        </v-container>
      </section>
    </main>

    <TheFooter @scroll="scrollTo" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TheHeader from '../components/layout/TheHeader.vue';
import TheFooter from '../components/layout/TheFooter.vue';
import HeroSection from '../components/sections/HeroSection.vue';
import MenuSection from '../components/sections/MenuSection.vue';
import ReviewsSection from '../components/sections/ReviewsSection.vue';

const drawer = ref(false);
const navItems = [
  { label: 'Menu', id: 'menu' },
  { label: 'Deals', id: 'deals' },
  { label: 'Reviews', id: 'reviews' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Contact', id: 'contact' }
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const offset = 100;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = el.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

onMounted(() => {
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    observer.observe(el);
  });
});
</script>

<style>
@import '../assets/styles/main.css';

.modern-landing {
  background-color: var(--bg-creme);
}

.max-w-600 {
  max-width: 600px;
}

.gap-4 { gap: 16px; }
</style>
