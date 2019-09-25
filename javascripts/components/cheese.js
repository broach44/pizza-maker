import utilities from '../helpers/utilities.js';

const cheese = [
    {
        cheeseName: 'Mozzarella',
        cheesePrice: 0.50
    },
    {
        cheeseName: 'Asiago',
        cheesePrice: 0.75
    },
    {
        cheeseName: 'Cheddar',
        cheesePrice: 0.50
    },
    {
        cheeseName: 'Feta',
        cheesePrice: 0.75
    },
    {
        cheeseName: 'Gouda',
        cheesePrice: 0.75
    }
];

const cheesePrinter = () => {
    const domString = `<h2>Cheese</h2>`;
    utilities.printToDom('cheese-counter', domString);
};

export default { cheesePrinter };