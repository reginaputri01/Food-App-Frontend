<template>
    <div class="side-container">
        <div class="sidebar">
            <div class="img-container">
                <img src="../../assets/menu.png" alt="menu" class="icon-menu mb-4">
            </div>
            <div class="img-container">
                <router-link to="/home">
                    <img src="../../assets/fork.png" alt="icon" class="icon">
                </router-link>
            </div>
            <div class="img-container">
                <router-link to="/history">
                    <img src="../../assets/clipboard.png" alt="icon" class="icon">
                </router-link>
            </div>
            <div class="img-container">
                <router-link to="/products">
                    <img src="../../assets/folder.png" alt="icon" class="icon">
                </router-link>
            </div>
            <div class="img-container">
                <i class="fa fa-sign-out"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
.side-container {
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
    width: 8%;
    height: 560px;
}
.sidebar {
    display: flex;
    flex-direction: column;
}
.img-container {
    text-align: center;
}
.icon-menu {
    margin-top: 20px;
    width: 40px;
    height: 40px;
}
.icon {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 40px;
    height: 40px;
}
.add {
    cursor: pointer;
}
@media screen and (min-width: 200px) and (max-width: 980px) {
    .side-container {
        width: 80px;
        height: 650px;
    }
    .icon-menu{
        margin: 0;
        padding: 4px;
        margin-top: 15px;
        margin-left: 5px;
    }
    .icon{
        margin: 0;
        padding: 4px;
        margin-bottom: 20px;
        margin-left: 5px;
    }
}
</style>
