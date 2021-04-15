Vue.config.devtools = true;

// BONUS
// Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
// BONUS 2
// Ordinare i dischi per anno di uscita.

var app = new Vue (
  {
    el: "#root",
    data:{
      liveRecords: [],
      index: 0,
    },
    mounted() {
      axios.get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((response) => {
        this.liveRecords = response.data.response;
      });
    },
    methods: {
      active: function (index) {
        this.index = index;
      }
    }
  }
);
