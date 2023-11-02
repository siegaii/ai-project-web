import { defineComponent, ref } from 'vue'
import './ChatTextarea.scss'
import { ElInput } from 'element-plus'
import '../assets/font_4313692_rap6qvzof9/iconfont.js'

export default defineComponent({
  name: 'ChatInputPanel',
  setup() {
    const text = ref('')
    return () => (
      <div class="w-full relative chat-textarea">
        <div class="send-icon absolute right-[6px] bottom-[7px]">
          <svg class="icon" aria-hidden="true">
            <use xlinkHref="#icon-send"></use>
          </svg>
        </div>
        <ElInput
          class="rounded-[10px] "
          v-model={[text.value]}
          autosize={{ minRows: 1, maxRows: 4 }}
          type="textarea"
          placeholder="输入问题, 换行可通过shift+回车"
          resize="none"
        />
      </div>
    )
  }
})
