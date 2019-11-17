function teste(options) {
    options = (typeof options !== "object") ? {} : options;
    options.nome = options.nome || 'João';
    options.idade = options.idade || 20 ;
    console.log(options);
 };

 var pessoa = function(nome, idade){
    //this se refere ao objeto que está sendo instanciado
    this.nome = nome || 'João';
    this.idade = idade || 20 ;
}

pessoa()