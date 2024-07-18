<template>
  <v-app>
    <!-- Header -->
    <Header />
    <!-- Content --v-layout is workaround: https://github.com/vuetifyjs/vuetify/issues/18291#issuecomment-1750023361 -->
    <v-main style="--v-layout-top: 48px; --v-layout-bottom: 24px;">
      <slot />
    </v-main>
    <!-- Footer -->
    <Footer />
  </v-app>
</template>
