class Tabla {
    constructor(Xmark, Omark) 
    {
      this.Table = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      this.Xmark = Xmark;
      this.Omark = Omark;
      this.winner = false;
      this.currentPlayer = this.Xmark;
    }
  
    fillTableWithMark(mark, row, col) 
    {
      if (this.Table[row][col] !== 0) 
      {
        throw new Error('No puedes sobreescribir');
      } 
      else 
      {
        this.Table[row][col] = mark;
        this.SwitchPlayer();
        return this.checkWinner();
      }
    }
  
    fillTablewithX(row, col)
    {
      this.fillTableWithMark(this.Xmark, row, col);
    }
  
    fillTableWithO(row, col)
    {
      this.fillTableWithMark(this.Omark, row, col);
    }
  
    SwitchPlayer()
    {
        if (this.currentPlayer === this.Xmark)
        {
            this.currentPlayer = this.Omark;
        } 

        else
        {
            this.currentPlayer = this.Xmark;
        }
      return this.currentPlayer;
    }
    GetCurrentPlayer()
    {
      return this.currentPlayer;
    }
  
    checkWinner()
    {
      ///EL PRIMER INDICE ES PARA LA FILA
      //EL SEGUNDO INDICE ES PARA LA COLUMNA
  
      //[1, 2 ,3], 1 = [0][0]
      //[4, 5, 6], 2 = [0][1]
      //[7, 8, 9], 3 = [0][2]
      //           4 = [1][0]
      //           5 = [1][1]
      //           6 = [1][2]
      //           7 = [2][0]
      //           8 = [2][1]
      //           9 = [2][2]
  
      //Filas
      for (let i = 0; i < this.Table.length; i++)
        {
        if (
          this.Table[i][0] === this.Table[i][1] &&
          this.Table[i][1] === this.Table[i][2] &&
          this.Table[i][0] !== 0
        ) 
        {
          this.winner = true;
          return console.log(this.Table[i][0] + ' ' + 'is winner');
        }
        }
  
      //Columnas
      for (let i = 0; i < this.Table[0].length; i++)
        {
        if (
          this.Table[0][i] === this.Table[1][i] &&
          this.Table[1][i] === this.Table[2][i] &&
          this.Table[0][i] !== 0
        ) {
          this.winner = true;
          return console.log(this.Table[0][i]  + ' ' + 'is winner');
        }
        }
  
      //Diagonales
      if (
        this.Table[0][0] === this.Table[1][1] &&
        this.Table[1][1] === this.Table[2][2] &&
        this.Table[0][0] !== 0
      ) {
        this.winner = true;
        return console.log(this.Table[0][0]);
      }
      if (
        this.Table[0][2] === this.Table[1][1] &&
        this.Table[1][1] === this.Table[2][0] &&
        this.Table[0][2] !== 0
      ) {
        this.winner = true;
        return console.log(this.Table[0][2]  + ' ' + 'is winner');
      }
      return null;
    }
    isGameOver() {
      if (this.winner) {
        return console.log('HAY UN GANADOR');
      } else if (this.isFull()) {
        return console.log('Empate');
      } else {
        return console.log('Sigue el juego');
      }
    }
    isFull() {
      for (let i = 0; i < this.Table.length; i++) {
        for (let j = 0; j < this.Table[0].length; j++) {
          if (this.Table[i][j] === 0) {
            return false;
          }
        }
      }
      return true;
    }
    display() {
      for (let grid of this.Table) {
        console.log(grid.join(' | '));
      }
      console.log('---------');
    }
  
    reset() {
      this.winner = false;
  
      for (let i = 0; i < this.Table.length; i++) {
        for (let j = 0; j < this.Table[0].length; j++) {
          this.Table[i][j] = 0;
        }
      }
    }
    makeMove(row, col) {
      return this.fillTableWithMark(this.currentPlayer, row, col);
    }
  }
  
  const game = new Tabla('X', 'P');
  
