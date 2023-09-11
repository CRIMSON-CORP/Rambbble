import { initPlugin } from 'cypress-plugin-snapshots/plugin';

module.exports = (on: any, config: any) => {
    initPlugin(on, config);
    return config;
};
