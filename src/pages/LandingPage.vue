<!--
  SUFRAH FOODS Landing Page
  SEO: Ensure index.html has title + meta description.
  Headings: Single H1 (hero), H2 per section.
-->
<template>
  <div class="landing">
    <div class="bg-glow bg-glow-1" aria-hidden="true" />
    <div class="bg-glow bg-glow-2" aria-hidden="true" />

    <!-- 1) Sticky Header -->
    <v-app-bar
      class="app-bar"
      elevation="0"
      height="92"
      sticky
      scrolled
    >
      <v-container class="d-flex align-center py-0" fluid>
        <v-app-bar-nav-icon
          class="d-md-none"
          aria-label="Open menu"
          @click="drawer = true"
        />
        <a href="#hero" class="brand-link d-flex align-center gap-2" @click.prevent="scrollToSection('hero')">
          <img src="/sufra.png" alt="SUFRAH FOODS سفرہ" class="header-logo" width="88" height="88" />
          <span class="text-h5 font-weight-bold brand-name">SUFRAH FOODS</span>
          <span class="urdu ms-1" lang="ur" aria-hidden="true">سفرہ</span>
        </a>
        <v-spacer />
        <nav class="d-none d-md-flex align-center gap-nav" aria-label="Main navigation">
          <a href="#menu" class="nav-link" @click.prevent="scrollToSection('menu')">Menu</a>
          <a href="#deals" class="nav-link" @click.prevent="scrollToSection('deals')">Deals</a>
          <a href="#reviews" class="nav-link" @click.prevent="scrollToSection('reviews')">Reviews</a>
          <a href="#how-it-works" class="nav-link" @click.prevent="scrollToSection('how-it-works')">How it Works</a>
          <a href="#faq" class="nav-link" @click.prevent="scrollToSection('faq')">FAQ</a>
          <a href="#contact" class="nav-link" @click.prevent="scrollToSection('contact')">Contact</a>
          <v-btn
            color="accent"
            variant="flat"
            class="ms-4 order-btn"
            href="https://wa.me/923001234567?text=Hi%20SUFRAH%20FOODS%2C%20I%20want%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order on WhatsApp"
          >
            Order on WhatsApp
          </v-btn>
        </nav>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="start"
      class="drawer"
      aria-label="Mobile menu"
    >
      <v-list class="py-8">
        <v-list-item href="#menu" @click.prevent="drawer = false; scrollToSection('menu')">Menu</v-list-item>
        <v-list-item href="#deals" @click.prevent="drawer = false; scrollToSection('deals')">Deals</v-list-item>
        <v-list-item href="#reviews" @click.prevent="drawer = false; scrollToSection('reviews')">Reviews</v-list-item>
        <v-list-item href="#how-it-works" @click.prevent="drawer = false; scrollToSection('how-it-works')">How it Works</v-list-item>
        <v-list-item href="#faq" @click.prevent="drawer = false; scrollToSection('faq')">FAQ</v-list-item>
        <v-list-item href="#contact" @click.prevent="drawer = false; scrollToSection('contact')">Contact</v-list-item>
        <v-list-item class="mt-4">
          <v-btn
            block
            color="accent"
            variant="flat"
            href="https://wa.me/923001234567?text=Hi%20SUFRAH%20FOODS%2C%20I%20want%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order on WhatsApp"
          >
            Order on WhatsApp
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- 2) Hero -->
    <section id="hero" ref="heroRef" class="hero py-16 py-md-16" aria-labelledby="hero-heading">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="7" class="hero-content">
            <div class="reveal hero-copy" :class="{ visible: revealed.hero }">
              <v-chip size="small" color="accent" class="mb-4 hero-chip" label>
                Premium Homemade Lahore
              </v-chip>
              <h1 id="hero-heading" class="text-h3 text-md-h2 font-weight-bold mb-4 text-deep-green">
                Homemade Food, Made with Care
              </h1>
              <p class="text-h6 text-brown mb-2">Samosas, Rolls &amp; More • Fresh • Hygienic</p>
              <p class="text-body-large text-gold mb-6">From Our Kitchen to Your Table</p>
              <div class="d-flex flex-wrap gap-3">
                <v-btn
                  color="accent"
                  size="large"
                  variant="flat"
                  class="px-6"
                  href="https://wa.me/923001234567?text=Hi%20SUFRAH%20FOODS%2C%20I%20want%20to%20place%20an%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Order now on WhatsApp"
                >
                  Order Now (WhatsApp)
                </v-btn>
                <v-btn
                  variant="outlined"
                  color="primary"
                  size="large"
                  class="px-6"
                  @click="scrollToSection('menu')"
                >
                  View Menu
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="5" class="d-none d-md-flex justify-center">
            <HeroCard :revealed="revealed.hero" />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- 3) Trust Strip -->
    <section class="trust-strip py-8" aria-label="Why choose us">
      <v-container>
        <div ref="trustRef" class="reveal trust-grid" :class="{ visible: revealed.trust }">
          <TrustBadge icon="hygiene" label="Hygienic Prep" />
          <TrustBadge icon="quality" label="Quality Ingredients" />
          <TrustBadge icon="booking" label="Advance Booking" />
          <TrustBadge icon="delivery" label="Delivery in Lahore (selected areas)" />
        </div>
      </v-container>
    </section>

    <!-- 4) Menu Preview -->
    <section id="menu" ref="menuRef" class="section py-16" aria-labelledby="menu-heading">
      <v-container>
        <h2 id="menu-heading" class="text-h4 text-md-h3 font-weight-bold text-center text-deep-green mb-4 reveal" :class="{ visible: revealed.menu }">
          Our Menu
        </h2>
        <p class="text-center text-body-2 text-brown mb-8 reveal" :class="{ visible: revealed.menu }">
          From samosas and rolls to a growing range of homemade favourites — we cover it all.
        </p>
        <v-row class="reveal" :class="{ visible: revealed.menu }">
          <v-col v-for="item in menuItems" :key="item.id" cols="12" md="6">
            <v-card class="menu-card fill-height premium-card" elevation="2">
              <v-card-text class="pa-6">
                <div class="d-flex align-center mb-3">
                  <span class="menu-icon me-3" v-html="item.icon" aria-hidden="true" />
                  <h3 class="text-h5 font-weight-bold text-deep-green">{{ item.name }}</h3>
                </div>
                <p class="text-body-2 text-brown mb-4">{{ item.description }}</p>
                <p class="text-subtitle-1 font-weight-medium text-gold">Starting from Rs. {{ item.price }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <p class="text-center text-body-2 text-brown mt-4 reveal" :class="{ visible: revealed.menu }">
          Bulk orders for offices &amp; events available.
        </p>
        <div class="text-center mt-6 reveal" :class="{ visible: revealed.menu }">
          <v-btn
            color="accent"
            variant="flat"
            href="https://wa.me/923001234567?text=Hi%20SUFRAH%20FOODS%2C%20I%20would%20like%20to%20see%20the%20full%20menu."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get full menu on WhatsApp"
          >
            Get Full Menu on WhatsApp
          </v-btn>
        </div>
      </v-container>
    </section>

    <!-- 5) Deals / Bulk -->
    <section id="deals" ref="dealsRef" class="section section-alt py-16" aria-labelledby="deals-heading">
      <v-container>
        <h2 id="deals-heading" class="text-h4 text-md-h3 font-weight-bold text-center text-deep-green mb-10 reveal" :class="{ visible: revealed.deals }">
          Deals &amp; Bulk Orders
        </h2>
        <v-row justify="center" class="reveal" :class="{ visible: revealed.deals }">
          <v-col v-for="(pack, i) in dealPacks" :key="pack.size" cols="12" sm="6" md="4">
            <v-card
              class="deal-card fill-height premium-card"
              :class="{ 'deal-card-highlight': pack.highlight }"
              elevation="2"
            >
              <v-card-text class="pa-6 text-center">
                <v-chip v-if="pack.highlight" color="accent" size="small" class="mb-3">Office Packs</v-chip>
                <p class="text-h4 font-weight-bold text-deep-green">{{ pack.size }} pieces</p>
                <p class="text-h5 text-gold mt-2">Rs. {{ pack.price }}</p>
                <p class="text-body-2 text-brown mt-2">{{ pack.note }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <p class="text-caption text-center text-brown mt-4 reveal" :class="{ visible: revealed.deals }">
          Prices may vary by season.
        </p>
      </v-container>
    </section>

    <!-- 6) Reviews -->
    <section id="reviews" ref="reviewsRef" class="section py-16" aria-labelledby="reviews-heading">
      <v-container>
        <h2 id="reviews-heading" class="text-h4 text-md-h3 font-weight-bold text-center text-deep-green mb-10 reveal" :class="{ visible: revealed.reviews }">
          What Our Customers Say
        </h2>
        <v-row class="reveal" :class="{ visible: revealed.reviews }">
          <v-col v-for="(r, i) in reviews" :key="i" cols="12" sm="6" md="4">
            <v-card class="review-card fill-height premium-card" elevation="2">
              <v-card-text class="pa-5">
                <StarRating :count="r.stars" class="mb-2" />
                <p class="text-body-2 text-brown">{{ r.text }}</p>
                <p class="text-caption font-weight-medium text-deep-green mt-2">— {{ r.name }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <div class="text-center mt-8 reveal" :class="{ visible: revealed.reviews }">
          <v-btn
            variant="outlined"
            color="primary"
            :href="shareReviewUrl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share a review on WhatsApp"
          >
            Share a Review
          </v-btn>
        </div>
      </v-container>
    </section>

    <!-- 7) How It Works -->
    <section id="how-it-works" ref="howRef" class="section section-alt py-16" aria-labelledby="how-heading">
      <v-container>
        <h2 id="how-heading" class="text-h4 text-md-h3 font-weight-bold text-center text-deep-green mb-10 reveal" :class="{ visible: revealed.how }">
          How It Works
        </h2>
        <v-row class="reveal justify-center" :class="{ visible: revealed.how }">
          <v-col v-for="(step, i) in howSteps" :key="i" cols="12" sm="6" md="3">
            <div class="step-block text-center">
              <span class="step-num">{{ i + 1 }}</span>
              <h3 class="text-subtitle-1 font-weight-bold text-deep-green mt-2">{{ step.title }}</h3>
              <p class="text-body-2 text-brown">{{ step.desc }}</p>
            </div>
          </v-col>
        </v-row>
        <p class="text-caption text-center text-brown mt-6 reveal" :class="{ visible: revealed.how }">
          Minimum order: 6 pieces
        </p>
      </v-container>
    </section>

    <!-- 8) FAQ -->
    <section id="faq" ref="faqRef" class="section py-16" aria-labelledby="faq-heading">
      <v-container>
        <h2 id="faq-heading" class="text-h4 text-md-h3 font-weight-bold text-center text-deep-green mb-10 reveal" :class="{ visible: revealed.faq }">
          Frequently Asked Questions
        </h2>
        <v-expansion-panels class="reveal faq-panels" :class="{ visible: revealed.faq }">
          <v-expansion-panel
            v-for="(q, i) in faqItems"
            :key="i"
            class="faq-panel"
          >
            <v-expansion-panel-title class="text-body-1">{{ q.question }}</v-expansion-panel-title>
            <v-expansion-panel-text class="text-body-2 text-brown">
              {{ q.answer }}
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    </section>

    <!-- 9) Contact / Order -->
    <section id="contact" ref="contactRef" class="section section-alt py-16" aria-labelledby="contact-heading">
      <v-container>
        <h2 id="contact-heading" class="text-h4 text-md-h3 font-weight-bold text-center text-deep-green mb-10 reveal" :class="{ visible: revealed.contact }">
          Contact &amp; Order
        </h2>
        <v-row class="reveal" :class="{ visible: revealed.contact }">
          <v-col cols="12" md="6" class="d-flex align-center justify-center">
            <v-sheet class="whatsapp-cta pa-8 rounded-lg text-center premium-cta" color="primary">
              <p class="text-h5 font-weight-bold text-white mb-4">Order on WhatsApp</p>
              <p class="text-body-2 text-white mb-4">Quick, easy, and we respond fast.</p>
              <v-btn
                color="accent"
                size="x-large"
                variant="flat"
                href="https://wa.me/923001234567?text=Hi%20SUFRAH%20FOODS%2C%20I%20want%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open WhatsApp to order"
              >
                Chat on WhatsApp
              </v-btn>
              <p class="text-caption text-white mt-4">Phone/WhatsApp: +92 300 1234567</p>
              <p class="text-caption text-white">Location: Lahore</p>
            </v-sheet>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="contact-form-card premium-card" elevation="2">
              <v-card-text class="pa-6">
                <v-form ref="formRef" @submit.prevent="onSubmit">
                  <v-text-field
                    v-model="form.name"
                    label="Name"
                    variant="outlined"
                    :rules="[rules.required]"
                    class="mb-3"
                    hide-details="auto"
                    aria-label="Your name"
                  />
                  <v-text-field
                    v-model="form.phone"
                    label="Phone"
                    variant="outlined"
                    :rules="[rules.required, rules.phone]"
                    class="mb-3"
                    hide-details="auto"
                    aria-label="Your phone number"
                  />
                  <v-textarea
                    v-model="form.message"
                    label="Message"
                    variant="outlined"
                    rows="4"
                    hide-details="auto"
                    aria-label="Your message"
                  />
                  <v-btn
                    type="submit"
                    color="accent"
                    variant="flat"
                    block
                    class="mt-4"
                    aria-label="Send message"
                  >
                    Send Message
                  </v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- 10) Footer -->
    <footer class="footer py-10">
      <v-container>
        <v-row align="center" justify="space-between">
          <v-col cols="12" md="auto" class="text-center text-md-start">
            <div class="d-flex align-center justify-center justify-md-start gap-2 flex-wrap">
              <img src="/sufra.png" alt="SUFRAH FOODS سفرہ" class="footer-logo" width="72" height="72" />
              <span class="text-h6 font-weight-bold text-deep-green">SUFRAH FOODS</span>
              <span class="urdu" lang="ur">سفرہ</span>
            </div>
            <p class="text-caption text-brown mt-1">From Our Kitchen to Your Table</p>
          </v-col>
          <v-col cols="12" md="auto" class="d-flex justify-center justify-md-end gap-2">
            <v-btn icon variant="text" size="small" aria-label="Facebook" href="#" />
            <v-btn icon variant="text" size="small" aria-label="Instagram" href="#" />
          </v-col>
        </v-row>
        <v-divider class="my-4" />
        <div class="d-flex flex-wrap justify-center justify-md-start gap-3 py-2">
          <a href="#menu" class="footer-link" @click.prevent="scrollToSection('menu')">Menu</a>
          <a href="#contact" class="footer-link" @click.prevent="scrollToSection('contact')">Contact</a>
        </div>
        <p class="text-caption text-center text-brown mt-2">© {{ new Date().getFullYear() }} SUFRAH FOODS. Lahore.</p>
      </v-container>
    </footer>

    <v-snackbar
      v-model="snackbar"
      :timeout="4000"
      color="primary"
      location="bottom center"
      aria-live="polite"
    >
      Thanks! We'll reach out on WhatsApp.
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted, type Ref } from 'vue'

