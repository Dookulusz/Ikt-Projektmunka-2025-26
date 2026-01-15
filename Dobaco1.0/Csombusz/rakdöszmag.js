function Kosár()
{
    let proci = document.getElementById("processzor").value;
    let alaplap = document.getElementById("alaplap").value;
    let storig = document.getElementById("storig").value;
    let caseComputer = document.getElementById("case").value;
    let gpu = document.getElementById("gpu").value;
    let ram = document.getElementById("ram").value;
    let psu = document.getElementById("psu").value;
    let egyeb = document.getElementById("egyeb").value;

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
        128_100
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

    if (alaplap != "none") {
        let index = procinevek.indexOf(alaplap);
        if (index !== -1) {
            alaplap = prociárak[index];
        }
    }
    else {
        alaplap = 0;
    }

    let ár = proci + alaplap + storig + caseComputer + gpu + ram + psu + egyeb;

    document.getElementById("összeg").innerHTML = "Összeg: " + ár + " Ft";
}