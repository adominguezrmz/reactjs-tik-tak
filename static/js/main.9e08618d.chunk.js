(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(8),l=n.n(s),o=(n(16),n(1)),i=n(2),c=n(4),u=n(3),h=n(5),m=n(9);function d(e){var t="square";return e.isSelected&&(t+=" square-selected"),r.a.createElement("button",{className:t,onClick:e.onClick},e.value)}var p=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"renderSquare",value:function(e){var t=this,n=this.props.lastSelected===e;return this.props.winnerMoves&&(n=-1!==this.props.winnerMoves.indexOf(e)),r.a.createElement(d,{key:e,isSelected:n,value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"renderBoardRowCols",value:function(e){for(var t=[],n=0;n<this.props.numCols;n++)t.push(r.a.createElement("td",{key:e+n},this.renderSquare(e+n)));return r.a.createElement("tr",{key:e},t)}},{key:"render",value:function(){for(var e=[],t=0;t<this.props.numRows;t++)e.push(this.renderBoardRowCols(this.props.numRows*t));return r.a.createElement("table",null,r.a.createElement("tbody",null,e))}}]),t}(r.a.Component),v=n(6),b=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={ascSortOrder:!0},n.handleToggleClick.bind(Object(v.a)(Object(v.a)(n))),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleToggleClick",value:function(){this.setState({ascSortOrder:!this.state.ascSortOrder})}},{key:"render",value:function(){var e=this,t=this.state.ascSortOrder,n=t?"Sort Descending":"Sort Ascending",a=this.props.history.slice(),s=a.length-1;t||a.reverse();var l=a.map(function(n,a){var l=a,o=0===a;t||(o=a===s,l=s-a);var i=e.props.stepNumber===l?"history-current-step":"history-step",c="Go to game start";o||(c="Go to move #"+l,n.cell>=0&&(c="Go to move #"+l+"("+(parseInt(n.cell/e.props.numRows)+1)+","+(n.cell%e.props.numCols+1)+")"));return r.a.createElement("li",{key:a,className:i},r.a.createElement("button",{onClick:function(){return e.props.onClick(a)}},c))});return r.a.createElement("div",{className:"history-moves"},r.a.createElement("strong",null,"Moves: "),r.a.createElement("button",{onClick:function(){return e.handleToggleClick()}},n),r.a.createElement("ol",null,l))}}]),t}(r.a.Component);function f(){var e=["Display the location for each move in the format (col, row) in the move history list.","When no one wins, display a message about the result being a draw.","Add a toggle button that lets you sort the moves in either ascending or descending order.","Rewrite Board to use two loops to make the squares instead of hardcoding them.","When someone wins, highlight the three squares that caused the win.","Bold the currently selected item.","Bold the currently selected item in the move list."].map(function(e,t){return r.a.createElement("li",{key:t},e)});return r.a.createElement("div",null,r.a.createElement("h1",null,"Tutorial: Extra Tasks"),r.a.createElement("ol",null,e))}var w=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0,numRows:3,lastSelected:null},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"getWinner",value:function(e,t){var n=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(m.a)(t[n],3),r=a[0],s=a[1],l=a[2];if(e[r]&&e[r]===e[s]&&e[r]===e[l])return{moves:t[n],winner:e[r]}}return null}(e);return n?n.winner="Winner: "+n.winner:e[t]&&this.state.stepNumber===e.length&&(n={winner:"Draw"}),n}},{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].squares.slice();this.getWinner(n,e)||n[e]||(n[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:n,cell:e}]),stepNumber:t.length,xIsNext:!this.state.xIsNext,lastSelected:e}))}},{key:"jumpTo",value:function(e){var t=this.state.lastSelected,n=this.state.winner;this.setState({stepNumber:e,xIsNext:e%2===0,lastSelected:e>0?t:null,winner:e>0?n:null})}},{key:"render",value:function(){var e,t=this,n=this.state.history,a=n[this.state.stepNumber],s=this.getWinner(a.squares,this.state.lastSelected);return e=s?s.winner:"Next player: "+(this.state.xIsNext?"X":"O"),r.a.createElement("div",null,r.a.createElement("h1",null,"Tutorial: Intro to React"),r.a.createElement("div",{className:"name-hidden"},"Adan Dominguez Ramirez"),r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement(p,{lastSelected:this.state.lastSelected,numRows:this.state.numRows,numCols:this.state.numRows,winnerMoves:s&&s.moves,squares:a.squares,onClick:function(e){return t.handleClick(e)}})),r.a.createElement("div",{className:"game-info"},r.a.createElement("div",{className:"game-status"},e),r.a.createElement(b,{numRows:this.state.numRows,numCols:this.state.numRows,stepNumber:this.state.stepNumber,history:n,onClick:function(e){return t.jumpTo(e)}}))),r.a.createElement(f,null))}}]),t}(r.a.Component);l.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.9e08618d.chunk.js.map