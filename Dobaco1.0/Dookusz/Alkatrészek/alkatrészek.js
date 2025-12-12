var alkatrészek = {

    //AMD PROCESSZOROK: 
    ryzen99950x3d: {
        kep: '../Kepek/Processzor/Ryzen/Ryzen 9 9950x3d.png',
        nev: 'Ryzen 9 9950X3D',
        ar: '269 990 Ft'
    },

    ryzen99950x: {
        kep: '../Kepek/Processzor/Ryzen/Ryzen 9 9950x.png',
        nev: 'Ryzen 9 9950X',
        ar: '207 650 Ft'
    },

    ryzen99900X3D: {
        kep: '../Kepek/Processzor/Ryzen/Ryzen 9 9900x3d.jpg',
        nev: 'Ryzen 9 9900X3D',
        ar: '226 200 Ft'
    },

    ryzen99900x: {
        kep: '../Kepek/Processzor/Ryzen/Ryzen 9 9900x3d.png',
        nev: 'Ryzen 9 9900X',
        ar: '152 941 Ft'
    },

    ryzen97950x: {
        kep: '../Kepek/Processzor/Ryzen/Ryzen 9 7950x.png',
        nev: 'Ryzen 9 7950X',
        ar: '154 700 Ft'
    },

    //AMD ÉGE

    //INTEL
    inteli914900k: {
        kep: '../Kepek/Processzor/Intel/i914900k.jpg',
        nev: 'Intel Core i9-14900K',
        ar: '183 225 Ft'
    },

    inteli914900kf: {
        kep: '../Kepek/Processzor/Intel/i9-1400ks.jpg',
        nev: 'Intel Core i9-14900KF',
        ar: '178 600 Ft'
    },

    inteli914900ks: {
        kep: '../Kepek/Processzor/Intel/i9-1400ks.jpg',
        nev: 'Intel Core i9-14900KS',
        ar: '263 900 Ft'
    },

    inteli714700k: {
        kep: '../Kepek/Processzor/Intel/i7.jpg',
        nev: 'Intel Core i7-14700K',
        ar: '138 500 Ft'
    },

    inteli714700kf: {
        kep: '../Kepek/Processzor/Intel/i7.jpg',
        nev: 'Intel Core i7-14700KF',
        ar: '128 100 Ft'
    },

    // Intel vége
};

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

function proci() {

    for (var i = 0; i < procinevek.length; i++) {
        var procinev = procinevek[i];
        var pocok = alkatrészek[procinev];

        var index = i + 1;

        var felkepellek = document.getElementById('kep' + index);
        var nevetgelek = document.getElementById('nev' + index);
        var aronaluladok = document.getElementById('ar' + index);

        if (felkepellek) felkepellek.src = pocok.kep;
        if (nevetgelek) nevetgelek.innerHTML = pocok.nev;
        if (aronaluladok) aronaluladok.innerHTML = pocok.ar;
    }

    for (var i = 0; i <= 10; i++) {
        if (i > 5) {
            document.getElementById(i).style.display = "";
        }
    }

    document.getElementById("hedvig").innerHTML = "Alkatrészek"
}

var alkatrészek1 = {
    //Alaplap

    gigab650: {
        kep: '../Kepek/Alaplap/1-es.jpg',
        nev: 'GIGABYTE B650 EAGLE AX',
        ar: '55 976 Ft',
    },

    msimagz890w: {
        kep: '../Kepek/Alaplap/2-es.jpg',
        nev: 'MSI MAG Z890 TOMAHAWK WIFI',
        ar: '114 491 Ft',
    },

    asrockb450: {
        kep: '../Kepek/Alaplap/3-as.jpg',
        nev: 'ASRock B450M-HDV R4.0',
        ar: '24 290 Ft',
    },

    asustufga520: {
        kep: '../Kepek/Alaplap/4-es.jpg',
        nev: 'ASUS TUF Gaming A520M-PLUS II',
        ar: '26 890 Ft',
    },

    msib760gpw: {
        kep: '../Kepek/Alaplap/5-es.jpg',
        nev: 'MSI B760 GAMING PLUS WIFI DDR4',
        ar: '42 990 Ft',
    }


};


var alaplapnevek = [
    "gigab650",
    "msimagz890w",
    "asrockb450",
    "asustufga520",
    "msib760gpw",
];




