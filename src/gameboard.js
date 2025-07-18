export default function Gameboard(){
    const board = Array.from({length:10},()=>Array(10).fill(null));
    const missed = [];
    const ships = [];

    function placeShip(ship,x,y,horizontal = true){
        ships.push(ship);
        for(let i=0;i<ship.length;i++){
            const xi = horizontal ? x+i:x;
            const yi = horizontal ? y:y+i;
            board[yi][xi] = ship;
        }
    }
    function getShipAt(x,y){
        return board[y][x];
    }

    function receiveAttack(x,y){
        const target = board[y][x];
        if(target && typeof target.hit === 'function'){
            target.hit();
        }
        else{
            missed.push([x,y]);
        }
    }
    function getMissedShots(){
        return missed;
    }
    function allShipsSunk(){
        return ships.every(ship=> ship.isSunk());
    }
    return{
        placeShip,
        getShipAt,
        receiveAttack,
        getMissedShots,
        allShipsSunk,
    }
}