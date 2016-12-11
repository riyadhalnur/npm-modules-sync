'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const interceptor = require('./nock/interceptor');
const gist = require('../build/gist');
const token = '12345';

chai.use(chaiAsPromised);
chai.should();

describe('Modules', () => {
  describe('Gist', () => {
    beforeEach(() => {
      interceptor.get; // eslint-disable-line
    });

    it('should create a new gist', () => {
      let createGist = gist.create(token, { hey: true, hello: 'world' });
      return createGist.should.be.fulfilled.then(res => { // eslint-disable-line
        res.files.should.be.an.instanceOf(Object);
      });
    });
  });
});
