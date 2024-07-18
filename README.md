# Nuxt Vuetify Layer

## Install

```bash
pnpm add -D @gabortorma/nuxt-vuetify-layer
```

## Usage

Then add the dependency to their `extends` in `nuxt.config`:

```js
defineNuxtConfig({
  extends: [
    '@gabortorma/nuxt-vuetify-layer'
  ]
})
```

## Configuration

This layer is a preset for the [vuetify-nuxt-module](https://nuxt.com/modules/vuetify-nuxt-module). You can configure it by adding a `vuetify` key to your `nuxt.config`:

```js
defineNuxtConfig({
  vuetify: [
    // your config based
  ]
})
```
