const img = document.querySelector(".image");
let hasil = document.querySelector(".hasil");

const daftarImage = {
    img1: "./gallery/gallery-1.jpg",
    img2: "./gallery/gallery-2.jpg",
    img3: "./gallery/gallery-3.jpg",
    img4: "./gallery/gallery-4.jpg",
    img5: "./gallery/gallery-5.jpg",
    img6: "./gallery/gallery-6.jpg",
    img7: "./gallery/gallery-7.jpg",
    img8: "./gallery/gallery-8.jpg",
    img9: "./gallery/gallery-9.jpg",
    img10: "./gallery/gallery-10.jpg",
};

const {
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10
} = daftarImage;

img.addEventListener("change", () => {
    for (const i in daftarImage) {
        if (img.value == i) {
            alert(`Gambar ${daftarImage[i]}`);
           hasil.innerHTML = `<img src="${daftarImage[i]}" />`;
        }
    }
});