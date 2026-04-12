<template>
  <section id="about" class="py-20 md:py-32 bg-brand-950">
    <v-container>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center max-w-6xl mx-auto">
        <!-- Image -->
        <div class="relative">
          <div class="aspect-[3/4] overflow-hidden rounded-sm">
            <img
              :src="siteData.about.profileImage"
              :alt="siteData.about.title"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <!-- Decorative border -->
          <div class="absolute -bottom-4 -right-4 w-full h-full border border-brand-600/30 rounded-sm -z-10" />
        </div>

        <!-- Text -->
        <div>
          <p class="text-xs font-body tracking-[0.3em] uppercase text-brand-500 mb-4">
            The Photographer
          </p>
          <h2 class="section-title text-3xl md:text-5xl text-brand-100 mb-8">
            {{ siteData.about.title }}
          </h2>
          <p class="font-body font-light text-brand-300 leading-relaxed text-base md:text-lg whitespace-pre-line">
            {{ siteData.about.description }}
          </p>
          <div class="mt-10 flex gap-4">
            <v-btn
              v-if="siteData.social.instagram"
              :href="siteData.social.instagram"
              target="_blank"
              rel="noopener noreferrer"
              icon
              variant="outlined"
              size="small"
              class="!border-brand-700 !text-brand-400 hover:!border-brand-400"
            >
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn
              v-if="siteData.social.facebook"
              :href="siteData.social.facebook"
              target="_blank"
              rel="noopener noreferrer"
              icon
              variant="outlined"
              size="small"
              class="!border-brand-700 !text-brand-400 hover:!border-brand-400"
            >
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn
              v-if="siteData.social.email"
              :href="`mailto:${siteData.social.email}`"
              icon
              variant="outlined"
              size="small"
              class="!border-brand-700 !text-brand-400 hover:!border-brand-400"
            >
              <v-icon>mdi-email-outline</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import siteData from '@/data/photos.json'
</script>
