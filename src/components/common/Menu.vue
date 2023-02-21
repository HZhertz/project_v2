<template>
  <div class="menu">
    <el-aside width="200px">
      <el-menu
        router
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#2578b5"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <template v-for="(item, index) in menus">
          <el-submenu :index="index + ''" :key="index" v-if="!item.hidden">
            <template slot="title">
              <i :class="item.iconClass"></i>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item-group
              v-for="(child, index) in item.children"
              :key="index"
            >
              <el-menu-item :index="child.path">
                <i :class="child.iconClass"></i>{{ child.name }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </template>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: []
    }
  },
  created() {
    // console.log(this.$router.options.routes)
    this.menus = [...this.$router.options.routes]
  }
}
</script>

<style lang="less" scoped>
.menu {
  .el-aside {
    height: 100%;
    .el-menu {
      height: 100%;
      overflow-y: auto;
      &::-webkit-scrollbar {
        //display: none;
        width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
        height: 6px;
      }

      &::-webkit-scrollbar-thumb {
        background: rgba(144, 147, 153, 0.5);
        border-radius: 6px;
      }

      &::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);
      }
      .fa {
        margin-right: 10px;
      }
      .el-submenu .el-menu-item {
        min-width: 0;
      }
    }
  }
}
</style>
