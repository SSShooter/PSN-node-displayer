<template>
  <div v-loading="loading">
    <div v-if="!friendsList.length">你的朋友很少……等等，好像完全没有啊……</div>
    <PlayerProfile
      v-for="f in friendsList"
      :key="f.accountId"
      :profile="f"
      @click="goToGameList(f)"
    />
  </div>
</template>

<script setup lang="ts">
import { fetchFriends, fetchProfiles } from '@/api/user'
import PlayerProfile from '@/components/PlayerProfile.vue'
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const friendsList: Ref<Profile[]> = ref([])
const loading = ref(false)
const route = useRoute()
const router = useRouter()

onMounted(async () => {
  loading.value = true
  const data = await fetchFriends({
    accountId: route.query.accountId as string,
  })
  if (!data.friends.length) {
    loading.value = false
    return
  }
  const profilesData = await fetchProfiles({
    accountIds: data.friends.join(','),
  })
  friendsList.value = profilesData.profiles.map((user, index) => {
    user.accountId = data.friends[index]
    return user
  })
  loading.value = false
})

function goToGameList(user: Profile) {
  router.push({
    path: '/userPage',
    query: {
      accountId: user.accountId,
    },
  })
}
</script>

<style>
.user-list {
}
</style>
