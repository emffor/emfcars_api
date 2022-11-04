import { Router } from "express";
import { CreateBrandsController } from "./modules/brands/useCases/createBrand/CreateBrandsController";
import { CreateCarsController } from "./modules/cars/useCases/createCars/CreateCarsController";
import { FindCarsController } from "./modules/cars/useCases/findCars/FindCarsController";
import { CreateTransmissionController } from "./modules/transmissions/useCases/createTransmission/CreateTransmissionController";


const routes = Router();

const createTransmissionController = new CreateTransmissionController();
const createBrandsController = new CreateBrandsController();
const createCarsController = new CreateCarsController();
const findCarsController = new FindCarsController();

routes.post("/transmissions/", createTransmissionController.handle);

routes.post("/brands/", createBrandsController.handle);

routes.post("/cars/", createCarsController.handle);
routes.get("/cars/", findCarsController.handle);

export { routes };