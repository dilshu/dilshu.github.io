// Change Navbar Background on Scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.4)';
    } else {
        navbar.style.padding = '20px 0';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth Scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// index.html-ലെ എലമെന്റുകളെ സെലക്ട് ചെയ്യുന്നു
const menuBtn = document.getElementById('menuBtn');
const menuDialog = document.getElementById('menu-dialog');

// ഐക്കണിൽ ക്ലിക്ക് ചെയ്യുമ്പോൾ ഉള്ള പ്രവർത്തനം
menuBtn.onclick = function(event) {
    if (menuDialog.style.display === 'block') {
        menuDialog.style.display = 'none';
    } else {
        // menu.html ഫയൽ ലോഡ് ചെയ്യുന്നു
        fetch('menu.html')
            .then(response => {
                if (!response.ok) throw new Error('File not found');
                return response.text();
            })
            .then(data => {
                menuDialog.innerHTML = data;
                menuDialog.style.display = 'block';
            })
            .catch(err => console.error('Error loading menu:', err));
    }
    // മെനുവിന് പുറത്ത് ക്ലിക്ക് ചെയ്യുന്നതും ഇതും തമ്മിൽ കൂട്ടിമുട്ടാതിരിക്കാൻ
    event.stopPropagation();
};

// പേജിന് പുറത്ത് എവിടെ ക്ലിക്ക് ചെയ്താലും മെനു അടയ്ക്കാൻ
window.onclick = function(event) {
    if (!menuDialog.contains(event.target) && event.target !== menuBtn) {
        menuDialog.style.display = 'none';
    }
};