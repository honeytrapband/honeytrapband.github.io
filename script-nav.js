window.onload = function(){
  var nav_links = document.querySelectorAll('.hexagon');
  for(var i = 0; i<nav_links.length; i++){
    nav_links[i].addEventListener('mousedown', function(e){
      var all_nav_links = document.querySelectorAll('.hexagon');
      var elem = e.target.parentNode.parentNode;
      if(!elem.className.match(/active/gi)){
        for(var j = 0; j<all_nav_links.length; j++){
        if (all_nav_links[j].className.match(/active/gi)){
          all_nav_links[j].className = all_nav_links[j].className.replace(/ active/gi, '')
        }
      }
        elem.className += ' active';
      } else {
        //elem.className = elem.className.replace(/ active/, '');
      }
    });
  }
  var scene = document.getElementById('hex-nav');
}

function showHome() {
  var home = document.getElementById("home-page");
  var about = document.getElementById("about-page");
  var music = document.getElementById("music-page");
  var merch = document.getElementById("merch-page");

  document.body.style.overflow = "visible";

  home.style.display = "block";
  about.style.display = "none";
  music.style.display = "none";
  merch.style.display = "none";
}

function showAbout() {
  var home = document.getElementById("home-page");
  var about = document.getElementById("about-page");
  var music = document.getElementById("music-page");
  var merch = document.getElementById("merch-page");

  document.body.style.overflow = "hidden";

  home.style.display = "none";
  about.style.display = "block";
  music.style.display = "none";
  merch.style.display = "none";
}

function showMusic() {
  var home = document.getElementById("home-page");
  var about = document.getElementById("about-page");
  var music = document.getElementById("music-page");
  var merch = document.getElementById("merch-page");

  document.body.style.overflow = "visible";

  home.style.display = "none";
  about.style.display = "none";
  music.style.display = "block";
  merch.style.display = "none";
}

function showMerch() {
  var home = document.getElementById("home-page");
  var about = document.getElementById("about-page");
  var music = document.getElementById("music-page");
  var merch = document.getElementById("merch-page");

  document.body.style.overflow = "visible";

  home.style.display = "none";
  about.style.display = "none";
  music.style.display = "none";
  merch.style.display = "block";
}