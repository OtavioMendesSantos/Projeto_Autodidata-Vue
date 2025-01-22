/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '@/stores'
import router from '@/router'

// Caso eu queira diminuir tamanho do arquivo, posso importar os arquivos manualmente:
// import { VTextField, VList, VListItem, VCheckboxBtn } from 'vuetify/components';

// const vuetify = createVuetify({
//   components: {
//     VTextField,
//     VList,
//     VListItem,
//     VCheckboxBtn,
//   },
// });

export function registerPlugins (app) {
  app
    .use(vuetify) // Faz com que todos os arquivos do Vue fiquem acessíveis globalmente
    .use(router)
    .use(pinia)
}
