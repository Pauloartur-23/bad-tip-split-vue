<template>
  <div class="header">

    <div class="title-content">

      <h1 class="title">
        DIVIDA <span class="detail">CONTA</span>
      </h1>

    </div>

    <div class="subHeader">

      <h2 class="subtitle">
        Divida a conta com seus amigos de forma fácil!
      </h2>

    </div>

  </div>
</template>

<style scoped>

.header{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.title-content {
  background: linear-gradient(145deg, #1d4cff, #0b30aa);
  color: #ffffff;
  padding: 18px 60px;
}

.title {
  margin: 0;
  font-size: 36px;
  font-weight: 800;
  letter-spacing: 1px;
}

.detail {
  background-color: #ffffff;
  color: #0b30aa;
  padding: 4px 8px;
  border-radius: 6px;
  font-weight: 600;
}

.subHeader {
  background-color: #f1f1f1;
  padding: 14px 60px;
}

.subtitle {
  margin: 0;
  font-size: 16px;
  color: #0b30aa;
  font-weight: 500;
}

@media (max-width: 600px) {

  .title-content {
    padding: 10px;
    text-align: center;
  }

  .title {
    font-size: 20px;
  }

  .detail {
    padding: 3px 6px;
  }

  .subHeader {
    padding: 8px 12px;
    text-align: center;
  }

  .subtitle {
    font-size: 12px;
  }

}

</style>