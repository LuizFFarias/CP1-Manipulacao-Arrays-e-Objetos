let salarios = [
    {nome: 'Luiz', salario: 1680.00},
    {nome: 'Felipe', salario: 1934.20},
    {nome: 'Jorge', salario: 2458.10},
    {nome: 'Pedro', salario: 1920.30},
    {nome: 'Alberto', salario: 2670.40},
    {nome: 'Paulo', salario: 2642.00},
    {nome: 'Yuri', salario: 5240.00},
    {nome: 'Kaique', salario: 1620.90},
    {nome: 'Michael', salario: 3442.30},
    {nome: 'Rogerio', salario: 1500.00},
]

console.log(salarios);
// console.log(valorSalario);

    let valorSalario = salarios.map(slr => (slr.salario <= 2000) ? slr.salario + (slr.salario * 0.15) : slr.salario + (slr.salario * 0.1));
    console.log("Salário com reajuste: ", valorSalario) ;

    let maiorSalario = valorSalario.filter(maiorSlr => maiorSlr > 2500);
    console.log("Salários maiores que R$2500", maiorSalario);
    

