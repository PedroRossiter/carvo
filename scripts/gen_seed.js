// Gera scripts/seed_full.sql a partir de um dataset maior de carros.
// Rodar: node scripts/gen_seed.js

const fs = require("fs");

const MARCAS = [
  "Chevrolet", "Fiat", "Volkswagen", "Hyundai", "Toyota", "Honda",
  "Renault", "Nissan", "Jeep", "Peugeot", "Citroen", "BYD", "GWM",
  "Chery", "Mitsubishi", "Kia", "Volvo",
  "Ford", "Land Rover", "BMW", "Mercedes-Benz", "Audi", "Suzuki",
  "JAC", "Omoda", "Neta", "RAM", "Geely",
];
const slug = (s) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// cada carro: marca, modelo, powertrain, categoria, preco, autonomia_oficial, potencia_cv, cambio, portas, porta_malas_l, pratico
const CARROS = [
  // Chevrolet
  ["Chevrolet","Onix","flex","hatch",89990,null,82,"Manual",5,265,"Consumo prático de cidade em torno de 9,5-10 km/l com gasolina."],
  ["Chevrolet","Onix Plus","flex","sedan",96990,null,82,"Automático (CVT)",4,469,"Bem parecido com o Onix hatch no consumo: 9,5-10 km/l na cidade, porta-malas bem maior."],
  ["Chevrolet","Tracker","flex","suv",139990,null,116,"Automático",5,410,"Turbo ajuda na retomada, mas consumo prático de cidade fica perto de 9-9,5 km/l."],
  ["Chevrolet","Spin","flex","suv",129990,null,106,"Automático",5,163,"7 lugares — mas com os bancos do fundo em uso, consumo cai pra perto de 8,5 km/l na cidade."],
  ["Chevrolet","Montana","flex","picape",119990,null,116,"Automático",4,650,"Picape de caçamba pequena, ótima no dia a dia urbano: 9-9,5 km/l mesmo carregada."],
  ["Chevrolet","S10","flex","picape",219990,null,200,"Automático",4,1000,"Encorpada — consumo prático fica em torno de 8 km/l na cidade, menos carregada ou reboque."],

  // Fiat
  ["Fiat","Mobi","flex","hatch",74990,null,75,"Manual",5,235,"O mais em conta da lista. Na cidade, fica entre 9,5-10,5 km/l com gasolina."],
  ["Fiat","Argo","flex","hatch",84990,null,101,"Automático (CVT)",5,300,"Consumo prático de cidade em torno de 9-9,5 km/l com gasolina."],
  ["Fiat","Pulse","flex","suv",99990,null,101,"Automático (CVT)",5,370,"Na cidade, gira em torno de 10-10,5 km/l com etanol e 12,5-13 km/l com gasolina."],
  ["Fiat","Fastback","flex","suv",119990,null,130,"Automático",5,494,"Versão turbo rende bem na estrada; na cidade fica perto de 9 km/l."],
  ["Fiat","Strada","flex","picape",104990,null,101,"Manual",4,650,"A picape mais vendida do Brasil. Consumo prático de cidade: 9,5-10 km/l."],
  ["Fiat","Toro","flex","picape",149990,null,130,"Automático",4,490,"Consumo prático fica perto de 8,5-9 km/l na cidade, um pouco menos com a caçamba carregada."],
  ["Fiat","500e","bev","hatch",178900,"245 km (WLTP)",118,"Automático (redução única)",3,185,"Ideal pra uso urbano — autonomia real fica em torno de 210-220 km."],

  // Volkswagen
  ["Volkswagen","Polo","flex","hatch",84990,null,101,"Automático",5,300,"Consumo prático de cidade em torno de 9-9,5 km/l com gasolina."],
  ["Volkswagen","Virtus","flex","sedan",99990,null,101,"Automático",4,521,"Porta-malas grande pra categoria. Consumo prático parecido com o Polo: 9-9,5 km/l."],
  ["Volkswagen","T-Cross","flex","suv",134990,null,116,"Automático",5,373,"Consumo prático de cidade em torno de 9-9,5 km/l."],
  ["Volkswagen","Nivus","flex","suv",114990,null,116,"Automático",5,415,"Formato de SUV cupê. Consumo prático fica perto de 9-9,5 km/l na cidade."],
  ["Volkswagen","Taos","flex","suv",169990,null,150,"Automático",5,438,"Maior da linha SUV da VW no Brasil. Consumo prático urbano: 8-8,5 km/l."],
  ["Volkswagen","Saveiro","flex","picape",99990,null,101,"Manual",2,655,"Picape de entrada bem popular. Consumo prático de cidade: 9,5-10 km/l."],
  ["Volkswagen","Amarok","flex","picape",259990,null,190,"Automático",4,1114,"Encorpada e robusta. Consumo prático fica em torno de 7,5-8 km/l na cidade."],

  // Hyundai
  ["Hyundai","HB20","flex","hatch",84990,null,116,"Automático",5,300,"Consumo prático de cidade em torno de 9,5-10 km/l com gasolina."],
  ["Hyundai","HB20S","flex","sedan",94990,null,116,"Automático",4,455,"Mesmo motor do HB20 hatch. Consumo prático parecido: 9,5-10 km/l na cidade."],
  ["Hyundai","Creta","flex","suv",124990,null,130,"Automático",5,451,"Um dos SUVs mais vendidos do país. Consumo prático urbano: 9-9,5 km/l."],
  ["Hyundai","Kona","flex","suv",149990,null,130,"Automático",5,466,"Consumo prático de cidade em torno de 9,5 km/l."],
  ["Hyundai","Tucson","hev","suv",219990,null,215,"Automático",5,582,"Não precisa plugar em nada. Consumo prático urbano fica entre 13-14 km/l."],

  // Toyota
  ["Toyota","Yaris","flex","hatch",99990,null,110,"Automático (CVT)",5,270,"Consumo prático de cidade em torno de 9,5-10 km/l."],
  ["Toyota","Corolla","flex","sedan",139990,null,144,"Automático (CVT)",4,470,"Consumo prático fica perto de 10-10,5 km/l na cidade."],
  ["Toyota","Corolla Cross","hev","suv",168590,null,122,"Automático (CVT)",5,440,"Um dos híbridos mais econômicos na prática: 15-16 km/l na cidade, sem plugar em nada."],
  ["Toyota","SW4","flex","suv",349990,null,282,"Automático",5,150,"SUV grande de 7 lugares. Consumo prático fica em torno de 7 km/l na cidade."],
  ["Toyota","Hilux","flex","picape",239990,null,200,"Automático",4,1090,"Robusta e conhecida pela durabilidade. Consumo prático urbano: 7,5-8 km/l."],
  ["Toyota","RAV4","hev","suv",259990,null,222,"Automático (CVT)",5,542,"Híbrido de porte maior. Consumo prático urbano fica entre 13-14 km/l, sem plugar."],

  // Honda
  ["Honda","City","flex","sedan",114990,null,126,"Automático (CVT)",4,519,"Consumo prático fica perto de 10-10,5 km/l na cidade."],
  ["Honda","City Hatchback","flex","hatch",104990,null,126,"Automático (CVT)",5,363,"Mesma mecânica do City sedan. Consumo prático: 10-10,5 km/l na cidade."],
  ["Honda","HR-V","flex","suv",144900,null,177,"Automático (CVT)",5,304,"Consumo prático na cidade fica perto de 9,5-10 km/l."],
  ["Honda","CR-V","hev","suv",219900,null,204,"Automático (CVT)",5,589,"Híbrido sem plugar. No trânsito de cidade grande, consumo prático passa de 14 km/l."],
  ["Honda","Civic","hev","sedan",179990,null,155,"Automático (CVT)",4,519,"Híbrido que não precisa plugar. Na cidade, consumo prático fica entre 14-15 km/l."],

  // Renault
  ["Renault","Kwid","flex","hatch",69990,null,70,"Manual",5,290,"O mais barato da lista. Consumo prático de cidade: 10-11 km/l com gasolina."],
  ["Renault","Sandero","flex","hatch",84990,null,113,"Manual",5,320,"Consumo prático de cidade em torno de 9,5-10 km/l."],
  ["Renault","Logan","flex","sedan",84990,null,113,"Manual",4,510,"Maior porta-malas da categoria. Consumo prático parecido com o Sandero: 9,5-10 km/l."],
  ["Renault","Duster","flex","suv",119990,null,120,"Automático (CVT)",5,475,"Consumo prático de cidade fica em torno de 9 km/l."],
  ["Renault","Kardian","flex","suv",99990,null,116,"Automático (CVT)",5,410,"Turbo novo da Renault. Consumo prático urbano: 9,5-10 km/l."],

  // Nissan
  ["Nissan","Kicks","flex","suv",129990,null,114,"Automático (CVT)",5,432,"Consumo prático de cidade em torno de 9,5 km/l."],
  ["Nissan","Versa","flex","sedan",94990,null,106,"Automático (CVT)",4,470,"Consumo prático fica perto de 9,5-10 km/l na cidade."],
  ["Nissan","Frontier","flex","picape",249990,null,190,"Automático",4,995,"Consumo prático fica em torno de 7,5 km/l na cidade, com motor a diesel disponível também."],

  // Jeep
  ["Jeep","Renegade","flex","suv",129990,null,132,"Automático",5,320,"Consumo prático de cidade em torno de 8,5-9 km/l."],
  ["Jeep","Compass","flex","suv",169990,null,185,"Automático",5,438,"Turbo forte. Consumo prático urbano fica perto de 8-8,5 km/l."],
  ["Jeep","Commander","flex","suv",219990,null,185,"Automático",5,204,"7 lugares. Consumo prático de cidade em torno de 7,5-8 km/l com o porta-malas cheio de uso."],

  // Peugeot
  ["Peugeot","208","flex","hatch",94990,null,116,"Automático",5,265,"Consumo prático de cidade em torno de 9-9,5 km/l."],
  ["Peugeot","2008","flex","suv",134990,null,130,"Automático",5,434,"Consumo prático urbano fica perto de 9 km/l."],

  // Citroen
  ["Citroen","C3","flex","hatch",84990,null,116,"Automático",5,290,"Consumo prático de cidade em torno de 9,5 km/l."],

  // BYD
  ["BYD","Dolphin Mini","bev","hatch",115990,"280 km (WLTP)",75,"Automático (redução única)",5,225,"No dia a dia, com ar-condicionado e trânsito de cidade, a autonomia real fica perto de 220-230 km — cerca de 20% menos que o número oficial."],
  ["BYD","Dolphin","bev","hatch",149800,"340 km (WLTP)",95,"Automático (redução única)",5,345,"Autonomia real de uso urbano costuma ficar entre 270-290 km."],
  ["BYD","Song Plus Premium","phev","suv",219800,"51 km só no elétrico",212,"Automático (redução única)",5,425,"Se você roda até ~50 km/dia e carrega todo dia, pode passar longos períodos sem usar combustível. Depois que a bateria acaba, roda como híbrido comum, por volta de 17 km/l."],
  ["BYD","Yuan Plus","bev","suv",179800,"430 km (WLTP)",204,"Automático (redução única)",5,400,"Uso misto costuma entregar entre 350-370 km reais antes de precisar recarregar."],
  ["BYD","Seal","bev","sedan",229800,"520 km (WLTP)",313,"Automático (redução única)",4,400,"Autonomia real em uso misto fica em torno de 420-440 km."],

  // GWM
  ["GWM","Haval H6 HEV","hev","suv",219900,null,242,"Automático (redução única)",5,600,"Não precisa plugar em nada. No trânsito de cidade, consumo prático fica perto de 12,5-13 km/l."],
  ["GWM","Ora 03","bev","hatch",189900,"401 km (WLTP)",171,"Automático (redução única)",5,228,"Uso misto (cidade + estrada) costuma entregar entre 320-340 km reais antes de precisar recarregar."],
  ["GWM","Poer","flex","picape",219900,null,197,"Automático",4,1136,"Picape mais nova da GWM no Brasil. Consumo prático urbano em torno de 7,5-8 km/l."],

  // Chery
  ["Chery","Tiggo 5x","flex","suv",119990,null,147,"Automático (CVT)",5,410,"Consumo prático de cidade em torno de 8,5-9 km/l."],
  ["Chery","Tiggo 7","flex","suv",159990,null,147,"Automático (CVT)",5,442,"Consumo prático urbano fica perto de 8,5 km/l."],
  ["Chery","Tiggo 8","flex","suv",219990,null,197,"Automático (DCT)",5,193,"7 lugares. Consumo prático de cidade em torno de 8 km/l com uso normal."],
  ["Chery","Arrizo 6","flex","sedan",99990,null,147,"Automático (CVT)",4,480,"Consumo prático fica perto de 9-9,5 km/l na cidade."],

  // Mitsubishi
  ["Mitsubishi","L200 Triton","flex","picape",239990,null,204,"Automático",4,1080,"Consumo prático urbano em torno de 7,5-8 km/l."],
  ["Mitsubishi","Outlander","phev","suv",289990,"55 km só no elétrico",248,"Automático (redução única)",5,461,"Rodando só no elétrico dá pra cobrir boa parte do trajeto do dia a dia; depois disso, consumo prático fica perto de 12 km/l."],
  ["Mitsubishi","Eclipse Cross","flex","suv",169990,null,150,"Automático (CVT)",5,405,"Consumo prático de cidade em torno de 8,5 km/l."],

  // Kia
  ["Kia","Sportage","flex","suv",189990,null,177,"Automático",5,543,"Consumo prático urbano fica perto de 8,5-9 km/l."],
  ["Kia","Cerato","flex","sedan",129990,null,152,"Automático",4,502,"Consumo prático de cidade em torno de 9-9,5 km/l."],

  // Volvo
  ["Volvo","XC40","bev","suv",289990,"418 km (WLTP)",408,"Automático (redução única)",5,419,"Autonomia real em uso misto costuma ficar entre 330-350 km."],
  ["Volvo","EX30","bev","suv",219990,"475 km (WLTP)",272,"Automático (redução única)",5,318,"Autonomia real no dia a dia fica em torno de 390-410 km."],
  ["Volvo","C40","bev","suv",309990,"420 km (WLTP)",408,"Automático (redução única)",5,413,"Autonomia real em uso misto fica perto de 340-360 km."],
  ["Volvo","XC60","mhev","suv",349990,null,250,"Automático",5,468,"O elétrico só ajuda na retomada. Consumo prático de cidade fica em torno de 9,5 km/l."],
  ["Volvo","XC90","mhev","suv",469990,null,250,"Automático",5,451,"7 lugares. Consumo prático urbano fica perto de 8,5 km/l."],

  // Chevrolet (mais)
  ["Chevrolet","Equinox EV","bev","suv",349990,"513 km (WLTP)",213,"Automático (redução única)",5,595,"Autonomia real em uso misto costuma ficar entre 420-450 km."],
  ["Chevrolet","Trailblazer","flex","suv",219990,null,167,"Automático",5,527,"Consumo prático de cidade em torno de 8-8,5 km/l."],

  // Fiat (mais)
  ["Fiat","Titano","flex","picape",199990,null,175,"Automático",4,1000,"Picape grande da Fiat. Consumo prático urbano fica perto de 8 km/l."],

  // Volkswagen (mais)
  ["Volkswagen","ID.4","bev","suv",329990,"500 km (WLTP)",204,"Automático (redução única)",5,543,"Autonomia real em uso misto costuma ficar entre 400-420 km."],
  ["Volkswagen","Jetta","flex","sedan",149990,null,150,"Automático",4,510,"Consumo prático de cidade em torno de 9-9,5 km/l."],
  ["Volkswagen","Tiguan","flex","suv",219990,null,250,"Automático",5,615,"Turbo forte. Consumo prático urbano fica perto de 8 km/l."],

  // Hyundai (mais)
  ["Hyundai","Kona Electric","bev","suv",219990,"484 km (WLTP)",204,"Automático (redução única)",5,466,"Autonomia real no dia a dia fica em torno de 390-410 km."],
  ["Hyundai","Ioniq 5","bev","suv",329990,"481 km (WLTP)",229,"Automático (redução única)",5,527,"Autonomia real em uso misto costuma ficar entre 400-420 km."],

  // Toyota (mais)
  ["Toyota","bZ4X","bev","suv",349990,"460 km (WLTP)",204,"Automático (redução única)",5,452,"Autonomia real em uso misto fica perto de 370-390 km."],

  // Honda (mais)
  ["Honda","ZR-V","hev","suv",209990,null,184,"Automático (CVT)",5,380,"Híbrido sem plugar. Consumo prático urbano fica entre 13-14 km/l."],

  // Renault (mais)
  ["Renault","Kwid E-Tech","bev","hatch",119990,"220 km (WLTP)",65,"Automático (redução única)",5,270,"Autonomia real de uso urbano costuma ficar entre 170-190 km."],
  ["Renault","Oroch","flex","picape",139990,null,120,"Automático (CVT)",4,600,"Baseada no Duster. Consumo prático urbano em torno de 8,5-9 km/l."],

  // Jeep (mais)
  ["Jeep","Wrangler","combustao","suv",399990,null,272,"Automático",4,548,"Importado, só gasolina (sem etanol). Consumo prático urbano fica em torno de 6,5-7 km/l."],

  // Peugeot (mais)
  ["Peugeot","e-208","bev","hatch",169990,"400 km (WLTP)",136,"Automático (redução única)",5,311,"Autonomia real de uso urbano costuma ficar entre 310-330 km."],
  ["Peugeot","3008","flex","suv",189990,null,173,"Automático",5,591,"Consumo prático urbano fica perto de 8,5 km/l."],

  // Citroen (mais)
  ["Citroen","ë-C3","bev","hatch",139990,"320 km (WLTP)",113,"Automático (redução única)",5,310,"Autonomia real de uso urbano costuma ficar entre 250-270 km — o elétrico mais barato do mercado brasileiro."],

  // BYD (mais)
  ["BYD","Han","bev","sedan",359800,"521 km (WLTP)",517,"Automático (redução única)",4,410,"Autonomia real em uso misto fica em torno de 430-450 km."],
  ["BYD","Tan","bev","suv",429800,"400 km (WLTP)",517,"Automático (redução única)",5,235,"7 lugares. Autonomia real fica perto de 330-350 km."],
  ["BYD","Shark","phev","picape",259800,"100 km só no elétrico",431,"Automático (redução única)",4,1200,"A picape híbrida plugável mais nova do mercado. No elétrico puro cobre praticamente o dia a dia urbano; depois disso funciona como híbrida."],

  // GWM (mais)
  ["GWM","Tank 300","hev","suv",259900,null,300,"Automático (redução única)",5,400,"Não precisa plugar em nada. Consumo prático urbano fica perto de 9,5-10 km/l."],

  // Kia (mais)
  ["Kia","EV6","bev","suv",339990,"460 km (WLTP)",229,"Automático (redução única)",5,480,"Autonomia real em uso misto costuma ficar entre 380-400 km."],
  ["Kia","Sorento","hev","suv",259990,null,230,"Automático",7,608,"7 lugares, híbrido sem plugar. Consumo prático urbano fica perto de 11-12 km/l."],

  // Chery (mais)
  ["Chery","iCar 03","bev","suv",179990,"501 km (WLTP)",204,"Automático (redução única)",5,500,"Autonomia real em uso misto costuma ficar entre 400-420 km."],

  // Mitsubishi (mais)
  ["Mitsubishi","Pajero Sport","flex","suv",289990,null,181,"Automático",5,502,"7 lugares. Consumo prático urbano fica em torno de 7,5-8 km/l."],

  // Ford
  ["Ford","Ranger","combustao","picape",259990,null,210,"Automático",4,989,"Só a diesel no Brasil (sem etanol). Consumo prático urbano fica em torno de 9,5-10 km/l."],
  ["Ford","Territory","flex","suv",179990,null,160,"Automático",5,448,"Consumo prático de cidade em torno de 8,5-9 km/l."],
  ["Ford","Bronco Sport","flex","suv",259990,null,250,"Automático",5,556,"Turbo forte. Consumo prático urbano fica perto de 7,5-8 km/l."],

  // Land Rover
  ["Land Rover","Range Rover Evoque","mhev","suv",399990,null,249,"Automático",5,591,"Importado, mild-hybrid a gasolina (sem etanol). Consumo prático urbano fica em torno de 8,5 km/l."],
  ["Land Rover","Discovery Sport","mhev","suv",429990,null,249,"Automático",5,897,"Mild-hybrid, só gasolina. Consumo prático urbano fica perto de 8 km/l."],
  ["Land Rover","Defender","mhev","suv",599990,null,300,"Automático",5,857,"Robusto e off-road, só gasolina. Consumo prático urbano fica em torno de 6,5-7 km/l."],

  // BMW
  ["BMW","X1","mhev","suv",349990,null,177,"Automático",5,540,"Mild-hybrid, só gasolina (importado). Consumo prático urbano fica perto de 9,5 km/l."],
  ["BMW","320i","mhev","sedan",319990,null,184,"Automático",4,480,"Turbo com mild-hybrid, só gasolina. Consumo prático urbano fica em torno de 10 km/l."],
  ["BMW","iX1","bev","suv",399990,"438 km (WLTP)",313,"Automático (redução única)",5,490,"Autonomia real em uso misto costuma ficar entre 350-370 km."],

  // Mercedes-Benz
  ["Mercedes-Benz","GLA 200","mhev","suv",349990,null,163,"Automático",5,435,"Mild-hybrid (EQ Boost), só gasolina. Consumo prático urbano fica perto de 9,5-10 km/l."],
  ["Mercedes-Benz","C 200","mhev","sedan",369990,null,204,"Automático",4,455,"Mild-hybrid, só gasolina. Consumo prático urbano fica em torno de 9,5 km/l."],
  ["Mercedes-Benz","EQA","bev","suv",389990,"426 km (WLTP)",190,"Automático (redução única)",5,340,"Autonomia real em uso misto fica perto de 340-360 km."],

  // Audi
  ["Audi","Q3","mhev","suv",349990,null,230,"Automático",5,530,"Mild-hybrid, só gasolina (importado). Consumo prático urbano fica em torno de 9 km/l."],
  ["Audi","A3 Sedan","mhev","sedan",259990,null,150,"Automático",4,425,"Mild-hybrid, só gasolina. Consumo prático urbano fica perto de 10-10,5 km/l."],
  ["Audi","Q4 e-tron","bev","suv",449990,"520 km (WLTP)",286,"Automático (redução única)",5,520,"Autonomia real em uso misto costuma ficar entre 420-440 km."],

  // Suzuki
  ["Suzuki","Jimny","combustao","suv",149990,null,101,"Manual",3,377,"Importado, só gasolina (sem etanol). Consumo prático urbano fica em torno de 8,5-9 km/l."],

  // JAC
  ["JAC","T40","flex","picape",139990,null,136,"Automático",4,1035,"Consumo prático urbano em torno de 8,5-9 km/l."],
  ["JAC","e-JS1","bev","hatch",109990,"300 km (WLTP)",95,"Automático (redução única)",5,220,"Autonomia real de uso urbano costuma ficar entre 230-250 km — um dos elétricos mais baratos do mercado."],
  ["JAC","iEV40","bev","suv",179990,"400 km (WLTP)",177,"Automático (redução única)",5,380,"Autonomia real em uso misto costuma ficar entre 320-340 km."],

  // Omoda
  ["Omoda","5","flex","suv",149990,null,147,"Automático (DCT)",5,378,"Consumo prático urbano em torno de 8,5-9 km/l."],

  // Neta
  ["Neta","X","bev","suv",179990,"420 km (WLTP)",150,"Automático (redução única)",5,356,"Autonomia real em uso misto costuma ficar entre 340-360 km."],

  // RAM
  ["RAM","Rampage","flex","picape",169990,null,270,"Automático",4,1040,"Picape média turbo. Consumo prático urbano fica em torno de 7,5-8 km/l."],
  ["RAM","1500","combustao","picape",349990,null,395,"Automático",4,1520,"Picape grande americana, só gasolina (V6/V8, sem etanol). Consumo prático urbano fica em torno de 5,5-6 km/l."],

  // Geely
  ["Geely","EX5","bev","suv",205800,"413 km (WLTP)",218,"Automático (redução única)",5,410,"SUV elétrico que a Geely trouxe pro Brasil em 2025. Autonomia real em uso misto costuma ficar entre 330-350 km."],
  ["Geely","EX2","bev","hatch",123800,"289 km (Inmetro)",116,"Automático (redução única)",5,375,"Elétrico de entrada da Geely, lançado no Brasil no fim de 2025. Bateria LFP de 39,4 kWh e 289 km pelo Inmetro — dá conta da rotina urbana, mas viagem longa pede parada pra recarregar. Tem porta-malas dianteiro de 70 L além dos 375 L de trás."],
];

