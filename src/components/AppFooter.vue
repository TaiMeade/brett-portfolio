<template>
  <footer class="py-10 border-t border-brand-900/50">
    <v-container>
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="font-display text-lg text-brand-400">
          {{ siteData.hero.headline }}
        </p>
        <p class="font-body text-xs text-brand-600 tracking-wider">
          &copy; {{ currentYear }} All rights reserved.
        </p>
        <div class="flex gap-4">
          <a
            v-if="siteData.social.instagram"
            :href="siteData.social.instagram"
            target="_blank"
            rel="noopener noreferrer"
            class="text-brand-600 hover:text-brand-300 transition-colors"
          >
            <v-icon size="20">mdi-instagram</v-icon>
          </a>
          <a
            v-if="siteData.social.email"
            :href="`mailto:${siteData.social.email}`"
            class="text-brand-600 hover:text-brand-300 transition-colors"
          >
            <v-icon size="20">mdi-email-outline</v-icon>
          </a>
        </div>
      </div>
    </v-container>
  </footer>
</template>

<script setup>
import siteData from '@/data/photos.json'

const currentYear = new Date().getFullYear()
</script>
