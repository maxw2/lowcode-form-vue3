<template>
  <div class="ele-form">
    <components></components>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import { form } from "./index";

const props = defineProps<{ jsonOpt: form }>();
const jsonOpt = reactive({
    type: 'el-form'
})

</script>
