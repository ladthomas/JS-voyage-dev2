function generatePackingList() {
    // Récupérer les valeurs du formulaire
    const nights = getFieldValue('nights');
    const climate = getFieldValue('climate');

    // Valider l'entrée
    if (!isValidInput(nights)) {
        alert("Veuillez entrer un nombre de nuits valide.");
        return;
    }

    // Générer la liste de bagages
    const packingList = generateListItems(nights, climate);

    // Ajouter les éléments générés à la liste visuelle
    addToPackingList(packingList);
}

// Fonction pour réinitialiser le formulaire aux valeurs par défaut
function resetForm() {
   
    setFieldValue('nights', 3);
    setFieldValue('climate', 'modere');

   
    clearPackingList();
}

// Fonction pour obtenir la valeur d'un champ de formulaire
function getFieldValue(fieldName) {
    return parseInt(document.getElementById(fieldName).value);
}

// Fonction pour définir la valeur d'un champ de formulaire
function setFieldValue(fieldName, value) {
    document.getElementById(fieldName).value = value;
}

// Fonction pour vérifier si la valeur saisie est valide (un nombre positif)
function isValidInput(value) {
    return !isNaN(value) && value > 0;
}

// Fonction pour générer les éléments de la liste de bagages en fonction des nuits et du climat
function generateListItems(nights, climate) {
    const items = [];

    // Ajouter les éléments essentiels à la liste de bagages
    addItem(items, `Un sac à dos/valise`);
    addItem(items, `Nombre de paires de chaussettes : ${Math.min(nights, 10)}`);
    addItem(items, `Nombre de sous-vêtements : ${Math.min(nights, 10)}`);
    addItem(items, `Nombre de t-shirts : ${Math.min(nights, 10)}`);

    // Ajouter des éléments supplémentaires en fonction du nombre de nuits
    if (nights < 4) {
        addItem(items, `Nombre de pulls/sweats : 1`);
        addItem(items, `Nombre de pantalons : 1`);
    } else if (nights >= 4 && nights <= 6) {
        addItem(items, `Nombre de pulls/sweats : 2`);
        addItem(items, `Nombre de pantalons : 2`);
    } else {
        addItem(items, `Nombre de pulls/sweats : 3`);
        addItem(items, `Nombre de pantalons : 3`);
    }

    // Ajouter une veste à la liste de bagages
    addItem(items, `Une veste`);

    // Ajouter des chaussures en fonction du nombre de nuits
    if (nights > 6) {
        addItem(items, `Nombre de paires de chaussures : 1`);
    }

    // Modifier la liste en fonction du climat
    if (climate === 'chaud') {
        
        removeItem(items, 'Une veste');
        addItem(items, `Tongs/claquettes`);
    } else if (climate === 'froid') {
       
        addItem(items, `Gants et bonnets`);
    }

    return items;
}


function addItem(list, item) {
    list.push({ label: item, done: false });
}

// Fonction pour supprimer un élément de la liste de bagages
function removeItem(list, item) {
    const index = list.findIndex(i => i.label === item);
    if (index !== -1) {
        list.splice(index, 1);
    }
}


function addToPackingList(packingList) {
    const packingListResult = $('#packingList');
    packingList.forEach(item => {
        
        const listItem = $('<li></li>');
        const checkbox = $('<input type="checkbox">');
        listItem.append(checkbox);
        listItem.append(`<span>${item.label}</span>`);

        
        packingListResult.append(listItem);

        
        checkbox.change(function () {
            item.done = checkbox.prop('checked');
        });
    });
}


function clearPackingList() {
    $('#packingList').empty();
}

