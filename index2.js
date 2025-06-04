// var rect1 =  {x: 5, y:5, width: 20, height: 20};
// var rect2 = {x: 20, y: 10, width: 20, height: 20}


// Enemy posisjon
console.log("Enemy posisjon");

var enemy = document.getElementById('enemy')
console.log(enemy);

// Enemy2 posisjon
console.log("Enemy2 posisjon");

var enemy2 = document.getElementById('enemy2')
console.log(enemy2);

//Enemy3 posisjon
console.log("Enemy3 posisjon");

var enemy3 = document.getElementById('enemy3')
console.log(enemy3);

// mimic posisjon
console.log("mimic posisjon");

var mimic = document.getElementById('mimic')
console.log(mimic);

// sike posisjon
console.log("sike posisjon");

var sike = document.getElementById('sike')
console.log(sike);

// Player posisjon
console.log("player posisjon");

var player = document.getElementById('player')
console.log(player);


var liv = 3;

// keys
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' || event.code === 'KeyM') {
        player.style.animation = "none"; 
        void player.offsetWidth; 
        player.style.animation = (event.code === 'Space') ? "jump 400ms linear" : "dukk 300ms linear";

        if (mimicActive) {
            let slideAnim = "mimicSlide 5s infinite linear";
            mimic.style.animation = slideAnim + ", mimicJump 0.5s ease-out";
            setTimeout(() => {
                if (mimicActive) {
                    mimic.style.animation = slideAnim;
                }
            }, 500);
        }
    }
});

// score økning 
let tall = 0;

function økMed1() {
    tall += 1;
    document.getElementById("score").textContent = tall;
}
setInterval(økMed1, 50)
// mimic ikke aktiv flag
let mimicActive = false;


// random animation generer

function skiftAnimation() {
    let randomTall = Math.floor(Math.random() * 9) + 1
    // let randomTall = 9;k
    console.log("animasjon:" + " " + randomTall);
    
    

    let boks = document.getElementById('enemy');

    let dobbelBoks = document.getElementById('enemy2');

    let trippelBoks = document.getElementById('enemy3');

    let mimic = document.getElementById('mimic');

    let sike = document.getElementById('sike');

    if (randomTall === 1) {
        // de som er her
        boks.style.animationName = "enemySlideSkli";
        dobbelBoks.style.animationName = "enemySlide2";
        trippelBoks.style.animationName = "enemy3oppe";
        // de som ikke er her
        sike.style.animationName = "none";
        sikeSlag.style.animationName = "none";
        mimic.style.animation = "none";
        mimicActive = false;
        
    } else if (randomTall === 2) { // ned, ned, opp
        boks.style.animationName = "enemySlide4";
        dobbelBoks.style.animationName = "enemy2Slide";
        trippelBoks.style.animationName = "enemy3Slide";

        sike.style.animationName = "none";
        sikeSlag.style.animationName = "none";
        mimic.style.animation = "none";
        mimicActive = false;


    } else if (randomTall === 3) {
        mimic.style.animation = "mimicSlide 5s infinite linear";
        mimicActive = true;

        boks.style.animationName = "none";
        dobbelBoks.style.animationName = "none";
        trippelBoks.style.animationName = "none";
        sike.style.animationName = "none";
        sikeSlag.style.animationName = "none";

    } else if (randomTall === 4) {
        sike.style.animationName = "enemySike";
        boks.style.animationName = "enemyOppe";
        sikeSlag.style.animationName = "sikeSlag";

        dobbelBoks.style.animationName = "none";
        trippelBoks.style.animationName = "none";
        mimic.style.animation = "none";
        mimicActive = false;

    } else if (randomTall === 5) {
        boks.style.animationName = "enemySlide5"; 
        dobbelBoks.style.animationName = "dobbelEnemy"
        sike.style.animationName = "enemySike2";
        sikeSlag.style.animationName = "sikeSlag2";

        trippelBoks.style.animationName = "none";
        mimic.style.animation = "none";
        mimicActive = false;

    } else if (randomTall === 6) {
        boks.style.animationName = "enemySlide";
        dobbelBoks.style.animationName = "dobbelEnemy2";
        trippelBoks.style.animationName = "tredjeEnemy";

        sike.style.animationName = "none"
        sikeSlag.style.animationName = "none"
        mimic.style.animation = "none";
        mimicActive = false;

    } else if (randomTall === 7) {
        boks.style.animationName = "enemyFall";
        dobbelBoks.style.animationName = "enemy2Høy";
        trippelBoks.style.animationName = "enemy3Shock";

        sike.style.animationName = "none"
        sikeSlag.style.animationName = "none"
        mimic.style.animation = "none";
        mimicActive = false;

    } else if (randomTall === 8) {
        boks.style.animationName = "enemySlide100";
        dobbelBoks.style.animationName = "enemy2Slide2";
        trippelBoks.style.animationName = "enemy3Oppe2";

        sike.style.animationName = "none"
        sikeSlag.style.animationName = "none"
        mimic.style.animation = "none";
        mimicActive = false;
        
    } else if (randomTall === 9) {
        boks.style.animationName = "enemySlide6";
        dobbelBoks.style.animationName = "enemy2Slide2";
        trippelBoks.style.animationName = "enemy3Oppe2";
        sike.style.animationName = "enemySike3"
        sikeSlag.style.animationName = "sikeSlag3"

        mimic.style.animation = "none";
        mimicActive = false;

    } else if (randomTall === 10) {
        
    } else if (randomTall === 11) {
                
    } else {
        mimic.style.animation = "none";
        mimicActive = false;
    } 
}
setInterval(skiftAnimation, 5000);

