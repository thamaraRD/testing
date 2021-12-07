//PROMESAS con async await

const palindrome = (word) => {
  return new Promise((resolve, reject) =>{
    if(!word) reject('La palabra está vacia');
    const palabraInvertida = word.split('').reverse().join('');
    resolve(palabraInvertida);
  });
}

test('quiero verificar que Hola es  igual a aloh', async () => {
  const response = await palindrome('hola');
    expect(response).toBe('aloh');
  });

//FUNCIONES

// const palindrome = (word) => word.split('').reverse().join('');

// test('quiero verificar que Hola es  igual a aloh', () => {
//   expect(palindrome('hola')).toBe('aloh')
// })


//OBJETOS

// test('Quiero verificar la igualdad de un objeto', () =>{
//   const obj = { one: 1 };
//   const objCompare = { one: 1 };
//   expect(obj).toEqual(objCompare);
// })

//DATOS ARRAY INTERABLES

// const nombres = ['Thamara', 'Ramos', 'Marina'];

// test('queremos ver si Marina se encuentra en el array', () => {
//   expect(nombres).toContain('Marina')
// })

// //DATOS BOOLEAN

// test('quioero verificar q 1 === 1', () =>{
//   expect(1 === 1).toBeTruthy();
// });


// DATOS STRING
// const holaMundo = 'Hola mundo';

// test('Que la palabra Hola este dentro de la variable holamundo', () => {
//   expect(holaMundo).toMatch(/Hola/)
// })

// test('Que la palabra todos NO este dentro de la variable holamundo', () => {
//   expect(holaMundo).not.toMatch(/todos/)
// })

//DATOS ENTEROS

// test('Quiero verificar que 2+2 = 4', () => {
//   expect(2 + 2 ).toBe(4);
// });

// test('Quiero verificar que 2+2 = 4 pero usando toequal', () => {
//   expect(2 + 2 ).toEqual(4);
// });
// //SE PUEDEN UTILIZAR DE LAS DOS MANERAS PARA COMPARAR NUMS

// test('Quiero verificar que 5 > 4', () => {
//   expect(5).toBeGreaterThan(4);
// });