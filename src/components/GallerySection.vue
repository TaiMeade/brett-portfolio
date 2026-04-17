<template>
  <section id="gallery" class="py-20 md:py-32">
    <v-container>
      <!-- Section header -->
      <div class="text-center mb-12">
        <p class="text-xs font-body tracking-[0.3em] uppercase text-brand-500 mb-4">Portfolio</p>
        <h2 class="section-title text-3xl md:text-5xl text-brand-100 mb-6">
          Selected Work
        </h2>
      </div>

      <!-- Category filter -->
      <div class="flex flex-wrap justify-center gap-2 mb-12">
        <v-btn
          size="small"
          :variant="activeCategory === 'all' ? 'flat' : 'outlined'"
          :class="activeCategory === 'all'
            ? '!bg-brand-200 !text-brand-950 !tracking-widest !text-[10px] !font-body'
            : '!border-brand-700 !text-brand-400 !tracking-widest !text-[10px] !font-body hover:!border-brand-400'"
          @click="activeCategory = 'all'"
        >
          All
        </v-btn>
        <v-btn
          v-for="cat in siteData.categories"
          :key="cat.id"
          size="small"
          :variant="activeCategory === cat.id ? 'flat' : 'outlined'"
          :class="activeCategory === cat.id
            ? '!bg-brand-200 !text-brand-950 !tracking-widest !text-[10px] !font-body'
            : '!border-brand-700 !text-brand-400 !tracking-widest !text-[10px] !font-body hover:!border-brand-400'"
          @click="activeCategory = cat.id"
        >
          {{ cat.name }}
        </v-btn>
      </div>

      <!-- Masonry-style grid -->
      <v-row no-gutters class="ga-4">
        <v-col
          v-for="(col, colIndex) in photoColumns"
          :key="colIndex"
          :class="colIndex % 2 !== 0 ? 'pt-10' : ''"
          class="d-flex flex-column ga-4"
        >
          <TransitionGroup name="fade-up">
            <div
              v-for="photo in col"
              :key="photo.id"
              class="gallery-item rounded-sm cursor-pointer"
              @click="openLightbox(photo)"
            >
              <img
                :src="photo.src"
                :alt="photo.alt"
                class="w-full rounded-sm"
                loading="lazy"
              />
              <div class="overlay rounded-sm">
                <div>
                  <p class="text-white font-body text-sm font-light">{{ photo.alt }}</p>
                  <p class="text-brand-400 text-xs uppercase tracking-widest mt-1">
                    {{ getCategoryName(photo.category) }}
                  </p>
                </div>
              </div>
            </div>
          </TransitionGroup>
        </v-col>
      </v-row>

      <!-- See More button -->
      <div v-if="hasMore" class="flex justify-center mt-10">
        <v-btn
          size="small"
          variant="outlined"
          class="!border-brand-700 !text-brand-400 !tracking-widest !text-[10px] !font-body hover:!border-brand-400"
          @click="showAll = true"
        >
          See More
        </v-btn>
      </div>

      <!-- Empty state -->
      <div v-if="filteredPhotos.length === 0" class="text-center py-20">
        <v-icon size="64" class="text-brand-700 mb-4">mdi-image-off-outline</v-icon>
        <p class="text-brand-500 font-body">No photos in this category yet.</p>
      </div>
    </v-container>

    <!-- Lightbox dialog -->
    <v-dialog v-model="lightbox" max-width="1200" content-class="!bg-transparent !shadow-none">
      <div class="relative" @click.self="lightbox = false">
        <v-btn
          icon
          variant="flat"
          size="small"
          class="!absolute !top-2 !right-2 !z-10 !bg-black/50 !text-white"
          @click="lightbox = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <img
          v-if="activePhoto"
          :src="activePhoto.src"
          :alt="activePhoto.alt"
          class="w-full max-h-[90vh] object-contain rounded"
        />
      </div>
    </v-dialog>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useDisplay } from 'vuetify'
import siteData from '@/data/photos.json'

const { smAndDown, mdAndDown } = useDisplay()
const activeCategory = ref('all')
const lightbox = ref(false)
const activePhoto = ref(null)

const NUM_COLUMNS = computed(() => {
  if (smAndDown.value) return 1
  if (mdAndDown.value) return 3
  return 5
})

const INITIAL_VISIBLE = computed(() => {
  if (smAndDown.value) return 2
  if (mdAndDown.value) return 6
  return 10
})

const showAll = ref(false)

const filteredPhotos = computed(() => {
  if (activeCategory.value === 'all') return siteData.gallery
  return siteData.gallery.filter(p => p.category === activeCategory.value)
})

const visiblePhotos = computed(() => {
  if (showAll.value) return filteredPhotos.value
  return filteredPhotos.value.slice(0, INITIAL_VISIBLE.value)
})

const hasMore = computed(() => filteredPhotos.value.length > INITIAL_VISIBLE.value && !showAll.value)

const photoColumns = computed(() => {
  const n = NUM_COLUMNS.value
  const cols = Array.from({ length: n }, () => [])
  visiblePhotos.value.forEach((photo, i) => {
    cols[i % n].push(photo)
  })
  return cols
})

function getCategoryName(categoryId) {
  const cat = siteData.categories.find(c => c.id === categoryId)
  return cat ? cat.name : categoryId
}

function openLightbox(photo) {
  activePhoto.value = photo
  lightbox.value = true
}

watch(activeCategory, () => {
  showAll.value = false
})
</script>
