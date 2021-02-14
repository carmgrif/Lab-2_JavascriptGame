
const randomDamage = () => { return Math.floor(Math.random()* 10 + 1) };



const chooseOption = (opt1, opt2) => {
    let randNum = Math.round(Math.random());
    return randNum === 0 ? opt1 : opt2;
};



function attackPlayer(health) {
    return health - randomDamage();
}
console.log(attackPlayer);

    
const logHealth = (player, health) => console.log(`${player} "health:" ${health}`);


const logDeath = (winner, loser) => console.log(`${winner} "defeated" ${loser}`);


const isDead = (health) => { health <= 0 ? true : false };
    

function fight(player1, player2, player1Health, player2Health) {
    while (true) {
        let attacker = chooseOption(player1, player2);
        if (attacker === player1) {
                player2Health === attackPlayer(player2Health);
                logHealth(player2, player2Health);
            if (isDead(player2Health)) {
                logDeath(player1, player2);
                break;
            }
            
        }
        else {
            player1Health === attackPlayer(player1);
        
            logHealth(player1, player1Health);
            if (isDead(player1Health)) {
                    logDeath(player1, player2);
                    break;
                }

            
        }
    }
};

fight(player1: Mitch, player2: Adam, player1Health: 100, player2Health: 100);