const WHATSAPP_NUMBER = '923001234567'
const shareReviewUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi SUFRAH FOODS, I would like to share a review.')}`

const samosaSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="#6B3F1D" stroke-width="1.5"><path d="M24 8 L38 18 L38 32 L24 42 L10 32 L10 18 Z"/><path d="M24 8 L24 42"/></svg>'
const rollSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 32" width="40" height="28" fill="none" stroke="#6B3F1D" stroke-width="1.5"><rect x="4" y="8" width="40" height="16" rx="2"/><path d="M12 16 L36 16"/></svg>'

const drawer = ref(false)
const formRef = ref<{ validate: () => Promise<{ valid: boolean }> } | null>(null)
const snackbar = ref(false)

const form = reactive({
  name: '',
  phone: '',
  message: '',
})

const rules = {
  required: (v: string) => !!v?.trim() || 'Required',
  phone: (v: string) => /^[\d\s+-]{10,}$/.test(v || '') || 'Enter a valid phone number',
}

const menuItems = [
  {
    id: 'samosas',
    name: 'Chicken Samosas',
    description: 'Crispy, golden parcels filled with spiced minced chicken. Perfect with chutney.',
    price: '___',
    icon: samosaSvg,
  },
  {
    id: 'rolls',
    name: 'Chicken Rolls',
    description: 'Soft wrap with tender chicken and fresh fillings. Office-friendly and delicious.',
    price: '___',
    icon: rollSvg,
  },
]

