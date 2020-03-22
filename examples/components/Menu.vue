<template>
  <div class="menu">
    <ul
      v-for="(item,index) in MenuList"
      :key="index"
    >
      <li>
        <p class="menu_group_title">{{item.title}}</p>
        <ul>
          <li
            v-for="(childrenItem,childrenIndex) in item.children"
            :key="childrenIndex"
          >
            <router-link :to="childrenItem.path">{{childrenItem.des}}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import MenuList from "@/router/menu";
export default {
  name: "left-menu",
  created() {},
  mounted() {},
  data() {
    return {
      MenuList
    };
  },
  components: {},
  props: {},
  watch: {},
  computed: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.menu {
  width: 250px;
  height: 100%;
  box-sizing: border-box;
  padding-top: 20px;
  overflow: auto;
  & .menu_group_title {
    font-weight: bold;
    font-size: 18px;
  }
  & li {
    padding: 3px 0;
  }
  & a {
    width: 100%;
    display: inline-block;
    line-height: 28px;
    font-size: 15px;
    color: #666666;
    text-decoration: none;
    cursor: pointer;
  }
}
</style>