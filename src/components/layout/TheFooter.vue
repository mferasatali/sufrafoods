<template>
  <footer class="py-16 bg-primary white--text">
    <v-container>
      <v-row>
        <v-col cols="12" md="4" class="text-center text-md-left mb-10 mb-md-0">
          <div class="d-flex align-center justify-center justify-md-start mb-6">
            <v-img src="/sufra.png" width="50" height="50" class="flex-grow-0 mr-3" />
            <span class="text-h5 font-weight-black tracking-tight text-white">SUFRAH FOODS</span>
          </div>
          <p class="text-body-1 opacity-70 mb-8">
            Bringing the authentic taste of homemade food to every home in Lahore. Fresh, hygienic, and made with love.
          </p>
          <div class="d-flex gap-4 justify-center justify-md-start">
            <v-btn icon variant="tonal" color="white" size="small">
              <v-icon icon="mdi-facebook" />
            </v-btn>
            <v-btn icon variant="tonal" color="white" size="small">
              <v-icon icon="mdi-instagram" />
            </v-btn>
            <v-btn icon variant="tonal" color="white" size="small">
              <v-icon icon="mdi-whatsapp" />
            </v-btn>
          </div>
        </v-col>
        
        <v-col cols="6" md="2" class="mb-10 mb-md-0">
          <h4 class="text-h6 font-weight-bold mb-6 text-white">Quick Links</h4>
          <div class="d-flex flex-column gap-3">
            <a v-for="link in links" :key="link" class="footer-link" @click="$emit('scroll', link.toLowerCase())">
              {{ link }}
            </a>
          </div>
        </v-col>
        
        <v-col cols="6" md="2" class="mb-10 mb-md-0">
          <h4 class="text-h6 font-weight-bold mb-6 text-white">Menu</h4>
          <div class="d-flex flex-column gap-3">
            <span class="footer-link">Special Biryani</span>
            <span class="footer-link">Chicken Karahi</span>
            <span class="footer-link">Shami Kababs</span>
            <span class="footer-link">Samosas & Rolls</span>
          </div>
        </v-col>
        
        <v-col cols="12" md="4" class="text-center text-md-left">
          <h4 class="text-h6 font-weight-bold mb-6 text-white">Contact Us</h4>
          <p class="text-body-1 opacity-70 mb-2">Lahore, Pakistan</p>
          <p class="text-body-1 opacity-70 mb-6">+92 300 1234567</p>
        <v-btn
          color="accent"
          variant="flat"
          block
          rounded="xl"
          size="large"
          class="white--text"
          href="https://wa.me/923001234567"
        >
          Chat on WhatsApp
        </v-btn>
        </v-col>
      </v-row>
      
      <v-divider class="my-12 opacity-10" color="white" />
      
      <div class="d-flex flex-column flex-md-row justify-space-between align-center gap-4 opacity-50">
        <p class="text-caption mb-0">© {{ new Date().getFullYear() }} Sufrah Foods. All rights reserved.</p>
        <div class="d-flex gap-6">
          <span class="text-caption">Privacy Policy</span>
          <span class="text-caption">Terms of Service</span>
        </div>
      </div>
    </v-container>
  </footer>
</template>

<script setup lang="ts">
defineEmits(['scroll']);
const links = ['Menu', 'Deals', 'Reviews', 'FAQ', 'Contact'];
</script>

<style scoped>
.footer-link {
  color: white;
  opacity: 0.7;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition);
}

.footer-link:hover {
  opacity: 1;
  color: var(--accent);
  padding-left: 4px;
}

.gap-3 { gap: 12px; }
.gap-4 { gap: 16px; }
.gap-6 { gap: 24px; }
</style>
