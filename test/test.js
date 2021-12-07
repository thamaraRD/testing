// const assert = require('assert');//con node
const assert = require('chai').assert;//con chai
const should = require ('chai').should();
const expect = require('chai').expect;

describe('Mis ejemplos con Mocha', () => {
//array
  it('Validando que el 5 este en mi array', () =>{
    assert.equal([1, 2, 3, 4].length, 4);
  });
//enteros
  it('Quiero validar que 2+2=4', () =>{
    const suma = 2 + 2;
    assert.equal(suma, 4)
  });
  //should
  it('validando la cantidad de elementos pero con Should', () =>{
    const array = [10, 20, 30, 40];
    array.should.have.lengthOf(4);
  });
  //string
  it('validando que Hola sea un string', () =>{
    const holaMundo = 'hola';
    holaMundo.should.be.a('string');
  });
  //obj
  it('validando la existencia de una propiedad de un obj', () =>{
    const jwt = {
      expireIn: new Date(),
      user: 'Thamara'
    };
    expect(jwt).to.have.property('user');
  })
});