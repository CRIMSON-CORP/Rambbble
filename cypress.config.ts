import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        excludeSpecPattern: ['**/__snapshots__/*', '**/__image_snapshots__/*'],
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },

    viewportWidth: 1440,
    viewportHeight: 900,

    component: {
        excludeSpecPattern: ['**/__snapshots__/*', '**/__image_snapshots__/*'],
        devServer: {
            framework: 'next',
            bundler: 'webpack',
        },
    },

    env: {
        'cypress-plugin-snapshots': {
            autoCleanUp: false,
            autopassNewSnapshots: true,
            backgroundBlend: 'difference',
            diffLines: 3,
            excludeFields: [],
            ignoreExtraArrayItems: false,
            ignoreExtraFields: false,
            imageConfig: {
                createDiffImage: true,
                resizeDevicePixelRatio: false,
                threshold: 0.01,
                thresholdType: 'percent',
            },
            normalizeJson: true,
            prettier: true,
            screenshotConfig: {
                blackout: [],
                capture: 'fullPage',
                clip: null,
                disableTimersAndAnimations: true,
                log: false,
                scale: false,
                timeout: 30000,
            },
            serverEnabled: true,
            serverHost: 'localhost',
            serverPort: 2121,
            updateSnapshots: false,
        },
    },
});
