const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


    function decode(expr) {
        let words = '';
        for(let i = 0; i < expr.length; i+=10){
            const word = expr.slice(i,i+10);
            if (word == '**********') {
                words += ' ';
                continue;        
            }
            let symbol_code = '';
            for(let i = 0; i < word.length;i+=2) {
                switch(word.slice(i,i+2)) {
                    case '10':
                        symbol_code += '.';
                        break;
                    case '11':
                        symbol_code += '-';
                        break;
                    default:
                        break;
                }
            }
            words += MORSE_TABLE[symbol_code]
        }
        
        return words;
    }
    
    module.exports = {
        decode
}
