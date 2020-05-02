function myFunction(_selectProgram) {
    valueA = document.getElementById("fieldA").value;
    valueB = document.getElementById("fieldB").value;
    valueC = document.getElementById("fieldC").value;
    valueD = document.getElementById("fieldD").value;
    valueE = document.getElementById("fieldE").value;
    valueF = document.getElementById("fieldF").value;
    valueG = document.getElementById("fieldG").value;
    valueH = document.getElementById("fieldH").value;
    valueI = document.getElementById("fieldI").value;
    if ( valueI == 0 ) { valueI = 40 };
    valueJ = document.getElementById("fieldJ").value;
    if ( valueJ == 0 ) { valueJ = 60 };
    valueK = document.getElementById("fieldK").value;
    if ( valueK == 0 ) { valueK = 40 };
    valueL = document.getElementById("fieldL").value;
    if ( valueL == 0 ) { valueL = 30 };
    valueM = document.getElementById("fieldM").value;
    if ( valueM == 0 ) { valueM = 64 };
    valueN = document.getElementById("fieldN").value;
    if ( valueN == 0 ) { valueN = 35 };
    
    /* document.getElementById("myText").value = "";
    location.reload();
    document.getElementById("myText").value = 
    "I = " + valueI +
    ", J = " + valueJ +
    ", K = " + valueK +
    ", L = " + valueL +
    ", M = " + valueM +
    ", N = " + valueN; */

    if (_selectProgram == 'A'){
        discProgram(valueA, valueB, valueC, valueD, valueI, valueJ, valueK, valueL, valueM, valueN);
    } else {
        sectorProgram(valueA, valueB, valueC, valueD, valueE, valueF, valueG, valueH, valueI, valueJ, valueK, valueL, valueM, valueN);
    }
}

function discProgram(valueA, valueB, valueC, valueD, valueI, valueJ, valueK, valueL, valueM, valueN){
    if (valueA == 0 || valueB == 0 || valueC == 0 || valueD == 0){
        alert('Text input fields A, B, C, D are mandatory!');
        return;
    }

    setNR = 0;
    nrOfHoles = 0;
    currentDiameter = valueA - valueJ - valueK * valueB - 1;
    
    if (currentDiameter - valueK >= valueD + valueN && currentDiameter - valueK <= valueD - valueM){
        disPosWithFix();
    }
    else
    {
        dispPosWithoutFix();
    }

    document.getElementById("myText").value = "";
    document.getElementById("myText").value = "DISC";
}

function sectorProgram(valueA, valueB, valueC, valueD, valueE, valueF, valueG, valueH, valueI, valueJ, valueK, valueL, valueM, valueN){
    if (valueA == 0 || valueB == 0 || valueC == 0 || valueD == 0 ||
        valueE == 0 || valueF == 0 || valueG == 0 || valueH == 0){
        alert('Text input fields A, B, C, D, E, F, G, H are mandatory!');
        return;
    }

    setNR = 0;
    nrOfHoles = 0;
    currentDiameter = valueA - valueJ - valueK * valueB - 1;

    document.getElementById("myText").value = "";
    document.getElementById("myText").value = "SECTOR";

    if ( currentDiameter + valueK > valueD + valueN + valueK ){
        sectorPosWithoutFix();
    }
    else
    {
        sectorPosWithFix();
    }
}

function disPosWithFix(){
    valueB -= 1;
    setNR += 1;
    currentDiameter += valueK;

}

function disPosWithoutFix(){
    valueB -= 1;
    setNR += 1;
    currentDiameter += valueK;

}

function discNegWithFix(){
    valueB -= 1;
    setNR += 1;
    currentDiameter += valueK;

}

function discNegWithoutFix(){
    valueB -= 1;
    setNR += 1;
    currentDiameter += valueK;

}

function sectorPosWithFix(){
    valueB -= 1;
    setNR += 1;
    currentDiameter += valueK;

}

function sectorPosWithoutFix(){
    valueB -= 1;
    setNR += 1;
    currentDiameter += valueK;

}

function sectorNegWithFix(){
    valueB -= 1;
    setNR += 1;
    currentDiameter += valueK;

}

function sectorNegWithoutFix(){
    valueB -= 1;
    setNR += 1;
    currentDiameter += valueK;

}