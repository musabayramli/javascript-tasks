function yarat(){
    const lengt = document.querySelector('#length').value
    const includeUpper = document.querySelector('#uppercase').checked;
    const includeLower = document.querySelector('#lowercase').checked;
    const includeNum = document.querySelector('#number').checked;
    const includeSymbol = document.querySelector('#symbol').checked;

    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const sybolChars = '!@$%^&*()_+}{:;,.<>?|'

    let allChars = ''
    if(includeUpper) allChars += upperChars;
    if(includeLower) allChars += lowerChars;
    if(includeNum) allChars += numberChars;
    if(includeSymbol) allChars += sybolChars;
    if(allChars=='') allChars =upperChars + lowerChars + numberChars + sybolChars;
    let pasword = '';

    for(let i = 0; i<lengt; i++){
        const randomPas = Math.floor(Math.random()* allChars.length)
        pasword += allChars[randomPas]
    }
    document.querySelector('#password').value = pasword
}