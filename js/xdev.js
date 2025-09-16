document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const navContainer = document.querySelector(".nav-container");
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    const dropdownMenus = document.querySelectorAll(".dropdown-menu");

    // Toggle mobile menu
    menuBtn.addEventListener("click", function () {
        navContainer.classList.toggle("active");
        menuBtn.classList.toggle("open");
        closeAllDropdowns(); // Close dropdowns when opening/closing the menu
    });

    // Toggle dropdown menus
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener("click", function (event) {
            event.preventDefault();
            const dropdownMenu = this.nextElementSibling;

            // Close other dropdowns before opening the clicked one
            closeAllDropdowns(dropdownMenu);

            dropdownMenu.classList.toggle("open");
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".dropdown")) {
            closeAllDropdowns();
        }
    });

    // Close all dropdowns except the one being opened
    function closeAllDropdowns(except = null) {
        dropdownMenus.forEach(menu => {
            if (menu !== except) {
                menu.classList.remove("open");
            }
        });
    }
});



//slider..
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})


// Sticky header on scroll
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Toggle menu for mobile
function toggleMenu() {
    document.querySelector('nav').classList.toggle('active');
}

// Footer animation on scroll
window.addEventListener("scroll", () => {
    const footer = document.getElementById("footer");
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.body.offsetHeight;

    // If scrolled to the bottom, show the footer
    if (scrollPosition >= documentHeight - 10) {
        footer.style.bottom = "0"; // Footer rises when reaching bottom
    } else {
        footer.style.bottom = "-100px"; // Stays hidden otherwise
    }
});

/*morph*/
        document.addEventListener("DOMContentLoaded", function () {
            setTimeout(() => {
                document.querySelector(".container").classList.add("animate");
            }, 500);
        });
