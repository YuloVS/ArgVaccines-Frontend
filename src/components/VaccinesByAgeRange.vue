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
  watch: {
    $route (){
      this.getData()
    }
  },
  methods: {
    getData() {
      let params = {};
      let url = "http://argvaccines.test/api/v1/age-range";
      let province = this.$route.fullPath.replaceAll("/", "").replaceAll("_", " ")
      if (province.length > 0)
      {
        url = "http://argvaccines.test/api/v1/vaccination-province/age-range"
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
          show: true,
          position: "right",
          offset: -9.5
        },
        xAxis: {
          type: 'category',
          data: this.vaccines.map(vaccine => vaccine.age_range)
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
    }
  }
}
</script>

<style scoped>

</style>