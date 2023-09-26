<template>
<div>
<Header/>
    <h1>Hello {{name}},Welcome on Update Restaurant Page</h1>
    <form class="update">
       <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name"/>
        <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address"/>
        <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact"/>
        <button type="button" v-on:click="UpdateRestaurant">Add Restaurant</button>
    </form>
    </div>
</template>
<script>
import axios from 'axios'
import Header from './Header.vue'
export default{
    name:'UpdateRestaurant',
    components:{
        Header,
    },
    data(){
        return{
            restaurant:{
            name:'',
            address:'',
            contact:''
            }

        }
    },
    methods:{
       async UpdateRestaurant(){
            console.warn(this.restaurant);
            const result= await axios.put('http://localhost:3000/restaurants/'+this.$route.params.id ,{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact
            });
            if(result.status==200)
            {
            this.$router.push({name:'Home'});
            }

        }
    },
    async mounted(){
        let user = localStorage.getItem('user-info');
         this.name=JSON.parse(user).name;
        if(!user){
            this.$router.push({name:'SignUp'});
        }
        const result = await axios.get('http://localhost:3000/restaurants/'+this.$route.params.id)
        console.warn(this.$route.params.id)
        this.restaurant = result.data;

    }
}
</script>
