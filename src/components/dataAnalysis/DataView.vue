<template>
  <div class="data-view">
    <el-card>
      <div id="main1"></div>
    </el-card>
    <el-card>
      <div id="main2"></div>
    </el-card>
  </div>
</template>

<script>
import { dataView } from '@/api/api.js'
export default {
  data() {
    return {}
  },
  created() {
    //第二个图表的绘制
    dataView()
      .then((res) => {
        if (res.data.status === 200) {
          //解构赋值
          let { legend, xAxis, series } = res.data.data
          this.draw(legend, xAxis, series)
        }
      })
      .catch((err) => {
        throw err
      })
  },
  mounted() {
    let myChart = this.$echarts.init(document.getElementById('main1')) //初始化实例
    myChart.setOption({
      title: {
        text: '班级'
      },
      tooltip: {},
      xAxis: {
        data: ['一班', '二班', '三班', '四班', '五班', '六班']
      },
      yAxis: {},
      //数据
      series: [
        {
          name: '人数',
          type: 'bar',
          data: [23, 65, 32, 43, 13, 55]
        }
      ]
    })
  },
  methods: {
    draw(legend, xAxis, series) {
      let myChart1 = this.$echarts.init(document.getElementById('main2')) //初始化实例
      let option = {
        title: {
          text: '会话量'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: legend
        },
        xAxis: {
          type: 'category',
          data: xAxis
        },
        yAxis: {
          type: 'value'
        },
        series: series
      }
      myChart1.setOption(option)
    }
  }
}
</script>
<style lang="less" scoped>
.data-view {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .el-card {
    width: 50%;
    #main1,
    #main2 {
      height: 500px;
    }
  }
}
</style>
