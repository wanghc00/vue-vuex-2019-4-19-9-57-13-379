<template>
  <div class="list">
    <label>
      <input name="done-todo" type="checkbox" class="done-todo" />
    </label>
    <span>{{$store.getters.getValueByIndex(transIndex)}}</span>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    transIndex: Number
  }
};
</script>

<style>
input[type="checkbox"].done-todo {
  margin: 5px 5px 2px 0;
}
</style>