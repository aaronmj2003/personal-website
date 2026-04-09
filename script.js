// Dark mode — runs immediately to avoid flash of wrong theme
(function () {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', saved || (prefersDark ? 'dark' : 'light'));
})();

document.addEventListener('DOMContentLoaded', () => {
    // Dark mode toggle
    const toggle = document.getElementById('dark-mode-toggle');
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if (toggle) toggle.textContent = theme === 'dark' ? '☀' : '🌙';
    }
    // Sync button icon with current theme
    if (toggle) {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        toggle.textContent = current === 'dark' ? '☀' : '🌙';
        toggle.addEventListener('click', () => {
            const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(next);
        });
    }

    // Gallery lightbox
    const galleryLightbox = document.getElementById('gallery-lightbox');
    const galleryImg     = document.getElementById('gallery-lightbox-img');
    const galleryCaption = document.getElementById('gallery-lightbox-caption');
    const galleryClose   = document.getElementById('gallery-close');

    function openGalleryLightbox(img) {
        galleryImg.src = img.src;
        galleryImg.alt = img.alt;
        galleryCaption.textContent = img.nextElementSibling?.textContent.trim() || '';
        galleryLightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeGalleryLightbox() {
        galleryLightbox.style.display = 'none';
        document.body.style.overflow = '';
    }

    if (galleryLightbox) {
        document.querySelectorAll('.gallery-item img').forEach(img => {
            img.addEventListener('click', () => openGalleryLightbox(img));
        });
        galleryClose.addEventListener('click', closeGalleryLightbox);
        galleryLightbox.addEventListener('click', e => {
            if (e.target === galleryLightbox) closeGalleryLightbox();
        });
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') closeGalleryLightbox();
        });
    }

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