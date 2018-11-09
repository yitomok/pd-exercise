require('@babel/polyfill');

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

const pool = require('../build/helpers/mysql.pool').pool;

const server = require('../build/app').default;

chai.use(chaiHttp);

describe('Organisations', () => {
    after((done) => {
        pool.end(done);
    });

    describe('Add Organisation', () => {
        it('should POST an organisation', (done) => {
            chai.request(server)
            .post('/api/v1/organisations')
            .send({
                org_name: 'Fake Org',
                daughters: [
                    {
                        org_name: 'Fake Daughter Org 1'
                    },
                    {
                        org_name: 'Fake Daughter Org 2'
                    }
                ]
            })
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
        });
    });

    describe('Get Organisation', () => {
        it('should GET all parents, sisters and daughters of an organisation', (done) => {
            chai.request(server)
            .get('/api/v1/organisations')
            .query({ org_name: 'Fake Org' })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('array');
                done();
            });
        });
    });
})