const dealPacks = [
  { size: 12, price: '___', note: 'Ideal for small groups', highlight: false },
  { size: 50, price: '___', note: 'Office packs', highlight: true },
  { size: 100, price: '___', note: 'Events & parties', highlight: false },
]

const reviews = [
  { name: 'Ayesha K.', stars: 5, text: 'Best samosas in town! Always fresh and the rolls are perfect for lunch.' },
  { name: 'Hassan M.', stars: 5, text: 'Ordered for our office twice. Everyone loved them. Highly recommend.' },
  { name: 'Sana T.', stars: 5, text: 'So hygienic and tasty. From Our Kitchen to Your Table — you can tell!' },
  { name: 'Omar R.', stars: 5, text: 'Great for iftar. Bulk order was on time and still warm.' },
  { name: 'Fatima A.', stars: 5, text: 'Clean packaging and delicious. Will order again for sure.' },
  { name: 'Bilal S.', stars: 5, text: 'Quality ingredients, fair price. My go-to for homemade snacks.' },
]

const howSteps = [
  { title: 'Choose items', desc: 'Pick samosas, rolls, or both from our menu.' },
  { title: 'Confirm quantity', desc: 'Tell us how many pieces you need.' },
  { title: 'Share location', desc: 'Send your delivery address or choose pickup.' },
  { title: 'Delivery / Pickup', desc: 'We deliver in selected Lahore areas or you pick up.' },
]

