// Public health products

export interface Product {
  id: string | number;
  name: string;
  slug?: string;
  category?: "Agriculture" | "Public Health";
  subCategory?:
    | "bednet"
    | "biopesticides"
    | "biofertilizers"
    | "biofungicides"
    | "bionematicides"
    | "biostimulants"
    | "Botanical Pesticides"
    | "Bioacaricides"
    | "Pheromone LURES AND Traps"
    | "BioDecomposer"
    | "Biolarvicides"
    | "Seed Dressing(Biofertilizers)";
  brochure?: string;
  description?: {
    short?: string;
    long?: string;
  };
  applications?: [string];

  parts?: String;

  shortDescription?: string;
  tradeName?: string;
  formulation?: string;
  activeIngredient?:
    | string
    | { name: string; concentration: string }
    | string[];
  modeOfAction?: string;
  image?: string;
  spectrum?: string | string[];
  biolures?: Record<string, string>;
  product?: string;
  screenshots?: {
    spectrum?: string;
    bottom?: string;
  };
  biotrapparts?: string[];
  banner?: string;
  furtherinformations?: string;
  bilnet?: string;
  bisis?: string;
  as?: string;

  directionForUse?:
    | string
    | {
        dosage?: string;
        seed_treatment?: string;
        seedling_dipping?: string;
        sett_treatment?: string;
        soil_application?: string;
        tree_treatment?: string;
        specific_recommend?: string;
        seedling_treatment?: string;
        foliar_treatment?: string;
      };
  ecoSafety?: string;
  shelfLife?: string;
  packing?: string | { WP?: String; AS?: String; GR?: String; Cake?: String };
  application?: {
    crops?: string[];
  };
  technicalName?: string;
  potency?: string;
}

