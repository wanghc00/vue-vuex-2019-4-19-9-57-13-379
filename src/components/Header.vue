<template>
  <div class="Header">
    <div>
      <h2>Jquery To Do List</h2>
      <p>
        <em>Simple Todo List with adding and filter by diff status.</em>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
i,
cite,
em,
var,
address,
dfn {
  font-style: italic;
}
</style>
