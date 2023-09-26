<template>
<router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  Comments:{
  
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
<style>
body{
  padding: 0;
  margin: 0;
}
.sign-up .logo{
 width: 200px;
 
}
.sign-up .register input , .login input , .add input, .update input, .Delete input{
 width: 300px;
 height: 40px;
 padding: auto;
 margin-bottom: 30px;
 display: block;
 margin-right: auto;
 margin-left: auto;
 border: 1px solid skyblue;
}

.register button , .login button, .add button, .update button, .Delete button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer;
}
</style>