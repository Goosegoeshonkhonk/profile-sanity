import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'profile-sanity',

  projectId: 'hy2hj4oh',
  dataset: 'studio',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
