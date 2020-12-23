<template>
  <div class="pages">
    <button
      v-on:click="fetchPackets(1)"
      v-bind:class="{ active: isSelected === 1 }"
      class="pages__button"
      type="button"
    >
      1
    </button>
    <button
      v-on:click="fetchPackets(2)"
      v-bind:class="{ active: isSelected === 2 }"
      class="pages__button"
      type="button"
    >
      2
    </button>
    <button
      v-on:click="fetchPackets(3)"
      v-bind:class="{ active: isSelected === 3 }"
      class="pages__button"
      type="button"
    >
      3
    </button>
    <button
      v-on:click="fetchPackets(4)"
      v-bind:class="{ active: isSelected === 4 }"
      class="pages__button"
      type="button"
    >
      4
    </button>
    <button
      v-on:click="fetchPackets(5)"
      v-bind:class="{ active: isSelected === 5 }"
      class="pages__button"
      type="button"
    >
      5
    </button>
    <button
      v-on:click="fetchPackets(6)"
      v-bind:class="{ active: isSelected === 6 }"
      class="pages__button"
      type="button"
    >
      6
    </button>
    <button
      v-on:click="fetchPackets(7)"
      v-bind:class="{ active: isSelected === 7 }"
      class="pages__button"
      type="button"
    >
      7
    </button>
    <button
      v-on:click="fetchPackets(8)"
      v-bind:class="{ active: isSelected === 8 }"
      class="pages__button"
      type="button"
    >
      8
    </button>
    <button
      v-on:click="fetchPackets(9)"
      v-bind:class="{ active: isSelected === 9 }"
      class="pages__button"
      type="button"
    >
      9
    </button>
    <button
      v-on:click="fetchPackets(10)"
      v-bind:class="{ active: isSelected === 10 }"
      class="pages__button"
      type="button"
    >
      10
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  methods: mapActions(['fetchPackets']),
  computed: mapGetters(['isSelected']),
};
</script>

<style lang="scss">
  @import "pages";
</style>