function alaplap() {
    for (var i = 0; i < alaplapnevek.length; i++) {
        var alaplapnev = alaplapnevek[i];
        var pocok = alkatrészek1[alaplapnev];

        var index = i + 1;

        var felkepellek = document.getElementById('kep' + index);
        var nevetgelek = document.getElementById('nev' + index);
        var aronaluladok = document.getElementById('ar' + index);

        if (felkepellek) felkepellek.src = pocok.kep;
        if (nevetgelek) nevetgelek.innerHTML = pocok.nev;
        if (aronaluladok) aronaluladok.innerHTML = pocok.ar;
    }

    for (var i = 0; i <= 10; i++) {
        if (i > 5) {
            document.getElementById(i).style.display = "none";
        }
    }

    document.getElementById("hedvig").innerHTML = "Alkatrészek"
}

var alkatrészek2 = {
    //storage
    kinston1tb: {
        kep: '../Kepek/Tárhely/1-es.jpg',
        nev: 'Kingston NV3 1TB (SNV3S/1000G)',
        ar: '39 990 Ft',
    },

    samsung25: {
        kep: '../Kepek/Tárhely/2-es.jpg',
        nev: 'Samsung 2.5 870 EVO 1TB SATA3 (MZ-77E1T0B)',
        ar: '44 990 Ft',
    },

    samsung990: {
        kep: '../Kepek/Tárhely/3-as.jpg',
        nev: 'Samsung 990 PRO 2TB M.2 (MZ-V9P2T0BW)',
        ar: '103 378 Ft',
    },

    weste1tb: {
        kep: '../Kepek/Tárhely/4-es.jpg',
        nev: 'Western Digital WD Black SN7100 1TB M.2 (WDS100T4X0E)',
        ar: '39 990 Ft',
    },

    kingstona400: {
        kep: '../Kepek/Tárhely/5-es.jpg',
        nev: 'Kingston A400 2.5 960GB SATA3 (SA400S37/960G)',
        ar: '36 999 Ft',
    },

};

storagenevek = [
    "kinston1tb",
    "samsung25",
    "samsung990",
    "weste1tb",
    "kingstona400",
];
function storage() {
    for (var i = 0; i < storagenevek.length; i++) {
        var storagenev = storagenevek[i];
        var pocok = alkatrészek2[storagenev];

        var index = i + 1;

        var felkepellek = document.getElementById('kep' + index);
        var nevetgelek = document.getElementById('nev' + index);
        var aronaluladok = document.getElementById('ar' + index);

        if (felkepellek) felkepellek.src = pocok.kep;
        if (nevetgelek) nevetgelek.innerHTML = pocok.nev;
        if (aronaluladok) aronaluladok.innerHTML = pocok.ar;
    }

    for (var i = 0; i <= 10; i++) {
        if (i > 5) {
            document.getElementById(i).style.display = "none";
        }
    }

    document.getElementById("hedvig").innerHTML = "Alkatrészek"
}

alkatrészek3 = {
    bequiet850: {
        kep: '../Kepek/Tápegység/1-es.jpg',
        nev: 'be quiet! Pure Power 13 M 850W',
        ar: '55 643 Ft',
    },

    corsair650: {
        kep: '../Kepek/Tápegység/2-es.jpg',
        nev: 'Corsair RMe 2025 RM650e 80 PLUS Gold 650W',
        ar: '33 090 Ft',
    },

    fspvitan: {
        kep: '../Kepek/Tápegység/3-as.jpg',
        nev: 'FSP VITA GM 850W 80 PLUS Gold ',
        ar: '46 890 Ft',
    },
    coolermaster850: {
        kep: '../Kepek/Tápegység/4-es.jpg',
        nev: 'Cooler Master MWE 850W v3 80 PLUS Gold',
        ar: '33 890 Ft',
    },
    deepcool750: {
        kep: '../Kepek/Tápegység/5-es.jpg',
        nev: 'Deepcool PF750 750W',
        ar: '22 610 Ft',
    },
};

psunevek = [
    "bequiet850",
    "corsair650",
    "fspvitan",
    "coolermaster850",
    "deepcool750",
];

