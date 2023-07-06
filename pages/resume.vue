<script setup>
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue';

useHead({
  title: 'Resume',
})

const { locale } = useI18n({ useScope: 'global' })
const { data: workItems } = await useFetch('/api/work-history')
const { data: skills } = await useFetch('/api/skills')
const { data: categories } = await useFetch('/api/skill-categories')

const categorisedSkills = computed(() => {
  return categories.value
    .map((category) => ({ id: category.id, title: category.title[locale.value], skills: skills.value.filter(skill => skill.category === category.id) }))
    .filter(catSkill => catSkill.skills.length > 0)
    .sort((a, b) => a.title < b.title ? -1 : a.title > b.title ? 1 : 0)
})

</script>

<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.resume') }}
      </h2>
    </header>

    <section class="timeline">
      <ol class="timeline-list">
        <li v-for="work in workItems" :key="work.id" class="timeline-item">
          <h4 class="h4 timeline-item-subtitle">
            {{ work.title[locale] }}
          </h4>
          <span class="timeline-date">
            {{ new Date(work.dateFrom.year, work.dateFrom.month - 1, work.dateFrom.day).toLocaleDateString(locale) }}
            —
            {{ new Date(work.dateTo.year, work.dateTo.month - 1, work.dateTo.day).toLocaleDateString(locale) }}</span>
          <h5 class="h4 timeline-item-title">
            <span>
              <a :href="work.website[locale]" target="_blank">{{ work.employer[locale] }} 🌐</a>
            </span>
            <span v-show="work.department[locale]" class="timeline-item-desc">
              — {{ work.department[locale] }}
            </span>
          </h5>
          <p v-show="work.address[locale]" class="timeline-item-desc">
            📍 {{ work.address[locale] }}
          </p>
          <p class="timeline-text">
            {{ work.description[locale] }}
          </p>
        </li>
      </ol>
    </section>

    <section class="skill">
      <div class="skills-container content-card">
        <h3 class="h3">Skills</h3>
        <div v-for="categorisedSkill in categorisedSkills" :key="categorisedSkill.id" class="skills-container content-card">
          <h4 class="h4">{{categorisedSkill.title}}</h4>
          <ul class="skills-list">
            <li v-for="skill in categorisedSkill.skills" :key="skill.id" class="skills-item">
              <div class="title-wrapper">
                <Icon :icon="skill.icon" class="text-ranko-500 text-[3rem]" style="width: 2rem;" />
                <h5 class="h5">
                  {{skill.name}}
                </h5>
                <data :value="skill.skill">{{ skill.skill }}%</data>
              </div>

              <div class="skill-progress-bg">
                <div class="skill-progress-fill" :style="{ width: skill.skill + '%' }" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </article>
</template>
