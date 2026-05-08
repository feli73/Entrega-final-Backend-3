import Adoption from '../models/adoptionModel.js';
import { randomUUID } from 'crypto';


let adoptions = [];

class AdoptionRepository {

  getAll() {
    return adoptions;
  }

  getById(id) {
    return adoptions.find(el => el.id === id);
  }

  create(data) {
    const newAdoption = new Adoption ({
      id: randomUUID(),
      ...data
    });
    adoptions.push(newAdoption);
    return newAdoption;
  }

  update(id, data) {
  let updatedAdoption = null;

  adoptions = adoptions.map(el => {
    if (el.id === id) {
      updatedAdoption = new Adoption({ ...el, ...data });
      return updatedAdoption;
    }
    return el;
  });

  return updatedAdoption;
}

  delete(id) {
    adoptions = adoptions.filter(el => el.id !== id);
    return adoptions;
  }
}

const adoptionRepository = new AdoptionRepository();

export default adoptionRepository;