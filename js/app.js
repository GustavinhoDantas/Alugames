function alterarStatus(status){
    //let monopoly = document.getElementById('game-1');
    //let ticket = document.getElementById('game-2');
    //let takenoko = document.getElementById('game-3'); 

    //declarando as variaveis para a manupulação das img e textos
    let ticketImg = document.getElementById('gameTicket');
    let ticketText = document.getElementById('gameTick');
    let monopolyImg = document.getElementById('gameMonopoly');
    let monopolyText = document.getElementById('gameMono');
    let takenokoImg = document.getElementById('gameTakenoko');
    let takenokoText = document.getElementById('gameTake');
    
    console.log(status);

    if (1 == status){
        console.log('monopoly');
        if (monopolyImg.classList.contains('dashboard__item__img--rented')) {
            monopolyImg.classList.remove('dashboard__item__img--rented');
            console.log(monopolyImg.classList);
            monopolyText.textContent = "Alugar";
            monopolyText.classList.remove('dashboard__item__button--return');
            console.log(monopolyText.classList);
        } else {
            monopolyImg.classList.add('dashboard__item__img--rented');
            monopolyText.textContent = "Devolver";
            monopolyText.classList.add('dashboard__item__button--return');
            console.log(monopolyImg.classList);
            console.log(monopolyText.classList);
        }
 
    }
    if (2 == status){
        console.log('ticket');
        if (ticketImg.classList.contains('dashboard__item__img--rented')) {
            ticketImg.classList.remove('dashboard__item__img--rented');
            console.log(ticketImg.classList);
            ticketText.textContent = "Alugar";
            ticketText.classList.remove('dashboard__item__button--return');
            console.log(ticketText.classList);
        } else {
            ticketImg.classList.add('dashboard__item__img--rented');
            ticketText.textContent = "Devolver";
            ticketText.classList.add('dashboard__item__button--return');
            console.log(ticketImg.classList);
            console.log(ticketText.classList);
        }
    }
    
    if (3 == status){
        console.log('takenoko');
        if (takenokoImg.classList.contains('dashboard__item__img--rented')) {
            takenokoImg.classList.remove('dashboard__item__img--rented');
            console.log(takenokoImg.classList);
            takenokoText.textContent = "Alugar";
            takenokoText.classList.remove('dashboard__item__button--return');
            console.log(takenokoText.classList);
        } else {
            takenokoImg.classList.add('dashboard__item__img--rented');
            takenokoText.textContent = "Devolver";
            takenokoText.classList.add('dashboard__item__button--return');
            console.log(takenokoImg.classList);
            console.log(takenokoText.classList);
        }
    }
}



