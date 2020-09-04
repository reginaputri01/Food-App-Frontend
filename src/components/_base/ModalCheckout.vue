<template>
    <div class="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="exampleModalLongTitle">Checkout</h4>
                    <h6 class="modal-title margin" id="exampleModalLongTitle">Receipt no: #010410919</h6>
                    <p>Cashier : Pevita Pearce</p>
                </div>
                <div class="modal-body">
                    <div class="flex-row">
                        <h6 class="modal-title text-left margin-name">Coffee Latte 1x</h6>
                        <p class="modal-title price-food">Rp. 15.000</p>
                    </div>
                    <div class="flex-row">
                        <h6 class="modal-title text-left margin-name">Black Forest 1x</h6>
                        <p class="modal-title price-food">Rp. 30.000</p>
                    </div>
                    <div class="flex-row">
                        <h6 class="modal-title text-left margin-name">Salmon Truffle Teriyaki 1x</h6>
                        <p class="modal-title price-food">Rp. 60.000</p>
                    </div>
                    <div class="flex-row">
                        <h6 class="modal-title text-left margin-name">Ppn 10%</h6>
                        <p class="modal-title total-ppn">Rp. 10.500</p>
                    </div>
                    <div class="flex-row">
                        <h6 class="modal-title total-price">Total Rp. 115.500</h6>
                    </div>
                    <div class="flex-row">
                        <h6 class="modal-title text-left margin-name">Payment: Cash</h6>
                    </div>
                </div>
                <div class="modal-footer flex-column">
                    <button class="btn-modal" type="button">Print</button>
                    <p>Or</p>
                    <button class="btn-modal" type="button">Send Email</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ModalCheckout'
}
</script>

<style>

</style>
