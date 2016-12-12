'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const nock = require('nock');

const interceptor = require('./nock/interceptor');
const gist = require('../build/gist');

// Test variables
const token = '12345';
const gistId = '123456789';
const gistContent = { hey: true, hello: 'world' };

chai.use(chaiAsPromised);
chai.should();

describe('Modules', () => {
  describe('Gists', () => {
    before(() => {
      interceptor.nocks; // eslint-disable-line
    });

    after(() => {
      nock.cleanAll();
      nock.restore();
    });

    it('should create a new gist', () => {
      let createGist = gist.create(token, gistContent);
      return createGist.should.be.fulfilled.then(res => { // eslint-disable-line
        res.files.should.be.an.instanceOf(Object);
      });
    });

    it('should get a given gist', () => {
      let getGist = gist.read(token, gistId);
      return getGist.should.be.fulfilled.then(res => { // eslint-disable-line
        res.files.should.be.an.instanceOf(Object);
      });
    });

    it('should update a given gist', () => {
      let updateGist = gist.update(token, gistId, gistContent);
      return updateGist.should.be.fulfilled.then(res => { // eslint-disable-line
        res.files.should.be.an.instanceOf(Object);
      });
    });
  });
});
