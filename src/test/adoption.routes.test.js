import { expect } from "chai";
import app from '../app.js';
import { describe } from "mocha";
import  request  from "supertest";


describe('Adoption routes - Integration', () => {


    it('POST /api/adoptions  crea una adopción', async () => {

      const  payload = {
     
        name: "firulais",
        species: "perro"
    
    };


    const res = await request(app)
    .post('/api/adoptions')
    .send(payload)


  
     expect(res.status).to.equal(201);

     expect(res.body).to.have.property('status');

     expect(res.body.status).to.equal('success');

     expect(res.body.payload).to.have.property('id');

     expect(res.body.payload.name).to.equal('firulais');

     expect(res.body.payload.species).to.equal('perro');



    })


    it('POST /api/adoptions - falla si no envío datos', async () => {

    const res = await request(app)
    .post('/api/adoptions')
    .send({})




    expect(res.status).to.equal(400);
    expect(res.body.status).to.equal('error');
    expect(res.body).to.have.property('message');

    })





   it('POST /api/adoptions - falla si falta name', async() => {

   const res = await request(app)
   .post('/api/adoptions')
   .send({
     species: 'perro'
   });



   expect(res.status).to.equal(400);


   })












    it('GET /api/adoptions  muestra todas las adopciones', async () => {

    



    const res = await request(app)
    .get('/api/adoptions')


  
     expect(res.status).to.equal(200);
      expect(res.body).to.have.property('status');
      expect(res.body.status).to.equal('success');

      expect(res.body.payload).to.be.an('array');

    


    })



    
    it('GET /api/adoptions/:id  muestra una adopción', async () => {

    
    const  createRes = await request(app) 
  
     .post('/api/adoptions')
     .send({
         name: "firulais",
        species: "perro"
       });

      
    


 
    const id = createRes.body.payload.id;

    const res = await request(app)
    .get(`/api/adoptions/${id}`)

    
  
     expect(res.status).to.equal(200);

    expect(res.body.payload).to.have.property('id');

     expect(res.body).to.have.property('status');
     expect(res.body.status).to.equal('success');
 
    expect(res.body.payload.name).to.equal('firulais');
    
    expect(res.body.payload.species).to.equal('perro');


    });




 it('GET /api/adoptions/:id - falla si no existe', async () => {

     const  res = await request(app) 
  
     .get('/api/adoptions/999999')

    console.log(res.body);

    expect(res.status).to.equal(404);
    expect(res.body.status).to.equal('error')
    expect(res.body).to.have.property('message')


 })






   


it('PUT /api/adoptions/:id  actualiza una adopción', async () => {

  const createRes = await request(app) 

    .post('/api/adoptions')
    .send({

    name: 'firulais',
    species: 'perro'

    });
 


    const id = createRes.body.payload.id;


    const res = await request(app)
    .put(`/api/adoptions/${id}`)
    .send({
      name: 'cartucho',
      species: 'perro'
    });

    

  
     expect(res.status).to.equal(200);


     expect(res.body).to.have.property('status');
     expect(res.body.status).to.equal('success');
 
    expect(res.body.payload).to.have.property('id');
    expect(res.body.payload.name).to.equal('cartucho');
    expect(res.body.payload.species).to.equal('perro');


    })




   it('PUT /api/adoptions/:id - falla si no existe', async () => {

    const res = await request(app)
    .put('/api/adoptions/9999999')
    .send({})

   


   expect(res.status).to.equal(404);
   expect(res.body.status).to.equal('error');
   expect(res.body).to.have.property('message');


  });


    it('DELETE /api/adoptions/:id  eliminar una adopción', async () => {

  const createRes = await request(app) 

    .post('/api/adoptions')
    .send({

    name: 'firulais',
    species: 'perro'

    });
 


    const id = createRes.body.payload.id;


    const res = await request(app)
    .delete(`/api/adoptions/${id}`)
    

    
      

  
     expect(res.status).to.equal(200);


     expect(res.body).to.have.property('status');
     expect(res.body.status).to.equal('success');
 



    })

   


it('DELETE /api/adoptions/:id - falla si no existe', async () => {

 const res = await request(app)
 .delete('/api/adoptions/999999999')




   expect(res.status).to.equal(404);
   expect(res.body.status).to.equal('error');
   expect(res.body).to.have.property('message');


});


it('DELETE  elimina realmente la adopción', async () => {

  const createRes = await  request(app)
  .post('/api/adoptions')
  .send({
     name: 'firulais',
     species: 'perro'
  })



   const id = createRes.body.payload.id;

   await request(app).delete(`/api/adoptions/${id}`);

   const res = await request(app).get(`/api/adoptions/${id}`)


   expect(res.status).to.equal(404)



  });



    })


