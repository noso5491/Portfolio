// navbar.js
// Create a <link> element for Google Fonts
var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap';

// Append the <link> element to the <head> of the document
document.head.appendChild(link);


document.write(`
<header class="navbar">
    <nav>
        <ul>
            <li><a href="welcome.html">Welcome</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="resume.html">Resume</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
</header>
`);