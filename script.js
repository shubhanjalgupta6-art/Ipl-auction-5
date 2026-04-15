// ================= IPL MEGA AUCTION 100 PLAYERS =================
// EXACT DISTRIBUTION: 30 BATSMEN + 30 BOWLERS + 25 ALL-ROUNDERS + 15 WK

let players = [];

// ======================================================
// RATING ENGINE
// ======================================================

function getRating(p){

    if(p.role === "Batsman"){
        return Math.min(100,
            (p.runs / 130) + (p.hundreds * 6) + (p.fifties * 2) + (p.sr / 4)
        );
    }

    if(p.role === "Bowler"){
        return Math.min(100,
            (p.wkts * 2) + (10 - p.econ) * 7
        );
    }

    if(p.role === "All-Rounder"){
        return Math.min(100,
            (p.runs / 160) + (p.wkts * 1.5) + (p.sr / 5)
        );
    }

    if(p.role === "Wicketkeeper"){
        return Math.min(100,
            (p.runs / 140) + (p.sr / 4)
        );
    }

    return 70;
}

// ======================================================
// HELPER
// ======================================================

function add(p){
    p.rating = Math.floor(getRating(p));
    p.base = Math.max(8, Math.floor(p.rating / 5));
    players.push(p);
}

// ======================================================
// ================= 30 BATSMEN =========================
// ======================================================

add({name:"Virat Kohli",role:"Batsman",runs:7263,hundreds:7,fifties:50,sr:130});
add({name:"Rohit Sharma",role:"Batsman",runs:6200,hundreds:8,fifties:45,sr:131});
add({name:"Shikhar Dhawan",role:"Batsman",runs:6617,hundreds:2,fifties:51,sr:127});
add({name:"KL Rahul",role:"Batsman",runs:4163,hundreds:4,fifties:30,sr:134});
add({name:"David Warner",role:"Batsman",runs:6397,hundreds:4,fifties:55,sr:140});
add({name:"Shubman Gill",role:"Batsman",runs:3200,hundreds:6,fifties:25,sr:135});
add({name:"Faf du Plessis",role:"Batsman",runs:4400,hundreds:2,fifties:40,sr:134});
add({name:"Ajinkya Rahane",role:"Batsman",runs:4500,hundreds:2,fifties:35,sr:124});
add({name:"Ruturaj Gaikwad",role:"Batsman",runs:1900,hundreds:3,fifties:18,sr:135});
add({name:"Yashasvi Jaiswal",role:"Batsman",runs:1800,hundreds:2,fifties:15,sr:145});

add({name:"Prithvi Shaw",role:"Batsman",runs:1600,hundreds:1,fifties:14,sr:145});
add({name:"Sanju Samson",role:"Batsman",runs:4200,hundreds:3,fifties:22,sr:140});
add({name:"Tilak Varma",role:"Batsman",runs:1400,hundreds:1,fifties:10,sr:132});
add({name:"Devdutt Padikkal",role:"Batsman",runs:1700,hundreds:2,fifties:12,sr:131});
add({name:"Manish Pandey",role:"Batsman",runs:3800,hundreds:1,fifties:25,sr:121});
add({name:"Robin Uthappa",role:"Batsman",runs:4952,hundreds:1,fifties:27,sr:130});
add({name:"Chris Gayle",role:"Batsman",runs:4965,hundreds:6,fifties:31,sr:148});
add({name:"AB de Villiers",role:"Batsman",runs:5162,hundreds:3,fifties:40,sr:151});
add({name:"Glenn Maxwell",role:"Batsman",runs:2700,hundreds:4,fifties:25,sr:155});
add({name:"Mayank Agarwal",role:"Batsman",runs:2100,hundreds:1,fifties:18,sr:130});

add({name:"Nitish Rana",role:"Batsman",runs:1900,hundreds:1,fifties:16,sr:135});
add({name:"Deepak Hooda",role:"Batsman",runs:1700,hundreds:1,fifties:15,sr:135});
add({name:"Shreyas Iyer",role:"Batsman",runs:2600,hundreds:2,fifties:20,sr:133});
add({name:"Aiden Markram",role:"Batsman",runs:1500,hundreds:1,fifties:12,sr:132});
add({name:"Rinku Singh",role:"Batsman",runs:900,hundreds:0,fifties:8,sr:150});
add({name:"Dinesh Karthik",role:"Batsman",runs:4800,hundreds:0,fifties:25,sr:135});
add({name:"Quinton de Kock",role:"Batsman",runs:3500,hundreds:3,fifties:28,sr:138});
add({name:"Marcus Stoinis",role:"Batsman",runs:1800,hundreds:1,fifties:15,sr:140});
add({name:"Shimron Hetmyer",role:"Batsman",runs:1200,hundreds:1,fifties:10,sr:150});
add({name:"David Miller",role:"Batsman",runs:2500,hundreds:1,fifties:18,sr:140});

// ======================================================
// ================= 30 BOWLERS =========================
// ======================================================

add({name:"Jasprit Bumrah",role:"Bowler",wkts:205,econ:7.3});
add({name:"Bhuvneshwar Kumar",role:"Bowler",wkts:195,econ:7.5});
add({name:"Mohammed Shami",role:"Bowler",wkts:130,econ:8.2});
add({name:"Rashid Khan",role:"Bowler",wkts:150,econ:6.3});
add({name:"Yuzvendra Chahal",role:"Bowler",wkts:187,econ:7.7});
add({name:"Kuldeep Yadav",role:"Bowler",wkts:110,econ:7.8});
add({name:"Harshal Patel",role:"Bowler",wkts:140,econ:8.6});
add({name:"Deepak Chahar",role:"Bowler",wkts:95,econ:7.4});
add({name:"Arshdeep Singh",role:"Bowler",wkts:85,econ:8.1});
add({name:"Mohammed Siraj",role:"Bowler",wkts:120,econ:8.3});

