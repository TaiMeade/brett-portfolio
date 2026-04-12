<template>
  <v-app-bar
    :elevation="scrolled ? 2 : 0"
    :class="[
      'transition-all duration-500',
      scrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
    ]"
    flat
    absolute
  >
    <v-container class="flex items-center justify-between">
      <a href="#" class="font-display text-xl md:text-2xl tracking-wide text-brand-100 no-underline">
        {{ siteData.hero.headline }}
      </a>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm font-body font-light tracking-widest uppercase text-brand-300 hover:text-white transition-colors duration-300 no-underline"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Mobile hamburger -->
      <v-app-bar-nav-icon
        class="md:!hidden text-brand-200"
        @click="drawer = !drawer"
      />
    </v-container>
  </v-app-bar>

  <!-- Mobile drawer -->
  <v-navigation-drawer
    v-model="drawer"
    location="right"
    temporary
    class="bg-brand-950"
  >
    <v-list class="mt-16">
      <v-list-item
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        class="text-brand-200"
        @click="drawer = false"
      >
        <v-list-item-title class="font-body text-sm tracking-widest uppercase">
          {{ link.label }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import siteData from '@/data/photos.json'

const drawer = ref(false)
const scrolled = ref(false)

const navLinks = [
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
