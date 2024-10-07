// Kelas dasar Hewan
class Hewan {
  constructor(nama) {
    this.nama = nama;
  }

  // Metode umum yang akan di-override di kelas turunan
  suara() {
    return `${this.nama} membuat suara.`;
  }
}

// Kelas Anjing yang mewarisi dari Hewan
class Anjing extends Hewan {
  suara() {
    return `${this.nama} menggong-gong: 'Guk!, Guk!, Guk!'`;
  }
}

// Kelas Kucing yang mewarisi dari Hewan
class Kucing extends Hewan {
  suara() {
    return `${this.nama} mengeong dengan suara: 'Meaw!, Meaw!' Meaw!`;
  }
}

// Kelas Burung yang mewarisi dari Hewan
class Burung extends Hewan {
  suara() {
    return `${this.nama} berkicau-kicau: 'Cucuit!, Cuit!, Ciut!'`;
  }
}
// Kelas Harimau yang mewarisi dari Hewan
class Harimau extends Hewan {
  suara() {
    return `${this.nama} Mengaum-ngaum dengan bunyi: 'Haum!, Haum!'`;
  }
}

// Fungsi untuk menunjukkan polymorphism
function buatSuara(hewan) {
  console.log(hewan.suara());
}

// Membuat objek dari setiap kelas
let anjing = new Anjing("Maxxyie");
let kucing = new Kucing("Phoenix");
let burung = new Burung("Sweetie piey");
let harimau = new Harimau("Lorenzoi");

// Memanggil metode yang menunjukkan polymorphism
buatSuara(anjing);  // Output: Maxxyie menggong-gong: 'Guk, Guk! Guk!'
buatSuara(kucing);  // Output: Phoenix mengeong dengan suara: 'Meaw!, Meaw!, Meaw!'
buatSuara(burung);  // Output: Sweetie piey berkicau-kicau: 'Cucuit!, Cuit!, Cuit!'
buatSuara(harimau);  // Output: Lorenzoi Mengaum-ngaum dengan bunyi: 'Haum!, Haum!''
