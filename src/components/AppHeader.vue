<template>
    <div>
      <header></header>
    </div>
</template>

<script >
  export default {
    name: "AppHeader",
  }
</script>


<style>
header {
    background: #ffff;
    width: 100%;
    height: 50px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: flex-end;
  }
  /* nav {
    padding-right: 30px;
  } */
  nav ul {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 10px;
    padding: 0;
  }
  
  nav li {
    margin-left: 10px;
  }
  
  nav li:first-child {
    margin-left: 0;
  }
  
  nav a {
    color: #252757;
    text-decoration: none;
  }
  
  nav a:hover {
    text-decoration: none;
  }
  </style>
  