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

const cheesePrinter = () => {
    let domString = '';
    for (let i = 0; i < cheese.length; i++) {
        domString += `
    <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id=${cheese[i].id}>
        <label class="form-check-label" for=${cheese[i].id}>${cheese[i].cheeseName}</label>
    </div>`;
  }
    utilities.printToDom('cheese-counter', domString);
};

export default { cheesePrinter };