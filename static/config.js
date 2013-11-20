requirejs.config({
  baseUrl: 'static/',
  urlArgs: 'bust=' +  Date.now(),
  paths: {
    async: 'assets/js/async-0.2.9',
    twbootstrap: 'assets/js/bootstrap-3.0',
    jquery: 'assets/vendor/jquery-1.10.2',
    text: 'assets/js/require-text-2.0.10',
    lodash: 'assets/js/lodash-2.1',
    angular: 'assets/js/angular-1.2.0',
    angularRoute: 'assets/js/angular-route'
  },

  shim: {
    twbootstrap: ['jquery'],
    angular: {
      exports: 'angular'
    },
    angularRoute: ['angular'],
    bootstrap: ['angularRoute']
  },

  packages: [
    // Screens
    'screens/home',

    //Directives
    'shared/directives/main-menu',

    //Modules
    'modules/search'
  ],

  deps: ['app']
});

requirejs(['bootstrap']);
