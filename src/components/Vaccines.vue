<template>
  <div id="vaccineChart" style="width: auto; height:350px; margin-top: -35px" ></div>
</template>

<script>
export default {
  name: "Vaccines",
  data() {
    return {
      vaccines: []
    }
  },
  computed: {
    transformData () {
      let data = this.vaccines.map(vaccine => this.renameKey(vaccine, "quantity", "value"));
      if ("vaccine" in data[0]) {
        data = data.map(vaccine => this.renameKey(vaccine, "vaccine", "name"))
      }
      else {
        data = data.map(vaccine => this.renameKey(vaccine, "vaccinated_in_the_province", "name"))
      }
      return data;
    }
  },
  watch: {
    $route () {
      this.setLoadingChart()
      this.getVaccines()
    }
  },
  created() {
    this.getVaccines();
  },
  mounted() {
    this.setLoadingChart()
  },
  methods: {
    getVaccines() {
      let params = {};
      let url = "api/v1/vaccines";
      let province = this.$route.fullPath.replaceAll("/", "")
      if (province.length > 0)
      {
        url = "api/v1/vaccination-province/vaccine"
        params = {
          params: {
            vaccinated_in_the_province: province
          }
        }
      }
      this.$axios.get(url, params)
          .then(({data}) => {
            this.vaccines = data.data;
            this.drawChart();
          })
    },
    drawChart() {
      //Initialize the echarts instance based on the prepared dom
      let myChart = this.$echarts.init(document.getElementById("vaccineChart"));
      //Specify configuration items and data for the chart
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} <br> ({d}%)',
        },
        legend: {
          padding: 1,
          top: "bottom",
          data: this.vaccines.map(vaccine => vaccine.vaccine)
        },
        series: [
          {
            type: "pie",
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            data: this.transformData,
            label: {
              show: true,
              position: "inside",
              formatter: "{c} \n {d}%"
            },
          }
        ],
        color: ['#00897B', '#00ACC1', '#028baa', '#4DB6AC']
      };
      //Use the configuration items and data just specified to display the chart.
      myChart.setOption(option);
      myChart.hideLoading()
    },
    setLoadingChart() {
      let myChart = this.$echarts.init(document.getElementById("vaccineChart"));
      let options = {
        text: 'Cargando...',
        color: '#028baa',
        textColor: '#028baa',
        zlevel: 0,
        fontSize: 112,
        showSpinner: true,
        spinnerRadius: 15,
        fontFamily: 'sans-serif'
      }
      myChart.showLoading(options)
    },
    renameKey(object, key, newKey) {
      const clone = (obj) => Object.assign({}, obj);
      const clonedObj = clone(object);
      const targetKey = clonedObj[key];
      delete clonedObj[key];
      clonedObj[newKey] = targetKey;
      return clonedObj;
    }
  }
}
</script>

<style scoped>

</style>