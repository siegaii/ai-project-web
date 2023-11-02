import { ElAvatar } from 'element-plus'
import { defineComponent, ref, type PropType } from 'vue'
import type { ChatRole } from '../type'

export default defineComponent({
  name: 'ChatList',
  props: {
    data: {
      type: Array as PropType<ChatRole[]>,
      default: () => []
    },
    active: {
      type: String,
      default: ''
    }
  },
  setup({ data, active }) {
    return () => (
      <div class="text-sm">
        <div class="mt-6 ml-5 mb-3 font-medium leading-[22px] bg-light-50">对话列表</div>
        <div>
          {data.map((item) => (
            <div
              class={`flex items-center cursor-pointer p-2 hover:bg-[#f2f3f5] ${
                item.id === active ? 'bg-[#f2f3f5]' : ''
              }`}
            >
              <div class="w-[32px] mr-2">
                <ElAvatar shape="square" size="small" src={item.avatar} />
              </div>
              <div>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
})
