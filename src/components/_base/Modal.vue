<template>
<!-- Modal -->
<div class="modal modal-container" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="addItemTitle">Add Item</h5>
            </div>
            <div class="modal-body">
                <div class="input-group box-input mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
                    </div>
                    <input type="text" v-model= "name" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
                </div>
                <div class="input-group upload-img mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Image</span>
                    </div>
                    <input type="file" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
                </div>
                <div class="input-group box-input mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Price</span>
                    </div>
                    <input type="text" v-model= "price" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
                </div>
                <div class="input-group box-input mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Category</span>
                        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Category</button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Drink</a>
                            <a class="dropdown-item" href="#">Cake</a>
                            <a class="dropdown-item" href="#">Juice</a>
                            <a class="dropdown-item" href="#">Food</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer modal-add">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="close">Cancel</button>
                <button type="button" class="btn btn-primary">Add</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Modal',
  data () {
    return {
      name: '',
      price: '',
      image: '',
      status: '',
      idCategory: ''
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.modal-container {
    display: block;
}
.input-group-prepend span {
    background-color: transparent;
    border: none;
    width: 120px;
}
.input-group-prepend button {
    background-color: white;
    border: 1px solid #CECECE;
    box-shadow: 0px 4px 5px #00000040;
}
.box-input input {
    border: 1px solid #CECECE;
    box-shadow: 0px 4px 5px #00000040;
}
.upload-img input {
    margin: 0;
    padding: 0;
    border: none;
}
.modal-add button:first-of-type {
    background: #f24f8a;
    width: 100px;
    border: none;
}
.modal-add button:last-of-type {
    background: #57CAD5;
    width: 100px;
    border: none;
}
</style>
