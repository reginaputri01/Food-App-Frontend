<template>
    <div class="flex-row">
        <Sidebar />
        <div class="flex-column body">
            <div class="flex-row head">
                <NavHistory class="navbar"/>
            </div>
            <div class="data-container">
                <div class="order-container">
                    <div class="head-container">
                        <h6>Recent Order</h6>
                    </div>
                    <TableHistory />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavHistory from '../../../components/_base/NavHistory'
import Sidebar from '../../../components/_base/Sidebar'
import TableHistory from '../../../components/_base/TableHistory'
export default {
  name: 'History',
  components: {
    NavHistory,
    Sidebar,
    TableHistory
  }
}
</script>

<style scoped>
.flex-row {
  display: flex;
  flex-direction: row;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
.head {
    box-shadow: 3px 1px 5px rgba(0, 0, 0, 0.15);
}
.navbar {
    width: 100%;
}
.body {
    width: 100%;
}
.data-container {
    padding: 30px;
    height: 100%;
    justify-content: center;
    text-align: center;
    box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.15);
    background-color: rgba(190, 195, 202, 0.3);
}
.content-data {
    display: flex;
    flex-direction: row;
}
.data img {
    width: 330px;
    height: 190px;
}
.isi-card {
    position: absolute;
    width: 280px;
    text-align: left;
    margin-top: 35px;
    margin-left: 20px;
}
.order-container {
    margin-top: 20px;
    padding: 20px;
    width: 98%;
    height: auto;
    background-color: #fff;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}
.order-container h6 {
    text-align: left;
    font-weight: bold;
    font-size: 20px;
}
.head-container {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
}
.title-table {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #CECECE;
}
.title-table p {
    margin-right: 120px;
    margin-bottom: 5px;
    font-weight: bold;
    font-size: small;
}
.isi-table {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #CECECE;
}
.isi-table p {
    width: 140px;
    margin-bottom: 5px;
    margin-right: 40px;
    padding-left: 25px;
    color: #CECECE;
    font-size: small;
    text-align: left;
}
.column {
    background-color: chartreuse;
}
</style>
