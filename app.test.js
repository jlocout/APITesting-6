const request = require('supertest');
//const express = require('express');

jest.setTimeout(30000)

let req = request('https://jsonplaceholder.typicode.com/')

describe('https://jsonplaceholder.typicode.com/posts/1/comments Tests', function() {

    //get https://jsonplaceholder.typicode.com/posts/1/comments
    it('get responds with 200', function(done) {
        req
        .get('posts/1/comments')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
    //post https://jsonplaceholder.typicode.com/posts/1/comments
    it('post responds with 201', function(done) {
        req
          .post('posts/1/comments')
          .send({postId: 1, id: 6, name: 'added', email: 'a@d', body: 'adsfadsf'})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(201)
          .end(function(err, res) {
            if (err) return done(err);
            done();
          });
      });
  });

  describe('https://jsonplaceholder.typicode.com/albums/1/photos Tests', function() {

    //get https://jsonplaceholder.typicode.com/posts/1/comments
    it('get responds with 200', function(done) {
        req
        .get('albums/1/photos')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
    //post https://jsonplaceholder.typicode.com/posts/1/comments
    it('post responds with 201', function(done) {
        req
          .post('albums/1/photos')
          .send({albumId: 1, id: 51, title:'a title', url: 'http...', thumbnailUrl: 'http....'})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(201)
          .end(function(err, res) {
            if (err) return done(err);
            done();
          });
      });
  });
  describe('https://jsonplaceholder.typicode.com/users/1/albums Tests', function() {

    //get 
    it('get responds with 200', function(done) {
        req
        .get('users/1/albums')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
    //post 
    it('post responds with 201', function(done) {
        req
          .post('users/1/albums')
          .send({userId: 1, id: 11, title:'a title'})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(201)
          .end(function(err, res) {
            if (err) return done(err);
            done();
          });
      });
  });
  describe('https://https://jsonplaceholder.typicode.com/users/1/todos Tests', function() {

    //get 
    it('get responds with 200', function(done) {
        req
        .get('users/1/todos')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
    //post 
    it('post responds with 201', function(done) {
        req
          .post('users/1/todos')
          .send({userId: 1, id: 21, title:'a title', completed: 'false'})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(201)
          .end(function(err, res) {
            if (err) return done(err);
            done();
          });
      });
  });
  describe('https://https://jsonplaceholder.typicode.com/users/1/posts Tests', function() {

    //get 
    it('get responds with 200', function(done) {
        req
        .get('users/1/posts')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
    //post 
    it('post responds with 201', function(done) {
        req
          .post('users/1/posts')
          .send({userId: 1, id: 11, title:'a title', body: 'blah blah blah'})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(201)
          .end(function(err, res) {
            if (err) return done(err);
            done();
          });
      });
  });