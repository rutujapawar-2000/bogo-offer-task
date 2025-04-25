const checkboxes = document.querySelectorAll('.unit-option');
const totalPriceEl = document.getElementById('total-price');

function updateTotal() {
  let total = 0;
  checkboxes.forEach(cb => {
    if (cb.checked) {
      total += parseFloat(cb.dataset.price);
    }
  });
  totalPriceEl.textContent = `Total : $${total.toFixed(2)} USD`;
}

checkboxes.forEach(cb => {
  cb.addEventListener('change', updateTotal);
});
