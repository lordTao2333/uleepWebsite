<template>
  <div class="tab-control">
    <div
      :class="{ active: index === curIndex }"
      :key="index"
      @click="tabControlClick(index)"
      class="tab-control-item"
      v-for="(item, index) in titles"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      curIndex: 0
    };
  },
  methods: {
    tabControlClick(index) {
      this.curIndex = index;
	  //子组件调用父组件方法tabXClick
      this.$emit("tabClick", index);
    }
  }
};
</script>

<style scoped>
.tab-control {
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  height: 40px;
  text-align: center;
}

.tab-control-item {
  flex: 1;
  border-radius:5px;
  color:#3BA0FF;
}

.tab-control-item span {
  font-size: 17px;
  font-weight: 700;
  
  /* padding: 5px; */
}

.active {
  color: #ffffff;
  background: linear-gradient(120deg, rgba(162,210,255, 1.0) 95%,rgba(255,175,204, 1.0));
}

.active span {
  /* border-bottom: 2px solid #ff5777; */
}
</style>
