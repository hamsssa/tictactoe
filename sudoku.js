
///////////////+-------+-------+-------+
///////////////| 0 0 0 | 0 0 0 | 0 0 0 |
///////////////| 0 0 0 | 0 0 0 | 0 0 0 |
///////////////| 0 0 0 | 0 0 0 | 0 0 0 |
///////////////+-------+-------+-------+
///////////////| 0 0 0 | 0 0 0 | 0 0 0 |
///////////////| 0 0 0 | 0 1 0 | 0 0 0 |
///////////////| 0 0 0 | 0 0 0 | 0 0 0 |
///////////////+-------+-------+-------+
///////////////| 0 0 0 | 0 0 0 | 0 0 0 |
///////////////| 0 0 0 | 0 0 0 | 0 0 0 |
///////////////| 0 0 0 | 0 0 0 | 0 0 0 |
///////////////+-------+-------+-------+
///// 1 = [4][][]

//Objetivo = rellenar con cifras del 1 al 9
///COSAS QUE NO PUEDEN PASAR: Que un numero se repita en una subcuadricula, fila o columna.



class Game 
{
    constructor(mark)
    {
        //81 = [8] (Ultima fila) [2](Columna segunda dimension) [2](Columna tercera dimension)
        //Primer indice = BLOQUE
        //Segundo indice = FILA
        //Tercer indice = COLUMNA
        //49 = [5][1][0]
        //70 = [7][2][0]
        //20 = [2][1][1]

        //Las columnas se acceden haciendo - 9
        //[[1,  2,  3],  [4 , 5,  6], [7, 8,   9]],
        //[[10, 11, 12], [13, 14, 15],[16, 17, 18]],
        //[[19, 20, 21], [22, 23, 24],[25, 26, 27]],
        //[[28, 29, 30], [31, 32, 33],[34, 35, 36]],
        //[[37, 38, 39], [40, 41, 42],[43, 44, 45]],
        //[[46, 47, 48], [49, 50, 51],[52, 53, 54]],
        //[[55, 56, 57], [58, 59, 60],[61, 62, 63]],
        //[[64, 65, 66], [67, 68, 69],[70, 71, 72]],
        //[[73, 74, 75], [76, 77, 78],[79, 80, 81]]
        this.table =  [
            [[0, 0, 0], [0, 3, 0], [0, 0, 0]],
            [[0, 0, 8], [0, 0, 0], [0, 4, 0]],
            [[0, 9, 0], [0, 5, 0], [0, 0, 0]],
            [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
            [[0, 0, 0], [0, 5, 0], [0, 0, 0]],
            [[0, 0, 0], [0, 0, 0], [0, 7, 0]],
            [[0, 7, 0], [0, 0, 0], [0, 0, 0]],
            [[0, 0, 0], [0, 9, 0], [0, 6, 0]],
            [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
            ]
            //Primer indice = BLOQUE
            //Segundo indice = FILA
            //Tercer indice = COLUMNA
            //49 = [5][1][0]
            //70 = [7][2][1]
            //20 = [2][1][1]

        this.mark = mark    
    }
seeTable()
{       
    console.log(this.table)
}
game()
{
    console.log("Para jugar y ver la tabla es con seeTable()", '\n' , 
            
    )
}
fillTable(mark, block, row, column)
{
    if(mark === 0 || mark > 9 )
    { 
        console.log('Numeros del 1 al 9')
    }
    else if (/[a-zA-Z]/.test(mark))    
    {
        console.log('No valen letras')
    }
    else if(block >= 9 || row >= 3 || column >= 3)
    {
        console.log('No puedes superar los limites de la tabla')
    }
    else
    {
        this.table[block][row][column] = mark;
    }
}
checkWinner()
{
    for (let block = 0; block < this.table.length; block++)
    {
        const elementosBloque = [];
        for (let i = 0; i < this.table[block].length; i++) 
        {
          elementosBloque.push(...this.table[block][i]);
         }
        const hayDuplicados = new Set(elementosBloque).size !== elementosBloque.length;
        if (hayDuplicados) 
        {
          console.log("Duplicados en el bloque", block);
          return false;
        }
     }

     for (let filaGlobal = 0; filaGlobal < this.table[0].length; filaGlobal++) 
    {
        const elementosFila = [];
        for (let i = 0; i < this.table.length; i++) 
        {
            elementosFila.push(...this.table[i][filaGlobal]);
        }
        const hayDuplicados = new Set(elementosFila).size !== elementosFila.length;
        if (hayDuplicados)
        {
          console.log("Duplicados en la fila global", filaGlobal);
          return false;
        }
    }
    for (let columnaGlobal = 0; columnaGlobal < this.table[0][0].length; columnaGlobal++) 
    {
        const elementosColumna = [];
   for(let row = 0; row < this.table[0].length; row++)
        {
            elementosColumna.push(this.table[0][row][columnaGlobal]);
        }
        const hayDuplicados = new Set(elementosColumna).size !== elementosColumna.length;

        if(hayDuplicados)
        {
         console.log("Duplicados en la fila global", columnaGlobal);
          return false;
        }

    }
    console.log("Has ganado")
    return true;    
}
reset()
{
    this.table =  [
        [[0, 0, 0], [0, 3, 0], [0, 0, 0]],
        [[0, 0, 8], [0, 0, 0], [0, 4, 0]],
        [[0, 9, 0], [0, 5, 0], [0, 0, 0]],
        [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
        [[0, 0, 0], [0, 5, 0], [0, 0, 0]],
        [[0, 0, 0], [0, 0, 0], [0, 7, 0]],
        [[0, 7, 0], [0, 0, 0], [0, 0, 0]],
        [[0, 0, 0], [0, 9, 0], [0, 6, 0]],
        [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
        ]
}
}
const juego = new Game();

