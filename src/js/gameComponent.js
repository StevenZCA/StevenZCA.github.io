

/**
 *@author Steven.zhong@gmail.com
 *@description
 *Date April 18th 2021
 *Description:
 *A React component the works as a container component of two BoardComponent
 *that demonstrates the sudoku solver
 */
class GameComponent extends React.Component {
    /**
     * state.values holds the collection of values for each square
     * state.filledIndex holds the collection of indices for squares to be solved
     */
    constructor(props) {
        super(props);
        //initial state.values is an array of 81 '.'s
        this.state = {
            values: new Array(81).fill('.').join(''),
            filledIndex: [],
            solvedValues: []
        };
    }

    render() {
        return (
            <div style={{ "display": "flex", "flexDirection": "row" }} >
                <BoardComponent isInteractive={true} setValues={this._setValue.bind(this)} />
                <div>
                    <section>
                        <input
                            className="board__controls__inputButton board__controls__inputButton--solve"
                            id="sudokuSolveBtn"
                            type="button"
                            value="Solve it!"
                            onClick={this.solve.bind(this)}
                        />
                    </section>
                </div>
                <BoardComponent values={this.state.solvedValues} filledIndex={this.state.filledIndex} />
            </div>
        )
    }

    _setValue(values) {
        this.boardSetup = values;
    }

    solve() {
        const infoLabelEle = document.querySelector('.board_controls__infoLabel');
        if (!this.boardSetup || this.boardSetup.trim().length === 0 || this.boardSetup.split('').every(ele=>ele === '.')) {
            infoLabelEle.classList.add('board_controls__infoLabel--warning');
            infoLabelEle.innerHTML = 'Please set up the initial board.';
            return;
        }
        const startTime = performance.now();
        const solved = search(parse_grid(this.boardSetup));
        const endTime = performance.now();
        if (!solved) {
            infoLabelEle.classList.add('board_controls__infoLabel--warning');
            infoLabelEle.innerHTML = 'No solution found! It might be due to invalid input';
            return;
        } else {
            infoLabelEle.classList.remove('board_controls__infoLabel--warning');
            infoLabelEle.innerHTML = `Time used ${endTime - startTime} ms`;
            let index = 0;
            const values = [];
            const filledIndex = [];
            for (const squareID in solved) {
                if (this.boardSetup.split('')[index] === '.') {
                    filledIndex.push(index);
                }
                values[index] = solved[squareID];
                index++;
            }
            this.setState({ solvedValues: values.join('') });
            this.setState({ filledIndex: filledIndex });
        };
    }

}


ReactDOM.render(<GameComponent />, document.querySelector('div.root'));