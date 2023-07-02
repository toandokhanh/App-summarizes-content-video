const mongoose = require('mongoose');
const Videos = require('../../app/models/Video');
const NoiseReducer = require('./seeder/NoiseReductionSeeder')
const mongoURL = process.env.MONGODB_URL;

/**
 * Seeders List
 * order is important
 * @type {Object}
 */
export const seedersList = {
    NoiseReducer
};
/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
export const connect = async () => await mongoose.connect(mongoURL, { useNewUrlParser: true });
/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
export const dropdb = async () => mongoose.connection.db.dropDatabase();
