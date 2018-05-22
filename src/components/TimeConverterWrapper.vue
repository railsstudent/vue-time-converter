<template>
  <div>
    <time-converter @submitPerformed="printSubmittedData"></time-converter>
    <div class="output-container" v-if="submittedData.toTimeZone && submittedData.fromTimeZone">
      <p class="list-item">Custom event fired.</p>
      <ul class="output-list">
      <li>From Time Zone: {{submittedData.fromTimeZone.utc}},
        From Time Zone Offset: {{submittedData.fromTimeZone.offset}}</li>
      <li>To Time Zone: {{submittedData.toTimeZone.utc}},
        To Time Zone Offset: {{submittedData.toTimeZone.offset}}</li>
      <li>Converted String: {{submittedData.convertedTime}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submittedData: {
        fromTimeZone: null,
        toTimeZone: null,
        convertedTime: ""
      }
    };
  },
  methods: {
    printSubmittedData(evt) {
      const { fromTimeZone, toTimeZone, convertedTime } = evt.detail;
      this.submittedData = {
        fromTimeZone,
        toTimeZone,
        convertedTime
      };
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
