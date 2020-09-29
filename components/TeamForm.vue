<template>
  <form @submit="handleSubmit" @reset="handleReset" class="form">
    <FormField v-model="team.name" type="text" id="name" name="name" label="Nazwa drużyny" />
    <FormField v-model="team.shortcut" type="text" id="shortcut" name="shortcut" label="Skrót nazwy" />
    <div class="form-field">
      <label for="game" class="form-field__label">Gra</label>
      <select class="form-field__input" v-model="team.gameID" id="game" name="game">
        <option v-for="(game, key) in games" :key="key" :value="key">{{ game }}</option>
      </select>
    </div>
    <FormField v-model="team.captain.name" type="text" id="captainName" name="captainName" label="Imię kapitana" />
    <FormField v-model="team.captain.surname" type="text" id="captainSurname" name="captainSurname" label="Nazwisko kapitana" />
    <FormField v-model="team.captain.username" type="text" id="captainUsername" name="captainUsername" label="Username kapitana" />
    <FormField v-model="team.captain.email" pattern=".*@zse.krakow.pl" type="email" name="captainEmail" id="captainEmail" label="Email kapitana" />
    <FormField v-if="team.gameID === 0" v-model="team.captain.steamid" type="text" name="captainSteamid" id="captainSteamid" label="Steam id kapitana" />

    <div class="form-field">
      <ul class="form-list">
        <li v-for="player in team.players" :key="player.id" class="form-list-item">
          <p class="form-field__label form-list-item__label">Gracz {{ player.id + 1 }}</p>
          <div class="form-list-item__content">
            <FormInput type="text" :name="`player${player.id}Name`" v-model="player.name" :id="`player${player.id}Name`" className="form-field__input form-list-item__input" placeholder="Imię" />
            <FormInput type="text" :name="`player${player.id}Surname`" v-model="player.surname" :id="`player${player.id}Surname`" className="form-field__input form-list-item__input" placeholder="Nazwisko" />
            <FormInput type="text" :name="`player${player.id}Username`" v-model="player.username" :id="`player${player.id}Username`" className="form-field__input form-list-item__input" placeholder="Username" />
            <FormInput type="email" :name="`player${player.id}Email`" v-model="player.email" :id="`player${player.id}Email`" className="form-field__input form-list-item__input" placeholder="Email" pattern=".*@zse.krakow.pl" />
            <FormInput type="text" v-if="team.gameID === 0" v-model="player.steamid" :name="`player${player.id}Steamid`" required :id="`player${player.id}Steamid`" class="form-field__input form-list-item__input" placeholder="Steamid" />
          </div>
        </li>
        <li class="form-list-item">
          <p class="form-field__label form-list-item__label">Gracz rezerwowy</p>
          <div class="form-list-item__content">
            <FormInput type="text" v-model="team.standin.name" :name="`standinName`" required :id="`standinName`" class="form-field__input form-list-item__input" placeholder="Imię" />
            <FormInput type="text" v-model="team.standin.surname" :name="`standinSurname`" required :id="`standinSurname`" class="form-field__input form-list-item__input" placeholder="Nazwisko" />
            <FormInput type="text" v-model="team.standin.username" :name="`standinUsername`" required :id="`standinUsername`" class="form-field__input form-list-item__input" placeholder="Username" />
            <FormInput type="email" v-model="team.standin.email" :name="`standinEmail`" required :id="`standinEmail`" class="form-field__input form-list-item__input" placeholder="Email" pattern=".*@zse.krakow.pl" />
            <FormInput type="text" v-model="team.standin.steamid" v-if="team.gameID === 0" :name="`standinSteamid`" required :id="`standinSteamid`" class="form-field__input form-list-item__input" placeholder="Steamid" />
          </div>
        </li>
      </ul>
    </div>
    <button class="button form__button" name="reset" type="reset">Wyczyść</button>
    <button class="button form__button" name="addTeam" type="submit">Zapisz drużynę</button>

    <div v-if="status.response">
      <p class="notification" :class="[status.send ? 'notification--success' : 'notification--error']">
        {{ status.send ? 'Drużyna została pomyślnie dodana :)' : 'Ups, coś poszło nie tak :/ Spróbuj jeszcze raz' }}
      </p>
      <p v-if="status.error" class="notification notification--error">
        {{ status.error }}
      </p>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      games: Object.freeze(['Counter-strike: Global Offensive', 'League of Legends', 'Minecraft']),
      team: {
        name: '',
        shortcut: '',
        captain: {
          username: '',
          name: '',
          surname: '',
          email: '',
          steamid: '',
        },
        gameID: 0,
        players: [],
        standin: {
          username: '',
          name: '',
          surname: '',
          email: '',
          steamid: '',
        },
      },
      status: {},
    }
  },
  watch: {
    'team.gameID': {
      handler: function (val, oldval) {
        const arr = val === 2 ? [0, 1, 2] : [0, 1, 2, 3]
        const { length } = arr

        this.team.players = arr.map((item) => this.createPlayer(item))
      },
      deep: true,
      immediate: true,
    },
    status() {
      if (this.status.response && this.status.send) alert('Drużyna została pomyślnie dodana :)')
    },
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault()
      try {
        const { data } = await this.$axios.post(`/api/add_team.php`, { ...this.team }, { withCredentials: true })
        this.status = data
        if (data.response.status === 200)
          this.team = {
            name: '',
            shortcut: '',
            captain: {
              username: '',
              name: '',
              surname: '',
              email: '',
              steamid: '',
            },
            gameID: 0,
            players: [],
            standin: {
              username: '',
              name: '',
              surname: '',
              email: '',
              steamid: '',
            },
          }
        else throw Error(data.error)
      } catch (e) {
        this.status = {
          response: { status: 400 },
          send: false,
          error: e,
        }
      }
    },
    handleReset(e) {
      e.preventDefault()
      this.team = {
        name: '',
        shortcut: '',
        captain: {
          username: '',
          name: '',
          surname: '',
          email: '',
          steamid: '',
        },
        gameID: 0,
        players: [],
        standin: {
          username: '',
          name: '',
          surname: '',
          email: '',
          steamid: '',
        },
      }
      this.status = {}
    },
    createPlayer(id) {
      return {
        id: id,
        username: '',
        name: '',
        surname: '',
        email: '',
        steamid: '',
      }
    },
    getIndex(list, id) {
      return list.findIndex((e) => e.id == id)
    },
  },
}
</script>

<style lang="scss">
.form-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: $padding;

  &-item {
    width: 100%;
    margin-bottom: $padding / 3;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &__label {
      width: auto;
      text-align: left !important;
    }

    &__input {
      margin-bottom: 0 !important;
    }

    &:nth-last-child(1) {
      margin-bottom: 0;
    }

    &__content {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-gap: $padding / 2;
    }
  }
}
</style>
