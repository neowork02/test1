<template>
  <div class="input-wrap">
    <input type="time" :min="minTime" :max="maxTime" :value="val" />
  </div>
</template>

<script>
export default {
  props: ["minTime", "maxTime", "val"],
  data() {
    return {};
  }
};
</script>
