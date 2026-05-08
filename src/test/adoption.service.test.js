import adoptionService from "../services/adoptionService.js";
import { expect } from "chai";


describe('Adoption service - Unit', () => {

it('Crear una mascota', async () => {


//arrange
const data = {

 name: 'firulais',
 species: 'perro'

}

//act
const result = await adoptionService.create(data)


//assert 
expect(result).to.have.property('id');
expect(result.name).to.equal('firulais');
expect(result.species).to.equal('perro');

})






it('retorna todas las mascotas en un Array', async () => {

// arrange
await adoptionService.create ({

 name: 'cartucho',
 species: 'perro'

});

// act
 const result = await adoptionService.getAll();


 //assert
 expect(result).to.be.an('array')
 expect(result.length).to.be.greaterThan(0)

})




it('retorna una adopción por id', async () => {

const created = await adoptionService.create ({

 name: 'pin pon',
 species: 'gato'

});


const result = await adoptionService.getById(created.id);


expect(result).to.have.property('id');
expect(result.name).to.equal('pin pon');
expect(result.species).to.equal('gato');


})



it('Actualiza los datos de una mascota', async () => {

const created = await adoptionService.create ({

 name: 'pepo',
 species: 'Loro'

});


const valorNuevo = {

    name: 'mandarina',
    species: 'iguana'

}



 await adoptionService.update(created.id, valorNuevo )

const updated = await adoptionService.getById(created.id);


expect(updated).to.have.property('id');
expect(updated.name).to.equal('mandarina');
expect(updated.species).to.equal('iguana');



})




it('Elimina una mascota del registro', async () => {


const created = await adoptionService.create ({

 name: 'firulais',
 species: 'perro'

});

await adoptionService.delete(created.id);

const result = await adoptionService.getById(created.id)

expect(result).to.equal(undefined);


})





})