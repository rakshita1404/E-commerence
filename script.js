/*
    SCRIPT.JS
    This file handles the interactivity of our website.
*/

// 1. SELECT ELEMENTS
// We need to tell JavaScript which parts of the HTML we want to control.
// We use document.querySelector to find elements by their class name.

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinksContainer = document.querySelector('.nav-links-container');

// 2. ADD EVENT LISTENER
// We want something to happen when the user CLICKS the mobile menu button.

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        // 3. TOGGLE CLASS
        // We add or remove the 'active' class on the nav-links-container.
        // In CSS, the 'active' class changes 'left: -100%' to 'left: 0', revealing the menu.
        navLinksContainer.classList.toggle('active');

        // Optional: Change the icon from bars to an 'X' (close) icon
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinksContainer.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });
}

// 4. ADD SEARCH FOCUS EFFECT (Optional Enhancement)
// Just to console log when someone searches (for understanding)
const searchInput = document.querySelector('.search-input');
if (searchInput) {
    searchInput.addEventListener('focus', () => {
        console.log("User is typing in search...");
    });
}

// ------------------------------------------------------------------
// PRODUCT LIST DATA & RENDERING
// ------------------------------------------------------------------

// 1. DATA ARRAY
// In a real app, this data would come from a server (API/Database).
// We added a 'category' property to help filter them later.
const products = [
    {
        id: 1,
        brand: 'Nike',
        name: 'React Infinity Run Flyknit',
        price: '₹12,499',
        image: 'images/product-shoes.png',
        rating: 5,
        category: 'Sports' // Added Category
    },
    {
        id: 2,
        brand: 'Michael Kors',
        name: 'Premium Leather Handbag',
        price: '₹24,999',
        image: 'images/product-handbag.png',
        rating: 4.5,
        category: 'Fashion' // Added Category
    },
    {
        id: 3,
        brand: 'FitBit',
        name: 'Advanced Fitness Tracker',
        price: '₹8,999',
        image: 'images/product-watch.png',
        rating: 4.8,
        category: 'Electronics' // Added Category
    },
    {
        id: 4,
        brand: 'Sony',
        name: 'True Wireless Earbuds',
        price: '₹14,990',
        image: 'images/product-wireless.png',
        rating: 4.7,
        category: 'Electronics' // Added Category
    },

    /* 
       -----------------------------------------------------------------------
       [YOUR TURN] PASTE NEW PRODUCTS BELOW THIS LINE
       Make sure the 'category' matches the names in your Dropdown Menu:
       'Electronics', 'Fashion', 'Beauty', 'Home & Living', 'Sports'
       -----------------------------------------------------------------------
    */

    {
        id: 5,
        brand: 'Apple',
        name: 'AirPods Pro',
        price: '₹5,990',
        image: 'images/product-pods.png',
        rating: 4.6,
        category: 'Electronics'
    },

    {
        id: 6,
        brand: 'Apple',
        name: 'iPad Air',
        price: '₹25,999',
        image: 'images/product-ipad.png',
        rating: 4.6,
        category: 'Electronics'
    },

    {
        id: 7,
        brand: 'Apple',
        name: 'iPhone 15 Pro',
        price: '₹1,29,999',
        image: 'images/product-iphone.png',
        rating: 4.8,
        category: 'Electronics'
    },

    {
        id: 8,
        brand: 'sony',
        name: 'Anke Nano Charger',
        price: '₹590',
        image: 'images/product-charger.png',
        rating: 3.5,
        category: 'Electronics'
    },

    {
        id: 9,
        brand: 'sony',
        name: ' JBL Flip 6',
        price: '₹7,990',
        image: 'images/product-jbl.png',
        rating: 4.1,
        category: 'Electronics'
    },

    {
        id: 10,
        brand: 'Diesel',
        name: ' Black Leather Jacket',
        price: '₹49,990',
        image: 'images/product-jacket.png',
        rating: 4.1,
        category: 'Fashion'
    },

    {
        id: 11,
        brand: 'Zara',
        name: ' Yoga Pants',
        price: '₹459',
        image: 'images/product-pants.png',
        rating: 3.8,
        category: 'Fashion'
    },

    {
        id: 12,
        brand: 'Woodland',
        name: ' High-Top Men\'s Boots',
        price: '₹2,683',
        image: 'images/product-boots.png',
        rating: 4.3,
        category: 'Fashion'
    },

    {
        id: 13,
        brand: 'Pure Home',
        name: ' Home Centre Alpine Buddha and Lotus',
        price: '₹2,399',
        image: 'images/product-buddha.png',
        rating: 4.3,
        category: 'Home & Living'
    },

    {
        id: 14,
        brand: 'Home Centre',
        name: ' Amara Flora Light Candle Holder',
        price: '₹655',
        image: 'images/product-candle.png',
        rating: 4.1,
        category: 'Home & Living'
    },

    {
        id: 15,
        brand: 'Home Centre',
        name: 'Home Decor Elephant Family',
        price: '₹939',
        image: 'images/product-decor.png',
        rating: 4.7,
        category: 'Home & Living'
    },

    {
        id: 16,
        brand: 'Home Centre',
        name: ' Home Centre Helios 3-Seater Sofa',
        price: '₹24,999',
        image: 'images/product-sofa.png',
        rating: 4.0,
        category: 'Home & Living'
    },

    {
        id: 17,
        brand: 'Nykaa',
        name: ' Complete Makeup Kit',
        price: '₹3,449',
        image: 'images/product-makeup.png',
        rating: 4.8,
        category: 'Beauty'
    },

    {
        id: 18,
        brand: 'Lakme',
        name: ' VITAMIN C 10% + FERULIC ACID',
        price: '₹448',
        image: 'images/product-c.png',
        rating: 4.6,
        category: 'Beauty'
    },

    {
        id: 19,
        brand: 'Purpile',
        name: ' Dot & Key Barrier Repair Moisturizer',
        price: '₹336',
        image: 'images/product-moisture.png',
        rating: 4.6,
        category: 'Beauty'
    },

    {
        id: 20,
        brand: 'Nivia',
        name: ' Nivia Storm Football',
        price: '₹550',
        image: 'images/product-football.png',
        rating: 5.0,
        category: 'Sports'
    },

    {
        id: 21,
        brand: 'DOMYOS',
        name: ' Ceoss-Training Speed Skipping Rope',
        price: '₹1,009',
        image: 'images/product-rope.png',
        rating: 4.4,
        category: 'Sports'
    },

    {
        id: 22,
        brand: 'PUMA',
        name: ' NITRO 4 Men High Cushion Running Shoe',
        price: '₹11,999',
        image: 'images/product-puma.png',
        rating: 4.7,
        category: 'Sports'
    },

    {
        id: 23,
        brand: 'HYUE',
        name: ' HYUE VelvetteKiss Featherlight Lipstick',
        price: '₹1,065',
        image: 'images/product-lipstick.png',
        rating: 4.4,
        category: 'Beauty'
    },

    {
        id: 24,
        brand: 'Home Space',
        name: ' 5 XI Plastic Modular Drawer System For Home',
        price: '₹799',
        image: 'images/product-drawer.png',
        rating: 4.5,
        category: 'Home & Living'
    },

    {
        id: 25,
        brand: 'sony',
        name: 'GoPro Max 360 Action Camera',
        price: '₹25,999',
        image: 'images/product-gopro.png',
        rating: 4.7,
        category: 'Electronics'
    },

    {
        id: 26,
        brand: 'Home Space',
        name: 'Home Centre Spark Reactive Soap Dispenser',
        price: '₹655',
        image: 'images/product-soap.png',
        rating: 4.0,
        category: 'Home & Living'
    },

    {
        id: 27,
        brand: 'sony',
        name: 'Stylish Analog Wall Clock with Latest Design',
        price: '₹658',
        image: 'images/product-clock.png',
        rating: 3.7,
        category: 'Home & Living'
    },

    {
        id: 28,
        brand: 'Lakme',
        name: 'Lakme 9 to 5Perfectly Smooth Cream Care',
        price: '₹115',
        image: 'images/product-cream.png',
        rating: 3.7,
        category: 'Beauty'
    },

    {
        id: 29,
        brand: 'Home Space',
        name: 'Kitchen Knife Set with Wooden Handle',
        price: '₹379',
        image: 'images/product-knife.png',
        rating: 4.0,
        category: 'Home & Living'
    },

    {
        id: 30,
        brand: 'Trends',
        name: 'Klosia Women\'s Embroidery Solid Anarkali Kurta',
        price: '₹799',
        image: 'images/product-dress.png',
        rating: 4.5,
        category: 'Fashion'
    },

    {
        id: 31,
        brand: 'Trends',
        name: 'H&M Men Black Relaxed Fit Sweatshirt',
        price: '₹799',
        image: 'images/product-shirt.png',
        rating: 4.6,
        category: 'Fashion'
    },

    {
        id: 32,
        brand: 'PUMA',
        name: 'Puma Sportswear Cap',
        price: '₹519',
        image: 'images/product-cap.png',
        rating: 4.5,
        category: 'Sports'
    },

    {
        id: 33,
        brand: 'PUMA',
        name: 'Puma Unisex Quarter Socks',
        price: '₹649',
        image: 'images/product-socks.png',
        rating: 5.0,
        category: 'Sports'
    },

    {
        id: 34,
        brand: 'TIRTIR',
        name: 'TIRTIR Mask Fit Red Mini Cushion',
        price: '₹1,020',
        image: 'images/product-cushion.png',
        rating: 5.0,
        category: 'Beauty'
    },

    {
        id: 35,
        brand: 'LUX',
        name: 'Lux Essence of Himalayas Lavender & Vitamin C Bodywash',
        price: '₹180',
        image: 'images/product-bwash.png',
        rating: 4.0,
        category: 'Beauty'
    },

    {
        id: 36,
        brand: 'NIVEA',
        name: 'NIVEA Original Care 4.8g Lip Balm in Moisture',
        price: '₹149',
        image: 'images/product-lip.png',
        rating: 4.0,
        category: 'Beauty'
    },

    {
        id: 37,
        brand: 'Sporty',
        name: 'ATHLISIS Women Training or Gym Sporty Jacket',
        price: '₹999',
        image: 'images/product-sporty.png',
        rating: 4.2,
        category: 'Sports'
    },

    {
        id: 38,
        brand: 'Adidas',
        name: 'Adidas Originals Men\'s Stripes Hooded Sweatshirt',
        price: '₹3,959',
        image: 'images/product-hood.png',
        rating: 4.0,
        category: 'Sports'
    },

    {
        id: 39,
        brand: 'AJIO',
        name: 'FIG Women Ribbed Fit Sweatshirt For Women',
        price: '₹3,959',
        image: 'images/product-fit.png',
        rating: 4.7,
        category: 'Fashion'
    },

    {
        id: 40,
        brand: 'MAX',
        name: 'SHEETAL Associates Fit & Flare Dress',
        price: '₹449',
        image: 'images/product-wdress.png',
        rating: 4.7,
        category: 'Fashion'
    },



];

