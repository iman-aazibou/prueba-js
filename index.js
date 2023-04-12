
function contarCerosEntreDosUnos(numero) {
  let ultimosDosUnos = numero.match(/1.*1/g);
  if (!ultimosDosUnos || ultimosDosUnos.length === 0) {
    return 0;
  }
  let cerosEntreDosUnos = ultimosDosUnos[ultimosDosUnos.length - 1].match(/0+/g);
  if (!cerosEntreDosUnos || cerosEntreDosUnos.length === 0) {
    return 0;
  }
  return cerosEntreDosUnos[cerosEntreDosUnos.length - 1].length;
}

function enteroABinario(entero) {
  if (entero === 0) {
    return "0";
  } else {
    let resultado = "";
    while (entero > 0) {
      resultado = (entero % 2).toString() + resultado;
      entero = Math.floor(entero / 2);
    }
    if (resultado.includes("0")) {
      if ((resultado)) {
        console.log(resultado)
        return contarCerosEntreDosUnos(resultado);
      } else {
        return "0"
      }
    } else {
      return "0";
    }
    return resultado;
  }
}

// console.log(enteroABinario(9))
// console.log(enteroABinario(545))
// console.log(enteroABinario(7))
// console.log(enteroABinario(6))




