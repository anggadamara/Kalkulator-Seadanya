// Menyimpan input saat ini
let currentInput = '';

// Fungsi untuk menambahkan nilai tombol yang diklik ke input saat ini
function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

// Fungsi untuk melakukan perhitungan
function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('display').value = currentInput;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Fungsi untuk menghapus tampilan
function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}