// 2. RENDER FUNCTION
// Updated to accept a 'category' filter. Default is 'all' (shows everything).

function renderProducts(category = 'all') {
    const productGrid = document.getElementById('productGrid');

    if (!productGrid) return;

    // Clear existing content so we don't duplicate items
    productGrid.innerHTML = '';

    // Filter the array based on the category passed
    let filteredProducts = products; // Default to all

    if (category === 'trending') {
        // Special case for Initial Load: Random 10
        filteredProducts = products.slice().sort(() => 0.5 - Math.random()).slice(0, 10);
    } else if (category !== 'all' && category !== 'All') {
        // Normal Category Filter
        filteredProducts = products.filter(product => product.category === category);
    }
    // If 'all' or 'All', we leave filteredProducts as is (showing everything)

    // Check if we found any products
    if (filteredProducts.length === 0) {
        productGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">No products found.</p>`;
        return;
    }

    // Loop through the FILTERED products
    filteredProducts.forEach(product => {
        const cardHTML = `
            <article class="product-card" data-id="${product.id}">
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}">
                    <button class="wishlist-btn"><i class="fa-regular fa-heart"></i></button>
                </div>
                <div class="product-details">
                    <span class="product-brand">${product.brand}</span>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-rating">
                        ${generateStars(product.rating)} <span>(${Math.floor(Math.random() * 200) + 50})</span>
                    </div>
                    <div class="product-price-row">
                        <span class="price">${product.price}</span>
                        <button class="add-cart-btn">Add +</button>
                    </div>
                </div>
            </article>
        `;
        productGrid.innerHTML += cardHTML;
    });
}