const faqItems = [
  { question: 'What areas do you deliver in Lahore?', answer: 'We deliver in selected areas of Lahore. Message us on WhatsApp with your location and we’ll confirm if we can deliver to you.' },
  { question: 'How far in advance should I order?', answer: 'We recommend ordering at least a few hours in advance. For bulk orders (e.g. office or events), please book 1–2 days ahead.' },
  { question: 'Do you take office bulk orders?', answer: 'Yes! We offer bulk packs (e.g. 50, 100 pieces) ideal for offices and events. Message us for pricing and timing.' },
  { question: 'Are your items frozen or freshly made?', answer: 'Everything is freshly prepared. We don’t use frozen fillings for our samosas and rolls.' },
  { question: 'What payment methods do you accept?', answer: 'We accept cash on delivery and other local payment options. Confirm with us on WhatsApp when you order.' },
  { question: 'Can I customize spice level?', answer: 'Yes. Mention your preference (mild, medium, or spicy) when you order on WhatsApp.' },
]

const heroRef = ref<HTMLElement | null>(null)
const trustRef = ref<HTMLElement | null>(null)
const menuRef = ref<HTMLElement | null>(null)
const dealsRef = ref<HTMLElement | null>(null)
const reviewsRef = ref<HTMLElement | null>(null)
const howRef = ref<HTMLElement | null>(null)
const faqRef = ref<HTMLElement | null>(null)
const contactRef = ref<HTMLElement | null>(null)

