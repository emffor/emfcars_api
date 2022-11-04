import { Router } from "express";
import { CreateBrandsController } from "./modules/brands/useCases/createBrand/CreateBrandsController";
import { CreateTransmissionController } from "./modules/transmissions/useCases/createTransmission/CreateTransmissionController";



const routes = Router();


const createTransmissionController = new CreateTransmissionController();
const createBrandsController = new CreateBrandsController();

routes.post("/transmission/", createTransmissionController.handle);
routes.post("/brands/", createBrandsController.handle);


export { routes };