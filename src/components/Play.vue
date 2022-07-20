<template>
  <div
    data-aos="zoom-out-up"
    data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="true"
    data-aos-offset="600"
  >
<div class="play" id="c3">
    <h2 class="playtext">PLAY ON:</h2>
        <a href="https://play.google.com/store/apps/details?id=com.TopLexGames.CaptainSmashTok&gl=RO" target="_blank">
            <img class="android" src="../../images/google-play-badge.png">
        </a>
        <a href="https://www.apple.com/app-store/" target="_blank"> 
            <img class="apple" src="../../images/apple.png">
        </a>
</div>
</div>
</template>

<script>
export default {
    name: 'Play',
    
};
</script>

<style scoped>
.play {
    padding: 10px;
    height: 200px;
}
.playtext {
    color: white;
    font-weight: bold;
    font-size: 30px;
    text-align: center;
}
.android {
    margin-left: 500px;
    width: 350px;
    height: 150px;
}
.apple {
    margin-left: 200px;
    width: 300px;
    height: 100px;
}
</style>