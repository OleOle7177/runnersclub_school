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
