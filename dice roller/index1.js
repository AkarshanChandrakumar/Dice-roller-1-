function rollIt(){
    const numberDice=document.getElementById("numOfDice").value;
    const diceResult=document.getElementById("diceResult");
    const diceImages=document.getElementById("diceImages");
    const values=[];
    const htmlElements=[];

    for(let k = 0;k<numberDice;k++){
        const randomNumber = Math.floor((Math.random()) * 6)+1;
        htmlElements.push(`<p> Result for ${k+1} iteration , random number is ${randomNumber} </p>`);
        for(let i=0;i<randomNumber;i++){
          
            htmlElements.push(`<img src="./dice_images/${i+1}.png" alt="Dice: ${i}">`);
        }
    }

    diceResult.textContent=`Dice:${values.join(', ')}`;
    diceImages.innerHTML=htmlElements.join('');

}