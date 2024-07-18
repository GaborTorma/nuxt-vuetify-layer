<script lang="ts" setup>
const { copyrightTo, copyrightFrom } = useAppConfig()
const thisYear = new Date().getFullYear()
const years = thisYear !== copyrightFrom ? `${copyrightFrom}-${thisYear}` : copyrightFrom
const copyright = ref(`${copyrightTo} © ${years}`)
</script>

<template>
  <span>{{ copyright }}</span>
</template>
