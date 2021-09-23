const form = document.querySelector ('form');

const getInputNumberValue = id => {
    return Number(document.getElementById(id).value)
  }

  const getInputSelectedValue = id => {
    const select = document.getElementById(id)
    return select.options[select.selectedIndex].value
  }

  form.addEventListener ('submit', function (e) {
      e.preventDefault()

      const idade = getInputNumberValue('idade');
      const peso = getInputNumberValue('peso');
      const altura = getInputNumberValue('altura');
      const atividade = getInputNumberValue('atividade');
      const genero = getInputNumberValue('genero');

      if (!peso) {
        setResultado('Peso invalido', false)
        return;
    }

    if (!altura) {
        setResultado('Altura invalida', false)
        return;
    }

    if (!idade) {
        setResultado('Idade invalida', false)
        return;
    }
      
      const tmb = Math.round (
          genero === 'feminino'
          ? (655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade))
          : (66 + (13.7 * peso) + (5 * altura) - (6.8 * idade))
      )

      const manterCorpo = Math.round ((tmb * Number(atividade)))
      const perderPeso = manterCorpo - 450
      const ganharPeso = manterCorpo + 450

      const msg = `Sua TMB é ${tmb} Kcal, para manter o seu corpo você precisa consumir ${manterCorpo} Kcal, ` +
       `para perder peso você precisa consumir ${perderPeso} Kcal` +
       ` e para ganhar peso você precisa consumir ${ganharPeso} Kcal`;

      setResultado (msg, true);

      console.log(tmb);
  })

    function criaP () {
        const p = document.createElement('h3');
        return p;
    }
    
    function setResultado(msg, isValid) {
        const resultado = document.querySelector ('.resultado');
        resultado.innerHTML = '';
        
        const p = criaP();
    
        if (isValid) {
            p.classList.add ('paragrafo-resultado');
        } else {
            p.classList.add ('bad');
        }
    
        p.innerHTML = msg;
        resultado.appendChild(p);
    }

    