function psu() {
    for (var i = 0; i < psunevek.length; i++) {
        var psunev = psunevek[i];
        var psuadat = alkatrészek3[psunev];

        var index = i + 1;

        var felkepellek = document.getElementById('kep' + index);
        var nevetgelek = document.getElementById('nev' + index);
        var aronaluladok = document.getElementById('ar' + index);

        if (felkepellek) felkepellek.src = psuadat.kep;
        if (nevetgelek) nevetgelek.innerHTML = psuadat.nev;
        if (aronaluladok) aronaluladok.innerHTML = psuadat.ar;
    }

    for (var i = 0; i <= 10; i++) {
        if (i > 5) {
            document.getElementById(i).style.display = "none";
        }
    }

    document.getElementById("hedvig").innerHTML = "Alkatrészek"
}

alkatrészek5 = {
    nzxt1: {
        kep: '../Kepek/Gépház/1-es.jpg',
        nev: 'NZXT H7 Flow 2024 All Black',
        ar: '48 190 Ft',
    },
    nzxt2: {
        kep: '../Kepek/Gépház/2-es.jpg',
        nev: 'NZXT H9 Elite White',
        ar: '70 190 Ft',
    },
    linalicsung: {
        kep: '../Kepek/Gépház/3-as.jpg',
        nev: 'Lian Li Lancool 217 Wood-Black',
        ar: '44 450 Ft',
    },
    asuspccase: {
        kep: '../Kepek/Gépház/4-es.jpg',
        nev: 'ASUS A31 Plus TG ARGB Black',
        ar: '32 450 Ft',
    },
    bequietcase: {
        kep: '../Kepek/Gépház/5-es.jpg',
        nev: 'be quiet! Pure Base 500DX Black',
        ar: '48 410 Ft',
    },
};

casenevek = [
    "nzxt1",
    "nzxt2",
    "linalicsung",
    "asuspccase",
    "bequietcase",
];


function gephaz() {
    for (var i = 0; i < casenevek.length; i++) {
        var gephaznevekk = casenevek[i];
        var pocok = alkatrészek5[gephaznevekk];

        var index = i + 1;

        var felkepellek = document.getElementById('kep' + index);
        var nevetgelek = document.getElementById('nev' + index);
        var aronaluladok = document.getElementById('ar' + index);

        if (felkepellek) felkepellek.src = pocok.kep;
        if (nevetgelek) nevetgelek.innerHTML = pocok.nev;
        if (aronaluladok) aronaluladok.innerHTML = pocok.ar;
    }

    for (var i = 0; i <= 10; i++) {
        if (i > 5) {
            document.getElementById(i).style.display = "none";
        }
    }

    document.getElementById("hedvig").innerHTML = "Alkatrészek"
}

var alkatrészek4 = {
    rtx5070ti: {
        kep: '../Kepek/Videokártya/1-es.jpg',
        nev: 'ASUS GeForce RTX 5070 Ti PRIME OC 16GB GDDR7 256bit',
        ar: '339 900 Ft',
    },

    rx9060xt: {
        kep: '../Kepek/Videokártya/2-es.jpg',
        nev: 'SAPPHIRE Radeon RX 9060 XT Pulse OC 16GB GDDR6 128bit',
        ar: '157 770 Ft',
    },

    rx9070xt: {
        kep: '../Kepek/Videokártya/3-as.jpg',
        nev: 'SAPPHIRE Radeon RX 9070 XT PULSE 16GB GDDR6 256bit',
        ar: '314 790 Ft',
    },

    rtx5080: {
        kep: '../Kepek/Videokártya/4-es.jpg',
        nev: 'GIGABYTE GeForce RTX 5080 WINDFORCE OC SFF 16GB GDDR7 256bit',
        ar: '435 990 Ft',

    },

    rtx5090: {
        kep: '../Kepek/Videokártya/5-es.jpg',
        nev: 'ASUS GeForce RTX 5090 ROG ASTRAL OC 32GB GDDR7 512bit',
        ar: '1 346 990 Ft',
    }
};

var gpunevek = [
    "rtx5070ti",
    "rx9060xt",
    "rx9070xt",
    "rtx5080",
    "rtx5090"
];

function gpu() {
    for (var i = 0; i < gpunevek.length; i++) {
        var gpunev = gpunevek[i];
        var gpuadat = alkatrészek4[gpunev];

        var index = i + 1;

        var felkepellek = document.getElementById('kep' + index);
        var nevetgelek = document.getElementById('nev' + index);
        var aronaluladok = document.getElementById('ar' + index);

        if (felkepellek) felkepellek.src = gpuadat.kep;
        if (nevetgelek) nevetgelek.innerHTML = gpuadat.nev;
        if (aronaluladok) aronaluladok.innerHTML = gpuadat.ar;
    }

    for (var i = 0; i <= 10; i++) {
        if (i > 5) {
            document.getElementById(i).style.display = "none";
        }
    }

    document.getElementById("hedvig").innerHTML = "Alkatrészek"
}


