<template>
  <div>
    <p>Count Value: {{ count }}</p>
  </div>
</template>
<script setup>
// export default {
//   props: ["count"],
//   setup(props) {
//     console.log("props count", props.count);
//   },
// };
const props = defineProps(["count"]);
const count = props.count;
</script>
