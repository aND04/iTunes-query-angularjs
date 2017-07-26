angular.module('components.artistList').component('artistList', {
  templateUrl: 'components/artist-list/artist-list.template.html',
  controller: ['Artist', '$window',
    function ArtistListController(Artist, $window) {
      var self = this;
      self.query = '';
      self.callOnChange = function(){
        if (self.query.length > 0){
          Artist.get({ query: self.query }, function(data){
            self.results = data.results;
            console.log(data.results);
          });
        }else{
          self.results = [];
        }
      };

      self.goToAppleMusic = function(url){
        $window.open(url, '_blank');
      };
    }
  ]
});
