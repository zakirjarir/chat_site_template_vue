<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-10 col-lg-8">
        <div class="card shadow-sm rounded-4 p-4">
          <h3 class="mb-4 text-center fw-bold text-success">Edit Profile</h3>

          <!-- Profile Photo Preview + Upload -->
          <div class="text-center mb-4">
            <img
              :src="previewImage || form.avatar"
              alt="Profile"
              class="rounded-circle shadow"
              style="width: 120px; height: 120px; object-fit: cover;"
            />
            <div class="mt-2">
              <label class="btn btn-outline-secondary btn-sm rounded-pill">
                <i class="bi bi-upload me-1"></i> Change Photo
                <input type="file" class="d-none" @change="handleImageChange" />
              </label>
            </div>
          </div>

          <!-- Edit Form -->
          <form @submit.prevent="saveProfile">
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label">Full Name</label>
                <input v-model="form.name" type="text" class="form-control" required />
              </div>
              <div class="col-md-6">
                <label class="form-label">Username</label>
                <input v-model="form.username" type="text" class="form-control" required />
              </div>
              <div class="col-md-6">
                <label class="form-label">Email</label>
                <input v-model="form.email" type="email" class="form-control" required />
              </div>
              <div class="col-md-6">
                <label class="form-label">Phone</label>
                <input v-model="form.phone" type="text" class="form-control" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Status</label>
                <input v-model="form.status" type="text" class="form-control" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Location</label>
                <input v-model="form.location" type="text" class="form-control" />
              </div>
            </div>

            <!-- Buttons -->
            <div class="text-center mt-4 d-flex justify-content-center gap-3 flex-wrap">
              <button type="submit" class="btn btn-success px-4 rounded-pill">
                <i class="bi bi-save me-1"></i> Save Changes
              </button>
              <button @click="cancelEdit" type="button" class="btn btn-outline-secondary px-4 rounded-pill">
                <i class="bi bi-x-circle me-1"></i> Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditProfile",
  data() {
    return {
      previewImage: null,
      form: {
        name: "Zakir Hossain",
        username: "zakirjarir",
        email: "zakir@example.com",
        phone: "+8801XXXXXXXXX",
        status: "Web Developer | Vue Lover 😎",
        location: "Dhaka, Bangladesh",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
    }
  },
  methods: {
    handleImageChange(e) {
      const file = e.target.files[0]
      if (file) {
        this.previewImage = URL.createObjectURL(file)
      }
    },
    saveProfile() {
      alert("✅ Profile saved successfully!")
      // তোমার এখানে API call or store update করতে পারো
    },
    cancelEdit() {
      // তুমি চাইলে route change করতে পারো
      alert("❌ Changes canceled.")
    },
  },
}
</script>

<style scoped>
.card {
  border-radius: 1.25rem;
}

.form-label {
  font-weight: 500;
}
</style>
