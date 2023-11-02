import { ElAvatar } from 'element-plus'
import { defineComponent, type PropType } from 'vue'
import type { ChatRole } from '../type'
import ChatInputPanel from '../ChatInputPanel'

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
      <div class="h-full flex flex-col">
        <div
          class="chat-content-header flex w-full justify-center items-center p-3.5"
          style={{ 'border-bottom': '1px solid rgb(238, 238, 238)' }}
        >
          <div class="w-[32px] mr-2">
            <ElAvatar shape="square" size="small" src={aiBot.avatar} />
          </div>
          <div>{aiBot.name}</div>
        </div>
        <div class="flex flex-1 justify-center">
          <div class="max-w-[790px] w-full h-full relative">
            <div class="chat-content-body ">body</div>
            <div
              class="chat-content-footer absolute left-0 right-0 bottom-0 py-4 flex justify-center"
              style={{ border: '1px solid blue' }}
            >
              <div class="mb-1 w-full">
                <div class="mx-2 ">
                  <ChatInputPanel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
