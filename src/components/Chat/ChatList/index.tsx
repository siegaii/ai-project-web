import { ElAvatar } from 'element-plus'
import { defineComponent } from 'vue'

const mockData = [
  {
    id: '1',
    name: '法律顾问',
    avatar: 'https://afu-1255830993.cos.ap-shanghai.myqcloud.com/chato_image/Chato.png'
  },
  {
    id: '2',
    name: 'AI 智能客服',
    avatar: 'https://afu-1255830993.cos.ap-shanghai.myqcloud.com/447479457016221696.png'
  }
]

export default defineComponent({
  name: 'ChatList',
  setup() {
    return () => (
      <div class="text-sm">
        <div class="mt-6 ml-5 mb-3 font-medium leading-[22px]">对话列表</div>
        <div>
          {mockData.map((item) => (
            <div class="flex items-center cursor-pointer p-2">
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
