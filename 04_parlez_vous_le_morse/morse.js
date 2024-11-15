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

const getLatinCharacterList = (text) => {
    text.split('')
    //console.log(text.split(''));
}
getLatinCharacterList("hello, world")



const translateLatinCharacter = (latinMorse) => {
    latinToMorse[latinMorse]
    //console.log(latinToMorse[latinMorse]);
}
translateLatinCharacter('A');


const encode = (morseLatin) => {
    const encodedText = getLatinCharacterList(morseLatin)
    console.log(encodedText.latinToMorse[morseLatin])
    /*for (let i = 0; i < encodedText.length; i++)
        console.log(encodedText[i]);*/
}

encode('HELLO');

/*
const encode = (morseLatin) => {
    
    encodedText = morseLatin.map(text => translateLatinCharacter(text));
}


const characters = ["H", "E", "L", "L", "O"];
const morseCharacters = characters.map(char => translateLatinCharacter(char));
//console.log(morseCharacters);*/