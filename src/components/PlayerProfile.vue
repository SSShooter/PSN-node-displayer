<template>
  <div class="profile">
    <!-- <img
        class="avatar"
        :src="profile.personalDetail.profilePictures[2].url"
      /> -->
    <v-lazy-image class="avatar" :src="profile.avatars[2].url" />
    <div class="info">
      <div class="online-id">
        {{ profile.onlineId }}
        <img src="/level-star.png" style="margin-right: 6px" />
        <span v-if="summary" class="number">{{ summary.trophyLevel }}</span>
      </div>
      <div class="about">{{ profile.aboutMe }}</div>
      <div v-if="summary" class="trophy">
        <div class="trophy-type number">
          <img src="/platinum.webp" />
          {{ summary.earnedTrophies.platinum }}
        </div>
        <div class="trophy-type number">
          <img src="/gold.webp" />
          {{ summary.earnedTrophies.gold }}
        </div>
        <div class="trophy-type number">
          <img src="/silver.webp" />
          {{ summary.earnedTrophies.silver }}
        </div>
        <div class="trophy-type number">
          <img src="/bronze.webp" />
          {{ summary.earnedTrophies.bronze }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  position: relative;
  display: flex;
  align-items: center;
  margin: $front-margin;
  padding: 16px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: #bdbdbd $shadow;
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 5px;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 20px;
    width: 20px;
    flex-grow: 1;
    .online-id {
      font-size: 20px;
      vertical-align: baseline;
      .number,
      img {
        vertical-align: baseline;
        height: 20px;
      }
      .number {
        color: #e7c533;
      }
    }
    .about {
      color: #999;
    }
  }

  .trophy {
    display: flex;
    justify-content: space-between;
    padding: 8px;
    margin-top: 8px;
    border-radius: 5px;
    background-color: #f2f3f7;
    .trophy-type {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      img {
        width: 40px;
      }
    }
  }
}
</style>
<script setup lang="ts">
import VLazyImage from 'v-lazy-image'
defineProps<{
  profile: Profile
  summary?: SummaryResponse
}>()
</script>
