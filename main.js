// Menggunakan if, else, dan nested if untuk mengatur situasi di perlintasan kereta api
let adaKereta = true;
let lampuMerah = false;
let pintuTertutup = true;

if (adaKereta) {
  console.log("Hati-hati, ada kereta api yang akan lewat!");
  
  if (lampuMerah && pintuTertutup) {
    console.log("Berhenti dan tunggu sampai kereta api lewat.");
  } else {
    console.log("Lanjutkan perjalanan dengan hati-hati.");
  }
} else {
  console.log("Tidak ada kereta api, silahkan untuk melanjutkan perjalanan dan semoga selamat sampai tujuan .");
}

// Menggunakan switch case untuk mengatur cuaca di luar
let cuaca = "hujan";

switch (cuaca) {
  case "cerah":
    console.log("Cuaca cerah, cocok untuk melakukan liburan ke pantai.");
    break;
  case "hujan":
    console.log("Sedang hujan,  jangan lupa pakai jas hujan");
    break;
  case "berawan":
    console.log("Cuaca berawan, tetap waspada dan jangan lupa membawa payung.");
    break;
  default:
    console.log("Cuaca tidak diketahui alias nihil.");
}

// Menggunakan for statement untuk menghitung mundur waktu sebelum kereta datang
for (let i = 10; i > 0; i--) {
  console.log("Kereta akan datang dalam " + i + " detik.");
}

// Menggunakan while loop untuk menunggu hingga kereta lewat
let keretaLebih = false;
let waktuTunggu = 0;

while (!keretaLebih) {
  console.log("Menunggu kereta api lewat...");
  waktuTunggu += 10;
  
  if (waktuTunggu >= 60) {
    keretaLebih = true;
  }
}

console.log("Kereta telah lewat, Anda dapat melanjutkan perjalanan.");

// Menggunakan do while loop untuk mengecek kembali kondisi perlintasan setelah kereta lewat
let pintuTerbuka = true;

do {
  console.log("Memeriksa pintu perlintasan terbuka atau tertutup...");
  pintuTerbuka = !pintuTerbuka;
} while (!pintuTerbuka);

console.log("Pintu perlintasan telah tertutup dengan aman.");

// Menggunakan function untuk menggabungkan beberapa tindakan
function perlintasanKereta() {
  if (adaKereta) {
    console.log("Hati-hati, ada kereta dua jalur!");
    
    if (lampuMerah && pintuTertutup) {
      console.log("Berhenti dan tunggu sampai kereta lewat.");
    } else {
      console.log("Lanjutkan perjalanan dengan hati-hati.");
    }
  } else {
    console.log("Tidak ada kereta, aman untuk melanjutkan perjalanan.");
  }
  
  switch (cuaca) {
    case "cerah":
      console.log("Cuaca cerah, cocok untuk piknik.");
      break;
    case "hujan":
      console.log("Sedang hujan, bawa payung!");
      break;
    case "berawan":
      console.log("Cuaca berawan, tetap waspada.");
      break;
    default:
      console.log("Cuaca tidak diketahui.");
  }
  
  for (let i = 10; i > 0; i--) {
    console.log("Kereta akan datang dalam " + i + " detik.");
  }
  
  while (!keretaLebih) {
    console.log("Menunggu kereta lewat...");
    waktuTunggu += 10;
    
    if (waktuTunggu >= 60) {
      keretaLebih = true;
    }
  }
  
  console.log("Kereta telah lewat, Anda dapat melanjutkan perjalanan.");
  
  do {
    console.log("Memeriksa pintu perlintasan...");
    pintuTerbuka = !pintuTerbuka;
  } while (!pintuTerbuka);
  
  console.log("Pintu perlintasan telah tertutup dengan aman.");
}

// Memanggil function perlintasanKereta untuk menjalankan seluruh proses
perlintasanKereta();
