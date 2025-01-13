var osonSavollar = [
    {
        savol: "O'zbekistonning  poytaxti nima?",
        variantlar: ["A: Qozog'iston", "B: Italiya", "C: Toshkent", "D: Rim"],
        javob: 2,
    },
    {
        savol: "2*2/2?",
        variantlar: ["A: 2", "B: 4", "C: 0", "D: 1"],
        javob: 1,
    },
    {
        savol: "Qaysi sayyora Qizil sayyora deb ataladi?",
        variantlar: ["A: Venes", "B: Mars", "C: Yupiter", "D: Saturn"],
        javob: 1,
    },
    {
        savol: "Qaysi futbol jamoasi eng ko'p chempionat yutgan?",
        variantlar: ["A: Barselona", "B: Real Madrid", "C: Manchester United", "D: Yuventus"],
        javob: 1,
    },
    {
        savol: "Dunyodagi eng baland tog' nima?",
        variantlar: ["A: Everest", "B: K2", "C: Kilimanjaro", "D: Fuji"],
        javob: 0,
    }
];

var ortachaSavollar = [
    {
        savol: "Yer yuzida nechta okean mavjud?",
        variantlar: ["A: 3", "B: 4", "C: 5", "D: 7"],
        javob: 1,
    },
    {
        savol: "Eynshteynning mashhur tenglamasi qanday?",
        variantlar: ["A: E = mc²", "B: F = ma", "C: P = mv", "D: v = u + at"],
        javob: 0,
    },
    {
        savol: "Fizikada eng ko'p protonlarga ega bo'lgan kimyoviy element nima?",
        variantlar: ["A: Gelyum", "B: Kislorod", "C: Vodorod", "D: Uglerod"],
        javob: 2,
    },
    {
        savol: "Ilmiy dasturlar qaysi dasturlash tillarida ko'proq ishlatilgan?",
        variantlar: ["A: COBOL, FORTRAN", "B: C, Java", "C: Python, Go", "D: Ruby, Swift"],
        javob: 0,
    },
    {
        savol: "Bir kilogram suvni qaynatish uchun qancha energiya kerak?",
        variantlar: ["A: 400 kJ", "B: 1000 kJ", "C: 2100 kJ", "D: 500 kJ"],
        javob: 2,
    }
];
var osonSavollar = [
    {
        savol: "O'zbekistonning  poytaxti nima?",
        variantlar: ["A: Toshkent", "B: Italiya", "C: Qozog'iston", "D: Rim"],
        javob: 2,
    },
    {
        savol: "2*2/2?",
        variantlar: ["A: 4", "B: 2", "C: 0", "D: 1"],
        javob: 1,
    },
    {
        savol: "Qaysi sayyora Qizil sayyora deb ataladi?",
        variantlar: ["A: Venes", "B: Mars", "C: Yupiter", "D: Saturn"],
        javob: 1,
    },
    {
        savol: "Qaysi futbol jamoasi eng ko'p chempionat yutgan?",
        variantlar: ["A: Barselona", "B: Real Madrid", "C: Manchester United", "D: Yuventus"],
        javob: 1,
    },
    {
        savol: "Dunyodagi eng baland tog' nima?",
        variantlar: ["A: Everest", "B: K2", "C: Kilimanjaro", "D: Fuji"],
        javob: 0,
    }
];

var ortachaSavollar = [
    {
        savol: "Yer yuzida nechta okean mavjud?",
        variantlar: ["A: 3", "B: 4", "C: 5", "D: 7"],
        javob: 1,
    },
    {
        savol: "Eynshteynning mashhur tenglamasi qanday?",
        variantlar: ["A: E = mc²", "B: F = ma", "C: P = mv", "D: v = u + at"],
        javob: 0,
    },
    {
        savol: "Fizikada eng ko'p protonlarga ega bo'lgan kimyoviy element nima?",
        variantlar: ["A: Gelyum", "B: Kislorod", "C: Vodorod", "D: Uglerod"],
        javob: 2,
    },
    {
        savol: "Ilmiy dasturlar qaysi dasturlash tillarida ko'proq ishlatilgan?",
        variantlar: ["A: COBOL, FORTRAN", "B: C, Java", "C: Python, Go", "D: Ruby, Swift"],
        javob: 0,
    },
    {
        savol: "Bir kilogram suvni qaynatish uchun qancha energiya kerak?",
        variantlar: ["A: 400 kJ", "B: 1000 kJ", "C: 2100 kJ", "D: 500 kJ"],
        javob: 2,
    }
];

var qiyinSavollar = [
    {
        savol: "Qaysi kimyoviy element hali kashf etilmagan?",
        variantlar: ["A: Oganesson", "B: Nihonium", "C: Moskovium", "D: Flerovium"],
        javob: 0,
    },
    {
        savol: "Nega nazariyasi qanday?",
        variantlar: ["A: Maxsus nisbiylik nazariyasi", "B: Umumiy nisbiylik nazariyasi", "C: Kvant nazariyasi", "D: Nisbiy fizik"],
        javob: 1,
    },
    {
        savol: "Fizikada vaqtdan aniq tahlil qiladigan element nima?",
        variantlar: ["A: Neytron", "B: Proton", "C: Elektron", "D: Qora tuynuk"],
        javob: 3,
    },
    {
        savol: "Yer yuzidagi eng katta hayvon nima?",
        variantlar: ["A: Afrika fil", "B: Gipopotam", "C: Ko'k kit", "D: Mastodon"],
        javob: 2,
    },
    {
        savol: "Qaysi nur ko'pincha ko'rinmas?",
        variantlar: ["A: Ultrabinafsha", "B: Infratuzilmalar", "C: Rentgen", "D: Barchasi"],
        javob: 3,
    }
];
let hozirgiSavolIndex = 0;
let ball = 0;
let vaqt = 60;
let interval;
let tanlanganQiyinchilik = "oson";

