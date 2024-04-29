document.addEventListener("DOMContentLoaded", function() {
    var footer = document.querySelector("footer");
    var year = new Date().getFullYear();
    footer.innerHTML = `<p>&copy; ${year} Noah Solano. All rights reserved.</p>`;
});