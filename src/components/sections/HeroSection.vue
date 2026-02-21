<template>
  <section id="hero" class="hero-section hero-gradient d-flex align-center overflow-hidden">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="6" class="text-center text-md-left">
          <v-chip
            color="accent"
            variant="flat"
            class="mb-6 px-6 font-weight-bold white--text"
            size="large"
          >
            ✨ Authentic Homemade Taste
          </v-chip>
          <h1 class="text-h2 text-md-h1 font-weight-black primary--text mb-6 leading-tight">
            Authentic <span class="text-accent">Pakistani</span> Flavors, Homemade with Love.
          </h1>
          <p class="text-h6 text-md-h5 secondary--text mb-10 font-weight-medium opacity-80">
            From Biryani and Karahi to crispy Samosas, we bring the true essence of Pakistani cuisine straight to your table in Lahore.
          </p>
          <div class="d-flex flex-column flex-sm-row gap-4 justify-center justify-md-start">
            <v-btn
              color="primary"
              size="x-large"
              rounded="xl"
              class="px-10 elevation-8"
              href="https://wa.me/923001234567"
              target="_blank"
            >
              Order on WhatsApp
              <v-icon end icon="mdi-whatsapp" />
            </v-btn>
            <v-btn
              variant="outlined"
              color="primary"
              size="x-large"
              rounded="xl"
              class="px-10"
              @click="$emit('scroll', 'menu')"
            >
              Explore Menu
            </v-btn>
          </div>
          
          <div class="mt-12 d-flex align-center justify-center justify-md-start gap-6">
            <div class="d-flex flex-column">
              <span class="text-h4 font-weight-black primary--text">500+</span>
              <span class="text-caption font-weight-bold secondary--text">Happy Customers</span>
            </div>
            <v-divider vertical length="40" class="mx-4" />
            <div class="d-flex flex-column">
              <span class="text-h4 font-weight-black primary--text">4.9/5</span>
              <span class="text-caption font-weight-bold secondary--text">Average Rating</span>
            </div>
          </div>
        </v-col>
        
        <v-col cols="12" md="6" class="position-relative d-none d-md-block">
          <div class="hero-image-container">
            <v-img
              src="/sufra.png"
              alt="Delicious Homemade Food"
              class="hero-main-img"
              elevation="0"
            />
            <div class="floating-card glass-effect pa-4 rounded-xl d-flex align-center gap-4">
              <v-avatar color="accent" size="48">
                <v-icon icon="mdi-clock-outline" color="white" />
              </v-avatar>
              <div>
                <p class="text-subtitle-2 font-weight-black mb-0">Fast Delivery</p>
                <p class="text-caption mb-0">Across Lahore</p>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
defineEmits(['scroll']);
</script>

<style scoped>
.hero-section {
  min-height: 90vh;
  padding-top: 100px;
}

.leading-tight {
  line-height: 1.1 !important;
}

.hero-image-container {
  position: relative;
  padding: 40px;
}

.hero-main-img {
  max-width: 100%;
  filter: drop-shadow(0 30px 60px rgba(31, 61, 43, 0.2));
  animation: float 6s ease-in-out infinite;
}

.floating-card {
  position: absolute;
  bottom: 10%;
  right: 0;
  z-index: 2;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.gap-4 { gap: 16px; }
.gap-6 { gap: 24px; }
</style>
