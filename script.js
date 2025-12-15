/* claculate total price of added or uandded products */
function updateTotal() {
  let total = 0;
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let price = Number(card.querySelector(".unit-price").textContent.replace("$", ""));
    let qty = Number(card.querySelector(".quantity").textContent);
    total += price * qty;
  });

  document.querySelector(".total").textContent = total + " $";
}
/* update quantity for each added product */
document.querySelectorAll(".fa-plus-circle").forEach(btn => {
  btn.addEventListener("click", function () {
    let q = this.parentElement.querySelector(".quantity");
    q.textContent = Number(q.textContent) + 1;
    updateTotal();
  });
});
/* update quantity for each unadded product */
document.querySelectorAll(".fa-minus-circle").forEach(btn => {
  btn.addEventListener("click", function () {
    let q = this.parentElement.querySelector(".quantity");
    if (Number(q.textContent) > 0) {
      q.textContent = Number(q.textContent) - 1;
      updateTotal();
    }
  });
});
/* remove product once trash icon is clicked */
document.querySelectorAll(".fa-trash-alt").forEach(btn => {
  btn.addEventListener("click", function () {
    let card = this.closest(".card");  // remove product card
    card.remove();
    updateTotal();
  });
});
/* change heart color to red if black or to black if red once icon is clicked */
document.querySelectorAll(".fa-heart").forEach(btn => {
  btn.addEventListener("click", function () {
    this.style.color = this.style.color === "red" ? "black" : "red";
  });
});
/* function for updating toatal price */
updateTotal();