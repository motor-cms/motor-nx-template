<template>
  <AdminCommonForm
    back-route="admin.__package__(kebabCase).__model-plural__(kebabCase)"
    :title="title"
    @submit="onSubmit"
  >
    <h6 class="text-uppercase text-body text-xs font-weight-bolder">
      Basic information
    </h6>
    <div class="row">
      <div class="col-md-12">
        <FormsInputField
          type="text"
          name="name"
          id="name"
          :label="$t('__package__(kebabCase).__model-plural__(snakeCase).name')"
          :value="model.name"
        ></FormsInputField>
      </div>
    </div>
  </AdminCommonForm>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import AdminCommonForm from '@/../../../../../../packages/motor-core/components/admin/common/Form.vue'
import FormsInputField from '@/../../../../../../packages/motor-core/components/forms/InputField.vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import form from '@/forms/__package__(kebabCase)/__model__(camelCase)Form'

export default defineComponent({
  name: 'admin-__package__(kebabCase)-__model-plural__(kebabCase)-create',
  components: {
    AdminCommonForm,
    FormsInputField,
  },
  setup() {
    // Load i18n module
    const { t } = useI18n()

    // Load router
    const router = useRouter()

    // Load form
    const { model, getData, onSubmit } = form()

    // Set default action title
    const title = ref(
      t('__package__(kebabCase).__model-plural__(snakeCase).new')
    )

    // Get id from route and load record
    const id: string = router.currentRoute.value.params.id as string
    if (id) {
      title.value = t('__package__(kebabCase).__model-plural__(snakeCase).edit')
      getData(id)
    }

    return {
      model,
      title,
      onSubmit,
    }
  },
})
</script>
