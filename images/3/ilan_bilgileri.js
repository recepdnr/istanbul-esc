
// İlan Bilgileri - 14.10.2025 13:12:51
const partnersData = {
    adSoyad: "ad soyad",
    yaş: "25",
    boy: "170",
    cinsiyet: "kadın",
    sehir: "istanbul",
    phoneNumber: "5347793580",
    aciklama: "5347793580",
    tarih: "2025-10-14T10:12:51.475Z"
};

// İlanı görüntüleme fonksiyonu
function ilaniGoster() {
    console.log('İlan Bilgileri:');
    console.log('Ad Soyad:', partnersData.adSoyad);
    console.log('Yaş:', partnersData.yaş);
    console.log('boy:', partnersData.boy);
    console.log('Cinsiyet:', partnersData.cinsiyet);
    console.log('Şehir:', partnersData.sehir);
    console.log('phoneNumber:', partnersData.phoneNumber);
    console.log('Açıklama:', partnersData.aciklama);
    console.log('Tarih:', partnersData.tarih);
}

// Otomatik olarak ilanı göster
ilaniGoster();