const SPECS = require("./specs.js");
const VERSOES = require("./versoes.js");
const ORIGEM = require("./origem.js");

const esc = (v) => (v === null || v === undefined ? "NULL" : `'${String(v).replace(/'/g, "''")}'`);
const num = (v) => (v === null || v === undefined ? "NULL" : v);

let sql = "";
sql += "INSERT INTO marcas (nome, slug) VALUES\n";
sql += MARCAS.map((m) => `('${m}','${slug(m)}')`).join(",\n");
sql += "\nON CONFLICT DO NOTHING;\n\n";

// modelos: VALUES + JOIN em marcas (mais enxuto que um subselect por linha)
const linhasModelo = CARROS.map(([marca, modelo, powertrain, categoria, , autonomia, , , portas, malas, pratico]) => {
  const sp = SPECS[`${marca}|${modelo}`];
  if (!sp) throw new Error("Sem ficha tecnica: " + marca + "|" + modelo);
  const [, , , , , , tanque, lugares, comp, eixos, peso, bat, recarga, , garantia] = sp;
  const org = ORIGEM[`${marca}|${modelo}`];
  if (!org) throw new Error("Sem origem/fabrica: " + marca + "|" + modelo);
  return "(" + [
    `'${slug(marca)}'`, esc(modelo), `'${powertrain}'`, `'${categoria}'`, esc(autonomia),
    num(bat), esc(recarga), num(tanque), num(portas), num(lugares), num(malas),
    num(comp), num(eixos), num(peso), num(garantia), esc(org[0]), esc(org[1]), esc(pratico),
  ].join(",") + ")";
});
sql += `INSERT INTO modelos (marca_id, modelo, powertrain, categoria, autonomia_oficial, bateria_kwh, recarga, tanque_l, portas, lugares, porta_malas_l, comprimento_mm, entre_eixos_mm, peso_kg, garantia_anos, origem, fabrica, pratico)
SELECT b.id, d.modelo, d.powertrain, d.categoria, d.autonomia, d.bateria, d.recarga, d.tanque, d.portas, d.lugares, d.mala, d.comp, d.eixos, d.peso, d.garantia, d.origem, d.fabrica, d.pratico
FROM (VALUES\n${linhasModelo.join(",\n")}
) AS d(marca_slug, modelo, powertrain, categoria, autonomia, bateria, recarga, tanque, portas, lugares, mala, comp, eixos, peso, garantia, origem, fabrica, pratico)
JOIN marcas b ON b.slug = d.marca_slug
ON CONFLICT DO NOTHING;\n\n`;

