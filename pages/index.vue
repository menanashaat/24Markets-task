<script setup>
 import Login from '../components/Login.vue'
const { locale } = useI18n()
const router = useRouter()

// onMounted(() => {
//   router.replace(`/${locale.value}/login`)
// })
</script>

<template>
  
   <Login />
    
</template>

<style>
.loading-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0f0f1c;
  color: #fff;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(143, 59, 253, 0.3);
  border-radius: 50%;
  border-top-color: #8f3bfd;
  animation: spin 1s linear infinite;
  margin-bottom: 20px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>