const deepPath = document.getElementsByClassName("navbar")[0].classList.contains("deeppath");
const very = document.getElementsByClassName("navbar")[0].classList.contains("very");

document.getElementsByClassName("navbar")[0].innerHTML = `
      <a href="/" class="button">Home</a>
      <a href="/p" class="button">Proxy</a>
      <a href="/more" class="button">Games</a>
      <a href="/help" class="button">Help</a>
      <a href="/chatroom" class="button">Chatroom</a>
<a href="/ub" class="button">Unblocked Websites</a>
       <script src="/scripts/image.js"></script>
      <script src="/scripts/name.js"></script>
      
      `;

    