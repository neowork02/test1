<template>
  <transition name="modal" appear>
    <div
      class="modal-wraper"
      :class="[{ 'modal-absolute': absolute }, { 'modal-left-small': small }]"
    >
      <div class="modal modal-overlay" v-if="overlay"></div>
      <div class="modal-outer">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "BasicModal",
  props: ["overlay", "absolute", "small"]
};
</script>
