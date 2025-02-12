module.exports = {
  presets: [
    'react-app', // React app preset for compatibility
    '@babel/preset-env', // Transform modern JavaScript features
  ],
  plugins: [
    '@babel/plugin-proposal-private-methods',
    '@babel/plugin-proposal-private-property-in-object', // Add this plugin
  ],
};