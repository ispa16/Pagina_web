var video = document.getElementById("videoPlayer");
function playPause() { 
    if (video.paused) 
        video.play(); 
    else 
        video.pause(); 
}
function reload() { 
   video.load(); 
}
function makeLarge() { 
     
    video.width = 100 ; 
}
function makeSmall() { 
    video.width = 250; 
} 
function makeNormal() { 
    video.width = 500; 
}
function getFullscreen(){
    if(video.requestFullscreen) {
        elem.requestFullscreen();
      } else if(video.mozRequestFullScreen) {//firefox
        video.mozRequestFullScreen();
      } else if(video.webkitRequestFullscreen) {//chrome safari opera
        video.webkitRequestFullscreen();
      } else if(video.msRequestFullscreen) {//internet explorer edge
        video.msRequestFullscreen();
      }
}
$(document).ready(function(){
    //Funcion que se activa al evento click del button o boton
    $('#completa').click(function(){
             // Codigo para activar pantalla completa en Chrome o Safari 5
             //Seleccionamos el elemnento video del ID video, en este caso la misma etiqueta video
             $('#videoPlayer')[0].webkitEnterFullScreen();
                 
             /* Codigo para activar pantalla completa en Firefox 8 o proximas actualizaciones
             $('#video')[0].mozRequestFullScreen();
             */
         
    });
});