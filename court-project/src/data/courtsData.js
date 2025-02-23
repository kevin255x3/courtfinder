// src/data/courtsData.js
export const courtsData = [
    {
        id: "hickey-park",
        title: "Hickey Park",
        location: "Coquitlam",
        type: "Outdoor Basketball Court",
        mainImage: "/images/hickey.jpg",
        images: [
            {
                id: 1,
                url: "/images/hickey.jpg",
                alt: "Main court view"
            },
            {
                id: 2,
                url: "/images/hickey2.jpg",
                alt: "Side court view"
            },
            {
                id: 3,
                url: "/images/hickey3.jpeg",
                alt: "Night view"
            }
        ],
        maps: {
            apple: "https://maps.apple.com/?address=320%20Hickey%20Dr,%20Coquitlam%20BC%20V3K%206G1,%20Canada&auid=16978735468151101715&ll=49.244979,-122.818707&lsp=9902&q=Hickey%20Park",
            google: "https://maps.app.goo.gl/Fsd4b1EZptuALwBZA",
            directions: "https://www.coquitlam.ca/557/Hickey-Park"
        },
        details: {
            surface: "Concrete",
            hoops: "6 hoops (3 full courts)",
            lighting: "Yes - until 10pm",
            parking: "Free parking available"
        },
        status: "Open",
        features: ["Lighting", "Water Fountain", "Free Parking", "Public Washroom"]
    },
    {
        id: "north-surrey",
        title: "North Surrey Recreation Centre",
        location: "Scott Road",
        type: "Outdoor Basketball Court",
        mainImage: "/images/ns.jpeg",
        images: [
            {
                id: 1,
                url: "/images/ns.jpeg",
                alt: "Main court view"
            },
            {
                id: 2,
                url: "/images/ns2.jpeg",
                alt: "Side court view"
            },
            {
                id: 3,
                url: "/images/ns3.png",
                alt: "Side court view"
            },

        ],
        maps: {
            apple: "https://maps.apple.com/?address=10950%20126A%20St,%20Surrey%20BC%20V3V%200E5,%20Canada&auid=3216311707715278517&ll=49.201757,-122.870600&lsp=9902&q=North%20Surrey%20Sport%20%26%20Ice%20Complex",
            google: "https://maps.app.goo.gl/xRjbhioWbUXJzaCS8",

        },
        details: {
            surface: "Concrete",
            hoops: "4 hoops (2 full courts)",
            lighting: "Yes",
            parking: "Free parking available"
        },
        status: "Open",
        features: ["Lighting", "Water Fountain", "Free Parking", "Recreation Centre Access"]
    },
    {
        id: "south-arm",
        title: "South Arm Community Park",
        location: "Richmond",
        type: "Outdoor Basketball Court",
        mainImage: "/images/southarm.jpeg",
        images: [
            {
                id: 1,
                url: "/images/southarm.jpeg",
                alt: "Main court view"
            },
            {
                id: 2,
                url: "/images/southarm2.jpeg",
                alt: "Side court view"
            },
            {
                id: 3,
                url: "/images/southarm3.jpeg",
                alt: "Night view"
            }
        ],
        maps: {
            apple: "https://maps.apple.com/?address=8680%20Williams%20Rd,%20Richmond%20BC%20V7A%201G6,%20Canada&auid=16605093676645497760&ll=49.140382,-123.128442&lsp=9902&q=South%20Arm%20Community%20Park",
            google: "https://maps.app.goo.gl/HzY9WXQHTnxgWQkp8",
            directions: "https://www.coquitlam.ca/557/Hickey-Park"
        },
        details: {
            surface: "Concrete",
            hoops: "4 hoops (2 full courts)",
            lighting: "Yes",
            parking: "Available"
        },
        status: "Open",
        features: ["Lighting", "Water Fountain", "Free Parking", "Community Centre"]
    },
    {
        id: "the-cage",
        title: "The Cage",
        location: "Guildford",
        type: "Outdoor Basketball Court",
        mainImage: "/images/thecage.jpeg",
        images: [
            {
                id: 1,
                url: "/images/thecage.jpeg",
                alt: "Main court view"
            },
            {
                id: 2,
                url: "/images/thecage2.jpeg",
                alt: "Side court view"
            },
            {
                id: 3,
                url: "/images/thecage3.png",
                alt: "Side court view"
            },

        ],
        maps: {
            apple: "https://maps.apple.com/?address=10310%20154%20St,%20Surrey%20BC%20V3R%205Y7,%20Canada&auid=11976176300672725386&ll=49.188856,-122.793868&lsp=9902&q=Guildford%20Heights%20Park",
            google: "https://maps.app.goo.gl/aYuX2WSZPGyf2nGr5",
            directions: "https://www.coquitlam.ca/557/Hickey-Park"
        },
        details: {
            surface: "Concrete",
            hoops: "2 hoops (1 full court)",
            lighting: "No",
            parking: "Street parking"
        },
        status: "Open",
        features: ["Street Parking", "Fenced Court"]
    },
    {
        id: "hazelgrove",
        title: "Hazelgrove Park",
        location: "Langley",
        type: "Outdoor Basketball Court",
        mainImage: "/images/hazelgrove.jpeg",
        images: [
            {
                id: 1,
                url: "/images/hazelgrove.jpeg",
                alt: "Main court view"
            },
            {
                id: 2,
                url: "/images/hazelgrove2.webp",
                alt: "Side court view"
            },
            {
                id: 3,
                url: "/images/hazelgrove3.webp",
                alt: "Night view"
            }
        ],
        maps: {
            apple: "https://maps.apple.com/?address=7080%20190%20St,%20Surrey%20BC%20V4N%205N9,%20Canada&auid=7377522511417094284&ll=49.132008,-122.695975&lsp=9902&q=Hazelgrove%20Park",
            google: "https://maps.app.goo.gl/TRXa6D1AXuBvWukb6",
            directions: "https://www.coquitlam.ca/557/Hickey-Park"
        },
        details: {
            surface: "Concrete",
            hoops: "2 hoops (1 full court)",
            lighting: "Until 9pm",
            parking: "Available"
        },
        status: "Open",
        features: ["Lighting", "Water Fountain", "Playground Nearby"]
    },
    {
        id: "steve-nash",
        title: "Steve Nash Family Court",
        location: "Vancouver",
        type: "Outdoor Basketball Court",
        mainImage: "/images/stevenash.jpeg",
        images: [
            {
                id: 1,
                url: "/images/stevenash.jpeg",
                alt: "Main court view"
            },
            {
                id: 2,
                url: "/images/stevenash2.jpeg",
                alt: "Side court view"
            },
            {
                id: 3,
                url: "/images/stevenash3.jpeg",
                alt: "Night view"
            }
        ],
        maps: {
            apple: "https://maps.apple.com/?address=2901%20E%20Hastings%20St,%20Vancouver%20BC%20V5K%205J1,%20Canada&auid=9910937970089175660&ll=49.282966,-123.038120&lsp=9902&q=Hastings%20Park",
            google: "https://maps.app.goo.gl/dBdHDwfexmV2wXY47",
            directions: "https://www.coquitlam.ca/557/Hickey-Park"
        },
        details: {
            surface: "Sport Court",
            hoops: "2 hoops (1 full court)",
            lighting: "Yes",
            parking: "Street parking"
        },
        status: "Open",
        features: ["Lighting", "Water Fountain", "Street Parking"]
    },
    {
        id: "coopers-park",
        title: "Cooper's Park",
        location: "Vancouver",
        type: "Outdoor Basketball Court",
        mainImage: "/images/cooper.jpeg",
        images: [
            {
                id: 1,
                url: "/images/cooper.jpeg",
                alt: "Main court view"
            },
            {
                id: 2,
                url: "/images/cooper2.jpeg",
                alt: "Side court view"
            },
            {
                id: 3,
                url: "/images/cooper3.jpeg",
                alt: "Night view"
            }
        ],
        maps: {
            apple: "https://maps.apple.com/?address=1020%20Marinaside%20Cres,%20Vancouver%20BC%20V6Z%203A2,%20Canada&auid=12531092086623860105&ll=49.273069,-123.115871&lsp=9902&q=Coopers'%20Park",
            google: "https://maps.app.goo.gl/PFT7kdNSjg81VWK67",
            directions: "https://www.coquitlam.ca/557/Hickey-Park"
        },
        details: {
            surface: "Sport Court",
            hoops: "2 hoops (1 full court)",
            lighting: "Yes",
            parking: "Nearby parking"
        },
        status: "Open",
        features: ["Lighting", "Water Fountain", "Street Parking", "Seawall Access"]
    },
    {
        id: "the-fields",
        title: "The Fields",
        location: "Richmond Oval",
        type: "Outdoor Basketball Court",
        mainImage: "/images/thefields.jpg",
        images: [
            {
                id: 1,
                url: "/images/thefields.jpg",
                alt: "Main court view"
            },
            {
                id: 2,
                url: "/images/thefields2.jpg",
                alt: "Side court view"
            },
            {
                id: 3,
                url: "/images/hickey3.jpeg",
                alt: "Night view"
            }
        ],
        maps: {
            apple: "https://maps.apple.com/?address=6111%20River%20Rd,%20Richmond%20BC%20V7C%200A2,%20Canada&auid=5726939589145986835&ll=49.174773,-123.151751&lsp=9902&q=Richmond%20Olympic%20Oval",
            google: "https://maps.app.goo.gl/caTVcQEZoLdBPfQF7",
            directions: "https://www.coquitlam.ca/557/Hickey-Park"
        },
        details: {
            surface: "Sport Court",
            hoops: "4 hoops (2 full courts)",
            lighting: "Yes",
            parking: "Paid parking available"
        },
        status: "Open",
        features: ["Lighting", "Water Fountain", "Paid Parking", "Richmond Oval Access"]
    },
    {
        id: "kits",
        title: "Kits",
        location: "Kitsilano Beach",
        type: "Outdoor Basketball Court",
        mainImage: "/images/kits.jpg",
        images: [
            {
                id: 1,
                url: "/images/kits.jpg",
                alt: "Main court view"
            },
            {
                id: 2,
                url: "/images/kits2.jpeg",
                alt: "Side court view"
            },
            {
                id: 3,
                url: "/images/kits3.png",
                alt: "Night view"
            }
        ],
        maps: {
            apple: "https://maps.apple.com/?address=1305%20Arbutus%20St,%20Vancouver%20BC%20V6J%205N2,%20Canada&auid=10845381304772513904&ll=49.276233,-123.152959&lsp=9902&q=Kitsilano%20Beach",
            google: "https://maps.app.goo.gl/V9fm3tj3eRuLtWdc6",
            directions: "https://www.coquitlam.ca/557/Hickey-Park"
        },
        details: {
            surface: "Sport Court",
            hoops: "4 hoops (2 full courts)",
            lighting: "Until sunset",
            parking: "Paid parking"
        },
        status: "Open",
        features: ["Beach Access", "Water Fountain", "Paid Parking", "Public Washroom"]
    }
];