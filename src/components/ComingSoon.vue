<template>
 <div class="comingsoon">
            <div class="appear37">
                <h1>COMING SOON</h1>
                <div class="comingimage">
                    <img src="../../images/coming.png" alt="coming soon" width="900px">
                    <div class="centered">Rocket Mania</div>
                        <p id="timer"></p>
                </div>
            </div>
</div>
</template>

<script>
function comingSoon() {
  let countDownDate = new Date("Aug 4, 2022 12:12:25").getTime();
  let x = setInterval(function() {
  
    let now = new Date().getTime();
  
    let distance = countDownDate - now;
  
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
    
  }, 1000);
  
}
comingSoon();
</script >

<style scoped>
.comingsoon {
    text-align: center;
    color: white;
    font-size: 20px;
}
.comingimage {
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
    color: white;
    font-size: 40px;
    font-weight: bold;
}
.centered {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
}
#timer {
    font-size: 30px;
}
</style>