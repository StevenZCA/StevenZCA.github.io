
/**
 *@author Steven.zhong@gmail.com
 *Date April 18th 2021
 *Description:
 *A reusable React component that renders an interactive or read only mode sudoku board   
 */
class BoardComponent extends React.Component {
    /**
     * state.values holds the collection of values for each square
     * state.filledIndex holds the collection of indices for squares to be solved
     */
    constructor(props) {
        super(props);
        //initial state.values is an array of 81 '.'s
        this.state = {
            values: new Array(81).fill('.').join('')
        };
    }

    render() {
        return this.renderBoardSetup();
    }

    _renderCell(i, j, index, squareValues) {
        let value = Array.from(squareValues)[index];
        let isSolvedValue = false;
        if (value) {
            value = value.split('').shift();
        }
        if (this.props.filledIndex && this.props.filledIndex.indexOf(index) !== -1) {
            isSolvedValue = true;
        }
        return (
            <div key={`${rows[i]}${cols[j]}`}>
                <input
                    type="text"
                    maxLength="1"
                    className={this.getSquareClassName(rows[i], cols[j], isSolvedValue)}
                    value={value && value !== '.' ? value : ''}
                    onKeyPress={this._onSquareInputPress.bind(this)}
                    onChange={this._onSquareInputChange.bind(this)}
                    index={index}
                    id={`${rows[i]}${cols[j]}`}
                />
            </div>
        );
    }

    /*
     * Only accepts key press event that for key '1' to key '9'
     */
    _onSquareInputPress(evt) {
        if (!this.props.isInteractive || evt.which != 8 && evt.which != 0 && (evt.which < 49 || evt.which > 57)) {
            evt.preventDefault();//only Allow 1 to 9
        }
    }

    /*
     * Update React State this.state.values when a number is input on any square
     */
    _onSquareInputChange(evt) {
        const index = evt.target.attributes.index.value;
        const newValues = Array.from(this.state.values);
        newValues[index] = evt.target.value === '' ? '.' : evt.target.value;
        const newValuesString = newValues.join('');
        this.setState({ values: newValuesString });
    }


    _onAutoPickClick() {
        const index = (Math.floor(Math.random() * puzzles.length) % puzzles.length);
        this.setState({
            values: puzzles[index]
        });
        this.setState({
            filledIndex: []
        });
    }

    _renderControls() {
        return (
            <div className="board__controls">
                <section>
                        <input
                            className="board__controls__inputButton board__controls__inputButton--solve"
                            id="sudokuResetBtn"
                            type="button"
                            value="Reset"
                            onClick={this.reset.bind(this)}
                        />
                </section>
                <section>
                    <label>
                        Method 1:
                    </label>
                    <div>
                        <input className="board__controls__inputButton"
                            type="button"
                            value="Pick a random puzzle"
                            onClick={this._onAutoPickClick.bind(this)} />
                    </div>
                </section>
                <section>
                    <label>Method 2: Select a puzzle
                  </label>
                    {this._renderPuzzlesList(puzzles)}
                </section>
                <section>
                    <label>Method 3: input your own
                  </label>
                    <textarea
                        className="board__controls__userInput"
                        onChange={this._onUserInputChange.bind(this)}
                    />
                </section>
                <section>
                    <label
                        className="board_controls__infoLabel"
                    >Performance benchmark: </label>
                    <div className="performanceBenchmark"></div>
                </section>
            </div>
        )
    }

    _renderPuzzlesList(puzzles) {
        let index = 0;
        const options = puzzles.map((entry) => {
            index++;
            return (<option value={entry} key={index}>{entry}</option>);
        })
        return (
            <select 
                name="Select a puzzle from the list" 
                id="puzzles" 
                onChange={this._onPuzzleChange.bind(this)}
            >
                {[...[<option value={null} key={index+1}>None</option>], ...options]}
            </select>
        )
    }

    _onPuzzleChange(evt){
        if(evt.target.value && evt.target.value!=='None'){
            this.setState({'values' : evt.target.value});
        }else{
            this.reset();
        }
    }

    _loadFromInput() {
        const userInput = document.querySelector('.board__controls__userInput').value;
        if (userInput.trim().length > 0) {
            this.setState({ values: userInput });
        }
    }

    _onUserInputChange(evt) {
        const userInput = evt.target.value;
        this.setState({ values: userInput });
    }

    componentDidUpdate() {
        if (this.props.setValues) {
            this.props.setValues(this.state.values);
        }
    }

    /**
     * @description 
     * Highlight 3x3 square for best user experience
     * 
     */
    getSquareClassName(rowEle, colEle, isSolvedValue) {
        const squares = [];
        squares.push({
            rows: ['A', 'B', 'C'],
            cols: ['1', '2', '3']
        });
        squares.push({
            rows: ['A', 'B', 'C'],
            cols: ['7', '8', '9']
        });
        squares.push({
            rows: ['D', 'E', 'F'],
            cols: ['4', '5', '6']
        });
        squares.push({
            rows: ['G', 'H', 'I'],
            cols: ['1', '2', '3']
        });
        squares.push({
            rows: ['G', 'H', 'I'],
            cols: ['7', '8', '9']
        });
        let highlightBG = '';
        if (squares.some(ele => (ele.rows.indexOf(rowEle) >= 0 && ele.cols.indexOf(colEle) >= 0))) {
            highlightBG = ' board__squareRows__square--highlighted'
        }
        if (isSolvedValue) {
            highlightBG = highlightBG + ' board__squareRows__square--solvedValue'
        }
        return `board__squareRows__square${highlightBG}`;
    }

    /**
     * @description 
     * Create the JSX markups for all 9x9 squares.
     * Each square contains an HTML input with a unique ID.
     * 
     * The ID is composed by an element from Rows below and an element from the 
     * cols below. For instance 'A1' OR 'H8' etc.
     * 
     * rows = ['A','B','C','D','E','F','G','H','I'];
     * cols = ['1','2','3','4','5','6','7','8','9'];
     * 
     * @return JSX that represent  all 9x9 squares 
     */
    renderBoardSetup() {
        if (this.props.values && this.props.values.length === 0) {
            return null;
        }
        const displayRows = [];
        let index = 0;
        for (let i = 0; i < rows.length; i++) {
            const displayCols = [];
            for (let j = 0; j < cols.length; j++) {
                displayCols.push(this._renderCell(i, j, index, this.props.values || this.state.values));
                index++;
            }
            displayRows.push(
                <div key={i} className="board__squareRows">
                    {displayCols}
                </div>
            );
        }
        let controls = null;
        if (this.props.isInteractive === true) {
            controls = this._renderControls();
        }
        return (
            <div className="board">
                <div>
                    {displayRows}
                </div>
                {controls}
            </div>
        );
    }

    reset(){
        this.setState({values: new Array(81).fill('.').join('')})
    }
}