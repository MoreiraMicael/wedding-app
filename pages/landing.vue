<template>
  <div class="container">
    <!-- Hero Section with integrated CTA -->
    <section class="hero">
      <header class="hero-header">
        <!-- Countdown replaces the static welcome message -->
        <h1>{{ countdown }}</h1>
        <p>Que bom ter-vos aqui. Vamos festejar!</p>
        <button class="cta-btn" @click="handleCTAClick">RSVP Now</button>
      </header>
    </section>

    <!-- Updated Features Section with clickable cards -->
    <section class="features">
      <h2 class="section-title">Our Special Moments</h2>
      <div class="feature-grid">
        <div class="feature-card" v-for="feature in features"
             :key="feature.title"
             @click="feature.mapUrl && getDirections(feature)">
          <h3 class="feature-title">
            <span>{{ feature.title }}</span>
          </h3>
          <p class="feature-desc">{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- CTA Footer Section -->
    <section class="rsvp">
      <p>For more information, please RSVP or contact us at <a href="mailto:info@example.com">info@example.com</a>.</p>
    </section>

    <!-- Footer with toggle FAQs -->
    <footer class="footer">
      <div class="footer-toggle" @click="toggleFAQ">
        <p>FAQs (click to {{ showFAQ ? 'hide' : 'show' }})</p>
      </div>
      <transition name="expand">
        <div v-if="showFAQ" class="faq-content">
          <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
            <p class="faq-question" @click="toggleFaq(index)">
              <strong>Q:</strong> {{ faq.question }}
            </p>
            <transition name="expand">
              <p v-if="faq.show" class="faq-answer"><strong>A:</strong> {{ faq.answer }}</p>
            </transition>
          </div>
        </div>
      </transition>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const features = ref([
  { 
    title: 'Ceremony Venue', 
    description: 'A charming garden setting.', 
    mapUrl: 'https://maps.app.goo.gl/hzbxz6UvipjUB9Mg7'  // Redirect to venue address
  },
  { 
    title: 'Reception', 
    description: 'Elegant décor with a romantic vibe.', 
    mapUrl: 'https://maps.app.goo.gl/6FBnAi5bWsR5NGco7' // Redirect to reception address
  },
  { 
    title: 'Photography', 
    description: 'Capturing memories in every frame.' 
  }
])

const showFAQ = ref(false)
function toggleFAQ() {
  showFAQ.value = !showFAQ.value
  console.log('FAQ toggled:', showFAQ.value)
}

// New: Array of FAQs with individual toggle state
const faqs = ref([
  { question: 'What time does the ceremony start?', answer: '4:00 PM', show: false },
  { question: 'What is the dress code?', answer: 'Formal attire with a touch of personal style.', show: false },
  { question: 'Where is the venue located?', answer: 'In a charming garden setting.', show: false },
  { question: 'Can I bring a plus one?', answer: 'Yes, please indicate details in your RSVP.', show: false },
  { question: 'Is parking available?', answer: 'Yes, ample parking is available onsite.', show: false }
])

function toggleFaq(index: number) {
  faqs.value[index].show = !faqs.value[index].show
  console.log(`FAQ ${index} toggled:`, faqs.value[index].show)
}

function handleCTAClick() {
  window.location.href = 'mailto:your-email@example.com?subject=RSVP&body=Hello';
}

function getDirections(feature: { mapUrl: string }) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const origin = `${position.coords.latitude},${position.coords.longitude}`
        // Construct a Google Maps Directions URL.
        // Note: For best results, consider storing a proper destination (address or coordinates)
        // instead of a shortened mapUrl.
        const url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${encodeURIComponent(feature.mapUrl)}`
        window.open(url, '_blank')
      },
      (error) => {
        // If geolocation fails, fallback to the provided mapUrl.
        window.open(feature.mapUrl, '_blank')
      }
    )
  } else {
    window.open(feature.mapUrl, '_blank')
  }
}

// Countdown to target date (assumed to be 13 de setembro de 2025)
const target = new Date("2025-09-13T00:00:00")
const countdown = ref("")

function updateCountdown() {
  const now = new Date()
  const diff = target.getTime() - now.getTime()
  if (diff <= 0) {
    countdown.value = "O evento já começou!"
  } else {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)
    countdown.value = `Faltam ${days}d ${hours}h ${minutes}m ${seconds}s`
  }
}
const interval = setInterval(updateCountdown, 1000)
onMounted(() => {
  updateCountdown()
})
onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style scoped>
/* Hero Section Refinement */
.hero {
  background: url('https://picsum.photos/1920/1080?random') no-repeat center center;
  background-size: cover;
  position: relative;
  padding: 100px 20px;
  text-align: center;
  color: #fff;
}
.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(197, 210, 188, 0.5); /* subtle pale sage overlay */
  z-index: 0;
}
.hero-header {
  position: relative;
  z-index: 1;
}
.hero-header h1 {
  font-size: 3em;
  margin-bottom: 0.5em;
}
.hero-header p {
  font-size: 1.2em;
  margin-bottom: 1rem;
}
.cta-btn {
  background: #f8c0c0; /* pale pink */
  border: none;
  padding: 0.8em 1.5em;
  font-size: 1em;
  color: #333;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
}
.cta-btn:hover {
  background: #e6a2a2;
}

/* Updated Features Section styling for harmonious look */
.section-title {
  text-align: center;
  font-size: 2em;
  margin-bottom: 20px;
  color: #333;
}

.feature-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.feature-card {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-title {
  font-size: 1.5em;
  margin-bottom: 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.feature-desc {
  font-size: 1em;
  color: #555;
}

/* Retain Get Directions button styling */
.map-btn {
  background: #cddbbf; /* pale sage green */
  border: none;
  padding: 0.5em 1rem;
  font-size: 0.9em;
  color: #333;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
}
.map-btn:hover {
  background: #b1c2a8;
}

/* RSVP Section for additional interaction */
.rsvp {
  text-align: center;
  padding: 20px;
  font-size: 1.1em;
  color: #555;
}
.rsvp a {
  color: #cddbbf; /* pale sage green */
  text-decoration: none;
}
.rsvp a:hover {
  text-decoration: underline;
}

/* Footer toggle styling */
.footer {
  text-align: center;
  background: #f8c0c0; /* pale pink */
  border-top: 1px solid rgba(0,0,0,0.1);
  padding: 10px 20px;
  cursor: pointer;
}
.footer-toggle p {
  margin: 0;
  font-weight: bold;
}

/* FAQ content revealed on toggle */
.faq-content {
  margin-top: 10px;
  text-align: left;
  padding: 10px;
  background: #fff;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 4px;
}
.faq-item {
  margin-bottom: 10px;
  cursor: pointer;
}
.faq-question {
  margin: 0;
}
.faq-answer {
  margin: 5px 0 0 10px;
  font-style: italic;
}

/* Transition for expanding FAQ and answers */
.expand-enter-active, .expand-leave-active {
  transition: max-height 0.5s ease, opacity 0.5s ease;
}
.expand-enter-from, .expand-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}
.expand-enter-to, .expand-leave-from {
  max-height: 300px; /* ensure enough height for content */
  opacity: 1;
}
</style>
