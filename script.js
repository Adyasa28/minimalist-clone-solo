const button = document.getElementById("toggleBtn");
const box = document.getElementById("menu");

button.addEventListener("click", () => {
  box.classList.toggle("show");

  if (box.classList.contains("show")) {
    button.classList.remove("fa-bars");
    button.classList.add("fa-xmark");
  } else {
    button.classList.remove("fa-xmark");
    button.classList.add("fa-bars");
  }
});
/////////////////////////////////////////////////////
const userIcon = document.getElementById("userBtn");

userIcon.addEventListener("click", () => {
  window.location.href = "login.html";
});
/////////////////////////////////////////////////////
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

let dots = document.querySelectorAll("#dots>h1");

const slides = document.querySelectorAll(".slide");
let index = 0;
showSlide(index);
function showSlide(i) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[i].classList.add("active");
}

next.addEventListener("click", () => {
  index++;

  if (index >= slides.length) {
    index = 0;
  }

  showSlide(index);
  dots.forEach((element, i) => {
    if (i == index) {
      dots[i].style.color = "black";
    } else {
      dots[i].style.color = "grey";
    }
  });
});

prev.addEventListener("click", () => {
  index--;

  if (index < 0) {
    index = slides.length - 1;
  }
  dots.forEach((element, i) => {
    if (i == index) {
      dots[i].style.color = "black";
    } else {
      dots[i].style.color = "grey";
    }
  });

  showSlide(index);
});

//     setInterval(() => {

//     index++;

//     if(index >= slides.length){
//         index = 0;
//     }

//     showSlide(index);

// }, 5000);
/////////////////////////////////////////////////////////////
const offers = document.querySelectorAll(".offer");
const prev1 = document.querySelector(".prev1");
const next1 = document.querySelector(".next1");

let currentOffer = 0;

function showOffer(index) {
  offers.forEach((offer) => {
    offer.classList.remove("active");
  });

  offers[index].classList.add("active");
}

showOffer(currentOffer);

next1.addEventListener("click", function () {
  currentOffer++;

  if (currentOffer >= offers.length) {
    currentOffer = 0;
  }

  showOffer(currentOffer);
});

prev1.addEventListener("click", function () {
  currentOffer--;

  if (currentOffer < 0) {
    currentOffer = offers.length - 1;
  }

  showOffer(currentOffer);
});

setInterval(function () {
  currentOffer++;

  if (currentOffer >= offers.length) {
    currentOffer = 0;
  }

  showOffer(currentOffer);
}, 4000);
/////////////////////////////////////////////////////
const products = [
  {
    image:
      "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/SalicylicCleanserNew.jpg?crop=center&height=540&v=1756796206&width=360",
    name: "Salicylic Acid + LHA 2% Cleanser",

    desc: "Acne,Breakouts & Oiliness",

    desc1:
      "A daily, gentle exfoliating, acne fighting face cleanser. It combines BHA + LHA (Salicylic Acid + Capryloyl Salicylic Acid) in 2% concentration, which provides deep cleansing, pore decongestion & sebum reduction without drying out the skin.I have seen a reduction in acne and oiliness ever since I started using this face cleanser -Nikhil V.Fragrance Free,Non-comedogenic,Essential Oil Free,pH: 4.5 - 5.5",

    price: "₹ 285",
  },
  {
    image:
      "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/SPF50New.jpg?crop=center&height=540&v=1756795782&width=360",
    name: "SPF 50 Sunscreen",
    desc: "Sun protection,UV exposure/damage",
    desc1:
      "A light weight, moisturiser-meets-sunscreen. This broad spectrum SPF 50 with PA++++ rating, has a very light texture that spreads easily & disappears leaving behind a natural, moisturised, non-shiny look. Loaded with Vitamins B, E & F that help repair skin and minimise damage caused by UV exposure.This is the best sunscreen I've come across to. It suits my skin well no whitecast no sticky feeling absorbs quickly. -tanisha v.",

    price: "₹380",
  },
  {
    image:
      "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/products/B5Moisturizer1200-2-min.png?crop=center&height=540&v=1756800645&width=360",
    name: "Vitamin B5 10% Moisturizer",
    desc: "Damaged Barrier, Oily & Dehydrated",
    desc1:
      "An everyday moisturizer for hydrating, nourishing and repairing skin. A lightweight, oil-free product with high concentration of Vitamin B5 (Panthenol), formulated especially for oily / combination skin.The perfect moisturizer for oily skin. It soothes and doesn't feel heavy on the skin atall. Very light but moisturizes very well and hydrates too. -Bipasa N.",

    price: "₹332",
  },
  {
    image:
      "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/Nia10New.png?crop=center&height=630&v=1721398127&width=420",
    name: "Niacinamide 10% Face Serum",
    desc: "Acne Control",
    desc1:
      "A daily serum formulated with pure Vitamin B3 (Niacinamide) and Matmarine. Niacinamide reduces the sebum level of the skin, improves the barrier & evens our skin tone. Matmarine is a perfect biotechnological ingredient to reduce excess sebum, shine, pores & spots.I've been using it for past 3-4 months. I'm on my 2nd bottle. It's an amazing product. I had uneven skin tone, acne scar marks and now it's almost gone. I love this product. -Charu S.",

    price: "₹499",
  },
];
const container = document.querySelector(".product-container");

