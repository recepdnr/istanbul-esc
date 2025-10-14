
// İlan Bilgileri - 02.10.2025 14:11:40
const partnersData = {
    adSoyad: "aslan max",
    yaş: "34",
    boy: "160",
    cinsiyet: "erkek",
    sehir: "istanbul",
    phoneNumber: "5347793580",
    aciklama: "5347793580",
    tarih: "2025-10-02T11:11:40.941Z"
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