const boshlanishEkrani = document.getElementById("boshlanish-ekrani");
const boshlashKnopkasi = document.getElementById("boshlash-knopkasi");
const viktorinaKonteyneri = document.getElementById("viktorina-konteyneri");
const savolElement = document.getElementById("savol");
const variantlarContaineri = document.getElementById("variantlar");
const keyingiKnopka = document.getElementById("keyingi-knopka");
const feedback = document.getElementById("fikr-mulohaza");
const timerElement = document.getElementById("timer");
const progressBar = document.getElementById("progress");
const qiyinchilikTanlov = document.getElementById("qiyinchilik");

qiyinchilikTanlov.addEventListener("change", (e) => {
    tanlanganQiyinchilik = e.target.value;
});

boshlashKnopkasi.addEventListener("click", () => {
    boshlanishEkrani.classList.add("yashirish");
    viktorinaKonteyneri.classList.remove("yashirish");
    hozirgiSavolIndex = 0; // Har safar qayta boshlashda indeksni nolga qaytarish
    savolniKorsatish();
    vaqtniBoshlash();
});

function savolniKorsatish() {
    const savollar = savollarTanlang();
    const savol = savollar[hozirgiSavolIndex];
    if (!savol) return; // Agar savol topilmasa, hech narsa qilmaslik

    savolElement.textContent = savol.savol;
    variantlarContaineri.innerHTML = "";
    feedback.classList.add("yashirish");

    savol.variantlar.forEach((variant, index) => {
        const tugma = document.createElement("button");
        tugma.textContent = variant;
        tugma.classList.add("variant-btn");
        tugma.addEventListener("click", () => javobTanlandi(index, tugma));
        variantlarContaineri.appendChild(tugma);
    });

    keyingiKnopka.classList.add("yashirish");
    progressniYangilash();
}

function javobTanlandi(tanlanganIndex, tugma) {
    const savollar = savollarTanlang();
    const savol = savollar[hozirgiSavolIndex];
    const tugmalar = variantlarContaineri.querySelectorAll("button");

    tugmalar.forEach((btn, index) => {
        btn.disabled = true;
        if (index === savol.javob) {
            btn.classList.add("to'g'ri");
            if (index === tanlanganIndex) {
                feedback.innerHTML = "⭐️ To'g'ri javob! ⭐️";
                ball++;
            }
        } else if (index === tanlanganIndex) {
            btn.classList.add("noto'g'ri");
            feedback.innerHTML = `❌ Noto'g'ri! To'g'ri javob: ${savol.variantlar[savol.javob]}`;
        }
    });

    feedback.classList.remove("yashirish");
    keyingiKnopka.classList.remove("yashirish");
}

function savollarTanlang() {
    if (tanlanganQiyinchilik === "oson") return osonSavollar;
    if (tanlanganQiyinchilik === "ortacha") return ortachaSavollar;
    if (tanlanganQiyinchilik === "qiyin") return qiyinSavollar;
    return []; // Agar hech narsa tanlanmasa, bo'sh ro'yxat qaytaradi
}

keyingiKnopka.addEventListener("click", () => {
    hozirgiSavolIndex++;
    const savollar = savollarTanlang();
    if (hozirgiSavolIndex < savollar.length) {
        savolniKorsatish();
    } else {
        natijalariKorsatish();
    }
});

function natijalariKorsatish() {
    clearInterval(interval);
    viktorinaKonteyneri.innerHTML = `
        <div class="natija-container">
            <h2>Sizning ballingiz: ${ball} / ${savollarTanlang().length}</h2>
            <p>${ball === savollarTanlang().length ? "🎉 Mukammal ball!" : "Yaxshi harakat! Qayta urinib ko'ring!"}</p>
            <button id="qaytaBoshlash-knopkasi" class="btn-birinchi">Qayta urinib ko'rish</button>
        </div>
    `;
    
    const qaytaBoshlashKnopkasi = document.getElementById("qaytaBoshlash-knopkasi");
    qaytaBoshlashKnopkasi.addEventListener("click", qaytaBoshlash);
}

function qaytaBoshlash() {
    boshlanishEkrani.classList.remove("yashirish");
    viktorinaKonteyneri.classList.add("yashirish");
    ball = 0;
    hozirgiSavolIndex = 0;
    vaqt = 60;
    clearInterval(interval);
}

function vaqtniBoshlash() {
    interval = setInterval(() => {
        if (vaqt > 0) {
            vaqt--;
            timerElement.textContent = `Vaqt: ${vaqt} sek`;
        } else {
            clearInterval(interval);
            natijalariKorsatish();
        }
    }, 1000);
}

function progressniYangilash() {
    const savollar = savollarTanlang();
    const progress = ((hozirgiSavolIndex + 1) / savollar.length) * 100;
    progressBar.style.width = `${progress}%`;
}
