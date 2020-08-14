var s = document.getElementById('audio')
var num = 0
var odd = 0

var list = ["../src/AAP-SE-MAUSIIQUII_Himesh+Reshammiya_Song_2016.mp3",
    "../src/Ananya_Birla_-_Meant_To_Be.mp3",
    "../src/Adiga Adiga.mp3",
    "../src/All_We_Know.mp3",
    "../src/Arijit_Singh_-_Sanam_Re.mp3",
    "../src/Atif_Aslam,_Tajdar-e-Haram,_Coke_Studio_Season_8.mp3",
    "../src/Baarish_Lete_Aana_-_Official_Video__Darshan_Raval.mp3",
    "../src/Cartoon_-_On_&_On.mp3",
    "../src/Chal_Wahan_Jaate_Hain.mp3",
    "../src/Dheere_Dheere.mp3",
    "../src/Dil_Diyan_Gallan.mp3",
    "../src/Dil_Kyun_Yeh_Mera_[Full_Song]_-_Kites_(2010).mp3",
    "../src/Ed_Sheeran_-_Thinking_Out_Loud.mp3",
    "../src/Ee_Hridayam.mp3",
    "../src/Evare.mp3",
    "../src/Illenium_-_Reverie_(feat._King_Deco).mp3",
    "../src/Illenium_-_Spirals_(feat._King_Deco).mp3",
    "../src/Inkem_Inkem_Inkem_Kaavaale.mp3",
    "../src/Judaai.mp3",
    "../src/Kaise_Mujhe_Tum_Mil_Gayi__8D_A_R_Rahman.mp3",
    "../src/Khawaja Mere Khawaja.mp3",
    "../src/Perfect.mp3",
    "../src/Sajdaa.mp3",
    "../src/Telusa_Telusa_Video_Song__Sarrainodu.mp3",
    "../src/The_Chainsmokers_-_Closer_ft._Halsey.mp3",
    "../src/Thodi_Der.mp3",

]

var identity;

function progress(time) {
    var p = document.getElementById('pro')
    if (time == 'break') {
        return null
    }
    time = parseInt(time)
    console.log(time)
        // var i = 0

    // function move() {
    //     if (i == 0) {
    //         i = 1
    //         var width = 1
    //         var id = setInterval(frame, time)

    //         function frame() {
    //             if (width >= 100) {
    //                 clearInterval(id)
    //                 i = 0
    //             } else {
    //                 width++
    //                 p.style.width = width + "%"
    //                 p.textContent = width + "%"
    //             }
    //         }
    //     }
    // }
    // move()

    // setTimeout(() => {
    //         for (var i = 0; i < time; i++) {
    //             p.style.width = i + "%"
    //             p.textContent = i + "%"
    //         }
    //     }, 1000)
    //     (function myLoop(i) {
    //         setTimeout(() => {
    //             p.style.width = i + "%"
    //             p.textContent = i + "%"; //  your code here                
    //             if (--i) myLoop(i); //  decrement i and call myLoop again if i > 0
    //         }, 1000)
    //     })(time);

    var i = 1; //  set your counter to 1

    function myLoop() { //  create a loop function
        identity = setTimeout(function() { //  call a 3s setTimeout when the loop is called
            p.style.width = parseInt((i / time) * 100) + "%"
            p.textContent = parseInt((i / time) * 100) + "%"
            i++; //  increment the counter
            if (i < time) { //  if the counter < 10, call the loop function
                myLoop(); //  ..  again which will trigger another 
            } //  ..  setTimeout()
        }, 1000)
    }

    myLoop();
    // for (var i = 0; i < time; i++) {
    // setTimeout(() => {
    //     p.style.width = i + "%"
    //     p.textContent = i + "%"
    // }, 2000);
    // sleep(i)

    // }




    // function update() {
    //     // var element = document.getElementById("myprogressBar");
    //     var width = 1;
    //     identity = setInterval(scene, time * 10);

    //     function scene() {
    //         if (width >= 100) {
    //             clearInterval(identity);
    //         } else {
    //             width++;
    //             p.style.width = width + '%';
    //             p.innerHTML = width * 1 + '%';
    //         }
    //     }
    // }
    // update()

}

function name(num) {
    var x = list[num]
    y = x.slice(7, -4)
    var mark = document.getElementById('mark')
    mark.textContent = y
}

function playing() {
    s.src = list[num]
    if (odd % 2 == 0) {
        console.log(odd)
        s.play()
        odd++
        s.addEventListener('loadedmetadata', function() {
            var duration = audio.duration;
            // console.log("The duration of the song is of: " + duration + " seconds");
            // progress(duration)
        })
    } else if (odd % 2 != 0) {
        console.log(odd)
        s.pause()
        odd++
        // clearTimeout(identity)
        identity = null
            // progress("break")
    }
    name(num)
}

function next() {
    if (num > list.length || num == list.length) {
        num = 0
        s.src = list[num]
        s.play()
        return null
    }
    // console.log(num)
    num++
    s.src = list[num]
    s.play()
    name(num)
    s.addEventListener('loadedmetadata', function() {
        var duration = audio.duration;
        // console.log("The duration of the song is of: " + duration + " seconds");
        // setTimeout(() => { progress() }, duration)
        // clearTimeout(identity)
        // identity = null
        // progress(duration)
    })
}

function previous() {
    if (num == 0) {
        return null
    }
    num--
    s.src = list[num]
    s.play()
    name(num)
    s.addEventListener('loadedmetadata', function() {
        var duration = audio.duration;
        // console.log("The duration of the song is of: " + duration + " seconds");
        // clearTimeout(identity)
        // identity = null
        // progress(duration)
    })
}