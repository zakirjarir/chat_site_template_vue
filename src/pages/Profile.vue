<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <div class="card shadow-lg border-0 rounded-4 overflow-hidden">

          <!-- Cover photo section (optional) -->
          <div class="bg-success" style="height: 100px;"></div>

          <!-- Profile Picture & Info -->
          <div class="text-center p-4 position-relative" style="margin-top: -60px;">
            <img
              :src="user.avatar"
              alt="Profile"
              class="rounded-circle border border-white shadow"
              style="width: 120px; height: 120px; object-fit: cover;"
            />
            <h4 class="mt-3 fw-bold">{{ user.name }}</h4>
            <p class="text-muted mb-1">{{ user.status }}</p>
            <p class="text-secondary small">{{ user.location }}</p>
            <div class="d-flex justify-content-center gap-3 mt-2">
              <a href="#" class="text-primary"><i class="bi bi-facebook fs-4"></i></a>
              <a href="#" class="text-info"><i class="bi bi-twitter-x fs-4"></i></a>
              <a href="#" class="text-danger"><i class="bi bi-instagram fs-4"></i></a>
              <a href="#" class="text-dark"><i class="bi bi-github fs-4"></i></a>
            </div>
          </div>

          <!-- Contact Details -->
          <div class="p-4 border-top">
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <strong>Email:</strong>
                <span>{{ user.email }}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <strong>Phone:</strong>
                <span>{{ user.phone }}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <strong>Username:</strong>
                <span>@{{ user.username }}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <strong>Member Since:</strong>
                <span>{{ user.joined }}</span>
              </li>
            </ul>
          </div>

          <!-- Action buttons -->
          <div class="p-4 border-top text-center">
            <button class="btn btn-outline-primary rounded-pill px-4 me-2">
              <i class="bi bi-chat-dots-fill me-1"></i> Message
            </button>
            <button class="btn btn-success rounded-pill px-4">
              <i class="bi bi-pencil-square me-1"></i> Edit Profile
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  data() {
    return {
      user: {
        name: "Zakir Hossain",
        username: "zakirjarir",
        status: "Web Developer | Vue Lover 😎",
        location: "Dhaka, Bangladesh",
        email: "zakir@example.com",
        phone: "+8801XXXXXXXXX",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        joined: "July 2023",
      },
    };
  },
};
</script>

<style scoped>
.card {
  background-color: #ffffff;
  border-radius: 20px;
}

.list-group-item {
  border: none;
  font-size: 0.95rem;
}
</style>
