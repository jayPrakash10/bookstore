export const allBooks = [
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
        id: '002',
        title: "Harry Potter",
        subtitle: "and The Chamber of Secrets",
        author: "J.K. Rowling",
        publisher: "Bloomsbury Publishing",
        url: "https://m.media-amazon.com/images/I/81THMAxo+pL._AC_UF1000,1000_QL80_.jpg",
        genre: ["Fantasy", "Magic"],
        language: "English",
        isbn: {
            isbn10: "1408855666",
            isbn13: "9781408855669",
        },
        description: `Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car!
            Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors – and then the attacks start. Students are found as though turned to stone … Dobby's sinister predictions seem to be coming true.`,
        get name() {
            return this.title+" "+this.subtitle;
        },
    },
    {
        id: '003',
        title: "Harry Potter",
        subtitle: "and The Half-Blood Prince",
        author: "J.K. Rowling",
        publisher: "Bloomsbury Publishing",
        url: "https://m.media-amazon.com/images/I/81p2+4nYtkL._AC_UF1000,1000_QL80_.jpg",
        genre: ["Fantasy", "Magic"],
        language: "English",
        isbn: {
            isbn10: "1408855704",
            isbn13: "9781408855706",
        },
        description: `When Dumbledore arrives at Privet Drive one summer night to collect Harry Potter, his wand hand is blackened and shrivelled, but he does not reveal why. Secrets and suspicion are spreading through the wizarding world, and Hogwarts itself is not safe.
            Harry is convinced that Malfoy bears the Dark Mark: there is a Death Eater amongst them. Harry will need powerful magic and true friends as he explores Voldemort's darkest secrets, and Dumbledore prepares him to face his destiny.`,
        get name() {
            return this.title+" "+this.subtitle;
        },
    },
    {
        id: '040',
        title: "Half Girlfriend",
        subtitle: "",
        author: "Chetan Bhagat",
        publisher: "Rupa & Co.",
        url: "https://rukminim2.flixcart.com/image/850/1000/k3g73bk0/book/7/6/3/half-girlfriend-original-imafmkrfafssnhts.jpeg?q=90",
        genre: ["Fiction", "Romance"],
        language: "Hindi",
        isbn: {
            isbn10: "8129136767",
            isbn13: "9788129136763",
        },
        description: `The romantic novel is a moving modern love story between a Bihari boy Madhav and Richa, a beautiful rich lass from Delhi. Both of them happen to be complete opposites in personality and tastes from each other. Madhav is a simple Indian guy, who has trouble speaking English, whereas Richa the rich girl, is what most guys dream about. She is young, charming, classy and sophisticated. Both of them happened to be in the same college, St. Stephen’s, Delhi. Due to their association with the college’s Basketball team, they slowly become close friends. Most youngsters will related with their sweet and lively bond of friendship. With time Madhav develops feelings for Riya. But she was reluctant to commit and didn’t want to be in any sort of relationships. She tells him to keep the relationship with her that of a friend, but Madhav is keen to have her as his romantic girlfriend. So, Riya comes up with a suggestion and agrees to be a ‘Half Girlfriend’. This clearly means their relation is more than friends, but still not a complete relationship. The twist comes when both have part their ways due to their own circumstances. And fate had different plans for them. They meet again after tasting of life’s bitter experiences.`,
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
        id: '079',
        title: "2 States",
        subtitle: "The story of My Marriage",
        author: "Chetan Bhagat",
        publisher: "Rupa & Co.",
        url: "https://m.media-amazon.com/images/I/714GGM7WK7L._AC_UF1000,1000_QL80_.jpg",
        genre: null,
        language: "English",
        isbn: {
            isbn10: "8129135523",
            isbn13: "9788129135520",
        },
        description: "Its a very nice book...a sweet romantic book....its about Krish from Punjab and Ananya from south India....they want to get married but their parents don't agree......this story is about how they convince each others parents for their marriage....author shows their whole experience very immpresively.....best of Chetan Bhagat",
        get name() {
            return this.title+" "+this.subtitle;
        },
    },
    {
        id: '080',
        title: "Gaban",
        subtitle: "",
        author: "Premchand",
        publisher: "Maple Press",
        url: "https://m.media-amazon.com/images/I/71cx7DCQblL._AC_UF1000,1000_QL80_.jpg",
        genre: ["Novel"],
        language: "Hindi",
        isbn: null,
        description: "Gaban is a Hindi novel by Munshi Premchand, written in 1931. Through this novel, he tries to show the falling moral values among lower middle class Indian youth in the era of British India, and to what heights a person can get to, to reach the world of elite class,and maintain the false image as a rich person. It tells the story of Ramanath, a handsome, pleasure seeking, boastful, but a morally weak person, who tries to make his wife Jalpa, happy by gifting her jewelry which he can't really afford to buy via his meager salary, and then gets engulfed in a web of debts, which ultimately forces him to commit embezzlement.",
        get name() {
            return this.title+" "+this.subtitle;
        },
    },
    {
        id: '085',
        title: "Karmbhoomi",
        subtitle: "",
        author: "Premchand",
        publisher: "Maple Press",
        url: "https://www.myink.in/wp-content/uploads/2020/04/karambhumi-munshi-premchand-best-hindi-novels.jpg",
        genre: ["Novel"],
        language: "Hindi",
        isbn: null,
        description: null,
        get name() {
            return this.title+" "+this.subtitle;
        },
    },
    {
        id: '093',
        title: "Godaan",
        subtitle: "",
        author: "Premchand",
        publisher: "Maple Press",
        url: "https://edtimes.in/wp-content/uploads/2015/02/Godaan_1406366479.jpg",
        genre: ["Fiction"],
        language: "Hindi",
        isbn: null,
        description: null,
        get name() {
            return this.title+" "+this.subtitle;
        },
    },
    {
        id: '097',
        title: "Gora",
        subtitle: "",
        author: "Ravindranath Tagor",
        publisher: "Rajpal and Sons",
        url: "https://m.media-amazon.com/images/I/71eX1eNjknL._AC_UF1000,1000_QL80_.jpg",
        genre: null,
        language: "Hindi",
        isbn: {
            isbn13: "9789350643594"
        },
        description: null,
        get name() {
            return this.title+" "+this.subtitle;
        },
    },
    {
        id: '101',
        title: "The Adventure of Sherlock Holmes",
        subtitle: "",
        author: "Chris Sasaki",
        publisher: null,
        url: "https://covers.openlibrary.org/b/id/8355967-M.jpg",
        genre: ["Detective", "Fiction", "Mystery"],
        language: "English",
        isbn: {
            isbn13: "9781402712173",
        },
        description: "Why does a burglar keep smashing statues of Napoleon? Where is the blue carbuncle? And who is the mysterious Irene Adler? Join Sherlok Holmes and his trusted friend Dr. Watson as they unravel the truth behind these cases and many more.",
        get name() {
            return this.title+" "+this.subtitle;
        },
    },
    {
        id: '110',
        title: "The Love Hypothesis",
        subtitle: "",
        author: "Ali Hazelwood",
        publisher: "Sphere",
        url: "https://m.media-amazon.com/images/I/51qnj1cs7gL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
        genre: ["Romance"],
        language: "English",
        isbn: {
            isbn10: "0593336828",
        },
        description: null,
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
        id: '118',
        title: "The Wedding Date",
        subtitle: "",
        author: "Jasmine Guillory",
        publisher: "",
        url: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1587036166-51Ldmp-W8VL.jpg?crop=1xw:0.999xh;center,top&resize=980:*",
        genre: ["Romance"],
        language: "English",
        isbn: {
            isbn10: "0399587667",
            isbn13: "9780399587665"
        },
        description: null,
        get name() {
            return this.title+" "+this.subtitle;
        },
    },
    {
        id: '124',
        title: "October Junction",
        subtitle: "",
        author: "Divya Prakash Dubey",
        publisher: "Hind Yugm",
        url: "https://m.media-amazon.com/images/I/416WCADPRPL._SX326_BO1,204,203,200_.jpg",
        genre: ["Fiction"],
        language: "Hindi",
        isbn: {
            isbn10: "9387464407"
        },
        description: null,
        get name() {
            return this.title+" "+this.subtitle;
        },
    },
    {
        id: '128',
        title: "A Gentle Reminder",
        subtitle: "",
        author: "Bianca Sparacino",
        publisher: "Thought Catalog Books",
        url: "https://covers.openlibrary.org/b/id/13131619-L.jpg",
        genre: null,
        language: "English",
        isbn: {
            isbn13: "9781949759297",
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
    {
        id: '144',
        title: "Divergent",
        subtitle: "",
        author: "Veronica Roth",
        publisher: "Katherine Tegen Books",
        url: "https://covers.openlibrary.org/b/id/13274505-L.jpg",
        genre: null,
        language: "English",
        isbn: {
            isbn10: "0062024035",
        },
        decription: null,
        get name() {
            return this.title+" "+this.subtitle;
        },
    },
    {
        id: '147',
        title: "Ibnebatuti",
        subtitle: "",
        author: "Divya Prakash Dubey",
        publisher: "Hindi Yugm",
        price: null,
        url: "https://m.media-amazon.com/images/I/416Or6xALIL._SX323_BO1,204,203,200_.jpg",
        genre: null,
        language: "Hindi",
        isbn: {
            isbn10: "9387464954",
            isbn13: "9789387464957",
        },
        description: null,
        get name() {
            return this.title+" "+this.subtitle;
        },
    },
    {
        id: '145',
        title: "",
        subtitle: "",
        author: "",
        publisher: null,
        price: null,
        url: null,
        genre: null,
        language: null,
        isbn: null,
        description: null,
        get name() {
            return this.title+" "+this.subtitle;
        },
    },
]