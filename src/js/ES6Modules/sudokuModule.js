

/**
 *@author StevenZCA  Steven.zhong@gmail.com
 */
    export function createSquares(rows, cols){
      const squares = [];
      for (let i =0; i < rows.length; i++ ) {
        for (let j =0; j < cols.length; j++ ) {
          squares.push(rows[i] + cols[j]);
        }
      }
      return squares;
    }
    
    function member(item, list){
      for (let i in list)
        if (item == list[i]) return true;
      return false;
    }
    
    export let rows = ['A','B','C','D','E','F','G','H','I'];
    export let cols = ['1','2','3','4','5','6','7','8','9'];

    let digits = "123456789";
    let squares = createSquares(rows, cols);
    let nassigns = 0;
    let neliminations = 0;
    let nsearches = 0;
    
    let unitlist = [];
    for (let c in cols) 
      unitlist.push(createSquares(rows, [cols[c]]));
    for (let r in rows) 
      unitlist.push(createSquares([rows[r]], cols));
    let rrows = [['A','B','C'], ['D','E','F'], ['G','H','I']];
    let ccols = [['1','2','3'], ['4','5','6'], ['7','8','9']];
    for (let rs in rrows) 
      for (let cs in ccols) 
        unitlist.push(createSquares(rrows[rs], ccols[cs]));
    
    let units = {};
    for (let s in squares){
      units[squares[s]] = [];
      for (let u in unitlist)
        if (member(squares[s], unitlist[u]))
          units[squares[s]].push(unitlist[u]);
    }
    
    let peers = {};
    for (let s in squares){
      peers[squares[s]] = {};
      for (let u in units[squares[s]]){
        let ul = units[squares[s]][u];
        for (let s2 in ul)
          if (ul[s2] != squares[s])
            peers[squares[s]][ul[s2]] = true;
      }
    }
    
    export function parse_grid(grid){
      if(!grid || grid.trim().length ===0 ){
        return {};
      }
      nassigns = 0;
      neliminations = 0;
      nsearches = 0;
      let grid2 = "";
      for (let c = 0; c < grid.length; c++)
        if ("0.-123456789".indexOf(grid.charAt(c)) >= 0)
          grid2 += grid.charAt(c);
      let values = {};
      for (let s in squares)
        values[squares[s]] = digits;
      for (let s in squares)
        if (digits.indexOf(grid2.charAt(s)) >= 0 && !assign(values, squares[s], grid2.charAt(s)))
          return false;
      return values;
    }
    
    function assign(values, sq, dig){
      ++nassigns;
      let result = true;
      let vals = values[sq];
      for (let d = 0; d < vals.length; d++)
        if (vals.charAt(d) != dig)
          result &= (eliminate(values, sq, vals.charAt(d)) ? true : false);
      return (result ? values : false);
    }
    
    function eliminate(values, sq, dig){
      ++neliminations;
      if (values[sq].indexOf(dig) == -1)
        return values;
      values[sq] = values[sq].replace(dig, "");
      if (values[sq].length == 0)
        return false;
      else if (values[sq].length == 1){
        let result = true;
        for (let s in peers[sq])
          result &= (eliminate(values, s, values[sq]) ? true : false);
        if (!result) return false;
      }
      for (let u in units[sq]){
        let dplaces = [];
        for (let s in units[sq][u]){
          let sq2 = units[sq][u][s];
          if (values[sq2].indexOf(dig) != -1) 
            dplaces.push(sq2);
        }
        if (dplaces.length == 0)
          return false;
        else if (dplaces.length == 1)
          if (!assign(values, dplaces[0], dig))
            return false;
      }
      return values;
    }
    
    function dup(obj){
      let d = {};
      for (let f in obj)
        d[f] = obj[f];
      return d;
    }
    
    export function search(values){
      ++nsearches;
      if (!values){
        return false;
      }else if(Object.keys(values).length === 0){
        return false;
      }
 
      let min = 10, max = 1, sq = null;
      for (let s in squares){
        if (values[squares[s]].length > max)
          max = values[squares[s]].length;
        if (values[squares[s]].length > 1 && values[squares[s]].length < min){
          min = values[squares[s]].length;
          sq = squares[s];
        }
      }
    
      if (max == 1)
        return values;
      for (let d = 0; d < values[sq].length; d++){
        let res = search(assign(dup(values), sq, values[sq].charAt(d)));
        if (res)
          return res;
      }
      return false;
    }
    
    function center(s, w){
      let excess = w - s.length;
      while (excess > 0){
        if (excess%2) s += " "; else s = " " + s;
        excess -= 1;
      }
      return s;
    }
