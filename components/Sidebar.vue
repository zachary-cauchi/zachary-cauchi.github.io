<script setup>
const info_more_btn = ref(null)

let isClosed = ref(true)
let contactsIcon = ref('chevron-down')
let showHideContactsMsg = ref('Show Contacts')

function toggleMenu(event) {
  isClosed = !isClosed
  contactsIcon.value = isClosed ? 'chevron-down' : 'chevron-up'
  showHideContactsMsg.value = isClosed ? 'Show Contacts' : 'Hide Contacts'
  event.currentTarget.blur()
}

onMounted(() => {
  // Fixes 1st click not working.
  info_more_btn.value.click()
})

</script>

<template>
  <aside class="sidebar" :class="{ active: isClosed }">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="/images/avatar.png" alt="Photo" width="80">
      </figure>

      <div class="info-content">
        <h1 class="name" title="Zachary Cauchi">
          Zachary Cauchi
        </h1>

        <p class="title text-center xl:block flex items-center justify-center gap-1">
          <span class="xl:after:content-[''] after:content-[',']">Backend Developer</span>
          <span>Project tinkerer</span>
        </p>
      </div>

      <button ref="info_more_btn" class="info_more-btn" @click="toggleMenu">
        <span v-text="showHideContactsMsg"></span>

        <!-- TODO: Improve with animation -->
        <ion-icon :name="contactsIcon" />
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator" />

      <ul class="social-list">
        <p class="contact-title">
          My email:
        </p>
        <li class="social-item">
          <NuxtLink to="mailto:zach.cauchi@hotmail.com" class="social-link" target="_blank">
            <ion-icon name="mail-outline" />
          </NuxtLink>
        </li>
      </ul>

      <div class="separator" />

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-github" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Github
            </p>

            <a href="https://github.com/zachary-cauchi" class="contact-link" target="_blank">zachary-cauchi</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-linkedin" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Linkedin
            </p>

            <a href="https://www.linkedin.com/in/zachary-c-586559164/" class="contact-link" target="_blank">Zachary Cauchi</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="location-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Location
            </p>

            <address>Malta 🇲🇹</address>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>
