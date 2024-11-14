// Ambil elemen HTML yang dibutuhkan
const limitInput = document.getElementById("limit-input");
const startButton = document.getElementById("start-btn");
const evenNumbersDiv = document.getElementById("even-numbers");
const oddNumbersDiv = document.getElementById("odd-numbers");

// Event listener untuk tombol start
startButton.addEventListener("click", () => {
  // Ambil batas dari input
  const limit = parseInt(limitInput.value);

  // Pastikan input adalah angka positif
  if (isNaN(limit) || limit <= 0) {
    alert("Please enter a valid positive number.");
    return;
  }

  // Kosongkan tampilan sebelumnya
  evenNumbersDiv.textContent = "Even Numbers: ";
  oddNumbersDiv.textContent = "Odd Numbers: ";

  // Mulai loop dari 1 hingga batas yang dimasukkan
  for (let i = 1; i <= limit; i++) {
    // Periksa apakah angka genap atau ganjil
    if (i % 2 === 0) {
      // Tambahkan angka genap ke elemen genap
      evenNumbersDiv.textContent += i + " ";
    } else {
      // Tambahkan angka ganjil ke elemen ganjil
      oddNumbersDiv.textContent += i + " ";
    }
  }
});
