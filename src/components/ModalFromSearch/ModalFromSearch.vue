<template>
  <div class="modal-window">
    <div class="modal-window__container">
      <button
        v-on:click="$store.commit('findPacket', packet = false)"
        class="modal-window__button">
        X
      </button>
      <div class="modal-window__csp">
        {{ `CSP: ${packet.csp}` }}
      </div>
      <div class="modal-window__latest">
        {{ `Latest version: ${packet.latest}` }}
      </div>
      <div class="modal-window__next">
        {{ `Next version: ${packet.next}` }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    packet: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  @import "modalfromsearch";
</style>
