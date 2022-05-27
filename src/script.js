
function abrirMenu() {
  menuOculto = document.getElementById("menuOculto");
  menuOculto.style.display = "block"
}


function esconderMenu() {
  menuOculto = document.getElementById("menuOculto");
  menuOculto.style.display = "none"
}








/** Videos */
var video = document.getElementById("video");
var play = document.getElementById("play");
var currentTime = document.getElementById("currentTime");
var duration = document.getElementById("duration");
var timezone = new Date().getTimezoneOffset() * 60 * 1000;

play.addEventListener("click", function () {
  if (video.ended) 
    video.currentTime = 0;
  video.play();
});

video.addEventListener('play', function () {
  play.style.display = "none";
});

video.addEventListener('pause', function () {
  play.style.display = "inline-block";
});

video.addEventListener('ended', function () {
  play.style.display = "inline-block";
});

video.addEventListener('timeupdate', function () {
  updateDuracao();
});

var timeToString = function (time) {
  var pad = "000";
  var tempo = new Date((time * 1000) + timezone);
  var millis = tempo.getMilliseconds().toString();
  tempo = tempo.toLocaleTimeString();
  millis = pad.substring(0, pad.length - millis.length) + millis;
  return tempo + "." + millis;
}

var updateDuracao = function () {
  currentTime.textContent = timeToString(video.currentTime);
  duration.textContent = timeToString(video.duration);
};

if (video.readyState > 0) {
  updateDuracao();
} else {
  video.addEventListener('loadedmetadata', updateDuracao);
}

