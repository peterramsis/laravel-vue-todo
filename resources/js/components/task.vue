<template>
   <b-container>
       <b-row>
             <section class="col-lg-12 d-flex justify-content-between flex-row task align-items-center mb-1" :class="{'bg-primary':todo.status}">
                 <p class="col-9">
                     {{ todo.task }}
                 </p>
                 <span @click="updateTodo(todo.id,todo.status)">
                     <i :class="{'fas fa-archive' : true, 'text-success' : todo.status}"></i>
                 </span>
                 <span @click="deleteTodo(todo.id)"><i class="fas fa-trash-alt text-danger"></i></span>
             </section>

       </b-row>
   </b-container>
</template>

<style lang="scss">
     .task{
         background-color: #e1e1e1;
     }
</style>

<script>
    export default {
        name: "task",
        props:['todo'],
        mounted() {

        },
        methods:{
            deleteTodo(id){
                axios.get('api/todos/delete/'+id).then((res)=>{
                    this.$emit("reload");
                    this.$notify({
                      title: 'Delete',
                      text: 'Task has been deleted',
                      type: 'success'
                 });
                })
            },
            updateTodo(id,status){

                axios.post('api/todos/update/',{
                    status: !status,
                    id: id
                }).then((res)=>{
                    this.$emit("reload");
                    this.$notify({
                      title: 'Update',
                      text: 'Task has been updated',
                      type: 'success'
                 });
                })
            }
        }

    }
</script>