const refMap: Record<string, Ref<HTMLElement | null>> = {
  hero: heroRef,
  trust: trustRef,
  menu: menuRef,
  deals: dealsRef,
  reviews: reviewsRef,
  how: howRef,
  faq: faqRef,
  contact: contactRef,
}

const revealed = reactive<Record<string, boolean>>({
  hero: false,
  trust: false,
  menu: false,
  deals: false,
  reviews: false,
  how: false,
  faq: false,
  contact: false,
})

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function useRevealOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const id = entry.target.getAttribute('data-reveal-id')
        if (id && id in revealed) revealed[id] = true
      })
    },
    { rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
  )

  onMounted(() => {
    Object.entries(refMap).forEach(([id, r]) => {
      const el = (r as Ref<HTMLElement | null>).value
      if (el) {
        el.setAttribute('data-reveal-id', id)
        observer.observe(el)
      }
    })
  })

  onUnmounted(() => observer.disconnect())
}

useRevealOnScroll()

async function onSubmit() {
  const result = await formRef.value?.validate()
  if (!result?.valid) return
  snackbar.value = true
  form.name = ''
  form.phone = ''
  form.message = ''
}
</script>

<script lang="ts">
// Subcomponents (self-contained in same file)
export default {
  components: {
    HeroCard: {
      props: { revealed: Boolean },
      template: `
        <v-sheet class="hero-card pa-6 rounded-lg" color="surface" elevation="4">
          <div class="d-flex flex-column align-center">
            <div class="hero-card-badges mb-3">
              <v-chip size="small" color="primary">Freshly Prepared</v-chip>
              <v-chip size="small" color="accent" class="ms-2">Office Friendly</v-chip>
            </div>
            <p class="text-h6 font-weight-bold text-deep-green mb-1">Samosas • Rolls</p>
            <p class="text-body-2 text-brown mb-2">&amp; more from our kitchen</p>
            <div class="hero-card-visual mt-4" aria-hidden="true">
              <span class="hero-card-blob hero-card-blob-1"></span>
              <span class="hero-card-blob hero-card-blob-2"></span>
              <span class="visually-hidden">Homemade food</span>
            </div>
          </div>
        </v-sheet>
      `,
    },
    TrustBadge: {
      props: { icon: String, label: String },
      template: `
        <div class="trust-badge d-flex flex-column align-center">
          <div class="trust-icon" v-html="iconSvg" aria-hidden="true"></div>
          <span class="text-body-2 font-weight-medium text-deep-green mt-2">{{ label }}</span>
        </div>
      `,
      computed: {
        iconSvg() {
          const icons: Record<string, string> = {
            hygiene: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#1F3D2B" stroke-width="2"><path d="M12 3v18M3 12h18"/><circle cx="12" cy="12" r="4"/></svg>',
            quality: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#1F3D2B" stroke-width="2"><path d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/></svg>',
            booking: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#1F3D2B" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
            delivery: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#1F3D2B" stroke-width="2"><path d="M5 17H3V7h2v10zM19 17h-2V7h2v10z"/><path d="M1 9h22v6H1z"/><path d="M8 13h8"/></svg>',
          }
          return icons[this.icon] || ''
        },
      },
    },
    StarRating: {
      props: { count: { type: Number, default: 5 } },
      template: `
        <div class="star-rating d-flex" role="img" :aria-label="'Rated ' + count + ' out of 5 stars'">
          <span v-for="i in 5" :key="i" class="star" v-html="i <= count ? starFilled : starEmpty" aria-hidden="true"></span>
        </div>
      `,
      data() {
        return {
          starFilled: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="#C89B4A"><path d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/></svg>',
          starEmpty: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#C89B4A" stroke-width="2"><path d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/></svg>',
        }
      },
    },
  },
}
</script>

