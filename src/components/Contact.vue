<template>
 <div class="contacts" id="c4">
            <h2 class="contacthead">CONTACT US</h2>
            <div class="contactus rright">
                <img class="zoom" alt="text" src="../../images/bucharest.jpg" width="300 px" height="150 px">
            </div>
            <div class="contactus lleft">
                <i class="fa-solid fa-location-dot"></i> RO, Bucharest<br>
                <i class="fa-solid fa-phone"></i> (+40)747777777<br>
                <i class="fa-solid fa-envelope"></i> Email: toplexgamescontact@gmail.com<br>
                <form action="/action_page.php" target="_blank">
                    <div class="w3-row-padding" style="margin:0 -16px 8px -16px">
                      <div class="w3-half">
                        <input class="w3-input w3-border" type="text" placeholder="Name" required name="Name">
                      </div>
                      <div class="w3-half">
                        <input class="w3-input w3-border" type="text" placeholder="Email" required name="Email">
                      </div>
                    </div>
                    <input class="w3-input w3-border" type="text" placeholder="Message" required name="Message">
                    <button class="w3-button w3-black w3-right w3-section" type="submit">
                      <i class="fa fa-paper-plane"></i> SEND MESSAGE
                    </button>
                </form>
            </div>

        </div>
</template>

<script>
export default {
    name: 'Contact',
};
</script>

<style scoped>
.contacthead {
    color: white;
    font-weight: bold;
    font-size: 30px;
    text-align: center;
}
.contact {
    padding: 10px;
    height: 400px;
}
.contactus {
    box-sizing: border-box;
    float: left;
    padding: 10px;
    height: 200px;
}
.rright {
    text-align: right;
    width:50%;
}
.lleft {
    color: white;
    width:50%;
}
.contacts:after {
    content: "";
    display: table;
    clear: both;
}
</style>