angular.
  module('core.album').
    factory('Album', ['$resource',
      function($resource){
        return $resource('https://itunes.apple.com/lookup?id=:artistId' + '&entity=album', {}, {
          query: {
            method: 'GET',
            isArray: true
          }
        });
      }
  ]);
