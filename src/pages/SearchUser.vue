<template>
  <div v-loading="loading" class="search-page">
    <input placeholder="请输入 PSN ID" type="text" v-model="searchTerm" />
    <button @click="searchPlayer">Search</button>
    <div class="msg">{{ message }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { searchPlayer } from '@/api/user'

export default defineComponent({
  data() {
    return {
      loading: false,
      searchTerm: '',
      message: '',
    }
  },
  methods: {
    async searchPlayer() {
      this.loading = true
      this.message = ''
      const data = await searchPlayer(this.searchTerm)
      this.loading = false
      const match = data.domainResponses[0].results[0]
      if (
        match?.socialMetadata.onlineId.toLowerCase() ===
        this.searchTerm.toLowerCase()
      ) {
        this.$router.push({
          path: '/userPage',
          query: {
            accountId: match.socialMetadata.accountId,
          },
        })
      } else {
        this.message = 'PSN ID Not Found'
      }
    },
  },
})
</script>

<style lang="scss">
.search-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  input,
  button {
    margin-bottom: 16px;
  }
  .msg {
    color: #999;
    height: 100px;
  }
}
</style>
