<template>
  <div>
    <div>
      <img
        class="icon"
        :src="trophy.trophyIconUrl"
      />
    </div>
    <div>
      <div class="name">{{ trophy.trophyName }}</div>
      <div class="desc">{{ trophy.trophyDetail }}</div>
      <div class="date">{{ trophy.earnedDateTime || '-' }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
enum TrophyType {
  'platinum',
  'gold',
  'silver',
  'bronze',
}
defineProps<{
  trophy: {
    trophyId: 0
    trophyHidden: boolean
    trophyType: TrophyType
    trophyName: string
    trophyDetail: string
    trophyIconUrl: string
    trophyGroupId: 'default'
    earnedDateTime: string
  }
}>()
</script>

<style>

</style>
