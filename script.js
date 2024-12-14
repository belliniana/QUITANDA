document.getElementById('submit').addEventListener('click', function() {
    const opcao = parseInt(document.getElementById('opcao').value);

    function comprabanana() {
        alert("O preço da banana é de R$ 1,30. No caso de comprar 12 bananas ou mais, ela sai por R$ 1,00 cada.");
        var quantidadeBanana = Number(prompt("Quantas bananas você irá levar:"));
        if (quantidadeBanana < 12) {
            alert(`O valor da sua compra foi de R$ ${(quantidadeBanana * 1.30).toFixed(2)}`);
        } else {
            alert(`O valor da sua compra foi de R$ ${(quantidadeBanana * 1.00).toFixed(2)}`);
        }
    }

    function compraMaca() {
        alert("O quilo da maçã é de R$ 8,55. A partir de 2kg, sai por R$ 6,99.");
        var quantidadeMaca = Number(prompt("Quantos quilos você irá levar:"));
        if (quantidadeMaca < 2) {
            alert(`O valor da sua compra foi de R$ ${(quantidadeMaca * 8.55).toFixed(2)}`);
        } else {
            alert(`O valor da sua compra foi de R$ ${(quantidadeMaca * 6.99).toFixed(2)}`);
        }
    }

    function compraManga() {
        alert("Escolha qual manga você quer:");
        alert("1 - Manga Palmer (R$ 5,49 por kg)\n2 - Manga Rosa (R$ 10,00 por kg)\n3 - Manga Tommy (R$ 2,99 por kg)");
        const opcaoManga = Number(prompt("Digite o número da opção:"));
        var quantidadeManga = Number(prompt("Quantos kg irá levar?"));

        switch (opcaoManga) {
            case 1:
                alert(`O valor da sua compra foi de R$ ${(quantidadeManga * 5.49).toFixed(2)}`);
                break;
            case 2:
                alert(`O valor da sua compra foi de R$ ${(quantidadeManga * 10.00).toFixed(2)}`);
                break;
            case 3:
                alert(`O valor da sua compra foi de R$ ${(quantidadeManga * 2.99).toFixed(2)}`);
                break;
            default:
                alert("Opção inválida. Por favor, escolha uma opção válida.");
                break;
        }
    }

    function compraLaranja() {
        alert("Função de compra de laranja ainda não implementada.");
    }

    switch (opcao) {
        case 1:
            alert("Você escolheu Banana.");
            comprabanana();
            break;
        case 2:
            alert("Você escolheu Maçã.");
            compraMaca();
            break;
        case 3:
            alert("Você escolheu Manga.");
            compraManga();
            break;
        case 4:
            alert("Você escolheu Laranja.");
            compraLaranja();
            break;
        case 5:
            alert("Você escolheu Pera.");
            break;
        default:
            alert("Opção inválida. Por favor, escolha um número de 1 a 5.");
            break;
    }
});