export const products: Product[] = [
  {
    id: "bacticide-wp-001",
    name: "BACTICIDE™ WP",
    brochure: "/images/brochure/FAMILYPOSTER.jpg",
    category: "Public Health",
    subCategory: "Biolarvicides",
    product:
      "Bacillus thuringiensis var. israelensis, Serotype H-14, Strain 164.",
    tradeName: "Bacticide WP",
    activeIngredient: [
      "Parasporal crystal containing Deltaendotoxin (5% - 8%)",
      "Spores (5% - 8%)",
    ],
    potency: "Minimum 5000 IU/mg",
    formulation: "WP (Wettable Powder)",
    spectrum:
      "Highly effective against feeding larval stages of various mosquito species e.g. Aedes, Culex, Anopheles, Culisetta, Psorophora, Uranotaenia, Mansonia, Simulium spp, Phlebotomus argentipes, vectors causing Malaria, Filaria, Japanese Encephalitis, Chikunguniya, Dengue, Nuisance mosquitoes, Onchocerciasis, kala-Azar etc.",
    modeOfAction:
      "Bacticide acts on host larvae through its parasporal crystal delta endotoxin and bacterial spores, causing starvation, paralysis and septicaemia of larval bodies ultimately resulting death of larval bodies.The endotoxin acts on midgut epithelium causing disintegration of gut wall, cessation of feeding activity, starvation and leakage of gut contents into haemolymph and body cavity of the larvae leading to general paralysis of larval body. The spores germinate to form bacterial cells that multiply in the larval gut body causing septicemia, leading to death of larvae. Surviving larvae if any, because of consuming sub-lethal doses,lead to under developed /deformed pupae unable to form the progenies.",
    directionForUse: {
      dosage:
        "2 kg - 5kg. per Ha. For use in both clean and polluted water at a residual of 2 - 4 weeks. Make homogenous solution of required dosage quantity of Bacticide WP in a small quantity of water. Dilute this solution into 200 ltrs of water under intermittent stirring. This solution is sufficient for one hectare water surface area and should be sprayed using knapsack sparyer with a flat fan nozzle or any other conventional sprayers, at fortnightly/monthly intervals in both clean and polluted water bodies. In case of basins deeper than 0.5 mtr or with heavy vegetation the dosage may be suitably increased. For optimum results, its advised to remove vegetation before spray.Use of Bacticide W.P. results in sharp and continuous decline of larval populations (90%-100%) within 6-24 hrs. of application, in various habitats and ecologically different sites including drains, water streams, sewerage tanks, water coolers, cooling towers, fountains, construction sites, industrial scraps, rice fields, septic tanks ditches, pools, marshy ponds etc. This results into decline of adult mosquito population.",
    },
    ecoSafety:
      "Extremely safe to non-target species including mammals, human beings, parasites and predators of mosquito larvae, insects, hydrobionts, fishes, birds, flora fauna. A low hazardous (Green label) biolarvicide.",
    shelfLife:
      "Minimum two (2) yrs. The product must be kept in its original properly labelled packing well sealed and stored in dry ventilated room at temperature not exceeding 45°C. Room should be well built, dry, well ventilated, well lit and of sufficient dimensions.",
    packing:
      "500 gm. 1 Kg. 5 Kg. in Trilaminated aluminium foil pouches packed in Cartons",
    image: "/images/products/PublicHealth/Products/p1.jpg",
    banner: "/images/products/PublicHealth/Banner/b1.jpg",
  },
  {
    id: "bacticide-dt-002",
    name: "BACTICIDE™ DT",
    category: "Public Health",
    subCategory: "Biolarvicides",
    brochure: "/brochure/DEADLYTRIO.jpg",
    product:
      "Bacillus thuringiensis var .israelensis, Serotype H-14, Strain 164.",
    tradeName: "Bacticide DT",
    activeIngredient: [
      "Parasporal crystal containing Deltaendotoxin 2.5%",
      "Spores : 5% ",
    ],
    potency: "2000 IU/mg",
    formulation: "DT (Water Dispersible Tablet)",
    spectrum:
      "Highly effective against feeding larval stages of various mosquito species e.g. Aedes, Culex, Anopheles, Culisetta, Psorophora, Uranotaenia, Mansonia, Simulium spp, Phlebotomus argentipes , vectors causing Malaria, Filaria, Japanese Encephalitis, Chikunguniya, Dengue, Nuisance mosquitoes, Onchocerciasis, kala-Azar etc.",
    modeOfAction:
      "Bacticide acts on host larvae through its parasporal crystal delta endotoxin and bacterial spores, causing starvation, paralysis and septicaemia of larval bodies ultimately resulting death of larval bodies.The endotoxin acts on midgut epithelium causing disintegration of gut wall, cessation of feeding activity, starvation and leakage of gut contents into haemolymph and body cavity of the larvae leading to general paralysis of larval body. The spores germinate to form bacterial cells that multiply in the larval gut body causing septicemia, leading to death of larvae. Surviving larvae if any, because of consuming sub-lethal doses,lead to under developed /deformed pupae unable to form the progenies.",
    directionForUse: {
      dosage:
        "One tablet of 400mg per 10-50 Litres of water. Put one tablet in prescribed area of water. Use of bactecide DT results into sharp and continous decline of lavel population (90 % -100 %) within 6 - 24 hours of application, in various habitats and ecologically different sites including sewerage tanks, water coolers, desert coolers, cooling towers, fountains, construction sites, industrial scraps, septic tanks, ditches etc. This results into decline of adult mosquitoes, Slite positive rates and Parasitological Indices.",
    },
    ecoSafety:
      "xtremely safe to non-target species including mammals, human beings, parasites and predators of mosquito larvae, insects, hydrobionts, fishes, birds, flora fauna. A low hazardous (Green label) biolarvicide.",
    shelfLife:
      "Minimum two (2) yrs. The product must be kept in its original properly labelled packing well sealed and stored in dry ventilated room at temperature not exceeding 45°C. Room should be well built, dry, well ventilated, well lit and of sufficient dimensions.",
    packing:
      "25 tablets of 400 mg packed in HDPE container of 10gm. 50 tablets of 400 mg packed in HDPE container of 20gm. 100 tablets of 400 mg packed in HDPE container of 40gm. 250 tablets of 400 mg packed in HDPE container of 100gm.",
    image: "/images/products/PublicHealth/Products/p2.jpg",
    banner: "/images/products/PublicHealth/Banner/b2.jpg",
  },

  {
    id: "bacticide-as-003",
    name: "BACTICIDE™ AS",
    category: "Public Health",
    subCategory: "Biolarvicides",
    brochure: "/brochure/BACTICIDEAS.jpg",
    product:
      "Bacillus thuringiensis var. israelensis, Strain VCRC B17, Serotype H-14.",
    tradeName: "Bacticide AS",
    activeIngredient: [
      "Parasporal crystal containing Deltaendotoxin 5%",
      "Spores 5%",
    ],
    potency: "Minimum 4000 IU/mg",
    formulation: "AS (Aqueous Suspension)",
    spectrum:
      "Highly effective against feeding larval stages of various mosquito species e.g. Aedes, Culex, Anopheles, Culisetta, Psorophora, Uranotaenia, Mansonia,Simulium spp, Phlebotomus argentipes, vectors causing Malaria, Filaria, Japanese Encephalitis, Chikunguniya, Dengue, Nuisance mosquitoes, Onchocerciasis, kala-Azar etc.",
    modeOfAction:
      "Bacticide acts on host larvae through its parasporal crystal delta endotoxin and bacterial spores, causing starvation, paralysis and septicaemia of larval bodies ultimately resulting death of larval bodies.The endotoxin acts on midgut epithelium causing disintegration of gut wall, cessation of feeding activity, starvation and leakage of gut contents into haemolymph and body cavity of the larvae leading to general paralysis of larval body. The spores germinate to form bacterial cells that multiply in the larval gut body causing septicemia, leading to death of larvae. Surviving larvae if any, because of consuming sub-lethal doses,lead to under developed /deformed pupae unable to form the progenies.",
    directionForUse: {
      dosage:
        "5 Litre – 10 Litre per Ha. (1 Litre diluted in 50-100 Litre of water).As soon as the mosquito breeding starts and at fortnightly interval. Spray preferably in late evenings for optimum efficacy. It can be sprayed in the field in both clean & polluted water by using high volume spraying equipments like bucket pump, rocket sprayer, foot sprayer, knapsack sprayer, compression knapsack battery sprayer or power sprayer. For best result good spray coverage is essential. Use of Bacticide AS results into sharp and continuous decline of larval populations (90%-100%) within 6-24 hrs. of application, in various habitats and ecologically different sites including drains, water streams, sewerage tanks, water coolers, cooling towers, fountains, construction sites, industrial scraps, rice fields, septic tanks, ditches, pools, marshy ponds etc. This results into decline of adult mosquito population.Use of Bacticide AS results into sharp and continuous decline of larval populations (90%-100%) within 6-24 hrs. of application, in various habitats and ecologically different sites including drains, water streams, sewerage tanks, water coolers, cooling towers, fountains, construction sites, industrial scraps, rice fields, septic tanks, ditches, pools, marshy ponds etc. This results into decline of adult mosquito population.",
    },
    ecoSafety:
      "Extremely safe to non-target species including mammals, human beings, parasites and predators of mosquito larvae, insects, hydrobionts, fishes, birds, flora fauna. A low hazardous (Green label) biolarvicide.",
    shelfLife:
      "Minimum two (2) yrs. The product must be kept in its original properly labelled packing well sealed and stored in dry ventilated room at temperature not exceeding 45°C. Room should be well built, dry, well ventilated, well lit and of sufficient dimensions.",
    packing:
      ":100 ml. 250 ml. 500 ml. 1 Litre, 5 Litre in HDPE bottles and further packed in Cartons.",
    image: "/images/products/PublicHealth/Products/p3.jpg",
    banner: "/images/products/PublicHealth/Banner/b3.jpg",
  },

  {
    id: "sphericide-004",
    name: "SPHERICIDE",
    category: "Public Health",
    subCategory: "Biolarvicides",
    product: "Bacillus sphaericus Serotype H-5a, 5b, Strain B - 101",
    tradeName: "Sphericide",
    activeIngredient: [
      "Parasporal crystal containing Delta-endotoxin",
      "Spores high active ingredient content",
    ],
    formulation: "WP (Wettable Powder)",
    spectrum:
      "Highly active against 1st / IInd / IIIrd instar larvae of various mosquito species e.g. Culex, Anopheles, Culisetta, Psorophora, Uranotaenia, Mansonia, vectors of Malaria, Filaria, Japanese Encephalitis, Dengue fever and Nuisance mosquitoes. It is also active against Phlebotomus argentipes vector of Kala-Azar.",
    modeOfAction:
      "Sphericide acts on host larvae through its parasproal crystal delta endotoxin and bacterial spores, causing starvation, paralysis and septicemia of larval bodies ultimately resulting death of larval bodies.The endotoxin acts on midgut epithelium causing disintegration of gut wall, cessation of feeding activity, starvation and leakage of gut contents into haemolymph and body cavity of the larvae leading to general paralysis of larval body. The spores germinate to form bacterial cells that multiply in the larval gut and body causing septicemia. Surviving larvae , if any, because of consuming sublethal doses, lead to under developed / deformed pupae / adults unable to form the progenies.",
    directionForUse:
      "Make homogenous thick paste of Sphericide in small quantity of water. Dilute the paste in desired volume of water under intermittent stirring. Spray @ 1.0 gm / sq.m. water surface as 1.0 % suspension, by knapsack or any other conventional sprayer at 2-6 weekly intervals.",
    ecoSafety:
      "Extremely safe to non-target species including mammals, human beings, parasites and predators of mosquito larvae, insects, hydrobionts, fishes, birds, CIB classification class IV, low hazardous (Green label) pesticides.",
    shelfLife:
      "Minimum 2-3 years if stored in dark, well ventilated rooms in original package at temperatures upto 40 C.",
    packing:
      "500 gm. 1 kg. 5 kg. in trilaminated aluminium foil pouches packed in cartons.",
    furtherinformations:
      "Sphericide results in sharp and continuous decline of larval populations (90-100%) within 6-24 hrs. of application, in various habitats and ecologically different sites including drains, water streams. Sewerage tanks, water coolers, cooling towers, fountains, construction sites, industrial scraps, rice fields, septic tanks, ditches, pools and marshy ponds, etc. This results in decline of adult mosquitoes, slide positivity rates and parsitological indices. It causes kill of mosquito larvae even in highly polluted, muddy, marshy waters where its persistence continues for 4-8 weeks thus avoiding frequent application required in case of chemical larvicides . It is a product of choice for use against An. sundaicus, a malaria vector prevalent in marshy/saline waters in coastal / inland areas and against Culex quinquefasciatus, C. tritaeniorhynchus and C.vishnui, vectors of filaria and Japanese encephalitis prevalent in rice fields.",
    image: "/images/products/PublicHealth/Products/p4.jpg",
    banner: "/images/products/PublicHealth/Banner/b4.jpg",
  },

  {
    id: "bilnet-005",
    name: "BILNET ®",
    product:
      "Normal and Long Use Insecticide Treated Nets of HDPE, LDPE, Cotton and POLYESTER.",
    category: "Public Health",
    subCategory: "bednet",
    tradeName: " Bilnet ",
    formulation: "Impregnated / Normal Bednet",
    spectrum: "Protection from vectors of disease with safety and efficacy.",
    directionForUse:
      "REDUCTION IN VECTOR BORNE DISEASE MORTALITY : Make sure that the family, especially children and expectant mothers always sleep under the net. Stretch & tie the net properly to the poles or onto walls, preferably with strings for good air flow & comfort. Tuck the net properly under the mattress or bed from all sides. Use a larger net to avoid contact of exposed body parts with the net. Mend the holes, if any.",
    bilnet:
      "Manufactured according to BIS (Bureau of Indian Standards) 14953:2001 for specifications of POLYESTER NETS. Repel/kill mosquitoes and bugs, cockroaches, flies etc., through contact action.",
    bisis: "Variety of materials, meshes, deniers, shades and sizes.",
    shelfLife:
      "Efficacious for more than one year, if not washed, handled carefully. Incase of washing Re-impregnate soon after washing.",
    packing:
      "Individually packed in plastic bags in a bales of 25/50/100 pieces.",
    image: "/images/products/PublicHealth/Products/p5.jpg",
    banner: "/images/products/PublicHealth/Banner/b5.jpg",
    screenshots: {
      spectrum: "/images/ss/publichealth-bednet-1.png",
      bottom: "/images/ss/publichealth-bednet-2.png",
    },
  },

  //  ----------------------------------------------------------------------------------------------------------------------------

  // -------------------------------AGRICULTURE SOLUTION----------------------------------------

  {
    id: "biolep-001",
    name: "BIOLEP",
    category: "Agriculture",
    subCategory: "biopesticides",
    product: "Bacillus thuringiensis var. kurstaki, Serotype H-3 a, 3b",
    tradeName: "Biolep",

    formulation: "WP (Wettable Powder)",

    spectrum:
      "Highly active up to 3rd instar larvae of lepidopteran caterpillars including Helicoverpa, Spodoptera, Plutella, borers, hairy caterpillars, cutworms, armyworms, leaf-rollers, leaf-miners, skeletonizers and defoliators affecting cereals, pulses, vegetables, oilseeds, cotton, fruit trees and forest trees.",
    modeOfAction:
      " Biolep acts on larvae through its parasporal crystal delta endotoxin and bacterial spores, causing starvation, paralysis and septicemia of larval bodies ultimately resulting in death of larvae. The endotoxin acts on midgut epithelium cell causing disintegration of gut wall, cessation of feeding activity, starvation and leakage of gut contents into haemolymph and body cavity of the larvae leading to paralysis of larval body. The spores germinate to form bacterial cells mass that multiply in the larval gut and body causing septicemia. Surviving larvae, if any, because of consuming sub-lethal doses, lead to under developed/ deformed pupae/ adults unable to form the progenies.",
    activeIngredient:
      "Parasporal Crystal Containing Delta – endotoxin and Spores of Bacillus thuringiensis var. kurstaki, Serotype H-3 a, 3b, Strain Z-52",
    directionForUse:
      "Make homogenous solution of Biolep in small quantity of water. Dilute the solution in desired volume of water under intermittent stirring. Mix 0.75 - 1.0 kg of Biolep in 500-750 liters of water, This solution is to be sprayed in one hectare area using knapsack or any other conventional high volume sprayer 2 - 3 times at 10-15 days intervals. Spray preferably in evening and on young larval stages or on sighting of egg laying.",
    ecoSafety:
      "Extremely safe to mammals, human beings, animals, natural parasites, predators, non target insects, fishes, birds, etc. Classified as Class – IV, low hazardous (green label) pesticide. No phytotoxicity and exempted from residue analysis.",
    shelfLife:
      "Minimum one year if stored in dark, well ventilated rooms in original package at cool and dry place away from direct sunlight and heat.",
    packing: {
      WP: "100 gm, 250 gm, 500 gm. and 1.0 kg., in Trilaminated aluminium foil pouches are packed in 10 kg. Cartons.",
    },
    furtherinformations:
      "Biolep results in instant stoppage of feeding and damage followed by death of caterpillars within 24-72 hrs. of application. This results in significant decline of Larval population as well the crop damage.",
    image: "/images/products/Agriculture/products/Biopesticides/p1.jpg",
    banner: "/images/products/Agriculture/banners/biopesticides/b1.jpg",
    brochure: "/images/brochure/FAMILYPOSTER.jpg",
  },
  {
    id: "biolep-002",
    name: "BIOLINE/VERTI-STAR",
    category: "Agriculture",
    subCategory: "biopesticides",
    tradeName: "Bioline and Verti-star",

    product: "Containing strain of Verticillium lecanii",
    activeIngredient: "Mycelial fragments and spores of Verticillium lecanii.",
    formulation: "WP (Wettable Powder) and AS (Aqueous Suspension).",
    spectrum:
      "Highly active on sucking pests like Scale Insects, Coccus viridis, Aphids, Thrips, Mealy Bugs, Jassids, Hoppers, etc. on crops like Mustard, Sugarcane, Mango, Sorghum, Rice, Cotton, Tomato, Grapes, Pomegranates, Chillies, Brinjal, Onion, Vegetables, Tea, Coffee, Fruits and Flowering plants.",
    modeOfAction:
      "Bioline/Verti-Star infects all stages of insects including eggs, larvae, pupae, nymphs and adults. The spores attach to insect cuticle / integuments, germinate and penetrate insect body. The hyphae through enzyme action proliferate in insect body and cause mortality through a combination of chemical, mechanical, water loss and nutrient loss effects. The insect body ultimately gets covered with mycelium and spores which may get dispersed and cause subsequent infections. Certain toxins - dipicolinic acid and bassianolide produced by this fungus also cause the mortality of insects.",
    directionForUse:
      "Mix 1.0 - 1.5kg or 0.75 - 1.0 ltrs. of Bioline/Verti-Star in 150-250 liters of water to be sprayed in one Acre area. This can be sprayed using high volume knapsack or any other conventional sprayers. Give 2 - 3 sprays at 7-10 days intervals based on pest population, preferably in evenings and on young larval/nymphal stages or on sighting of egg laying.",
    ecoSafety:
      "Extremely safe to mammals, human beings, animals, natural parasites, predators, non target insects, pollinators, fishes, birds, etc. Classified as Class – IV, low hazardous (green label) pesticide. No phytotoxicity and exempted from residue analysis.",
    shelfLife:
      "One year, if stored in dark, well ventilated rooms in original package at cool and dry place away from direct sunlight and heat.",
    packing: {
      WP: "100 gm, 250 gm, 500 gm and 1.0 kg., boxes futher packed in 10 kg. cartons.",
      AS: "100 ml, 250 ml, 500 ml and 1.0 ltr. bottles further packed in 10.0 ltrs. Cartons.",
    },

    image: "/images/products/Agriculture/products/Biopesticides/p2.jpg",
    banner: "/images/products/Agriculture/banners/biopesticides/b2.jpg",
    brochure: "/images/brochure/FAMILYPOSTER.jpg",
  },

  {
    id: "biolep-003",
    name: "BIOMET/ANKUSH",
    product: "Metarhizium anisopliae",
    category: "Agriculture",
    subCategory: "biopesticides",
    tradeName: "Biomet and Ankush.",
    activeIngredient:
      "Mycelial fragments and spores of Metarhizium anisopliae.",
    formulation: "WP (Wettable Powder) and AS (Aqueous Suspension).",
    spectrum:
      "Highly active on Termite, White grubs, Beetle Grubs, Caterpillars, Semiloopers, Cutworms and Sucking pests like Pyrilla, Brown Plant Hoppers, Mealybugs and Aphids on crops like Sugarcane, Groundnut, Rice, Wheat, Tobacco, Potato, Maize, Sorghum, Barley, Cotton, Soyabean, Oranges, Vegetables and other Horticulture Crops.",
    modeOfAction:
      "Biomet/Ankush infects all stages of insects including eggs, larvae, pupae, nymphs and adults. The spores attach to insect cuticle / integuments, they germinate and penetrate insect body. The hyphae through enzyme action proliferate in insect body and cause mortality through a combination of chemical, mechanical, water loss and nutrient loss effects. The insect body ultimately gets covered with mycelium and spores which may get dispersed and cause subsequent infections. Certain toxins called destruxin produced by this fungus also cause the mortality of insects.",
    directionForUse:
      "Mix 1.0-1.5 kg or 0.75-1.0 ltr. of Biomet/Ankush in 150-250 ltrs. of water. This solution is sufficient for one Acre area and should be sprayed using high volume knapsack sprayer or any other conventional sprayer. Give 2 - 3 sprays at 7 - 10 days interval. Spray preferably in evenings on young larval stages/nymph or on sighting of egg laying.",
    ecoSafety:
      "Extreamely safe to mammals, human beings, natural parasites and predators, non target insects, pollinators, fishes and birds, etc. Classified as Class – IV, low hazardous (green label) pesticide. No phytotoxicity and exempted from residue analysis.",
    shelfLife:
      "Minimum one year, if stored in well ventilated rooms in original package at cool and dry place away from direct sunlight and heat.",
    packing: {
      WP: "100 gm. 250 gm. 500 gm. and 1 kg. in boxes, further packed in 10 kg. cartons.",
      AS: "100 ml. 250 ml. 500 ml. and 1 ltr. in bottles further packed in 10 ltrs. cartons.",
    },

    image: "/images/products/Agriculture/products/Biopesticides/p3.jpg",
    banner: "/images/products/Agriculture/banners/biopesticides/b3.jpg",
    brochure: "/images/brochure/FAMILYPOSTER.jpg",
  },

  {
    id: "biolep-004",
    name: "BIORIN/KARGAR",
    product: "Beauveria bassiana",
    category: "Agriculture",
    subCategory: "biopesticides",
    tradeName: "Biorin and Kargar.",
    activeIngredient: "Mycelial fragments and Spores of Beauveria bassiana.",
    formulation: " WP (Wettable Powder) and AS (Aqueous Suspension).",
    spectrum:
      "Highly active on Lepidopteran caterpillars including Helicoverpa, Spodoptera, Plutella, Borers, Hairy caterpillars pests of vegetables and fruit plants and sucking pests like Scale insect, Mealy bug, Jassid, Aphids, Whiteflies on cotton and vegetables, Locusts, Colorado beetles of potato and Coffee berry Moth.",
    modeOfAction:
      "Biorin/Kargar infects all stages of insects including eggs, larvae, pupae, grubs, nymphs, hoppers and adults. The spores get attached to insect cuticle / integument, germinate and penetrate insect body. The hyphae through enzyme action proliferate in insect body and cause mortality through a combination of chemical, mechanical, water loss and nutrient loss effects. The insect body ultimately gets covered with mycelium and spores which may get dispersed and cause subsequent infections. Certain toxins produced by this fungus also cause the mortality of insects.",
    directionForUse:
      " Dissolve 1.0 - 2.0 Kg or 750 - 1000 ml in 150-250 ltrs. of water. This solution is sufficient for one acre area and should be sprayed using high volume knapsack or any other conventional sprayer. Give 2 - 3 sprays at 7 - 10 days interval and preferably spray in evenings on young larval stages/nymph or on sighting of egg laying.",
    ecoSafety:
      "Extreamely safe to mammals, human beings, animals, natural parasites and predators, non target insects, fishes, birds, etc. Classified as Class – IV, low hazardous (green label) pesticide. No phytotoxicity and exempted from residue analysis.",
    shelfLife:
      "One year, if stored in dark, well ventilated rooms in original package at cool and dry places away from direct sunlight and heat.",
    packing: {
      WP: "100 gm. 250 gm. 500 gm. 1.0 kg. boxes futher packed in 10 kg. cartons.",
      AS: "100 ml. 250 ml. 500 ml. and 1.0 ltr. bottles further packed in 10.0 ltrs. cartons.",
    },

    image: "/images/products/Agriculture/products/Biopesticides/p4.jpg",
    banner: "/images/products/Agriculture/banners/biopesticides/b4.jpg",
    brochure: "/images/brochure/FAMILYPOSTER.jpg",
  },
  {
    id: "biolep-005",
    name: "BIOVIRUS - H",
    category: "Agriculture",
    subCategory: "biopesticides",
    product: "Nuclear Polyhedrosis Virus (NPV) of Helicoverpa armigera",
    tradeName: "Biovirus-H",
    activeIngredient:
      "Polyhedral Inclusion Bodies (PIB) of Nuclear Polyhedrosis Virus (NPV) of Helicoverpa armigera .",
    formulation: "AS (Aqueous Suspension)",
    spectrum:
      "Highly active on Helicoverpa armigera pest of Cotton, Pigeon Pea, Gram, Tomato, Okra, Brinjal, Chilli, Cabbage, Pea, Groundnut, Tobacco, Millets, Oilseed crops, Roses etc.",
    modeOfAction:
      "The PIBs from Biovirus-H, ingested by larvae cause severe infections of larval bodies causing darkening, disintegration of tissues, larval death and release of whitish fluid within 2-3 days of applications at young larval stages. The NPV infection is at times transmitted in pupae and adults stages. The caterpillars emerging out of the eggs layed by such adults also carry the PIBs of NPV.",
    directionForUse:
      "Mix 250-500 ml of Biovirus-H in 150-250 ltrs. of water. This solution is sufficient for one Acre area and should be thoroughly mixed before the preparation of final spray solution. Spray 2-3 times, at 10-12 days interval by knapsack or any other conventional sprayer based on pest population. Spray preferably in evening on young larval stages or on sighting of egg laying.",
    ecoSafety:
      "Extremely safe to mammals, human beings, natural parasites and predators, non target insects, pollinators, fishes, birds, etc. Classified as Class – IV, low hazardous (green label) pesticide. No phytotoxicity and exempted from residue analysis.",
    shelfLife:
      "One year , if stored in well ventilated rooms in original package at cool and dry places away from direct sunlight and heat.",
    packing: {
      AS: "100 ml. 250 ml. 500 ml. and 1 ltr. in HDPE Bottles further packed in 10 ltrs. Cartons.",
    },
    furtherinformations:
      "Biovirus-H results in instant stoppage of feeding and damage to crops followed by death of insects within 24-72 hrs. of application. This results in significant decline of insect populations as well as decline in crop damage.",
    image: "/images/products/Agriculture/products/Biopesticides/p5.jpg",
    banner: "/images/products/Agriculture/banners/biopesticides/b5.jpg",
    brochure: "/images/brochure/FAMILYPOSTER.jpg",
  },

  {
    id: "biolep-006",
    name: "BIOVIRUS - S",
    category: "Agriculture",
    subCategory: "biopesticides",
    product: "Nuclear Polyhedrosis Virus (NPV) of Spodoptera litura",
    tradeName: " Biovirus-S.",
    activeIngredient:
      "Polyhedral Inclusion Bodies (PIB) of Nuclear Polyhedrosis Virus (NPV) of Spodoptera litura.",
    formulation: "AS (Aqueous Suspension).",
    spectrum:
      "Highly active on Spodoptera litura pest of Cotton, Groundnut, Pulses, Cabbage, Chillies, Tobacco, Oil seeds crops, Roses etc.",
    modeOfAction:
      "The PIBs from Biovirus-S, ingested by larvae cause severe infections of larval bodies causing darkening, disintegration of tissues, larval death and release of whitish fluid within 2-3 days of applications at young larval stages. The NPV infection is at times transmitted in the pupae and adult stages. The caterpillars emerging out of the eggs layed by such adults also carry the PIBs of NPV.",
    directionForUse:
      "Mix 250 - 500 ml of Biovirus-S in 150-250 ltrs. of water. This solution is sufficient for one Acre area and should be thoroughly mixed before the preparation of final spray solution. Spray 2-3 times, at 10-12 days interval by high volume knapsack or any other conventional sprayer based on pest population. Spray preferably in evening on young larval stages or on sighting of egg laying.",
    ecoSafety:
      "Extremely safe to mammals, human beings, farm animals, natural parasites and predators, non target insects, pollinators, fishes, birds, etc. Classified as Class – IV, low hazardous (green label) pesticide. No phytotoxicity and exempted from residue analysis.",
    shelfLife:
      "Minimum one year, if stored in well ventilated rooms in original package at cool and dry place away from direct sunlight and heat.",
    packing: {
      AS: "100 ml. 250 ml. 500 ml. and 1.0 ltr. in HDPE bottles, further packed in 10 ltrs. Cartons",
    },
    furtherinformations:
      "Biovirus-S results in instant stoppage of feeding and damage to crop, followed by death of insects within 48-72 hrs. of application. This results in significant decline of insect populations as well as decline in crop damage.",
    image: "/images/products/Agriculture/products/Biopesticides/p6.jpg",
    banner: "/images/products/Agriculture/banners/biopesticides/b6.jpg",
  },

  {
    id: "biofertilizers-001",
    name: "BIOAZOTO/BHOOMI RAKSHAK",
    category: "Agriculture",
    subCategory: "biofertilizers",
    product: "Azotobacter spp",
    tradeName: "Bioazoto and Bhoomi Rakshak",
    applications: ["Seed Dressing"],
    activeIngredient: "Dormant cell mass of Azotobacter spp.",
    formulation:
      "AS (Aqueous Suspension), WP (Wettable Powder) and GR (Granules)",
    spectrum:
      "This organism is a free living nitrogen fixing bacterium, fixes atmospheric nitrogen in symbiotic association with plants thereby helping in reducing the use of chemical fertilizers. This increases the yield by 20% - 25% at a lower cost. It encourages better seed germination, impair disease resistance, improve soil health and soil fertility, secretes growth promoting hormones to increase crop productivity, reduces the dosage requirement of nitrogen (nearly 20% - 30%) and benefits the next crop. It can be used in crops like Cereals, Pulses, Cotton, Oilseeds, Vegetables, Fruit crops, Plantation crops etc.",
    modeOfAction:
      "The dormant form of Azotobacter spp. cells on reaching the soil gets activated and produces fresh batch of active cells. They are known to secrete various growth promoting substances like IAA, Gibberellic acid, cytokinins and vitamins which promote seed germination thus giving vigor to plant to get luxuriant growth.",
    ecoSafety:
      "The product is non toxic to Crop plants, human beings, animals, birds, fishes and all other non target organisms. No phytotoxicity and exempted from residue analysis.",
    shelfLife:
      "The shelf life of product is two years when stored in cool and dry place away from direct sunlight and heat.",
    packing: {
      AS: "100ml, 250ml, 500ml and 1.0 ltr. in bottles further packed in 10 ltrs. cartons.",
      WP: "250 gm, 500 gm and 1.0 kg. in boxes further packed in 10 kg. Cartons.",
      GR: "4.0 kg Polyester Bags.",
    },
    furtherinformations:
      " Shake well before use. Keep bottles in a cool and dry place away from direct heat and sunlight. Once the Bottle opened, use the entire content. Bioazoto/Bhoomi Rakshak should not be mixed with antibacterial agents or chemical fertilizers.",
    directionForUse: {
      seed_treatment:
        "Mix 5 - 10 ml. or gm. of Bioazoto/Bhoomi Rakshak with sufficient quantity of water and treat 1.0 Kg of seeds. Shade dry for half an hour before sowing.",
      seedling_dipping:
        "Mix 50 - 100 ml. or gm. of Bioazoto/Bhoomi Rakshak in 10-20 ltrs. of water and dip the seedling root for 30 minutes before transplanting.",
      sett_treatment:
        " Mix 250 - 500 ml. or gm. of Bioazoto/Bhoomi Rakshak in 100 Ltr. of water and dip the setts required for 1 acre for 30 minutes before planting in the field.",
      soil_application:
        "Mix 750 - 1000 ml/acre or 4 kg. granule/acre of Bioazoto/Bhoomi Rakshak with 30 - 40 kg’s of Farm Yard Manure, after thoroughly blending. Broadcast in 1 acre of land before last ploughing or after first irrigation. In standing crop irrigate the field after its application.",
      tree_treatment:
        "Apply 0.75 - 1.5 ltrs./acre of Bioazoto/Bhoomi Rakshak at the active root zone directly early in the season for most of field trees, fruit trees and ornamental trees through drip irrigation. Apply 0.75-1.5 ltr. of Bioazoto/Bhoomi Rakshak mixed in 100-150 ltrs. of water per acre or 25 ml. Bioazoto/Bhoomi Rakshak per tree or per Vines.",
      specific_recommend:
        "All Cereals : 1. 750-1000 ml/acre 2.Cotton : 750-1000 ml/acre 3. Oil Seeds : 750-1000 ml/acre 4. Vegetables : 750-1000 ml/acre 5. Tuber crops : 750-1500 ml/acre 6. Green house Vegetables : 750-1500 ml/acre 7. Fruits (Grapes, Pomegranate, Citrus etc.) : 750-1500 ml/acre 8. Ornamentals : 750-1500 ml/acre 9. Plantation crops (Coffee/Tea/Banana) : 1500-2000 ml/acre",
    },
    image: "/images/products/Agriculture/products/Biofertilizers/p1.jpg",
    banner: "/images/products/Agriculture/banners/biofertilizers/b1.jpg",
    screenshots: {
      bottom: "/images/ss/biofertilizers/bioazoto.jpeg",
    },
  },

  {
    id: "biofertilizers-002",
    name: "BIOBIUM/RHIZO-ENRICH",
    category: "Agriculture",
    subCategory: "biofertilizers",
    applications: ["Seed Dressing"],
    product: "Rhizobium spp",
    tradeName: "Biobium and Rhizo-Enrich.",
    activeIngredient: " Dormant cell mass of Rhizobium spp.",
    formulation: "AS (Aqueous Suspension) and WP (Wettable Powder).",
    spectrum:
      "Biobium/Rhizo-Enrich develops nodules on the roots of leguminous plants by symbiotic association and fix atmospheric nitrogen increasing yield upto 15% - 25%. It encourages early and better seed germination increases root and shoot growth, reduce dosage requirement of nitrogenous fertilizers (nearly by 40% - 50%) and increases grains yield. It can be used for all Leguminous crops - Groundnut, Soyabean, Redgram, Blackgram, Greengram, Bengalgram, Cowpea, Lentils, fodder legumes etc.",
    modeOfAction:
      "The dormant forms of Rhizobium cells on reaching the soil get activated, grow and multiply. During growth they get attached to root hairs of the target leguminous plants and develop symbiotic relationship with it and fixes atmospheric nitrogen through the root nodules. They also store nitrogen in the field for the next crop.",
    directionForUse: {
      seed_treatment:
        "Mix 5-10 ml. or gm. of Biobium/Rhizo-Enrich with sufficient quantity of water and rice ganji or Gum Arabica to make a slurry and treat 1.0 Kg of seeds. Shade dry the seeds for half an hour before sowing.",
      soil_application:
        " Mix 750 - 1000 ml or 1.0 - 1.5 kg. of Biobium/Rhizo-Enrich with 30-40 kg of Farm Yard Manure (FYM) thoroughly, broadcast this mixture in 1 acre of land before last ploughing or after first irrigation. In standing crop, broadcast the mixture followed by light irrigation.",
    },
    ecoSafety:
      "The product is non toxic to crop plants, human beings, animals, birds, fishes and all other non target organisms. No phytotoxicity and exempted from residue analysis.",
    shelfLife:
      "The shelf life of the product is two years when stored in cool and dry place away from direct sunlight and heat.",
    packing: {
      AS: "100ml, 250ml, 500ml and 1.0 ltr. in bottles further packed in 10 ltrs. cartons.",
      WP: "100gm, 250gm, 500gm and 1.0 kg in boxes further packed in 10 kg cartons.",
    },
    furtherinformations:
      "Shake well before use. Keep bottles in a cool and dry place away from direct heat and sunlight. Once Bottle opened, use the entire content. Biobium/Rhizo-Enrich should not be mixed with antibacterial agents or chemical fertilizers.",
    image: "/images/products/Agriculture/products/Biofertilizers/p2.jpg",
    banner: "/images/products/Agriculture/banners/biofertilizers/b2.jpg",
  },

  {
    id: "biofertilizers-003",
    name: "BIO-NPK/BHARPUR",
    category: "Agriculture",
    applications: ["Seed Dressing"],
    subCategory: "biofertilizers",
    product: "Bacterial strains",
    tradeName: "BIO-NPK and Bharpur.",
    activeIngredient: "Cell mass of bacterial cells.",
    formulation:
      "AS (Aqueous Suspension) WP (Wettable Powder) and GR (Granules)",
    spectrum:
      "Bio-NPK/Bharpur is able to synthesize/assimilate atmospheric nitrogen, solubilizes phosphate and potash into available form, thereby providing balanced nutrition to the crops. It converts non available forms of micronutrients into available form. Increases yield upto 15%-25%. It encourages early and better seed germination, increases root and shoot growth and reduce dosage requirement of chemical fertilizers ( nearly by 30% - 40%), increases number of grains, size and weight of grain and total productivity. It can be used for all Crop plants, orchard and trees.",
    modeOfAction:
      "The dormant forms of cells on reaching the soil get activated, grow and multiply by utilizing the carbon source in the soil or from root exudates. Bio-NPK/Bharpur fixes atmospheric nitrogen and make it available to plants. Where as phosphate solubilizing bacteria in consortium secretes organic acids-mallic acid, succinic acid, gluconic acid, keto-Gluconic acid etc. convert complex phosphorus into phosphate and make available to plant. The potash mobilizing bacteria release potash from soil lattice and make available to plants.",
    directionForUse: {
      seed_treatment:
        "Mix 5 - 10 ml. of Bio-NPK/Bharpur with sufficient quantity of water rice ganji or Gum Arabica to make slurry and treat 1.0 kg of seeds. Shade dry for half an hour before sowing.",
      seedling_treatment:
        "Mix 50 - 100 ml of Bio-NPK/Bharpur in 10-20 ltrs. of water and dip the root of seedling for 30 minutes before transplanting in the field.",
      sett_treatment:
        "Mix 250 - 500 ml of Bio-NPK/Bharpur in 100 ltrs. of water and dip the sugarcane sett for 30 minutes before planting in the field",
      soil_application:
        "Mix 750 - 1000 ml or 4 kg of Bio-NPK/Bharpur with 30 - 40 kg of Farm Yard Manure, after thoroughly mixing broadcast in 1 acre of land before last ploughing or after first irrigation. In standing crop, give light irrigation after its application.",
    },
    ecoSafety:
      "The product is non-toxic to human beings, animals, birds and all other non-target organisms. No phytotoxicity and exempted from residue analysis.",
    shelfLife:
      "The shelf life of the product is two years when stored in cool and dry place away from direct sunlight and heat.",
    packing: {
      AS: "100ml, 250 ml, 500 ml and 1.0 ltr. in bottles further packed in 10 ltrs. cartons.",
      WP: "100 gm, 250 gm, 500 gm and 1.0 Kg. in boxes packs further packed in 10 Kg. carton.",
      GR: "4.0 Kg. bag",
    },
    furtherinformations:
      "Shake well before use. Keep bottles/packs in a cool and dry place away from direct heat and sunlight. Once the bottle opened, use the entire content. Bio-NPK/Bharpur should not be mixed with antibacterial agents or chemical fertilizers.",
    image: "/images/products/Agriculture/products/Biofertilizers/p3.jpg",
    banner: "/images/products/Agriculture/banners/biofertilizers/b3.jpg",
    screenshots: {
      bottom: "/images/ss/biofertilizers/bharpur.jpeg",
    },
  },
  {
    id: "biofertilizers-004",
    name: "BIOPHOS/GET-PHOS",
    product: "Bacillus megaterium var. phosphaticum",
    category: "Agriculture",
    applications: ["Seed Dressing"],
    subCategory: "biofertilizers",
    tradeName: "BioPhos and Get-Phos.",
    activeIngredient:
      "Dormant cell mass of Bacillus megaterium var. phosphaticum.",
    formulation:
      "AS (Aqueous Suspension), WP (Wettable Powder) and GR (Granules)",
    spectrum:
      "This organism is capable of solubilizing insoluble phosphates and makes it biologically available to plants and thereby helps in reducing the use of chemical fertilizers and increases the yield by 20% - 25% at a lower cost. It produces organic acids like malic, succinic, fumaric, citric, tartaric and alpha ketoglutaric acid. This encourage early root development, hastens the maturity and increases the ratio of grain to straw as well as the total yield, stimulates formation of fats, convertible starches and result in healthy seeds, impair pest and disease resistance in crops. Further it improves soil health and soil fertility, secretes growth hormones to increase crop productivity, reduces the dosage requirement of Phosphorus (nearly by 40% - 50%), benefits the next crop also due to its residual effect. It can be used in crops like Cereals, Pulses, Cotton, Oilseeds, Vegetables, Fruit crops, Plantation crops etc.",
    modeOfAction:
      "The dormant forms of Bacillus megaterium var. phosphaticum. cells on reaching the soil gets activated and produces fresh batch of active cells. These cells grow and multiply by utilizing the carbon source in the soil or from root exudates. During their growth they secretes organic acids like malic, succinic, fumaric, citric, tartaric and alpha ketoglutaric acid and solubilize phosphorus and make it available to crops.",
    directionForUse: {
      seed_treatment:
        " Mix 5-10 ml. or gm. of BioPhos/Get-Phos with sufficient quantity of water and treat 1.0 Kg of seeds. Shade dry for half an hour before sowing.",
      seedling_dipping:
        "Mix 50-100 ml or gm. of BioPhos/Get-Phos in 10-20 ltrs of water and dip the roots of seedling for 30 minutes before transplanting.",
      sett_treatment:
        "Mix 250-500 ml or gm. of BioPhos/Get-Phos in 100 ltrs of water and dip the sugarcane setts for 30 minutes before planting in the field.",
      soil_application:
        " Mix 750-1000 ml or 4 kg. of BioPhos/Get-Phos with 30-40 kg’s of Farm Yard Manure (FYM). In absence of FYM, soil of the field can also be used. After thoroughly blending broadcast in 1 acre of land before last ploughing or after first irrigation. In standing crop, give light irrigation after its application.",
      tree_treatment:
        "Apply 0.75-1.5 ltrs. of BioPhos/Get-Phos at the active root zone directly early in the season for field trees, fruit trees and ornamental trees. Through drip irrigation per acre. For Vines apply 0.75-1.5 ltr. of BioPhos/Get-Phos mixed in 100-150 ltrs. of water per acre or 25 ml. BioPhos/Get-Phos per tree/vines.",
      specific_recommend:
        "All Cereals : 1. 750-1000 ml/acre 2.Cotton : 750-1000 ml/acre 3. Oil Seeds : 750-1000 ml/acre 4. Vegetables : 750-1000 ml/acre 5. Tuber crops : 750-1500 ml/acre 6. Green house Vegetables : 750-1500 ml/acre 7. Fruits (Grapes, Pomegranate, Citrus etc.) : 750-1500 ml/acre 8. Ornamentals : 750-1500 ml/acre 9. Plantation crops (Coffee/Tea/Banana) : 1500-2000 ml/acre",
    },
    ecoSafety:
      "The product is non toxic to crop plants, human beings, animals, birds, fishes and all other non target organisms. No phytotoxicity and exempted from residue analysis.",
    shelfLife:
      "The shelf life of the product is two years when stored in original packing in cool and dry place away from direct sunlight and heat.",
    packing: {
      AS: "100 ml, 250 ml, 500 ml and 1.0 ltr. in bottles further packed in 10 ltrs. cartons.",
      WP: "250 gm, 500 gm and 1.0 kg. in boxes further packed in 10.0 kg. Cartons.",
      GR: "4.0 kg Polyester Bags.",
    },
    furtherinformations:
      "Shake well before use. Keep bottles in a cool and dry place away from direct heat and sunlight. Once the bottle opened use the entire content. BioPhos/Get-Phos should not be mixed with antibacterial agents or chemical fertilizers.",
    image: "/images/products/Agriculture/products/Biofertilizers/p4.jpg",
    banner: "/images/products/Agriculture/banners/biofertilizers/b4.jpg",
    screenshots: {
      bottom: "/images/ss/biofertilizers/getphos.jpeg",
    },
  },

  {
    id: "biofertilizers-005",
    name: "BIOPOTASH/POTASH-CURE",
    category: "Agriculture",
    subCategory: "biofertilizers",
    product: "Frateuria aurentia",
    tradeName: "BioPotash and Potash-Cure.",
    activeIngredient: "Dormant cell mass of Frateuria aurentia.",
    formulation: "AS (Aqueous Suspension) and GR (Granules)",
    spectrum:
      "This bacteria is capable of mobilizing required potassium to target crops to the extent of 45%-50% thereby increasing the yield by 15% - 25% and quality of produce - colour, shape, skin, sweetness, flavor and shelf life. It encourages early root development, impair pest, disease and frost resistance, improve soil health and soil fertility, secretes growth hormones to increase crop productivity. This reduces the dosage requirement of Potash (nearly by 40% - 50%), benefits the next crop due to its residual effect. It can be used for crops like Cereals, Pulses, Cotton, Oilseeds, Vegetables, Fruit Crops, Plantation crops etc.",
    modeOfAction:
      "The dormant form of Frateuria aurentia cells on reaching the soil/root zone gets activated and produces fresh batch of active cells around root zone. These cells grow and multiply by utilizing the carbon source in the soil or from root exudates. They help in releasing Potash associated with clay minerals latticies. Thus converting insoluble inorganic potash into simple, soluble form and availabe to the plant.",
    directionForUse: {
      soil_application:
        "Mix 750-1000 ml or 2-4 kg. of BioPotash/Potash-Cure with 30-40 kg′s of Farm Yard Manure (FYM). In absence of FYM, soil of the field can be used. After thoroughly blending, broadcast in 1 acre of land before last ploughing or after first irrigation. In standing crops, irrigate the field after its application.",
      tree_treatment:
        "Apply 0.75 - 1.5 ltr. BioPotash/Potash-Cure at the active root zone directly early in the season for most of field trees, fruit trees and ornamental trees through drip irrigation/acre. For Vines apply 0.75-1.5 ltrs. of BioPotash/Potash-Cure mixed in 100-150 ltrs. of water per acre or 25 ml. BioPotash/Potash-Cure per tree/Vines.",
      specific_recommend:
        "All Cereals : 1. 750-1000 ml/acre 2.Cotton : 750-1000 ml/acre 3. Oil Seeds : 750-1000 ml/acre 4. Vegetables : 750-1000 ml/acre 5. Tuber crops : 750-1500 ml/acre 6. Green house Vegetables : 750-1500 ml/acre 7. Fruits (Grapes, Pomegranate, Citrus etc.) : 750-1500 ml/acre 8. Ornamentals : 750-1500 ml/acre 9. Plantation crops (Coffee/Tea/Banana) : 1500-2000 ml/acre",
    },
    ecoSafety:
      "The product is non toxic to crop plants, human beings, animals, birds, fishes and all other non target organisms. No phytotoxicity and exempted from residue analysis.",
    shelfLife:
      "The Shelf life of the product is two years when store in original packing in cool and dry place away from direct sunlight and heat.",
    packing: {
      AS: "100ml, 250ml, 500ml and 1.0 ltr. in bottles, further packed in 10 ltrs. cartons.",
      GR: "2.0 Kg Polyester Bags.",
    },
    furtherinformations:
      "Shake well before use. Keep bottles in a cool and dry place away from direct heat and sunlight. Once Bottle opened, use the entire content. BioPotash/Potash-Cure should not be mixed with antibacterial agents or chemical fertilizers.",
    image: "/images/products/Agriculture/products/Biofertilizers/p5.jpg",
    banner: "/images/products/Agriculture/banners/biofertilizers/b5.jpg",
    screenshots: {
      bottom: "/images/ss/biofertilizers/biopotash.jpeg",
    },
  },

  {
    id: "biofertilizers-006",
    name: "BIOSPIRILLUM/GREEN-PLUS",
    product: "Azospirillum spp",
    category: "Agriculture",
    applications: ["Seed Dressing"],
    subCategory: "biofertilizers",
    tradeName: "Biospirillum and Green-Plus.",
    activeIngredient: "Dormant Cell mass of Azospirillum spp.",
    formulation: "AS (Aqueous Suspension) and WP (Wettable Powder)",
    spectrum:
      "This organism can fix atmospheric nitrogen in range of 20 kg-40 kg N/ha in non-leguminous crops and can save the use of chemical nitrogenous fertilizer upto 25% - 30%. It encourages better root development. It synthesizes biologically active substances like nicotinic acid, indole acetic acid, gibberellins, vitamins etc. This encourages better seed germination and good growth of the crop, enhances soil health and soil fertility, secretes growth hormones to increase crop productivity, benefits the next crop also due to its Nitrogen fixation. It can be used for crops like Cereals, Cotton, Sugarcane, Vegetables, Fruit crops, Plantation crops, Fodder grasses etc.",
    modeOfAction:
      "The dormant cell mass of Azospirillum cells on reaching the soil get activated and produces fresh batch of active cells. These comma shaped bacterial cells containing large amount of lipid granules inside its cells enters the cortical cells of the root and fix atmospheric nitrogen considerably and also produce plant growth promoting substances that increases plant growth and yield.",
    directionForUse: {
      seed_treatment:
        "Mix 5-10 ml or gm. of Biospirillum/Green-Plus with sufficient quantity of water and treat 1.0 kg of seeds and shade dry for half an hour before sowing.",
      seedling_dipping:
        "Mix 50-100 ml or gm. of Biospirillum/Green-Plus in 10-20 ltrs. of water and dip the seedling roots for 30 minutes before transplanting.",
      sett_treatment:
        "Mix 250-500 ml or gm. of Biospirillum/ Green-Plus in 100 ltrs. of water and dip the sugarcane setts for 30 minutes before planting in the field.",
      soil_application:
        "Mix 750-1000 ml or 1-1.5 kg. of Biospirillum/ Green-Plus with 30-40 kg’s of Farm Yard Manure (FYM). In the absence FYM, soil of the field can also be used. After thoroughly blending, broadcast in 1 acre of land before last ploughing or after first irrigation. In standing crop irrigate the field after broad casting.",
      tree_treatment:
        "Apply 0.75-1.5 ltrs. of Biospirillum/Green-Plus at the active root zone directly early in the season for most of field trees, fruit trees and ornamental trees through drip irrigation per acre of field. For Vines apply 0.75-1.5 ltr. of Biospirillum/Green-Plus mixed in 100-150 ltr. of water per acre or 25 ml per tree/ Vines",
      specific_recommend:
        "All Cereals : 1. 750-1000 ml/acre 2.Cotton : 750-1000 ml/acre 3. Oil Seeds : 750-1000 ml/acre 4. Vegetables : 750-1000 ml/acre 5. Tuber crops : 750-1500 ml/acre 6. Green house Vegetables : 750-1500 ml/acre 7. Fruits (Grapes, Pomegranate, Citrus etc.) : 750-1500 ml/acre 8. Ornamentals : 750-1500 ml/acre 9. Plantation crops (Coffee/Tea/Banana) : 1500-2000 ml/acre",
    },
    ecoSafety:
      "The product is non toxic to crop plants, human beings, animals, birds, fishes and all other non target organisms. No phytotoxicity and exempted from residue analysis.",
    shelfLife:
      "The shelf life of the product is two years when stored in original pack in cool and dry place away from direct sunlight and heat.",
    packing: {
      AS: "100ml, 250ml, 500ml and 1.0 ltr. in bottles, further packed in 10 ltrs. cartons.",
      WP: "250 gm, 500 gm and 1.0 kg. in boxes further packed in 10 kg. Cartons",
    },
    furtherinformations:
      " Shake well before use. Keep bottles in a cool and dry place away from direct heat and sunlight. Once Bottle opened use the entire content. Biospirillum/Green-Plus should not be mixed with antibacterial agents or chemical fertilizers.",
    image: "/images/products/Agriculture/products/Biofertilizers/p6.jpg",
    banner: "/images/products/Agriculture/banners/biofertilizers/b6.jpg",
    screenshots: {
      bottom: "/images/ss/biofertilizers/biospirilum.jpeg",
    },
  },

  {
    id: "biofertilizers-007",
    name: "BIOSULF/SULF-CURE",
    product: "Thiobacillus thioxidans",
    tradeName: "BIOSULF and SULF-CURE",
    category: "Agriculture",
    subCategory: "biofertilizers",
    applications: ["Seed Dressing"],
    activeIngredient: " Cell mass of Thiobacillus thioxidans.",
    formulation: "AS (Aqueous Suspension) and GR (Granules)",
    spectrum:
      "Sulphur is a macronutrient required by plants for synthesis of enzymes, oils, chlorophyll and vitamins. In legumes, sulphur is necessary for the efficient nitrogen fixation. Sulphur is not mobile in the plant, continuous supply of sulphur is needed from emergence of plant to crop maturity. A deficiency of sulphur at any stage of growth can result in reduced yields. Crops which require sulphur are Spring Wheat, Barley, Oat, Rye, Canola, Flax, Pea, Lentil, Potato, Mustard, Alfalfa etc.",
    modeOfAction:
      "The dormant form of Thiobacillus thioxidans cells on reaching the soil gets activated and produces fresh batch of active cells which secretes enzymes like thioredoxins and number of organic acids - Sulphuric acid, Carbonic acid. These organic acids solubilise large amount of Sulphur, Zinc and other essentials elements which are present in the soil in elementary or complex form.",
    directionForUse: {
      seed_treatment:
        "Mix 5-10 ml. of Biosulf/Sulf-cure with sufficient quantity of water and treat 1 kg of seeds. Shade dry them for half an hour before sowing.",
      seedling_dipping:
        " Mix 50-100 ml. of Biosulf/Sulf-Cure in 10-20 ltrs. of water and dip the seedling roots for 30 minutes before transplanting.",
      sett_treatment:
        " Mix 250-500 ml. of Biosulf/Sulf-Cure in 100 ltrs. of water and dip the setts required for 1 acre for 30 minutes before planting in the field.",
      soil_application:
        "Mix 750-1000 ml. or 2-4 kg. of Biosulf/Sulf-Cure with 30-40 kg’s of Farm Yard Manure (FYM). In absence of FYM, soil of the field can be used. After thoroughly blending broadcast in 1 acre of land before last ploughing or after first irrigation or irrigate the field after its application. In standing crop, give light irrigation after its application.",
      tree_treatment:
        " Apply 0.75-1.0 ltrs. Biosulf/Sulf-Cure at active root zone directly early in the season for most of the field trees, fruit trees and ornamental trees through drip irrigation. For Vines apply 0.75-1.5 ltrs. of Biosulf/Self-Cure mixed in 100-150 ltrs. of water per acre or 100 gm of Biosulf/Sulfcure per tree at active root zone or 25-50 ml Bio-Sulf per tree at active root zone.",
      specific_recommend:
        "All Cereals : 1. 750-1000 ml/acre 2.Cotton : 750-1000 ml/acre 3. Oil Seeds : 750-1000 ml/acre 4. Vegetables : 750-1000 ml/acre 5. Tuber crops : 750-1500 ml/acre 6. Green house Vegetables : 750-1500 ml/acre 7. Fruits (Grapes, Pomegranate, Citrus etc.) : 750-1500 ml/acre 8. Ornamentals : 750-1500 ml/acre 9. Plantation crops (Coffee/Tea/Banana) : 1500-2000 ml/acre",
    },
    ecoSafety:
      "The product is non toxic to Crop plants, human beings, animals, birds, fishes and all other non target organisms. No phytotoxicity and exempted from residue analysis.",
    shelfLife:
      "The shelf life of product is two years. When stored in cool and dry place away from direct sunlight and heat in original pack.",
    packing: {
      AS: "250ml, 500ml, 1.0 ltr. in bottles further packed in 10 ltrs. cartons.",
      GR: "2 kg Polyester bags.",
    },
    furtherinformations:
      "Shake well before use. Keep bottles in a cool and dry place away from direct heat and sunlight. Once bottle opened, use the entire content. Biosulf/Sulf-Cure should not be mixed with antibacterial agents or chemical fertilizers.",
    image: "/images/products/Agriculture/products/Biofertilizers/p7.jpg",
    banner: "/images/products/Agriculture/banners/biofertilizers/b7.jpg",
    screenshots: {
      bottom: "/images/ss/biofertilizers/biosulf.png",
    },
  },
  {
    id: "biofertilizers-008",
    name: "BIOZINC/ZINC-CURE",
    product: "Zinc solubilizing bacteria",
    tradeName: "BioZinc and Zinc-Cure.",
    category: "Agriculture",
    subCategory: "biofertilizers",
    applications: ["Seed Dressing"],
    activeIngredient: " Cell mass of Zinc solubilizing bacteria.",
    formulation: "AS (Aqueous Suspension) and GR (Granules)",
    spectrum:
      "This bacterium is capable of mobilizing required Zinc to target crops to the extent of 45% - 50 % thereby increasing the yield by 15% - 25%. Zinc plays major role in carbohydrate metabolism, both in photosynthesis and in the conversion of sugars to starch, protein metabolism, auxin - growth regulator, metabolism, pollen formation, the maintenance of the integrity of cell wall and the resistance to infection by certain pathogens. This reduces the dosage requirement of Zinc (nearly by 40% - 50%), benefits the next crop also due to its residual effect. While Zinc is essential for every plant, these crops have been found to be especially responsive: Sugarcane, Oil Seed, Corn, Rice, Wheat, Cotton, Citrus, Sorghum and most Orchard crops.",
    modeOfAction:
      "The dormant form of Zinc solubilizing bacteria cells on reaching the soil gets activated and produces fresh batch of active cells. These cells grow and multiply by utilizing the carbon source in the soil or from root exudates and secrete organic acids - Sulphuric acid, nitric acid, carbonic acid to facilitate solubilization the elementary and complex form of essential elements and make them available to plant. During their growth they mobilize Zinc and make it available to crops.",
    directionForUse: {
      seed_treatment:
        "Mix 5-10 ml. of BioZinc/Zinc-Cure with sufficient quantity of water and treat 1.0 kg of seeds. Shade dry for half an hour before sowing.",
      seedling_dipping:
        " Mix 50-100 ml of BioZinc/Zinc-Cure in 10-20 ltrs. of water and dip the seedling roots for 30 minutes before transplanting.",
      sett_treatment:
        " Mix 250-500 ml. of BioZinc/Zinc-Cure in 100 ltrs. of water and dip the Sugarcane setts required for 1 acre for 30 minutes before planting in the field.",
      soil_application:
        "Mix 750-1000 ml of BioZinc or 2-4 Kg of Zinc-Cure with 30-40 kg of Farm Yard Manure (FYM). In absence of FYM, soil of the field can be used. After thoroughly blending, broadcast in 1 acre of land before last ploughing or after first irrigation or irrigate the field after its application. In standing crop, give light irrigation after its application.",
      tree_treatment:
        "Apply 0.75-1.5 ltrs. BioZinc/Zinc-Cure at active root zone directly early in the season for most of field trees, fruit trees and ornamental trees through drip irrigation per acre. For Vines, apply 0.75-1.5 ltrs. of BioZinc/Zinc-Cure mixed in 100-150 Ltr. of water per acre at active root zone or 25-50 ml of BioZinc/Zinc-Cure per tree/Vine at active root zone.",
      specific_recommend:
        "All Cereals : 1. 750-1000 ml/acre 2.Cotton : 750-1000 ml/acre 3. Oil Seeds : 750-1000 ml/acre 4. Vegetables : 750-1000 ml/acre 5. Tuber crops : 750-1500 ml/acre 6. Green house Vegetables : 750-1500 ml/acre 7. Fruits (Grapes, Pomegranate, Citrus etc.) : 750-1500 ml/acre 8. Ornamentals : 750-1500 ml/acre 9. Plantation crops (Coffee/Tea/Banana) : 1500-2000 ml/acre",
    },
    ecoSafety:
      "The product is non toxic to Crop plants, human beings, animals, birds, fishes and all other non target organisms. No phytotoxicity and exempted from residue analysis.",
    shelfLife:
      "The Shelf life of the product is two years when store in cool and dry place away from direct sunlight and heat.",
    packing: {
      AS: "100ml, 250 ml, 500ml and 1.0 ltr. in bottles further packed in 10 ltrs. cartons.",
      GR: "2 kg Polyester bags",
    },
    furtherinformations:
      "Shake well before use. Keep bottles in a cool and dry place away from direct heat and sunlight. Once Bottle opened, use the entire content. BioZinc/Zinc-Cure should not be mixed with antibacterial agents or chemical fertilizers.",
    image: "/images/products/Agriculture/products/Biofertilizers/p8.jpg",
    banner: "/images/products/Agriculture/banners/biofertilizers/b8.jpg",
    screenshots: {
      bottom: "/images/ss/biofertilizers/biozinc.png",
    },
  },
  {
    id: "biofertilizers-009",
    name: "BIOSILICA/SILICA-CURE",
    product: "Bacillus spp",
    tradeName: "BioSilica and Silica-Cure",
    category: "Agriculture",
    subCategory: "biofertilizers",
    applications: ["Seed Dressing"],
    activeIngredient: "Dormant cell mass of Bacillus spp.",
    formulation:
      "AS (Aqueous Suspension) , WP (Wettable Powder) and GR (Granules)",
    spectrum:
      "This organism is capable of solubilizing silica and makes it available to plants. It makes cell wall of plants thicker, strong and increasing the size of vascular bundles thereby plants take up more water, nutrients and resulting in strong, healthier and high yielding plants. It also provides strength to plants to tolerate biotic and abiotic stresses and improve its resistance to pest and disease attack. It can be used in crops like Cereals, Pulses, Cotton, Oil Seeds, Vegetables, Fruit crops, Plantation crops etc.",
    modeOfAction:
      "The dormant forms of Bacillus spp. cell on reaching the soil get activated and produces fresh batch of active cells. These cells grow and multiply by utilizing the carbon source in the soil or from root exudates. During their growth they secrete organic acid - Gluconic acid and Ketogluconic acid, acetic acid and solubilize silica and other essential plant elements to make it available to crops.",
    directionForUse: {
      seed_treatment:
        " Mix 5-10 ml. or gm. of BioSilica/Silica-Cure formulation with sufficient quantity of water & treat 1.0 Kg of seeds. Shade dry for half an hour before sowing.",
      seedling_dipping:
        "Mix 50-100 ml or gm. of BioSilica/Silica-Cure in 10-20 ltrs. of water and dip the seedling roots for 30 minutes before transplanting.",
      sett_treatment:
        "Mix 250-500 ml. or gm. of BioSilica/Silica-Cure in 100 ltrs. of water and dip the sugarcane setts for 30 minutes before planting in the field.",
      soil_application:
        "Mix 750-1000 ml or 2-4 kg of BioSilica/Silica-Cure with 30-40 kg of Farm Yard Manure (FYM). In absence of FYM, soil of the field can also be used. After thoroughly blending, broadcast uniformaly in 1 acre of land before last ploughing or after first irrigation. In standing crop give light irrigation after its application.",
      tree_treatment:
        "Mix 750-1000 ml or 2-4 kg of BioSilica/Silica-Cure with 30-40 Kg of Farm Yard Manure (FYM). In absence of FYM, soil of the field can also be used. And incorporate this in active root zone directly, early in the season for fruit trees, field trees and ornamental trees. It can be applied through drip irrigation 750-1000 ml per acre.",
      specific_recommend:
        "All Cereals : 1. 750-1000 ml/acre 2.Cotton : 750-1000 ml/acre 3. Oil Seeds : 750-1000 ml/acre 4. Vegetables : 750-1000 ml/acre 5. Tuber crops : 750-1500 ml/acre 6. Green house Vegetables : 750-1500 ml/acre 7. Fruits (Grapes, Pomegranate, Citrus etc.) : 750-1500 ml/acre 8. Ornamentals : 750-1500 ml/acre 9. Plantation crops (Coffee/Tea/Banana) : 1500-2000 ml/acre",
    },
    ecoSafety:
      "The product is non toxic to crop plants, human beings, animals, birds, fishes and all other non target organisms. No phytotoxicity and exempted from residue analysis.",
    shelfLife:
      "The shelf life of the product is two years when stored in original package in cool and dry place away from direct sunlight and heat.",
    packing: {
      AS: "100ml, 250ml, 500ml and 1.0 ltr. in bottles further packed in 10 ltrs. cartons.",
      WP: "250 gm, 500 gm and 1.0 kg. in boxes further packed in 10 kg. Cartons.",
      GR: "2.0 and 4.0 Kg Polyester Bags.",
    },
    furtherinformations:
      "Shake well before use. Keep bottles in a cool and dry place away from direct heat and sunlight. Once Bottle opened, use the entire content. BioSilica/Silica-Cure should not be mixed with antibacterial agents or chemical fertilizers.",
    image: "/images/products/Agriculture/products/Biofertilizers/p9.jpg",
    banner: "/images/products/Agriculture/banners/biofertilizers/b9.jpg",
    screenshots: {
      bottom: "/images/ss/biofertilizers/biosilica.jpeg",
    },
  },

  {
    id: "biofertilizers-010",
    name: "MYCO-RISE",
    product: "Mycorrhizal soil fungi (Vesicular Arbuscular Mycorrhiza – VAM)",
    category: "Agriculture",
    subCategory: "biofertilizers",
    applications: ["Seed Dressing"],
    tradeName: " MYCO-RISE",
    activeIngredient:
      "Dormant cell mass/Mycelium of Vesicular Arbuscular Mycorrhiza-VAM. Total viable propagules/gm. or ml. min – 100/gm. or 100/ml. of finished product.",
    formulation:
      "AS (Aqueous Suspension), WP (Wettable Powder) and GR (Granules).",
    spectrum:
      "MYCO-RISE formed symbiotic associations with roots of the plant, regulate biological activities, improve soil fertility, soil health, uptake of plant nutrient, enhance plant growth in acidic and saline soils, water stress and flooded conditions, tolerance of drought, salinity and transplantation shock. It also induces resistance in plants to soil borne diseases. It reduces the dosage requirement of phosphatic fertilizers and other micronutrients. MYCO-RISE fungus hyphae proliferate beyond the nutrient depletion zone reaching the source of nutrient.",
    modeOfAction:
      "The dormant form of MYCO-RISE spore on reaching the soil get activated and produce network of hyphae and form symbiotic association with plants. Fungus receives exudates from the plant, the plant in turn receive several benefits from the fungus resulting in the extension of plant root system and getting essential plant nutrient beyond depleting nutrient zone.",
    directionForUse: {
      seed_treatment:
        "Mix 5-10 ml. or gm. of MYCO-RISE with sufficient quantity of water and treat 1.0kg of seeds. Shade dry for half an hour before sowing.",
      seedling_dipping:
        "Mix 50-100 ml. or gm. of MYCO-RISE in 10-20 ltrs. of water and dip the seedling roots for 30 minutes before transplanting.",
      sett_treatment:
        "Mix 250-500 ml or gm. of MYCO-RISE in 100 ltrs. of water and dip the setts for 30 minutes before planting in the field.",
      soil_application:
        "Mix 750-1000ml or 4.0 kg. of MYCO-RISE with 30-40 kg of Farm Yard Manure (FYM). In the absence of FYM, soil of the field can be used. After thoroughly blending, broadcast in 1.0 Acre of land before last ploughing or after first irrigation. In standing crop, irrigate the field after its application.",
      tree_treatment:
        "Apply 0.75-1.5 ltrs. MYCO-RISE at the active root zone directly in the early season for most of field trees, fruit trees and ornamental trees through drip irrigation/acre or 100 gm. per tree. For vines, apply 0.75-1.5 ltrs. of MYCO-RISE mixed in 100-150 ltrs. of water per acre.",
      specific_recommend:
        "All Cereals : 1. 750-1000 ml/acre 2.Cotton : 750-1000 ml/acre 3. Oil Seeds : 750-1000 ml/acre 4. Vegetables : 750-1000 ml/acre 5. Tuber crops : 750-1500 ml/acre 6. Green house Vegetables : 750-1500 ml/acre 7. Fruits (Grapes, Pomegranate, Citrus etc.) : 750-1500 ml/acre 8. Ornamentals : 750-1500 ml/acre 9. Plantation crops (Coffee/Tea/Banana) : 1500-2000 ml/acre",
    },
    ecoSafety:
      "The product is non toxic to crop plants, human beings, animals, birds, fishes and all other non target organisms. No phytotoxicity and exempted from residue analysis.",
    shelfLife:
      "The shelf life of the product is two years when stored in original package in cool and dry place away from direct sunlight and heat.",
    packing: {
      AS: "100ml, 250ml, 500ml and 1.0 ltr. in bottles are further packed in 10.0 ltrs. Carton.",
      WP: "100gm, 250gm, 500gm and 1.0 kg. in boxes are further packed in 10.0 kg. Carton.",
      GR: "4.0 kg Polyster bags.",
    },
    furtherinformations:
      "Shake well before use. Keep bottles in a cool and dry place away from direct heat and sunlight. Once bottle opened, use the entire content. MYCO-RISE should not be mixed with antifungal agents and chemical fertilizers.",
    image: "/images/products/Agriculture/products/Biofertilizers/p10.jpg",
    banner: "/images/products/Agriculture/banners/biofertilizers/b10.jpg",
    screenshots: {
      bottom: "/images/ss/biofertilizers/mycorise.jpeg",
    },
  },

  {
    id: "biofertilizers-011",
    name: "SUGAR-PLUS",
    product: "Acetobacter spp",
    category: "Agriculture",
    subCategory: "biofertilizers",
    tradeName: " Sugar-Plus",
    activeIngredient: "Dormant cell mass of Acetobacter spp.",
    formulation:
      "AS (Aqueous Suspension), WP (Wettable Powder) and GR (Granules).",
    spectrum:
      "This organism is a nitrogen fixing endophytic bacterium originally isolated from sugar cane but found to be non-specific to many plants and crops. The bacterium establishes growth inside cortical cells of stems and inside xylem vessels. It shows beta-glucoronidase activity which helps fixation of Nitrogen, their by helping in reducing the use of chemical fertilizers. This increases the yield by 20%-25% at a lower cost. It encourages better seed germination, impair disease resitance, improve soil health and soil fertility, secretes growth promoting harmones and enzymes levansucrase, Pyrroloquinolone quinone-linked dehydrogenase to increase crop prodectivity, reduces the dosage requirements of nitrogen (nearly by 20%-30%). It can be used in crops like Sugarcane, Rice, Wheat, Sorghum, Cereals, Pulses, Cotton, Oilseeds, Vegetables, Fruit crops, Plantation crops, Pineapple, Coffee etc.",
    modeOfAction:
      " The dormant form of Acetobacter spp. cells on reaching the soil gets activated and produces fresh batch of active cells. They establish their growth in the plant stem- cortical and Xylem tissues. They promote the growth of plant, aids in several ways aside from nitrogen fixation. While specifically under nitrogen limiting conditions, its nitrogenase activity has been recorded .Phytochromes- IAA and Gibberellins A1 and A3. Also have Zinc and Phosphorus mobilizing capabilities by secreting Gluconic acid. Increase sucrose content and increase sugar recovery. Elicit a plant defense response against Xanthomonas albilineans, a sugarcane pathogen causing leaf scald disease (Wilt).it shows antifungal activity against Fusarium and Helminthosporium.",
    directionForUse: {
      seedling_dipping:
        "Mix 50-100 ml. or gm. of Sugar-Plus in 10-20 Ltr. of water and dip the seedling root for 30 minutes before transplanting.",
      sett_treatment:
        " Mix 250-500 ml. or gm. of Sugar-Plus in 100 Ltr. of water and dip the setts required for 1 acre for 30 minutes before planting in the field.",
      soil_application:
        "Mix 750-1000 ml or 4 Kg. per acre of Sugar-Plus with 30-40 kg’s of Farm Yard Manure. In absence of FYM, soil of field can be used. After thoroughly blending, broadcast in 1 acre of land before last ploughing or after first irrigation. In standing crop irrigate the field after its application.",
      tree_treatment:
        "Apply 0.75-1.5 Ltrs /Acre of Sugar-Plus at the active root zone directly early in the season for most of field trees, fruit trees and ornamental trees through drip Irrigation. Apply 0.75-1.5 ltr. of Sugar-Plus in 100-150 Ltr. of water per acre or 25 ml of Sugar-Plus per Tree/Vines.",
      specific_recommend:
        "All Cereals : 1. 750-1000 ml/acre 2.Cotton : 750-1000 ml/acre 3. Oil Seeds : 750-1000 ml/acre 4. Vegetables : 750-1000 ml/acre 5. Tuber crops : 750-1500 ml/acre 6. Green house Vegetables : 750-1500 ml/acre 7. Fruits (Grapes, Pomegranate, Citrus etc.) : 750-1500 ml/acre 8. Ornamentals : 750-1500 ml/acre 9. Plantation crops (Coffee/Tea/Banana) : 1500-2000 ml/acre",
    },
    ecoSafety:
      "The product is non toxic to crop plants, human beings, animals, birds, fishes and all other non target organisms. No phytotoxicity and exempted from residue analysis.",
    shelfLife:
      "The shelf life of product is 2 years when stored in cool and dry place away from direct sunlight and heat.",
    packing: {
      AS: "100ml, 250ml, 500ml and 1.0 lts. in bottles are further packed in 10.0 Lts. Carton.",
      WP: "250 gm, 500 gm and 1.0 Kg. in boxes further packed in 10 Kg. Cartons.",
      GR: "4.0 kg Polyster bags.",
    },
    furtherinformations:
      "Shake well before use. Keep the bottles in a cool and dry place away from direct heat and sunlight. Once the bottle opened, use the entire content. Sugar-Plus should not be mixed with antibacterial agents or chemical fertilizers",
    image: "/images/products/Agriculture/products/Biofertilizers/p11.jpg",
    banner: "/images/products/Agriculture/banners/biofertilizers/b11.jpg",
    screenshots: {
      bottom: "/images/ss/biofertilizers/sugarplus.jpeg",
    },
  },

  {
    id: "biofungicides-001",
    name: "BIODERMA-H/BARRIER",
    product: "Trichoderma harzianum",
    category: "Agriculture",
    subCategory: "biofungicides",
    applications: ["Seed Dressing"],
    tradeName: "Bioderma-H and Barrier.",
    activeIngredient: " Spores of Trichoderma harzianum.",
    formulation: " WP (Wettable Powder) and AS ( Aqueous Suspension)",
    spectrum:
      "Highly active on root rot, stem rot and wilt diseases caused by Phytophthora, Rhizoctonia, Schlerotinia, Fusarium, Verticillum and Bacterial disease. Damping off caused by Pythium, blights/leaf spots caused by Cercospora, Colletotrichum, Alternaria, Ascochyta, Macrophomina, Myrothecium, Ralstonia, bacterial and fungal diseases of Cotton, Cereals, Pulses, Vegetables, Oilseeds, Fruit and Floriculture.",
    modeOfAction:
      "Bioderma-H/Barrier acts on the plant pathogens through competition for space and nutrients, parasitization, disintegration of pathogen hyphae/cells by enzymes and antagonism by Trichoderma harzianum. Seed treatment with Bioderma-H provides a protective zone around seeds. Bioderma-H/Barrier metabolites stimulate seed germination, strengthen root system, plant growth and flower initiation.",
    directionForUse: {
      seed_treatment:
        "5-10 gm or ml. of Bioderma-H/Barrier is applied as a paste or slurry for 1 kg of seed. Shade dry the seed before sowing. Do not apply on seeds treated with chemical pesticides especially Fungicides.",
      seedling_dipping:
        " Mix 50-100 gm or ml.of Bioderma-H/Barrier in 10-20 ltrs. of water and dip the seedling roots for 30 minutes before transplanting.",
      soil_application:
        "Mix 2.0-2.5 kg or 1.0-1.5 ltr. of Bioderma-H/Barrier in 30-40 kg of Farm Yard Manure (FYM). In absence of FYM, soil of field can used. Blend thoroughly and broad cast in 1 acre of land before the last ploughing or after first irrigation. In standing crop, give light irrigation after its application.",
      foliar_treatment:
        "Mix 5-10 gm. or ml. of Bioderma-H/Barrier per liter of water and give foliar spray using high volume knapsack sprayer. Give 2-3 spray at 7-10 days interval. Do not use chemical fungicide at least for 15 days before and after use of Bioderma-H/Barrier.",
    },
    packing: {
      WP: "100 gm, 250 gm, 500 gm and 1.0 kg boxes further packed in 10 kg. Cartons.",
      AS: " 250 ml, 500 ml and 1.0 ltr. bottles further packed in 10 ltrs. Cartons",
    },
    shelfLife:
      "One year, if stored in well ventilated rooms in original packings at cool and dry place away from direct sunlight and heat.",
    ecoSafety:
      "Extremely safe to mammals, human beings, animals, non target organisms, pollinators, fishes and birds etc. Classified as Class-IV, low hazardous (green label) pesticide. No phytotoxicity and exempted from residue analysis. It can be used along with Biofertilizers.",
    image: "/images/products/Agriculture/products/Biofungicides/p1.jpg",
    banner: "/images/products/Agriculture/banners/biofungicides/b1.jpg",
  },
  {
    id: "biofungicides-002",
    name: "BIODERMA/PROTECTOR",
    product: "Trichoderma viride",
    category: "Agriculture",
    applications: ["Seed Dressing"],
    subCategory: "biofungicides",
    tradeName: "Bioderma and Protector.",
    activeIngredient: "Spores of Trichoderma viride.",
    formulation: "WP(Wettable Powder) and AS(Aqueous Suspension).",
    spectrum:
      "Highly active on root rots caused by Schlerotinia and Rhizoctonia, wilt caused by Fusarium and Verticillium and blights/ leaf spots caused by Alternaria, Ascochyta, Cercospora, Macrophomina, Myrothecium, Ramularia, Downy mildews and Powdery mildews, fungal diseases of Cotton, Cereals, Pulses, Vegetables, Oilseeds, Fruit and Floriculture.",
    modeOfAction:
      "Bioderma/Protector acts on the plant pathogens through competition for space and nutrients, parasitization, disintegration of pathogen hyphae by enzymes and antagonism by Trichoderma viride. Apart from this, Trichoderma viride. metabolites also stimulate seed germination, root and plant growth and early flower formation.",
    directionForUse: {
      seed_treatment:
        "Mix 5-10 gm. or ml. of Bioderma/Protector is applied as a paste or slurry for 1.0 kg. of seed. Shade dry the seeds before sowing. Do not apply on seeds treated with chemical pesticides especially fungicides.",
      seedling_dipping:
        "Mix 50-100 gm or ml. of Bioderma/Protector in 10-20 liters of water and dip the seedling roots for 30 minutes before transplanting.",
      soil_application:
        "Mix 2.0-2.5 kg or 1-1.5 ltrs. of Bioderma/Protector in 30-40 kg. of Farm Yard Manure (FYM). In absence of FYM, soil of field can be used. Blend thoroughly and broadcast in 1 acre of land before the last ploughing or after first irrigation. In standing crop, give light irrigation after its application.",
      foliar_treatment:
        "Mix 5-10 gm or ml. of Bioderma/Protector per liter of water and give foliar spray using high volume knapsack sprayer. Give 2-3 spray at 7-10 days interval. Do not use chemical fungicide at least for 15 days before and after use of Bioderma/Protector",
    },
    packing: {
      WP: "100 gm. 250 gm. 500 gm. and 1.0 kg. boxes which are further packed in 10 kg. Cartons.",
      AS: "250 ml. 500 ml. and 1 ltr. in bottles which are further packed in 10 ltrs. Cartons.",
    },
    shelfLife:
      "The Shelf life of product is one year when stored in cool and dry place away from direct sunlight and heat in ventilated rooms.",
    ecoSafety:
      "Extremely safe to mammals, human beings, non target organisms, pollinators, fishes and birds etc. Classified as Class-IV, low hazardous (green label) pesticide. No phytotoxicity and exempted from residue analysis. It can be used along with Biofertilizers.",
    image: "/images/products/Agriculture/products/Biofungicides/p2.jpg",
    banner: "/images/products/Agriculture/banners/biofungicides/b2.jpg",
  },
  {
    id: "biofungicides-003",
    name: "BIOMONAS/SHIELD PLUS",
    category: "Agriculture",
    subCategory: "biofungicides",
    applications: ["Seed Dressing"],
    product: "Pseudomonas fluorescens",
    tradeName: "Biomonas and Shield Plus.",
    activeIngredient: " Cell Mass of Pseudomonas fluorescens.",
    formulation: "WP (Wettable Powder) and AS (Aqueous Suspension)",
    spectrum:
      " Highly active on root and stem rots caused by Schlerotinia and Rhizoctonia, damping off caused by Pythium, blights/leaf spots caused by Alternaria, Ascochyta, Cercospora, Macrophomina, Myrothecium, Ramularia, Xanthomonas, Erwinia, wilts caused by Fusarium and Verticillum, downy mildews, Powdery mildews, bacterial and fungal diseases of Cotton, Cereals, Pulses, Vegetables, Oilseeds, Fruit and Floriculture.",
    modeOfAction:
      "Biomonas/Shield Plus induces systemic resistance by modification of cell wall of host plant (thickening of cell wall by lignifications) accumulation of PR protein-Phytoalexin. Enhanced level of Chitinase and peroxidase, LPS – Lipopolysaccharides, Siderophores, Salicylic acid production. It also acts as a plant growth promoter to stimulate seed germination, root and plant growth, early flowering and fruiting. Produce antibiotic viz. pyrrolnitrin, pyocyanine, 2,4 – diacetyl phoroglucinol. Also produce lytic enzymes-chitinases and beta 1-3, glucanases which degrade chitin and glucan present in the cell wall of fungi.",
    directionForUse: {
      seed_treatment:
        "Mix 5-10 gm. or ml. of Biomonas/Shield Plus is applied as a paste or slurry for 1.0 kg of seed. Shade dry the seed for half an hour before sowing. Do not apply on seeds treated with chemical pesticides especially Antibiotics.",
      seedling_dipping:
        "Mix 50-100 gm. or ml. of Biomonas/Shield Plus in 10-20 ltrs. of water and dip the seedling roots for 30 minutes before transplanting.",
      soil_application:
        "Mix 1.0-2.0 kg. or 1.0-1.5 ltrs. of Biomonas/Shield Plus in 30-40 kg of Farm Yard Manure (FYM). In absence of FYM, soil of field can be used. Blend thoroughly and broadcast in 1 acre of land before the last ploughing or after first irrigation. In standing crop, give light irrigation after its application.",
      foliar_treatment:
        "Mix 5-10 gm or ml. of Biomonas/Shield Plus per liter of water and give foliar spray using high volume knapsack sprayer. Give 2-3 spray at 7-10 days interval. Do not use antibiotic and copper fungicides at least 15 days before and after its application.",
    },
    packing: {
      WP: "100gm. 250gm. 500gm. and 1.0 kg. in boxes further packed in 10 kg. Cartons.",
      AS: "250ml. 500ml. and 1.0 ltr. in bottles further packed in 10 ltr. Cartons.",
    },
    shelfLife:
      "Min. one year, if stored in well ventilated rooms in original packings at cool and dry place away from direct sunlight and heat.",
    ecoSafety:
      "Extreamely safe to mammals, human beings, animals, non target organisms, pollinators, fishes, birds etc. Classified as Class-IV, low hazardous (green label) pesticide. No phytotoxicity and exempted from residue analysis. It can be used along with Biofertilizers.",
    image: "/images/products/Agriculture/products/Biofungicides/p3.jpg",
    banner: "/images/products/Agriculture/banners/biofungicides/b3.jpg",
  },

  {
    id: "biofungicides-004",
    name: "BIOSUBTILIN/ROG RAKSHAK",
    product: "Containing strain of Bacillus subtilis",
    category: "Agriculture",
    subCategory: "biofungicides",
    tradeName: "Biosubtilin and Rog Rakshak.",
    applications: ["Seed Dressing"],
    activeIngredient: "Cell Mass and Spores of Bacillus subtilis.",
    formulation: " AS (Aqueous Suspension) and WP (Wettable Powder)",
    spectrum:
      " Highly active on root rot and stem rot caused by Schlerotinia, Macrophomia; wilt caused by Verticillum, Fusarium; ; leaf spot caused by Alternaria, Cercospora;  powdery mildew caused by Erysiphae; black scarf in potato caused by Rhizoctonia; downy mildew and many other bacterial and fungal diseases caused in various crops like Cotton, Pulses, Paddy, Groundnut, Fruits, Vegetables and Plantation crops.",
    modeOfAction:
      "Biosubtilin/Rog Rakshak bacteria produce a class of lipopeptide antibiotics including iturins. Iturins help Bacillus subtilis bacteria out-compete other microorganisms by either killing them or reducing their growth rate. Iturins also have direct fungicidal activity in pathogens. Bacillus subtilis products are made for many uses. For plant disease control, these include foliar application and products applied to the root zone, compost or seed. When applied directly to seeds, the bacteria colonize the developing root system, competing with disease organisms that attack root systems Biosubtilin/Rog Rakshak inhibits plant pathogen spore germination, disrupts germ tube growth, and interferes with the attachment of the pathogen to the plant. It is also reported to induce systemic acquired resistance (SAR) against bacterial pathogens.",
    directionForUse: {
      seed_treatment:
        " Mix 5-10 ml. or gm. of Biosubtilin/Rog Rakshak in sufficient quantity of water for 1.0 kg. of seeds. Shade dry the seeds before sowing.",
      seedling_dipping:
        "Mix 50-100 ml. or gm. of Biosubtilin/Rog Rakshak in 10-20 ltr. of water and dip the seedling roots for 30 minutes before transplanting.",
      soil_application:
        "Mix 750-1000 ml. or 2-2.5 Kg. Biosubtilin/Rog Rakshak in 30-40 Kg of Farm Yard Manure (FYM). In absence of FYM, soil of the field can be used. And broadcast over 1.0 acre of field at the time of last ploughing or after 1st irrigation Instanding crops, give light irrigation after its application.",
      foliar_treatment:
        "Mix 5-10 ml. or gm. of Biosubtilin/Rog Rakshak per litre of water and give foliar spray using high volume knapsack sprayer. Give 2-3 sprays at 7-10 days interval. Do not use Antibiotic and Copper Fungicide at least 15 days before and after its application.",
    },
    packing: {
      AS: "250 ml, 500 ml, and 1.0 ltr. Bottles further packed in 10 ltrs. Cartons.",
      WP: "250 gm. 500 gm. and 1.0 kg. boxes further packed in 10 kg. Cartons.",
    },
    shelfLife:
      " One year, when stored in well ventilated rooms in original package at cool and dry place away from direct sunlight and heat.",
    ecoSafety:
      "Extreamely safe to mammals, human beings, animals, non target organisms, pollinators, fishes, birds etc. Classified as Class-IV, low hazardous (green label) pesticide. No phytotoxicity and exempted from residue analysis It can be used along with Biofertilizers",
    image: "/images/products/Agriculture/products/Biofungicides/p4.jpg",
    banner: "/images/products/Agriculture/banners/biofungicides/b4.jpg",
  },

  {
    id: "biofungisides-005",
    name: "ARMOUR",
    category: "Agriculture",
    subCategory: "biofungicides",
    product: "Containing strain of Ampelomyces quisqualis",
    tradeName: "Armour",
    activeIngredient:
      "Mycelial fragments and spores of Ampelomyces quisqualis. Spore count: 1 X 108/ ml. min. or 1 X 108/gm. min.",
    formulation: " AS (Aqueous Suspension) and WP (Wettable Powder).",
    spectrum:
      "The fungus Ampelomyces quisqualis is a naturally occurring hyperparasite of powdery mildews. It infects and forms pycnidia (fruiting bodies) within powdery mildew hyphae, conidiophores (specialized spore-producing hyphae), and cleistothecia (the closed fruiting bodies of powdery mildews). This parasitism reduces growth and kill the mildew colony. The mycoparasite is specific to powdery mildews (Erysiphales), but has an extremely broad host range within this diverse group of important plant pathogens. It has been recorded on more than 64 species in the Genera Brasilomyces, Erysiphe, Leveillula, Microsphaera, Phyllactinia, Podosphaera, Sphaerotheca, and Uncinula, as well as the anamorphic genera Oï dium and Oï diopsis. These fungal pathogens are causing many diseases in Vegetable like-Cucurbits; Peas; Beans; Tomato; Cumin; Chilies; Coriander, Fruits like- Grapes; Apple; Mango; Chinese apple (ber); Peas; Strawberry, Pulses, Medicinal and Aromatic crops and Roses.",
    modeOfAction:
      "After application, gaining moisture- conidia are exuded from the ripe pycnidia and are dispersed by rain-splash to mildew colonies. Free water is required for infection, and infection is favored by warm temperatures (20-30° C). Under favorable conditions, infection can occur in less than 24 hours. The mycoparasite directly penetrates the walls of hyphae, conidiophores, and immature cleistothecia, but may be unable to infect mature cleistothecia. For approximately 7-10 days, the mycoparasite spreads within the hyphae of the HOST colony without killing it. Thereafter, the process of pycnidial formation begins, and is then completed within 2-4 days. Infected cells generally die soon after pycnidial formation begins. Several generations may occur during a single growing season",
    directionForUse: {
      foliar_treatment:
        "Mix 1.0-1.5kg or 0.75-1.5 litres of Armour in 150-250 litres in water to be sprayed in 1 acre of cropped area using high volume knap sack or any conventional sprayer. Give 2-3 spray at 7-10 days intervals depending upon disease intensity.",
    },
    ecoSafety:
      "The product is non toxic to Crop plants, human beings, animals, birds, fishes and all other non target organisms.No phytotoxicity and exempted from residue analysis.",
    shelfLife:
      " The shelf life of product is one yearwhen stored in cool and dry place away from direct sunlight and heat.",
    packing: {
      AS: "100 ml, 250 ml , 500 ml and 1 ltr. further packed in 10 ltrs. carton.",
      WP: "100 gm, 250 gm , 500 gm and 1 kg. further packed in 10 kg. cartons.",
    },
    furtherinformations:
      "Shake well before use. Keep bottles in a cool and dry place away from direct sunlight. Once the bottle opened, use entire content. Should not be mixed with antifungal agents or chemical fertilizers.",
    image: "/images/products/Agriculture/products/Biofungicides/p5.jpg",
    banner: "/images/products/Agriculture/banners/biofungicides/b5.jpg",
  },

  {
    id: "bionematicides-001",
    name: "BIONEMAT/NEMATOR",
    product: "Paecilomyces lilacinus",
    category: "Agriculture",
    subCategory: "bionematicides",
    tradeName: "Bionemat and Nemator.",
    spectrum:
      "Highly active on Plant parasitic root nematodes, including root knot nematodes (Meloidogyne spp.) and cyst nematodes (Geterodera spp. and Globoderaspp.)reduces crop loss in Cotton, Wheat, Rice, Cereals, Pulses, Vegetables, Oilseeds, Pomegranate, Fruit, Citrus and Floriculture.",
    modeOfAction:
      "Bionemat/Nemator fungal hyphae penetrate eggshells and body of Plant parasitic root nematodes with enzymes and pressure following the formation of a simple appressorium and through natural opening. The entire contents of the egg and body are then used as a food resource by the fungus, completely destroying the embryo/larva and body organs in the process. The fungus can infect eggs containing embryos or larvae and adult nematodes.",
    formulation: "WP (Wettable Powder) and AS (Aqueous Suspension)",
    directionForUse:
      "Mix 2.0 - 4.0 kg. or 2.0 - 3.0 ltrs. of Bionemat/Nemator in 30 - 40 kg of Farm Yard Manure (FYM). In absence of FYM soil of field can be used. And broadcast over 1 acre of field at the time of last ploughing or sowing. In standing crop, broadcast this mixture and give light irrigation.",
    ecoSafety:
      "Extreamely safe to mammals, human beings, animals, non target organisms, pollinators, fishes, birds etc. low hazardous (green label) pesticide. No phytotoxicity and exempted from residue analysis. It can be used along with Biofertilizers.",
    shelfLife:
      "One year, if stored in well ventilated rooms in original package at cool and dry place away from direct sunlight and heat.",
    activeIngredient:
      " Mycelial fragments and Spores of Paecilomyces lilacinus.",
    packing: {
      AS: "100ml. 250ml. 500ml. 1.0 ltr. bottle further packed in 10 ltrs. Cartons.",
      WP: "100gm. 250gm. 500gm. 1.0 kg. pack further packed in 10 kg. Cartons.",
    },
    image: "/images/products/Agriculture/products/Bionematicides/p1.webp",
    banner: "/images/products/Agriculture/banners/bionematicides/b1.jpg",
  },
  {
    id: "biomaticides-002",
    name: "NEMATO-CURE",
    category: "Agriculture",
    subCategory: "bionematicides",
    product: "Bacillus spp",
    tradeName: "Nemato-Cure.",
    activeIngredient: "Dormant cell mass of Bacillus spp.",
    formulation: "AS (Aqueous Suspension) and WP (Wettable Powder).",
    spectrum:
      "Nemato – Cure is highly active on soil living parasitic nematodes, Cyst, Lance, Lesion ring (free-living), Root-knot, Sheath, Spiral, Sting, or Stunt belonging to Meloidogyne spp., Heterodera spp., Helicotylenchus spp., Hoplolaimus spp. reducing crop loss in Potato, Flowers, Banana, Tomato, Pepper, Wheat, Vegetables, Cereals, Millets, Pulses, Oilseeds, Fiber Crops, Sugar Crops, Forage Crops, Plantation Crops, Fruits, Spices, Medicinal Crops, Aromatic Crops, Orchards And Ornamentals. Turf, residential and commercial lawns etc.",
    modeOfAction:
      "Nemato – Cure bacterial cells causes obligate parasitism, reduction in penetration, growth inhibition due to competition for nutrients and antibiosis associated with bioactive metabolites. Significant rates of paralysis and mortality were detected, also significantly reduces hatching of Meloidogyne incognita. Bacterial cell suspensions added to soil reduces survival of R. similis.",
    directionForUse: {
      soil_application:
        "Mix 750-1000 ml or 4 Kg. per acre of product with 30-40 kg’s of Farm Yard Manure (FYM). In absence of FYM, soil of field can be used. After thoroughly blending, broadcast in 1 acre of land before last ploughing or after first irrigation. In standing crop irrigate the field after its application.",
    },
    ecoSafety:
      "The product is non-toxic to crop plants, human beings, animals, birds, fishes and all other non-target organisms. No phytotoxicity and exempted from Residue analysis.",
    shelfLife:
      "The shelf life of product is one year when stored in cool and dry place away from direct sunlight and heat.",
    packing: {
      AS: "100ml, 250ml, 500ml and 1.0 ltr in bottles further packed in 10 ltrs. cartons.",
      WP: "250 gm, 500 gm and 1.0 kg. in boxes further packed in 10 kg. Cartons.",
    },
    image: "/images/products/Agriculture/products/Bionematicides/p2.webp",
    banner: "/images/products/Agriculture/banners/bionematicides/b2.jpg",
  },
  {
    id: "biostimulants-001",
    name: "BIOBOOST GRANULES",
    category: "Agriculture",
    subCategory: "biostimulants",
    product: "hydrolyzed proteins, amino acids and trace minerals",
    tradeName: "Bioboost Granules.",

    activeIngredient:
      "Natural hydrolyzed proteins of vegetable origin and trace minerals-Mg, Mn, Cu, Fe, Zn, Ca, B, N.",
    formulation: "GR (Bentonite Granules).",
    spectrum:
      "Bioboost Granules is chelated amino acid with essential trace minerals like Mg, Mn, Cu, Fe, Zn, Ca, B, N. It is an eco-friendly organic nutrient granular formultaion containing natural hydrolyzed proteins of vegetable origin which provides excellent plant nutritions and growth promotion for Cotton, Oil seeds, Cereals, Pulses, Vegetables, Fruit and Plantation Crops.",
    modeOfAction:
      "Bioboost granules provide the plants balanced nutrition and growth enhancing activity. It improves crop yield and quality through balanced nutrition, availability of amino acids, enzymes, micronutrients, optimum metabolite formation, resulting in better germination of seeds and setts, strong and extensive root system, enhanced tolerance to stresses and diseases, better retention of flowers, increased yields and enhancement of the size, colour, flavour of the produce",
    directionForUse:
      " Broadcast 5 kg. Granules in 1 acre field and mix through ploughing (Soil Incorporation)",
    ecoSafety:
      "It is biodegradable and extremely safe to mammals, human beings, non target organisms, pollinators, fishes, birds, plants etc.",
    shelfLife:
      " Bioboost granules provides best results if used within 5 years from the date of manufacture.",
    packing: "5 kg Bags",
    image: "/images/products/Agriculture/products/Biostimulants/p1.webp",
    banner: "/images/products/Agriculture/banners/biostimulants/b1.jpg",
    screenshots: {
      bottom: "/images/ss/agriculture-biosimulate-1.png",
    },
  },
  {
    id: "",
    name: "BIOBOOST",
    category: "Agriculture",
    subCategory: "biostimulants",
    product: "hydrolyzed proteins, amino acids and trace minerals",
    tradeName: "Bioboost",
    activeIngredient:
      " Natural hydrolyzed proteins of vegetable origin and trace minerals-Mg, Mn, Cu, Fe, Zn, Ca, B, N.",
    formulation: "AS (Aqueous Suspension).",
    spectrum:
      "Bioboost liquid is chelated amino acid with essential trace minerals like Mg, Mn, Cu, Fe, Zn, Ca, B, N. It is an eco-friendly organic nutrient liquid formultaion containing natural hydrolyzed proteins of vegetable origin which provides excellent plant nutritions and growth promotion for Cotton, Oil seeds, Cereals, Pulses, Vegetables, Fruit and Plantation Crops.",
    modeOfAction:
      "Bioboost acts on the plants through balanced nutrition and it’s growth enhancing activity. It improves crop yields and quality through balanced nutrition, availability of amino acids, enzymes, micronutrients, optimum metabolite formation, resulting in better germination of seeds and setts, strong and extensive root system, enhanced tollerance to stress and disease, better retention of flowers, increased yield in enhancement of size, color, flavour of the produce.",
    directionForUse:
      " Mix 250 ml. Bioboost in 100-200 ltrs. of water and sprayed on one acre croped area.",
    ecoSafety:
      "Bioboost is biodegradable, extreamely safe to mammals, human beings, non target organisms, pollinators, fishes, birds and plants.",
    shelfLife:
      "Bioboost provides best results if used within 5 years from the date of manufacture, when stored in well ventilated rooms in original package even at temperatures up to 45° C.",
    packing:
      "250 ml. 500 ml. and 1.0 ltr. in Bottles, are further packed in 10 ltrs. Cartons.",
    image: "/images/products/Agriculture/products/Biostimulants/p2.webp",
    banner: "/images/products/Agriculture/banners/biostimulants/b2.jpg",
    screenshots: {
      bottom: "/images/ss/biosimulate-prod2.jpeg",
    },
  },
  {
    id: "botanical_pesticides-001",
    name: "NEEMARIN EC FORMULATIONS",
    category: "Agriculture",
    subCategory: "Botanical Pesticides",
    product: "Azadirachtin from (Azadirachta indica)",
    tradeName: "Neemarin.",
    activeIngredient: "Azadirachtin alongwith triterpenoids and limenoids.",
    formulation:
      "EC (Emulsifiable Concentrate) formulation - 300 PPM, 1500 PPM, 3000 PPM, 10000 PPM, 30000 PPM and 50000 PPM",
    spectrum:
      "Excellent broad spectrum control of Aphids, Jassids, White Files, Beetles, Caterpillars, Cutworms, Shoot and Fruit Borers including Bollworms etc. on Cotton, Paddy, Vegetables, Pulses, Oil seed Crops, Fruit trees, Sugarcane, Millets, and Tea and Plantations.",
    modeOfAction:
      "Neemarin acts on the insects through multiple actions as Repellent, Antifeedant, Insect Growth Regulator and Oviposition deterrent, Molting inhibitor.",
    directionForUse:
      "Requisite amount of Neemarin is diluted in water depending on percent EC Formulation and sprayed in 1 Ha. at the time of hatching of eggs and appearance of young stages of insect pests. Repeat the spray after 7 - 10 days intervals depending on pest populations.",
    ecoSafety:
      "Extremely safe to mammals, human beings, non target organisms, pollinators, beneficial insects, fishes and birds, etc. Classified as Class – IV low hazardous (green label) pesticide.",
    shelfLife:
      "One year, if stored in cool, dry and well ventilated rooms in original packings away from heat and open flame.",
    packing:
      "EC : 250 ml, 500 ml, 1.0 ltr. and 5.0 ltrs. in HDPE bottles further packed in 10 ltrs. Cartons.",
    image: "/images/products/Agriculture/products/Botanical_Pesticides/p1.webp",
    banner: "/images/products/Agriculture/banners/botanical/b1.jpg",
    screenshots: {
      bottom: "/images/ss/botanical.webp",
    },
  },

  {
    id: "btanical_pesticides-002",
    name: "SOIL-BOOSTER",
    category: "Agriculture",
    subCategory: "Botanical Pesticides",
    product: "Karanjan",
    tradeName: "Soil booster",
    activeIngredient: "Biomass of Pongamia glabra fruits.",
    formulation: "Cake/Tablets",
    spectrum:
      "A natural plant extract from Pongamia glabra also known as Millettia pinnata that contains plant growth stimulating factors, primarily auxins, improving the soil texture, promoting increased growth in vegetation, fruits yield.",
    modeOfAction:
      "The extract is rich in organic matter, which on reaching soil conditions the soil. Increase the natural nutrient balance and fertility of soil. It immunizes the plant system by secreting the secondary metabolites likes karanjin and pongomal, which help in controlling soil insects, fungal pathogens, termites and nematodes. it is not harmful to soil beneficial microbes.Soil-booster, acts as good nitrification inhibitor due to its bitter limonoid constituents of Karanj oil, which makes the soil more fertile by blocking soil bacteria from converting nitrogenous compound into useless nitrogen gas in the soil and thus nitrogen (urea) loss is minimized. This can be used as soil amendment. It improves soil texture, pH, Oxygen level, nutrient status and soil structure. It supplements humus and increases the water holding capacity. It plays vital role in water retention, reclaiming waste land, saline and alkaline, acidic soils and desert soils.",
    directionForUse: {
      soil_application:
        "Mix 1.0 - 2.0 kg per acre of Soil booster with 30-40 kg of farmyard manure (FYM). In absence of FYM, soil of field can be used. Broadcast this mixture in 1 acre of land before last ploughing /field preparation. We can broadcast this mixture in standing crop and irrigate the field after its application.",
      specific_recommend:
        "1. All Cereals : 1.0-2.0 kg/acre 2. Cotton : 1.0-2.0 kg/acre 3. Oil Seeds : 1.0-2.0 kg/acre 4. Vegetables : 1.0-2.0 kg/acre 5. Tuber crops : 1.5-2.5 kg/acre 6. Green house vegetables : 1.5-2.5 kg/acre 7. Fruits (Grapes, Pomegranate, Citrus etc.) : 1.5-2.5 kg/acre 8. Ornamentals : 1.5-2.5 kg/acre 9. Plantation crops (Coffee/Tea/Banana) : 1.5-2.5 kg/acre",
    },
    ecoSafety:
      "The product is non toxic to Crop plants, human beings, animals, birds, fishes and all other non target organisms. No phytotoxicity, exempted from Residue analysis.",
    shelfLife:
      "The shelf life of product is one year when stored in cool and dry place away from direct sunlight and heat.",
    packing: {
      Cake: "500 gm, 1.0 kg and 5 kg bags further packed in drums.",
    },
    image: "/images/products/Agriculture/products/Botanical_Pesticides/p2.webp",
    banner: "/images/products/Agriculture/banners/botanical/b2.jpg",
  },

  {
    id: "biodecomposer-001",
    name: "BIODECOMPOSER (BACTERIAL AND FUNGAL BASE)",
    product: "decomposing Bacteria and Fungus",
    category: "Agriculture",
    subCategory: "BioDecomposer",
    tradeName: "BioDecomposer",
    activeIngredient:
      "Dormant form of decomposing Bacteria and cell mass of Fungal spore, accelerate the process of decomposition under aerobic and anaerobic condition.",
    formulation: "AS (Aqueous Suspension).",
    spectrum:
      "These Bacteria and Fungus are capable of decomposing organic raw material , crop stubbles, animal waste etc. and produce carbon dioxide ( CO2), ammonia, water, heat and humus. These bacteria and fungus accelerates the process of decomposition and get the organic raw material, crop stubbles decomposed in 40- 60 days depending upon type of organic raw material, which normally takes 150-200 days. It breaks down proteins, fats and complex carbohydrates such as cellulose, hemi cellulose and lignin.",
    modeOfAction:
      "These dormant form of Bacterial spore and Fungal spore when mixed with organic raw material gets activated and multiply many folds. During their growth, they utilize carbon source and secrete certain enzymes which break down the organic raw material into simpler forms like carbon dioxide ( CO2), ammonia, organic acids, minerals and humus.",
    directionForUse:
      " Mix 500 ml BioDecomposer (Bacterial base) and 500 ml BioDecomposer ( Fungal base ) in sufficient quantity of water. Spray this solution on heap of organic raw material, crop stubbles and animal waste of one metric ton. After 8-10 days turn the organic raw material of the heap and again spray this solution on the heap and mix it thoroughly.Keep this heap undisturbed for 45-60 days. Now the compost is ready for use in the field. We can decompose the crop stubbles in the field with a spray of 1.0-1.5 litres of BioDecomposers, both fungal and bacterial per acre.",
    ecoSafety:
      "The product is non-toxic to human beings, animals, plants, birds, fishes and non-target organisms. No residue problems.",
    shelfLife:
      "The shelf life of the product is two years when stored in cool, dry and well ventilated place away from direct sunlight and heat.",
    packing: {
      AS: "500 ml and 1.0 Litre bottles further packed in 10 litres Cartons.",
    },

    furtherinformations:
      "Shake well before use. Keep bottles in a cool and dry place, away from direct heat and sunlight. Once the bottle opened, use the entire content. Do not mix with any antibiotics and fungicides. Wear protective gear like mask and gloves before using.",

    image: "/images/products/Agriculture/products/BioDecomposer/p1.webp",
    banner: "/images/products/Agriculture/banners/biodecomposer/b1.jpg",
  },

  {
    id: "bioacaricide-001",
    name: "NO-MITE",
    category: "Agriculture",
    subCategory: "Bioacaricides",
    product: "Hirsutella thompsonii",
    activeIngredient:
      " Mycelial fragments and spores of Hirsutella thompsonii.",
    formulation: "AS (Aqueous Suspension) and WP (Wettable Powder).",
    spectrum:
      "No-Mite is a biological acaricide for control of various mites in cereals, vegetable ,fruit and Plantation crops. No-MIte is effective against carmine spider mite- T. cinnabarinus, G.melonella, Tetranychus urticae, Two spotted spider mite –Eriophyidae spp., citrus rust mite- Phyllocoptruta oleivora, Eriophyid mites, Apple maggot flies, Rhagoletis pomonella etc. which are pest of fruits trees- Coconut; Citrus; Pomegranate; Litchi; Apple, Vegetables like- Brinjal, Okra,Tomato, Cucurbits, Chilli, Cotton, Tea and Roses.",
    modeOfAction:
      "The fungal pathogen Hirsutella thompsonii produces a single polypeptide chain, insecticidal protein name Hirstutellin A. which possess ribosomal inhibiting activity and appears to possess specific control of invertebrate cells.",
    directionForUse:
      "Mix 1.0 – 1.5 Kg or 0.75 -1.5 litres of No-Mite in 150 – 250 litres of water to be sprayed in one acre of cropped area usuing high volume knap sack or any conventional sprayer. Give 2 -3 spray at 7 – 10 days interval depending upon mite infestation preferably in the evening on young nymphal stage or sighting of egg laying.",
    ecoSafety:
      "The product is non toxic to Crop plants,human beings, animals, birds, fishes and all other non target organisms.No phytotoxicity and exempted from residue analysis.",
    shelfLife:
      "The shelf life of product is one year when stored in cool and dry place away from direct sunlight and heat.",
    packing: {
      AS: "100 ml, 250 ml , 500 ml and 1 Ltr. further packed in 10 Ltrs. carton.",
      WP: "100 gm, 250 gm , 500 gm and 1 Kg. further packed in 10 Kg. cartons.",
    },
    furtherinformations:
      "Shake well before use. Keep bottles in a cool and dry place away from direct sunlight. Once the bottle opened, use entire content. Should not be mixed with antifungal agents or chemical fertilizers.",
    image: "/images/products/Agriculture/products/Bioacaricide/p1.webp",
    banner: "/images/products/Agriculture/banners/bioacaricide/b1.jpg",
  },
  {
    id: "pheromonetraps-001",
    name: "BIOLURES",
    category: "Agriculture",
    subCategory: "Pheromone LURES AND Traps",
    product: "Pheromone Lures for various species of insects",
    tradeName: "Biolures.",
    activeIngredient: "Insect Pheromones",
    spectrum: [
      "Biolures are species specific as detailed below",
      "BIOLURE-HA : Helicoverpa armigera",
      "BIOLURE-SL : Spodoptera litura",
      "BIOLURE-EV : Earias vittella",
      "BIOLURE-EI : Earias insulana",
      "BIOLURE-PG : Pectinophora gossypiella",
      "BIOLURE-SI : Scirpophaga incertulas",
      "BIOLURE-PX : Plutella xylostella",
      "BIOLURE-LO : Leucinodes orbonalis",
      "BIOLURE-DA : Dacus aorta (fruit fly)",
    ],
    modeOfAction: "Act as an attractant for target specific male moths.",
    packing:
      "Packed individually in polythene lines aluminum pouches containing one lure each, further packed in cartons of 20 each.",
    shelfLife:
      "Effective for 3-4 weeks under field conditions because of presence of antioxidants. Biolures packed in original pouches can be stored in a cool dry place preferably in a refrigerator for one year without loss of efficiency.",
    ecoSafety: "Safe for human beings, animals and beneficial insects.",

    directionForUse:
      "One lure is to be used per trap for monitoring of the specific pest. Biolures are replaced in the traps after every 3 weeks and 3-4 lures per pheromone trap are required in a crop season starting from 30-40 days of crop age.",
    image:
      "/images/products/Agriculture/products/pheromone_Lures&traps/p1.webp",
    banner: "/images/products/Agriculture/banners/pheromone/b1.jpg",
  },
  {
    id: "pheromonetraps-002",
    name: "BIOTRAP",
    category: "Agriculture",
    subCategory: "Pheromone LURES AND Traps",
    product:
      " Biotrap (Pheromone Trap) used for trapping the moth of pests of various crops are made up of HDPE material (resistant to sunlight, rain and wind), it is orange or mustard colour which last for a period of one year",
    biotrapparts: [
      "Canopy with provision of 3 slots on the lower side for attachment of trap funnel and one central slot for attachment of lure. The canopy protects the lure from rain and direct sunlight.",
      "The trap funnel with bottom hole, “T” shaped handle for fixing to the support (strong enough to take care of dislodging due to strong winds) and 3 provisions (arms) for fixing in to the 3 slots provided on the underside of the canopy.",
      "The collection device made up of thick non-collapsible polyethylene sleeve of 750 mm length, strong enough to withstand prevalent rain, temperature and wind. It is provided with rubber bands for fixing to the trap funnel and for closing the sleeve, so that the dead trapped moths could be removed from time to time.Polyethylene sleeve is to be fixed to the lower portion of the trap funnel and the moths get trapped in this and die. By removing the rubber band from the bottom of the sleeve, the trapped/dead moths should be removed to make space for new moths.Biotraps are to be installed in the fields at the rate of 5-7 traps per hectare for monitoring and 15-20 traps per hectare for mass trapping. The distance between the traps fitted with lures specific for a particular moth species may be around 30 meter. These traps should be positioned 6 to 9 inches above the crop canopy level by tying on the stick with the T shaped handle provided on the funnel of the trap.Best results are obtained only, if Biotraps are used along with Biolures and Biolures are replaced at 20-25 days interval in field.",
    ],

    image:
      "/images/products/Agriculture/products/pheromone_Lures&traps/p2.webp",
    banner: "/images/products/Agriculture/banners/pheromone/b2.jpg",
  },
];
