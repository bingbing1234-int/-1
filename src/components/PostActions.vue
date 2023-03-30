<template>
  <div class="postActions">
    <TheIcon icon="like" fill="none" stroke="#000000" />
    <span>1.5w</span>

    <TheIcon icon="comment" fill="none" stroke="#000000" />
    <span>11w</span>

    <TheIcon icon="favorite" fill="none" stroke="#000000" />
    <span>11w</span>

  </div>
</template>

<script>
  import TheIcon from './TheIcon.vue';

  export default {
    components: {
      TheIcon
    }
  }
</script>

<style scoped>
  .postActions {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    column-gap: 16px;
    row-gap: 4px;
  }

  .postActions>svg {
    width: 32px;
    height: 32px;
    grid-row: 1 / 2;
    cursor: pointer;
  }

  .postActions>span {
    font-size: 14px;
  }
</style>