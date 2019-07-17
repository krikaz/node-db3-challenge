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
	return db
		.select('steps.id', 'step_number', 'instructions', 'scheme_name')
		.from('steps')
		.innerJoin('schemes', 'schemes.id', 'steps.scheme_id')
		.where({ scheme_id: id });
}

async function add(scheme) {
	const [id] = await db('schemes').insert(scheme);
	return findById(id);
}

function addStep() {}

async function update(changes, id) {
	await findById(id).update(changes);
	return findById(id);
}

function remove() {}
