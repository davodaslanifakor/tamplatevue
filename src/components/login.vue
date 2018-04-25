<template>
    <section class="login">
        <div class="container">
         <div class="row">
            <div class="col-md-6 offset-3">
              <div class="wrapper-form">
                <div class="subject">
                  <h3>welcome</h3>
                </div>
                <div class="row" v-if="isUser">
                  <div class="col-lg-12  col-xs-12">
                    <div class="group-form">
                      <input type="text" :class="{active:form.emaile != ''}" v-model="form.emaile">
                      <span class="bar"></span>
                      <label>emaile</label>
                    </div>
                  </div>
                  <div class="col-lg-12  col-xs-12">
                    <div class="group-form">
                      <input type="password" :class="{active:form.password != ''}" v-model="form.password">
                      <span class="bar"></span>
                      <label>password</label>
                    </div>
                  </div>
                  <div class="col-md-2">
                        <button @click="login(form)" class="bttn-material-flat bttn-md bttn-primary margin-20">Login</button>
                  </div>
                  <div class="col-md-2">
                        <button @click="isUser = false" class="bttn-material-flat bttn-md bttn-royal margin-20">Register</button>
                  </div>
                </div>
                 <div class="row" v-else>
                  <div class="col-lg-12  col-xs-12">
                    <div class="group-form">
                      <input type="text" :class="{active:form.name != ''}" v-model="form.name">
                      <span class="bar"></span>
                      <label>name</label>
                    </div>
                  </div>
                  <div class="col-lg-12  col-xs-12">
                    <div class="group-form">
                      <input type="text" :class="{active:form.emaile != ''}" v-model="form.emaile">
                      <span class="bar"></span>
                      <label>emaile</label>
                    </div>
                  </div>
                  <div class="col-lg-12  col-xs-12">
                    <div class="group-form">
                      <input type="password" :class="{active:form.password != ''}" v-model="form.password">
                      <span class="bar"></span>
                      <label>password</label>
                    </div>
                  </div>
                  <div class="col-lg-12  col-xs-12">
                    <div class="group-form">
                      <input type="password" :class="{active:form.confirmPassword != ''}" v-model="form.confirmPassword">
                      <span class="bar"></span>
                      <label>confirmPassword</label>
                    </div>
                  </div>
                  	<div class="col-md-12">
                      <div class="group-form-checkbox">
                      <div class="label-form">
                        <label>sex</label>
                      </div>
                      <div class="md-radio inline">
                        <input id="0" type="radio" value="0" name="sex"  v-model="form.sex">
                        <label for="0">Male</label>
                      </div>
                      <div class="md-radio inline">
                        <input id="1" type="radio" value="1" name="sex" v-model="form.sex">
                        <label for="1">Famele</label>
                      </div>
                      </div>
                    </div>
                   <div class="col-md-3">
                        <button @click="register(form)" class="bttn-material-flat bttn-md bttn-royal margin-20">Register</button>
                  </div>
                  <div class="col-md-4">
                        <button @click="isUser = true" class="bttn-material-flat bttn-md bttn-primary margin-20">I'm User</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
    </section>
</template>

<script>
var vm;
export default {
  data() {
    return {
      isUser:true,
      form: {
        emaile: "davod@gmail.com",
        password: "123",
        confirmPassword:'',
        name:'',
        sex:''
      }
    };
  },
  mounted() {
    vm = this;
  },
  methods: {
    async login(data) {
    },
  async register(data) {
    },
  }
};
</script>

<style lang="less">
</style>