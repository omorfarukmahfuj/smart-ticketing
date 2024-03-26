// Scroll Functionality
document.getElementById('btn-buy-ticket').addEventListener('click', function () {
  document.getElementById('section-ticket-buy').scrollIntoView({
    behavior: 'smooth'
  })
})

// Seats Left
const seatsLeftNumber = document.getElementById('seats-left');
let countSeatsLeft = 40;

// Selected Seats Number
const selectedSeatsNumber = document.getElementById('selected-seats-number');
let countSelectedSeat = 0;

// Total Price
const totalPrice = document.getElementById('total-price');

// Grand Total 
function grandTotalCalculation() {

  const grandTotal = document.getElementById('grand-total');
  const regularPrice = countSelectedSeat * 550;
  grandTotal.innerText = regularPrice;
  const discountPriceContainer = document.getElementById('discount-price-container');
  const inputDiscountContainer = document.getElementById('input-discount-container');
  const inputDiscount = document.getElementById('input-discount');
  const btnDiscountApply = document.getElementById('btn-discount-apply');
  const inputAlert = document.getElementById('input-alert');

  if (countSelectedSeat === 4) {
    btnDiscountApply.removeAttribute('disabled');
    btnDiscountApply.addEventListener('click', function () {
      if (countSelectedSeat === 4) {

        if (inputDiscount.value === "NEW15") {
          if (!btnDiscountApply.classList.contains('hidden')) {
            inputAlert.classList.add('hidden');
          }
          discountCalculate(15);
        }

        else if (inputDiscount.value === "Couple 20") {
          if (!btnDiscountApply.classList.contains('hidden')) {
            inputAlert.classList.add('hidden');
          }
          discountCalculate(20);
        }

        else {
          inputAlert.classList.remove('hidden');
          grandTotal.innerText = regularPrice;
        }
      }
    })
  }

  else {
    if (!btnDiscountApply.hasAttribute('disabled')) {
      btnDiscountApply.setAttribute('disabled', true);
      discountPriceContainer.classList.add('hidden');
    }
    inputDiscountContainer.classList.remove('hidden');
  }
}







// Seat Selection
const btnSelectSeats = document.getElementsByClassName('btn-select-seats');
for (const button of btnSelectSeats) {
  button.addEventListener('click', function () {

    if (countSelectedSeat < 4) {

      if (!button.classList.contains('bg-[#1DD100]')) {
        seatSelection(button);
      }

      else {
        undoSeatSelection(button);
      }
    }

    else {
      if (button.classList.contains('bg-[#1DD100]')) {
        undoSeatSelection(button);
      }
    }
    // --------------------------------------------------------------
    seatsLeftNumber.innerText = countSeatsLeft;
    selectedSeatsNumber.innerText = countSelectedSeat;
    totalPrice.innerText = countSelectedSeat * 550;
    grandTotalCalculation();
  });

}




