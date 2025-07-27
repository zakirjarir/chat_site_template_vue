<template>
  <div class="">
    <div>
        <div class="bg-color">
        <h4 class="text-center py-3  fw-bold text-dark">Contacts</h4>
    </div>
        <div class="w-100 w-md-25 border-end  p-3 overflow-auto" style="max-height: 100vh;">
           <ul class="list-group">
                <li
                v-for="(chat, index) in chats"
                :key="chat.id"
                :class="['list-group-item d-flex justify-content-between align-items-center list-group-item-action contact-item', activeChat === index ? 'active' : '']"
                @click="activeChat = index"
                style="cursor: pointer"
                tabindex="0"
                >
                <div class="d-flex align-items-center">
                    <!-- Profile Picture -->
                    <img
                    :src="chat.avatar"
                    alt="profile"
                    class="rounded-circle me-3 shadow-sm"
                    style="width: 48px; height: 48px; object-fit: cover; border: 2px solid transparent;"
                    />
                    <div class="contact-info">
                    <div class="fw-semibold fs-6">{{ chat.name }}</div>
                    <small class="text-muted text-truncate d-block" style="max-width: 160px;">
                        {{ chat.lastMessage }}
                    </small>
                    </div>
                </div>

                <span v-if="chat.unread > 0" class="badge bg-danger rounded-pill unread-badge">{{ chat.unread }}</span>
                </li>
           </ul>
    </div>
    </div>
  </div>
</template>

<script>
import Contact from '@/pages/Contact.vue'

export default {
  data() {
    return {
      chats: [
        {
          id: 'u123',
          name: 'Zakir Hossain',
          lastMessage: 'Ki khobor bro? Dekh ami Vue te ki korchi!',
          unread: 2,
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        },
        {
          id: 'u456',
          name: 'Alif Vai',
          lastMessage: 'Vue use korteso? Eta khub easy bro!',
          unread: 0,
          avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
        },
        {
          id: 'u789',
          name: 'Rafi Vai',
          lastMessage: 'Kemon aso? Kalke coffee khabo?',
          unread: 1,
          avatar: 'https://randomuser.me/api/portraits/men/78.jpg',
        },
      ],
      activeChat: null,
    }
  },
}
</script>

<style scoped>
.contact-item {
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
  border-radius: 0.5rem;
  margin-bottom: 0.4rem;
  padding: 0.7rem 1rem;
}


.list-group-item.active {
  background-color: #25d366 !important;
  border-color: #25d366 !important;
  color: white !important;
  font-weight: 700;
  box-shadow: 0 0 15px #25d366cc;
}

.contact-item.active img {
  border-color: white !important;
  box-shadow: 0 0 10px 3px #1f8c39cc;
}



/* For keyboard focus */
.contact-item:hover {
  outline: none;
  background-color: #c9e8be;
  box-shadow: 0 0 6px 2px #25d366aa;
}
</style>
