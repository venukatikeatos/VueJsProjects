<template>
<div>
<Header/>
    <h1>Hello {{name}},Welcome on Home Page</h1>
    <table border="1px">
        <tr class="tb-header">
            <td>Id</td>
            <td>Name</td>
            <td>Contact</td>
            <td>Address</td>
            <td>Actions</td>
        </tr>
        <tr v-for="item in restaurant" :key="item.id" class="data">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.contact}}</td>
            <td>{{item.address}}</td>
            <td class="a">
            <a><router-link :to="'/update/'+item.id">Update</router-link></a>
            <a><router-link :to="'/delete/'+item.id">Remove</router-link></a>
            </td>
        </tr>
    </table>
    </div>
</template>
<script>

import Header from './Header.vue'
import axios from 'axios'

export default{
    name:'HomePage',
    components:{
        Header,
    },
    data(){
        return{
            name:'',
            restaurant:[],
        }
    },
 async mounted(){
        let user = localStorage.getItem('user-info');
        this.name=JSON.parse(user).name;
        if(!user){
            this.$router.push({name:'SignUp'});
        }
        let result = await axios.get(" http://localhost:3000/restaurants");
        console.warn(result);
        this.restaurant=result.data;
    }
}
</script>
<style scoped>
td{
    width: 520px;
    height: 50px;
}

.tb-header{
    background-color: lightseagreen;
    color: black;
    font-family: Bold;
    font-size: 23px;
}

.data .a a{
   text-decoration: none;
   margin-inline: 5px;
}
</style>