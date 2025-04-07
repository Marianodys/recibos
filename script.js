const contraseñas = {

  '03': {
  '93738883': '007' ,
  '30128717': '011' ,
  '35283545': '023' ,
  '38088191': '058' ,
  '32336277': '064' ,
  '94446338': '078' ,
  '41082688': '088' ,
  '41338624': '093' ,
  '32941302': '094' ,
  '33712892': '097' ,
  '24380411': '103' ,
  '38407272': '105' ,
  '32592191': '108' ,
  '41127480': '112' ,
  '35838329': '116' ,
  '29196963': '118' ,
  '40086803': '121' ,
  '26456803': '124' ,
  '35369643': '125' ,
  '44775898': '127' ,
  '27499118': '132' ,
  '30738814': '133' ,
  '28872941': '134' ,
  '42994155': '137' ,
  '42650018': '138' ,
  },
  '02': {
  '93738883': '007' ,
  '30128717': '011' ,
  '35283545': '023' ,
  '38088191': '058' ,
  '32336277': '064' ,
  '94446338': '078' ,
  '41082688': '088' ,
  '41338624': '093' ,
  '32941302': '094' ,
  '41942311': '096' ,
  '33712892': '097' ,
  '24380411': '103' ,
  '38407272': '105' ,
  '32592191': '108' ,
  '38469908': '111' ,
  '41127480': '112' ,
  '35838329': '116' ,
  '29196963': '118' ,
  '40086803': '121' ,
  '26456803': '124' ,
  '35369643': '125' ,
  '44775898': '127' ,
  '27499118': '132' ,
  '30738814': '133' ,
  '28872941': '134' ,
  '40916046': '135' ,
  '37908338': '136' ,
  '42994155': '137' ,
  '42650018': '138' ,
  },
  '01': {
  '93738883': '007' ,
  '30128717': '011' ,
  '35283545': '023' ,
  '38088191': '058' ,
  '32336277': '064' ,
  '94446338': '078' ,
  '41082688': '088' ,
  '41338624': '093' ,
  '32941302': '094' ,
  '41942311': '096' ,
  '33712892': '097' ,
  '24380411': '103' ,
  '38407272': '105' ,
  '32592191': '108' ,
  '38469908': '111' ,
  '41127480': '112' ,
  '35838329': '116' ,
  '29196963': '118' ,
  '40086803': '121' ,
  '26456803': '124' ,
  '35369643': '125' ,
  '44775898': '127' ,
  '27499118': '132' ,
  '30738814': '133' ,
  '28872941': '134' ,
  '40916046': '135' ,
  '37908338': '136' ,
  },
  '12': {
  '93738883': '007' ,
  '30128717': '011' ,
  '35283545': '023' ,
  '38088191': '058' ,
  '32336277': '064' ,
  '42650020': '076' ,
  '94446338': '078' ,
  '41082688': '088' ,
  '41338624': '093' ,
  '32941302': '094' ,
  '41942311': '096' ,
  '33712892': '097' ,
  '24380411': '103' ,
  '38407272': '105' ,
  '32592191': '108' ,
  '38469908': '111' ,
  '41127480': '112' ,
  '35838329': '116' ,
  '29196963': '118' ,
  '40086803': '121' ,
  '26456803': '124' ,
  '35369643': '125' ,
  '44819298': '126' ,
  '44775898': '127' ,
  '46833937': '128' ,
  '27499118': '132' ,
  '30738814': '133' ,
  '28872941': '134' ,
  '40916046': '135' ,
  '37908338': '136' ,
},
  '11': {
  '93738883': '007' ,
  '30128717': '011' ,
  '35283545': '023' ,
  '38088191': '058' ,
  '32336277': '064' ,
  '42650020': '076' ,
  '94446338': '078' ,
  '41082688': '088' ,
  '41338624': '093' ,
  '32941302': '094' ,
  '41942311': '096' ,
  '33712892': '097' ,
  '24380411': '103' ,
  '38407272': '105' ,
  '32592191': '108' ,
  '38469908': '111' ,
  '41127480': '112' ,
  '35838329': '116' ,
  '29196963': '118' ,
  '40086803': '121' ,
  '26456803': '124' ,
  '35369643': '125' ,
  '44819298': '126' ,
  '44775898': '127' ,
  '46833937': '128' ,
  '27499118': '132' ,
  '30738814': '133' ,
  '28872941': '134' ,
  '40916046': '135' ,
  '37908338': '136' ,
},
 'SAC': {
  '41081845': '001' ,
  '93738883': '007' ,
  '30128717': '011' ,
  '35283545': '023' ,
  '18840437': '040' ,
  '38088191': '058' ,
  '32336277': '064' ,
  '42650020': '076' ,
  '94446338': '078' ,
  '40740173': '079' ,
  '41082688': '088' ,
  '41338624': '093' ,
  '32941302': '094' ,
  '41942311': '096' ,
  '33712892': '097' ,
  '39044581': '102' ,
  '24380411': '103' ,
  '44403460': '104' ,
  '38407272': '105' ,
  '32592191': '108' ,
  '38469908': '111' ,
  '41127480': '112' ,
  '35838329': '116' ,
  '29196963': '118' ,
  '35283576': '120' ,
  '40086803': '121' ,
  '29067057': '122' ,
  '41058794': '123' ,
  '26456803': '124' ,
  '35369643': '125' ,
  '44819298': '126' ,
  '44775898': '127' ,
  '46833937': '128' ,
  '27499118': '132' ,
},
};

function descargarPDF() {
  const folder = document.getElementById('folder').value;
  const numero = document.getElementById('numero').value;
  const password = document.getElementById('password').value;

  if (!contraseñas[folder]) {
    alert('Carpeta no válida.');
    return;
  }

  if (!contraseñas[folder][numero]) {
    alert('Número no válido para la carpeta seleccionada.');
    return;
  }

  if (password !== contraseñas[folder][numero]) {
    alert('Contraseña incorrecta. No tienes acceso para descargar el archivo.');
    return;
  }

  if (!numero) {
    alert('Por favor, ingrese un número.');
    return;
  }

  const link = document.createElement('a');
  link.href = `${folder}/${numero}.pdf`;
  link.download = `${numero}.pdf`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
