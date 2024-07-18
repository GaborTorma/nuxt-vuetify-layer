<script lang="ts" setup>
const { shortName } = useAppConfig()
</script>

<template>
  <VAppBar color="primary" density="compact">
    <template #prepend>
      <slot name="prepend">
        <VAppBarTitle> {{ shortName }} </VAppBarTitle>
      </slot>
    </template>
    <VSpacer />
    <slot name="default" />
    <VSpacer />
    <template #append>
      <slot name="append" />
    </template>
  </VAppBar>
</template>
