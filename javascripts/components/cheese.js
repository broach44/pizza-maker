import utilities from '../helpers/utilities.js';

const cheese = [
    {
        id: 'cheese1',
        cheeseName: 'Mozzarella',
        cheesePrice: 50
    },
    {
        id: 'cheese2',
        cheeseName: 'Asiago',
        cheesePrice: 75
    },
    {
        id: 'cheese3',
        cheeseName: 'Cheddar',
        cheesePrice: 50
    },
    {
        id: 'cheese4',
        cheeseName: 'Feta',
        cheesePrice: 500
    },
    {
        id: 'cheese5',
        cheeseName: 'Gouda',
        cheesePrice: 90
    }
];

const getSelectedCheeses = () => {
    const selectedCheeses = [];
    //get all cheese checkboxes
    const cheeseCheckboxes = document.getElementsByClassName('cheese');
    //keep the checked ones in a new array
    for (let i=0; i < cheeseCheckboxes.length; i++) {
        for (let j=0; j < cheese.length; j++) {
            if (cheeseCheckboxes[i].checked && cheeseCheckboxes[i].id === cheese[j].id) {
                selectedCheeses.push(cheese[j]);
            }
        }
    }
    //return the new array
    return selectedCheeses;
};

const cheesePrinter = () => {
    let domString = '';
    for (let i = 0; i < cheese.length; i++) {
        domString += `
    <div class="form-group form-check">
        <input type="checkbox" class="form-check-input cheese" id=${cheese[i].id}>
        <label class="form-check-label" for=${cheese[i].id}>${cheese[i].cheeseName}</label>
    </div>`;
  }
    utilities.printToDom('cheese-counter', domString);
};

export default { cheesePrinter, getSelectedCheeses };