<template>
   <b-container>
       <addTodo @reloadData="getTodos()" />
       <b-row>
                 <task v-for="todo in todos" :key="todo.id" :todo="todo" @reload="getTodos"/>
       </b-row>
   </b-container>
</template>

<script>
 import task from './task.vue';
    import addTodo from './addTodo.vue';
    export default {
        name: "allTodos",
        data(){
          return{
             todos : null
          }
        },
        mounted() {
            this.getTodos();
        },
        methods:{

            click(){
              alert("click");
            },
            getTodos(){
                axios.get("api/todos").then((res)=>{
                   this.todos = res.data.data;
                });
            }
        },
        components:{
            task,
               addTodo,
        }

    }
</script>
