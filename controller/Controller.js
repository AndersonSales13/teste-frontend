class ReportController {

    constructor(){
    
        this.dataJson = new Data("https://5c55a41109db1d0014ab6140.mockapi.io/v1/averagesJson");//Link da API com os dados a serem consumidos(API com os dados fornecidos pela Equipe SENAI);

        this.showGraphic();
        this.btnScrollTop();
        this.btnScrollTopFooter();
        this.initialize();
    }

    initialize(){
        setInterval(()=>{
            this.showbtnScrollTop();
        }, 100);
    }

    showbtnScrollTop(){//Condições para o botão ScrollTop ser exibido na tela
        let btn = document.querySelector(".btn-back-top");
        let btnFooter = document.querySelector(".btn-back-top-footer");
        
        if (window.scrollY >= 300 && window.scrollY <= 1920) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }

        if (window.scrollY >= 1921) {
            btnFooter.style.display = "inline-block";
        } else {
            btnFooter.style.display = "none";
        }
    }

    btnScrollTop(){//Definições do Botão ScrollTop do Section
        let btn = document.querySelector(".btn-back-top");
        let tooltip = document.querySelector(".tooltip-body");
        
        btn.addEventListener("click", ()=>{
            window.scrollTo({
                behavior: "smooth",
                top: 0,
                left: 0
            });
        });

        btn.addEventListener("mouseover", ()=>{
            tooltip.style.display = "block";
        });

        btn.addEventListener("mouseout", ()=>{
            tooltip.style.display = "none";
        });
    }

    btnScrollTopFooter(){//Definições do Botão ScrollTop do Footer
        let btn = document.querySelector(".btn-back-top-footer");
        let tooltip = document.querySelector(".tooltip-footer");
        
        btn.addEventListener("click", ()=>{
            window.scrollTo({
                behavior: "smooth",
                top: 0,
                left: 0
            });
        });

        btn.addEventListener("mouseover", ()=>{
            tooltip.style.display = "block";
        });

        btn.addEventListener("mouseout", ()=>{
            tooltip.style.display = "none";
        });
    }

    showGraphic(){//Mostrando o Gráfico
        document.querySelector("#click").addEventListener("click", ()=>{
            document.querySelector("#graphic").style.display = "block";
            
            this.addDataGraph(this.dataJson.jsonData);
            
            document.querySelector("#click").disabled = true;

            window.scrollTo({
                behavior: "smooth",
                left: 0,
                top: 840});
        });
    }

    addDataGraph(data) {//Adicionando dados no Gráfico

        data[0].regionals.forEach((element, index) => {//Adicionando as médias Estaduais
            let description;


            switch (element.description) {
                case "AC":
                    description = "Acre";
                break;
                case "AL":
                    description = "Alagoas";
                break;
                case "AM":
                    description = "Amazonas";
                break;
                case "AP":
                    description = "Amapa";
                break;
                case "BA":
                    description = "Bahia";
                break;
                case "CE":
                    description = "Ceará";
                break;
                case "DF":
                    description = "Distrito Federal";
                break;
                case "ES":
                    description = "Espirito Santo";
                break;
                case "GO":
                    description = "Goiás";
                break;
                case "MA":
                    description = "Maranhão";
                break;
                case "MG":
                    description = "Minas Gerais";
                break;
                case "MS":
                    description = "Mato Grosso do Sul";
                break;
                case "MT":
                    description = "Mato Grosso";
                break;
                case "PA":
                    description = "Pará";
                break;
                case "PB":
                    description = "Paraiba";
                break;
                case "PE":
                    description = "Pernambuco";
                break;
                case "PI":
                    description = "Piauí";
                break;
                case "PR":
                    description = "Paraná";
                break;
                case "RJ":
                    description = "Rio de Janeiro"; 
                break;
                case "RN":
                    description = "Rio Grande do Norte";
                break;
                case "RO":
                    description = "Rondônia";
                break;
                case "RR":
                    description = "Roraima";    
                break;
                case "RS":
                    description = "Rio Grande do Sul";
                break;
                case "SC":
                    description = "Santa Catarina";    
                break;
                case "SE":
                    description = "Sergipe";    
                break;
                case "SP":
                    description = "São Paulo";    
                break;
                case "TO":
                    description = "Tocantis";    
                break;
                default:
                    alert("Estado Inexistente! Tente Novamente!")
                break;
            }
            
            let average = element.average;

            let row = document.createElement("div");
            row.classList.add("row", "line");

            row.innerHTML =  `  <div class="cols-td col-md-4">
                                    <p>${description}</p>
                                </div>
                                <div class="col-md-6">
                                    <div class="bars-graph"></div>
                                    <div class="row">
                                        <div class="cols-td-bars col-md-4"></div>
                                        <div class="cols-td-bars col-md-4"></div>
                                        <div class="cols-td-bars col-md-4"></div>
                                    </div>
                                </div>
                                <div class="cols-td col-md-2">
                                    <p>${average.toFixed(2)}%</p>
                                </div> `

            
            
            document.getElementById("graphic").appendChild(row);
            
            document.querySelectorAll("#graphic .bars-graph")[index].style.width = ""+average+"%";
            
        });


        //Adicionando a média nacional
        let averageNat = data[0].national;

        let averageNatRow = document.createElement("div");
        averageNatRow.classList.add("national-average");

        averageNatRow.innerHTML =  `<div class="row">
                                        <div class="col-md-6 av-total-title">
                                            <p>Média Nacional</p>    
                                        </div>
                                        <div class="col-md-6 av-total-porc">
                                            <p>${averageNat.toFixed(2)}%</p>
                                        </div>
                                    </div>`

        document.getElementById("graphic").appendChild(averageNatRow);
    }

    
}