products.forEach((product) => {
  let card = document.createElement("div");
  card.className = "card";

  let img = document.createElement("img");
  img.src = product.image;

  let title = document.createElement("h3");
  title.innerText = product.name;

  let desc = document.createElement("p");
  desc.innerText = product.desc;

  let price = document.createElement("h4");
  price.innerText = product.price;

  let btn = document.createElement("button");
  btn.innerText = "Add to Cart";

  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    addToCart(product);

    btn.innerText = "Added ✓";
    btn.disabled = true;
  });

  card.style.cursor = "pointer";

  card.addEventListener("click", function () {
    localStorage.setItem("selectedProduct", JSON.stringify(product));

    window.location.href = "product.html";
  });

  card.append(img, title, desc, price, btn);

  container.append(card);
});

//addToCart()
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product added to cart!");

  updateCartCount();
}
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  document.getElementById("cartCount").innerText = cart.length;
}
updateCartCount();

const cartBtn = document.getElementById("cartBtn");

cartBtn.addEventListener("click", function () {
  window.location.href = "cart.html";
});
////////////////////////////////////////////////////
const data = [
  {
    icon: "fa-solid fa-circle-half-stroke",
    title: "Transparency",
    desc: "Full disclosure of ingredients used & their concentration",
  },
  {
    icon: "fa-solid fa-flask",
    title: "Efficacy",
    desc: "Formulations developed in our in-house laboratories",
  },
  {
    icon: "fa-solid fa-eye-dropper",
    title: "Affordable",
    desc: "Skincare, accessible to all",
  },
  {
    icon: "fa-solid fa-earth-americas",
    title: "Only the best",
    desc: "Ingredients sourced from across the world",
  },
];

const featureSection = document.querySelector(".features");

const heading = document.createElement("h1");
heading.innerText = "The future of personal care is here";

const para = document.createElement("p");
para.innerText =
  "Embrace Minimalist, where each element is chosen for its scientific merit, offering you authentic, effective skincare solutions.";

featureSection.append(heading, para);

const featureContainer = document.createElement("div");
featureContainer.className = "feature-container";

data.forEach((item) => {
  const card = document.createElement("div");
  card.className = "feature-card";

  const icon = document.createElement("i");
  icon.className = item.icon;

  const title = document.createElement("h3");
  title.innerText = item.title;

  const desc = document.createElement("p");
  desc.innerText = item.desc;

  card.append(icon, title, desc);

  featureContainer.append(card);
});

featureSection.append(featureContainer);
/////////////////////////////////////////////////////

