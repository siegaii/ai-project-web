import ChatContent from '@/components/Chat/ChatContent'
import ChatList from '@/components/Chat/ChatList'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChatContainer',
  props: {},
  setup() {
    return () => (
      <div class="flex h-screen">
        <div class="w-[240px]" style={{ 'border-right': '1px solid rgb(228, 231, 237)' }}>
          <ChatList/>
        </div>
        <div class="w-full">
          <ChatContent />
        </div>
      </div>
    )
  }
})
