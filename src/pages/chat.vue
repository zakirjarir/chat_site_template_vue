<template>
  <div class="vh-100 d-flex flex-column bg-white">

    <!-- Top Chat Header -->
    <div class="d-flex align-items-center bg-color justify-content-between px-3 py-2 border-bottom shadow-sm" style="min-height: 56px;">
      <div class="d-flex">
        <img
              src="https://images.unsplash.com/photo-1536063211352-0b94219f6212?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
              alt="profile"
              class="rounded-circle me-3 shadow-sm"
              style="width: 48px; height: 48px; object-fit: cover; border: 2px solid transparent;"
            />
        <div class="mt-2">
            <h6 class="mb-0">{{ currentChat.name }}</h6>
            <small class="text-muted">Online</small>
        </div>
      </div>
      <div class="text-end mt-3">
        <div class="dropdown">
            <p id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false" >
                <i class="bi bi-three-dots-vertical"></i>
            </p>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button class="dropdown-item" type="button">Delete all message</button>
                <button class="dropdown-item" type="button">Logout</button>
            </div>
        </div>
      </div>
    </div>

    <!-- Messages Body -->
    <div ref="chatBody" class="flex-grow-1 overflow-auto px-3 py-2" style="background-color: #f0f2f5;">
      <div v-for="(msg, index) in currentChat.messages" :key="index" class="d-flex mb-2">
        <div
          :class="[
            'p-2 rounded-3 shadow-sm',
            msg.sender === 'me'
              ? 'bg-primary text-white ms-auto'
              : 'bg-light text-dark me-auto',
            'w-auto',
          ]"
          style="max-width: 75%;"
        >
          <div class="small">{{ msg.text }}</div>
          <div class="text-end small text-white-50 mt-1" v-if="msg.sender === 'me'">{{ msg.time }}</div>
          <div class="text-end small text-muted mt-1" v-else>{{ msg.time }}</div>
        </div>
      </div>
    </div>

    <!-- Chat Input -->
    <div class="border-top p-2 d-flex align-items-center bg-white gap-2" style="min-height: 56px;">
  <!-- File Attachment Icon -->
  <button class="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
    <label for="file" class="m-0"><i class="bi bi-paperclip"></i></label>
    <input id="file" type="file" class="d-none" />
  </button>

  <!-- Auto-Resizing Textarea -->
  <textarea
    v-model="newMessage"
    ref="messageInput"
    @input="autoResize"
    @keyup.enter.exact.prevent="sendMessage"
    class="form-control px-3 py-2"
    placeholder="Type a message..."
    style="resize: none; border-radius: 20px; overflow: hidden;"
  ></textarea>

  <!-- Send Button -->
  <button
    @click="sendMessage"
    class="btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
    style="width: 40px; height: 40px;"
  >
    <i class="bi bi-send-fill"></i>
  </button>
</div>

</div>
</template>

<script>
export default {
  name: 'Messenger',
  data() {
    return {
      chats: [
        {
          name: 'Zakir Hossain',
          lastMessage: 'Ki khobor bro?',
          messages: [
            { text: 'Hello Zakir!', sender: 'me', time: '10:00 AM' },
            { text: 'Ki khobor bro?', sender: 'them', time: '10:01 AM' },
          ],
        },
        {
          name: 'Alif Vai',
          lastMessage: 'Vue use korteso?',
          messages: [
            { text: 'Vue use korteso?', sender: 'them', time: '9:30 AM' },
          ],
        },
      ],
      activeChat: 0,
      newMessage: '',
    }
  },
  computed: {
    currentChat() {
      return this.chats[this.activeChat]
    },
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() === '') return
      console.log("Sending:", this.newMessage)
      this.newMessage = ''
      this.autoResize() // reset textarea height
    },
    autoResize() {
      const textarea = this.$refs.messageInput
      textarea.style.height = 'auto'
      textarea.style.height = textarea.scrollHeight + 'px'
    }
  },
  mounted(){
    this.autoResize()
  }
}
</script>
