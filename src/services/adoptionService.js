import adoptionRepository from "../repositories/adoptionRepository.js";

class AdoptionService {
  constructor(repo) {
    this.repo = repo;
  }

  getAll() {
    return this.repo.getAll();
  }

  getById(id) {
    return this.repo.getById(id);
  }

  create(data) {
    return this.repo.create(data);
  }

  update(id, data) {
    return this.repo.update(id, data);
  }

  delete(id) {
    return this.repo.delete(id);
  }
}


const adoptionService = new AdoptionService(adoptionRepository)


export default adoptionService;