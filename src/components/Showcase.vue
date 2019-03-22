<template>
  <div class="showcase">
    <iframe
      frameborder="0" width="100%"
      :src="project.link"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: ['project'],
  mounted() {
  // eslint-disable-next-line
    console.log('mounted')
  },
  destroyed() {
    console.log('destroy');
  }
}
</script>

<style scoped>
  .showcase {
    min-height: 400px;
  }
  .showcase iframe {
    height: 100vh;
  }
</style>
