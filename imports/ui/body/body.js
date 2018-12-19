import { Template } from 'meteor/templating';
import { ShoppingList } from '../../api/shoppingList.js';

import './body.html';
import '../list/list.js';
import './bodyCSS/body.css';


Template.body.helpers({
    // testing code before mongo set up
    // shoppingList: [
    //     {item: 'Milk',ammount: 20},
    //     {item: 'Eggs',ammount: 15},
    //     {item: 'Beer',ammount: 2}
    // ]

    // method to call/return items from database
    list() {
        return ShoppingList.find({});
    }
});

Template.body.events({ 
    'submit .new-item'(event) { 
        // prevent default form submit
        event.preventDefault();

        // get value from from 
        const target = event.target;
        const item = target.item.value;

        // insert to database
        ShoppingList.insert({
            item
        });

        target.item.value = '';
    },
    'click .delete'(event) { 
        ShoppingList.remove(this._id); 
    }
});