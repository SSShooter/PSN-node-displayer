<script setup lang="ts">
import type { Trophy, EarnedTrophy } from '@/api/index'
import VLazyImage from 'v-lazy-image'
interface DisplayTrophy extends Trophy, EarnedTrophy {}

defineProps<{
  trophy: DisplayTrophy
}>()
</script>

<template>
  <div class="trophy-card" :class="!trophy.earnedDateTime && 'not-earned'">
    <v-lazy-image
      class="icon"
      :class="trophy.trophyType"
      :src="trophy.trophyIconUrl"
    />
    <div class="info">
      <div class="name">{{ trophy.trophyName }}</div>
      <div class="desc">{{ trophy.trophyDetail }}</div>
      <div class="date number">{{ trophy.earnedDateTime || '-' }}</div>
    </div>
    <img
      v-if="trophy.earnedDateTime"
      class="trophy-img"
      :src="`/${trophy.trophyType}.webp`"
    />
  </div>
</template>

<style lang="scss" scoped>
.platinum {
  box-shadow: #7bc4ff $shadow;
}
.gold {
  box-shadow: #ffd658 $shadow;
}
.silver {
  box-shadow: #c0c0c0 $shadow;
}
.bronze {
  box-shadow: #f1b171 $shadow;
}
.trophy-card {
  position: relative;
  box-shadow: #bdbdbd $shadow;
  background-color: #fff;
  height: 64px;
  padding: 12px;
  margin: $item-margin;
  display: flex;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;
  .icon {
    height: 64px;
    width: 64px;
    border-radius: 12px;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    margin-left: 12px;
    width: 200px;
    flex-grow: 1;
    .name,
    .desc {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }
    .name {
      font-size: 1em;
    }
    .desc {
      font-size: 0.8em;
      opacity: 0.6;
    }
    .date {
      font-size: 0.8em;
      opacity: 0.6;
    }
  }
  .trophy-img {
    position: absolute;
    right: -31px;
    bottom: -25px;
    opacity: 0.3;
    width: 100px;
  }
}
.not-earned {
  opacity: 0.5;
}
</style>
