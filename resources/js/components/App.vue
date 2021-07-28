<template>
   <b-container>
       <b-row>
           <allTodos  @reloadData= "click" />
       </b-row>
   </b-container>
</template>

<script>

 import allTodos from './allTodos.vue';
    export default {
        name: "todos",
        mounted() {
            console.log('Component mounted. peter')
        },
        components:{
         allTodos
        },
        methods:{
            click(){
                alert("click");
            }
        }
    }
</script>