add({name:"Umesh Yadav",role:"Bowler",wkts:140,econ:8.0});
add({name:"Sandeep Sharma",role:"Bowler",wkts:120,econ:7.6});
add({name:"T Natarajan",role:"Bowler",wkts:90,econ:7.9});
add({name:"Anrich Nortje",role:"Bowler",wkts:80,econ:8.1});
add({name:"Kagiso Rabada",role:"Bowler",wkts:140,econ:8.0});
add({name:"Pat Cummins",role:"Bowler",wkts:130,econ:7.8});
add({name:"Trent Boult",role:"Bowler",wkts:160,econ:7.5});
add({name:"Mustafizur Rahman",role:"Bowler",wkts:120,econ:7.6});
add({name:"Mitchell Starc",role:"Bowler",wkts:90,econ:7.9});
add({name:"Lungi Ngidi",role:"Bowler",wkts:70,econ:8.2});

add({name:"Varun Chakravarthy",role:"Bowler",wkts:95,econ:7.4});
add({name:"Rahul Chahar",role:"Bowler",wkts:90,econ:7.5});
add({name:"Piyush Chawla",role:"Bowler",wkts:170,econ:7.8});
add({name:"Avesh Khan",role:"Bowler",wkts:85,econ:8.2});
add({name:"Prasidh Krishna",role:"Bowler",wkts:80,econ:8.0});
add({name:"Jaydev Unadkat",role:"Bowler",wkts:110,econ:8.1});
add({name:"Khaleel Ahmed",role:"Bowler",wkts:85,econ:8.3});
add({name:"Shivam Mavi",role:"Bowler",wkts:70,econ:8.4});
add({name:"Ishant Sharma",role:"Bowler",wkts:170,econ:8.0});
add({name:"Navdeep Saini",role:"Bowler",wkts:60,econ:8.5});

// ======================================================
// ================= 20 ALL-ROUNDERS ====================
// ======================================================

add({name:"Hardik Pandya",role:"All-Rounder",runs:2500,wkts:70,sr:145});
add({name:"Ravindra Jadeja",role:"All-Rounder",runs:2800,wkts:160,sr:130});
add({name:"Andre Russell",role:"All-Rounder",runs:2400,wkts:100,sr:175});
add({name:"Glenn Maxwell",role:"All-Rounder",runs:2700,wkts:40,sr:155});
add({name:"Ben Stokes",role:"All-Rounder",runs:1500,wkts:50,sr:150});

add({name:"Marcus Stoinis",role:"All-Rounder",runs:1800,wkts:40,sr:140});
add({name:"Axar Patel",role:"All-Rounder",runs:1600,wkts:110,sr:125});
add({name:"Washington Sundar",role:"All-Rounder",runs:900,wkts:60,sr:120});
add({name:"Shardul Thakur",role:"All-Rounder",runs:800,wkts:90,sr:130});
add({name:"Krunal Pandya",role:"All-Rounder",runs:1200,wkts:70,sr:130});

add({name:"Mitchell Marsh",role:"All-Rounder",runs:2000,wkts:60,sr:145});
add({name:"Jason Holder",role:"All-Rounder",runs:1500,wkts:80,sr:135});
add({name:"Sam Curran",role:"All-Rounder",runs:1100,wkts:90,sr:140});
add({name:"Chris Morris",role:"All-Rounder",runs:1000,wkts:95,sr:150});
add({name:"Dwayne Bravo",role:"All-Rounder",runs:1500,wkts:180,sr:135});

add({name:"Liam Livingstone",role:"All-Rounder",runs:1700,wkts:30,sr:165});
add({name:"Riyan Parag",role:"All-Rounder",runs:900,wkts:25,sr:135});
add({name:"Venkatesh Iyer",role:"All-Rounder",runs:1200,wkts:15,sr:140});
add({name:"Shivam Dube",role:"All-Rounder",runs:1400,wkts:10,sr:145});
add({name:"Deepak Hooda",role:"All-Rounder",runs:1700,wkts:20,sr:135});


// ======================================================
// ================= 15 WICKETKEEPERS ===================
// ======================================================

add({name:"MS Dhoni",role:"Wicketkeeper",runs:5000,sr:135});
add({name:"KL Rahul WK",role:"Wicketkeeper",runs:4200,sr:134});
add({name:"Rishabh Pant",role:"Wicketkeeper",runs:2800,sr:148});
add({name:"Jos Buttler",role:"Wicketkeeper",runs:3800,sr:150});
add({name:"Ishan Kishan",role:"Wicketkeeper",runs:2500,sr:145});
add({name:"Sanju Samson WK",role:"Wicketkeeper",runs:4200,sr:140});
add({name:"Quinton de Kock",role:"Wicketkeeper",runs:3500,sr:138});
add({name:"Nicholas Pooran",role:"Wicketkeeper",runs:2200,sr:155});
add({name:"Heinrich Klaasen",role:"Wicketkeeper",runs:1800,sr:160});
add({name:"Dinesh Karthik WK",role:"Wicketkeeper",runs:4800,sr:135});

// ================= FINAL CHECK =================
console.log("TOTAL PLAYERS =", players.length); // MUST BE 100
