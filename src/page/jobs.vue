<!-- 职位页面 -->
<template>
  <div class="jobs" id="jobs">
    <div class="container cf">
      <div class="left-wrap fl">
        <div class="detail sizer border">
          <!-- 筛选条件 之 工作地点 -->
          <div class="area sizer-item">
            <span class="tit">工作地点:</span>
            <div class="s-i-wrap">
              <span class="s-item active"></span>
              <span class="s-item"></span>
            </div>
          </div>
          <!-- 筛选条件 之 工作经验 -->
          <div class="exp sizer-item">
            <span class="tit">工作经验:</span>
          </div>
          <!-- 筛选条件 之 学历要求 -->
          <div class="req sizer-item">
            <span class="tit">学历要求:</span>
          </div>
          <!-- 筛选条件 之 融资阶段 -->
          <div class="fin sizer-item">
            <span class="tit">融资阶段:</span>
          </div>
          <!-- 筛选条件 之 公司规模 -->
          <div class="sca sizer-item">
            <span class="tit">公司规模:</span>
          </div>
          <!-- 筛选条件 之 行业领域 -->
          <div class="ind sizer-item">
            <span class="tit">行业领域:</span>
          </div>
        </div>
        <div class="sort sizer border"></div>
        <ul class="job-list">
          <li class="job-item border">job</li>
        </ul>
      </div>
      <ul class="ad-wrap fr" v-if="adlist.length != 0">
        <li class="ad-item" v-for="adItem in adlist" :key="adItem.id">
          <a :href="adItem.url" target="_block" class="ad-link">
            <span class="text">AD</span>
            <img :src="adItem.img" class="ad-img"
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "jobs",
  props: {},
  data() {
    return {
      adlist: [],
      detail: [
        {
          type: "area",
          list: [
            "全国",
            "北京",
            "上海",
            "深圳",
            "广州",
            "杭州",
            "成都",
            "南京",
            "武汉",
            "西安",
            "厦门",
            "长沙",
            "苏州",
            "天津",
            "重庆",
            "郑州",
            "青岛",
            "合肥",
            "福州",
            "济南",
            "大连",
            "珠海",
            "无锡",
            "佛山",
            "东莞",
            "宁波",
            "常州",
            "沈阳",
            "石家庄",
            "昆明",
            "南昌",
            "南宁",
            "哈尔滨",
            "海口",
            "中山",
            "惠州",
            "贵阳",
            "长春",
            "太原",
            "嘉兴",
            "泰安",
            "昆山",
            "烟台",
            "兰州",
            "泉州",
            "全部城市",
          ],
        },
      ],
    };
  },
  methods: {
    _getAdList() {
      this.axios.get("/adlist", { params: { size: 3 } }).then((res) => {
        this.adlist = res.data.adlist;
        console.log(res);
      });
    },
  },
  mounted() {
    this._getAdList();
  },
};
</script>

<style lang='scss' scoped>
@import "@//common/scss/variable.scss";
.jobs {
  .container {
    padding-top: 186px;
    .left-wrap {
      width: 958px;
      .border {
        border: 1px solid $border_color_B;
        margin-bottom: 20px;
      }
      .sizer {
        padding: 8px 12px;
        background-color: #fafafa;
        .sizer-item {
          .tit {
            font-weight: bold;
            font-size: 14px;
            color: #333;
          }
        }
      }
    }
    .ad-wrap {
      width: 210px;
      .ad-item {
        margin-bottom: 10px;
        .ad-link {
          display: block;
          position: relative;
          .text {
            position: absolute;
            left: 50%;
            margin-left: -20px;
            top: 20px;
            font-size: 20px;
            color: #000;
          }
          .ad-img {
          }
        }
      }
    }
  }
}
</style>
