export default defineAppConfig({
  name: 'Application name',
  shortName: 'App name',
  copyrightTo: 'App creator',
  copyrightFrom: 2024,
  themeColor: '#0059A2',

})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    name?: string
    shortName?: string
    copyrightTo?: string
    copyrightFrom?: number
    themeColor?: string
  }
}
