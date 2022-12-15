<script lang="ts">
import { defineComponent } from 'vue'
import TrophyInfo from '@/components/TrophyInfo.vue'
import TrophyDetail from '@/components/TrophyDetail.vue'
import GameInfo from '@/components/GameInfoTop.vue'
import {
  fetchGameTrophyList,
  fetchEarnedTrophyList,
  fetchGameInfo,
  fetchProfile,
} from '@/api/index'

import type { Trophy, EarnedTrophy } from '@/api/index'
import { LocationQuery } from 'vue-router'

interface DisplayTrophy extends Trophy, EarnedTrophy {}
interface Query extends LocationQuery {
  npCommunicationId: string
  trophyGroupId: string
  accountId: string
  npServiceName: string
}

export default defineComponent({
  components: { TrophyInfo, TrophyDetail, GameInfo },
  data() {
    return {
      currentTrophy: {},
      trophyList: [] as DisplayTrophy[],
      originalList: [] as DisplayTrophy[],
      loading: false,
      gameInfo: {} as TrophyTitleResponse | null,
      profile: null as Profile | null,
    }
  },
  activated() {
    this.fetch()
  },
  methods: {
    showAll() {
      this.trophyList = this.originalList
    },
    showEarned() {
      this.trophyList = this.originalList
        .filter((trophy) => trophy.earnedDateTime)
        .sort((a, b) => {
          return b.timestamp - a.timestamp
        })
    },
    fetch: async function () {
      this.loading = true
      this.trophyList = []
      this.gameInfo = this.profile = null
      const query = this.$route.query as Query
      const gameInfo = await fetchGameInfo(query)
      const profile = await fetchProfile(query)
      this.profile = profile
      const count: TrophyCount = { platinum: 0, gold: 0, silver: 0, bronze: 0 }
      gameInfo.earnedTrophies = count
      this.gameInfo = gameInfo
      const data = await fetchGameTrophyList(query)
      const earned = await fetchEarnedTrophyList(query)
      this.originalList = this.trophyList = data.trophies.map(
        (trophy, index) => {
          const earnedTrophy = earned.trophies[index]
          if (earnedTrophy.earned) {
            count[earnedTrophy.trophyType]++
          }
          trophy = { ...trophy, ...earnedTrophy }
          return trophy
        }
      ) as DisplayTrophy[]
      this.loading = false
    },
  },
})
</script>

<template>
  <div v-loading="loading" class="game-trophy">
    <GameInfo v-if="gameInfo && profile" :game="gameInfo" :profile="profile">
      <div v-if="trophyList === originalList" @click="showEarned">获取顺序</div>
      <div v-else @click="showAll">展示全部</div>
    </GameInfo>
    <TrophyInfo
      v-for="item in trophyList"
      :key="item.trophyId"
      :trophy="item"
      @click="currentTrophy = item"
    >
    </TrophyInfo>
  </div>
</template>

<style lang="scss" scoped>
.game-trophy {
  .button-wrapper {
    text-align: center;
  }
  button {
    width: 200px;
    margin: 0 auto;
  }
  .detail-popup {
    position: fixed;
    top: 5vh;
    left: 5vw;
    width: 90vw;
  }
}
</style>
