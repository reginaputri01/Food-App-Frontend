<template>
    <div class="nav-container">
        <div class="nav">
            <div class="title">
                <h5>Food Items</h5>
            </div>
            <div class="search">
                <img src="../../assets/magnifying-glass.png" for="trigger" alt="search">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar'
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
    width: 92%;
    text-align: center;
}
.title h5 {
    font-size: x-large;
    font-weight: bold;
}
.search {
    width: auto;
}
.search img {
    width: 30px;
    height: 30px;
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
    .search img {
        width: 25px;
        height: 25px;
    }
}
</style>
