import adoptionService from "../services/adoptionService.js";


class AdoptionController{

  constructor(adoptionService){

   this.service = adoptionService

  }



  create = async (req, res) => {

  try {
    

  if(!req.body?.name || !req.body?.species) {
    return res.status(400).json({ status: 'error', message:'name y species son requeridos' });
  }


    const result = await this.service.create(req.body);

    return res.status(201).json({ status: 'success', payload: result });

  } catch(err) {


   return res.status(500).json({ status: 'error', message: 'error al crear la adopcion' })

  }


  }



  getAll = async (req, res) => {

    try {

    const result = await this.service.getAll();

   

     return res.status(200).json({ status: 'success', payload: result })

    } catch(err) {

     return res.status(500).json({ status: 'error', message: 'error al traer adopciones' })

    }

  }



   getById = async (req, res) => {

   try {

    const result = await this.service.getById(req.params.id);

    if(!result) {
      return res.status(404).json({ status: 'error', message: 'No existe esa adopcion' })
     }


     
     return res.status(200).json({ status: 'success', payload: result })

   } catch(err) {

    return res.status(500).json({ status: 'error', message: 'error al traer esa adopcion' });

   }


   }




   update = async (req, res) => {

   try {

    const exists = await this.service.getById(req.params.id);

    if (!exists) {
    return res.status(404).json({ status: 'error', message: 'No existe esa adopcion' });
    }


     const result = await this.service.update(req.params.id, req.body);

    return res.status(200).json({ status: 'success', payload: result })


   } catch(err) {

     return res.status(500).json({ status: 'error', message: 'Error al actualizar los datos' })

   }


   }
   


   delete = async (req, res) => {

    try {

    const exists = await this.service.getById(req.params.id);

   if (!exists) {
   return res.status(404).json({ status: 'error', message: 'No existe esa adopcion' });
   }
  

    const result = await this.service.delete(req.params.id);

    return res.status(200).json({ status: 'success', payload: result });


    } catch (err) {

     return res.status(500).json({ status: 'error', message: 'Error al eliminar la adopción' })

    }

   }


}


const adoptionController = new AdoptionController(adoptionService);

export default adoptionController;