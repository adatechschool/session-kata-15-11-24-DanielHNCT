const morseToLatin = {
	'-': "T",
	'--': "M",
	'---': "O",
	'--.': "G",
	'--.-': "Q",
	'--..': "Z",
	'-.': "N",
	'-.-': "K",
	'-.--': "Y",
	'-.-.': "C",
	'-..': "D",
	'-..-': "X",
	'-...': "B",
	'.': "E",
	'.-': "A",
	'.--': "W",
	'.---': "J",
	'.--.': "P",
	'.-.': "R",
	'.-..': "L",
	'..': "I",
	'..-': "U",
	'..-.': "F",
	'...': "S",
	'...-': "V",
	'....': "H"
  }
const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

/*const getLatinCharacterList = (text) => {
	return text.split('');
	console.log(text.split(''));
}*/

const getLatinCharacterList = (text) => text.split('');
console.log(getLatinCharacterList("hello, world"));



const translateLatinCharacter = (latinMorse) => {
	return latinToMorse[latinMorse];
    //console.log(latinToMorse[latinMorse]);
}
translateLatinCharacter('A');


const encode = (morseLatin) => {
    const array = getLatinCharacterList(morseLatin)
    const encodedText = array.map(char => translateLatinCharacter(char));
	//console.log(encodedText)
	return encodedText
}
encode("DANIEL");



const getMorseCharacterList = (morseList) => {
	return morseList.split(' ');
}
getMorseCharacterList();



/*const translateMorseCharacter = () => {

}
translateMorseCharacter();
*/