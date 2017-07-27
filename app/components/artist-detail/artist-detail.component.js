angular.module('components.artistDetail').component('artistDetail', {
  templateUrl: 'components/artist-detail/artist-detail.template.html',
  controller: ['Album', '$routeParams', '$window',
    function AlbumController(Album, $routeParams, $window) {
      var self = this;
      self.orderProp = '';
      self.albums;
      self.slicedAlbums;

      self.currentPage = 1;
      Album.get({artistId : $routeParams.artistId }, function(data){
        self.albums = data.results;
        //save artist info in variable artist
        self.artist = data.results[0];
        // console.log(self.artist);
        //remove artist info from data (sent by API by default)
        self.albums.splice(0, 1);

//Pagination
        self.totalItems = self.albums.length;
        // console.log(self.albums.length);
        self.currentPage = 1;
        self.itemsPerPage = 5;

        setPagingData(self.currentPage);

        self.setPage = function (pageNo) {
          self.currentPage = pageNo;
        };

        self.pageChanged = function() {
          setPagingData(self.currentPage);
        };

        function setPagingData(page) {
          var pagedData = self.albums.slice(
            (page - 1) * self.itemsPerPage,
            page * self.itemsPerPage
          );
          self.slicedAlbums = pagedData;
        }

        self.numPages = Math.ceil(self.totalItems / self.itemsPerPage);
        // console.log(self.numPages);
      });
      //console.log(self.albums);
      self.goToiTunesAlbumPage = function(url){
        $window.open(url, '_blank');
      }
    }
  ]
});
