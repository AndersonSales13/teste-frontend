class Data {

    constructor(url) {
        this._jsonUrl = url;//URL da API;
        this._jsonData;//Retorno dos Dados da API;

        this.getJson();
    }

    get jsonUrl(){
        return this._jsonUrl;
    }

    get jsonData() {
       return this._jsonData;
    }

    set jsonData(value) {
        this._jsonData = value;
     }



    getJson(){//Consumindo API;
      
        let xhr = new XMLHttpRequest();//Instanciando o objeto XHR;

        xhr.open("GET", this.jsonUrl);//Iniciando Requisição;
        xhr.send();//Enviando Requisição
        
        xhr.onreadystatechange = ()=>{//Tratando resposta do servidor
            
            let status = xhr.status;
            let readyState = xhr.readyState;

            if (readyState == 4 && status == 200) {
                //Conexão realizada com sucesso
                
                this.jsonData = JSON.parse(xhr.response);
            } else {
                //Ocorreu algum erro!    

                console.log("Erro: "+status);
            }
        };
    }








}