import {flushPromises, mount} from '@vue/test-utils'
import LApp from "@/LApp/LApp.vue"
import Antd from 'ant-design-vue';


describe('LApp.vue', () => {
  test('mount', async () => {
    const wrapper = mount(LApp, {
      global: {
        plugins: [ Antd, ]
      }
    })
  })
})
