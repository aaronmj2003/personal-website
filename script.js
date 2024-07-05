document.addEventListener('DOMContentLoaded', () => {
    const expandableImages = document.querySelectorAll('.expandable');
    
    expandableImages.forEach(img => {
        img.addEventListener('click', () => {
            if (img.classList.contains('expanded')) {
                img.classList.remove('expanded');
            } else {
                // Remove the expanded class from all images before adding to the clicked one
                expandableImages.forEach(i => i.classList.remove('expanded'));
                img.classList.add('expanded');
            }
        });
    });
});