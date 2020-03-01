'use strict'
const db = require('./connections');
class Restaurant {
    constructor (id, name, stars, category, address) {
        this.id = id;
        this.name = name;
        this.stars = stars;
        this.category = category;
        this.address = address
    }
    static async getAll() {
        try {
            //console.log(`it's getting to this point`);
            const response = await db.any(`SELECT * FROM restaurant;`);
            return response;
        } catch(error) {
            return error;
        }
    }
}
module.exports = Restaurant;