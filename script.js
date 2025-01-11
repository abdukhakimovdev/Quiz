var osonSavollar = [
    {
        savol: "O'zbekistonning  poytaxti nima?",
        variantlar: ["A: Toshkent", "B: Italiya", "C: Qozog'iston", "D: Rim"],
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
 let hozirgiSavolIndex = 0;
 let vaqt = 60;
 let interval;
 let tanlanganQiyinchilik = "oson";

var boshlanishEkrani = document.getElementById("boshlanish-ekrani");
var boshlashKnopkasi = document.getElementById("boshlash-knopkasi");
var viktorinaKonteyneri = document.getElementById("viktorina-konteyneri");
var savolElement = document.getElementById("savol");
var variantlarContaineri = document.getElementById("variantlar");
var keyingiKnopka = document.getElementById("keyingi-knopka");
var feedback = document.getElementById("fikr-mulohaza");
var timerElement = document.getElementById("timer");
var progressBar = document.getElementById("progress");
var qiyinchilikTanlov = document.getElementById("qiyinchilik");
qiyinchilikTanlov.addEventListener("change", (e) => {
    tanlanganQiyinchilik = e.target.value;
  });
  boshlashKnopkasi.addEventListener("click", () => {
    boshlanishEkrani.classList.add("yashirish");
    viktorinaKonteyneri.classList.remove("yashirish");
    savolniKorsatish();
    vaqtniBoshlash();
    
  })
  function savolniKorsatish() {
    var savollar = savollarTanlang();
    var savol = savollar[hozirgiSavolIndex];
    savolElement.textContent = savol.savol;
    variantlarContaineri.innerHTML = "";
    feedback.classList.add("yashirish");
    savol.variantlar.forEach((variant, index) => {
        const tugma = document.createElement("button");
        tugma.textContent = variant;
        tugma.addEventListener("click", () => javobTanlandi(index, tugma));
        variantlarContaineri.appendChild(tugma);
    });
    keyingiKnopka.classList.add("yashirish");
    progressniYangilash();
}
function javobTanlandi(tanlanganIndex, tugma) {
    var savollar = savollarTanlang();
    var savol = savollar[hozirgiSavolIndex];
    var tugmalar = variantlarContaineri.querySelectorAll("button");
}