var alkatrészek6 = {

    kingstoneram5: {
        kep: '../Kepek/RAM/1-es.jpg',
        nev: 'Kingston FURY Beast 32GB (2x16GB) DDR5 6000MHz',
        ar: '123 490 Ft',
    },

    kingstoneram4: {
        kep: '../Kepek/RAM/2-es.jpg',
        nev: 'Kingston FURY Beast 16GB (2x8GB) DDR4 3200MHz',
        ar: '63 633 Ft',
    },

    kingstoneram5rgb: {
        kep: '../Kepek/RAM/3-as.jpg',
        nev: 'Kingston FURY Beast RGB 32GB (2x16GB) DDR5 6000MHz',
        ar: '129 390 Ft',
    },

    corsairddr5: {
        kep: '../Kepek/RAM/4-es.jpg',
        nev: 'Corsair VENGEANCE RGB 32GB (2x16GB) DDR5 6000MHz',
        ar: '416 900 Ft',
    },

    gskillddr5: {
        kep: '../Kepek/RAM/5-es.jpg',
        nev: 'G.SKILL Trident Z5 Neo RGB 32GB (2x16GB) DDR5 6000MHz',
        ar: '141 390 Ft',
    }


};

var ramnevek = [
    "kingstoneram5",
    "kingstoneram4",
    "kingstoneram5rgb",
    "corsairddr5",
    "gskillddr5"
];

function ram() {
    for (var i = 0; i < ramnevek.length; i++) {
        var ramnev = ramnevek[i];
        var ramadat = alkatrészek6[ramnev];

        var index = i + 1;

        var felkepellek = document.getElementById('kep' + index);
        var nevetgelek = document.getElementById('nev' + index);
        var aronaluladok = document.getElementById('ar' + index);

        if (felkepellek) felkepellek.src = ramadat.kep;
        if (nevetgelek) nevetgelek.innerHTML = ramadat.nev;
        if (aronaluladok) aronaluladok.innerHTML = ramadat.ar;
    }

    for (var i = 0; i <= 10; i++) {
        if (i > 5) {
            document.getElementById(i).style.display = "none";
        }
    }

    document.getElementById("hedvig").innerHTML = "Alkatrészek"
}



var kiegészítők = {

    kabel: {
        kep: '../Kepek/Kiegészítők/1-es.jpg',
        nev: 'AlzaPower AluCore Premium HDMI 2.0 High Speed 4K, 3m - fekete',
        ar: '4 390 Ft',
    },
    extssd: {
        kep: '../Kepek/Kiegészítők/2-es.jpg',
        nev: 'Seagate Expansion Portable 1TB (2021)',
        ar: '26 590 Ft',
    },
    szek: {
        kep: '../Kepek/Kiegészítők/3-as.jpg',
        nev: 'Rapture NEST fekete',
        ar: '49 290 Ft',
    },
    egbillkomb: {
        kep: '../Kepek/Kiegészítők/4-es.jpg',
        nev: 'RAPOO 8150M Silent',
        ar: '9 499 Ft',
    },
    hang: {
        kep: '../Kepek/Kiegészítők/5-es.jpg',
        nev: 'Creative Pebble V3 fehér',
        ar: '15 190 Ft',
    },
};

var kiegnevek = [
    "kabel",
    "extssd",
    "szek",
    "egbillkomb",
    "hang",
];

function accessories() {
    for (var i = 0; i < kiegnevek.length; i++) {
        var kiegészítőnev = kiegnevek[i];
        var kiegészítőadat = kiegészítők[kiegészítőnev];

        var index = i + 1;

        var felkepellek = document.getElementById('kep' + index);
        var nevetgelek = document.getElementById('nev' + index);
        var aronaluladok = document.getElementById('ar' + index);

        if (felkepellek) felkepellek.src = kiegészítőadat.kep;
        if (nevetgelek) nevetgelek.innerHTML = kiegészítőadat.nev;
        if (aronaluladok) aronaluladok.innerHTML = kiegészítőadat.ar;
    }

    for (var i = 0; i <= 10; i++) {
        if (i > 5) {
            document.getElementById(i).style.display = "none";
        }
    }

    document.getElementById("hedvig").innerHTML = "Kiegészítők"
}





