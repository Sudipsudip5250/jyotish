export function loadmenu() {
    const pages = ['home', 'about', 'services', 'gallery', 'contact']; // names of the pages
    const baseDir = '../'; // Base directory to start from the current location
    const maxDepth = 6; // Adjust based on how deep your folders go

    function generatePossiblePaths(pageName) {
        let paths = [];
        const extensions = ['.html'];

        // Add paths for the page directory structure
        for (let i = 0; i <= maxDepth; i++) {
            const pathPrefix = baseDir.repeat(i);
            extensions.forEach(extension => {
                paths.push(`${pathPrefix}page/${pageName}/${pageName}${extension}`);
            });
        }

        return paths;
    }

    function findPage(pageName, linkId) {
        const possiblePaths = generatePossiblePaths(pageName);
        let found = false;

        possiblePaths.forEach(function(path) {
            if (!found) {
                fetch(path, { method: 'HEAD' })
                    .then(function(response) {
                        if (response.ok) {
                            found = true;
                            document.getElementById(linkId).setAttribute('href', path);
                        }
                    })
                    .catch(function(error) {
                        console.log('File not found at:', path);
                    });
            }
        });
    }

    // Load the menu with placeholder links
    document.getElementById("menu").innerHTML = `
        <ul> 
            <li><a href="#" id="homeLink">Home</a></li>
            <li><a href="#" id="aboutLink">About</a></li>
            <li><a href="#" id="servicesLink">Services</a></li>
            <li><a href="#" id="galleryLink">Gallery</a></li>
            <li><a href="#" id="contactLink">Contact Us</a></li>
        </ul>
    `;

    // After loading the menu, find the correct paths for each page
    pages.forEach(page => {
        const linkId = `${page}Link`; // Generates linkId 
        findPage(page, linkId);
    });

    // Load the footer
    document.getElementById("footer").innerHTML = `
        <footer>2024 My Website. All rights reserved.</footer>
    `;

}
