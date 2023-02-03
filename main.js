//create an acouter with closure 
// I try to resolve to this way but dosn`t work !!!
/*function counter() {
  let sum = 0;

  const increase_sum = function() {

    sum = sum + 1;
    console.log(sum);
  }
  
  return {
    increase_sum : increase_sum
  };


}

const countFunction = counter();

function cont() {
  let rest = 0;

  const decresce_rest = function() {
    rest = rest -1;
    console.log(rest)
  }

  return {
    decresce_rest : decresce_rest
  };
  
}

const functionCount = cont();*/

// so i try to do this way and works pretty well
let counter = (
  function () {
    let sum = 0;
    return {
      increase_sum: function () {
        sum = sum + 1;
        console.log(sum);
      },
      decresce_rest: function () {
        sum = sum -1;
        console.log(sum)
      }
    }
  }
)()

document.getElementById("sum").addEventListener("click",
  function () { counter.increase_sum() })
document.getElementById("rest").addEventListener("click",
  function () { counter.decresce_rest() })