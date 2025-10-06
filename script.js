//your code here!

const infiList = document.getElementById("infi-list");
let itemCount = 0;

function addListItems(count) {
  for (let i = 0; i < count; i++) {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = `Item ${itemCount}`;
    infiList.appendChild(li);
  }
}

addListItems(10);

window.addEventListener("scroll", () => {
  // Check if the user scrolled to the bottom of the page
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
    addListItems(2); // Add 2 more items
  }
});


