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

// Sample Gadgets data
const Gadgets = [
    {
        id: 1,
        name: "Good Buget Projector",
        category: "home",
        image: "img/GoodBugetProjector.jpg",
        description: "Best in Segment Brightness, Latest Android 13.0 OS, Next Gen WiFi-6 and Dual Band Wifi, Bluetooth 5.0, Auto Keystone, 180° Rotation, Built in Youtube, Netflix, Prime Video etc, 720P HD Resolution with 4K Support, 270° Rotatable Design, Auto Keystone, Wireless Screen Mirroring, 3W Built-In Stereo Speaker.",
        price: "Around 6000",
        link: "https://amzn.to/42w7TUE"
    },
    {
        id: 2,
        name: "Best Trolley Bag",
        category: "travel",
        image: "img/TrolleyBag.jpg",
        description: "Safari Pentagon 65 Cms Medium Check-in Polypropylene Hardshell Sided 4 Wheels 360 Degree Rotation Luggage/Suitcase/Inline Trolley Bag.",
        price: "Around 2500",
        link: "https://amzn.to/4hISgh0"
    },
    {
        id: 3,
        name: "Best Gaming Joy Pad",
        category: "game",
        image: "img/bestjoypad.jpg",
        description: "Ergonomic Design and Rubbersied Textured Sticks for enhanced Grip, Pressure Sensitive Analog Triggers and LED Backlit Buttons. Supports Xinput and D Input.",
        price: "Around 1200",
        link: "https://amzn.to/4hOU5ck"
    },
    {
        id: 4,
        name: "Best Gaming Mouse",
        category: "game",
        image: "img/bestmouse.jpg",
        description: "Customise your gaming setup with 16 million Prism RGB lighting options with music sync mode, offering customizable DPI settings from 200 to 12800.",
        price: "Around 500",
        link: "https://amzn.to/3QaaeNQ"
    },
    {
        id: 5,
        name: "Best Tablet",
        category: "game",
        image: "img/besttablet.jpg",
        description: "Snapdragon 870 Octa-Core Processor | Adreno 650 | Qualcomm AI engine | LPDDR5 RAM | UFS 3.1, 144Hz 7-Stage Refresh Rate | 27.9cm(11) Display Tablet | 2.8K Resolution | 1 Billion Colors | 2880*1800 High Resolution, Quad Speakers with Dolby Atmos",
        price: "Around 20000",
        link: "https://amzn.to/3Qtkt01"
    },
    {
        id: 5.1,
        name: "Best Tablet",
        category: "game",
        image: "img/xioamip7.jpg",
        description: "3.2K QHD+ display, Snapdragon 7+ Gen 3, 2x better performance, it supports LPDDR5X and UFS 4.0",
        price: "Around 25000",
        link: "https://amzn.to/42NeUke"
    },
    {
        id: 5.2,
        name: "Best Earbuds",
        category: "sound",
        image: "img/realmeba6.jpg",
        description: "50dB Smart Active Noise Cancellation (ANC) | Hi-Res Certified with LHDC 5.0 | 12.4mm Deep Bass Driver, 55ms Super Low Latency | Bluetooth 5.3",
        price: "Around 3000",
        link: "https://amzn.to/4hEeIrM"
    },
    {
        id: 5.3,
        name: "Best Over-Ear",
        category: "sound",
        image: "img/soundcq20i.jpg",
        description: "With 40 hours of battery life in ANC mode and 60 hours in normal mode,  soundcore app to refine the sound with the adjustable EQ and 22 preset options, Q20i only takes 5 minutes of charging time to give you another 4 hours of playtime",
        price: "Around 4500",
        link: "https://amzn.to/4hs4NpB"
    },
    {
        id: 6,
        name: "Best TV",
        category: "home",
        image: "img/besttv.jpg",
        description: "Ultra QLED | Ai Picture Optimisation | 4K HDR | 120Hz VRR | HDR10- HLG | MEMC | Dolby Vision | ALLM",
        price: "Around 30000",
        link: "https://amzn.to/4gyuWlk"
    },
    {
        id: 7,
        name: "Smart Plug",
        category: "home",
        image: "img/smartplug.jpg",
        description: "Control electrical devices from anywhere with the Wipro Smart app on your smartphone, Monitor energy consumption of your device, Voice Control – Voice Control device connected with Smart Plug via Alexa & Google Assistant",
        price: "Around 900",
        link: "https://amzn.to/4b6U6GJ"
    },
    {
        id: 8,
        name: "Tyre Inflator",
        category: "travel",
        image: "img/tyreinflator.jpg",
        description: "CORDLESS & EASY-TO-CARRY: The portable air pump features a cordless and compact design, which allows you to take it anywhere and inflate items wirelessly.",
        price: "Around 2500",
        link: "https://amzn.to/3Q7HbKJ"
    },
    {
        id: 9,
        name: "Best Helmet",
        category: "travel",
        image: "img/besthelmet.jpg",
        description: "ISI Certified, High Impact Resistant Thermoplastic shell, Breathable Padding and Neck Protector For Extra Comfort, Quick Release Micro Metric Buckle.",
        price: "Around 1500",
        link: "https://amzn.to/4hHYoGg"
    },
    {
        id: 10,
        name: "Push Tap Light",
        category: "home",
        image: "img/pushtaplight.jpg",
        description: "Portable Under Cabinet Lighting AAA Battery Operated, Just press the center lens of the LED push light.",
        price: "Around 500",
        link: "https://amzn.to/42KMebq"
    },
    {
        id: 11,
        name: "Water Bottle (SS)",
        category: "home",
        image: "img/waterbottle.jpg",
        description: "Stainless Steel water bottle set(3 Nos) for home and office use.",
        price: "Around 600",
        link: "https://amzn.to/3Q8RFJW"
    }
    
    // Add more Gadgets objects here
];

// Function to display Gadgets based on category
function displayGadgets(GadgetsList) {
    const GadgetsSection = document.getElementById("Gadgets");
    GadgetsSection.innerHTML = ""; // Clear current content

    GadgetsList.forEach(Gadgets => {
        const card = document.createElement("div");
        card.classList.add("Gadgets-card");
        card.innerHTML = `
            <img src="${Gadgets.image}" alt="${Gadgets.name}">
            <div class="card-content">
                
                <h3><a href=${Gadgets.link}>${Gadgets.name}</a></h3>
                <p>${Gadgets.description}</p>
                <p class="price">${Gadgets.price}</p>
            </div>
        `;
        GadgetsSection.appendChild(card);
    });
}

// Function to filter Gadgets by category
function filterByCategory(category) {
    const filteredGadgets = Gadgets.filter(Gadgets => Gadgets.category === category);
    displayGadgets(filteredGadgets);
}

// Search functionality
document.getElementById("search-bar").addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filteredGadgets = Gadgets.filter(Gadgets =>
        Gadgets.name.toLowerCase().includes(query) ||
        Gadgets.description.toLowerCase().includes(query)
    );
    displayGadgets(filteredGadgets);
});

// Initial load: display all Gadgets
displayGadgets(Gadgets);