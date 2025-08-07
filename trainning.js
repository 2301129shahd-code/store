const productGrid = document.querySelector(".product-grid");


async function fetchProducts() {
  try {
    const response = await fetch("product.json");
    const products = await response.json();
    renderProducts(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    productGrid.innerHTML = "<p>Failed to load products.</p>";
  }
}

function renderProducts(products) {
  productGrid.innerHTML = "";
  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <span>${product.price}</span>
      <button class="product-btn">Add to Cart</button>
      <button class="delete-btn">Delete</button>
    `;

    card.querySelector(".delete-btn").addEventListener("click", async () => {
      try {
        await fetch(`product.json/${product.id}`,
 {
          method: "DELETE"
        });
        fetchProducts(); 
      } catch (err) {
        console.error("Error deleting product:", err);
      }
    });

    productGrid.appendChild(card);
  });
}


fetchProducts();