const newProducts = [
  {
    image:
      "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/Artboard_1_copy_13_1.jpg?crop=center&height=630&v=1776762556&width=420",
    name: "Hydrating Factors 7.3% Hair Shampoo",
    desc: " Manage dry, dull & frizzy hair",
    desc1:
      "This hydrating shampoo is specifically formulated with Sodium Hyaluronate, Betaine, Glycerine, and Tamarindus Indica Fruit Extract to help manage dry, dull & frizzy hair. The moisture boosting formula deeply hydrates and helps lock in moisture, improving hair texture and enhances natural shine.With regular use, hair feels softer, smoother and visibly healthier with frizz-free finish.",
    price: "₹475",
  },
  {
    image:
      "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/MultiRepairListing.jpg?crop=center&height=720&v=1762515398&width=480",
    name: "Multi Repair Actives 15% Face Serum",
    desc: "Brightens & firms skin, repairs barrier",
    desc1:
      "Our Multi-Active serum is expertly designed to support overall skin health and promote a visibly radiant and resilient complexion. Its multi-action formula targets common concerns like dullness, uneven tone, and barrier sensitivity.Powered by a synergistic blend of Volufiline™, VC-IP (stable Vitamin C), Retinaldehyde, and Vitamin F, this lightweight, non-sticky serum delivers measurable improvement in smoothness, clarity, and hydration. With regular use, your skin will feel calmer, smoother, and more even-toned, revealing a naturally luminous complexion that reflects vitality and balance.",
    price: "₹665",
  },
  {
    image:
      "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/ListingMarulaOil05.jpg?crop=center&height=630&v=1760096773&width=420",
    name: "Marula Oil 05% Cleansing Oil",
    desc: " removes oils & impurities, leaves skin clean.",
    desc1:
      "This cleansing oil is formulated to gently and effectively dissolve waterproof makeup, sunscreen. The blend of marula oil, jojoba oil, and olive oil works on the principle of like dissolves like, lifting impurities without stripping your skin's natural moisture barrier. The formula includes Sorbeth-30 Tetraoleate, which allows the oil to emulsify and rinse away cleanly with water, leaving your skin feeling soft and comfortable without any greasy residue.",
    price: "₹570",
  },
];
const newContainer = document.querySelector(".new-product-container");

newProducts.forEach((product) => {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = product.image;

  const title = document.createElement("h3");
  title.innerText = product.name;

  const desc = document.createElement("p");
  desc.innerText = product.desc;

  const price = document.createElement("h4");
  price.innerText = product.price;

  const btn = document.createElement("button");
  btn.className = "buy";
  btn.innerText = "Add to Cart";
  btn.addEventListener("click", function (e) {
    e.stopPropagation();

    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
      alert("Please login first.");
      window.location.href = "login.html";
      return;
    }

    addToCart(product);

    btn.innerText = "Added ✓";
    btn.disabled = true;
  });
  card.addEventListener("click", function () {
    localStorage.setItem("selectedProduct", JSON.stringify(product));

    window.location.href = "product.html";
  });

  card.append(img, title, desc, price, btn);

  newContainer.append(card);
});

function addToCart(product) {
  // Check if user is logged in
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) {
    alert("Please login first to add products to your cart.");
    window.location.href = "login.html";
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product added to cart!");

  updateCartCount();
}
const categories = [
  {
    image:
      "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/1707202320-67ef6468516dd5c6.png?crop=center&height=180&v=1707202328&width=240",
    title: "Skin Care",
    sub: "Skin",
  },
  {
    image:
      "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/1706099761-f86e95709c7aaba4.png?crop=center&height=180&v=1706099767&width=240",
    title: "Hair Care",
    sub: "Hair",
  },
  {
    image:
      "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/1706099804-80666e6d221da1a8.png?crop=center&height=180&v=1706099810&width=240",
    title: "Body Care",
    sub: "Bath & Body",
  },
  {
    image:
      "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/1707202423-7af38ee9fbec530d.png?crop=center&height=180&v=1707202432&width=240",
    title: "Lip Care",
    sub: "Lip",
  },
  {
    image:
      "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/1706099885-2900ece1f743c65a.png?crop=center&height=180&v=1706099891&width=240",
    title: "Eye Care",
    sub: "Eye",
  },
];

