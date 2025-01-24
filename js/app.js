let jogosAlugados = 0;


function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(status){
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
            if (confirm(`Você tem certeza que deseja devolver o jogo Monopoly`)) {
                monopolyImg.classList.remove('dashboard__item__img--rented');
                console.log(monopolyImg.classList);
                monopolyText.textContent = "Alugar";
                monopolyText.classList.remove('dashboard__item__button--return');
                console.log(monopolyText.classList);
                jogosAlugados--;
        }} else {
            monopolyImg.classList.add('dashboard__item__img--rented');
            monopolyText.textContent = "Devolver";
            monopolyText.classList.add('dashboard__item__button--return');
            console.log(monopolyImg.classList);
            console.log(monopolyText.classList);
            jogosAlugados++;
        }
 
    }
    if (2 == status){
        console.log('ticket');
        if (ticketImg.classList.contains('dashboard__item__img--rented')) {
            if (confirm(`Você tem certeza que deseja devolver o jogo Ticket To Ride`)) {
                ticketImg.classList.remove('dashboard__item__img--rented');
                console.log(ticketImg.classList);
                ticketText.textContent = "Alugar";
                ticketText.classList.remove('dashboard__item__button--return');
                console.log(ticketText.classList);
                jogosAlugados--;
        }} else {
            ticketImg.classList.add('dashboard__item__img--rented');
            ticketText.textContent = "Devolver";
            ticketText.classList.add('dashboard__item__button--return');
            console.log(ticketImg.classList);
            console.log(ticketText.classList);
            jogosAlugados++;
        }
    }
    
    if (3 == status){
        console.log('takenoko');
        if (takenokoImg.classList.contains('dashboard__item__img--rented')) {
            if (confirm(`Você tem certeza que deseja devolver o jogo Takenoko`)) {
                takenokoImg.classList.remove('dashboard__item__img--rented');
                console.log(takenokoImg.classList);
                takenokoText.textContent = "Alugar";
                takenokoText.classList.remove('dashboard__item__button--return');
                console.log(takenokoText.classList);
                jogosAlugados--;
        }}else {
            takenokoImg.classList.add('dashboard__item__img--rented');
            takenokoText.textContent = "Devolver";
            takenokoText.classList.add('dashboard__item__button--return');
            console.log(takenokoImg.classList);
            console.log(takenokoText.classList);
            jogosAlugados++;
        }
    }
    contarEExibirJogosAlugados();
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
    console.log(jogosAlugados);
});



