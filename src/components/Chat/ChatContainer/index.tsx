import ChatContent from '@/components/Chat/ChatContent'
import ChatList from '@/components/Chat/ChatList'
import { defineComponent, ref } from 'vue'

const roles = [
  {
    id: '1',
    name: '法律顾问',
    avatar: 'https://afu-1255830993.cos.ap-shanghai.myqcloud.com/chato_image/Chato.png'
  },
  {
    id: '2',
    name: 'AI 智能客服',
    avatar: 'https://afu-1255830993.cos.ap-shanghai.myqcloud.com/447479457016221696.png'
  },
  {
    id: '3',
    name: '健身教练',
    avatar: 'https://afu-1255830993.cos.ap-shanghai.myqcloud.com/chato_image/Chato.png'
  },
]

export default defineComponent({
  name: 'ChatContainer',
  setup() {
    const active = ref(roles[0])
    return () => (
      <div class="flex h-full">
        <div class="w-[240px]" style={{ 'border-right': '1px solid rgb(228, 231, 237)' }}>
          <ChatList data={roles} defaultActive={active.value} onClick={(item)=> {
            active.value = item.id
          }} />
        </div>
        <div class="w-full">
          <ChatContent />
        </div>
      </div>
    )
  }
})
