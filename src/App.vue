<template>
  <v-app>
    <AppHeader />
    <v-main>
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <InquiryForm />
      <AppFooter />
    </v-main>
  </v-app>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import GallerySection from '@/components/GallerySection.vue'
import AboutSection from '@/components/AboutSection.vue'
import InquiryForm from '@/components/InquiryForm.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>
