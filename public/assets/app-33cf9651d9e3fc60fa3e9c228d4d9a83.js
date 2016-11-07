(function() {
  init(function() {
    var coords, i, myCollection, myMap, myPlacemark;
    myMap = new ymaps.Map('map', {
      center: [55.066408, 82.926520],
      controls: ['smallMapDefaultSet'],
      zoom: 15
    });
    coords = [[55.75, 37.50], [55.75, 37.71], [55.70, 37.70]];
    myCollection = new ymaps.GeoObjectCollection({}, {
      preset: 'twirl#redIcon',
      draggable: true
    });
    i = 0;
    while (i < coords.length) {
      myCollection.add(new ymaps.Placemark(coords[i]));
      i++;
    }
    myMap.geoObjects.add(myCollection);
    myCollection.getMap().events.add('click', function() {
      myCollection.removeAll();
    });
    ymaps.ready(init);
    myMap = void 0;
    return myPlacemark = void 0;
  });

}).call(this);
(function() {
  $(document).ready(function() {
    $('body').scrollspy({
      target: '#scroll',
      offset: 100
    });
    $('#scroll').on('activate.bs.scrollspy', function(event) {
      var sectionName;
      sectionName = $('ul.nav.navbar-nav .active > a').attr('href');
      $('ul.side-nav .active').removeClass('active');
      return $('.side-nav a[href="' + sectionName + '"]').parent('li').addClass('active');
    });
    $('ul.nav > li, a.navbar-brand').on('click', function(event) {
      var addPadding, hash, scroll;
      $('.navigation ul.nav').collapse('hide');
      this.hash = $(this).children('a').attr('href') || 'home';
      if (this.hash !== '') {
        event.preventDefault();
        hash = this.hash;
        if ($(document).width() < 992) {
          addPadding = 56;
          scroll = 0;
        } else {
          scroll = 800;
          addPadding = 0;
        }
        $('html, body').animate({
          scrollTop: $(hash).offset().top - addPadding
        }, scroll, function() {
          window.location.hash = hash;
        });
      }
    });
  });

}).call(this);
window.onload = function() {

  var placeholders = document.getElementsByClassName('placeholder image'),
      smallImages = document.getElementsByClassName('img-small'),
      videos = document.getElementsByClassName('placeholder video')

  // 1: load small image and show it
  const smallImagesLength = smallImages.length;
  for (var i = 0; i < smallImagesLength; i++ ) {
    loadSmallImages(i);
  };

  // 2: load videos
  var videosLength = videos.length;
  for (var i = 0; i < videosLength; i++ ) {
    loadVideos(i);
  }

  // 3: load large image
  const placeholdersLength = placeholders.length;
  for (var i = 0; i < placeholdersLength; i++ ) {
    loadLargeImages(i);
  }


  function loadSmallImages(i) {
    var smallImage = smallImages[i];
    var img = new Image();

    img.src = smallImage.src;
    img.onload = function () {
      smallImage.classList.add('loaded');
    };
  }

  function loadLargeImages(i) {
    var placeholder = placeholders[i];

    var imgLarge = new Image();
    imgLarge.src = placeholder.dataset.large;
    imgLarge.onload = function () {
      imgLarge.classList.add('loaded');
      imgLarge.classList.add('img-responsive');    
    }
    placeholder.appendChild(imgLarge);
  }

  function loadVideos(i) {
    var video = videos[i];

    var videoLarge =  document.createElement('video');
    videoLarge.src = video.dataset.large;
    videoLarge.autoplay = true;
    videoLarge.loop = true;

    videoLarge.onloadeddata = function () {
      videoLarge.classList.add('loaded');
    }
    video.appendChild(videoLarge);
  }
}
;
