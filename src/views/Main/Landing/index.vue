<template>
  <div class="container">
    <div class="nav">
      <Nav v-sticky="position"/>
    </div>
    <div class="container">
      <header>
        <div class="jumbotron">
            <div class="jumbotron-content">
                <h4 class="display-3">Welcome,</h4>
                <h4>Food To fit your lifestyle & health</h4>
            </div>
        </div>
      </header>
      <div class="article">
        <div class="desc">
          <h4>Restaurant Food</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quo enim, corporis officia ad fugiat odit doloremque, maxime sunt, molestiae dolorem? Maiores, culpa eos assumenda dignissimos autem id voluptas ullam quibusdam expedita odio et numquam dolor incidunt exercitationem, sit totam voluptatem amet quo sapiente voluptatibus repellat! Et itaque ullam veniam, molestias facilis non esse ipsum fugiat recusandae! Voluptatum laboriosam velit accusantium, dicta quaerat aut soluta praesentium dolores, alias ipsa magnam magni sint tempore? Ea tenetur repudiandae sed quam? Laudantium deserunt fugiat quis blanditiis ullam, ea cupiditate voluptatibus corrupti iure fugit quae! Atque doloribus possimus corporis iure necessitatibus eligendi cum quam.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '../../../components/_base/Nav'
export default {
  name: 'Landing',
  components: {
    Nav
  },
  data () {
    return {
      position: 'fixed'
    }
  }
}
</script>

<style scoped>
html, body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
}
nav {
  width: 82%;
  height: 80px;
  background-color: #fff;
}
.title {
    font-weight: bold;
}
header {
    margin-top: 10px;
    height: 400px;
}
.jumbotron {
    font-family: 'Satisfy', sans-serif;
    height: 400px;
    padding-top: 50px;
    margin-top: 80px;
    background-image: url('../../../assets/background.jpg');
}
.jumbotron-content {
    text-align: left;
}
.article {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: max-content;
}
.desc {
    width: max-content;
    height: 450px;
    margin-bottom: 30px;
    padding: 30px;
}
.desc h4 {
    margin-top: 80px;
    text-align: center;
    font-weight: bold;
}
.desc p {
    margin-top: 30px;
    padding: 0 100px 0 100px ;
    text-align: center;
}
</style>
