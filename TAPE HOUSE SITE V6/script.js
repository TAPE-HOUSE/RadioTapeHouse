const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.menu1').toggleClass('isOpen')
    });
});




/* const colorWhite = document.querySelector('.colorwhite');
let menuOpen = false;
colorWhite.addEventListener('click', () => {
    if(!whiteOpen) {
        colorWhite.classList.add('white');
        whiteOpen = true;
    } else {
        colorWhite.classList.remove('White');
        whiteOpen = false;
    }
});

$(document).ready(function(){
    $('.whiteOpen').click(function(){
        $('.music-data').toggleClass('isOpen')
    });
}); */

// PLAYER

const audio = document.getElementById("jp_audio_0");
        let isPlaying = false;
        let distillerieSonoreIconSrc = "logoplayer.png"

        let currentMusic = {
            track: "",
            title: "Tape House",
            artist: "Radio En Direct",
            picture: distillerieSonoreIconSrc,
        };
        const streamUrl = "https://manager5.streamradio.fr:1295/stream";
        //   props: track, title, artist, picture
        const apiUrl =
            "https://api.moncmsradio.fr/manager.php?url=https://manager5.streamradio.fr:1280&server=1";

        const module = {};
        module.getCurrentMusic = (callback) => {
            $.ajax({
                url: apiUrl,
                method: "get",
            }).done(callback);
        };
        module.updateUI = () => {
            // if (!isPlaying) return;
            document.getElementById("titre").innerText = currentMusic.title;
            document.getElementById("artist").innerText = currentMusic.artist;
            document.getElementById("titre2").innerText = currentMusic.title;
            document.getElementById("artist2").innerText = currentMusic.artist;
            document.getElementById("titre3").innerText = currentMusic.title;
            document.getElementById("artist3").innerText = currentMusic.artist;
            document.getElementById("titre4").innerText = currentMusic.title;
            document.getElementById("artist4").innerText = currentMusic.artist;
            document.getElementById("titre5").innerText = currentMusic.title;
            document.getElementById("artist5").innerText = currentMusic.artist;
            document.getElementById("titre6").innerText = currentMusic.title;
            document.getElementById("artist6").innerText = currentMusic.artist;
            document.getElementById("titre7").innerText = currentMusic.title;
            document.getElementById("artist7").innerText = currentMusic.artist;
            document.getElementById("titre8").innerText = currentMusic.title;
            document.getElementById("artist8").innerText = currentMusic.artist;
            document.getElementById("titre9").innerText = currentMusic.title;
            document.getElementById("artist9").innerText = currentMusic.artist;
            document.getElementById("titre10").innerText = currentMusic.title;
            document.getElementById("artist10").innerText = currentMusic.artist;
            document.getElementById("titre11").innerText = currentMusic.title;
            document.getElementById("artist11").innerText = currentMusic.artist;
            document.getElementById("titre12").innerText = currentMusic.title;
            document.getElementById("artist12").innerText = currentMusic.artist;
            document.getElementById("titre13").innerText = currentMusic.title;
            document.getElementById("artist13").innerText = currentMusic.artist;
            document.getElementById("titre14").innerText = currentMusic.title;
            document.getElementById("artist14").innerText = currentMusic.artist;
            document.getElementById("titre15").innerText = currentMusic.title;
            document.getElementById("artist15").innerText = currentMusic.artist;
            document.getElementById("titre16").innerText = currentMusic.title;
            document.getElementById("artist16").innerText = currentMusic.artist;
            document
                .getElementById("cover")
                .setAttribute("src", currentMusic.picture);
        };
        module.setIsPlaying = (state) => {
            // $("#loading").css("display", "none");
            $("#btnPlay").css("display", "none");
            $("#btnPause").css("display", "none");
            $("#loading").css("display", "none");
            if (state == "playing") {
                $("#btnPlay").css("display", "none");
                $("#btnPause").css("display", "block");
                $("#loading").css("display", "none");
                return;
            } else if (state == "abort") {
                $("#btnPlay").css("display", "block");
                $("#btnPause").css("display", "none");
                $("#loading").css("display", "none");

            } else if (state == "waiting") {
                $("#btnPlay").css("display", "none");
                $("#btnPause").css("display", "block");
                $("#loading").css("display", "none");
               // $("#loading").css("display", "none");

            } else {}
        };

        module.openUrl = (url) => {
            window.open(url, "_blank");
        };



        setInterval(() => {
            module.getCurrentMusic((data) => {
                currentMusic = data;
                if (data.picture == null) {
                    currentMusic.picture = distillerieSonoreIconSrc; 
                }
            });
            module.updateUI();
            // update cover
        }, 4000);


        $("#btnPlay").on("click", () => {
            // setInterval(radioInfoInterval);
            audio.src = streamUrl;
            audio.play();
            module.setIsPlaying("playing");
            module.updateUI();
        });

        $("#btnPause").on("click", () => {
            audio.src = "";
            // clearInterval(radioInfoInterval);
            module.setIsPlaying("abort");
        });

        /* document
            .getElementById("cover")
            .setAttribute("src", currentMusic.picture);
        audio.setAttribute("src", streamUrl); */

        audio.addEventListener("playing", () => {
            isPlaying = true;
            module.setIsPlaying("playing");
        });
        audio.addEventListener("abort", () => {
            isPlaying = false;
            module.setIsPlaying("abort");
        });
        audio.addEventListener("waiting", () => {
            isPlaying = false;
            module.setIsPlaying("waiting");
        });


        



       
//Retourne l'élément body
var html = document.querySelector('html');

//Retourne la liste des boutons
var colorbtn = document.querySelectorAll('.colorbtn button');

//On assigne un comportement au clic pour chacun des boutons
for(var i = 0; i < colorbtn.length; i++) {
  colorbtn[i].addEventListener('click',changeColor);
}

function changeColor(){
  //On réinitialise les classes de l'élément body
  html.className = '';
  
  //On ajoute la classe correspondant à la couleur à l'élément body
  html.classList.add(this.dataset.color);
}

//Retourne l'élément body
var html = document.querySelector('html');

//Retourne la liste des boutons
var colorbtnmenu = document.querySelectorAll('.colorbtnmenu button');

//On assigne un comportement au clic pour chacun des boutons
for(var i = 0; i < colorbtnmenu.length; i++) {
  colorbtnmenu[i].addEventListener('click',changeColor);
}

function changeColor(){
  //On réinitialise les classes de l'élément body
  html.className = '';
  
  //On ajoute la classe correspondant à la couleur à l'élément body
  html.classList.add(this.dataset.color);
}