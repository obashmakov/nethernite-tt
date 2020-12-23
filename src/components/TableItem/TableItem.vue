<template>
  <tr v-on:click="fetchPacket(packet.name)" class="table__row">
    <td class="table__name">{{ packet.name }}</td>
    <td class="table__hits">{{ packet.hits }}</td>
    <td class="table__type">{{ packet.type }}</td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    packet: {
      type: Object,
      required: true,
    },
  },

  methods: mapActions(['fetchPacket']),
};
</script>
