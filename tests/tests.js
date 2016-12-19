'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const nock = require('nock');

const interceptor = require('./helpers/interceptor');
const fixtures = require('./helpers/fixtures');
const gist = require('../build/gist');

// Runner config
chai.use(chaiAsPromised);
chai.should();
require('sinon-as-promised');

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
      let createGist = gist.create(fixtures.token, fixtures.gistContent);
      return createGist.should.be.fulfilled.then(res => { // eslint-disable-line
        res.files.should.be.an.instanceOf(Object);
      });
    });

    it('should get a given gist', () => {
      let getGist = gist.read(fixtures.token, fixtures.gistId);
      return getGist.should.be.fulfilled.then(res => { // eslint-disable-line
        res.files.should.be.an.instanceOf(Object);
      });
    });

    it('should update a given gist', () => {
      let updateGist = gist.update(fixtures.token, fixtures.gistId, fixtures.gistContent);
      return updateGist.should.be.fulfilled.then(res => { // eslint-disable-line
        res.files.should.be.an.instanceOf(Object);
      });
    });
  });
});
