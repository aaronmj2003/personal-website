document.addEventListener('DOMContentLoaded', () => {
    const expandableImages = document.querySelectorAll('.expandable');
    
    expandableImages.forEach(img => {
        img.addEventListener('click', () => {
            if (img.classList.contains('expanded')) {
                img.classList.remove('expanded');
                img.nextElementSibling.style.opacity = '0';
            } else {
                // Remove the expanded class from all images before adding to the clicked one
                expandableImages.forEach(i => {
                    i.classList.remove('expanded');
                    i.nextElementSibling.style.opacity = '0';
                });
                img.classList.add('expanded');
                img.nextElementSibling.style.opacity = '1';
            }
        });
    });
});

