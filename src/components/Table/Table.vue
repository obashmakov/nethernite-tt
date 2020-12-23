<template>
  <table class="table table-dark table-striped">
    <thead class="table__thead">
      <tr>
        <th class="table__name">Name</th>
        <th class="table__hits">Hits</th>
        <th class="table__type">Type</th>
      </tr>
    </thead>
    <tbody class="table__tbody">
      <TableItem
        v-for="packet of packets" :key="packet.name"
        v-bind:packet="packet"
      />
    </tbody>
  </table>
</template>

<script>
import TableItem from '../TableItem/TableItem.vue';

export default {
  props: ['packets'],
  components: {
    TableItem,
  },
};
</script>

<style lang="scss">
  @import "table";
</style>
