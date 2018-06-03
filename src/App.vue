<template>
  <div id="app">
    <TimeConverterWrapper></TimeConverterWrapper>
  </div>
</template>

<script>
import TimeConverterWrapper from "./components/TimeConverterWrapper.vue";

export default {
  name: "app",
  components: {
    TimeConverterWrapper
  },
  created: function() {
    const script = document.createElement("script");
    script.setAttribute("src", "time-converter.js");
    script.setAttribute("type", "text/javascript");
    document.body.append(script);
  }
};
</script>

<style>
</style>
