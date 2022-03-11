<template>
  <div class="history">
    <div class="title-wrapper">
        <div class="title">
          <span class="icon-1"></span>
          历史分类状态
        </div>
        <div :inline="true" class="time-wrapper">
          <el-date-picker
            type="datetime"
            placeholder="开始时间"
            id="picker3"
            >
          </el-date-picker>
          <span class="to">To</span>
          <el-date-picker
            type="datetime"
            placeholder="结束时间"
            id="picker4"
            >
          </el-date-picker>
          <el-button type="primary">查询</el-button>
        </div>
    </div>
    <div id="history-chart" />
  </div>
</template>

<script>
  import * as Echarts from 'echarts'
  import { onMounted } from 'vue'

  export default {
    name: 'historyClass',
    props: {
      data: Object
    },
    setup() {
      let chart
      const updateChart = () => {
        function createOption() {
          return {
            legend: {
              icon: 'rect',
              textStyle: {
                fontSize: 22,
                color: '#fff'
              }
            },
            tooltip: {
              trigger: 'axis',
              showContent: false
            },
            color: [
                    '#dd6b66',
                    '#759aa0',
                    '#e69d87',
                    '#8dc1a9',
                    '#ea7e53',
                    '#eedd78',
                    '#73a373',
                    '#73b9bc',
                    '#7289ab',
                    '#91ca8c',
                    '#f49f42'
                  ],
            dataset: {
              source: [
                ['date', '2.01', '2.02', '2.03', '2.04', '2.05', '2.06'],
                ['设备1', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
                ['设备2', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
                ['设备3', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
                ['设备4', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
              ]
            },
            xAxis: {
              type: 'category',
              axisLabel: {
                color: 'white',
                fontSize: 22
              }
             },
            yAxis: {
              gridIndex: 0,
              axisLabel: {
                color: 'white',
                fontSize: 22
              }
            },
            grid: { top: '55%' },
            series: [
              {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' }
              },
              {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' }
              },
              {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' }
              },
              {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' }
              },
              {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '25%'],
                emphasis: {
                  focus: 'self'
                },
                label: {
                  fontSize: 24,
                  color: '#fff'
                },
                encode: {
                  itemName: 'date',
                  value: '2.01',
                  tooltip: '2.01'
                }
              }
            ],
            roseType: 'radius'
          }
        }

        if (!chart) {
          chart = Echarts.init(document.getElementById('history-chart'))
        }
        chart.on('updateAxisPointer', function (event) {
        const xAxisInfo = event.axesInfo[0]
        if (xAxisInfo) {
          const dimension = xAxisInfo.value + 1
          chart.setOption({
            series: {
              id: 'pie',
              encode: {
                value: dimension,
                tooltip: dimension
              }
            }
          })
        }
      })
        chart.setOption(createOption())
      }
      onMounted(() => {
        updateChart()
      })
    }
  }
</script>

<style>

</style>
<style lang="scss" scoped>
  .history {
    width: 100%;
    height: 100%;
    padding: 40px 40px;
    box-sizing: border-box;
    border: 1px solid rgba(52, 204, 241, .4);

    .title-wrapper {
      display: flex;

      .title {
        font-size: 36px;
        font-weight: bold;
        color: rgb(168, 229, 248);
      }

      .time-wrapper {
        flex: 1;
        text-align: right;
        .to {
          font-size: 20px;
          margin: 0 10px;
        }
      }
    }

    #history-chart {
      width: 100%;
      height: 90%;
      margin-top: 20px;
      padding-top: 20px;
      background: rgb(14, 19, 51);
    }
  }
</style>
