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

function findById(id) {
	return db('schemes')
		.where({ id })
		.first();
}

function findSteps(id) {
	// return db('schemes')
	// .where({ id })
	// .first()
	// .leftJoin('steps', 'schemes.id', 'steps.schemesid');
	return (
		db('steps')
			.where({ scheme_id: id })
			.select('*')
	);
}

function add() {}

function addStep() {}

function update() {}

function remove() {}
