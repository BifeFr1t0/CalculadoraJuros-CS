let input_price=document.getElementById("price");
let input_tax=document.getElementById("tax");
let input_time=document.getElementById("time");
let input_radio1=document.getElementById("radio1");
let input_radio2=document.getElementById("radio2");

let info= document.getElementById('info')

function Calcular(){
    let price= Number(input_price.value);
    let tax= input_tax.value;
    let time= input_time.value;
    let imposto=0;
    let total=0;

    if (input_radio1.checked){
        imposto= (price*(tax/100))*time;
        total= ((price*(tax/100))*time)+price;
    }
    else if(input_radio2.checked){
        imposto=price;
        for(let i=0;i<time;i++){
            imposto+=(imposto*(tax/100));
        }
        total=imposto
        imposto=total-price
    }

    info.innerHTML += `<br>Valor: R$${price}<br>`
    info.innerHTML += `Juros: ${tax}%<br>`
    info.innerHTML += `Parcelas: ${time} meses<br>`
    info.innerHTML += `Impostos: R$${imposto}<br>`
    info.innerHTML += `Total c/Impostos : R$${total}<br>`
}