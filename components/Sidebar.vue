<script setup>
const info_more_btn = ref(null)

let isClosed = ref(false)
let contactsIcon = ref('chevron-up')
let showHideContactsMsg = ref('Hide Contacts')

function toggleMenu(event) {
  isClosed = !isClosed
  contactsIcon.value = isClosed ? 'chevron-down' : 'chevron-up'
  showHideContactsMsg.value = isClosed ? 'Show Contacts' : 'Hide Contacts'
  event.currentTarget.blur()
}

onMounted(() => {
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
      </div>
    </div>

    <div class="sidebar-info_more">
      <div class="separator" />

      <div class="social-list">
        <p class="sidebar-blurb">
          A professional developer with a penchant for learning about new tech.
        </p>
      </div>

      <div class="separator" />

      <div class="contacts-list">
        <div class="contact-item">
          <NuxtLink to="https://github.com/zachary-cauchi" class="social-link" target="_blank">
            <div class="icon-box">
              <ion-icon name="logo-github" />
            </div>
          </NuxtLink>
        </div>

        <div class="contact-item">
          <NuxtLink to="https://www.linkedin.com/in/zachary-c-586559164/" class="social-link" target="_blank">
            <div class="icon-box">
              <ion-icon name="logo-linkedin" />
            </div>
          </NuxtLink>
        </div>

        <div class="contact-item">
          <NuxtLink to="mailto:zach.cauchi@hotmail.com" class="social-link" target="_blank">
            <div class="icon-box">
              <ion-icon name="mail-outline" />
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </aside>
</template>