// versoes: idem, resolvendo modelo_id por (marca_slug, modelo)
const linhasVersao = [];
CARROS.forEach(([marca, modelo]) => {
  const lista = VERSOES[`${marca}|${modelo}`];
  if (!lista || !lista.length) throw new Error("Sem versoes: " + marca + "|" + modelo);
  const vistos = new Set();
  lista.forEach(([nome, preco, motor, cv, torque, cambio, tracao, acel, cCid, cEst, airbags]) => {
    if (vistos.has(nome)) throw new Error("Versao duplicada: " + marca + "|" + modelo + "|" + nome);
    vistos.add(nome);
    linhasVersao.push("(" + [
      `'${slug(marca)}'`, esc(modelo), esc(nome), num(preco), esc(motor), num(cv), num(torque),
      esc(cambio), esc(tracao), num(acel), num(cCid), num(cEst), num(airbags),
    ].join(",") + ")");
  });
});
sql += `INSERT INTO versoes (modelo_id, nome, preco, motor, potencia_cv, torque_kgfm, cambio, tracao, acel_0100_s, consumo_cidade, consumo_estrada, airbags)
SELECT m.id, d.nome, d.preco, d.motor, d.cv, d.torque, d.cambio, d.tracao, d.acel, d.ccid, d.cest, d.airbags
FROM (VALUES\n${linhasVersao.join(",\n")}
) AS d(marca_slug, modelo, nome, preco, motor, cv, torque, cambio, tracao, acel, ccid, cest, airbags)
JOIN marcas b ON b.slug = d.marca_slug
JOIN modelos m ON m.marca_id = b.id AND m.modelo = d.modelo
ON CONFLICT DO NOTHING;\n`;

fs.writeFileSync(__dirname + "/seed_full.sql", sql);
console.log(`Gerado: ${CARROS.length} modelos, ${linhasVersao.length} versoes, ${MARCAS.length} marcas.`);
