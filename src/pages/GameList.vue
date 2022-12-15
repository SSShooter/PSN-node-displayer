<template>
  <div v-loading="loading" class="game-list">
    <div v-if="msg" style="text-align: center">{{ msg }}</div>
    <template v-else>
      <PlayerProfile :profile="profile" :summary="summary" />
      <GameInfo
        v-for="item in gameList"
        :game="item"
        :key="item.npCommunicationId"
        @click="goToGameTrophy(item)"
      />
      <div class="bottom" v-if="nextOffset" @click="nextPage">Load More</div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PlayerProfile from '@/components/PlayerProfile.vue'
import GameInfo from '@/components/GameInfo.vue'
import { fetchTrophyList, fetchProfile, fetchSummary } from '@/api/index'

let accountId: string
const profile = {
  avatars: [null, null, { url: '' }] as Pic[],
}
const summary = {
  earnedTrophies: {},
}
declare module 'vue-router' {
  interface RouteMeta {
    from: string[]
  }
}
export default defineComponent({
  components: { PlayerProfile, GameInfo },
  data() {
    return {
      msg: '',
      loading: true,
      summary: summary as SummaryResponse,
      profile: profile as Profile,
      gameList: [] as TrophyTitleResponse[],
      nextOffset: 0,
      isMounted: true,
    }
  },
  mounted() {
    this.isMounted = true
  },
  beforeRouteEnter(to, from, next) {
    next((vm: any) => {
      if (to.meta.from.includes(from.path) || vm.isMounted) {
        vm.isMounted = false
        vm.fetch()
      }
    })
  },
  methods: {
    reset() {
      this.nextOffset = 0
      this.msg = ''
      this.gameList = []
      this.profile = profile as Profile
      this.summary = summary as SummaryResponse
    },
    async fetch() {
      accountId = this.$route.query.accountId as string
      this.loading = true
      this.reset()
      try {
        const summary = await fetchSummary({
          accountId: accountId || 'me',
        })
        this.summary = summary
        const profile = await fetchProfile({ accountId: summary.accountId })
        this.profile = profile
        const data = await fetchTrophyList({
          accountId: summary.accountId,
          offset: this.nextOffset,
        })
        // Pick specific game
        // eg. [NPWR13281_00,NPWR08199_00,NPWR25264_00,NPWR05818_00,NPWR07897_00,NPWR15587_00]
        if (this.$route.query.pick) {
          const pick = this.$route.query.pick
          this.gameList = data.trophyTitles.filter((item) => {
            return pick.includes(item.npCommunicationId)
          })
        } else {
          this.gameList = data.trophyTitles
          this.nextOffset = data.nextOffset || 0
        }
      } catch (err) {
        this.msg = 'ta 隐藏了自己的气息'
      }
      this.loading = false
    },
    async nextPage() {
      this.loading = true
      const data = await fetchTrophyList({
        accountId: this.summary.accountId,
        offset: this.nextOffset,
      })
      this.gameList = [...this.gameList, ...data.trophyTitles]
      this.nextOffset = data.nextOffset || 0
      this.loading = false
    },
    goToGameTrophy({ npCommunicationId, npServiceName }: TrophyTitleResponse) {
      this.$router.push({
        path: '/gameTrophy',
        query: {
          npCommunicationId,
          accountId,
          npServiceName,
        },
      })
    },
  },
})
</script>

<style>
.bottom {
  text-align: center;
}
</style>
