document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('Right-clicking is disabled!');
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
        alert('Developer tools are disabled!');
    }
});


// Sample smartphone data
const smartphones = [
    {
        id: 1,
        name: "Moto Edge 50 Fusion",
        category: "budget",
        image: "img/motoedge50f.jpg",
        description: "50 MP Ultra Pixel OIS Camera, 4K Video Recording, 68 W TurboPower Charging, Snapdragon 7s Gen 2.",
        price: "Around 20,000",
        link: "https://amzn.to/42r8A1H"
    },
    {
        id: 2,
        name: "Oneplus Nord CE4",
        category: "budget",
        image: "img/oneplusnordce4.jpg",
        description: "Qualcomm Snapdragon 7 Gen 3, 100W SuperVOOC charging and 5500mAh Battery, SONY LYT-600 (IMX882) 50MP camera sensor with OIS.",
        price: "Around 21,000",
        link: "https://amzn.to/4aL45kJ"
    },
    {
        id: 3,
        name: "iQOO Neo 9 Pro",
        category: "mid-range",
        image: "img/iqooneo9pro.jpg",
        description: "A mid-range powerhouse with fast charging and 5G support.",
        price: "Around 35,000",
        link: "https://amzn.to/3Ej4QFh"
    },
    {
        id: 4,
        name: "iQOO 13",
        category: "premium",
        image: "img/iqoo13.jpg",
        description: "Snapdragon 8 Elite mobile platform with clock speed of 4.3GHz, 3Mn+ Antutu Score, World’s 1st Q10 2K 144hz display LTPO AMOLED, 1800nits HBM and 4500nits Local Peak Brightness,  6000mAh -3rd Generation silicon anode battery, Flagship 50MP Sony IMX921 VCS true color camera with 32MP front camera",
        price: "Around 50000",
        link: "https://amzn.to/4aQ93wt"
    },
    {
        id: 5,
        name: "Oneplus 13",
        category: "premium",
        image: "img/oneplus13.jpg",
        description: "5th-Gen Hasselblad Camera for Mobile combines a flagship 50MP triple camera system, OxygenOS 15 - Experience the power of all-new OnePlus AI, DisplayMate A++, 100% charge in 36 minutes, 50W wireless fast charging.",
        price: "Around 65000",
        link: "https://amzn.to/3WOrvjw"
    },
    {
        id: 5.1,
        name: "Samsung S23 Ultra",
        category: "premium",
        image: "img/ss23u.jpg",
        description: "Flagship at Killer price, Snapdragon 8 Gen 2 Mobile Platform for Galaxy, 200MP. Wow-worthy resolution, The built-in S Pen, Galaxy AI.",
        price: "Around 70000",
        link: "https://amzn.to/3Q7K91T"
    },
    {
        id: 6,
        name: "Apple iPhone 16 Pro max",
        category: "premium",
        image: "img/iphone16promax.jpg",
        description: "The latest iPhone with a stunning camera and premium performance.",
        price: "Around 1,30,000",
        link: "https://amzn.to/40vjWiE"
    }
    // Add more smartphone objects here
];

// Function to display smartphones based on category
function displaySmartphones(smartphonesList) {
    const smartphonesSection = document.getElementById("smartphones");
    smartphonesSection.innerHTML = ""; // Clear current content

    smartphonesList.forEach(smartphone => {
        const card = document.createElement("div");
        card.classList.add("smartphone-card");
        card.innerHTML = `
            <img src="${smartphone.image}" alt="${smartphone.name}">
            <div class="card-content">
                
                <h3><a href=${smartphone.link}>${smartphone.name}</a></h3>
                <p>${smartphone.description}</p>
                <p class="price">${smartphone.price}</p>
            </div>
        `;
        smartphonesSection.appendChild(card);
    });
}

// Function to filter smartphones by category
function filterByCategory(category) {
    const filteredSmartphones = smartphones.filter(smartphone => smartphone.category === category);
    displaySmartphones(filteredSmartphones);
}

// Search functionality
document.getElementById("search-bar").addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filteredSmartphones = smartphones.filter(smartphone =>
        smartphone.name.toLowerCase().includes(query) ||
        smartphone.description.toLowerCase().includes(query)
    );
    displaySmartphones(filteredSmartphones);
});

// Initial load: display all smartphones
displaySmartphones(smartphones);