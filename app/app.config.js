'use strict';

// Declare app level module which depends on views, and components
angular.module('iTunesApp').
  config(['$locationProvider', '$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/artist', {
          template: '<artist-list></artist-list>'
        }).
        when('/artist/:artistId', {
          template: '<artist-detail></artist-detail>'
        }).
        otherwise({redirectTo: '/artist'});
    }
  ]);
