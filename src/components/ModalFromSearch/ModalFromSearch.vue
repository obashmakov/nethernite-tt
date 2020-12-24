<template>
  <div class="modal-window">
    <div class="modal-window__container">
      <button
        v-on:click="$store.commit('findPacket', packet = false)"
        class="modal-window__button">
        X
      </button>
      <div class="modal-window__csp">
        {{ `CSP: ${packet.tags.csp}` }}
      </div>
      <div class="modal-window__latest">
        {{ `Latest version: ${packet.tags.latest}` }}
      </div>
      <div class="modal-window__next">
        {{ `Next version: ${packet.tags.next}` }}
      </div>
      <div class="modal-window__versions">
        {{ `Last 3 versions: ${packet.versions.slice(0, 3).join(', ')}` }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    packet: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  @import "modalfromsearch";
</style>
