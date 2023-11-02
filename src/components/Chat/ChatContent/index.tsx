import { ElAvatar } from 'element-plus'
import { defineComponent, type PropType } from 'vue'
import type { ChatRole } from '../type'

export default defineComponent({
  name: 'ChatContent',
  props: {
    aiBot: {
      type: Object as PropType<ChatRole>,
      required: true
    }
  },
  setup({ aiBot }) {
    return () => (
      <div class="flex">
        <div
          class="flex w-full justify-center items-center p-3.5"
          style={{ 'border-bottom': '1px solid rgb(238, 238, 238)' }}
        >
          <div class="w-[32px] mr-2">
            <ElAvatar shape="square" size="small" src={aiBot.avatar} />
          </div>
          <div>{aiBot.name}</div>
        </div>
        <div></div>
      </div>
    )
  }
})
