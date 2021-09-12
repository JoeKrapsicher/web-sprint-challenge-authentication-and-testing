const db = require('../../data/db-config')

module.exports = {
    find, findBy, findById, add
}

function find() {
    return db('users')
}

function findBy(filter) {
    return db('users').where(filter).orderBy('user_id', 'asc');
}

function findById(user_id) { 
    return db('users').where({ user_id }).first();
  }

function add(user) {
    const[id] = await db('users').insert(user, 'id')
    return findById(id)
}