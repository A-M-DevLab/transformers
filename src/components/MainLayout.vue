<template>
  <div>
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
            <li><a href="#" class="custom-btn btn-5"><span>Home</span></a></li>

            <li class="dropdown">
              <a href="#" class="custom-btn btn-5"><span>How to Play</span></a>
              <ul class="dropdown-menu">
                <router-link to="/rules" class="custom-btn btn-5"><span>Rules</span></router-link>
                <li><a href="#">Keywords & FAQ</a></li>
                <li><a href="#">Ban List</a></li>
                <li><a href="#">Printing Cards</a></li>
                <li><a href="#">How to Play Online</a></li>
              </ul>
            </li>

            <li class="dropdown">
              <a href="#" class="custom-btn btn-5"><span>Cards</span></a>
              <ul class="dropdown-menu">
                <li><a href="#">All Cards</a></li>
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

            <li><a href="#" class="custom-btn btn-5"><span>Download</span></a></li>
            <li><a href="#" class="custom-btn btn-5"><span>News</span></a></li>
            <li><a href="#" class="custom-btn btn-5"><span>Login</span></a></li>
            <li><a href="#" class="custom-btn btn-5"><span>Sign-up</span></a></li>


          </ul>
        </nav>
      </div>
    </header>

    <!-- MAIN PAGE CONTENT -->
    <main>
      <slot />
    </main>

    <!-- FOOTER -->
    <footer>
      <div class="social-icons">
        <a href="#"><img src="/icons/Discord.png" width="25px" height="25px" alt="Discord" /></a>
        <a href="#"><img src="/icons/Facebook.png" width="25px" height="25px" alt="Facebook" /></a>
        <a href="#"><img src="/icons/FBGroup.png" width="25px" height="25px" alt="Facebook Group" /></a>
        <a href="#"><img src="/icons/Instagram.png" width="25px" height="25px" alt="Instagram" /></a>
        <a href="#"><img src="/icons/Threads.png" width="25px" height="25px" alt="Threads" /></a>
        <a href="#"><img src="/icons/Twitter.png" width="25px" height="25px" alt="Twitter" /></a>
        <a href="#"><img src="/icons/Bluesky.png" width="25px" height="25px" alt="Bluesky" /></a>
        <a href="#"><img src="/icons/YT.png" width="25px" height="25px" alt="YouTube" /></a>
        <a href="#"><img src="/icons/Medium.png" width="25px" height="25px" alt="Medium" /></a>
        <a href="#"><img src="/icons/Kofi.png" width="25px" height="25px" alt="Ko-fi" /></a>
      </div>

      <div class="copyright">
        All Rights Reserved © 2020 Transformers Trading Card Game
      </div>

      <div class="contact">
        <a href="mailto:support@transformers.com" class="btn-5">Support</a>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped src="../assets/css/styles.css"></style>
