<template>
 <!-- NAVBAR -->
        <div class="navbar">
            <a class="active" href="#c0"><i class="fa fa-fw fa-home"></i>HOME</a>
            <a href="#c1"><i class="fa fa-user"> ABOUT</i> </a>
            <a href="#c2"><i class="fa fa-gamepad"> GAMES</i></a>
            <a href="#c3"><i class="fa-solid fa-mobile-screen"> PLATFORMS</i></a>
            <a href="#c4"><i class="fa-solid fa-envelope"> CONTACT</i></a>
            <a button onclick="lightFunction()" id="light"><i class="fa-solid fa-moon"></i>LIGHT MODE</a>
        </div> 
        
 <!-- HEADER BACKGROUND IMAGE-->
        <div class="header-image" id="c0">
        </div> 


</template>

<style scoped>
.header-image {
    background-image: url("/images/header.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 450px;
}
.navbar {
    width:100%;
    background-color:black;
    overflow: hidden;
    position: fixed;
    top: 0;
    z-index: 9000;
}
.navbar a {
    float: left;
    text-align: center;
    padding: 12px;
    color: white;
    text-decoration: none;
    font-size: 12px;
}
.navbar a:hover {
    background-color: blue;
}
.active {
    background-color: blue;
}
</style>