<template>
    <div class="nav-container">
        <div class="nav">
            <div class="title">
                <h5>History</h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NavHistory'
}
</script>

<style scoped>
.nav-container {
    width: 69%;
    height: 90px;
}
.nav {
    width: 100%;
    margin-top: 20px;
}
.title {
    width: 97%;
    text-align: center;
}
.title h5 {
    font-size: x-large;
    font-weight: bold;
}
@media screen and (min-width: 200px) and (max-width: 960px) {
    .nav-container {
        width: 70%;
        height: 75px;
    }
    .title {
        width: 86%;
    }
    .title h5 {
        font-size: large;
        font-weight: bold;
    }
}
</style>
