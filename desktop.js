    var w$name$ = prompt(`Por favor Digite seu nome: `);
    if(w$name$ == null){
        window.alert(`Você não digitou nada em seu nome, porfavor volte a tela seguinte e insira seu nome.`);
    }   
    window.alert(`Seja bem-vindo-a sr-a ${w$name$} a nossa compania Freddy Fazbear ENTERTAIMENT, Espero que tenha uma ótima experiencia em nosso site.`);
    var years = Number(prompt(`Digite somente o ano em que você nasceu: `));
    var day = Number(prompt(`Digite o dia do seu aniversario`));
    var months = Number(prompt(`Digite o número do mês do seu aniversario`));
    var anoAtual = 2022;
    var idade = anoAtual - years;
    if(idade >= 18){
       var ficha = confirm(`Parabéns seu cadastro foi concluido com sucesso, deseja retirar o número da sua carterinha da freddy fazbear?`)
       if(ficha == true){
        var numberofWallet = idade / day + months * day - months % years;      
          window.alert(`copie os números a frente:${numberofWallet} `);
          window.alert(`Após copiar o Número da carterinha clique em OK e localize o botão azul localizado no canto superior direito  na sua tela`);
       }
    }  
    else{
        var numberofWallet = idade / day + months * day - months % years;      
        window.alert(`copie os números a frente:${numberofWallet} `);
        window.alert(`Após copiar o Número da carterinha clique em OK e localize o botão azul localizado no canto superior direito  na sua tela`);
    }