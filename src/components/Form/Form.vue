<template>
  <form class="form" @submit.prevent="onSubmit">
    <label class="form__label" for="npm">
      <input
        v-model="title"
        class="form__input"
        type="text"
        placeholder="Package name..."
        name="npm"
        id="npm"
      >
    </label>
    <button class="form__button" type="submit">
      Find Package
    </button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      title: '',
    };
  },

  methods: {
    ...mapActions(['fetchPacket']),
    onSubmit() {
      this.fetchPacket(this.title.toLowerCase());
      this.title = '';
    },
  },
};
</script>

<style lang="scss">
  @import "form";
</style>
