<template>
  <vxe-pulldown class="role-select-pulldown" v-model="showPopup" trigger="manual" show-popup-shadow>
    <template #default>
      <vxe-input :value="value" prefix-icon="vxe-icon-company" @focus="focusEvent"></vxe-input>
    </template>
    <template #dropdown>
      <div class="dropdown-table-body">
        <vxe-grid v-bind="gridOptions" @cell-click="cellClickEvent"></vxe-grid>
      </div>
    </template>
  </vxe-pulldown>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeGridProps } from 'vxe-table'

interface RowVO {
  name: string
  role: string
  sex: string
}

const mockList: RowVO[] = [
  { name: 'Test1', role: 'Develop', sex: '男' },
  { name: 'Test2', role: 'Test', sex: '女' },
  { name: 'Test3', role: 'PM', sex: '男' },
  { name: 'Test43', role: 'Designer', sex: '女' },
  { name: 'Test512', role: 'Develop', sex: '男' },
  { name: 'Test61', role: 'Develop', sex: '男' },
  { name: 'Test71', role: 'Designer', sex: '女' },
  { name: 'Test58', role: 'Develop', sex: '男' },
  { name: 'Test77', role: 'Test', sex: '女' },
  { name: 'Test916', role: 'Develop', sex: '男' },
  { name: 'Test28', role: 'Test', sex: '女' },
  { name: 'Test121', role: 'Develop', sex: '男' },
  { name: 'Test834', role: 'PM', sex: '女' },
  { name: 'Test316', role: 'Develop', sex: '女' },
  { name: 'Test97', role: 'PM', sex: '男' },
  { name: 'Test41', role: 'Develop', sex: '女' },
  { name: 'Test27', role: 'PM', sex: '男' },
  { name: 'Test3218', role: 'PM', sex: '女' }
]

export default Vue.extend({
  props: {
    value: String
  },
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      autoResize: true,
      loading: false,
      height: 300,
      rowConfig: {
        isHover: true
      },
      columns: [
        { field: 'name', title: 'Name' },
        { field: 'role', title: 'Role' },
        { field: 'sex', title: 'Sex' }
      ],
      data: mockList
    }

    return {
      showPopup: false,
      gridOptions
    }
  },
  methods: {
    cellClickEvent ({ row }) {
      this.$emit('input', row.role)
      this.showPopup = false
    },
    focusEvent () {
      this.$nextTick(() => {
        this.showPopup = true
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.role-select-pulldown {
  width: 100%;
}
.dropdown-table-body {
  width: 320px;
}
</style>
