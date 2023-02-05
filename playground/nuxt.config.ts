import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['../src/module'],
  "nuxt-smart-app-banner": {
    addPlugin: true,
    bannerOptions: {
      title: "Title",
      androidAppId: "com.redlinegames.attackhole",
      icon: "https://icon-library.com/images/play-store-icon/play-store-icon-9.jpg",
      iosAppId: "426415753",
      appStoreLanguage: "by",
    }

  }
})
