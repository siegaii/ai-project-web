import { ElAvatar } from 'element-plus'
import { defineComponent } from 'vue'

const itemMock = {
  name: '法律顾问',
  avatar: 'https://afu-1255830993.cos.ap-shanghai.myqcloud.com/chato_image/Chato.png'
}

export default defineComponent({
  name: 'ChatContent',
  setup() {
    return () => (
      <div class="flex">
        <div class="flex w-full justify-center items-center p-3.5" style={{'border-bottom': '1px solid rgb(238, 238, 238)'}}>
          <div class="w-[32px] mr-2">
            <ElAvatar shape="square" size="small" src={itemMock.avatar} />
          </div>
          <div>{itemMock.name}</div>
        </div>
        <div></div>
      </div>
    )
  }
})