const categoryContainer = document.querySelector(".category-container");

// Create cards
categories.forEach((item) => {
  const card = document.createElement("div");
  card.className = "category-card";

  card.innerHTML = `
        <img src="${item.image}">
        <h3>${item.title}</h3>
        <p>${item.sub}</p>
    `;

  categoryContainer.append(card);
});
const thumb = document.querySelector(".slider-thumb");

let current = 0;

thumb.addEventListener("click", () => {
  if (current === 0) {
    categoryContainer.style.transform = "translateX(-25%)";
    thumb.style.left = "55px";
    current = 1;
  } else {
    categoryContainer.style.transform = "translateX(0)";
    thumb.style.left = "0";
    current = 0;
  }
});

//////////////////////////////////////
const concerns = [
  {
    image:
      "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/Uneven_Tone_or_Pigmentation-min.png?crop=center&height=180&v=1710248322&width=240",
    title: "Uneven Tone",
  },
  {
    image:
      "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/Acne-min.png?crop=center&height=180&v=1710248322&width=240",
    title: "Acne Control",
  },
  {
    image:
      "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/Oiliness-min.png?crop=center&height=180&v=1710248324&width=240",
    title: "Oiliness",
  },

   {
    image:
      "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/Hair_Fall-min.png?crop=center&height=270&v=1710248322&width=360",
    title: "Oiliness",
  },
];

const concernContainer = document.querySelector(".concern-container");

concerns.forEach((item) => {
  const card = document.createElement("div");
  card.className = "concern-card";

  card.innerHTML = `
        <img src="${item.image}">
        <h3>${item.title}</h3>
    `;

  concernContainer.append(card);
});

const navItems = document.querySelectorAll(".navLink li");
const menu = document.getElementById("megaMenu");

let hideMenu;

navItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    clearTimeout(hideMenu);

    let menuName = item.textContent.trim();

    if (
      menuName === "Shop" ||
      menuName === "Best Sellers" ||
      menuName === "Skin & Body Care" ||
      menuName === "Hair Care" ||
      menuName === "Baby Care"
    ) {
      menu.style.display = "block";

      if (menuName === "Shop") {
        menu.innerHTML = `
                <div class="productMenu">

                    <div class="productCard">
                        <img src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/SalicylicCleanserNew.jpg?crop=center&height=540&v=1756796206&width=360">
                        <h4>Skin & Body</h4>
                        
                    </div>

                    <div class="productCard">
                        <img src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/HGANew.jpg?crop=center&height=360&v=1721379190&width=240">
                        <h4>Hair</h4>
                        
                    </div>

                    <div class="productCard">
                        <img src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/L-AscNew.jpg?crop=center&height=360&v=1721379189&width=240">
                        <h4>Lip</h4>
                       
                    </div>

                    <div class="productCard">
                        <img src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/Artboard_1_copy_13_1.jpg?crop=center&height=540&v=1776762556&width=360">
                        <h4>New Launches</h4>
                        
                    </div>

                </div>
                `;
      } else if (menuName === "Best Sellers") {
        menu.innerHTML = `
                <div class="productMenu">

                    <div class="productCard">
                        <img src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/SalicylicCleanserNew.jpg?crop=center&height=540&v=1756796206&width=360">
                        <h4>Salicylic Acid + LHA 2% Cleanser</h4>
                        <p>₹299</p>
                    </div>

                    <div class="productCard">
                        <img src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/SPF50New.jpg?crop=center&height=630&v=1756795782&width=420">
                        <h4>SPF 50 Sunscreen</h4>
                        <p>₹349</p>
                    </div>

                    <div class="productCard">
                        <img src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/Nia10New.png?crop=center&height=630&v=1721398127&width=420">
                        <h4>Niacinamide 10% Face Serum</h4>
                        <p>₹549</p>
                    </div>

                    <div class="productCard">
                        <img src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/products/VitaminC10_1200-1-min.png?crop=center&height=630&v=1646543848&width=420">
                        <h4>Vitamin C 10% Face Serum</h4>
                        <p>₹499</p>
                    </div>

                </div>
                `;
      } else if (menuName === "Skin & Body Care") {
        menu.innerHTML = `
                <div class="menuBox">

                    <div>
                        <h3>Skin Care</h3>
                        <p>Cleanser</p>
                        <p>Moisturizer</p>
                        <p>Serum</p>
                        <p>Sunscreen</p>
                    </div>

                    <div>
                        <h3>Body Care</h3>
                        <p>Body Wash</p>
                        <p>Lotion</p>
                        <p>Lip Care</p>
                    </div>

                    <div>
                        <img src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/DomesticTexture.png?v=1729750814&width=420">
                        <h3>New Launch: Retinol 0.1% Serum</h3>
                        <p>Our New Anti-Aging Powerhouse</p>
                    </div>

                </div>
                `;
      } else if (menuName === "Hair Care") {
        menu.innerHTML = `
                <div class="menuBox">

                    <div>
                        <h3>Hair Concerns</h3>
                        <p>Hair Fall</p>
                        <p>Dandruff</p>
                        <p>Dry Hair</p>
                        <p>Oily Scalp</p>
                    </div>

                    <div>
                        <h3>Hair Products</h3>
                        <p>Shampoo</p>
                        <p>Conditioner</p>
                        <p>Hair Serum</p>
                    </div>

                    <div>
                        <img src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/Artboard_1_copy_12_dab40689-cbf7-446e-972b-5e56b9af6a01.jpg?v=1776431578&width=420">
                        <h3>New Launch: Hydrating Factors 7.3% Hair Shampoo</h3>
                    </div>

                </div>
                `;
      } else if (menuName === "Baby Care") {
        menu.innerHTML = `
                <div class="productMenu">

                    <div class="productCard">
                        <img src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/BabyDelicateCleanserNew.png?crop=center&height=540&v=1721632055&width=360">
                        <h4>Ceramide & Vitamin B5 Delicate Cleanser</h4>
                        <p>₹399</p>
                    </div>

                    <div class="productCard">
                        <img src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/BabyNourishingNew.png?crop=center&height=540&v=1721632055&width=360">
                        <h4>Ceramide & Squalane Nourishing Lotion</h4>
                        <p>₹499</p>
                    </div>

                    <div class="productCard">
                        <img src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/HealingOintmentNew.png?crop=center&height=540&v=1721632054&width=360">
                        <h4>Zinc Oxide + B5 Healing Ointment</h4>
                        <p>₹299</p>
                    </div>

                    <div class="productCard">
                        <img src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/MassageOilNew.png?crop=center&height=540&v=1721398127&width=360">
                        <h4>Provitamin D3 Massage Oil</h4>
                        <p>₹349</p>
                    </div>

                </div>
                `;
      }
    } else {
      menu.style.display = "none";
    }
  });
});

menu.addEventListener("mouseenter", () => {
  clearTimeout(hideMenu);
});

menu.addEventListener("mouseleave", () => {
  hideMenu = setTimeout(() => {
    menu.style.display = "none";
  }, 200);
});

navItems.forEach((item) => {
  item.addEventListener("mouseleave", () => {
    hideMenu = setTimeout(() => {
      menu.style.display = "none";
    }, 200);
  });
});

const viewAllBtn = document.querySelector(".viewAll");

viewAllBtn.addEventListener("click", function () {
  window.location.href = "allproducts.html";
});

const newBtn = document.querySelector(".viewAllNew");

newBtn.addEventListener("click", function () {
  window.location.href = "allproducts.html";
});
