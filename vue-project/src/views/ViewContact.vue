<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">
                    View Contact
                </p>
                <p class="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, rem. Veritatis
                    iusto quo repudiandae veniam provident excepturi. Ut, nostrum odit!</p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkiIFjCOZ-mMeqxd2ryrneiHedE8G9S0AboA&usqp=CAU"
                    alt="" class="contact-img-big">
            </div>
            <div class="col-md-6">
                <ul class="list-group">
                    <li class="list-group-item">Name : <span class="fw-bold">Name</span></li>
                    <li class="list-group-item">Email : <span class="fw-bold">Email</span></li>
                    <li class="list-group-item">Mobile : <span class="fw-bold">Mobile</span></li>
                    <li class="list-group-item">Company : <span class="fw-bold">Company</span></li>
                    <li class="list-group-item">Title : <span class="fw-bold">Title</span></li>
                    <li class="list-group-item">Group : <span class="fw-bold">Group</span></li>
                </ul>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col">
                <router-link to="/"  class="btn btn-success"><i class="fa fa-arrow-alt-circle-left"></i> Back</router-link>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "ViewContactManager"
}
</script>

<style scoped ></style>