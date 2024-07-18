<script lang="ts" setup></script>

<template>
  <!-- z-index is workaround for hydration style mismatch https://github.com/vuetifyjs/vuetify/issues/19015#issuecomment-1887682634 -->
  <VFooter app color="primary" class="w-100" style="z-index: 1004;">
    <slot name="append" />
    <VSpacer />
    <slot name="default" />
    <VSpacer />
    <slot name="prepend">
      <FooterCopyright />
    </slot>
  </VFooter>
</template>
