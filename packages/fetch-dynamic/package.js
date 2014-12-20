Package.describe({
  summary: "Return dynamic array from cursor.",
  version: "1.0.0"
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
  api.use('underscore', 'client');
  api.use('minimongo', 'client');
  api.addFiles('fetch-dynamic.js', 'client');
});