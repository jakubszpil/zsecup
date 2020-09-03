<template>
  <div>
    <Header />
    <main>
      <nuxt />
    </main>
    <footer></footer>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#__nuxt {
  width: 100%;
  background-color: $color--secondary;
  color: $color--text;
  font-family: 'Varela Round', sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
