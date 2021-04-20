
import { search, parse_grid, createSquares, rows, cols } from '../src/js/ES6Modules/sudokuModule';
describe('Test for Sudoku algorithm', () => {
    //convert the resolved map to a string that holds key:value pairs for better readability 
    const serializeMap = (map) => {
        const arr = [];
        for (const key in map) {
            arr.push(`${key}:${map[key]}`);
        }
        return arr.join(',');
    };
    //set up generic grids
    window.squares = createSquares(rows, cols);

    it('test solver happy path 1', () => {
        const startTime = new Date();
        const result = (search(parse_grid('003020600900305001001806400008102900700000008006708200002609500800203009005010300')));
        const endTime = new Date();
        const expected = 'A1:4,A2:8,A3:3,A4:9,A5:2,A6:1,A7:6,A8:5,A9:7,B1:9,B2:6,B3:7,B4:3,B5:4,B6:5,B7:8,B8:2,B9:1,C1:2,C2:5,C3:1,C4:8,C5:7,C6:6,C7:4,C8:9,C9:3,D1:5,D2:4,D3:8,D4:1,D5:3,D6:2,D7:9,D8:7,D9:6,E1:7,E2:2,E3:9,E4:5,E5:6,E6:4,E7:1,E8:3,E9:8,F1:1,F2:3,F3:6,F4:7,F5:9,F6:8,F7:2,F8:4,F9:5,G1:3,G2:7,G3:2,G4:6,G5:8,G6:9,G7:5,G8:1,G9:4,H1:8,H2:1,H3:4,H4:2,H5:5,H6:3,H7:7,H8:6,H9:9,I1:6,I2:9,I3:5,I4:4,I5:1,I6:7,I7:3,I8:8,I9:2';
        expect(serializeMap(result)).toEqual(expected);
        console.log('Solved! Time used (ms): ' + (endTime - startTime))
    });

    it('test solver happy path 2', () => {
        const startTime = new Date();
        const result = (search(parse_grid('4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......')));
        const endTime = new Date();
        const expected = 'A1:4,A2:1,A3:7,A4:3,A5:6,A6:9,A7:8,A8:2,A9:5,B1:6,B2:3,B3:2,B4:1,B5:5,B6:8,B7:9,B8:4,B9:7,C1:9,C2:5,C3:8,C4:7,C5:2,C6:4,C7:3,C8:1,C9:6,D1:8,D2:2,D3:5,D4:4,D5:3,D6:7,D7:1,D8:6,D9:9,E1:7,E2:9,E3:1,E4:5,E5:8,E6:6,E7:4,E8:3,E9:2,F1:3,F2:4,F3:6,F4:9,F5:1,F6:2,F7:7,F8:5,F9:8,G1:2,G2:8,G3:9,G4:6,G5:4,G6:3,G7:5,G8:7,G9:1,H1:5,H2:7,H3:3,H4:2,H5:9,H6:1,H7:6,H8:8,H9:4,I1:1,I2:6,I3:4,I4:8,I5:7,I6:5,I7:2,I8:9,I9:3';
        expect(serializeMap(result)).toEqual(expected);
        console.log('Solved! Time used (ms): ' + (endTime - startTime))
    });

    it('test solver null input', () => {
        expect(search(parse_grid(null))).toBeFalsy();
    });

    it('test solver for input that has chars other than 0-9 ., invalid input', () => {
        expect(search(parse_grid('4.....A.B.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......'))).toBeFalsy();
    });

    it('test solver for input that has 80 chars, invalid input', () => {
        expect(search(parse_grid('4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4.....'))).toBeFalsy();
    });

    it('test solver for input that has 82 chars, the 81 chars should count', () => {

        const result = (search(parse_grid('4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4.......')));
        const expected = 'A1:4,A2:1,A3:7,A4:3,A5:6,A6:9,A7:8,A8:2,A9:5,B1:6,B2:3,B3:2,B4:1,B5:5,B6:8,B7:9,B8:4,B9:7,C1:9,C2:5,C3:8,C4:7,C5:2,C6:4,C7:3,C8:1,C9:6,D1:8,D2:2,D3:5,D4:4,D5:3,D6:7,D7:1,D8:6,D9:9,E1:7,E2:9,E3:1,E4:5,E5:8,E6:6,E7:4,E8:3,E9:2,F1:3,F2:4,F3:6,F4:9,F5:1,F6:2,F7:7,F8:5,F9:8,G1:2,G2:8,G3:9,G4:6,G5:4,G6:3,G7:5,G8:7,G9:1,H1:5,H2:7,H3:3,H4:2,H5:9,H6:1,H7:6,H8:8,H9:4,I1:1,I2:6,I3:4,I4:8,I5:7,I6:5,I7:2,I8:9,I9:3';
        expect(serializeMap(result)).toEqual(expected)
    });

});