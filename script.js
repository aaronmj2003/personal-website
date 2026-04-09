document.addEventListener('DOMContentLoaded', () => {
    // Gallery: expand image on click, collapse on second click
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

    // Tabs: switch active tab on click
    const tabButtons = document.querySelectorAll('.tablinks');
    const tabContents = document.querySelectorAll('.tabcontent');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabContents.forEach(tab => tab.classList.remove('active'));
            tabButtons.forEach(btn => btn.classList.remove('active'));
            document.getElementById(button.dataset.tab).classList.add('active');
            button.classList.add('active');
        });
    });

    // Activate the first tab on load
    if (tabButtons.length > 0) tabButtons[0].click();
});

const progressBar = document.getElementById('progress-bar');
if (progressBar) {
    window.addEventListener('scroll', function() {
        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        var scrolled = (window.scrollY / docHeight) * 100;
        progressBar.style.width = scrolled + "%";
    });
}