const eventSelect = document.getElementById('eventSelect');
const ticketsInput = document.getElementById('tickets');
const totalPriceEl = document.getElementById('totalPrice');
const bookNowBtn = document.getElementById('bookNow');

const eventImage = document.getElementById('eventImage');
const eventTitle = document.getElementById('eventTitle');
const pricePerTicketEl = document.getElementById('pricePerTicket');

function updateBookingInfo() {
  const selectedOption = eventSelect.options[eventSelect.selectedIndex];
  const price = parseInt(selectedOption.dataset.price);
  const location = selectedOption.dataset.location;
  const img = selectedOption.dataset.img;

  // Update image, title, location, price per ticket
  eventImage.src = img;
  eventTitle.textContent = selectedOption.value;
  eventTitle.nextElementSibling.textContent = `📍 ${location}`;
  pricePerTicketEl.textContent = `₱${price.toLocaleString()}`;

  // Update total
  const quantity = parseInt(ticketsInput.value) || 1;
  totalPriceEl.textContent = `₱${(price * quantity).toLocaleString()}`;
}

// Event listeners
eventSelect.addEventListener('change', updateBookingInfo);
ticketsInput.addEventListener('input', updateBookingInfo);

// Initial update
updateBookingInfo();

// Booking alert
bookNowBtn.addEventListener('click', () => {
  const selectedOption = eventSelect.options[eventSelect.selectedIndex];
  const quantity = parseInt(ticketsInput.value) || 1;
  const price = parseInt(selectedOption.dataset.price);
  const total = price * quantity;

  alert(`You booked ${quantity} ticket(s) for "${selectedOption.value}"\nTotal: ₱${total.toLocaleString()}`);
});
