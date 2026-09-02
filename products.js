   const products = [
  {
    image:
      "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/SalicylicCleanserNew.jpg?crop=center&height=540&v=1756796206&width=360",
    name: "Salicylic Acid + LHA 2% Cleanser",

    desc: "Acne,Breakouts & Oiliness",

    desc1:"A daily, gentle exfoliating, acne fighting face cleanser. It combines BHA + LHA (Salicylic Acid + Capryloyl Salicylic Acid) in 2% concentration, which provides deep cleansing, pore decongestion & sebum reduction without drying out the skin.I have seen a reduction in acne and oiliness ever since I started using this face cleanser -Nikhil V.Fragrance Free,Non-comedogenic,Essential Oil Free,pH: 4.5 - 5.5",

    price: "₹ 285",
  },
  {
    image:
      "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/SPF50New.jpg?crop=center&height=540&v=1756795782&width=360",
    name: "SPF 50 Sunscreen",
    desc: "Sun protection,UV exposure/damage",
    desc1:"A light weight, moisturiser-meets-sunscreen. This broad spectrum SPF 50 with PA++++ rating, has a very light texture that spreads easily & disappears leaving behind a natural, moisturised, non-shiny look. Loaded with Vitamins B, E & F that help repair skin and minimise damage caused by UV exposure.This is the best sunscreen I've come across to. It suits my skin well no whitecast no sticky feeling absorbs quickly. -tanisha v.",

    price: "₹380",
  },
  {
    image:
      "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/products/B5Moisturizer1200-2-min.png?crop=center&height=540&v=1756800645&width=360",
    name: "Vitamin B5 10% Moisturizer",
    desc: "Damaged Barrier, Oily & Dehydrated",
    desc1:"An everyday moisturizer for hydrating, nourishing and repairing skin. A lightweight, oil-free product with high concentration of Vitamin B5 (Panthenol), formulated especially for oily / combination skin.The perfect moisturizer for oily skin. It soothes and doesn't feel heavy on the skin atall. Very light but moisturizes very well and hydrates too. -Bipasa N.",

    price: "₹332",
  },
  {
    image:
      "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/Nia10New.png?crop=center&height=630&v=1721398127&width=420",
    name: "Niacinamide 10% Face Serum",
    desc: "Acne Control",
    desc1:"A daily serum formulated with pure Vitamin B3 (Niacinamide) and Matmarine. Niacinamide reduces the sebum level of the skin, improves the barrier & evens our skin tone. Matmarine is a perfect biotechnological ingredient to reduce excess sebum, shine, pores & spots.I've been using it for past 3-4 months. I'm on my 2nd bottle. It's an amazing product. I had uneven skin tone, acne scar marks and now it's almost gone. I love this product. -Charu S.",

    price: "₹499",
  },
];
const newProducts = [
  {
    image:
      "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/Artboard_1_copy_13_1.jpg?crop=center&height=630&v=1776762556&width=420",
    name: "Hydrating Factors 7.3% Hair Shampoo",
    desc: " Manage dry, dull & frizzy hair",
    desc1:"This hydrating shampoo is specifically formulated with Sodium Hyaluronate, Betaine, Glycerine, and Tamarindus Indica Fruit Extract to help manage dry, dull & frizzy hair. The moisture boosting formula deeply hydrates and helps lock in moisture, improving hair texture and enhances natural shine.With regular use, hair feels softer, smoother and visibly healthier with frizz-free finish.",
    price: "₹475",
  },
  {
    image:
      "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/MultiRepairListing.jpg?crop=center&height=720&v=1762515398&width=480",
    name: "Multi Repair Actives 15% Face Serum",
    desc: "Brightens & firms skin, repairs barrier",
    desc1:"Our Multi-Active serum is expertly designed to support overall skin health and promote a visibly radiant and resilient complexion. Its multi-action formula targets common concerns like dullness, uneven tone, and barrier sensitivity.Powered by a synergistic blend of Volufiline™, VC-IP (stable Vitamin C), Retinaldehyde, and Vitamin F, this lightweight, non-sticky serum delivers measurable improvement in smoothness, clarity, and hydration. With regular use, your skin will feel calmer, smoother, and more even-toned, revealing a naturally luminous complexion that reflects vitality and balance.",
    price: "₹665",
  },
  {
    image:
      "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/ListingMarulaOil05.jpg?crop=center&height=630&v=1760096773&width=420",
    name: "Marula Oil 05% Cleansing Oil",
    desc: " removes oils & impurities, leaves skin clean.",
    desc1:"This cleansing oil is formulated to gently and effectively dissolve waterproof makeup, sunscreen. The blend of marula oil, jojoba oil, and olive oil works on the principle of like dissolves like, lifting impurities without stripping your skin's natural moisture barrier. The formula includes Sorbeth-30 Tetraoleate, which allows the oil to emulsify and rinse away cleanly with water, leaving your skin feeling soft and comfortable without any greasy residue.",
    price: "₹570",
  },
];
function addToCart(product) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product Added Successfully!");

    updateCartCount();

}

function updateCartCount() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    document.getElementById("cartCount").innerText = cart.length;

}