<style scoped>
.landing {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 20% 15%, rgba(200, 155, 74, 0.15), transparent 35%),
    radial-gradient(circle at 86% 12%, rgba(31, 61, 43, 0.12), transparent 34%),
    linear-gradient(180deg, #f7f1e8 0%, #efe8dc 100%);
  min-height: 100vh;
}

.bg-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(36px);
  pointer-events: none;
  z-index: 0;
  opacity: 0.55;
}

.bg-glow-1 {
  width: 320px;
  height: 320px;
  background: rgba(200, 155, 74, 0.25);
  top: -140px;
  left: -80px;
  animation: drift 12s ease-in-out infinite;
}

.bg-glow-2 {
  width: 280px;
  height: 280px;
  background: rgba(31, 61, 43, 0.18);
  right: -90px;
  top: 260px;
  animation: drift 14s ease-in-out infinite reverse;
}

.landing > *:not(.bg-glow) {
  position: relative;
  z-index: 1;
}

.app-bar {
  backdrop-filter: blur(10px);
  background: linear-gradient(90deg, rgba(247, 241, 232, 0.95), rgba(247, 241, 232, 0.82)) !important;
  border-bottom: 1px solid rgba(31, 61, 43, 0.09);
  box-shadow: 0 10px 26px rgba(31, 61, 43, 0.06);
}

