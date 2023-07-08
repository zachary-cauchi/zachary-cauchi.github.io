<script setup>
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue';

const props = defineProps({
  about: Object,
})

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })
</script>

<template>
  <li class="about-item">

    <div class="about-content-box">
      <p class="about-item-text">
        {{ about.description?.en.about }}
      </p>
      <br/>
      <p class="hobbies-item-text">
        {{ about.description?.en.hobbies }}
      </p>
      <br/>
      <p class="foryou-item-text">
        {{ about.description?.en.forYou }}
      </p>
    </div>
  </li>
</template>
