export const trending = [
    {
        id: '001',
        title: "Harry Potter",
        subtitle: "and The Deathly Hallows",
        author: "J.K. Rowling",
        publisher: "Bloomsbury Publishing",
        url: "https://m.media-amazon.com/images/I/81Whkax7IGL._AC_UF1000,1000_QL80_.jpg",
        genre: ["Fantasy", "Magic"],
        language: "English",
        isbn: {
            isbn10: "1408855712",
            isbn13: "9781408855713",
        },
        description: `As he climbs into the sidecar of Hagrid's motorbike and takes to the skies, leaving Privet Drive for the last time, Harry Potter knows that Lord Voldemort and the Death Eaters are not far behind. The protective charm that has kept Harry safe until now is now broken, but he cannot keep hiding.
            The Dark Lord is breathing fear into everything Harry loves, and to stop him Harry will have to find and destroy the remaining Horcruxes. The final battle must begin – Harry must stand and face his enemy.`,
        get name() {
            return this.title+" "+this.subtitle;
        },
    },
    {
        id: '045',
        title: "Son of the Storm",
        subtitle: "",
        author: "Suyi Davies Okungbowa",
        publisher: "Orbit",
        url: "https://brittlepaper.com/wp-content/uploads/2021/06/81wazwmthal_custom-a049cb82b9d3d25d2729deb5a1ac5106b52ded22.jpeg",
        genre: ["Fantasy", "Sci-Fi"],
        language: "English",
        isbn: {
            isbn10: "0316428949",
            isbn13: "9780316428941",
        },
        description: `In the ancient city of Bassa, Danso is a clever scholar on the cusp of achieving greatness—only he doesn’t want it. Instead, he prefers to chase forbidden stories about what lies outside the city walls. The Bassai elite claim there is nothing of interest. The city’s immigrants are sworn to secrecy.
            But when Danso stumbles across a warrior wielding magic that shouldn’t exist, he’s put on a collision course with Bassa’s darkest secrets. Drawn into the city’s hidden history, he sets out on a journey beyond its borders. And the chaos left in the wake of his discovery threatens to destroy the empire.`,
        get name() {
            return this.title+" "+this.subtitle;
        },
    },
    {
        id: '067',
        title: "Tess of the Road",
        subtitle: "",
        author: "Rachel Hartman",
        publisher: "Random House",
        url: "https://i.pinimg.com/originals/f3/d4/44/f3d4442b84a0ecde1246ccdb6085e04e.jpg",
        genre: ["Adventure", "Fiction"],
        language: "English",
        isbn: {
            isbn13: "9781101931288",
        },
        description: `In the medieval kingdom of Goredd, women are expected to be ladies, men are their protectors, and dragons can be whomever they choose. Tess is none of those things. Tess is...different. She speaks out of turn, has wild ideas, and can't seem to keep away from trouble. Then Tess goes too far. What she's done is so disgraceful she can't even allow herself to think of it. Unfortunately, the past cannot be ignored. So Tess's family decides that the only path for her is a nunnery.
            But on the day she is to join the nuns, Tess chooses a different path for herself. She cuts her hair, pulls on her boots, and sets out on a journey. She's not running away; she's running toward something. What that something is, she doesn't know. Tess just sees the open road as a map to somewhere else--a life where she might belong.`,
        get name() {
            return this.title+" "+this.subtitle;
        },
    },
    {
        id: '101',
        title: "The Great Adventure of Sherlock Holmes",
        subtitle: "",
        author: "Arthur Conan Doyle",
        publisher: "Puffin Classics",
        url: "https://kbimages1-a.akamaihd.net/15bee909-5e30-4dc2-987c-70a45d88baa2/1200/1200/False/the-great-adventures-of-sherlock-holmes-1.jpg",
        genre: ["Detective", "Fiction"],
        language: "English",
        isbn: {
            isbn13: "9780141332499",
        },
        description: "From the strange case of 'The Red-Headed League' to the extraordinary tale of 'The Engineer's Thumb', Sherlock Holmes and his assistant Dr Watson grapple with treachery, murder, and ingenious crimes of all kinds. But no case is too challening for the immortal detective's unique power of deduction.",
        get name() {
            return this.title+" "+this.subtitle;
        },
    },
    {
        id: '115',
        title: "It Starts with Us",
        subtitle: "",
        author: "Colleen Hoover",
        publisher: null,
        url: "https://m.media-amazon.com/images/I/51VC+Vru96L._SY344_BO1,204,203,200_.jpg",
        genre: ["Romance"],
        language: "English",
        isbn: {
            isbn10: "1398518174",
            isbn13: "9781398518179",
        },
        description: null,
        get name() {
            return this.title+" "+this.subtitle;
        },
    },
    {
        id: '135',
        title: "The Red Pyramid",
        subtitle: "",
        author: "Rick Riordan",
        publisher: "Scholastic Inc.",
        url: "https://covers.openlibrary.org/b/id/13012187-L.jpg",
        genre: ["Adventure", "Fiction", "Magic"],
        language: "English",
        isbn: {
            isbn13: "9780545400169",
        },
        description: `Since their mother’s death, Carter and Sadie have become near strangers. While Sadie has lived with her grandparents in London, her brother has traveled the world with their father, the brilliant Egyptologist, Dr. Julius Kane.

        One night, Dr. Kane brings the siblings together for a “research experiment” at the British Museum, where he hopes to set things right for his family. Instead, he unleashes the Egyptian god Set, who banishes him to oblivion and forces the children to flee for their lives.
        
        Soon, Sadie and Carter discover that the gods of Egypt are waking, and the worst of them—Set—has his sights on the Kanes. To stop him, the siblings embark on a dangerous journey across the globe—a quest that brings them ever closer to the truth about their family, and their links to a secret order that has existed since the time of the pharaohs.`,
        get name() {
            return this.title+" "+this.subtitle;
        },
    },
]