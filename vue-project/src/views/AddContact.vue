<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">
                     Add Contact
                </p>
                <p class="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, rem. Veritatis iusto quo repudiandae veniam provident excepturi. Ut, nostrum odit!</p>
            </div>
        </div>
    </div>

    <!-- Form  -->
    <div class="container mt-3">
      <div class="row">
        <div class="col-md-4">
            <form @submit.prevent="CreatePerson()">
                <div class="mb-2">
                    <input required v-model="contact.name" type="text" class="form-control" placeholder="Name">
                </div>
                <div class="mb-2">
                    <input  v-model="contact.photo" type="text" class="form-control" placeholder="Photo URL">
                </div>
                <div class="mb-2">
                    <input required v-model="contact.email" type="email" class="form-control" placeholder="Email">
                </div>
                <div class="mb-2">
                    <input required v-model="contact.mobile" type="number" class="form-control" placeholder="Mobile">
                </div>
                <div class="mb-2">
                    <input  required v-model="contact.company" type="text" class="form-control" placeholder="Company">
                </div>
                <div class="mb-2">
                    <input  required v-model="contact.title" type="text" class="form-control" placeholder="Title">
                </div>
                <div class="mb-2">
                   <select v-model="contact.groupId" class="form-control" v-if="groups.length > 0" required>
                       <option value="">Select Group</option>
                       <option :value="group.id" v-for="group of groups" :key="group.id">{{ group.name }}</option>
                   </select>
                </div>
                <div class="mb-2">
                    <input type="submit" class="btn btn-success" value="Create">
                </div>
            </form>
        </div>
        <div class="col-md-4">
            <img :src="contact.photo" alt="" class="contact-img">
        </div>
      </div>
    </div>
</template>

<script>
import { ContactService } from '../services/ContactService';

export default {
    name:"AddContactManager",
    data : function (){
        return{
        contact: {
           name: '',
           photo: '',
           email: '',
           mobile: '',
           company : '',
           title: '',
           groupId:''
        },
        groups:[]
     }
    },
    created: async function (){
        try{
            //Burda grupları çektik option içerisinde buluncak olanlar.
          let response = await ContactService.getAllGroups();
          this.groups=response.data;
        }
        catch(eror){
           console.log(eror);
        }
    },
    methods:{
        CreatePerson : async function(){
            try{
                 let response= await ContactService.createContact(this.contact)
                 if(response){
                    // kayıt olma işlemi başarılı olursa anasayfaya yönlendirliyor demek oluyor
                    return this.$router.push('/');
                 }
                 else{
                    return this.$router.push('/contacts/add');
                 }
            }
            catch(eror){
              console.log(eror);
            }
        }
    }
}
</script>


<style >

</style>