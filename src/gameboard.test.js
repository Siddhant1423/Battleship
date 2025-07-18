import Gameboard from "./gameboard.js";
import { Ship } from "./ship.js";

test('placing a ship horizontally',()=>{
    const board = Gameboard();
    const ship = Ship(3);
    board.placeShip(ship,0,0,true);
    expect(board.getShipAt(0, 0)).toBe(ship);
    expect(board.getShipAt(1, 0)).toBe(ship);
    expect(board.getShipAt(2, 0)).toBe(ship);
});

test('register a hit on ship',()=>{
    const board = Gameboard();
    const ship = Ship(2);
    board.placeShip(ship, 0, 0, true);
    board.receiveAttack(0, 0);
    expect(ship.isSunk()).toBe(false);
    board.receiveAttack(1, 0);
    expect(ship.isSunk()).toBe(true);
});

test('Gameboard tracks missed attacks', () => {
    const board = Gameboard();
    board.receiveAttack(5, 5);
    board.receiveAttack(0, 1);
    expect(board.getMissedShots()).toEqual([[5, 5], [0, 1]]);
});

test('report when all ships are sunk', () => {
    const board = Gameboard();
    const ship1 = Ship(1);
    const ship2 = Ship(2);
    board.placeShip(ship1, 0, 0);
    board.placeShip(ship2, 1, 1);

    board.receiveAttack(0, 0); // sink ship1
    board.receiveAttack(1, 1);
    board.receiveAttack(2, 1); // sink ship2

    expect(board.allShipsSunk()).toBe(true);
});