// Helper to create star icons
function generateStars(rating) {
    let starsHTML = '';
    // Full stars
    for (let i = 1; i <= Math.floor(rating); i++) {
        starsHTML += '<i class="fa-solid fa-star"></i> ';
    }
    // Half star if needed
    if (rating % 1 !== 0) {
        starsHTML += '<i class="fa-solid fa-star-half-stroke"></i> ';
    }
    return starsHTML;
}

// 3. CATEGORY CLICK LISTENERS
// This code finds all links in the dropdown and adds clicks to them.

document.querySelectorAll('.dropdown-item').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Stop page from jumping to top

        // Get the text inside the link (e.g., "Electronics")
        const selectedCategory = e.target.innerText;

        console.log("User selected:", selectedCategory); // For debugging

        // Update the Section Title to show what user selected
        const title = document.querySelector('.section-title');
        // If All, show 'All Products', else 'Trending Now' or Category Name
        if (title) title.innerText = selectedCategory;

        // NEW: Update Dropdown Trigger Text to show selected category
        const dropdownTrigger = document.querySelector('.dropdown-trigger');
        if (dropdownTrigger) {
            // We use innerHTML to keep the arrow icon
            dropdownTrigger.innerHTML = `${selectedCategory} <i class="fa-solid fa-chevron-down"></i>`;
        }

        // Re-render products with the new filter
        renderProducts(selectedCategory);

        // NEW: Scroll smoothly to the product section
        const productSection = document.querySelector('.product-section');
        if (productSection) {
            productSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 4. INITIALIZE
// Show 10 random products when page loads (Trending)
renderProducts('trending');


// ------------------------------------------------------------------
// SHOPPING CART LOGIC
// ------------------------------------------------------------------

// 1. SELECT DOM ELEMENTS
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartTotalElement = document.getElementById('cartTotal');
const cartBadge = document.querySelector('.cart-badge');

// Note: The Open Cart button is in the navbar. We need to select it.
// In index.html, it's the <li> with class 'action-item' containing 'Cart'.
// Let's ensure we can access it. Better to add a class or ID to that link in HTML.
// But we can select it via the structure if needed, or by adding a click listener to the whole cart action.
// For robustness, let's grab it by the icon class or nearby text.
const openCartBtn = document.querySelector('.fa-cart-shopping').closest('a');


// 2. STATE MANAGEMENT
let cart = []; // Array to store cart items

// 3. EVENT LISTENERS

// Open Cart
if (openCartBtn) {
    openCartBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent link navigation
        openCart();
    });
}

