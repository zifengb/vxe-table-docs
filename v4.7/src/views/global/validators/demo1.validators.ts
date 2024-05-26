import { VxeUI } from 'vxe-table'

// 手机号校验
VxeUI.validators.add('myMobile', {
  itemValidatorMethod ({ itemValue }) {
    if (!/^1[3-9]\d{9}$/.test(itemValue)) {
      return new Error('手机号不正确')
    }
  }
})

// 邮箱校验
VxeUI.validators.add('myEmail', {
  itemValidatorMethod ({ itemValue }) {
    if (!/\w[-.\w]*@[-a-z0-9]+(\.[-a-z0-9]+)*\.(com|cn)/.test(itemValue)) {
      return new Error('邮箱不正确')
    }
  }
})