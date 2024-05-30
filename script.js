let turn = 'X';
let array = [[1,2,3],[4,5,6],[7,8,9]];
let copyOfmatrix ;
let flag = 1;
function chageTurn()
{
    turn = turn === 'X' ? 'O' : 'X';
   
}

let turnBox = document.querySelector(".turnbox");
turn.innerText = `${turn} turn `;
let allBoxs = document.querySelectorAll(".box");
for(let i=0;i <allBoxs.length; i++ )
{   
  
    allBoxs[i].addEventListener("click",function(){


       if(this.innerText != 'X' && this.innerHTML != 'O') 
       {
         
         if(flag)this.innerText = turn;
        if(checkWin(allBoxs) === 1) 
        {
            winner = document.querySelector(".winner");
            winner.style.height = "20vw";
               let t ;
                flag =0;
            // chageTurn();
            turnBox.innerText =`${turn} is winner !`;
            
        }
        else{
            chageTurn();
        
             turnBox.innerText =`${turn} turn `;
        }
       }
    })
 
}

function checkWin(allBoxs)
{
   
    let idx = 0;
    for(let i=0; i<3; i++)
    {   
        let str ="";
        for(let j=0; j<3; j++)
        {
            array[i][j] = allBoxs[idx].innerText;
            idx++;
            str += array[i][j];

        }
        // console.log(str);
    }


    for(let i=0; i<3; i++)
    {
        if(array[i][0] == array[i][1] && array[i][0] == array[i][2] && array[i][0] != ""  ) return 1;
        if(array[0][i] == array[1][i] && array[0][i] == array[2][i]  && array[0][i] != "" ) return 1;
    }

    if(array[0][0] == array[1][1] && array[0][0] == array[2][2] && array[0][0] != "" ) return 1;

    if(array[0][2] == array[1][1] && array[0][2] == array[2][0]  && array[1][1] != "")  return 1;
    return 0;

}

resetButton = document.querySelector(".reset");
resetButton.addEventListener("click",()=> reset());


function reset()
{
    flag = 1;
    let allBoxs =  document.querySelectorAll(".box");
    turnBox.innerText = `${turn} turn `;
    for(let i=0; i<allBoxs.length; i++) allBoxs[i].innerText = "";
    
    let idx = 0;
    for(let i=0; i<3; i++)
    {   
        let str ="";
        for(let j=0; j<3; j++)
        {
            array[i][j] = allBoxs[idx].innerText;
            idx++;
            str += array[i][j];

        }
        
        
    }

    winner = document.querySelector(".winner");
    winner.style.height = "0vw";

}