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
            <form>
                <div class="mb-2">
                    <input type="text" class="form-control" placeholder="Name">
                </div>
                <div class="mb-2">
                    <input type="text" class="form-control" placeholder="Photo URL">
                </div>
                <div class="mb-2">
                    <input type="email" class="form-control" placeholder="Email">
                </div>
                <div class="mb-2">
                    <input type="number" class="form-control" placeholder="Mobile">
                </div>
                <div class="mb-2">
                    <input type="text" class="form-control" placeholder="Company">
                </div>
                <div class="mb-2">
                    <input type="text" class="form-control" placeholder="Title">
                </div>
                <div class="mb-2">
                   <select class="form-control">
                       <option value="">Select Group</option>
                   </select>
                </div>
                <div class="mb-2">
                    <input type="submit" class="btn btn-success" value="Create">
                </div>
            </form>
        </div>
        <div class="col-md-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkiIFjCOZ-mMeqxd2ryrneiHedE8G9S0AboA&usqp=CAU" alt="" class="contact-img">
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name:"AddContactManager",
}
</script>


<style >

</style>