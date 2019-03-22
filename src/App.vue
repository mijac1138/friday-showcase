<template>
  <div id="app">
    <nav class="navbar is-spaced has-shadow" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item">
          <h2>Friday Showcase
            <b-icon
              style="margin-left: 10px; vertical-align: middle;"
              icon="sunglasses"
              size="is-medium">
            </b-icon>
          </h2>
        </div>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item button is-light">
            Add project
          </a>
        </div>
      </div>
    </nav>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <section>
              <b-table
                :data="showcases"
                :columns="columns"
                detailed
              >
                <template #detail="{ row }">
                  <Showcase :project="row"></Showcase>
                </template>
              </b-table>
            </section>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Showcase from "./components/Showcase.vue";
export default {
  components: { Showcase },
  data() {
    return {
      showcases: [
        {
          name: 'Course hunted!',
          description: "Webpage for scraping 'darkweb' tutorials site to watch videos add-free.",
          goal: 'Learn to use Typescript with Vue',
          link: 'https://course-hunted.firebaseapp.com/',
          date: '8 March 2019'
        },
        {
          name: 'Vue dynamic templates',
          description: 'See goal',
          goal: 'Server side async vue components without special webpack setup',
          link: '',
          date: '1 March 2019'
        }
      ],
      columns: [
        { field: 'name', label: 'Project'},
        { field: 'description', label: 'About' },
        { field: 'goal', label: 'Goal' },
        { field: 'date', label: 'Date' },
      ]
    }
  }
}
</script>
