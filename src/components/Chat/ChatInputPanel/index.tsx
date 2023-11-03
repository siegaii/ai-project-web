import { defineComponent, ref } from 'vue'
import './ChatTextarea.scss'
import { ElInput, ElTooltip } from 'element-plus'
import '../assets/font_4313692_rap6qvzof9/iconfont.js'

export default defineComponent({
  name: 'ChatInputPanel',
  emits: ['send'],
  setup(_, { emit }) {
    const text = ref('')

    const sendMessage = () => {
      if (text.value.trim()) {
        emit('send', text.value)
        text.value = ''
      }
    }

    const handleKeydown = (event: any) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault()
        sendMessage()
      }
    }
    return () => (
      <div class="w-full relative chat-textarea">
        <div class="send-icon">
          <ElTooltip class="box-item" effect="dark" content="发送">
            <svg class="icon" aria-hidden="true">
              <use xlinkHref="#icon-send"></use>
            </svg>
          </ElTooltip>
        </div>
        <ElInput
          class="rounded-[10px] "
          v-model={[text.value]}
          autosize={{ minRows: 1, maxRows: 4 }}
          type="textarea"
          placeholder="输入问题, 换行可通过shift+回车"
          resize="none"
          onKeydown={handleKeydown}
        />
      </div>
    )
  }
})