// Close Cart
if (closeCartBtn) {
    closeCartBtn.addEventListener('click', closeCart);
}
if (cartOverlay) {
    cartOverlay.addEventListener('click', closeCart);
}

// Add to Cart (Event Delegation)
// Since product buttons are dynamic, we listen on the grid container or document.
document.addEventListener('click', (e) => {
    // Check if clicked element is "Add +" button
    if (e.target.classList.contains('add-cart-btn')) {
        // Find the product ID from the clicked card
        // Easy way: We can add data-id to the button during render, OR infer from context.
        // Let's parse the product name for now (simple approach) or redo render to include IDs.

        // Let's improve the render function slightly to add data-id to the button.
        // BUT, since we can't edit the previous block easily without replacing, let's look at the parent card.
        const card = e.target.closest('.product-card');
        const productName = card.querySelector('.product-name').innerText;

        // Find product in our data array
        const product = products.find(p => p.name === productName);

        if (product) {
            addToCart(product);
        }
    }
});

// Remove from Cart (Event Delegation)
if (cartItemsContainer) {
    cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-btn')) {
            const index = e.target.getAttribute('data-index');
            removeFromCart(index);
        }
    });
}

// 4. FUNCTIONS

function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
}

function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
}

function addToCart(product) {
    // Add product object to cart array
    cart.push(product);

    // Update UI
    updateCartUI();
    openCart(); // Automatically open cart to show confirmation
}

function removeFromCart(index) {
    // Remove item at specific index
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    // A. Update Badge Count
    if (cartBadge) {
        cartBadge.innerText = cart.length;
    }

    // B. Render Cart Items
    cartItemsContainer.innerHTML = ''; // Clear current

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Your cart is empty</div>';
        // FIX: Reset total to 0 when empty
        cartTotalElement.innerText = '₹0';
    } else {
        let total = 0;

        cart.forEach((item, index) => {
            // Parse price string "₹12,499" to number 12499 for math
            const priceNum = parseInt(item.price.replace(/[^\d]/g, ''));
            total += priceNum;

            const cartItemHTML = `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="item-details">
                        <span class="item-name">${item.name}</span>
                        <span class="item-price">${item.price}</span>
                        <button class="remove-btn" data-index="${index}">Remove</button>
                    </div>
                </div>
            `;
            cartItemsContainer.innerHTML += cartItemHTML;
        });

        // C. Update Total Price
        // Format back to currency "₹12,499"
        cartTotalElement.innerText = '₹' + total.toLocaleString('en-IN');
    }
}

// ------------------------------------------------------------------
// SCROLL TO TOP BUTTON LOGIC
// ------------------------------------------------------------------

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

