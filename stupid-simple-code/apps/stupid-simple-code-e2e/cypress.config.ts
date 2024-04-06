import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run stupid-simple-code:serve:development',
        production: 'nx run stupid-simple-code:serve:production',
      },
      ciWebServerCommand: 'nx run stupid-simple-code:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
