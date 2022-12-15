<template>
  <div class="profile">
    <div class="top">
      <!-- <img
        class="avatar"
        :src="profile.personalDetail.profilePictures[2].url"
      /> -->
      <v-lazy-image class="avatar" :src="profile.avatars[2].url" />
      <div class="info">
        <div class="online-id">{{ profile.onlineId }}</div>
        <div class="about">{{ profile.aboutMe }}</div>
        <div class="level" v-if="summary">
          <img src="/level-star.png" style="margin-right: 6px" />
          <span class="number">{{ summary.trophyLevel }}</span>
        </div>
      </div>
    </div>
    <div v-if="summary" class="bottom trophy">
      <div class="trophy-type">
        <img src="/platinum.webp" />
        {{ summary.earnedTrophies.platinum }}
      </div>
      <div class="trophy-type">
        <img src="/gold.webp" />
        {{ summary.earnedTrophies.gold }}
      </div>
      <div class="trophy-type">
        <img src="/silver.webp" />
        {{ summary.earnedTrophies.silver }}
      </div>
      <div class="trophy-type">
        <img src="/bronze.webp" />
        {{ summary.earnedTrophies.bronze }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: #bdbdbd $shadow;
  .top {
    width: 90%;
    height: 100px;
    display: flex; 
    margin: 8px 16px;
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
      .level {
        .number,
        img {
          vertical-align: middle;
          height: 1.2em;
        }
      }
      .online-id {
        font-size: 20px;
      }
      .about {
        color: #999;
      }
    }
  }
  .trophy {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 8px 0;
    border-radius: 5px;
    background-color: #f2f3f7;
    // box-shadow: #bdbdbd $shadow;
    .trophy-type {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 50px;
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