if (scrollToTopBtn) {
    // 1. Show/Hide button on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    // 2. Scroll to top on click
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ------------------------------------------------------------------
// PHASE 2: PRODUCT DETAILS VIEW LOGIC (SPA)
// ------------------------------------------------------------------

// 1. SELECT ELEMENTS
const homeView = document.getElementById('homeView');
const productDetailsView = document.getElementById('productDetailsView');
const backToHomeBtn = document.getElementById('backToHomeBtn');

// Details Elements to Populate
const detailImage = document.getElementById('detailImage');
const detailBrand = document.getElementById('detailBrand');
const detailName = document.getElementById('detailName');
const detailRating = document.getElementById('detailRating');
const detailPrice = document.getElementById('detailPrice');
const detailAddBtn = document.getElementById('detailAddBtn');

let currentProduct = null; // Store currently viewed product

// 2. FUNCTIONS

function showProductDetails(product) {
    currentProduct = product;

    // A. Populate Data
    detailImage.src = product.image;
    detailBrand.innerText = product.brand;
    detailName.innerText = product.name;
    detailPrice.innerText = product.price;
    detailRating.innerHTML = generateStars(product.rating);

    // B. Switch View
    homeView.style.display = 'none';
    productDetailsView.style.display = 'block';
    if (typeof checkoutView !== 'undefined') checkoutView.style.display = 'none';

    // C. Scroll to top
    window.scrollTo(0, 0);
}

function showHome() {
    productDetailsView.style.display = 'none';
    if (typeof checkoutView !== 'undefined') checkoutView.style.display = 'none';
    homeView.style.display = 'block';
    currentProduct = null;
}

// 3. EVENT LISTENERS

// Back Button
if (backToHomeBtn) {
    backToHomeBtn.addEventListener('click', showHome);
}

// Global Listener for Clicking Products (Event Delegation)
// We already have a click listener for 'add-cart-btn', let's expand it.
// We'll add a separate one for clarity to avoid conflict with existing cart logic.

document.addEventListener('click', (e) => {
    // Check if user clicked a product card (but NOT the add-cart button or wishlist)
    const card = e.target.closest('.product-card');

    // If clicked inside a card AND NOT on a button
    if (card && !e.target.closest('button')) {
        const productId = parseInt(card.getAttribute('data-id'));
        const product = products.find(p => p.id === productId);

        if (product) {
            showProductDetails(product);
        }
    }
});

// Add to Cart from Details Page
if (detailAddBtn) {
    detailAddBtn.addEventListener('click', () => {
        if (currentProduct) {
            addToCart(currentProduct);
            // Optional: Provide feedback like "Added!" text change temporarily
            const originalText = detailAddBtn.innerText;
            detailAddBtn.innerText = "Added to Cart ✓";
            detailAddBtn.style.backgroundColor = "#28a745"; // Green

            setTimeout(() => {
                detailAddBtn.innerText = originalText;
                detailAddBtn.style.backgroundColor = "";
            }, 2000);
        }
    });
}

// ------------------------------------------------------------------
// USER LOGIC & WISHLIST
// ------------------------------------------------------------------

let wishlist = []; // Store wishlist items

// 1. WISHLIST / MY LIST
const navWishlistLink = document.getElementById('navWishlistLink');

if (navWishlistLink) {
    navWishlistLink.addEventListener('click', (e) => {
        e.preventDefault();

        if (wishlist.length === 0) {
            alert("Your Wishlist is currently empty!");
        } else {
            // Simple alert visualization for now
            let msg = "YOUR WISHLIST:\n\n";
            wishlist.forEach(item => {
                msg += `- ${item.name} (${item.price})\n`;
            });
            alert(msg);
        }
    });
}

// Global Listener for Heart Icons on Cards
document.addEventListener('click', (e) => {
    // Check for wishlist button (in card or details)
    const wishBtn = e.target.closest('.wishlist-btn') || e.target.closest('.wishlist-btn-large') || e.target.closest('.btn-favorite');

    if (wishBtn) {
        e.preventDefault();
        const icon = wishBtn.querySelector('i');

        // Find product ID
        let product;

        // A. If specific details view
        if (typeof currentProduct !== 'undefined' && currentProduct && wishBtn.id === 'detailWishBtn') {
            product = currentProduct;
        }
        // B. If inside a card
        else {
            const card = wishBtn.closest('.product-card');
            if (card) {
                const id = parseInt(card.getAttribute('data-id'));
                product = products.find(p => p.id === id);
            } else if (currentProduct) {
                // Fallback if clicked in details view buttons which might not supply ID directly
                product = currentProduct;
            }
        }

        if (!product) return;

        // Toggle Logic
        if (icon.classList.contains('fa-regular')) {
            // ADD TO WISHLIST
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid'); // Filled heart
            icon.style.color = '#ff4757'; // Red

            // Add if not exists
            if (!wishlist.find(p => p.id === product.id)) {
                wishlist.push(product);
                console.log("Added to wishlist:", product.name);
            }

        } else {
            // REMOVE FROM WISHLIST
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular'); // Outline heart
            icon.style.color = ''; // Reset color

            // Remove from array
            wishlist = wishlist.filter(p => p.id !== product.id);
            console.log("Removed from wishlist:", product.name);
        }
    }
});

// 2. USER / LOGIN LOGIC
const navLoginBtn = document.getElementById('navLoginBtn');

if (navLoginBtn) {
    navLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Simple prompt to simulate login for now
        const email = prompt("Enter your email to login:");
        if (email) {
            alert(`Welcome back, ${email}!`);
            navLoginBtn.innerText = "Logout";
        }
    });
}

