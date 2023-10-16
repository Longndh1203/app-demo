<template>
  <div id="login">
    <div class="wrapper">
      <p>mor_2314, 83r5^_</p>
      <form action="">
        <h1>Login</h1>
        <div class="input-box">
          <input
            type="text"
            placeholder="Username"
            required
            v-model="username"
          />
          <i class="bx bxs-user"></i>
        </div>
        <div class="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            v-model="password"
          />
          <i class="bx bxs-lock-alt"></i>
        </div>
        <div class="remember-forgot">
          <label for=""> <input type="checkbox" />Remember me </label>
          <label for=""><a href="#">Forgot password</a></label>
        </div>

        <button class="btn" type="button" @click="handleSubmit">Login</button>

        <div class="register-link">
          <p>Don't have an account ?</p>
          <a href="#">Register</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AppDemoLogin",

  data() {
    return {
      username: "",
      password: "",
      isShowPassword: false,
    };
  },

  mounted() {
    let token = localStorage.getItem("token");
    if (token) {
      this.$router.push("/listUser");
    }
  },

  async created() {},

  methods: {
    handleSubmit: async function () {
      if (!this.username || !this.password) {
        alert("user/password required!");
      }
      try {
        const res = await axios.post(`https://fakestoreapi.com/auth/login/`, {
          username: this.username,
          password: this.password,
        });
        if (res?.data?.token) {
          localStorage.setItem("token", res.data.token);
          console.log(res?.data?.token);
          alert("login sucess");
          this.$router.push("/listUser");
        } else {
          alert("Login failed");
        }
      } catch (error) {
        alert(error.response?.data);
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#login {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url(../assets/bg-login.jpg) no-repeat;
  background-size: cover;
  background-position: center;
}

.wrapper {
  width: 420px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  color: #fff;
  border-radius: 10px;
  padding: 30px 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.wrapper h1 {
  font-size: 36px;
  text-align: center;
}

.wrapper .input-box {
  position: relative;
  width: 100%;
  height: 50px;
  margin: 30px 0;
}

.input-box input {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  font-size: 16px;
  color: #fff;
  padding: 20px 45px 20px 20px;
}

.input-box input::placeholder {
  color: #fff;
}

.input-box i {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
}

.wrapper .remember-forgot {
  display: flex;
  justify-content: space-between;
  font-size: 14.5px;
  margin: -15px 0 15px;
}

.remember-forgot label input {
  accent-color: #fff;
  margin-right: 3px;
}

.remember-forgot a {
  color: #fff;
  text-decoration: none;
}

.remember-forgot a:hover {
  text-decoration: underline;
}

.wrapper .btn {
  width: 100%;
  height: 45px;
  background: none;
  border: none;
  outline: none;
  background: #fff;
  border-radius: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 16px;
  color: #333;
  font-weight: 600;
}

.wrapper .register-link {
  font-size: 14.5px;
  text-align: center;
  margin: 20px 0 15px;
  display: flex;
}

.register-link p a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}

.register-link p a:hover {
  text-decoration: underline;
}
</style>
