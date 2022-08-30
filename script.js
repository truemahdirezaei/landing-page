const body = document.body;

function changeBackground(number) {
    let previous;
    if(body.className){
        previous = body.className;
    }
    body.className = '';
  switch (number) {
    case "1":
      return (previous === 'background-1' ? false : body.classList.add('background-1'));
    case "2":
        return (previous === 'background-2' ? false : body.classList.add('background-2'));
    case "3":
        return (previous === 'background-3' ? false : body.classList.add('background-3'));
      default:
        break;
  }
}
