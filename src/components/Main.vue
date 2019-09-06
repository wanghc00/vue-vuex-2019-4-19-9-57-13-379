<template>
  <div>
    <input type="text" placeholder="请输入姓名" id="userInput" />
    <br />
    <br />
    <a-button type="primary" @click="toHomePage()">开始使用</a-button>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {};
  },
  props: {},
  methods: {
    toHomePage: function() {
      this.$store.commit(
        "setUserInput",
        document.getElementById("userInput").value
      );
      this.$router.push({ path: "/Home" });
    }
  }
};
</script>
