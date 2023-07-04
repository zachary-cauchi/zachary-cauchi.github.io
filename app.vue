<script setup>
import { useI18n } from 'vue-i18n'
import { useLocaleStore } from './composables/locale'
const { locale } = useI18n({ useScope: 'global' })
const cookieLocale = useLocaleStore()
const config = useRuntimeConfig()

locale.value = cookieLocale.getLocale || 'en'

const loadingPage = ref()

onBeforeMount(() => {
  loadingPage.value = false
})

onMounted(() => {
  setTimeout(() => {
    loadingPage.value = true
  }, 1000)
})

// Add necessary details for Search Engine Optimisation
useSeoMeta({
  title: 'Zachary Cauchi Portfolio Site',
  ogTitle: 'Zachary Cauchi Portfolio Site',
  description: 'This is my portfolio, everything you need to know about me in a handfull of pages.',
  ogDescription: 'This is my portfolio, everything you need to know about me in a handfull of pages.',
  ogImage: 'https://avatars.githubusercontent.com/u/23012377?v=4',
  ogImageAlt: 'Zachary Cauchi\'s Avatar',
  ogImageHeight: 460,
  ogImageWidth: 460,
  creator: 'Zachary Cauchi',
  author: 'Zachary Cauchi',
  generator: 'nuxt',
  googleSiteVerification: config.public.googleSiteVerification,
  mobileWebAppCapable: 'yes',
  appleMobileWebAppCapable: 'yes',
  appleMobileWebAppStatusBarStyle: 'default',
  charset: 'utf-8',
  ogLocale: 'en_GB',
  ogType: 'website',
  ogUrl: 'zachary-cauchi.github.io',
  publisher: 'GitHub',
  viewport: {
    width: 'device-width',
    height: 'device-height',
    initialScale: 1,
  },
  robots: {
    all: true,
    maxImagePreview: 'standard'
  }
})

</script>

<template>
  <LoadingPage v-show="!loadingPage" />

  <NuxtLayout>
    <NuxtPage transition />
  </NuxtLayout>
</template>

<style>
.v-enter-active, .v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>
