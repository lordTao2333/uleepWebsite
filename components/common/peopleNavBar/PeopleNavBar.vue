<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left" />
    </div>
    <div class="center">
      <slot name="center" />
    </div>
    <div class="right">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PeopleNavBar"
};
</script>

<style scoped>
.nav-bar {
  line-height: 50px;
  display: flex;
  width: 100%;
  height: 50px;
  text-align: center;
  border-bottom: rgba(141, 141, 141, 1.0) 1px solid;
}

.left,
.right {
  width: 50px;
}
/* .left{
	border-right: #e8e8e8 1px solid;
}
.right{
	border-left: #e8e8e8 1px solid;
} */
.center {
  font-size: 16px;
  flex: 1;
  font-weight: 700;
  color: #cccccc;
  /* display: flex;
  justify-content:center ;
	align-items: center; */
}
</style>
