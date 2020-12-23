export default {
  state: {
    packets: [],
    slectedPage: 1,
    packet: null,
  },

  actions: {
    async fetchPackets({ commit }, pageNumber = 1) {
      const res = await fetch(
        `https://data.jsdelivr.com/v1/stats/packages?limit=10&page=${pageNumber}`,
      );
      const packets = await res.json();

      if (pageNumber) {
        commit('selectPage', pageNumber);
      }

      commit('updatePackets', packets);
    },

    async fetchPacket({ commit }, title) {
      const res = await fetch(
        `https://data.jsdelivr.com/v1/package/npm/${title}`,
      );
      if (!res.ok) {
        alert('Wrong package title. Try another one');
      }

      if (res.ok) {
        const packet = await res.json();

        commit('findPacket', packet);
      }
    },
  },

  mutations: {
    updatePackets(state, packets) {
      state.packets = packets;
    },
    selectPage(state, selectedPage) {
      state.slectedPage = selectedPage;
    },
    findPacket(state, packet) {
      state.packet = packet;
    },
  },

  getters: {
    allPackets(state) {
      return state.packets;
    },
    isSelected(state) {
      return state.slectedPage;
    },
    findedPacket(state) {
      return state.packet;
    },
  },
};
