<template>
  <div class="container">
    <loading v-if="!ready">Loading...</loading>
    <container :options="{width: 3840, height: 2160}" v-else>
      <div class="header">
        <top-header/>
      </div>
      <div class="main">
        <div class="left">
          <div class="left1">
            <real-time-class :data="datas.realTimeData" />
          </div>
          <div class="left2">
            <history-class :data="datas.historyData" />
          </div>
        </div>
        <div class="center">
          <div class="center1">
            <category
              :data="['流量分类', '异常流量检测', '流量预测']"
            />
          </div>
          <div class="center2">
            <abnormal-traffic :data="datas.abnormalData" />
          </div>
        </div>
        <div class="right">
          <div class="right1">
            <list :data="datas.listData" />
          </div>
          <div class="right2">
              <prediction :data="datas.predictData" />
          </div>
        </div>
      </div>
    </container>
  </div>
</template>

<script>
  /* eslint-disable */
  import Loading from '../../components/Loading'
  import Container from '../../components/Container'
  import TopHeader from '../../components/Header/index'
  import HistoryClass from '../../components/HistoryClass/index'
  import RealTimeClass from '../../components/RealTimeClass/index'
  import List from '../../components/List/index'
  import Category from '../../components/Category/index'
  import Prediction from '../../components/Prediction/index'
  import AbnormalTraffic from '../../components/AbnormalTraffic/index'

  import { useData } from './useData'

  export default {
    components: {
      Loading,
      Container,
      AbnormalTraffic,
      Prediction,
      Category,
      List,
      RealTimeClass,
      HistoryClass,
      TopHeader
    },
    setup () {
      const { ready, datas } = useData()

      return {
        ready,
        datas
      }
    }
  }
</script>

<style lang="less" scoped>
  .container {
    width: 100%;
    height: 100%;
    background: rgb(11, 7, 22);
    color: #fff;
    font-size: 48px;

    #screen-container {
      display: flex;
      flex-direction: column;

      .header {
        height: 160px;
      }


      .main {
        flex: 1;
        display: flex;

        .left {
          flex: 0 0 1060px;
          display: flex;
          flex-direction: column;
          width: 1060px;
          height: 100%;

          .left1 {
            height: 1000px;
            box-sizing: border-box;
            padding: 20px 10px;
          }

          .left2 {
            box-sizing: border-box;
            height: 1000px;
            padding: 20px 10px;
          }
        }

        .center {
          flex: 1;
          display: flex;
          flex-direction: column;
          width: 1720px;

          .center1 {
            box-sizing: border-box;
            padding: 20px 10px 0 10px;
            height: 100px;
          }
          
          .center2 {
            box-sizing: border-box;
            padding: 20px 10px;
            height: 1900px;
          }

        }

        .right {
          flex: 0 0 1060px;
          display: flex;
          flex-direction: column;
          height: 100%;
          margin: 0 10px;
          max-width: 2960px;
          overflow: hidden;

          .right1 {
            height: 800px;
            padding: 20px 10px;
            box-sizing: border-box;
          }

          .right2 {
            width: 100%;
            height: 1200px;
            padding: 20px 10px;
            box-sizing: border-box;
          }
        }
      }
    }
  }
</style>
