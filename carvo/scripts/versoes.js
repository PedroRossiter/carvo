// Versões por modelo. Chave: "Marca|Modelo".
// Tupla: [nome, preco, motor, cv, torque_kgfm, cambio, tracao, acel_0100_s, consumo_cidade, consumo_estrada, airbags]
// O que não varia por versão (carroceria, dimensões, porta-malas, tanque,
// bateria, autonomia, lugares, garantia) fica no modelo.

module.exports = {
// ---------- Chevrolet ----------
"Chevrolet|Onix": [
  ["1.0 LT Manual", 89990, "1.0 aspirado Flex 3 cil.", 82, 10.6, "Manual 6 marchas", "Dianteira", 13.3, 11.5, 13.8, 6],
  ["1.0 Turbo LT AT", 104990, "1.0 Turbo Flex 3 cil.", 116, 16.3, "Automático 6 marchas", "Dianteira", 10.5, 11.0, 13.5, 6],
  ["1.0 Turbo Premier AT", 116990, "1.0 Turbo Flex 3 cil.", 116, 16.3, "Automático 6 marchas", "Dianteira", 10.5, 10.8, 13.3, 6],
],
"Chevrolet|Onix Plus": [
  ["1.0 LT Manual", 96990, "1.0 aspirado Flex 3 cil.", 82, 10.6, "Manual 6 marchas", "Dianteira", 13.7, 11.4, 13.6, 6],
  ["1.0 Turbo LTZ AT", 112990, "1.0 Turbo Flex 3 cil.", 116, 16.3, "Automático 6 marchas", "Dianteira", 10.9, 10.9, 13.4, 6],
  ["1.0 Turbo Premier AT", 124990, "1.0 Turbo Flex 3 cil.", 116, 16.3, "Automático 6 marchas", "Dianteira", 10.9, 10.7, 13.2, 6],
],
"Chevrolet|Tracker": [
  ["1.0 Turbo LT AT", 139990, "1.0 Turbo Flex 3 cil.", 116, 16.3, "Automático 6 marchas", "Dianteira", 11.0, 10.6, 12.9, 6],
  ["1.2 Turbo LTZ AT", 152990, "1.2 Turbo Flex 3 cil.", 133, 21.4, "Automático 6 marchas", "Dianteira", 10.2, 10.3, 12.6, 6],
  ["1.2 Turbo Premier AT", 164990, "1.2 Turbo Flex 3 cil.", 133, 21.4, "Automático 6 marchas", "Dianteira", 10.2, 10.1, 12.4, 6],
],
"Chevrolet|Spin": [
  ["1.8 LT AT", 129990, "1.8 aspirado Flex 4 cil.", 106, 18.0, "Automático 6 marchas", "Dianteira", 12.5, 9.3, 11.5, 4],
  ["1.8 Premier AT", 145990, "1.8 aspirado Flex 4 cil.", 106, 18.0, "Automático 6 marchas", "Dianteira", 12.5, 9.2, 11.4, 6],
],
"Chevrolet|Montana": [
  ["1.2 Turbo LT AT", 119990, "1.2 Turbo Flex 3 cil.", 133, 21.4, "Automático 6 marchas", "Dianteira", 10.4, 10.4, 12.8, 6],
  ["1.2 Turbo LTZ AT", 132990, "1.2 Turbo Flex 3 cil.", 133, 21.4, "Automático 6 marchas", "Dianteira", 10.4, 10.2, 12.6, 6],
  ["1.2 Turbo Premier AT", 143990, "1.2 Turbo Flex 3 cil.", 133, 21.4, "Automático 6 marchas", "Dianteira", 10.4, 10.1, 12.5, 6],
],
"Chevrolet|S10": [
  ["2.8 LT Diesel 4x4 AT", 219990, "2.8 Turbodiesel 4 cil.", 200, 45.9, "Automático 6 marchas", "4x4", 10.5, 8.9, 11.6, 6],
  ["2.8 LTZ Diesel 4x4 AT", 249990, "2.8 Turbodiesel 4 cil.", 200, 45.9, "Automático 6 marchas", "4x4", 10.5, 8.8, 11.5, 6],
  ["2.8 High Country 4x4 AT", 279990, "2.8 Turbodiesel 4 cil.", 200, 45.9, "Automático 6 marchas", "4x4", 10.5, 8.7, 11.4, 6],
],
"Chevrolet|Equinox EV": [
  ["LT eAWD", 349990, "Elétrico dianteiro", 213, 34.6, "Automático (redução única)", "Dianteira", 8.0, 5.6, 6.4, 8],
  ["RS eAWD", 389990, "2 elétricos (AWD)", 294, 47.9, "Automático (redução única)", "Integral", 6.4, 5.3, 6.0, 8],
],
"Chevrolet|Trailblazer": [
  ["2.8 LTZ Diesel 4x4 AT", 219990, "2.8 Turbodiesel 4 cil.", 167, 45.9, "Automático 6 marchas", "4x4", 11.0, 8.0, 10.5, 7],
  ["2.8 Premier Diesel 4x4 AT", 249990, "2.8 Turbodiesel 4 cil.", 200, 51.0, "Automático 6 marchas", "4x4", 10.4, 7.9, 10.4, 7],
],

// ---------- Fiat ----------
"Fiat|Mobi": [
  ["1.0 Like Manual", 74990, "1.0 Firefly Flex 3 cil.", 75, 10.7, "Manual 5 marchas", "Dianteira", 13.4, 11.9, 14.0, 4],
  ["1.0 Trekking Manual", 82990, "1.0 Firefly Flex 3 cil.", 75, 10.7, "Manual 5 marchas", "Dianteira", 13.4, 11.7, 13.8, 4],
],
"Fiat|Argo": [
  ["1.0 Drive Manual", 84990, "1.0 Firefly Flex 3 cil.", 77, 10.7, "Manual 5 marchas", "Dianteira", 13.0, 11.6, 13.9, 4],
  ["1.3 Drive CVT", 96990, "1.3 Firefly Flex 4 cil.", 101, 13.7, "Automático (CVT)", "Dianteira", 11.9, 10.8, 13.2, 4],
  ["1.3 Trekking CVT", 105990, "1.3 Firefly Flex 4 cil.", 101, 13.7, "Automático (CVT)", "Dianteira", 11.9, 10.6, 13.0, 6],
],
"Fiat|Pulse": [
  ["1.3 Drive CVT", 99990, "1.3 Firefly Flex 4 cil.", 107, 13.7, "Automático (CVT)", "Dianteira", 11.6, 10.4, 12.9, 6],
  ["1.0 Turbo Audace CVT", 119990, "1.0 Turbo 200 Flex", 130, 20.4, "Automático (CVT)", "Dianteira", 9.9, 11.1, 13.4, 6],
  ["1.0 Turbo Impetus CVT", 129990, "1.0 Turbo 200 Flex", 130, 20.4, "Automático (CVT)", "Dianteira", 9.9, 10.9, 13.2, 6],
  ["1.3 Turbo Abarth AT", 149990, "1.3 Turbo 270 Flex", 185, 27.5, "Automático 6 marchas (DCT)", "Dianteira", 8.0, 9.5, 12.2, 6],
],
"Fiat|Fastback": [
  ["1.0 Turbo Audace CVT", 119990, "1.0 Turbo 200 Flex", 130, 20.4, "Automático (CVT)", "Dianteira", 10.2, 10.2, 12.8, 6],
  ["1.3 Turbo Limited AT", 139990, "1.3 Turbo 270 Flex", 176, 27.5, "Automático 6 marchas (DCT)", "Dianteira", 8.5, 9.7, 12.4, 6],
  ["1.3 Turbo Abarth AT", 159990, "1.3 Turbo 270 Flex", 185, 27.5, "Automático 6 marchas (DCT)", "Dianteira", 8.1, 9.4, 12.1, 6],
],
"Fiat|Strada": [
  ["1.4 Endurance CS Manual", 104990, "1.4 Firefly Flex 4 cil.", 88, 12.4, "Manual 5 marchas", "Dianteira", 12.8, 11.2, 13.6, 4],
  ["1.3 Freedom CD Manual", 119990, "1.3 Firefly Flex 4 cil.", 107, 13.7, "Manual 5 marchas", "Dianteira", 10.8, 10.9, 13.3, 4],
  ["1.0 Turbo Ultra CD CVT", 139990, "1.0 Turbo 200 Flex", 130, 20.4, "Automático (CVT)", "Dianteira", 9.7, 10.5, 13.0, 6],
],
"Fiat|Toro": [
  ["1.3 Turbo Endurance AT", 149990, "1.3 Turbo 270 Flex", 176, 27.5, "Automático 6 marchas", "Dianteira", 9.2, 9.4, 11.8, 7],
  ["1.3 Turbo Freedom AT", 164990, "1.3 Turbo 270 Flex", 176, 27.5, "Automático 6 marchas", "Dianteira", 9.2, 9.3, 11.7, 7],
  ["2.2 Diesel Ranch 4x4 AT", 209990, "2.2 Turbodiesel 4 cil.", 200, 45.9, "Automático 9 marchas", "4x4", 9.6, 9.8, 13.0, 7],
],
"Fiat|500e": [
  ["Icon", 178900, "Elétrico dianteiro", 118, 22.4, "Automático (redução única)", "Dianteira", 9.0, 6.5, 5.4, 6],
],
"Fiat|Titano": [
  ["2.2 Endurance Diesel 4x4 AT", 199990, "2.2 Turbodiesel 4 cil.", 175, 34.7, "Automático 6 marchas", "4x4", 12.0, 8.6, 11.2, 6],
  ["2.2 Ranch Diesel 4x4 AT", 229990, "2.2 Turbodiesel 4 cil.", 200, 41.8, "Automático 6 marchas", "4x4", 11.2, 8.4, 11.0, 6],
],

// ---------- Volkswagen ----------
"Volkswagen|Polo": [
  ["1.0 MPI Track Manual", 84990, "1.0 aspirado Flex 3 cil.", 84, 10.4, "Manual 5 marchas", "Dianteira", 13.3, 11.4, 13.9, 6],
  ["1.0 TSI Comfortline AT", 99990, "1.0 TSI Turbo Flex 3 cil.", 128, 20.4, "Automático 6 marchas", "Dianteira", 9.4, 10.6, 13.4, 6],
  ["1.0 TSI Highline AT", 112990, "1.0 TSI Turbo Flex 3 cil.", 128, 20.4, "Automático 6 marchas", "Dianteira", 9.4, 10.4, 13.2, 6],
  ["1.4 TSI GTS AT", 139990, "1.4 TSI Turbo Flex 4 cil.", 150, 25.5, "Automático 6 marchas", "Dianteira", 7.9, 9.6, 12.5, 6],
],
"Volkswagen|Virtus": [
  ["1.0 TSI Comfortline AT", 99990, "1.0 TSI Turbo Flex 3 cil.", 128, 20.4, "Automático 6 marchas", "Dianteira", 9.9, 10.5, 13.9, 6],
  ["1.0 TSI Highline AT", 114990, "1.0 TSI Turbo Flex 3 cil.", 128, 20.4, "Automático 6 marchas", "Dianteira", 9.9, 10.3, 13.7, 6],
  ["1.4 TSI Exclusive AT", 134990, "1.4 TSI Turbo Flex 4 cil.", 150, 25.5, "Automático 6 marchas", "Dianteira", 8.5, 9.7, 13.0, 6],
],
"Volkswagen|T-Cross": [
  ["1.0 TSI Comfortline AT", 134990, "1.0 TSI Turbo Flex 3 cil.", 128, 20.4, "Automático 6 marchas", "Dianteira", 10.9, 10.2, 12.9, 6],
  ["1.0 TSI Highline AT", 149990, "1.0 TSI Turbo Flex 3 cil.", 128, 20.4, "Automático 6 marchas", "Dianteira", 10.9, 10.0, 12.7, 6],
  ["1.4 TSI Highline AT", 164990, "1.4 TSI Turbo Flex 4 cil.", 150, 25.5, "Automático 6 marchas", "Dianteira", 9.0, 9.4, 12.2, 6],
],
"Volkswagen|Nivus": [
  ["1.0 TSI Comfortline AT", 114990, "1.0 TSI Turbo Flex 3 cil.", 128, 20.4, "Automático 6 marchas", "Dianteira", 10.3, 10.4, 13.1, 6],
  ["1.0 TSI Highline AT", 129990, "1.0 TSI Turbo Flex 3 cil.", 128, 20.4, "Automático 6 marchas", "Dianteira", 10.3, 10.2, 12.9, 6],
],
"Volkswagen|Taos": [
  ["1.4 TSI Comfortline AT", 169990, "1.4 TSI Turbo Flex 4 cil.", 150, 25.5, "Automático 6 marchas", "Dianteira", 8.8, 9.2, 12.0, 6],
  ["1.4 TSI Highline AT", 189990, "1.4 TSI Turbo Flex 4 cil.", 150, 25.5, "Automático 6 marchas", "Dianteira", 8.8, 9.0, 11.8, 6],
],
"Volkswagen|Saveiro": [
  ["1.6 MSI Robust CS Manual", 99990, "1.6 MSI Flex 4 cil.", 110, 16.8, "Manual 5 marchas", "Dianteira", 11.4, 10.6, 13.2, 2],
  ["1.6 MSI Cross CD Manual", 124990, "1.6 MSI Flex 4 cil.", 110, 16.8, "Manual 5 marchas", "Dianteira", 11.8, 10.3, 12.9, 4],
],
"Volkswagen|Amarok": [
  ["2.0 Diesel Highline 4x4 AT", 259990, "2.0 Turbodiesel 4 cil.", 190, 45.9, "Automático 10 marchas", "4x4", 10.5, 8.4, 11.0, 6],
  ["3.0 V6 Diesel Extreme 4x4 AT", 329990, "3.0 V6 Turbodiesel", 258, 61.2, "Automático 10 marchas", "4x4", 8.4, 7.8, 10.4, 6],
],
"Volkswagen|ID.4": [
  ["Pro Performance", 329990, "Elétrico traseiro", 204, 31.6, "Automático (redução única)", "Traseira", 8.5, 5.4, 6.1, 6],
  ["GTX 4Motion", 389990, "2 elétricos (AWD)", 299, 47.9, "Automático (redução única)", "Integral", 6.2, 5.0, 5.7, 6],
],
"Volkswagen|Jetta": [
  ["1.4 TSI Comfortline AT", 149990, "1.4 TSI Turbo 4 cil. (gasolina)", 150, 25.5, "Automático 6 marchas", "Dianteira", 8.5, 9.5, 13.5, 6],
  ["2.0 TSI GLI AT", 219990, "2.0 TSI Turbo 4 cil. (gasolina)", 231, 35.7, "Automático 7 marchas (DSG)", "Dianteira", 6.7, 8.6, 12.5, 6],
],
"Volkswagen|Tiguan": [
  ["2.0 TSI Comfortline 4Motion AT", 219990, "2.0 TSI Turbo 4 cil.", 220, 35.7, "Automático 6 marchas", "Integral", 7.4, 8.4, 11.2, 7],
  ["2.0 TSI R-Line 4Motion AT", 259990, "2.0 TSI Turbo 4 cil.", 250, 35.7, "Automático 7 marchas (DSG)", "Integral", 6.8, 8.2, 11.0, 7],
],

// ---------- Hyundai ----------
"Hyundai|HB20": [
  ["1.0 Sense Manual", 84990, "1.0 aspirado Flex 3 cil.", 80, 10.2, "Manual 5 marchas", "Dianteira", 13.5, 11.5, 14.0, 6],
  ["1.0 Comfort Manual", 92990, "1.0 aspirado Flex 3 cil.", 80, 10.2, "Manual 5 marchas", "Dianteira", 13.5, 11.3, 13.8, 6],
  ["1.0 Turbo Limited AT", 109990, "1.0 Turbo Flex 3 cil.", 120, 17.5, "Automático 6 marchas", "Dianteira", 10.2, 11.0, 13.5, 6],
  ["1.0 Turbo Platinum AT", 119990, "1.0 Turbo Flex 3 cil.", 120, 17.5, "Automático 6 marchas", "Dianteira", 10.2, 10.8, 13.3, 6],
],
"Hyundai|HB20S": [
  ["1.0 Comfort Manual", 94990, "1.0 aspirado Flex 3 cil.", 80, 10.2, "Manual 5 marchas", "Dianteira", 13.9, 11.4, 13.9, 6],
  ["1.0 Turbo Limited AT", 114990, "1.0 Turbo Flex 3 cil.", 120, 17.5, "Automático 6 marchas", "Dianteira", 10.5, 10.9, 13.4, 6],
  ["1.0 Turbo Platinum AT", 124990, "1.0 Turbo Flex 3 cil.", 120, 17.5, "Automático 6 marchas", "Dianteira", 10.5, 10.7, 13.2, 6],
],
"Hyundai|Creta": [
  ["1.0 Turbo Comfort AT", 124990, "1.0 Turbo Flex 3 cil.", 120, 17.5, "Automático 6 marchas", "Dianteira", 11.2, 10.0, 12.6, 6],
  ["1.0 Turbo Limited AT", 139990, "1.0 Turbo Flex 3 cil.", 120, 17.5, "Automático 6 marchas", "Dianteira", 11.2, 9.8, 12.4, 6],
  ["2.0 Platinum AT", 159990, "2.0 aspirado Flex 4 cil.", 167, 20.6, "Automático 6 marchas", "Dianteira", 9.4, 8.9, 11.8, 6],
  ["1.6 Turbo N Line AT", 179990, "1.6 Turbo Flex 4 cil.", 193, 27.0, "Automático 7 marchas (DCT)", "Dianteira", 8.2, 9.2, 12.0, 6],
],
"Hyundai|Kona": [
  ["1.0 Turbo Comfort AT", 149990, "1.0 Turbo Flex 3 cil.", 120, 17.5, "Automático 6 marchas", "Dianteira", 10.7, 10.2, 12.8, 6],
  ["1.0 Turbo Limited AT", 164990, "1.0 Turbo Flex 3 cil.", 120, 17.5, "Automático 6 marchas", "Dianteira", 10.7, 10.0, 12.6, 6],
],
"Hyundai|Tucson": [
  ["1.6 Turbo Híbrido Limited AT", 219990, "1.6 Turbo + elétrico (HEV)", 215, 27.0, "Automático 6 marchas", "Dianteira", 8.0, 14.5, 15.8, 6],
  ["1.6 Turbo Híbrido Ultimate AT", 249990, "1.6 Turbo + elétrico (HEV)", 235, 27.0, "Automático 6 marchas", "Integral", 7.6, 14.0, 15.4, 6],
],
"Hyundai|Kona Electric": [
  ["Comfort 65 kWh", 219990, "Elétrico dianteiro", 204, 26.0, "Automático (redução única)", "Dianteira", 7.8, 6.2, 6.0, 6],
  ["Limited 65 kWh", 244990, "Elétrico dianteiro", 204, 26.0, "Automático (redução única)", "Dianteira", 7.8, 6.1, 5.9, 6],
],
"Hyundai|Ioniq 5": [
  ["RWD 77 kWh", 329990, "Elétrico traseiro (800V)", 229, 35.7, "Automático (redução única)", "Traseira", 7.4, 5.5, 6.2, 7],
  ["AWD 77 kWh", 379990, "2 elétricos (AWD, 800V)", 325, 61.7, "Automático (redução única)", "Integral", 5.2, 5.1, 5.8, 7],
],

// ---------- Toyota ----------
"Toyota|Yaris": [
  ["1.5 XL Manual", 99990, "1.5 Dual VVT-iE Flex", 110, 15.3, "Manual 6 marchas", "Dianteira", 10.9, 11.4, 14.0, 7],
  ["1.5 XLS CVT", 114990, "1.5 Dual VVT-iE Flex", 110, 15.3, "Automático (CVT)", "Dianteira", 11.3, 11.0, 13.6, 7],
],
"Toyota|Corolla": [
  ["2.0 GLi CVT", 139990, "2.0 Dynamic Force Flex", 177, 21.4, "Automático (CVT)", "Dianteira", 9.2, 10.6, 14.1, 7],
  ["2.0 XEi CVT", 159990, "2.0 Dynamic Force Flex", 177, 21.4, "Automático (CVT)", "Dianteira", 9.2, 10.4, 13.9, 7],
  ["1.8 Altis Hybrid CVT", 179990, "1.8 + elétrico (HEV)", 122, 14.5, "Automático (CVT)", "Dianteira", 9.9, 15.3, 15.0, 7],
],
"Toyota|Corolla Cross": [
  ["2.0 XR CVT", 168590, "2.0 Dynamic Force Flex", 177, 21.4, "Automático (CVT)", "Dianteira", 9.5, 9.6, 12.6, 7],
  ["1.8 XRE Hybrid CVT", 189990, "1.8 + elétrico (HEV)", 122, 14.5, "Automático (CVT)", "Dianteira", 9.7, 15.6, 15.2, 7],
  ["1.8 XRX Hybrid CVT", 209990, "1.8 + elétrico (HEV)", 122, 14.5, "Automático (CVT)", "Dianteira", 9.7, 15.4, 15.0, 7],
],
"Toyota|SW4": [
  ["2.8 SRX Diesel 4x4 AT", 349990, "2.8 Turbodiesel 4 cil.", 204, 51.0, "Automático 6 marchas", "4x4", 10.2, 7.6, 10.5, 7],
  ["2.8 Diamond Diesel 4x4 AT", 399990, "2.8 Turbodiesel 4 cil.", 204, 51.0, "Automático 6 marchas", "4x4", 10.2, 7.5, 10.4, 7],
],
"Toyota|Hilux": [
  ["2.8 SR Diesel 4x4 AT", 239990, "2.8 Turbodiesel 4 cil.", 204, 45.9, "Automático 6 marchas", "4x4", 11.0, 8.2, 11.0, 7],
  ["2.8 SRV Diesel 4x4 AT", 279990, "2.8 Turbodiesel 4 cil.", 204, 51.0, "Automático 6 marchas", "4x4", 10.7, 8.1, 10.9, 7],
  ["2.8 SRX Diesel 4x4 AT", 319990, "2.8 Turbodiesel 4 cil.", 204, 51.0, "Automático 6 marchas", "4x4", 10.7, 8.0, 10.8, 7],
],
"Toyota|RAV4": [
  ["2.5 Hybrid SX AWD CVT", 259990, "2.5 + elétrico (HEV)", 222, 22.5, "Automático (CVT)", "Integral", 7.8, 13.8, 14.5, 7],
  ["2.5 Hybrid S AWD CVT", 289990, "2.5 + elétrico (HEV)", 222, 22.5, "Automático (CVT)", "Integral", 7.8, 13.6, 14.3, 7],
],
"Toyota|bZ4X": [
  ["FWD 71 kWh", 349990, "Elétrico dianteiro", 204, 27.1, "Automático (redução única)", "Dianteira", 7.5, 5.8, 6.3, 8],
],

// ---------- Honda ----------
"Honda|City": [
  ["1.5 EX CVT", 114990, "1.5 DOHC i-VTEC Flex", 126, 15.5, "Automático (CVT)", "Dianteira", 10.3, 11.2, 14.0, 6],
  ["1.5 EXL CVT", 128990, "1.5 DOHC i-VTEC Flex", 126, 15.5, "Automático (CVT)", "Dianteira", 10.3, 11.0, 13.8, 6],
  ["1.5 Touring CVT", 139990, "1.5 DOHC i-VTEC Flex", 126, 15.5, "Automático (CVT)", "Dianteira", 10.3, 10.9, 13.7, 6],
],
"Honda|City Hatchback": [
  ["1.5 EX CVT", 104990, "1.5 DOHC i-VTEC Flex", 126, 15.5, "Automático (CVT)", "Dianteira", 10.1, 11.2, 13.9, 6],
  ["1.5 EXL CVT", 119990, "1.5 DOHC i-VTEC Flex", 126, 15.5, "Automático (CVT)", "Dianteira", 10.1, 11.0, 13.7, 6],
  ["1.5 Touring CVT", 132990, "1.5 DOHC i-VTEC Flex", 126, 15.5, "Automático (CVT)", "Dianteira", 10.1, 10.9, 13.6, 6],
],
"Honda|HR-V": [
  ["1.5 EX CVT", 144900, "1.5 aspirado Flex 4 cil.", 126, 15.8, "Automático (CVT)", "Dianteira", 11.2, 10.6, 13.1, 6],
  ["1.5 EXL CVT", 159990, "1.5 aspirado Flex 4 cil.", 126, 15.8, "Automático (CVT)", "Dianteira", 11.2, 10.4, 12.9, 6],
  ["1.5 Turbo Touring CVT", 184990, "1.5 Turbo VTEC Flex", 177, 24.5, "Automático (CVT)", "Dianteira", 8.7, 10.3, 12.8, 6],
],
"Honda|CR-V": [
  ["2.0 e:HEV EXL AWD", 219900, "2.0 + elétrico (e:HEV)", 204, 18.4, "Automático (CVT)", "Integral", 9.0, 14.6, 14.9, 6],
  ["2.0 e:HEV Advanced AWD", 249900, "2.0 + elétrico (e:HEV)", 204, 18.4, "Automático (CVT)", "Integral", 9.0, 14.4, 14.7, 6],
],
"Honda|Civic": [
  ["2.0 e:HEV EXL", 179990, "2.0 + elétrico (e:HEV)", 184, 32.1, "Automático (CVT)", "Dianteira", 7.9, 15.0, 15.5, 6],
  ["2.0 e:HEV Touring", 199990, "2.0 + elétrico (e:HEV)", 184, 32.1, "Automático (CVT)", "Dianteira", 7.9, 14.8, 15.3, 6],
],
"Honda|ZR-V": [
  ["2.0 e:HEV Advanced", 209990, "2.0 + elétrico (e:HEV)", 184, 32.1, "Automático (CVT)", "Dianteira", 8.0, 14.2, 14.8, 6],
  ["2.0 e:HEV Touring", 229990, "2.0 + elétrico (e:HEV)", 184, 32.1, "Automático (CVT)", "Dianteira", 8.0, 14.0, 14.6, 6],
],

// ---------- Renault ----------
"Renault|Kwid": [
  ["1.0 Zen Manual", 69990, "1.0 SCe Flex 3 cil.", 71, 10.0, "Manual 5 marchas", "Dianteira", 14.0, 12.3, 14.5, 4],
  ["1.0 Intense Manual", 78990, "1.0 SCe Flex 3 cil.", 71, 10.0, "Manual 5 marchas", "Dianteira", 14.0, 12.1, 14.3, 4],
  ["1.0 Outsider Manual", 84990, "1.0 SCe Flex 3 cil.", 71, 10.0, "Manual 5 marchas", "Dianteira", 14.2, 11.9, 14.1, 4],
],
"Renault|Sandero": [
  ["1.0 Zen Manual", 84990, "1.0 SCe Flex 3 cil.", 82, 10.5, "Manual 5 marchas", "Dianteira", 13.2, 11.5, 14.0, 6],
  ["1.0 Turbo Intense CVT", 104990, "1.0 Turbo TCe Flex", 125, 22.4, "Automático (CVT)", "Dianteira", 10.5, 11.1, 13.6, 6],
  ["1.0 Turbo Stepway CVT", 114990, "1.0 Turbo TCe Flex", 125, 22.4, "Automático (CVT)", "Dianteira", 10.8, 10.9, 13.4, 6],
],
"Renault|Logan": [
  ["1.0 Zen Manual", 84990, "1.0 SCe Flex 3 cil.", 82, 10.5, "Manual 5 marchas", "Dianteira", 13.6, 11.4, 13.9, 6],
  ["1.0 Turbo Iconic CVT", 104990, "1.0 Turbo TCe Flex", 125, 22.4, "Automático (CVT)", "Dianteira", 10.8, 11.0, 13.5, 6],
],
"Renault|Duster": [
  ["1.6 Zen Manual", 119990, "1.6 SCe Flex 4 cil.", 120, 15.8, "Manual 5 marchas", "Dianteira", 12.0, 9.6, 12.0, 6],
  ["1.6 Iconic CVT", 134990, "1.6 SCe Flex 4 cil.", 120, 15.8, "Automático (CVT)", "Dianteira", 12.8, 9.3, 11.7, 6],
  ["1.3 Turbo Iconic Plus CVT", 154990, "1.3 Turbo TCe Flex", 170, 27.0, "Automático (CVT)", "Dianteira", 9.7, 9.0, 11.9, 6],
],
"Renault|Kardian": [
  ["1.0 Turbo Evolution CVT", 99990, "1.0 Turbo TCe Flex", 125, 22.4, "Automático (CVT)", "Dianteira", 9.7, 11.0, 13.4, 6],
  ["1.0 Turbo Techno CVT", 114990, "1.0 Turbo TCe Flex", 125, 22.4, "Automático (CVT)", "Dianteira", 9.7, 10.8, 13.2, 6],
  ["1.0 Turbo Iconic CVT", 124990, "1.0 Turbo TCe Flex", 125, 22.4, "Automático (CVT)", "Dianteira", 9.7, 10.7, 13.1, 6],
],
"Renault|Kwid E-Tech": [
  ["Techno 26 kWh", 119990, "Elétrico dianteiro", 65, 12.7, "Automático (redução única)", "Dianteira", 14.0, 7.0, 5.8, 4],
],
"Renault|Oroch": [
  ["1.6 Evolution Manual", 139990, "1.6 SCe Flex 4 cil.", 120, 15.8, "Manual 5 marchas", "Dianteira", 12.5, 9.2, 11.6, 6],
  ["1.3 Turbo Iconic CVT", 159990, "1.3 Turbo TCe Flex", 170, 27.0, "Automático (CVT)", "Dianteira", 10.2, 9.0, 11.8, 6],
],

// ---------- Nissan ----------
"Nissan|Kicks": [
  ["1.6 Sense Manual", 129990, "1.6 16V Flex 4 cil.", 114, 15.5, "Manual 5 marchas", "Dianteira", 10.9, 10.6, 13.0, 6],
  ["1.6 Advance CVT", 144990, "1.6 16V Flex 4 cil.", 114, 15.5, "Automático (CVT)", "Dianteira", 11.5, 10.3, 12.7, 6],
  ["1.6 Exclusive CVT", 159990, "1.6 16V Flex 4 cil.", 114, 15.5, "Automático (CVT)", "Dianteira", 11.5, 10.1, 12.5, 6],
],
"Nissan|Versa": [
  ["1.6 Sense Manual", 94990, "1.6 16V Flex 4 cil.", 114, 15.5, "Manual 5 marchas", "Dianteira", 10.5, 10.9, 13.8, 6],
  ["1.6 Advance CVT", 109990, "1.6 16V Flex 4 cil.", 114, 15.5, "Automático (CVT)", "Dianteira", 11.0, 10.6, 13.5, 6],
  ["1.6 Exclusive CVT", 124990, "1.6 16V Flex 4 cil.", 114, 15.5, "Automático (CVT)", "Dianteira", 11.0, 10.4, 13.3, 6],
],
"Nissan|Frontier": [
  ["2.3 Bi-Turbo Attack 4x4 AT", 249990, "2.3 Bi-Turbodiesel 4 cil.", 190, 45.9, "Automático 7 marchas", "4x4", 10.8, 8.5, 11.2, 7],
  ["2.3 Bi-Turbo Pro-4X 4x4 AT", 289990, "2.3 Bi-Turbodiesel 4 cil.", 190, 45.9, "Automático 7 marchas", "4x4", 10.8, 8.3, 11.0, 7],
],

// ---------- Jeep ----------
"Jeep|Renegade": [
  ["1.3 Turbo Sport AT", 129990, "1.3 Turbo 270 Flex", 176, 27.5, "Automático 6 marchas", "Dianteira", 8.7, 9.3, 12.0, 7],
  ["1.3 Turbo Longitude AT", 149990, "1.3 Turbo 270 Flex", 176, 27.5, "Automático 6 marchas", "Dianteira", 8.7, 9.2, 11.9, 7],
  ["1.3 Turbo Trailhawk 4x4 AT", 179990, "1.3 Turbo 270 Flex", 185, 27.5, "Automático 9 marchas", "4x4", 9.0, 8.5, 11.0, 7],
],
"Jeep|Compass": [
  ["1.3 Turbo Sport AT", 169990, "1.3 Turbo 270 Flex", 185, 27.5, "Automático 6 marchas", "Dianteira", 8.4, 8.8, 11.5, 7],
  ["1.3 Turbo Longitude AT", 189990, "1.3 Turbo 270 Flex", 185, 27.5, "Automático 6 marchas", "Dianteira", 8.4, 8.7, 11.4, 7],
  ["2.2 Diesel Limited 4x4 AT", 229990, "2.2 Turbodiesel 4 cil.", 200, 45.9, "Automático 9 marchas", "4x4", 8.9, 10.5, 13.5, 7],
  ["2.2 Diesel Blackhawk 4x4 AT", 259990, "2.2 Turbodiesel 4 cil.", 200, 45.9, "Automático 9 marchas", "4x4", 8.9, 10.3, 13.3, 7],
],
"Jeep|Commander": [
  ["1.3 Turbo Longitude AT", 219990, "1.3 Turbo 270 Flex", 185, 27.5, "Automático 6 marchas", "Dianteira", 9.0, 8.3, 11.0, 7],
  ["2.2 Diesel Limited 4x4 AT", 259990, "2.2 Turbodiesel 4 cil.", 200, 45.9, "Automático 9 marchas", "4x4", 9.4, 9.8, 12.8, 7],
  ["2.2 Diesel Overland 4x4 AT", 299990, "2.2 Turbodiesel 4 cil.", 200, 45.9, "Automático 9 marchas", "4x4", 9.4, 9.6, 12.6, 7],
],
"Jeep|Wrangler": [
  ["2.0 Turbo Sport 4x4 AT", 399990, "2.0 Turbo 4 cil. (gasolina)", 272, 40.8, "Automático 8 marchas", "4x4", 7.6, 6.8, 9.5, 4],
  ["2.0 Turbo Rubicon 4x4 AT", 469990, "2.0 Turbo 4 cil. (gasolina)", 272, 40.8, "Automático 8 marchas", "4x4", 7.6, 6.5, 9.2, 4],
],

// ---------- Peugeot ----------
"Peugeot|208": [
  ["1.0 Like Manual", 94990, "1.0 Firefly Flex 3 cil.", 75, 10.7, "Manual 5 marchas", "Dianteira", 13.0, 11.6, 13.9, 6],
  ["1.0 Turbo Allure AT", 114990, "1.0 Turbo 200 Flex", 130, 20.4, "Automático 6 marchas", "Dianteira", 9.9, 10.8, 13.2, 6],
  ["1.0 Turbo GT AT", 129990, "1.0 Turbo 200 Flex", 130, 20.4, "Automático 6 marchas", "Dianteira", 9.9, 10.6, 13.0, 6],
],
"Peugeot|2008": [
  ["1.0 Turbo Allure AT", 134990, "1.0 Turbo 200 Flex", 130, 20.4, "Automático 6 marchas", "Dianteira", 10.2, 10.3, 12.8, 6],
  ["1.0 Turbo GT AT", 154990, "1.0 Turbo 200 Flex", 130, 20.4, "Automático 6 marchas", "Dianteira", 10.2, 10.1, 12.6, 6],
],
"Peugeot|e-208": [
  ["GT 51 kWh", 169990, "Elétrico dianteiro", 136, 26.5, "Automático (redução única)", "Dianteira", 8.1, 6.4, 5.9, 6],
],
"Peugeot|3008": [
  ["1.6 Turbo Griffe AT", 189990, "1.6 Turbo 4 cil. (gasolina)", 173, 24.5, "Automático 6 marchas", "Dianteira", 8.9, 9.0, 12.5, 6],
],

// ---------- Citroen ----------
"Citroen|C3": [
  ["1.0 Live Manual", 84990, "1.0 Firefly Flex 3 cil.", 75, 10.7, "Manual 5 marchas", "Dianteira", 13.2, 11.7, 14.0, 6],
  ["1.0 Turbo Feel AT", 104990, "1.0 Turbo 200 Flex", 130, 20.4, "Automático 6 marchas", "Dianteira", 10.1, 10.8, 13.3, 6],
  ["1.0 Turbo Shine AT", 114990, "1.0 Turbo 200 Flex", 130, 20.4, "Automático 6 marchas", "Dianteira", 10.1, 10.6, 13.1, 6],
],
"Citroen|ë-C3": [
  ["You 44 kWh", 139990, "Elétrico dianteiro", 113, 12.5, "Automático (redução única)", "Dianteira", 11.0, 6.8, 6.0, 6],
  ["Max 44 kWh", 154990, "Elétrico dianteiro", 113, 12.5, "Automático (redução única)", "Dianteira", 11.0, 6.7, 5.9, 6],
],

// ---------- BYD ----------
"BYD|Dolphin Mini": [
  ["GS 38 kWh", 115990, "Elétrico dianteiro", 75, 13.8, "Automático (redução única)", "Dianteira", 10.9, 7.5, 6.5, 6],
],
"BYD|Dolphin": [
  ["GL 45 kWh", 149800, "Elétrico dianteiro", 95, 18.4, "Automático (redução única)", "Dianteira", 12.3, 7.0, 6.2, 6],
  ["GS 60 kWh", 169800, "Elétrico dianteiro", 204, 31.6, "Automático (redução única)", "Dianteira", 7.0, 6.6, 5.9, 6],
],
"BYD|Song Plus Premium": [
  ["DM-i 18,3 kWh", 219800, "1.5 Turbo + 2 elétricos (PHEV)", 212, 33.2, "Automático (redução única)", "Integral", 5.9, 17.0, 16.0, 8],
],
"BYD|Yuan Plus": [
  ["GS 60 kWh", 179800, "Elétrico dianteiro", 204, 31.6, "Automático (redução única)", "Dianteira", 7.3, 6.1, 5.8, 8],
],
"BYD|Seal": [
  ["Design RWD 82 kWh", 229800, "Elétrico traseiro", 313, 36.7, "Automático (redução única)", "Traseira", 5.9, 5.9, 6.5, 9],
  ["Performance AWD 82 kWh", 279800, "2 elétricos (AWD)", 530, 68.3, "Automático (redução única)", "Integral", 3.8, 5.4, 6.0, 9],
],
"BYD|Han": [
  ["EV AWD 85 kWh", 359800, "2 elétricos (AWD)", 517, 71.4, "Automático (redução única)", "Integral", 3.9, 5.2, 5.9, 11],
],
"BYD|Tan": [
  ["EV AWD 86 kWh", 429800, "2 elétricos (AWD)", 517, 71.4, "Automático (redução única)", "Integral", 4.6, 4.6, 5.2, 10],
],
"BYD|Shark": [
  ["DM-O 29,6 kWh", 259800, "1.5 Turbo + 2 elétricos (PHEV)", 431, 43.6, "Automático (redução única)", "Integral", 5.7, 12.0, 13.0, 6],
],

// ---------- GWM ----------
"GWM|Haval H6 HEV": [
  ["1.5 HEV2 Premium", 219900, "1.5 Turbo + elétrico (HEV)", 243, 38.8, "Automático (redução única)", "Dianteira", 8.5, 12.8, 13.5, 7],
  ["2.0 HEV4 Supreme", 249900, "2.0 Turbo + elétrico (HEV)", 342, 53.0, "Automático (redução única)", "Dianteira", 7.4, 12.2, 12.9, 7],
],
"GWM|Ora 03": [
  ["Skin 63 kWh", 189900, "Elétrico dianteiro", 171, 25.5, "Automático (redução única)", "Dianteira", 8.3, 6.5, 6.0, 6],
  ["GT 63 kWh", 209900, "Elétrico dianteiro", 171, 25.5, "Automático (redução única)", "Dianteira", 8.3, 6.4, 5.9, 6],
],
"GWM|Poer": [
  ["2.0 Diesel Elite 4x4 AT", 219900, "2.0 Turbodiesel 4 cil.", 197, 40.8, "Automático 8 marchas", "4x4", 11.5, 8.0, 10.8, 6],
],
"GWM|Tank 300": [
  ["2.0 HEV Diesel-free 4x4", 259900, "2.0 Turbo + elétrico (HEV)", 300, 65.0, "Automático (redução única)", "4x4", 8.5, 9.8, 11.0, 7],
],

// ---------- Chery ----------
"Chery|Tiggo 5x": [
  ["1.5 Turbo Comfort CVT", 119990, "1.5 Turbo Flex 4 cil.", 147, 21.4, "Automático (CVT)", "Dianteira", 10.5, 9.0, 11.5, 6],
  ["1.5 Turbo Pro CVT", 132990, "1.5 Turbo Flex 4 cil.", 147, 21.4, "Automático (CVT)", "Dianteira", 10.5, 8.9, 11.4, 6],
],
"Chery|Tiggo 7": [
  ["1.5 Turbo Pro CVT", 159990, "1.5 Turbo Flex 4 cil.", 147, 21.4, "Automático (CVT)", "Dianteira", 10.2, 8.7, 11.2, 6],
  ["1.5 Turbo Pro Max CVT", 174990, "1.5 Turbo Flex 4 cil.", 147, 21.4, "Automático (CVT)", "Dianteira", 10.2, 8.6, 11.1, 6],
],
"Chery|Tiggo 8": [
  ["1.6 Turbo Txs DCT", 219990, "1.6 Turbo Flex 4 cil.", 197, 28.0, "Automático 7 marchas (DCT)", "Dianteira", 9.5, 8.2, 10.8, 6],
  ["1.6 Turbo Pro Max DCT", 239990, "1.6 Turbo Flex 4 cil.", 197, 28.0, "Automático 7 marchas (DCT)", "Dianteira", 9.5, 8.1, 10.7, 6],
],
"Chery|Arrizo 6": [
  ["1.5 Turbo Pro CVT", 99990, "1.5 Turbo Flex 4 cil.", 147, 21.4, "Automático (CVT)", "Dianteira", 9.8, 9.3, 12.5, 6],
],
"Chery|iCar 03": [
  ["Elite 69 kWh", 179990, "Elétrico dianteiro", 204, 29.1, "Automático (redução única)", "Dianteira", 7.9, 6.0, 5.7, 6],
],

// ---------- Mitsubishi ----------
"Mitsubishi|L200 Triton": [
  ["2.4 Diesel GLS 4x4 AT", 239990, "2.4 Turbodiesel 4 cil.", 204, 43.9, "Automático 6 marchas", "4x4", 11.0, 8.4, 11.0, 7],
  ["2.4 Diesel HPE-S 4x4 AT", 279990, "2.4 Turbodiesel 4 cil.", 204, 47.9, "Automático 6 marchas", "4x4", 10.7, 8.3, 10.9, 7],
],
"Mitsubishi|Outlander": [
  ["2.4 PHEV HPE-S 4x4", 289990, "2.4 + 2 elétricos (PHEV)", 248, 20.0, "Automático (redução única)", "Integral", 8.3, 12.0, 12.5, 8],
],
"Mitsubishi|Eclipse Cross": [
  ["1.5 Turbo HPE CVT", 169990, "1.5 Turbo 4 cil.", 165, 25.5, "Automático (CVT)", "Dianteira", 9.9, 8.6, 11.4, 7],
  ["1.5 Turbo HPE-S 4WD CVT", 189990, "1.5 Turbo 4 cil.", 165, 25.5, "Automático (CVT)", "Integral", 10.3, 8.3, 11.1, 7],
],
"Mitsubishi|Pajero Sport": [
  ["2.4 Diesel HPE 4x4 AT", 289990, "2.4 Turbodiesel 4 cil.", 190, 43.9, "Automático 8 marchas", "4x4", 11.5, 7.8, 10.5, 7],
  ["2.4 Diesel HPE-S 4x4 AT", 329990, "2.4 Turbodiesel 4 cil.", 190, 43.9, "Automático 8 marchas", "4x4", 11.5, 7.7, 10.4, 7],
],

// ---------- Kia ----------
"Kia|Sportage": [
  ["1.6 Turbo EX AT", 189990, "1.6 Turbo 4 cil.", 177, 27.0, "Automático 7 marchas (DCT)", "Dianteira", 9.1, 8.8, 11.8, 6],
  ["1.6 Turbo SX AT", 214990, "1.6 Turbo 4 cil.", 177, 27.0, "Automático 7 marchas (DCT)", "Dianteira", 9.1, 8.6, 11.6, 6],
],
"Kia|Cerato": [
  ["2.0 EX AT", 129990, "2.0 4 cil. (gasolina)", 167, 20.0, "Automático 6 marchas", "Dianteira", 9.5, 9.2, 12.8, 6],
  ["2.0 SX AT", 149990, "2.0 4 cil. (gasolina)", 167, 20.0, "Automático 6 marchas", "Dianteira", 9.5, 9.0, 12.6, 6],
],
"Kia|EV6": [
  ["GT-Line RWD 77 kWh", 339990, "Elétrico traseiro (800V)", 229, 35.7, "Automático (redução única)", "Traseira", 7.3, 5.6, 6.2, 7],
  ["GT-Line AWD 77 kWh", 389990, "2 elétricos (AWD, 800V)", 325, 61.7, "Automático (redução única)", "Integral", 5.2, 5.2, 5.8, 7],
],
"Kia|Sorento": [
  ["1.6 Turbo HEV EX AT", 259990, "1.6 Turbo + elétrico (HEV)", 230, 35.7, "Automático 6 marchas", "Dianteira", 8.7, 11.5, 12.5, 7],
  ["1.6 Turbo HEV SX AWD AT", 299990, "1.6 Turbo + elétrico (HEV)", 230, 35.7, "Automático 6 marchas", "Integral", 8.9, 11.0, 12.0, 7],
],

// ---------- Volvo ----------
"Volvo|XC40": [
  ["Recharge Plus 78 kWh", 289990, "Elétrico traseiro", 252, 42.8, "Automático (redução única)", "Traseira", 7.3, 5.6, 6.0, 7],
  ["Recharge Ultimate Twin 78 kWh", 339990, "2 elétricos (AWD)", 408, 67.3, "Automático (redução única)", "Integral", 4.9, 5.3, 5.7, 7],
],
"Volvo|EX30": [
  ["Plus Single 69 kWh", 219990, "Elétrico traseiro", 272, 35.0, "Automático (redução única)", "Traseira", 5.3, 6.2, 6.4, 7],
  ["Ultra Twin 69 kWh", 259990, "2 elétricos (AWD)", 428, 55.1, "Automático (redução única)", "Integral", 3.6, 5.7, 6.0, 7],
],
"Volvo|C40": [
  ["Recharge Ultimate Twin 78 kWh", 309990, "2 elétricos (AWD)", 408, 67.3, "Automático (redução única)", "Integral", 4.7, 5.2, 5.6, 7],
],
"Volvo|XC60": [
  ["B5 Plus MHEV AWD", 349990, "2.0 Turbo + MHEV 48V", 250, 35.7, "Automático 8 marchas", "Integral", 6.9, 9.5, 12.0, 7],
  ["B5 Ultimate MHEV AWD", 389990, "2.0 Turbo + MHEV 48V", 250, 35.7, "Automático 8 marchas", "Integral", 6.9, 9.3, 11.8, 7],
],
"Volvo|XC90": [
  ["B5 Plus MHEV AWD", 469990, "2.0 Turbo + MHEV 48V", 250, 35.7, "Automático 8 marchas", "Integral", 7.7, 8.5, 11.0, 7],
  ["B6 Ultimate MHEV AWD", 529990, "2.0 Turbo + MHEV 48V", 300, 42.8, "Automático 8 marchas", "Integral", 6.7, 8.2, 10.7, 7],
],

// ---------- Ford ----------
"Ford|Ranger": [
  ["2.0 Diesel XLS 4x4 AT", 259990, "2.0 Bi-Turbodiesel 4 cil.", 210, 51.0, "Automático 10 marchas", "4x4", 9.9, 9.5, 12.0, 7],
  ["3.0 V6 Diesel Limited 4x4 AT", 329990, "3.0 V6 Turbodiesel", 250, 61.2, "Automático 10 marchas", "4x4", 8.7, 8.8, 11.4, 7],
  ["3.0 V6 Diesel Raptor 4x4 AT", 439990, "3.0 V6 Turbodiesel", 250, 61.2, "Automático 10 marchas", "4x4", 8.7, 7.8, 10.2, 7],
],
"Ford|Territory": [
  ["1.5 Turbo SEL AT", 179990, "1.5 Turbo 4 cil.", 160, 23.0, "Automático (CVT)", "Dianteira", 9.5, 8.8, 11.5, 6],
  ["1.5 Turbo Titanium AT", 199990, "1.5 Turbo 4 cil.", 160, 23.0, "Automático (CVT)", "Dianteira", 9.5, 8.7, 11.4, 6],
],
"Ford|Bronco Sport": [
  ["2.0 Turbo Wildtrak 4x4 AT", 259990, "2.0 Turbo 4 cil. (gasolina)", 250, 38.7, "Automático 8 marchas", "4x4", 7.0, 7.8, 10.5, 7],
],

// ---------- Land Rover ----------
"Land Rover|Range Rover Evoque": [
  ["P250 SE MHEV AWD", 399990, "2.0 Turbo + MHEV 48V", 249, 37.7, "Automático 9 marchas", "Integral", 7.5, 8.6, 11.5, 6],
  ["P250 Dynamic SE MHEV AWD", 439990, "2.0 Turbo + MHEV 48V", 249, 37.7, "Automático 9 marchas", "Integral", 7.5, 8.4, 11.3, 6],
],
"Land Rover|Discovery Sport": [
  ["P250 SE MHEV AWD", 429990, "2.0 Turbo + MHEV 48V", 249, 37.7, "Automático 9 marchas", "Integral", 7.7, 8.1, 11.0, 7],
  ["P250 Dynamic SE MHEV AWD", 469990, "2.0 Turbo + MHEV 48V", 249, 37.7, "Automático 9 marchas", "Integral", 7.7, 8.0, 10.9, 7],
],
"Land Rover|Defender": [
  ["110 P400 SE MHEV 4x4", 599990, "3.0 6 cil. + MHEV 48V", 400, 56.1, "Automático 8 marchas", "4x4", 6.1, 6.8, 9.5, 6],
  ["110 P400 X-Dynamic MHEV 4x4", 679990, "3.0 6 cil. + MHEV 48V", 400, 56.1, "Automático 8 marchas", "4x4", 6.1, 6.6, 9.3, 6],
],

// ---------- BMW ----------
"BMW|X1": [
  ["sDrive20i MHEV", 349990, "1.5 Turbo 3 cil. + MHEV", 156, 23.5, "Automático 7 marchas (DCT)", "Dianteira", 9.2, 9.5, 13.0, 7],
  ["xDrive20i M Sport MHEV", 399990, "2.0 Turbo 4 cil. + MHEV", 204, 30.6, "Automático 7 marchas (DCT)", "Integral", 7.4, 8.9, 12.2, 7],
],
"BMW|320i": [
  ["Sport MHEV", 319990, "2.0 Turbo 4 cil. + MHEV", 184, 30.6, "Automático 8 marchas", "Traseira", 7.1, 10.0, 14.0, 8],
  ["M Sport MHEV", 359990, "2.0 Turbo 4 cil. + MHEV", 184, 30.6, "Automático 8 marchas", "Traseira", 7.1, 9.8, 13.8, 8],
],
"BMW|iX1": [
  ["xDrive30 M Sport 65 kWh", 399990, "2 elétricos (AWD)", 313, 50.0, "Automático (redução única)", "Integral", 5.6, 5.4, 5.9, 7],
],

// ---------- Mercedes-Benz ----------
"Mercedes-Benz|GLA 200": [
  ["Advance MHEV", 349990, "1.3 Turbo 4 cil. + MHEV", 163, 27.5, "Automático 7 marchas (DCT)", "Dianteira", 8.7, 9.6, 13.2, 7],
  ["AMG Line MHEV", 389990, "1.3 Turbo 4 cil. + MHEV", 163, 27.5, "Automático 7 marchas (DCT)", "Dianteira", 8.7, 9.4, 13.0, 7],
],
"Mercedes-Benz|C 200": [
  ["Avantgarde MHEV", 369990, "1.5 Turbo 4 cil. + MHEV", 204, 30.6, "Automático 9 marchas", "Traseira", 7.3, 9.7, 13.8, 8],
  ["AMG Line MHEV", 409990, "1.5 Turbo 4 cil. + MHEV", 204, 30.6, "Automático 9 marchas", "Traseira", 7.3, 9.5, 13.6, 8],
],
"Mercedes-Benz|EQA": [
  ["250+ 70 kWh", 389990, "Elétrico dianteiro", 190, 38.7, "Automático (redução única)", "Dianteira", 8.6, 5.5, 5.8, 7],
],

// ---------- Audi ----------
"Audi|Q3": [
  ["35 TFSI Prestige MHEV", 349990, "1.4 TFSI 4 cil. + MHEV", 150, 25.5, "Automático 6 marchas (S tronic)", "Dianteira", 9.2, 9.8, 13.4, 7],
  ["40 TFSI Performance quattro MHEV", 399990, "2.0 TFSI 4 cil. + MHEV", 230, 35.7, "Automático 7 marchas (S tronic)", "Integral", 7.0, 9.0, 12.5, 7],
],
"Audi|A3 Sedan": [
  ["35 TFSI Prestige MHEV", 259990, "1.4 TFSI 4 cil. + MHEV", 150, 25.5, "Automático 6 marchas (S tronic)", "Dianteira", 8.4, 10.2, 14.0, 6],
  ["40 TFSI Performance MHEV", 309990, "2.0 TFSI 4 cil. + MHEV", 190, 32.6, "Automático 7 marchas (S tronic)", "Dianteira", 7.0, 9.6, 13.4, 6],
],
"Audi|Q4 e-tron": [
  ["40 e-tron 82 kWh", 449990, "Elétrico traseiro", 204, 31.6, "Automático (redução única)", "Traseira", 8.5, 5.6, 6.1, 8],
  ["50 e-tron quattro 82 kWh", 499990, "2 elétricos (AWD)", 299, 47.9, "Automático (redução única)", "Integral", 6.2, 5.3, 5.8, 8],
],

// ---------- Suzuki ----------
"Suzuki|Jimny": [
  ["1.5 Sierra 4x4 Manual", 149990, "1.5 4 cil. (gasolina)", 101, 13.3, "Manual 5 marchas", "4x4", 12.0, 8.8, 11.5, 4],
  ["1.5 Sierra 4x4 AT", 159990, "1.5 4 cil. (gasolina)", 101, 13.3, "Automático 4 marchas", "4x4", 13.0, 8.3, 11.0, 4],
],

// ---------- JAC ----------
"JAC|T40": [
  ["1.5 Turbo Diesel-free AT", 139990, "1.5 Turbo 4 cil.", 136, 21.4, "Automático 6 marchas", "Dianteira", 10.8, 8.8, 11.5, 4],
],
"JAC|e-JS1": [
  ["30 kWh", 109990, "Elétrico dianteiro", 95, 15.3, "Automático (redução única)", "Dianteira", 12.0, 7.2, 6.3, 4],
],
"JAC|iEV40": [
  ["55 kWh", 179990, "Elétrico dianteiro", 177, 24.0, "Automático (redução única)", "Dianteira", 9.5, 6.3, 5.9, 6],
],

// ---------- Omoda ----------
"Omoda|5": [
  ["1.5 Turbo Comfort DCT", 149990, "1.5 Turbo Flex 4 cil.", 147, 21.4, "Automático 7 marchas (DCT)", "Dianteira", 9.8, 8.8, 11.6, 6],
  ["1.5 Turbo Premium DCT", 164990, "1.5 Turbo Flex 4 cil.", 147, 21.4, "Automático 7 marchas (DCT)", "Dianteira", 9.8, 8.7, 11.5, 6],
],

// ---------- Neta ----------
"Neta|X": [
  ["Comfort 58 kWh", 179990, "Elétrico dianteiro", 150, 22.4, "Automático (redução única)", "Dianteira", 9.5, 6.2, 5.8, 6],
],

// ---------- RAM ----------
"RAM|Rampage": [
  ["2.0 Diesel Rebel 4x4 AT", 169990, "2.0 Turbodiesel 4 cil.", 170, 38.7, "Automático 9 marchas", "4x4", 9.9, 8.9, 11.5, 6],
  ["2.0 Turbo R/T 4x4 AT", 219990, "2.0 Turbo 4 cil. (gasolina)", 272, 40.8, "Automático 9 marchas", "4x4", 6.9, 7.8, 10.4, 6],
],
"RAM|1500": [
  ["5.7 V8 Laramie 4x4 AT", 349990, "5.7 V8 HEMI (gasolina)", 395, 56.6, "Automático 8 marchas", "4x4", 6.5, 5.5, 8.0, 6],
  ["5.7 V8 Limited 4x4 AT", 419990, "5.7 V8 HEMI (gasolina)", 395, 56.6, "Automático 8 marchas", "4x4", 6.5, 5.4, 7.9, 6],
],

// ---------- Geely ----------
"Geely|EX5": [
  ["Pro 60,2 kWh", 205800, "Elétrico dianteiro", 218, 32.6, "Automático (redução única)", "Dianteira", 6.9, 6.2, 5.9, 6],
  ["Max 60,2 kWh", 225800, "Elétrico dianteiro", 218, 32.6, "Automático (redução única)", "Dianteira", 6.9, 5.8, 5.5, 6],
],
"Geely|EX2": [
  ["Pro 39,4 kWh", 123800, "Elétrico traseiro", 116, 15.3, "Automático (redução única)", "Traseira", 10.2, 7.6, 6.8, 6],
  ["Max 39,4 kWh", 136800, "Elétrico traseiro", 116, 15.3, "Automático (redução única)", "Traseira", 10.2, 7.6, 6.8, 6],
],
};
