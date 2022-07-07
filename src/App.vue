<template>
  <component :is="layout" />
</template>
<script lang="ts">
import AuthLayout from 'motor-core/layouts/AuthLayout.vue'
import AdminLayout from 'motor-core/layouts/AdminLayout.vue'

import {defineComponent, ref, watch} from 'vue'
import {useRoute} from "vue-router";

export default defineComponent({
  name: 'admin-backend',
  components: {
    AuthLayout,
    AdminLayout,
  },
  setup() {
    const layout = ref<string>('');
    const route = useRoute();
    watch(route, async (to, from) => {
      if (to.meta.layout !== undefined) {
        layout.value = to.meta.layout as string
      } else {
        layout.value = 'AdminLayout' // this is default layout if route meta is not set
      }
    })
    return {
      layout
    }
  },
})
</script>
