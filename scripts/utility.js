// Seat Select
function seatSelection(button) {
  countSeatsLeft--;
  countSelectedSeat++;
  button.classList.remove('bg-[#F7F8F8]', 'text-[#03071280]');
  button.classList.add('bg-[#1DD100]', 'hover:bg-[#1DD100]', 'text-white');

  // Append Seat Details
  const seatsDetailContainer = document.getElementById('seats-detail-container');
  const seatDetailsElement = document.createElement('div');
  seatDetailsElement.classList.add(button.innerText, 'seat-details', 'font-[inter]', 'text-sm', 'md:text-base', 'text-[#03071299]', 'flex', 'justify-between', 'mb-3');

  const seatId = document.createElement('p');
  seatId.innerText = button.innerText;

  const seatClass = document.createElement('p');
  seatClass.innerText = 'Economy';

  const seatPrice = document.createElement('p');
  seatPrice.innerText = 550;

  seatDetailsElement.appendChild(seatId);
  seatDetailsElement.appendChild(seatClass);
  seatDetailsElement.appendChild(seatPrice);
  seatsDetailContainer.appendChild(seatDetailsElement);
}


// Seat Unselect
function undoSeatSelection(button) {
  countSeatsLeft++;
  countSelectedSeat--;
  button.classList.remove('bg-[#1DD100]', 'hover:bg-[#1DD100]', 'text-white');
  button.classList.add('bg-[#F7F8F8]', 'text-[#03071280]');

  const seatsDetailContainer = document.getElementById('seats-detail-container');
  const seatDetailsElement = document.getElementsByClassName('seat-details');
  for (const seatDetails of seatDetailsElement) {
    if (seatDetails.classList.contains(button.innerText)) {
      seatsDetailContainer.removeChild(seatDetails);
      break;
    }
  }
}

// Discount Calculate
function discountCalculate(discountPercentage) {
  const grandTotal = document.getElementById('grand-total');
  const regularPrice = countSelectedSeat * 550;
  const discountPriceContainer = document.getElementById('discount-price-container');
  const inputDiscountContainer = document.getElementById('input-discount-container');


  discountPriceContainer.classList.add('font-[inter]', 'font-medium', 'text-sm', 'md:text-base', 'text-[#030712]', 'flex', 'justify-between', 'mb-3');
  discountPriceContainer.innerHTML = `
  <p>Discount Price</p>
  <p>BDT <span id="discount-price">0</span></p>
  `;

  const discountPrice = document.getElementById('discount-price');
  discountPrice.innerText = (discountPercentage / 100) * regularPrice;
  grandTotal.innerText = regularPrice - ((discountPercentage / 100) * regularPrice);
  discountPriceContainer.classList.remove('hidden');
  inputDiscountContainer.classList.add('hidden');

}