// finn kordinater
function finnKordinater() {
    let kordinaterPlayer = player.getBoundingClientRect();
    console.log(kordinaterPlayer);

    let kordinaterEnemy = enemy.getBoundingClientRect();
    console.log(kordinaterEnemy);

    let kordinaterEnemy2 = enemy2.getBoundingClientRect();
    console.log(kordinaterEnemy2);

    let kordinaterEnemy3 = enemy3.getBoundingClientRect();
    console.log(kordinaterEnemy3);

    let kordinaterMimic = mimic.getBoundingClientRect();
    console.log(kordinaterMimic);

    let kordinaterSike = sike.getBoundingClientRect();
    console.log(kordinaterSike);
}
// setInterval(finnKordinater, 1000)

// hitbox sjekk
function sjekkKollisjon() {
    let kordinaterPlayer = player.getBoundingClientRect();

    let kordinaterEnemy = enemy.getBoundingClientRect();

    let kordinaterEnemy2 = enemy2.getBoundingClientRect();

    let kordinaterEnemy3 = enemy3.getBoundingClientRect();

    let kordinaterMimic = mimic.getBoundingClientRect();
  
    let kordinaterSike = sike.getBoundingClientRect();
    
    let kordinaterSlag = sikeSlag.getBoundingClientRect();

    let boks = document.getElementById('enemy');;
        
    //en boks hitbox
    if ( kordinaterPlayer.x < kordinaterEnemy.x + kordinaterEnemy.width && kordinaterPlayer.x + kordinaterPlayer.width > kordinaterEnemy.x && kordinaterPlayer.y < kordinaterEnemy.y + kordinaterEnemy.height && kordinaterPlayer.y + kordinaterPlayer.height > kordinaterEnemy.y
    ) {
        console.log("Enemy");
        boks.style.animation = "none";
        boks.style.display = "none";
        alert("Du tapte!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11");
        let spørsmål = confirm("Har du lyst å prøve en gang til?");

        if (spørsmål) {
            location.reload();
        } else {
            alert("Ok, ha det bra");
            window.close();
        }   
    } 

    // Dobbel enemy boks hitbox
    if ( kordinaterPlayer.x < kordinaterEnemy2.x + kordinaterEnemy2.width && kordinaterPlayer.x + kordinaterPlayer.width > kordinaterEnemy2.x && kordinaterPlayer.y < kordinaterEnemy2.y + kordinaterEnemy2.height && kordinaterPlayer.y + kordinaterPlayer.height > kordinaterEnemy2.y
    ) { 
        console.log("Enemy2");
        boks.style.animation = "none";
        boks.style.display = "none";
        alert("Du tapte!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11");
        let spørsmål = confirm("Har du lyst å prøve en gang til?");


        if (spørsmål) {
            location.reload();
        } else {
            alert("Ok, ha det bra");
            window.close();
        }   
        hit = true;
    } 

    // tredje enemy bokst hitbox
    if ( kordinaterPlayer.x < kordinaterEnemy3.x + kordinaterEnemy3.width && kordinaterPlayer.x + kordinaterPlayer.width > kordinaterEnemy3.x && kordinaterPlayer.y < kordinaterEnemy3.y + kordinaterEnemy3.height && kordinaterPlayer.y + kordinaterPlayer.height > kordinaterEnemy3.y
    ) {
        console.log("Enemy3");
        boks.style.animation = "none";
        boks.style.display = "none";
        alert("Du tapte!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11");
        let spørsmål = confirm("Har du lyst å prøve en gang til?");


        if (spørsmål) {
            location.reload();
        } else {
            alert("Ok, ha det bra");
            window.close();
        }   
        hit = true;
    } 


    // mimic sin hitbox
    if ( kordinaterPlayer.x < kordinaterMimic.x + kordinaterMimic.width && kordinaterPlayer.x + kordinaterPlayer.width > kordinaterMimic.x && kordinaterPlayer.y < kordinaterMimic.y + kordinaterMimic.height && kordinaterPlayer.y + kordinaterPlayer.height > kordinaterMimic.y
    ) {
        console.log("Mimic");
        boks.style.animation = "none";
        boks.style.display = "none";
        alert("Du tapte!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11");
        let spørsmål = confirm("Har du lyst å prøve en gang til?");


        if (spørsmål) {
            location.reload();
        } else {
            alert("Ok, ha det bra");
            window.close();
        }   
        hit = true;
    } 
    // kordinaterSike sin hitbox 
    if ( kordinaterPlayer.x < kordinaterSike.x + kordinaterSike.width && kordinaterPlayer.x + kordinaterPlayer.width > kordinaterSike.x && kordinaterPlayer.y < kordinaterSike.y + kordinaterSike.height && kordinaterPlayer.y + kordinaterPlayer.height > kordinaterSike.y
    ) {
        console.log("Sike");
        console.log(kordinaterSike);
        boks.style.animation = "none";
        boks.style.display = "none";
        alert("Du tapte!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11");
        let spørsmål = confirm("Har du lyst å prøve en gang til?");
        
        if (spørsmål) {
            location.reload();
        } else {
            alert("Ok, ha det bra");
            window.close();
        }   
        hit = true;
    } 
     // kordinaterSike sin hitbox 
    if ( kordinaterPlayer.x < kordinaterSike.x + kordinaterSike.width && kordinaterPlayer.x + kordinaterPlayer.width > kordinaterSike.x && kordinaterPlayer.y < kordinaterSike.y + kordinaterSike.height && kordinaterPlayer.y + kordinaterPlayer.height > kordinaterSike.y
    ) {
        console.log("Sike");
        console.log(kordinaterSike);
        boks.style.animation = "none";
        boks.style.display = "none";
        alert("Du tapte!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11");
        let spørsmål = confirm("Har du lyst å prøve en gang til?");
        
        if (spørsmål) {
            location.reload();
        } else {
            alert("Ok, ha det bra");
            window.close();
        }   
        hit = true;
    }
    // kordinaterSikeSlag sin hitbox 
    if ( kordinaterPlayer.x < kordinaterSlag.x + kordinaterSlag.width && kordinaterPlayer.x + kordinaterPlayer.width > kordinaterSlag.x && kordinaterPlayer.y < kordinaterSlag.y + kordinaterSlag.height && kordinaterPlayer.y + kordinaterPlayer.height > kordinaterSlag.y
    ) {

        console.log("Sike_slag");
        console.log(kordinaterSike);
        boks.style.animation = "none";
        boks.style.display = "none";
        alert("Du tapte!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11");
        let spørsmål = confirm("Har du lyst å prøve en gang til?");

        if (spørsmål) {
            location.reload();
        } else {
            alert("Ok, ha det bra");
            window.close();
        }           
    } 
}
setInterval(sjekkKollisjon, 20);