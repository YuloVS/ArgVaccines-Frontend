<template>
  <div id="vaccineByAgeRangeChart" style="width: auto; height:350px; margin-top: -35px" ></div>
</template>

<script>
export default {
  name: "VaccinesByAgeRange",
  data() {
    return {
      vaccines: []
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
      let url = "api/v1/age-range";
      let province = this.$route.fullPath.replaceAll("/", "").replaceAll("_", " ")
      if (province.length > 0)
      {
        url = "api/v1/vaccination-province/age-range"
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
      let myChart = this.$echarts.init(document.getElementById("vaccineByAgeRangeChart"));
      //Specify configuration items and data for the chart
      let option = {
        tooltip: {
          trigger: 'axis',
          formatter: '{b} : {c}',
        },
        yAxis: {
          type: 'value',
          name: "Cantidad",
          axisLabel: {
            formatter: function (value) { return value/1000000 + "M" },
            fontSize: 10
          },
          position: "right",
        },
        xAxis: {
          type: 'category',
          data: this.vaccines.map(vaccine => vaccine.age_range),
          axisLabel: {
            fontSize: 10
          }
        },
        series: [{
          itemStyle: {
            normal: {
              /*label: {
                rotate: 90,
                verticalAlign: "middle",
                show: true,
              },*/
              color: "#028baa",
            },
          },
          data: this.vaccines.map(vaccine => vaccine.quantity),
          type: 'bar'
        }]
      };
      //Use the configuration items and data just specified to display the chart.
      myChart.setOption(option);
      myChart.hideLoading()
    },
    setLoadingChart() {
      let myChart = this.$echarts.init(document.getElementById("vaccineByAgeRangeChart"));
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
    }
  }
}
</script>

<style scoped>

</style>