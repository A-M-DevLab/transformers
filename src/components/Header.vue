<script setup lang="ts">

</script>

<template>
    <!-- HEADER -->
    <header>
      <div class="header-container">
        <!-- Logo -->
        <div class="logo">
          <img src="/img/Transformers Logo.png" alt="Transformers Logo" width="378px" />
        </div>

        <!-- Navigation -->
        <nav class="nav-links">
          <ul>
            <li><router-link to="/" class="custom-btn btn-5"><span>Home</span></router-link></li>

            <li class="dropdown">
              <a href="#" class="custom-btn btn-5"><span>How to Play</span></a>
              <ul class="dropdown-menu">
                <li><router-link to="/rules"><span>Rules</span></router-link></li>
                <li><router-link to="/keywords"><span>Keywords & FAQ</span></router-link></li>
                <li><router-link to="/ban-list"><span>Ban List</span></router-link></li>
                <li><router-link to="/print-cards"><span>Printing Cards</span></router-link></li>
                <li><a href="#">How to Play Online</a></li>
              </ul>
            </li>

            <li class="dropdown">
              <a href="#" class="custom-btn btn-5"><span>Cards</span></a>
              <ul class="dropdown-menu">
                <li><router-link to="/cards-all"><span>All Cards</span></router-link></li>
                <li><a href="#">Battle Cards</a></li>
                <li><a href="#">Character Cards</a></li>
                <li><a href="#">Strategem Cards</a></li>
                <li class="dropdown">
                  <a href="#">Wave</a>
                  <ul class="dropdown-menu">
                    <li><a href="#">Wave 1</a></li>
                    <li><a href="#">Wave 2: Rise of the Combiners</a></li>
                    <li><a href="#">Wave 3: Siege I</a></li>
                    <li><a href="#">Wave 4: Siege II</a></li>
                    <li><a href="#">Wave 5: Titan Masters Attack</a></li>
                    <li><a href="#">Wave 6: World|Strike</a></li>
                    <li><a href="#">Wave 7: Monster Menagerie</a></li>
                    <li><a href="#">Wave 8: Waste|Lands</a></li>
                    <li><a href="#">Wave 9: Coming Soon!</a></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li class="dropdown">
              <a href="#" class="custom-btn btn-5"><span>Decks</span></a>
              <ul class="dropdown-menu">
                <li><a href="#">All Decks</a></li>
                <li><a href="#">User Decks</a></li>
                <li><a href="#">Deck Builder</a></li>
              </ul>
            </li>

            <li><router-link to="/downloads" class="custom-btn btn-5"><span>Downloads</span></router-link></li>
            <li><router-link to="/news" class="custom-btn btn-5"><span>News</span></router-link></li>
            <li><router-link to="/enter" class="custom-btn btn-5"><span>Log In</span></router-link></li>
            <li><router-link to="/enter" class="custom-btn btn-5"><span>Sign Up</span></router-link></li>


          </ul>
        </nav>
      </div>
    </header>
</template>

<style scoped>

</style>
