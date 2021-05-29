<template>
  <AdminCommonGrid
    :name="
      $t(
        '__package__(kebabCase).__model-plural__(snakeCase).__model-plural__(snakeCase)'
      )
    "
    create-route="admin.__package__(kebabCase).__model-plural__(kebabCase).create"
    :create-label="$t('__package__(kebabCase).__model-plural__(snakeCase).new')"
    :rows="rows"
    :columns="columns"
    :meta="meta"
    :filters="filters"
    resource="__model-plural__(camelCase)"
    :loadComponents="loadComponents"
    @submit="refreshRecords"
    @submit-cell="handleCellEvent"
  ></AdminCommonGrid>
</template>

<script lang="ts">
import AdminCommonGrid from '@/../../../../../../packages/motor-core/components/admin/common/Grid.vue'
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import EditButton from '@/../../../../../../packages/motor-core/components/admin/cell/EditButton.vue'
import DeleteButton from '@/../../../../../../packages/motor-core/components/admin/cell/DeleteButton.vue'
import grid from '@/grids/__package__(kebabCase)/__model__(camelCase)Grid'

export default defineComponent({
  name: 'admin-__package__(kebabCase).__model-plural__(kebabCase)',
  components: {
    AdminCommonGrid,
  },
  setup() {
    // Load i18n module
    const { t } = useI18n()

    // Define columns for grid
    const columns = ref([
      {
        name: t('__package__(kebabCase).__model-plural__(snakeCase).name'),
        prop: 'name',
      },
      {
        name: '',
        prop: 'actions',
        columnStyle: 'width: 200px',
        rowWrapperClass: 'justify-content-end',
        components: [
          {
            name: 'EditButton',
            options: {
              route:
                'admin.__package__(kebabCase).__model-plural__(kebabCase).edit',
              name: t('global.edit'),
            },
          },
          { name: 'DeleteButton', options: { name: t('global.delete') } },
        ],
      },
    ])

    // Define filters for grid
    const filters = ref([{ name: 'SearchFilter', options: {} }])

    const loadComponents = <any>[]

    // WE START THE OUTSOURCED CODE HERE
    const { rows, meta, refreshRecords, handleCellEvent } = grid()
    return {
      columns,
      filters,
      rows,
      meta,
      refreshRecords,
      loadComponents,
      handleCellEvent,
    }
  },
})
</script>
