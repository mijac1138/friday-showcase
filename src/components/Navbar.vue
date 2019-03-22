<template>
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
          <a
            href="https://github.com/mijac1138/friday-showcase"
            class="navbar-item"
            target="_blank"
          >
           <b-icon icon="git"></b-icon><span>repo</span>
          </a>
          <a
            class="navbar-item button is-light"
            @click="showModal = true"
          >
            Add project
          </a>
        </div>
      </div>
      <b-modal :active.sync="showModal" has-modal-card width="960">
        <form action="" @submit.prevent="onSubmitProject">
            <div class="modal-card">
              <header class="modal-card-head">
                  <p class="modal-card-title">Add friday project</p>
              </header>
              <section class="modal-card-body">
                <b-field label="Name">
                  <b-input
                    type="text"
                    v-model="form.name"
                    placeholder="Project name"
                    required>
                  </b-input>
                </b-field>

                <b-field label="About">
                  <b-input
                    type="text"
                    v-model="form.about"
                    placeholder="If webpage describe its functinality"
                    required>
                  </b-input>
                </b-field>

                <b-field label="Goal">
                  <b-input
                    type="text"
                    v-model="form.goal"
                    placeholder="What did you learn"
                    required>
                  </b-input>
                </b-field>

                <b-field label="Date">
                  <b-datepicker
                    placeholder="Project start date"
                    @input="form.date = getDate($event)"
                  >
                  </b-datepicker>
                </b-field>

                <b-field label="Link">
                  <b-input
                    type="url"
                    v-model="form.link"
                    placeholder="Url of the project"
                    required>
                  </b-input>
                </b-field>

              </section>
              <footer class="modal-card-foot">
                  <button class="button" type="button" @click="showModal = false">Close</button>
                  <button type="submit" class="button is-primary">Add</button>
              </footer>
            </div>
        </form>
      </b-modal>
    </nav>
</template>

<script>

export default {
  data() {
    return {
      showModal: false,
      form: {
        name: '',
        goal: '',
        about: '',
        date: this.getDate(new Date()),
        link: ''
      }
    }
  },
  methods: {
    onSubmitProject() {
      this.showModal = false
      this.$store.dispatch('addShowcase', this.form)
    },
    getDate(date) {
      const [weekday, month, day, year] = date.toDateString().split(' ')
      return [month, day, year].join(' ')
    }
  }
}
</script>
