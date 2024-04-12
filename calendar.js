let colorCounts = {};
function colorirDia() {
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');
    let tds = calendar.getElementsByTagName('td');
    if (parseInt(days) > 30) {
        alert("Esse dia é inválido. O dia indicado não pode ser maior do que 30.");
        return; 
    }
    let index = parseInt(days) - 1;
    if (index >= 0 && index < tds.length) {
        if (tds[index].style.backgroundColor !== '') {
            alert('Esse dia já foi selecionado. Por favor, selecione outro dia!');
            return; 
        }
        if (colorCounts[color] >= 3) {
            alert('Nosso veículos só funcionam três vezes por mês. Por favor selecione outro veículo!');
            return; 
        }
        colorCounts[color] = (colorCounts[color] || 0) + 1;
        tds[index].style.backgroundColor = color;
    } else {
        alert('Dia selecionado está fora do intervalo válido. Por favor, digite um dia válido!');
 
    }
 
}

    
