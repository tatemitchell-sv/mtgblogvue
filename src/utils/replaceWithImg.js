const replaceWithImg = str => {
    str = str.replaceAll("{W}", "<img class='manasymbol' src='@/../../src/assets/manaW.png' />")
    str = str.replaceAll("{U}", "<img class='manasymbol' src='@/../../src/assets/manaU.png' />")
    str = str.replaceAll("{B}", "<img class='manasymbol' src='@/../../src/assets/manaB.png' />")
    str = str.replaceAll("{R}", "<img class='manasymbol' src='@/../../src/assets/manaR.png' />")
    str = str.replaceAll("{G}", "<img class='manasymbol' src='@/../../src/assets/manaG.png' />")
    str = str.replaceAll("{2/W}", "<img class='manasymbol' src='@/../../src/assets/mana2W.png' />")
    str = str.replaceAll("{2/U}", "<img class='manasymbol' src='@/../../src/assets/mana2U.png' />")
    str = str.replaceAll("{2/B}", "<img class='manasymbol' src='@/../../src/assets/mana2B.png' />")
    str = str.replaceAll("{2/R}", "<img class='manasymbol' src='@/../../src/assets/mana2R.png' />")
    str = str.replaceAll("{2/G}", "<img class='manasymbol' src='@/../../src/assets/mana2G.png' />")
    str = str.replaceAll("{W/U}", "<img class='manasymbol' src='@/../../src/assets/manaWU.png' />")
    str = str.replaceAll("{W/B}", "<img class='manasymbol' src='@/../../src/assets/manaWB.png' />")
    str = str.replaceAll("{U/B}", "<img class='manasymbol' src='@/../../src/assets/manaUB.png' />")
    str = str.replaceAll("{U/R}", "<img class='manasymbol' src='@/../../src/assets/manaUR.png' />")
    str = str.replaceAll("{B/R}", "<img class='manasymbol' src='@/../../src/assets/manaBR.png' />")
    str = str.replaceAll("{B/G}", "<img class='manasymbol' src='@/../../src/assets/manaBG.png' />")
    str = str.replaceAll("{R/W}", "<img class='manasymbol' src='@/../../src/assets/manaRW.png' />")
    str = str.replaceAll("{R/G}", "<img class='manasymbol' src='@/../../src/assets/manaRG.png' />")
    str = str.replaceAll("{G/W}", "<img class='manasymbol' src='@/../../src/assets/manaGW.png' />")
    str = str.replaceAll("{G/U}", "<img class='manasymbol' src='@/../../src/assets/manaGU.png' />")
    str = str.replaceAll("{C}", "<img class='manasymbol' src='@/../../src/assets/manaC.png' />")
    str = str.replaceAll("{X}", "<img class='manasymbol' src='@/../../src/assets/manaX.png' />")
    str = str.replaceAll("{Y}", "<img class='manasymbol' src='@/../../src/assets/manaY.png' />")
    str = str.replaceAll("{Z}", "<img class='manasymbol' src='@/../../src/assets/manaZ.png' />")
    str = str.replaceAll("{T}", "<img class='manasymbol' src='@/../../src/assets/tapArrow.png' />")

    for (let i = 0; i < 21; i++) {
        str = str.replaceAll("{" + i + "}", "<img class='manasymbol' src='@/../../src/assets/mana" + i + ".png' />")
    }
    return str;
}

export {
    replaceWithImg
}