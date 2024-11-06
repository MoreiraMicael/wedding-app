<template>
  <div class="landing-page">
    <!-- Hamburger Menu -->
    <div class="hamburger-menu" @click="toggleMenu">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>

    <!-- Menu Drawer -->
    <div v-if="menuOpen" class="menu">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>

    <!-- Main Content Section -->
    <div class="content">
      <h1>Welcome to Our Wedding</h1>
      <p>Celebrate with us on this special day</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
/* Global styles or within a specific component */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Full Screen Background Image */
.landing-page {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('https://picsum.photos/1920/1080');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  overflow: hidden; /* Disable scrolling */
}

/* Content Styling */
.content {
  text-align: center;
}

.content h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.content p {
  font-size: 1.2rem;
}

/* Hamburger Menu Styles */
.hamburger-menu {
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  z-index: 10;
}

.bar {
  width: 30px;
  height: 4px;
  background-color: white;
  margin: 5px 0;
  transition: 0.3s;
}

/* Menu Styles */
.menu {
  position: absolute;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  padding-top: 60px;
  transition: transform 0.3s ease-in-out;
}

.menu ul {
  list-style: none;
  padding: 0;
  text-align: center;
}

.menu li {
  padding: 10px;
}

.menu a {
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
}

.menu a:hover {
  color: #f39c12;
}

/* Media Queries for Larger Screens */
@media (min-width: 768px) {
  .content h1 {
    font-size: 3rem;
  }

  .content p {
    font-size: 1.5rem;
  }
}
</style>
