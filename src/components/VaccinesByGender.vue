<template>
  <div id="vaccineByGender" style="width: auto; height:350px; margin-top: -35px" ></div>
</template>

<script>
export default {
  name: "VaccinesByGender",
  data() {
    return {
      vaccines: []
    }
  },
  computed: {
    transformData () {
      let data = this.vaccines.map(vaccine => this.renameKey(vaccine, "quantity", "value"));
      if ("gender" in data[0]) {
        data = data.map(vaccine => this.renameKey(vaccine, "gender", "name"))
      }
      else {
        data = data.map(vaccine => this.renameKey(vaccine, "vaccinated_in_the_province", "name")) // TODO CHECK
      }
      return data;
    }
  },
  created() {
    this.getData()
  },
  mounted() {
    this.setLoadingChart()
  },
  watch: {
    $route () {
      this.setLoadingChart()
      this.getData()
    }
  },
  methods: {
    getData() {
      let params = {};
      let url = "http://argvaccines.test/api/v1/gender";
      let province = this.$route.fullPath.replaceAll("/", "").replaceAll("_", " ")
      if (province.length > 0)
      {
        url = "http://argvaccines.test/api/v1/vaccination-province/gender"
        params = {
          params: {
            vaccinated_in_the_province: province
          }
        }
      }
      Window.axios.get(url, params)
          .then(({data}) => {
            this.vaccines = data.data;
            this.drawChart();
          })
    },
    drawChart() {
      //Initialize the echarts instance based on the prepared dom
      let myChart = this.$echarts.init(document.getElementById("vaccineByGender"));
      //Specify configuration items and data for the chart
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} <br> ({d}%)',
        },
        legend: {
          padding: 1,
          top: "bottom",
          data: this.vaccines.map(vaccine => vaccine.gender)
        },
        series: [
          {
            type: "pie",
            radius: ['40%', '70%'],
            roseType: 'radius',
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
        color: ['#BA68C8', '#028baa', '#90A4AE',]
      };
      //Use the configuration items and data just specified to display the chart.
      myChart.setOption(option);
      myChart.hideLoading()
    },
    setLoadingChart() {
      let myChart = this.$echarts.init(document.getElementById("vaccineByGender"));
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