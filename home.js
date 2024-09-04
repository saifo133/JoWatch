document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom > 0
        );
    }

    // Function to add or remove the animation class based on viewport visibility
    function handleAnimation() {
        products.forEach(product => {
            if (isInViewport(product)) {
                product.classList.add('animate');
            } else {
                product.classList.remove('animate');
            }
        });
    }

    // Listen to scroll event
    window.addEventListener('scroll', handleAnimation);

    // Check on initial load
    handleAnimation();
});


document.addEventListener('DOMContentLoaded', () => {
    const aboutProducts = document.querySelectorAll('.about-product1, .about-product2');

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom > 0
        );
    }

    // Function to handle animations for elements in viewport
    function handleAnimations() {
        aboutProducts.forEach(product => {
            const about = product.querySelector('.about');
            const img = product.querySelector('.img');

            if (isInViewport(product)) {
                if (about && !about.classList.contains('animate-about')) {
                    about.classList.add('animate-about');
                }
                if (img && !img.classList.contains('animate-img')) {
                    img.classList.add('animate-img');
                }
            }
        });
    }

    // Listen to scroll event
    window.addEventListener('scroll', handleAnimations);

    // Check on initial load
    handleAnimations();
});

document.addEventListener('DOMContentLoaded', () => {
    const pros = document.querySelectorAll('.pro');

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom > 0
        );
    }

    // Function to handle animations for elements in viewport
    function handleAnimations() {
        pros.forEach(pro => {
            if (isInViewport(pro)) {
                pro.classList.add('animate-pro');
            }
        });
    }

    // Listen to scroll event
    window.addEventListener('scroll', handleAnimations);

    // Check on initial load
    handleAnimations();
});

document.addEventListener('DOMContentLoaded', () => {
    const ads = document.querySelectorAll('.ads > div');

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom > 0
        );
    }

    // Function to handle animations for elements in viewport
    function handleAnimations() {
        ads.forEach(ad => {
            if (isInViewport(ad)) {
                ad.classList.add('animate-ad');
            }
        });
    }

    // Listen to scroll event
    window.addEventListener('scroll', handleAnimations);

    // Check on initial load
    handleAnimations();
});

const images = [
    "product_image/image_product/product2.png",
    "product_image/image_product/product3.png",
    "product_image/image_product/product4.png",
    "product_image/image_product/product6.png",
    "product_image/image_product/product7.png",
    "product_image/image_product/product8.png",
    "product_image/image_product/product9.png",
    "product_image/image_product/product21.jpg",
    "product_image/image_product/product12.png",
    "product_image/image_product/product13.png",
    "product_image/image_product/product14.png",
    "product_image/image_product/product15.png",
    "product_image/image_product/product16.png",
    "product_image/image_product/product17.png",
    "product_image/image_product/product18.png",
    "product_image/image_product/product19.png",
    "product_image/image_product/product20.png"
];

const titles = [
   "classic WATCH",
    "sport WATCH",
    "classic WATCH",
    "DIAMOND WATCH",
    "classic GOLD WATCH",
    "classic WATCH",
    "classic WATCH",
    "CERAMIC WATCH",
    "classic WATCH",
    "LEATHER WATCH",
    "SPORTS WATCH",
    "classic WATCH",
    "classic WATCH",
    "LUXURY WATCH",
    "classic WATCH",
    "classic WATCH",
    "HYBRID WATCH",
    "CLASSIC WATCH"
];

const price = [
    "20 JOD",
    "3.5 JOD",
    "5 JOD",
    "15 JOD",
    "50 JOD",
    "10 JOD",
    "7 JOD",
    "35 JOD",
    "100 JOD",
    "32 JOD",
    "80 JOD",
    "7.5 JOD",
    "4 JOD",
    "2 JOD",
    "79 JOD",
    "100 JOD",
    "200 JOD",
    "55 JOD",
    "45 JOD",
    "20 JOD",
];

const originalClassic = document.getElementById('originalClassic');
const productContainer = document.getElementById('productContainer');

// Load saved content from local storage on page load
window.onload = function() {
    const savedContent = localStorage.getItem('duplicatedClassics');
    if (savedContent) {
        productContainer.innerHTML = savedContent;
    }
};

// Function to save the duplicated content to local storage
function saveToLocalStorage() {
    localStorage.setItem('duplicatedClassics', productContainer.innerHTML);
}

// Function to duplicate the classic div 20 times with different images
let new_imgae =  function() {
    for (let i = 0; i <24; i++) {
        const clonedClassic = originalClassic.cloneNode(true);
        const imgElement = clonedClassic.querySelector('img');
        const new_title = clonedClassic.querySelector('h4');
        const new_price = clonedClassic.querySelector('b');

        // Set a new image source
        imgElement.src = images[i % images.length];
        new_title.textContent = titles[i % titles.length];
        new_price.textContent = price[i % titles.length];

        productContainer.appendChild(clonedClassic);
    }
    // Save the duplicated content to local storage
    saveToLocalStorage();
};
new_imgae();

document.getElementById("icon_search").addEventListener("click", function() {
    var searchBox = document.getElementById("search-box");
    if (searchBox.classList.contains("search-box-hidden")) {
        searchBox.classList.remove("search-box-hidden");
        searchBox.classList.add("search-box-visible");
    } else {
        searchBox.classList.remove("search-box-visible");
        searchBox.classList.add("search-box-hidden");
    }
});

// search function
function search() {
    let searchBar = document.querySelector('.search-input').value.toUpperCase();
    let productList = document.querySelectorAll('.watch');

    productList.forEach(function(product) {
        let productNameElement = product.querySelector('h4');
        if (productNameElement) {
            let productName = productNameElement.textContent.toUpperCase();
            if (productName.indexOf(searchBar) >= 0) {
                product.style.display = 'flex';
            } else {
                product.style.display = 'none';
            }
        }
    });
}