.brand-link {
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease;
}

.brand-link:hover {
  transform: translateY(-2px);
}

.header-logo {
  object-fit: contain;
  flex-shrink: 0;
  filter: drop-shadow(0 8px 12px rgba(0, 0, 0, 0.16));
}

.footer-logo {
  object-fit: contain;
  filter: drop-shadow(0 6px 10px rgba(0, 0, 0, 0.14));
}

.brand-name {
  letter-spacing: 0.08em;
  color: #1f3d2b;
}

.urdu {
  font-size: 1rem;
  color: #6b3f1d;
  opacity: 0.95;
}

.gap-nav {
  gap: 1.3rem;
}

.nav-link {
  color: #1f3d2b;
  text-decoration: none;
  font-size: 0.94rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  transition: color 0.25s ease, transform 0.25s ease;
}

.nav-link:hover,
.footer-link:hover {
  color: #c89b4a;
  transform: translateY(-1px);
}

.nav-link:focus-visible,
.footer-link:focus-visible {
  outline: 2px solid #c89b4a;
  outline-offset: 2px;
}

.order-btn {
  font-weight: 700;
  letter-spacing: 0.01em;
  box-shadow: 0 10px 20px rgba(200, 155, 74, 0.26);
}

.order-btn:focus-visible {
  outline: 2px solid #1f3d2b;
  outline-offset: 2px;
}

