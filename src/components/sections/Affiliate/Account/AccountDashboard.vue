<template>
  <section class="section">
    <div class="container">
      <div class="row">

        <div class="col-4">
          <div class="tile-style tile-padding">
            <div>
              <span style="font-weight: bold;"> Your Account </span>
            </div>

            <div class="font-padding">
              <table>
                <tbody>
                  <tr>
                    <td> E-mail: </td> <td> {{ this.email }} </td> 
                  </tr>
                  <tr>
                    <td> Level: </td> <td> 1 </td> 
                  </tr>
                  <tr>
                    <td> % Cut: </td> <td> 15.00% </td> 
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>

        <div class="col-8">
          <div class="tile-style tile-padding">
            <div class="row-12">
              <span style="font-weight: bold;"> Financials </span>
            </div>
            <div class="font-padding row-12">
              <span style="font-size: 15px;"> Our withdrawal system is currently under development. 
                If you've any queries, please don't hesitate to reach out to contact@fonzmusic.com.
              </span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AccountDashboard',
  components: {

  },
  data() {
    return {
      email: "",
      uid: ""
    }
  },

  methods: {
    getUserCredentials() {
      var user = firebase.auth().currentUser;
      if(user) {
        this.email = user.email;
        this.uid = user.uid;
      }
    }
  },

  mounted() {
    this.getUserCredentials();
  }
}
</script>

<style scoped>
  .tile-style {
    background-color: white;
    border: solid 1px;
    border-color: lightgrey;
  }

  .tile-padding {
    padding: 10px;
  }

  .font-padding {
    padding-top: 10px;
  }
</style>