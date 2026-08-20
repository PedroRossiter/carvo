// Ficha técnica por carro. Chave: "Marca|Modelo".
// Campos: [motor, torque_kgfm, tracao, acel_0100_s, consumo_cidade, consumo_estrada,
//          tanque_l, lugares, comprimento_mm, entre_eixos_mm, peso_kg,
//          bateria_kwh, recarga, airbags, garantia_anos]
// Para BEV: consumo_cidade/estrada em km/kWh; tanque_l = null.
// null = dado não aplicável ou não divulgado.

module.exports = {
// ---------- Chevrolet ----------
"Chevrolet|Onix":            ["1.0 Turbo Flex 3 cil.", 16.3, "Dianteira", 10.5, 11.5, 13.8, 44, 5, 4179, 2551, 1075, null, null, 6, 3],
"Chevrolet|Onix Plus":       ["1.0 Turbo Flex 3 cil.", 16.3, "Dianteira", 10.9, 11.4, 13.6, 44, 5, 4474, 2551, 1120, null, null, 6, 3],
"Chevrolet|Tracker":         ["1.0/1.2 Turbo Flex", 21.4, "Dianteira", 10.2, 10.6, 12.9, 44, 5, 4275, 2570, 1290, null, null, 6, 3],
"Chevrolet|Spin":            ["1.8 Flex 4 cil.", 18.0, "Dianteira", 12.5, 9.3, 11.5, 53, 7, 4360, 2620, 1290, null, null, 4, 3],
"Chevrolet|Montana":         ["1.2 Turbo Flex", 21.4, "Dianteira", 10.4, 10.4, 12.8, 44, 5, 4739, 2794, 1290, null, null, 6, 3],
"Chevrolet|S10":             ["2.8 Turbodiesel 4 cil.", 45.9, "4x4", 10.5, 8.9, 11.6, 80, 5, 5350, 3096, 2100, null, null, 6, 3],
"Chevrolet|Equinox EV":      ["Elétrico dianteiro", 34.6, "Dianteira", 8.0, 5.6, 6.4, null, 5, 4915, 3009, 2100, 85, "150 kW DC (10-80% em ~35 min)", 8, 3],
"Chevrolet|Trailblazer":     ["2.8 Turbodiesel 4 cil.", 45.9, "4x4", 11.0, 8.0, 10.5, 76, 7, 4887, 2845, 2200, null, null, 7, 3],

// ---------- Fiat ----------
"Fiat|Mobi":                 ["1.0 Firefly Flex 3 cil.", 10.7, "Dianteira", 13.4, 11.9, 14.0, 47, 5, 3566, 2305, 950, null, null, 4, 3],
"Fiat|Argo":                 ["1.0/1.3 Flex 4 cil.", 13.7, "Dianteira", 11.9, 10.8, 13.2, 48, 5, 3956, 2521, 1075, null, null, 4, 3],
"Fiat|Pulse":                ["1.0 Turbo 200 Flex", 20.4, "Dianteira", 9.9, 11.1, 13.4, 47, 5, 4098, 2530, 1195, null, null, 6, 3],
"Fiat|Fastback":             ["1.3 Turbo 270 Flex", 27.5, "Dianteira", 8.5, 9.7, 12.4, 47, 5, 4441, 2534, 1290, null, null, 6, 3],
"Fiat|Strada":               ["1.0 Turbo / 1.3 Flex", 20.4, "Dianteira", 10.8, 10.9, 13.3, 55, 5, 4485, 2737, 1180, null, null, 4, 3],
"Fiat|Toro":                 ["1.3 Turbo 270 Flex", 27.5, "Dianteira", 9.2, 9.4, 11.8, 55, 5, 4915, 2990, 1520, null, null, 7, 3],
"Fiat|500e":                 ["Elétrico dianteiro", 22.4, "Dianteira", 9.0, 6.5, 5.4, null, 4, 3632, 2322, 1290, 42, "85 kW DC (0-80% em ~35 min)", 6, 3],
"Fiat|Titano":               ["2.2 Turbodiesel 4 cil.", 34.7, "4x4", 12.0, 8.6, 11.2, 80, 5, 5250, 3130, 1980, null, null, 6, 3],

// ---------- Volkswagen ----------
"Volkswagen|Polo":           ["1.0 TSI Flex 3 cil.", 20.4, "Dianteira", 9.4, 10.6, 13.4, 52, 5, 4079, 2564, 1120, null, null, 6, 3],
"Volkswagen|Virtus":         ["1.0 TSI Flex 3 cil.", 20.4, "Dianteira", 9.9, 10.5, 13.9, 52, 5, 4482, 2651, 1180, null, null, 6, 3],
"Volkswagen|T-Cross":        ["1.0/1.4 TSI Flex", 20.4, "Dianteira", 10.0, 10.2, 12.9, 52, 5, 4199, 2651, 1275, null, null, 6, 3],
"Volkswagen|Nivus":          ["1.0 TSI Flex 3 cil.", 20.4, "Dianteira", 10.3, 10.4, 13.1, 52, 5, 4266, 2566, 1235, null, null, 6, 3],
"Volkswagen|Taos":           ["1.4 TSI Flex 4 cil.", 25.5, "Dianteira", 8.8, 9.2, 12.0, 51, 5, 4461, 2680, 1450, null, null, 6, 3],
"Volkswagen|Saveiro":        ["1.6 MSI Flex 4 cil.", 16.8, "Dianteira", 11.4, 10.6, 13.2, 55, 2, 4506, 2762, 1170, null, null, 2, 3],
"Volkswagen|Amarok":         ["2.0 Turbodiesel 4 cil.", 41.0, "4x4", 10.5, 8.4, 11.0, 80, 5, 5350, 3270, 2180, null, null, 6, 3],
"Volkswagen|ID.4":           ["Elétrico traseiro", 31.6, "Traseira", 8.5, 5.4, 6.1, null, 5, 4584, 2765, 2124, 82, "135 kW DC (5-80% em ~36 min)", 6, 3],
"Volkswagen|Jetta":          ["1.4 TSI 4 cil. (gasolina)", 25.5, "Dianteira", 8.5, 9.5, 13.5, 51, 5, 4702, 2686, 1380, null, null, 6, 3],
"Volkswagen|Tiguan":         ["2.0 TSI 4 cil.", 35.7, "Integral", 6.8, 8.2, 11.0, 60, 7, 4723, 2791, 1650, null, null, 7, 3],

// ---------- Hyundai ----------
"Hyundai|HB20":              ["1.0 Turbo Flex 3 cil.", 17.5, "Dianteira", 10.2, 11.0, 13.5, 50, 5, 4038, 2530, 1090, null, null, 6, 5],
"Hyundai|HB20S":             ["1.0 Turbo Flex 3 cil.", 17.5, "Dianteira", 10.5, 10.9, 13.4, 50, 5, 4380, 2530, 1130, null, null, 6, 5],
"Hyundai|Creta":             ["1.0 Turbo / 2.0 Flex", 17.5, "Dianteira", 10.0, 10.0, 12.6, 50, 5, 4330, 2610, 1320, null, null, 6, 5],
"Hyundai|Kona":              ["1.0 Turbo Flex", 17.5, "Dianteira", 10.7, 10.2, 12.8, 50, 5, 4355, 2600, 1350, null, null, 6, 5],
"Hyundai|Tucson":            ["1.6 Turbo + elétrico (HEV)", 27.0, "Dianteira", 8.0, 14.5, 15.8, 52, 5, 4630, 2755, 1650, 1.5, null, 6, 5],
"Hyundai|Kona Electric":     ["Elétrico dianteiro", 26.0, "Dianteira", 7.8, 6.2, 6.0, null, 5, 4355, 2660, 1743, 65, "100 kW DC (10-80% em ~41 min)", 6, 5],
"Hyundai|Ioniq 5":           ["Elétrico traseiro (800V)", 35.7, "Traseira", 7.4, 5.5, 6.2, null, 5, 4635, 3000, 1950, 77, "350 kW DC (10-80% em ~18 min)", 7, 5],

// ---------- Toyota ----------
"Toyota|Yaris":              ["1.5 Dual VVT-iE Flex", 15.3, "Dianteira", 10.9, 11.0, 13.6, 42, 5, 4145, 2550, 1085, null, null, 7, 3],
"Toyota|Corolla":            ["2.0 Dynamic Force Flex", 21.4, "Dianteira", 9.2, 10.6, 14.1, 50, 5, 4630, 2700, 1330, null, null, 7, 3],
"Toyota|Corolla Cross":      ["1.8 + elétrico (HEV)", 14.5, "Dianteira", 9.7, 15.6, 15.2, 36, 5, 4460, 2640, 1440, 0.9, null, 7, 3],
"Toyota|SW4":                ["2.8 Turbodiesel 4 cil.", 51.0, "4x4", 10.2, 7.6, 10.5, 80, 7, 4795, 2745, 2200, null, null, 7, 3],
"Toyota|Hilux":              ["2.8 Turbodiesel 4 cil.", 51.0, "4x4", 10.7, 8.2, 11.0, 80, 5, 5325, 3085, 2130, null, null, 7, 3],
"Toyota|RAV4":               ["2.5 + elétrico (HEV)", 22.5, "Integral", 7.8, 13.8, 14.5, 55, 5, 4600, 2690, 1690, 1.6, null, 7, 3],
"Toyota|bZ4X":               ["Elétrico dianteiro", 27.1, "Dianteira", 7.5, 5.8, 6.3, null, 5, 4690, 2850, 1930, 71, "150 kW DC (10-80% em ~30 min)", 8, 3],

// ---------- Honda ----------
"Honda|City":                ["1.5 DOHC i-VTEC Flex", 15.5, "Dianteira", 10.3, 11.2, 14.0, 40, 5, 4580, 2600, 1150, null, null, 6, 3],
"Honda|City Hatchback":      ["1.5 DOHC i-VTEC Flex", 15.5, "Dianteira", 10.1, 11.2, 13.9, 40, 5, 4349, 2589, 1140, null, null, 6, 3],
"Honda|HR-V":                ["1.5 Turbo VTEC Flex", 24.5, "Dianteira", 8.7, 10.3, 12.8, 47, 5, 4340, 2610, 1330, null, null, 6, 3],
"Honda|CR-V":                ["2.0 + elétrico (e:HEV)", 18.4, "Dianteira", 9.0, 14.6, 14.9, 57, 5, 4694, 2700, 1650, 1.1, null, 6, 3],
"Honda|Civic":               ["2.0 + elétrico (e:HEV)", 32.1, "Dianteira", 7.9, 15.0, 15.5, 40, 5, 4678, 2735, 1450, 1.1, null, 6, 3],
"Honda|ZR-V":                ["2.0 + elétrico (e:HEV)", 32.1, "Dianteira", 8.0, 14.2, 14.8, 57, 5, 4568, 2655, 1600, 1.1, null, 6, 3],

// ---------- Renault ----------
"Renault|Kwid":              ["1.0 SCe Flex 3 cil.", 10.0, "Dianteira", 14.0, 12.3, 14.5, 38, 5, 3746, 2423, 920, null, null, 4, 3],
"Renault|Sandero":           ["1.0 Turbo TCe Flex", 20.4, "Dianteira", 10.5, 11.1, 13.6, 50, 5, 4070, 2635, 1090, null, null, 6, 3],
"Renault|Logan":             ["1.0 Turbo TCe Flex", 20.4, "Dianteira", 10.8, 11.0, 13.5, 50, 5, 4359, 2635, 1120, null, null, 6, 3],
"Renault|Duster":            ["1.6 SCe Flex 4 cil.", 15.8, "Dianteira", 12.0, 9.6, 12.0, 50, 5, 4341, 2673, 1310, null, null, 6, 3],
"Renault|Kardian":           ["1.0 Turbo TCe Flex", 22.4, "Dianteira", 9.7, 11.0, 13.4, 50, 5, 4118, 2604, 1210, null, null, 6, 3],
"Renault|Kwid E-Tech":       ["Elétrico dianteiro", 12.7, "Dianteira", 14.0, 7.0, 5.8, null, 5, 3734, 2423, 1073, 26, "30 kW DC (0-80% em ~40 min)", 4, 3],
"Renault|Oroch":             ["1.6 SCe Flex 4 cil.", 15.8, "Dianteira", 12.5, 9.2, 11.6, 50, 5, 4694, 2829, 1350, null, null, 6, 3],

// ---------- Nissan ----------
"Nissan|Kicks":              ["1.6 16V Flex 4 cil.", 15.5, "Dianteira", 11.5, 10.3, 12.7, 41, 5, 4300, 2620, 1200, null, null, 6, 3],
"Nissan|Versa":              ["1.6 16V Flex 4 cil.", 15.5, "Dianteira", 11.0, 10.6, 13.5, 41, 5, 4495, 2620, 1180, null, null, 6, 3],
"Nissan|Frontier":           ["2.3 Bi-Turbodiesel 4 cil.", 45.9, "4x4", 10.8, 8.5, 11.2, 80, 5, 5260, 3150, 2050, null, null, 7, 3],

// ---------- Jeep ----------
"Jeep|Renegade":             ["1.3 Turbo 270 Flex", 27.5, "Dianteira", 8.7, 9.3, 12.0, 55, 5, 4256, 2570, 1450, null, null, 7, 3],
"Jeep|Compass":              ["1.3 Turbo 270 Flex", 27.5, "Dianteira", 8.4, 8.8, 11.5, 60, 5, 4404, 2636, 1550, null, null, 7, 3],
"Jeep|Commander":            ["1.3 Turbo 270 Flex", 27.5, "Dianteira", 9.0, 8.3, 11.0, 60, 7, 4769, 2782, 1700, null, null, 7, 3],
"Jeep|Wrangler":             ["2.0 Turbo 4 cil. (gasolina)", 40.8, "4x4", 7.6, 6.8, 9.5, 81, 5, 4882, 3008, 2000, null, null, 4, 3],

// ---------- Peugeot ----------
"Peugeot|208":               ["1.0 Turbo 200 Flex", 20.4, "Dianteira", 9.9, 10.8, 13.2, 47, 5, 4055, 2540, 1150, null, null, 6, 3],
"Peugeot|2008":              ["1.0 Turbo 200 Flex", 20.4, "Dianteira", 10.2, 10.3, 12.8, 47, 5, 4113, 2612, 1230, null, null, 6, 3],
"Peugeot|e-208":             ["Elétrico dianteiro", 26.5, "Dianteira", 8.1, 6.4, 5.9, null, 5, 4055, 2540, 1455, 51, "100 kW DC (0-80% em ~30 min)", 6, 3],
"Peugeot|3008":              ["1.6 Turbo 4 cil. (gasolina)", 24.5, "Dianteira", 8.9, 9.0, 12.5, 53, 5, 4447, 2675, 1450, null, null, 6, 3],

// ---------- Citroen ----------
"Citroen|C3":                ["1.0 Turbo 200 Flex", 20.4, "Dianteira", 10.1, 10.8, 13.3, 47, 5, 3981, 2540, 1130, null, null, 6, 3],
"Citroen|ë-C3":              ["Elétrico dianteiro", 12.5, "Dianteira", 11.0, 6.8, 6.0, null, 5, 4015, 2540, 1400, 44, "100 kW DC (20-80% em ~26 min)", 6, 3],

// ---------- BYD ----------
"BYD|Dolphin Mini":          ["Elétrico dianteiro", 13.8, "Dianteira", 10.9, 7.5, 6.5, null, 5, 3780, 2500, 1240, 38, "40 kW DC (30-80% em ~30 min)", 6, 6],
"BYD|Dolphin":               ["Elétrico dianteiro", 18.4, "Dianteira", 12.3, 7.0, 6.2, null, 5, 4290, 2700, 1405, 45, "60 kW DC (30-80% em ~30 min)", 6, 6],
"BYD|Song Plus Premium":     ["1.5 Turbo + 2 elétricos (PHEV)", 33.2, "Integral", 5.9, 17.0, 16.0, 60, 5, 4775, 2765, 1930, 18.3, "AC 3,3 kW (0-100% em ~6 h)", 8, 6],
"BYD|Yuan Plus":             ["Elétrico dianteiro", 31.6, "Dianteira", 7.3, 6.1, 5.8, null, 5, 4455, 2720, 1680, 60, "88 kW DC (30-80% em ~28 min)", 8, 6],
"BYD|Seal":                  ["Elétrico traseiro", 36.7, "Traseira", 5.9, 5.9, 6.5, null, 5, 4800, 2920, 2055, 82, "150 kW DC (30-80% em ~26 min)", 9, 6],
"BYD|Han":                   ["2 elétricos (AWD)", 71.4, "Integral", 3.9, 5.2, 5.9, null, 5, 4995, 2920, 2200, 85, "170 kW DC (30-80% em ~25 min)", 11, 6],
"BYD|Tan":                   ["2 elétricos (AWD)", 71.4, "Integral", 4.6, 4.6, 5.2, null, 7, 4870, 2820, 2515, 86, "170 kW DC (30-80% em ~30 min)", 10, 6],
"BYD|Shark":                 ["1.5 Turbo + 2 elétricos (PHEV)", 43.6, "Integral", 5.7, 12.0, 13.0, 60, 5, 5457, 3260, 2710, 29.6, "55 kW DC (0-80% em ~30 min)", 6, 6],

// ---------- GWM ----------
"GWM|Haval H6 HEV":          ["1.5 Turbo + elétrico (HEV)", 53.0, "Dianteira", 7.8, 12.8, 13.5, 55, 5, 4653, 2738, 1700, 1.8, null, 7, 5],
"GWM|Ora 03":                ["Elétrico dianteiro", 25.5, "Dianteira", 8.3, 6.5, 6.0, null, 5, 4235, 2650, 1580, 63, "80 kW DC (30-80% em ~30 min)", 6, 5],
"GWM|Poer":                  ["2.0 Turbodiesel 4 cil.", 40.8, "4x4", 11.5, 8.0, 10.8, 78, 5, 5410, 3230, 2100, null, null, 6, 5],
"GWM|Tank 300":              ["2.0 Turbo + elétrico (HEV)", 65.0, "4x4", 8.5, 9.8, 11.0, 80, 5, 4760, 2750, 2200, 1.8, null, 7, 5],

// ---------- Chery ----------
"Chery|Tiggo 5x":            ["1.5 Turbo Flex 4 cil.", 21.4, "Dianteira", 10.5, 9.0, 11.5, 51, 5, 4358, 2610, 1350, null, null, 6, 5],
"Chery|Tiggo 7":             ["1.5 Turbo Flex 4 cil.", 21.4, "Dianteira", 10.2, 8.7, 11.2, 51, 5, 4500, 2670, 1450, null, null, 6, 5],
"Chery|Tiggo 8":             ["1.6 Turbo Flex 4 cil.", 28.0, "Dianteira", 9.5, 8.2, 10.8, 51, 7, 4722, 2710, 1650, null, null, 6, 5],
"Chery|Arrizo 6":            ["1.5 Turbo Flex 4 cil.", 21.4, "Dianteira", 9.8, 9.3, 12.5, 51, 5, 4675, 2670, 1350, null, null, 6, 5],
"Chery|iCar 03":             ["Elétrico dianteiro", 29.1, "Dianteira", 7.9, 6.0, 5.7, null, 5, 4406, 2715, 1730, 69, "80 kW DC (30-80% em ~30 min)", 6, 5],

// ---------- Mitsubishi ----------
"Mitsubishi|L200 Triton":    ["2.4 Turbodiesel 4 cil.", 43.9, "4x4", 11.0, 8.4, 11.0, 75, 5, 5320, 3130, 2050, null, null, 7, 5],
"Mitsubishi|Outlander":      ["2.4 + 2 elétricos (PHEV)", 20.0, "Integral", 8.3, 12.0, 12.5, 56, 5, 4710, 2705, 2000, 20, "AC 3,7 kW (0-100% em ~6,5 h)", 8, 5],
"Mitsubishi|Eclipse Cross":  ["1.5 Turbo 4 cil.", 25.5, "Dianteira", 9.9, 8.6, 11.4, 63, 5, 4545, 2670, 1500, null, null, 7, 5],
"Mitsubishi|Pajero Sport":   ["2.4 Turbodiesel 4 cil.", 43.9, "4x4", 11.5, 7.8, 10.5, 68, 7, 4825, 2800, 2100, null, null, 7, 5],

// ---------- Kia ----------
"Kia|Sportage":              ["1.6 Turbo 4 cil.", 27.0, "Dianteira", 9.1, 8.8, 11.8, 54, 5, 4660, 2755, 1550, null, null, 6, 5],
"Kia|Cerato":                ["2.0 4 cil. (gasolina)", 19.5, "Dianteira", 9.5, 9.2, 12.8, 50, 5, 4640, 2700, 1330, null, null, 6, 5],
"Kia|EV6":                   ["Elétrico traseiro (800V)", 35.7, "Traseira", 7.3, 5.6, 6.2, null, 5, 4695, 2900, 1985, 77, "350 kW DC (10-80% em ~18 min)", 7, 5],
"Kia|Sorento":               ["1.6 Turbo + elétrico (HEV)", 35.7, "Dianteira", 8.7, 11.5, 12.5, 67, 7, 4810, 2815, 1850, 1.5, null, 7, 5],

// ---------- Volvo ----------
"Volvo|XC40":                ["2 elétricos (AWD)", 67.3, "Integral", 4.9, 5.3, 5.7, null, 5, 4425, 2702, 2150, 78, "150 kW DC (10-80% em ~28 min)", 7, 3],
"Volvo|EX30":                ["Elétrico traseiro", 35.0, "Traseira", 5.3, 6.2, 6.4, null, 5, 4233, 2650, 1830, 69, "153 kW DC (10-80% em ~26 min)", 7, 3],
"Volvo|C40":                 ["2 elétricos (AWD)", 67.3, "Integral", 4.7, 5.2, 5.6, null, 5, 4440, 2702, 2185, 78, "150 kW DC (10-80% em ~28 min)", 7, 3],
"Volvo|XC60":                ["2.0 Turbo + MHEV 48V", 35.7, "Integral", 6.9, 9.5, 12.0, 71, 5, 4708, 2865, 1850, 0.5, null, 7, 3],
"Volvo|XC90":                ["2.0 Turbo + MHEV 48V", 35.7, "Integral", 7.7, 8.5, 11.0, 71, 7, 4953, 2984, 2100, 0.5, null, 7, 3],

// ---------- Ford ----------
"Ford|Ranger":               ["3.0 V6 Turbodiesel", 61.2, "4x4", 8.7, 9.5, 12.0, 80, 5, 5360, 3270, 2200, null, null, 7, 3],
"Ford|Territory":            ["1.5 Turbo Flex 4 cil.", 23.0, "Dianteira", 9.5, 8.8, 11.5, 55, 5, 4630, 2716, 1500, null, null, 6, 3],
"Ford|Bronco Sport":         ["2.0 Turbo 4 cil. (gasolina)", 38.7, "4x4", 7.0, 7.8, 10.5, 60, 5, 4390, 2670, 1700, null, null, 7, 3],

// ---------- Land Rover ----------
"Land Rover|Range Rover Evoque": ["2.0 Turbo + MHEV 48V", 37.7, "Integral", 7.5, 8.6, 11.5, 67, 5, 4371, 2681, 1900, 0.5, null, 6, 3],
"Land Rover|Discovery Sport":    ["2.0 Turbo + MHEV 48V", 37.7, "Integral", 7.7, 8.1, 11.0, 65, 7, 4597, 2741, 1950, 0.5, null, 7, 3],
"Land Rover|Defender":           ["3.0 6 cil. + MHEV 48V", 45.9, "4x4", 6.6, 6.8, 9.5, 90, 5, 5018, 3022, 2350, 0.5, null, 6, 3],

// ---------- BMW ----------
"BMW|X1":                    ["1.5 Turbo 3 cil. + MHEV", 23.5, "Dianteira", 9.2, 9.5, 13.0, 54, 5, 4500, 2692, 1550, 0.5, null, 7, 3],
"BMW|320i":                  ["2.0 Turbo 4 cil. + MHEV", 30.6, "Traseira", 7.1, 10.0, 14.0, 59, 5, 4713, 2851, 1545, 0.5, null, 8, 3],
"BMW|iX1":                   ["2 elétricos (AWD)", 50.0, "Integral", 5.6, 5.4, 5.9, null, 5, 4500, 2692, 2010, 65, "130 kW DC (10-80% em ~29 min)", 7, 3],

// ---------- Mercedes-Benz ----------
"Mercedes-Benz|GLA 200":     ["1.3 Turbo 4 cil. + MHEV", 27.5, "Dianteira", 8.7, 9.6, 13.2, 51, 5, 4410, 2729, 1500, 0.5, null, 7, 3],
"Mercedes-Benz|C 200":       ["1.5 Turbo 4 cil. + MHEV", 30.6, "Traseira", 7.3, 9.7, 13.8, 66, 5, 4751, 2865, 1625, 0.5, null, 8, 3],
"Mercedes-Benz|EQA":         ["Elétrico dianteiro", 38.7, "Dianteira", 8.6, 5.5, 5.8, null, 5, 4463, 2729, 2040, 70, "100 kW DC (10-80% em ~32 min)", 7, 3],

// ---------- Audi ----------
"Audi|Q3":                   ["2.0 TFSI 4 cil. + MHEV", 35.7, "Integral", 7.0, 9.0, 12.5, 60, 5, 4484, 2680, 1620, 0.5, null, 7, 3],
"Audi|A3 Sedan":             ["1.4 TFSI 4 cil. + MHEV", 25.5, "Dianteira", 8.4, 10.2, 14.0, 50, 5, 4495, 2636, 1370, 0.5, null, 6, 3],
"Audi|Q4 e-tron":            ["Elétrico traseiro", 31.6, "Traseira", 6.7, 5.5, 6.0, null, 5, 4588, 2765, 2050, 82, "135 kW DC (5-80% em ~29 min)", 8, 3],

// ---------- Suzuki ----------
"Suzuki|Jimny":              ["1.5 4 cil. (gasolina)", 13.3, "4x4", 12.0, 8.8, 11.5, 40, 4, 3645, 2250, 1135, null, null, 4, 3],

// ---------- JAC ----------
"JAC|T40":                   ["1.5 Turbo 4 cil.", 21.4, "Dianteira", 10.8, 8.8, 11.5, 60, 5, 5100, 3110, 1750, null, null, 4, 6],
"JAC|e-JS1":                 ["Elétrico dianteiro", 15.3, "Dianteira", 12.0, 7.2, 6.3, null, 5, 3765, 2390, 1200, 30, "40 kW DC (30-80% em ~30 min)", 4, 6],
"JAC|iEV40":                 ["Elétrico dianteiro", 24.0, "Dianteira", 9.5, 6.3, 5.9, null, 5, 4410, 2620, 1620, 55, "60 kW DC (30-80% em ~35 min)", 6, 6],

// ---------- Omoda ----------
"Omoda|5":                   ["1.5 Turbo Flex 4 cil.", 21.4, "Dianteira", 9.8, 8.8, 11.6, 51, 5, 4400, 2630, 1400, null, null, 6, 5],

// ---------- Neta ----------
"Neta|X":                    ["Elétrico dianteiro", 22.4, "Dianteira", 9.5, 6.2, 5.8, null, 5, 4310, 2610, 1600, 58, "60 kW DC (30-80% em ~30 min)", 6, 5],

// ---------- RAM ----------
"RAM|Rampage":               ["2.0 Turbodiesel 4 cil.", 38.7, "4x4", 8.8, 8.5, 11.0, 60, 5, 5031, 3000, 2000, null, null, 6, 3],
"RAM|1500":                  ["5.7 V8 HEMI (gasolina)", 56.6, "4x4", 6.5, 5.5, 8.0, 98, 5, 5916, 3672, 2600, null, null, 6, 3],

// ---------- Geely ----------
"Geely|EX5":                 ["Elétrico dianteiro", 32.6, "Dianteira", 6.9, 6.2, 5.9, null, 5, 4615, 2750, 1765, 60.2, "100 kW DC (30-80% em ~20 min)", 6, 6],
"Geely|EX2":                 ["Elétrico traseiro", 15.3, "Traseira", 10.2, 7.6, 6.8, null, 5, 4130, 2650, 1300, 39.4, "70 kW DC (30-80% em ~30 min); 6,6 kW AC", 6, 6],
};
