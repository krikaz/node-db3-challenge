const knex = require('knex');
const db = knex(require('../knexfile').development);

module.exports = {
	find,
	findById,
	findSteps,
	add,
	addStep,
	update,
	remove,
};

function find() {
  return db('schemes');
}

function findById() {
}

function findSteps() {
}

function add() {
}

function addStep() {
}

function update() {
}

function remove() {
}
