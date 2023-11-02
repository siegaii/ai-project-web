import { defineComponent, ref } from 'vue'
import './ChatTextarea.scss'
import { ElInput } from 'element-plus'

export default defineComponent({
  name: 'ChatInputPanel',
  setup() {
    const text = ref('')
    return () => (
      <div class="w-full">
        <ElInput
          class="rounded-[10px] chat-textarea "
          v-model={[text.value]}
          autosize={{ minRows: 2, maxRows: 4 }}
          type="textarea"
          placeholder="输入问题, 换行可通过shift+回车"
        />
      </div>
    )
  }
})
