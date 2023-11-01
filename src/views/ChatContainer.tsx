import Chat from '@/components/Chat/ChatContent'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChatContainer',
  props: {},
  setup() {
    return () => (
      <div class="flex p-[10px] h-screen">
        <div class="w-[300px]" style={{ 'border-right': '1px solid rgb(228, 231, 237)' }}>
          sider
        </div>
        <div class="w-full">
          <Chat />
        </div>
      </div>
    )
  }
})
