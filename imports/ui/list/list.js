import { Template } from 'meteor/templating';
import { Stores } from '../../api/shoppingList';

import './list.html'
import './list.css';


Template.body.helpers({
    // test stores
    // tasks: [
    //     { text: 'This is task 1' },
    //     { text: 'This is task 2' },
    //     { text: 'This is task 3' },
    //   ],

    storeList() {
        return Stores.find({});
    }
});

Template.body.events({
    

    'submit .new-stores'(event) { 
        event.preventDefault();

        // add new store to the database
        const target = event.target;
        const store = target.store.value;

        // insert it to database
        Stores.insert({
            store
        });
        target.store.value = '';
    },
    'click .delete'(event) {
        Stores.remove(this._id);
    }

});
