<template>
  <section id="contact" class="py-20 md:py-32 bg-brand-950">
    <v-container>
      <div class="max-w-2xl mx-auto">
        <!-- Section header -->
        <div class="text-center mb-12">
          <p class="text-xs font-body tracking-[0.3em] uppercase text-brand-500 mb-4">
            Contact
          </p>
          <h2 class="section-title text-3xl md:text-5xl text-brand-100 mb-4">
            {{ siteData.inquiryForm.heading }}
          </h2>
          <p class="font-body font-light text-brand-400 text-base md:text-lg">
            {{ siteData.inquiryForm.subtitle }}
          </p>
        </div>

        <!-- Success message -->
        <v-alert
          v-if="submitted"
          type="success"
          variant="tonal"
          class="mb-8 !bg-green-900/30 !text-green-300"
          closable
          @click:close="submitted = false"
        >
          Thank you for your inquiry! I'll get back to you soon.
        </v-alert>

        <!-- Error message -->
        <v-alert
          v-if="error"
          type="error"
          variant="tonal"
          class="mb-8"
          closable
          @click:close="error = ''"
        >
          {{ error }}
        </v-alert>

        <!-- Form -->
        <form
          v-if="!submitted"
          @submit.prevent="submitForm"
          class="space-y-6"
        >
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <v-text-field
              v-model="form.name"
              label="Name"
              variant="outlined"
              density="comfortable"
              :rules="[rules.required]"
              class="inquiry-field"
              color="secondary"
              bg-color="transparent"
            />
            <v-text-field
              v-model="form.email"
              label="Email"
              type="email"
              variant="outlined"
              density="comfortable"
              :rules="[rules.required, rules.email]"
              class="inquiry-field"
              color="secondary"
              bg-color="transparent"
            />
          </div>

          <v-select
            v-model="form.service"
            :items="serviceOptions"
            label="Type of Session"
            variant="outlined"
            density="comfortable"
            class="inquiry-field"
            color="secondary"
            bg-color="transparent"
          />

          <v-text-field
            v-model="form.date"
            label="Preferred Date (optional)"
            type="date"
            variant="outlined"
            density="comfortable"
            class="inquiry-field"
            color="secondary"
            bg-color="transparent"
          />

          <v-textarea
            v-model="form.message"
            label="Tell me about your vision"
            variant="outlined"
            density="comfortable"
            rows="5"
            :rules="[rules.required]"
            class="inquiry-field"
            color="secondary"
            bg-color="transparent"
          />

          <div class="text-center pt-4">
            <v-btn
              type="submit"
              size="large"
              variant="flat"
              :loading="loading"
              class="!bg-brand-200 !text-brand-950 hover:!bg-white !px-14 !tracking-widest !text-xs !font-body"
            >
              Send Inquiry
            </v-btn>
          </div>
        </form>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import siteData from '@/data/photos.json'

const submitted = ref(false)
const loading = ref(false)
const error = ref('')

const form = reactive({
  name: '',
  email: '',
  service: '',
  date: '',
  message: '',
})

const serviceOptions = [
  'Portrait Session',
  'Wedding / Engagement',
  'Event Coverage',
  'Lifestyle / Brand',
  'Landscape / Fine Art',
  'Other',
]

const rules = {
  required: v => !!v || 'This field is required',
  email: v => /.+@.+\..+/.test(v) || 'Please enter a valid email',
}

async function submitForm() {
  // Basic validation
  if (!form.name || !form.email || !form.message) {
    error.value = 'Please fill in all required fields.'
    return
  }
  if (!rules.email(form.email) === true) {
    error.value = 'Please enter a valid email address.'
    return
  }

  loading.value = true
  error.value = ''

  try {
    const response = await fetch(siteData.inquiryForm.formspreeEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        service: form.service,
        date: form.date,
        message: form.message,
      }),
    })

    if (response.ok) {
      submitted.value = true
      Object.assign(form, { name: '', email: '', service: '', date: '', message: '' })
    } else {
      error.value = 'Something went wrong. Please try again or email me directly.'
    }
  } catch {
    error.value = 'Network error. Please check your connection and try again.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.inquiry-field :deep(.v-field__outline) {
  --v-field-border-opacity: 0.2;
}
</style>
