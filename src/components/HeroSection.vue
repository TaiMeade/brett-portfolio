<template>
  <section
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Background image with overlay -->
    <div class="absolute inset-0">
      <img
        :src="siteData.hero.backgroundImage"
        alt="Hero background"
        class="w-full h-full object-cover"
        loading="eager"
      />
      <div class="absolute inset-0 bg-black/60" />
    </div>

    <!-- Fallback gradient when no image -->
    <div class="absolute inset-0 bg-gradient-to-br from-brand-950 via-black to-brand-900 -z-10" />

    <!-- Content -->
    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <h1
        class="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium text-white mb-6 leading-tight"
      >
        {{ siteData.hero.headline }}
      </h1>
      <p
        class="font-body font-light text-lg sm:text-xl md:text-2xl text-brand-300 mb-10 tracking-wide"
      >
        {{ siteData.hero.tagline }}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <v-btn
          href="#gallery"
          size="large"
          class="!border-brand-400 !text-brand-100 hover:!bg-brand-400/10 !px-10 !tracking-widest !text-xs !font-body"
        >
          View Portfolio
        </v-btn>
        <v-btn
          href="#contact"
          size="large"
          variant="flat"
          class="!bg-brand-200 !text-brand-950 hover:!bg-white !px-10 !tracking-widest !text-xs !font-body"
        >
          Get in Touch
        </v-btn>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <v-icon color="white" size="28" class="opacity-50">mdi-chevron-down</v-icon>
    </div>
  </section>
</template>

<script setup>
import siteData from '@/data/photos.json'
</script>
