let prompt = require('prompt-sync')();
let numero = parseFloat(prompt('digite o nr. da tabuada: '));
let senha;
let tentativas = 0;
let senhacorreta = 'bezerro123'
// permite ate 3 tentativas para digitar a senha corretamente
while (tentativas < 3){
senha = prompt('digite a senha: ');
console.log('bem vindo,agente!');
console.log('mostrar o resultado de todas as operacao do: ', numero);
if (senha === senhacorreta){
    console.log('tabuada do: ', numero);
for(let i = 0; i <= 10; i++) {
  console.log(numero + " + " + i + " = " + (numero + i));
  } 
  for(let i = 0; i <= 10; i++) {
  console.log(numero + " - " + i + " = " + (numero - i));
  } for(let i = 0; i <= 10; i++) {
  console.log(numero + " * " + i + " = " + (numero * i));
  } for(let i = 0; i <= 10; i++) {
  console.log(numero + " / " + i + " = " + (numero / i));
  }
   for(let i = 0; i > 10; i--) {
  console.log(numero + "!" + i + " = " + ('numero ! i'));
}
  break; // sai do loop quando a senha estiver corretamente
   }else{tentativas++;
    console.log('senha invalida!tentativa '+ tentativas + 'de 3');
   }
    // se exceder as tentativas,exibe mensagem de bloqueio
    if (tentativas === 3){
      console.log('numero máximo de tentativas excedido.acesso bloqueado.')
}}