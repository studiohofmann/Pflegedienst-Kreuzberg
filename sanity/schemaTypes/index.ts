import { type SchemaTypeDefinition } from 'sanity'
import footer from '../schemas/footer'
import home from '../schemas/home'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [footer, home],
}
