<template>
  <div class="input">
    <div>
      <input id="input-text" class="input-text" type="text" name="ListItem" />
      <div id="button" v-on:click="addItem">Add</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addItem() {
      this.$store.commit(
        "submitMessage",
        document.getElementById("input-text").value
      );
    }
  }
};
</script>

<style>
.input-text {
  width: 70%;
}
input {
  padding: 4px 15px 4px 0;
  background-color: white;
  -webkit-rtl-ordering: logical;
  cursor: text;
  border-width: 3px;
  border-style: inset;
  border-color: initial;
  border-image: initial;
  text-rendering: auto;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  margin: 0em;
  font: 400 13.3333px Arial;
}

#button {
  display: inline-block;
  background-color: #fc999b;
  color: #ffffff;
  border-radius: 5px;
  text-align: center;
  margin-top: 2px;
  padding: 5px 15px;
}

#button:hover {
  cursor: pointer;
  opacity: 0.8;
}
</style>

