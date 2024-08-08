export function loadmenu() {
  const pages = ['home.html', 'about.html', 'service.html', 'gallery.html', 'contact.html'];
  const possiblePaths = [
      '',
      '../',
      '../../',
      '../../../',
      '../../../../',
  ];

  function findPage(pageName, linkId) {
      let found = false;

      possiblePaths.forEach(function(path) {
          if (!found) {
              const fullPath = path + pageName;
              fetch(fullPath, { method: 'HEAD' })
                  .then(function(response) {
                      if (response.ok) {
                          found = true;
                          document.getElementById(linkId).setAttribute('href', fullPath);
                      }
                  })
                  .catch(function(error) {
                      console.log('File not found at:', fullPath);
                  });
          }
      });
  }

  // Load the menu
  document.getElementById("menu").innerHTML = `
      <ul> 
          <li><a href="#" id="homeLink">Home</a></li>
          <li><a href="#" id="aboutLink">About</a></li>
          <li><a href="#" id="serviceLink">Services</a></li>
          <li><a href="#" id="galleryLink">Gallery</a></li>
          <li><a href="#" id="contactLink">Contact Us</a></li>
      </ul>
  `;

  // Load the footer
  document.getElementById("footer").innerHTML = `
      <footer>2024 My Website. All rights reserved.</footer>
  `;

  // After loading the menu, find the correct paths for each page
  findPage('home.html', 'homeLink');
  findPage('about.html', 'aboutLink');
  findPage('service.html', 'serviceLink');
  findPage('gallery.html', 'galleryLink');
  findPage('contact.html', 'contactLink');
}
