import ChatContainer from '@/components/Chat/ChatContainer'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChatPageTest',
  props: {},
  setup() {
    return () => (
      <div class="h-screen">
        <ChatContainer />
      </div>
    )
  }
})
