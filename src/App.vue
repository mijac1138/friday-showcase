<template>
  <div id="app">
    <Navbar></Navbar>
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
                <template slot-scope="props">
                  <b-table-column v-for="(column, index) in columns"
                    :key="index"
                    :label="column.label">
                    <div v-if="column.field == 'link'">
                      <a :href="props.row[column.field]" target="_blank">Webpage</a>
                    </div>
                    <div v-else-if="column.field == 'delete'">
                      <button class="button field is-danger" @click="onDelete(props.row.id)">
                        <b-icon icon="close"></b-icon>
                      </button>
                    </div>
                    <span v-else>
                      {{ props.row[column.field] }}
                    </span>
                  </b-table-column>
                </template>
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
import Showcase from './components/Showcase.vue'
import Navbar from './components/Navbar.vue'

export default {
  components: { Showcase, Navbar },
  data() {
    return {
      columns: [
        { field: 'name', label: 'Project'},
        { field: 'about', label: 'About' },
        { field: 'goal', label: 'Goal' },
        { field: 'date', label: 'Date' },
        { field: 'link', label: 'Link' },
        { field: 'delete', label: 'Delete' },
      ]
    }
  },
  methods: {
    onDelete(id) {
      this.$store.dispatch('deleteShowcase', id)
    }
  },
  mounted() {
    this.$store.dispatch('getShowcases')
  },
  computed: {
    showcases() {
      return this.$store.state.showcases;
    }
  }
}
</script>
