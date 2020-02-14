xhr = new XMLHttpRequest();
/*
xhr.open('GET', 'http://api.github.com/users/diego3g');
xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
    }
}*/
/*
var minhaPromise = function(){
    return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET','http://api.github.com/users/diego3g');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('erro na requisição');
                }
            }
        }
    });
}

//var resultado = minhaPromise();
minhaPromise()
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.log(error);
});
*/
//post,put,delete
/*axios.get('http://api.github.com/users/diego3g')
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.log(error);
});*/
/*
var checaIdade = function(idade){
    return new Promise(function(resolve,reject){
        if(idade !== ''){
            if(idade >= 18){                    
                setTimeout(() => resolve("done"), 2000);
            }else{ 
                setTimeout(() => reject("done"), 2000);                   
            }
        }        
    });
}

checaIdade(16)
.then(function(response){
    console.log("Maior que 18");
})
.catch(function(error){
    console.log("Menor que 18");
});
*/

/*var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var nome = '';
var linkPesquisa = '';

buttonElement.setAttribute('onclick','pesquisaGit('+nome+')');

var link = 'http://api.github.com/users/';

var pesquisaGit = function(nome){
    nome = inputElement.value;
    alert(nome);
}

if(nome !== ''){
    linkPesquisa = link+nome;
}


alert(linkPesquisa);
axios.get(linkPesquisa+nome)
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.log(error);
})


inputElement.value = '';*/
