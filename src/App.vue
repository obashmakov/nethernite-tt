<template>
  <div id="app">
    <Form />
    <Table v-bind:packets="allPackets" />
    <Pages />
    <Footer />
    <ModalFromServer
      v-if="findedPacket"
      v-bind:packet="findedPacket"
      v-bind:findedPacket="findedPacket"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Form from './components/Form/Form.vue';
import Table from './components/Table/Table.vue';
import Pages from './components/Pages/Pages.vue';
import Footer from './components/Footer/Footer.vue';
import ModalFromServer from './components/ModalFromSearch/ModalFromSearch.vue';

export default {
  name: 'app',
  computed: mapGetters(['allPackets', 'findedPacket']),
  methods: mapActions(['fetchPackets']),
  async mounted() {
    this.fetchPackets();
  },
  components: {
    Form,
    Table,
    Pages,
    Footer,
    ModalFromServer,
  },
};
</script>

<style lang="scss">
#app {
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 600px;
  margin: 0 auto;
}
</style>
