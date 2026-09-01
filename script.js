const productDatabase = [
  { id: 1, title: "Classic Trench Coat", category: "women", price: "$120", img: "coat.jpg" },
  { id: 2, title: "Slim Fit Chinos", category: "men", price: "$65", img: "chinos.jpg" },
  { id: 3, title: "Minimalist Leather Watch", category: "accessories", price: "$150", img: "watch.jpg" },
  { id: 4, title: "Oversized Knit Sweater", category: "women", price: "$85", img: "sweater.jpg" }
];

// Renders filtered items onto the webpage
function filterProducts(category, buttonElement) {
  // Update active state class on category buttons
  document.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));
  if (buttonElement) buttonElement.classList.add('active');

  const grid = document.getElementById('product-grid');
  grid.innerHTML = ''; // Reset current viewport inventory

  // Filter items based on criteria selection
  const filteredItems = category === 'all' 
    ? productDatabase 
    : productDatabase.filter(item => item.category === category);

  // Construct UI blocks dynamically
  filteredItems.forEach(item => {
    const productCard = `
      <div class="product-card" data-category="${item.category}">
        <img src="${item.img}" alt="${item.title}" class="product-img">
        <h3 class="product-name">${item.title}</h3>
        <p class="product-price">${item.price}</p>
        <button class="add-to-cart-btn">Add to Bag</button>
      </div>
    `;
    grid.innerHTML += productCard;
  });
}

// Initial render call on site load
document.addEventListener("DOMContentLoaded", () => filterProducts('all'));
