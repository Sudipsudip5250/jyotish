export function loadmenu() {
  document.getElementById("menu").innerHTML = `
    <ul> 
        <li><a href="../../home/home.html">Home</a></li>
        <li><a href="../../about/about.html">About</a></li>
        <li><a href="../../service/service.html">Services</a></li>
        <li><a href="../../gallery/gallery.html">Gallery</a></li>
        <li><a href="../../contact/contact.html">Contact Us</a></li>
    </ul>
    `;

  document.getElementById("footer").innerHTML = `
    <footer>2024 My Website. All rights reserved.</footer>
    `;
}
