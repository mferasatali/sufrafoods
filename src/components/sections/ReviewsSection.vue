<template>
  <section id="reviews" class="py-16 py-md-24 hero-gradient">
    <v-container>
      <div class="text-center mb-16">
        <v-chip color="accent" variant="flat" class="mb-4 font-weight-bold white--text">Testimonials</v-chip>
        <h2 class="text-h3 text-md-h2 font-weight-black primary--text mb-4">Loved by Families</h2>
        <p class="text-h6 secondary--text max-w-600 mx-auto opacity-70">
          Don't just take our word for it. Here's what our wonderful customers in Lahore have to say.
        </p>
      </div>

      <v-row>
        <v-col v-for="(review, i) in reviews" :key="i" cols="12" md="4">
          <v-card class="modern-card glass-effect pa-8 h-100 d-flex flex-column">
            <div class="d-flex mb-6">
              <v-icon v-for="n in 5" :key="n" icon="mdi-star" color="accent" size="small" />
            </div>
            <p class="text-body-1 secondary--text font-italic mb-8 flex-grow-1">
              "{{ review.text }}"
            </p>
            <div class="d-flex align-center gap-4">
              <v-avatar color="primary" size="48">
                <span class="text-h6 text-white">{{ review.name[0] }}</span>
              </v-avatar>
              <div>
                <p class="text-subtitle-1 font-weight-black primary--text mb-0">{{ review.name }}</p>
                <p class="text-caption secondary--text mb-0">{{ review.location }}</p>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const reviews = [
  {
    name: 'Ayesha Khan',
    location: 'DHA Phase 5',
    text: 'The best samosas I have ever had in Lahore. They are so crispy and the filling is just perfect. My kids love them!'
  },
  {
    name: 'Hassan Mehmood',
    location: 'Gulberg III',
    text: 'Ordered 100 pieces for an office event and everyone was asking where they were from. Highly recommended for bulk orders.'
  },
  {
    name: 'Sana Tariq',
    location: 'Model Town',
    text: 'Extremely hygienic and fresh. You can really tell they are made with quality ingredients. The packaging was also very clean.'
  }
];
</script>

<style scoped>
.max-w-600 {
  max-width: 600px;
}
.gap-4 { gap: 16px; }
</style>
