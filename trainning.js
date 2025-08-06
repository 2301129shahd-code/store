
let products = [
  {
    title: "Wireless Headphones",
    description: "Experience high-quality sound with noise cancelation and long battery life.",
    price: "$99.99",
    image: "image/headphone.webp"
  },
  {
    title: "Smart Watch",
    description: "Stay connected and track your fitness with this sleek and durable smart watch.",
    price: "$149.99",
    image: "image/smart watch.webp"
  },
  {
    title: "Bluetooth Speaker",
    description: "Portable speaker with rich sound and waterproof design for outdoor use.",
    price: "$59.99",
    image: "image/blutooth speaker.webp"
  },
  {
    title: "Gaming Mouse",
    description: "High precision sensor and customizable buttons for the ultimate gaming experience.",
    price: "$39.99",
    image: "image/gaming mouse.webp"
  },
  {
    title: "4K Monitor",
    description: "Stunning 27-inch 4K display with vivid colors and wide viewing angles.",
    price: "$329.99",
    image: "image/monitor.webp"
  },
  {
    title: "Mechanical Keyboard",
    description: "Durable keyboard with tactile switches and customizable lighting effects.",
    price: "$89.99",
    image: "image/Corsair-Mechanical-Keyboard.webp"
  },
  {
    title: "Fitness Tracker",
    description: "Monitor your health and activity with this lightweight and waterproof tracker.",
    price: "$49.99",
    image: "image/fitness.jpg"
  },
  {
    title: "Drone Camera",
    description: "Capture stunning aerial footage with this easy-to-fly drone and high-res camera.",
    price: "$399.99",
    image: "image/2-1024x576.png"
  }
];


const productGrid = document.querySelector(".product-grid");


function renderProducts() {
  productGrid.innerHTML = ""; 
  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <span>${product.price}</span>
      <button class="product-btn">Add to Cart</button>
      <button class="delete-btn">delete</button>
    `;

   
    card.querySelector(".delete-btn").addEventListener("click", () => {
      products.splice(index, 1); 
      renderProducts(); 
    });

    productGrid.appendChild(card);
  });
}
renderProducts();
