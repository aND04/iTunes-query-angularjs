angular.
  module('core.artist').
    factory('Artist', ['$resource',
      function($resource){
        return $resource('https://itunes.apple.com/search?term=:query' + '&entity=musicArtist&limit=5', {}, {
          query: {
            method: 'GET',
            isArray: false
          }
        });
      }
  ]);
