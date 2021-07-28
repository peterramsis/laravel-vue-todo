<template>
    <b-container>
          <notifications/>
            <b-form class="m-4" @submit.prevent = "addTodo">
                <b-row>
                    <b-form-input  placeholder="Add todo" class="col-lg-12" v-model="task"></b-form-input>
               </b-row>
            </b-form>
    </b-container>
</template>


<script>
export default {
    name: "addTodo",
    data(){
       return{
           task : ""
       }
    },
    methods:{
        addTodo(){
           axios.post("api/todo/add" , {
              task: this.task
           }).then((res)=>{

               this.$emit('reloadData');

                 this.$notify({
                      title: 'Add',
                      text: 'Task has been add',
                      type: 'success'
                 });
                 this.task  = "";
           });
        },
        click(){

             alert("click");
        }
    },
    created(){

    }
}
</script>
