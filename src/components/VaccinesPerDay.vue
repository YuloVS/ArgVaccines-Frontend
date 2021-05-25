<template>
  <div id="vaccinesPerDay" style="width: auto; height:350px; margin-top: -35px" ></div>
</template>

<script>
export default {
  name: "VaccinesPerDay",
  created() {
    this.getData()
  },
  data() {
    return {
      vaccines: []
    }
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
      let url = "http://argvaccines.test/api/v1/vaccination-date";
      let province = this.$route.fullPath.replaceAll("/", "").replaceAll("_", " ")
      if (province.length > 0)
      {
        url = "http://argvaccines.test/api/v1/vaccination-province/vaccination-date"
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
    setLoadingChart() {
      let myChart = this.$echarts.init(document.getElementById("vaccinesPerDay"));
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
    drawChart() {
      let myChart = this.$echarts.init(document.getElementById("vaccinesPerDay"));
      let provinces = [this.vaccines[0].vaccinated_in_the_province]
      let seriesList = [];
      this.$echarts.util.each(provinces, function (province) {
        let datasetId = 'dataset_' + province;
        seriesList.push({
          type: 'line',
          datasetId: datasetId,
          showSymbol: false,
          name: province ?? "Argentina",
          endLabel: {
            show: true,
            formatter: function (params) {
              return params.value[3] + ': ' + params.value[0];
            }
          },
          labelLayout: {
            moveOverlap: 'shiftY'
          },
          emphasis: {
            focus: 'series'
          },
          encode: {
            x: 'vaccination_date',
            y: 'quantity',
            label: ['province', 'quantity'],
          }
        });
      });

      let option = {
        animationDuration: 10000,
        dataset: [{
          id: 'dataset_raw',
          source: this.vaccines
        }],
        tooltip: {
          order: 'valueDesc',
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          nameLocation: 'middle'
        },
        yAxis: {
          //name: '# Vacunas'
        },
        /*grid: {
          right: 400
        },*/
        color: ['#028baa'],
        series: seriesList
      };

      myChart.setOption(option);
      myChart.hideLoading()

    }
  }
}
</script>

<style scoped>

</style>