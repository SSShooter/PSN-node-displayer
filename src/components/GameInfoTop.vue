<script setup lang="ts">
defineProps<{
  profile: Profile
  game: TrophyTitleResponse
}>()
</script>

<template>
  <div class="game-card">
    <img class="icon" :src="game.trophyTitleIconUrl" />
    <div class="info">
      <img class="avatar" :src="profile.avatars[2].url" />
      <div class="online-id">PSN ID: {{ profile.onlineId }}</div>
      <div class="name">{{ game.trophyTitleName }}</div>
      <div class="trophy">
        <div class="trophy-type number">
          <img src="/platinum.webp" />
          {{
            game.earnedTrophies.platinum + '/' + game.definedTrophies.platinum
          }}
        </div>
        <div class="trophy-type number">
          <img src="/gold.webp" />
          {{ game.earnedTrophies.gold + '/' + game.definedTrophies.gold }}
        </div>
        <div class="trophy-type number">
          <img src="/silver.webp" />
          {{ game.earnedTrophies.silver + '/' + game.definedTrophies.silver }}
        </div>
        <div class="trophy-type number">
          <img src="/bronze.webp" />
          {{ game.earnedTrophies.bronze + '/' + game.definedTrophies.bronze }}
        </div>
      </div>
    </div>
    <div class="plaform">{{ game.trophyTitlePlatform }}</div>
    <div class="filter">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.game-card {
  position: relative;
  box-shadow: #bdbdbd $shadow;
  margin: $front-margin;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  height: 150px;
  .icon {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .info {
    background-color: rgba(0, 0, 0, 0.6);
    color: #eeeeee;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 8px;
    bottom: 0;
    .name {
      font-size: 20px;
      margin-bottom: 6px;
    }
    .progress {
      margin-bottom: 6px;
    }
    .trophy {
      display: flex;
      justify-content: space-evenly;
      .trophy-type {
        margin-left: 8px;
        img {
          width: 20px;
          vertical-align: text-bottom;
          filter: drop-shadow(0 0 4px white);
        }
      }
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
  .plaform {
    position: absolute;
    top: 8px;
    left: 8px;
    font-size: 0.8em;
    background-color: #bdbdbd;
    color: #111;
    padding: 2px 8px;
    border-radius: 3px;
  }
  .filter {
    position: absolute;
    bottom: 8px;
    left: 8px;
    font-size: 0.8em;
    color: #bdbdbd;
  }
}
</style>
