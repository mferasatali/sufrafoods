<template>
  <section id="menu" class="py-16 py-md-24">
    <v-container>
      <div class="text-center mb-16">
        <v-chip color="primary" variant="tonal" class="mb-4 font-weight-bold primary--text">Our Specialties</v-chip>
        <h2 class="text-h3 text-md-h2 font-weight-black primary--text mb-4">Explore Our Menu</h2>
        <p class="text-h6 secondary--text max-w-600 mx-auto opacity-70">
          Handcrafted with the finest ingredients, following traditional recipes passed down through generations.
        </p>
      </div>

      <v-row>
        <v-col v-for="item in menuItems" :key="item.id" cols="12" md="6">
          <v-card class="modern-card glass-effect pa-6 d-flex flex-column flex-sm-row gap-6 align-center">
            <div class="menu-icon-wrapper d-flex align-center justify-center rounded-xl">
              <v-icon :icon="item.icon" size="48" color="accent" />
            </div>
            <div class="flex-grow-1 text-center text-sm-left">
              <div class="d-flex align-center justify-center justify-sm-space-between mb-2">
                <h3 class="text-h5 font-weight-bold primary--text">{{ item.name }}</h3>
                <span class="text-h6 font-weight-black text-accent d-none d-sm-block">{{ item.price }}</span>
              </div>
              <p class="text-body-1 secondary--text mb-4 opacity-80">{{ item.description }}</p>
              <div class="d-flex flex-wrap gap-2 justify-center justify-sm-start">
                <v-chip v-for="tag in item.tags" :key="tag" size="small" variant="outlined" color="secondary">
                  {{ tag }}
                </v-chip>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      
      <div class="mt-16 text-center">
        <v-btn
          color="primary"
          variant="flat"
          size="x-large"
          rounded="xl"
          class="px-12"
          href="https://wa.me/923001234567"
          target="_blank"
        >
          View Full Menu on WhatsApp
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const menuItems = [
  {
    id: 'biryani',
    name: 'Special Chicken Biryani',
    description: 'Aromatic basmati rice layered with tender chicken, infused with traditional spices and herbs.',
    price: 'Rs. 450/plate',
    icon: 'mdi-food-variant',
    tags: ['Best Seller', 'Traditional', 'Spicy']
  },
  {
    id: 'karahi',
    name: 'Chicken Karahi',
    description: 'Succulent chicken cooked in a wok with fresh tomatoes, green chilies, and ginger.',
    price: 'Rs. 1200/kg',
    icon: 'mdi-pot-steam',
    tags: ['Rich Flavor', 'Hygienic', 'Freshly Made']
  },
  {
    id: 'samosas',
    name: 'Chicken Samosas',
    description: 'Crispy, golden-brown pastry filled with perfectly spiced minced chicken and fresh herbs.',
    price: 'Rs. 450/doz',
    icon: 'mdi-triangle-outline',
    tags: ['Tea Time', 'Extra Crispy']
  },
  {
    id: 'rolls',
    name: 'Chicken Rolls',
    description: 'Premium rolls packed with tender chicken, fresh vegetables, and our signature spice blend.',
    price: 'Rs. 600/doz',
    icon: 'mdi-bread-slice-outline',
    tags: ['Office Favorite', 'Kid Friendly']
  },
  {
    id: 'kabab',
    name: 'Shami Kabab',
    description: 'Classic melt-in-your-mouth kababs made with minced meat and lentils.',
    price: 'Rs. 800/doz',
    icon: 'mdi-circle-outline',
    tags: ['Homemade', 'Protein Rich']
  },
  {
    id: 'kheer',
    name: 'Homemade Kheer',
    description: 'Traditional slow-cooked rice pudding garnished with nuts and saffron.',
    price: 'Rs. 350/bowl',
    icon: 'mdi-bowl-mix-outline',
    tags: ['Dessert', 'Sweet']
  }
];
</script>

<style scoped>
.menu-icon-wrapper {
  width: 100px;
  height: 100px;
  background: rgba(200, 155, 74, 0.1);
  flex-shrink: 0;
}

.max-w-600 {
  max-width: 600px;
}

.gap-6 { gap: 24px; }
.gap-2 { gap: 8px; }
</style>
