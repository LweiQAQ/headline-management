<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores'

const router = useRouter()
const toTest = () => {
  router.push({ name: 'test' })
}
const userStore = useUserStore()
</script>

<template>
  <div>
    我是app{{ userStore.token }}
    <el-button @click="$router.push({ name: 'home' })">到home</el-button>
    <el-button @click="toTest">到test</el-button>
    <el-button type="primary" @click="userStore.setToken('林伟1')"
      >登陆</el-button
    >
    <el-button @click="userStore.removeToken" type="warning">退出</el-button>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