.text-deep-green { color: #1f3d2b; }
.text-gold { color: #c89b4a; }
.text-brown { color: #6b3f1d; }

.hero {
  min-height: 68vh;
  display: flex;
  align-items: center;
}

.hero-copy h1 {
  letter-spacing: 0.01em;
  line-height: 1.12;
  text-wrap: balance;
}

.hero-chip {
  font-weight: 600;
  letter-spacing: 0.02em;
  box-shadow: 0 8px 20px rgba(200, 155, 74, 0.28);
}

.reveal {
  opacity: 0;
  transform: translateY(24px) scale(0.98);
  transition: opacity 0.75s ease, transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.hero-card {
  border: 1px solid rgba(200, 155, 74, 0.32);
  background: linear-gradient(150deg, rgba(255, 255, 255, 0.66), rgba(247, 241, 232, 0.95)) !important;
  box-shadow: 0 24px 44px rgba(31, 61, 43, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.7);
  transition: transform 0.35s ease;
}

.hero-card:hover {
  transform: translateY(-6px);
}

.hero-card-visual {
  position: relative;
  width: 170px;
  height: 110px;
  background: linear-gradient(135deg, #6b3f1d 0%, #c89b4a 56%, #1f3d2b 100%);
  border-radius: 16px;
  opacity: 0.82;
  overflow: hidden;
  box-shadow: inset 0 2px 10px rgba(255, 255, 255, 0.25);
}

.hero-card-blob {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
}

.hero-card-blob-1 {
  width: 54px;
  height: 54px;
  top: 14px;
  left: 20px;
}

.hero-card-blob-2 {
  width: 42px;
  height: 42px;
  bottom: 14px;
  right: 18px;
}

.trust-strip {
  background: linear-gradient(90deg, rgba(31, 61, 43, 0.08), rgba(31, 61, 43, 0.04));
  border-top: 1px solid rgba(31, 61, 43, 0.08);
  border-bottom: 1px solid rgba(31, 61, 43, 0.08);
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1.2rem;
  justify-items: center;
}

.trust-badge {
  text-align: center;
  width: 100%;
  max-width: 220px;
  padding: 14px 10px;
  border-radius: 16px;
  border: 1px solid rgba(200, 155, 74, 0.22);
  background: rgba(255, 255, 255, 0.45);
  transition: transform 0.28s ease, box-shadow 0.28s ease;
}

.trust-badge:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 24px rgba(31, 61, 43, 0.12);
}

.trust-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(200, 155, 74, 0.42), rgba(200, 155, 74, 0.2));
  display: flex;
  align-items: center;
  justify-content: center;
}

.trust-icon :deep(svg) {
  flex-shrink: 0;
}

.section-alt {
  background: linear-gradient(180deg, rgba(31, 61, 43, 0.05), rgba(31, 61, 43, 0.03));
}

.premium-card {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.5)) !important;
  backdrop-filter: blur(3px);
  border: 1px solid rgba(200, 155, 74, 0.22) !important;
  box-shadow: 0 14px 28px rgba(31, 61, 43, 0.1);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.premium-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 36px rgba(31, 61, 43, 0.16);
}

.menu-card,
.deal-card,
.review-card,
.contact-form-card {
  border-radius: 18px;
}

.menu-icon :deep(svg) {
  display: block;
}

.deal-card-highlight {
  border: 2px solid #c89b4a !important;
  background: linear-gradient(180deg, rgba(200, 155, 74, 0.18), rgba(255, 255, 255, 0.54)) !important;
}

.step-block {
  padding: 1.2rem 1rem;
  border-radius: 16px;
  border: 1px solid rgba(200, 155, 74, 0.2);
  background: rgba(255, 255, 255, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.step-block:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 26px rgba(31, 61, 43, 0.12);
}

.step-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(160deg, #d4ad63, #c89b4a);
  color: #fff;
  font-weight: 700;
  box-shadow: 0 8px 16px rgba(200, 155, 74, 0.35);
}

.faq-panels {
  max-width: 760px;
  margin: 0 auto;
}

.faq-panel {
  border-radius: 14px !important;
  margin-bottom: 10px;
  overflow: hidden;
}

.faq-panel :deep(.v-expansion-panel-title) {
  font-weight: 700;
  color: #1f3d2b;
  background: rgba(255, 255, 255, 0.55);
}

.faq-panel :deep(.v-expansion-panel-text__wrapper) {
  background: rgba(255, 255, 255, 0.35);
}

.whatsapp-cta {
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.premium-cta {
  background: linear-gradient(160deg, #1f3d2b, #2f5a42) !important;
  border: 1px solid rgba(200, 155, 74, 0.3);
  box-shadow: 0 20px 34px rgba(31, 61, 43, 0.26);
}

.footer {
  background: linear-gradient(180deg, rgba(31, 61, 43, 0.12), rgba(31, 61, 43, 0.08));
  border-top: 1px solid rgba(31, 61, 43, 0.12);
}

.footer-link {
  color: #6b3f1d;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
}

.menu .v-col,
#deals .v-col,
#reviews .v-col {
  transition-delay: 60ms;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@keyframes drift {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-14px); }
}

@media (max-width: 960px) {
  .hero {
    min-height: 54vh;
  }

  .header-logo {
    width: 68px;
    height: 68px;
  }
}
</style>
