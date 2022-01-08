var vjsPlugin = require('./videojs-hlsjs-plugin.js');

if (typeof window !== 'undefined' && window.videojs) {
    vjsPlugin.registerConfigPlugin(window.videojs);
    vjsPlugin.registerSourceHandler(window.videojs);
}

module.exports = { register: vjsPlugin.registerSourceHandler, Hlsjs: vjsPlugin.Hlsjs };
