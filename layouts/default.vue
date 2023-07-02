<script setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n({ useScope: 'global' })

useHead({
  htmlAttrs: {
    lang: locale,
  },
  titleTemplate: (pageTitle) => {
    return pageTitle ? `${pageTitle} - Zachary Cauchi ` : 'Zachary Cauchi'
  },
  meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Portfolio site belonging to Zachary Cauchi.' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'og:image', content: 'https://avatars.githubusercontent.com/u/23012377?v=4' }
    ],
  link: [
    {
      rel: 'icon', type: 'image/png', href: '../images/icon.png',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap',
      crossorigin: '',
    },
  ],
  script: [
    {
      src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js',
      body: false,
      type: 'module',
    },
    {
      src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js',
      body: false,
      nomodule: true,
    },
  ],
})

</script>

<template>
  <main class="relative">
    <Sidebar />
    <div class="main-content">
      <Navbar />
      <slot />
    </div>
    <!-- <ConstructionBar /> -->
    <CookieBar />
  </main>
</template>
