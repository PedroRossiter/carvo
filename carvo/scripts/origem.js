// Onde cada modelo é produzido. Importa pro PCD: a isenção de IPI só vale
// pra carro de fabricação nacional (até R$ 200 mil de preço público).
// Formato: "Marca|Modelo": [origem, fabrica]
// origem: "nacional" | "importado"

module.exports = {
"Chevrolet|Onix": ["nacional", "Gravataí (RS)"],
"Chevrolet|Onix Plus": ["nacional", "Gravataí (RS)"],
"Chevrolet|Tracker": ["nacional", "São Caetano do Sul (SP)"],
"Chevrolet|Spin": ["nacional", "São Caetano do Sul (SP)"],
"Chevrolet|Montana": ["nacional", "Gravataí (RS)"],
"Chevrolet|S10": ["importado", "Santa Fé (Argentina)"],
"Chevrolet|Trailblazer": ["importado", "Rayong (Tailândia)"],
"Chevrolet|Equinox EV": ["importado", "México"],

"Fiat|Mobi": ["nacional", "Betim (MG)"],
"Fiat|Argo": ["nacional", "Betim (MG)"],
"Fiat|Pulse": ["nacional", "Betim (MG)"],
"Fiat|Fastback": ["nacional", "Betim (MG)"],
"Fiat|Strada": ["nacional", "Betim (MG)"],
"Fiat|Toro": ["nacional", "Goiana (PE)"],
"Fiat|500e": ["importado", "Turim (Itália)"],
"Fiat|Titano": ["importado", "Córdoba (Argentina)"],

"Volkswagen|Polo": ["nacional", "Taubaté (SP)"],
"Volkswagen|Virtus": ["nacional", "São Bernardo do Campo (SP)"],
"Volkswagen|T-Cross": ["nacional", "São José dos Pinhais (PR)"],
"Volkswagen|Nivus": ["nacional", "São José dos Pinhais (PR)"],
"Volkswagen|Taos": ["importado", "General Pacheco (Argentina)"],
"Volkswagen|Saveiro": ["nacional", "Taubaté (SP)"],
"Volkswagen|Amarok": ["importado", "General Pacheco (Argentina)"],
"Volkswagen|ID.4": ["importado", "Anting (China)"],
"Volkswagen|Jetta": ["importado", "Puebla (México)"],
"Volkswagen|Tiguan": ["importado", "Puebla (México)"],

"Hyundai|HB20": ["nacional", "Piracicaba (SP)"],
"Hyundai|HB20S": ["nacional", "Piracicaba (SP)"],
"Hyundai|Creta": ["nacional", "Piracicaba (SP)"],
"Hyundai|Kona": ["importado", "Coreia do Sul"],
"Hyundai|Tucson": ["importado", "Coreia do Sul"],
"Hyundai|Kona Electric": ["importado", "Nošovice (Rep. Tcheca)"],
"Hyundai|Ioniq 5": ["importado", "Coreia do Sul"],

"Toyota|Yaris": ["nacional", "Sorocaba (SP)"],
"Toyota|Corolla": ["nacional", "Indaiatuba (SP)"],
"Toyota|Corolla Cross": ["nacional", "Sorocaba (SP)"],
"Toyota|SW4": ["importado", "Zárate (Argentina)"],
"Toyota|Hilux": ["importado", "Zárate (Argentina)"],
"Toyota|RAV4": ["importado", "Japão"],
"Toyota|bZ4X": ["importado", "Japão"],

"Honda|City": ["nacional", "Itirapina (SP)"],
"Honda|City Hatchback": ["nacional", "Itirapina (SP)"],
"Honda|HR-V": ["nacional", "Itirapina (SP)"],
"Honda|ZR-V": ["nacional", "Itirapina (SP)"],
"Honda|CR-V": ["importado", "Japão"],
"Honda|Civic": ["importado", "Japão"],

"Renault|Kwid": ["nacional", "São José dos Pinhais (PR)"],
"Renault|Sandero": ["nacional", "São José dos Pinhais (PR)"],
"Renault|Logan": ["nacional", "São José dos Pinhais (PR)"],
"Renault|Duster": ["nacional", "São José dos Pinhais (PR)"],
"Renault|Kardian": ["nacional", "São José dos Pinhais (PR)"],
"Renault|Oroch": ["nacional", "São José dos Pinhais (PR)"],
"Renault|Kwid E-Tech": ["importado", "China"],

"Nissan|Kicks": ["nacional", "Resende (RJ)"],
"Nissan|Versa": ["nacional", "Resende (RJ)"],
"Nissan|Frontier": ["importado", "Santa Isabel (Argentina)"],

"Jeep|Renegade": ["nacional", "Goiana (PE)"],
"Jeep|Compass": ["nacional", "Goiana (PE)"],
"Jeep|Commander": ["nacional", "Goiana (PE)"],
"Jeep|Wrangler": ["importado", "Toledo (EUA)"],

"Peugeot|208": ["nacional", "Porto Real (RJ)"],
"Peugeot|2008": ["nacional", "Porto Real (RJ)"],
"Peugeot|e-208": ["importado", "Trnava (Eslováquia)"],
"Peugeot|3008": ["importado", "Sochaux (França)"],

"Citroen|C3": ["nacional", "Porto Real (RJ)"],
"Citroen|ë-C3": ["importado", "Trnava (Eslováquia)"],

"BYD|Dolphin Mini": ["nacional", "Camaçari (BA)"],
"BYD|Dolphin": ["importado", "China"],
"BYD|Song Plus Premium": ["importado", "China"],
"BYD|Yuan Plus": ["importado", "China"],
"BYD|Seal": ["importado", "China"],
"BYD|Han": ["importado", "China"],
"BYD|Tan": ["importado", "China"],
"BYD|Shark": ["importado", "China"],

"GWM|Haval H6 HEV": ["nacional", "Iracemápolis (SP)"],
"GWM|Ora 03": ["importado", "China"],
"GWM|Poer": ["importado", "China"],
"GWM|Tank 300": ["importado", "China"],

"Chery|Tiggo 5x": ["nacional", "Anápolis (GO)"],
"Chery|Tiggo 7": ["nacional", "Anápolis (GO)"],
"Chery|Tiggo 8": ["nacional", "Anápolis (GO)"],
"Chery|Arrizo 6": ["nacional", "Anápolis (GO)"],
"Chery|iCar 03": ["importado", "China"],

"Mitsubishi|L200 Triton": ["nacional", "Catalão (GO)"],
"Mitsubishi|Eclipse Cross": ["nacional", "Catalão (GO)"],
"Mitsubishi|Pajero Sport": ["nacional", "Catalão (GO)"],
"Mitsubishi|Outlander": ["importado", "Okazaki (Japão)"],

"Kia|Sportage": ["importado", "Coreia do Sul"],
"Kia|Cerato": ["importado", "Coreia do Sul"],
"Kia|EV6": ["importado", "Coreia do Sul"],
"Kia|Sorento": ["importado", "Coreia do Sul"],

"Volvo|XC40": ["importado", "Gante (Bélgica)"],
"Volvo|EX30": ["importado", "China"],
"Volvo|C40": ["importado", "Gante (Bélgica)"],
"Volvo|XC60": ["importado", "Torslanda (Suécia)"],
"Volvo|XC90": ["importado", "Torslanda (Suécia)"],

"Ford|Ranger": ["importado", "Pacheco (Argentina)"],
"Ford|Territory": ["importado", "China"],
"Ford|Bronco Sport": ["importado", "Hermosillo (México)"],

"Land Rover|Range Rover Evoque": ["importado", "Halewood (Reino Unido)"],
"Land Rover|Discovery Sport": ["importado", "Halewood (Reino Unido)"],
"Land Rover|Defender": ["importado", "Nitra (Eslováquia)"],

"BMW|X1": ["nacional", "Araquari (SC)"],
"BMW|320i": ["nacional", "Araquari (SC)"],
"BMW|iX1": ["importado", "Regensburg (Alemanha)"],

"Mercedes-Benz|GLA 200": ["importado", "Rastatt (Alemanha)"],
"Mercedes-Benz|C 200": ["importado", "Bremen (Alemanha)"],
"Mercedes-Benz|EQA": ["importado", "Rastatt (Alemanha)"],

"Audi|Q3": ["importado", "Győr (Hungria)"],
"Audi|A3 Sedan": ["importado", "Győr (Hungria)"],
"Audi|Q4 e-tron": ["importado", "Zwickau (Alemanha)"],

"Suzuki|Jimny": ["importado", "Índia"],

"JAC|T40": ["importado", "China"],
"JAC|e-JS1": ["importado", "China"],
"JAC|iEV40": ["importado", "China"],

"Omoda|5": ["importado", "China"],
"Neta|X": ["importado", "China"],

"RAM|Rampage": ["nacional", "Goiana (PE)"],
"RAM|1500": ["importado", "Saltillo (México)"],

"Geely|EX5": ["importado", "China"],
"Geely|EX2": ["importado", "China"],
};
