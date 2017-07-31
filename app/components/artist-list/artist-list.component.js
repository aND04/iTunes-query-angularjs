angular.module('components.artistList').component('artistList', {
  templateUrl: 'components/artist-list/artist-list.template.html',
  controller: ['Artist', '$window',
    function ArtistListController(Artist, $window) {
      var self = this;
      self.query = '';
      self.results = [];
      self.callOnChange = function(){
        self.getResults(self.query);
      };

      self.getResults = function(term){
        if (term.length > 0){
          Artist.query({ query: term }, function(data){
            self.results = data.results;
          });
        }else{
          self.results = [];
        }
        return self.results;
      }

      self.goToAppleMusic = function(url){
        $window.open(url, '_blank');
      };
    }
  ]
});
