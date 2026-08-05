









const ballerina = {
    commonName: "Spanish lavender",
    scientificName: "Lavandula stoechas",
    cultivar: "Ballerina"
};

const prettyPolly = {
    commonName: "Spanish lavender",
    scientificName: "Lavandula stoechas",
    cultivar: "Pretty Polly"
};

const willowVale = {
    commonName: "Spanish lavender",
    scientificName: "Lavandula stoechas",
    cultivar: "Willow Vale"
};

const hidcote = {
    commonName: "English lavender",
    scientificName: "Lavandula angustifolia",
    cultivar: "Hidcote"
};

const imperialGem = {
    commonName: "English lavender",
    scientificName: "Lavandula angustifolia",
    cultivar: "Imperial Gem"
};

const royalCrown = {
    commonName: "French lavender",
    scientificName: "Lavandula dentata",
    cultivar: "Royal Crown"
};

const catalog = new Map();
catalog.set(ballerina, { small: 20, medium: 15, large: 12 });
catalog.set(prettyPolly, { small: 31, medium: 14, large: 24 });
catalog.set(willowVale, { small: 3, medium: 5, large: 0 });
catalog.set(hidcote, { small: 33, medium: 13, large: 18 });
catalog.set(imperialGem, { small: 19, medium: 35, large: 28 });
catalog.set(royalCrown, { small: 40, medium: 22, large: 9 });

function sellPlants(plant, potSize, quantityToSell) {
    if (!catalog.has(plant)) {
        return "Item not found.";
    }

    const stock = catalog.get(plant);
    const currentStock = stock[potSize];

    if (quantityToSell > currentStock) {
        return `Not enough ${potSize} size pots for ${plant.scientificName} '${plant.cultivar}'. Only ${currentStock} left.`;
    }

    stock[potSize] -= quantityToSell;
    return "Catalog successfully updated.";
}

function removePlant(plant) {
    return catalog.delete(plant);
}

function displayCatalog() {
    let result = "";
    catalog.forEach((value, key) => {
        result += `${key.scientificName} '${key.cultivar}': ${value.small} S, ${value.medium} M, ${value.large} L\n`;
    });
    return result;
}

function displayPlantsSet() {
    const commonNames = Array.from(catalog.keys()).map(plant => plant.commonName);
    return new Set(commonNames);
}

const plantsSet = displayPlantsSet();
