function Kosár()
{
    // Kiválasztott elemek lekérése
    let proci = document.getElementById("processzor").value || "none";
    let alaplap = document.getElementById("alaplap").value || "none";
    let storag = document.getElementById("storag").value || "none";
    let caseComputer = document.getElementById("case").value || "none";
    let gpu = document.getElementById("gpu").value || "none";
    let ram = document.getElementById("ram").value || "none";
    let psu = document.getElementById("psu").value || "none";
    let egyeb = document.getElementById("egyeb").value || "none";

    // Ár meghatározása a kiválasztott elemek alapján
    // Processzor árának meghatározása
    var procinevek = [
        "ryzen99950x3d",
        "ryzen99950x",
        "ryzen99900X3D",
        "ryzen99900x",
        "ryzen97950x",
        "inteli914900k",
        "inteli914900kf",
        "inteli914900ks",
        "inteli714700k",
        "inteli714700kf",
    ];

    var prociárak = [
        269_990,
        207_650,
        226_200,
        152_941,
        154_700,
        183_225,
        178_600,
        263_900,
        138_500,
        128_100,
    ];
    if (proci != "none") {
        let index = procinevek.indexOf(proci);
        if (index !== -1) {
            proci = prociárak[index];
        }
    }
    else {
        proci = 0;
    }

    // Alaplap árának meghatározása
    var alaplapnevek = [
    "gigab650",
    "msimagz890w",
    "asrockb450",
    "asustufga520",
    "msib760gpw",
    ];

    var alaplapárak = [
        55_976,
        114_491,
        24_290,
        26_890,
        42_990,
    ];

    if (alaplap != "none") {
        let index = alaplapnevek.indexOf(alaplap);
        if (index !== -1) {
            alaplap = alaplapárak[index];
        }
    }
    else {
        alaplap = 0;
    }
    
    // Tároló árának meghatározása
    var storagnevek = [
        "kinston1tb",
        "samsung25",
        "samsung990",
        "weste1tb",
        "kingstona400",
    ];

    var storagárak = [
        39_990,
        44_990,
        103_378,
        39_990,
        36_999,
    ];

    if (storag != "none") {
        let index = storagnevek.indexOf(storag);
        if (index !== -1) {
            storag = storagárak[index];
        }
    }
    else {
        storag = 0;
    }

    // Gépház árának meghatározása
    var casenevek = [
        "nzxt1",
        "nzxt2",
        "linalicsung",
        "asuspccase",
        "bequietcase",
    ];

    var caseárak = [
        48_190,
        70_190,
        44_450,
        32_450,
        48_410,
    ];

    if (caseComputer != "none") {
        let index = casenevek.indexOf(caseComputer);
        if (index !== -1) {
            caseComputer = caseárak[index];
        }
    }
    else {
        caseComputer = 0;
    }

    // GPU árának meghatározása
    var gpunevek = [
        "rtx5070ti",
        "rx9060xt",
        "rx9070xt",
        "rtx5080",
        "rtx5090",
    ];

    var gpuárak = [
        339_900,
        157_770,
        314_790,
        435_990,
        1_346_990,
    ];

    if (gpu != "none") {
        let index = gpunevek.indexOf(gpu);
        if (index !== -1) {
            gpu = gpuárak[index];
        }
    }
    else {
        gpu = 0;
    }

    // RAM árának meghatározása
    var ramnevek = [
        "kingstoneram5",
        "kingstoneram4",
        "kingstoneram5rgb",
        "corsairddr5",
        "gskillddr5",
    ];

    var ramárak = [
        123_490,
        63_633,
        129_390,
        416_900,
        141_390,
    ];

    if (ram != "none") {
        let index = ramnevek.indexOf(ram);
        if (index !== -1) {
            ram = ramárak[index];
        }
    }
    else {
        ram = 0;
    }

    // Tápegység árának meghatározása
    var psunevek = [
        "bequiet850",
        "corsair650",
        "fspvitan",
        "coolermaster850",
        "deepcool750",
    ];

    var psuárak = [
        55_643,
        33_090,
        46_890,
        33_890,
        22_610,
    ];

    if (psu != "none") {
        let index = psunevek.indexOf(psu);
        if (index !== -1) {
            psu = psuárak[index];
        }
    }
    else {
        psu = 0;
    }
    
    // Egyéb árának meghatározása
    var egyebnevek = [
        "kabel",
        "extssd",
        "szek",
        "egbillkomb",
        "hang",
    ];
    var egyebárak = [
        4_390,
        26_590,
        49_290,
        9_499,
        15_190,
    ];
    if (egyeb != "none") {
        let index = egyebnevek.indexOf(egyeb);
        if (index !== -1) {
            egyeb = egyebárak[index];
        }
    }
    else {
        egyeb = 0;
    }

    let ár = proci + alaplap + storag + caseComputer + gpu + ram + psu + egyeb;

    document.getElementById("összeg").innerHTML = "Összeg: " + ár + " Ft";
}