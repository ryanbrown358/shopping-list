import { Mongo } from 'meteor/mongo';

export const ShoppingList = new Mongo.Collection('shoppingList');
export const Stores = new Mongo.Collection('store');