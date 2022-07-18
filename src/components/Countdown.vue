<template>

<div class="app">
    <div class="flex-container">
    <div class="radial-progress-bar">
    <div class="center">
    <vue-countdown :time="time" v-slot="{ days, hours, minutes, seconds }">
      <div class="flex-view">
         <div
        data-aos="flip-left"
        data-aos-offset="700"
        data-aos-delay="50"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="true"
        >
        <div>
          <radial-progress-bar
            :diameter="diameter"
            :completed-steps="days"
            :total-steps="60"
            :animateSpeed="1000"
            :strokeWidth="strokeWidth"
            :innerStrokeWidth="innerStrokeWidth"
            :startColor="startColor"
            :stopColor="stopColor"
            :innerStrokeColor="innerStrokeColor"
          >
            <p class="completedSteps">{{ days }}</p>
          </radial-progress-bar>
          <span class="label-style">Days</span>
        </div>
        </div>
        &nbsp;&nbsp;
         <div
        data-aos="flip-right"
        data-aos-offset="700"
        data-aos-delay="200"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="true"
        >
        <div>
          <radial-progress-bar
            :diameter="diameter"
            :completed-steps="hours"
            :total-steps="24"
            :animateSpeed="1000"
            :strokeWidth="strokeWidth"
            :innerStrokeWidth="innerStrokeWidth"
            :startColor="startColor"
            :stopColor="stopColor"
            :innerStrokeColor="innerStrokeColor"
          >
            <p class="completedSteps">{{ hours }}</p>
          </radial-progress-bar>
          <span class="label-style">Hours</span>
        </div>
        </div>
        &nbsp;&nbsp;
         <div
        data-aos="flip-up"
        data-aos-offset="700"
        data-aos-delay="400"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="true"
        >
        <div>
          <radial-progress-bar
            :diameter="diameter"
            :completed-steps="minutes"
            :total-steps="60"
            :animateSpeed="1000"
            :strokeWidth="strokeWidth"
            :innerStrokeWidth="innerStrokeWidth"
            :startColor="startColor"
            :stopColor="stopColor"
            :innerStrokeColor="innerStrokeColor"
          >
            <p class="completedSteps">{{ minutes }}</p>
          </radial-progress-bar>
          <span class="label-style">Minutes</span>
          </div>
        </div>
        &nbsp;&nbsp;
         <div
        data-aos="flip-down"
        data-aos-offset="700"
        data-aos-delay="600"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="true"
        >
        <div>
          <radial-progress-bar
            :diameter="diameter"
            :completed-steps="seconds"
            :total-steps="60"
            :animateSpeed="1000"
            :strokeWidth="strokeWidth"
            :innerStrokeWidth="innerStrokeWidth"
            :startColor="startColor"
            :stopColor="stopColor"
            :innerStrokeColor="innerStrokeColor"
          >
            <p class="completedSteps">{{ seconds }}</p>
          </radial-progress-bar>
          <span class="label-style">Seconds</span>
          </div>
        </div>
      </div>
    </vue-countdown>
  </div>
  </div>
  </div>
  </div>
</template>

<script>
import RadialProgressBar from "vue-radial-progress";
import VueCountdown from "@chenfengyuan/vue-countdown";
export default {
  name: "CountdownTimerComponent",
  data() {
    const now = new Date();
    const deadline = new Date("August 25 2022 13:59:59");
    return {
      diameter: 145,
      strokeWidth: 8,
      innerStrokeWidth: 4,
      time: deadline - now,
      startColor: "#192e5b",
      stopColor: "#BB1924",
      innerStrokeColor: "#E5E5E5",
    };
  },
  components: {
    RadialProgressBar,
    VueCountdown,
  },
};
</script>
<style scoped>
.flex-view {
  display: flex;
}
.completedSteps {
  font-size: 35px;
  color: #ffffff;
}
.label-style {
  color: #ffffff;
  font-size: 15px;
}
.app {
  text-align: center;
}
.flex-container {
  display: flex;
  justify-content: center;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5vh;
}
</style>