// ------------------------------------------------------------------
// PHASE 3: CHECKOUT FLOW LOGIC
// ------------------------------------------------------------------

// 1. SELECT ELEMENTS
const checkoutView = document.getElementById('checkoutView');
const checkoutBtn = document.querySelector('.checkout-btn');
const checkoutItemsDiv = document.getElementById('checkoutItems');
const checkoutTotalElement = document.getElementById('checkoutTotalAmount');
const checkoutForm = document.getElementById('checkoutForm');
const cancelCheckoutBtn = document.getElementById('cancelCheckoutBtn');
const orderSuccessModal = document.getElementById('orderSuccessModal');
const continueShoppingBtn = document.getElementById('continueShoppingBtn');


// 2. FUNCTIONS

function showCheckout() {
    // Check if cart is empty
    if (cart.length === 0) {
        alert("Your cart is empty! Add items before checking out.");
        return;
    }

    // Hide Cart Sidebar first
    closeCart();

    // Switch View
    if (homeView) homeView.style.display = 'none';
    if (productDetailsView) productDetailsView.style.display = 'none';
    if (checkoutView) checkoutView.style.display = 'block';

    // Populate Order Summary
    renderCheckoutSummary();

    // Scroll to top
    window.scrollTo(0, 0);
}

function renderCheckoutSummary() {
    if (!checkoutItemsDiv) return;

    checkoutItemsDiv.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const priceNum = parseInt(item.price.replace(/[^\d]/g, ''));
        total += priceNum;

        const summaryHTML = `
            <div class="summary-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="summary-item-details">
                    <h4>${item.name}</h4>
                    <span class="price">${item.price}</span>
                </div>
            </div>
        `;
        checkoutItemsDiv.innerHTML += summaryHTML;
    });

    const formattedTotal = '₹' + total.toLocaleString('en-IN');
    if (checkoutTotalElement) checkoutTotalElement.innerText = formattedTotal;
}

function handlePlaceOrder(e) {
    e.preventDefault(); // Stop page reload

    // Simulate Processing
    const btn = checkoutForm.querySelector('.place-order-btn');
    const originalText = btn.innerText;
    btn.innerText = "Processing...";
    btn.disabled = true;

    setTimeout(() => {
        // Show Success Modal
        if (orderSuccessModal) orderSuccessModal.classList.add('active');

        // Reset Cart
        cart = [];
        updateCartUI();

        // Reset Button
        btn.innerText = originalText;
        btn.disabled = false;
        checkoutForm.reset();

    }, 1500); // 1.5s delay
}

// 3. LISTENERS

// Re-attach checkout listener safely
if (checkoutBtn) {
    // Remove existing to avoid duplicates if any (though this file runs once)
    // checkoutBtn.removeEventListener('click', showCheckout); 
    checkoutBtn.addEventListener('click', showCheckout);
}

if (cancelCheckoutBtn) {
    cancelCheckoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (checkoutView) checkoutView.style.display = 'none';
        showHome();
    });
}

if (checkoutForm) {
    checkoutForm.addEventListener('submit', handlePlaceOrder);
}

if (continueShoppingBtn) {
    continueShoppingBtn.addEventListener('click', () => {
        if (orderSuccessModal) orderSuccessModal.classList.remove('active');
        if (checkoutView) checkoutView.style.display = 'none';
        showHome();
    });
}

