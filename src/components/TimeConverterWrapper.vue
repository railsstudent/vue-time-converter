<template>
  <div>
    <time-theme @themeChange="setTheme"></time-theme>
    <time-converter @submitPerformed="printSubmittedData" :theme="theme"></time-converter>
    <div class="output-container" v-if="toTimeZone && fromTimeZone">
      <p class="list-item">Custom event fired.</p>
      <ul class="output-list">
      <li>From Time Zone: {{fromTimeZone.utc}},
        From Time Zone Offset: {{fromTimeZone.offset}}</li>
      <li>To Time Zone: {{toTimeZone.utc}},
        To Time Zone Offset: {{toTimeZone.offset}}</li>
      <li>Converted String: {{convertedTime}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fromTimeZone: null,
      toTimeZone: null,
      convertedTime: "",
      theme: "rebeccapurple"
    };
  },
  methods: {
    setTheme(evt) {
      this.theme = evt.detail;
    },
    printSubmittedData(evt) {
      const { fromTimeZone, toTimeZone, convertedTime } = evt.detail;
      this.fromTimeZone = fromTimeZone;
      this.toTimeZone = toTimeZone;
      this.convertedTime = convertedTime;
    }
  }
};
</script>

<style scoped>
.output-container {
  display: flex;
  flex-flow: row wrap;
  padding-left: 20px;
  padding-right: 20px;
}

ul.output-list {
  margin-top: 0;
  padding-left: 20px;
}

.list-item {
  flex-grow: 1;
  flex-basis: 100%;
}
</style>
