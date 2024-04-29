document.addEventListener('DOMContentLoaded', function() {
    const projectBoxes = document.querySelectorAll('.project-box');
  
    projectBoxes.forEach(function(box) {
      box.addEventListener('click', function() {
        const details = this.nextElementSibling;
        if (details.style.display === 'block') {
          details.style.display = 'none';
        } else {
          // Hide other project details
          document.querySelectorAll('.project-details').forEach(function(detail) {
            detail.style.display = 'none';
          });
          details.style.display = 'block';
        }
      });
    });
  });
  