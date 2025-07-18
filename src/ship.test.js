import { Ship } from "./ship";

test('ship is not sunk',()=>{
    const ship = Ship(3);
    expect(ship.isSunk()).toBe(false)
});
test('ship is sunk',()=>{
    const ship = Ship(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true)
});
test('ship is hit but not sunk',()=>{
    const ship = Ship(3);
    ship.hit();
    expect(ship.isSunk()).toBe(false)
})