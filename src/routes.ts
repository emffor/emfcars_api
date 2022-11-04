import { Router } from "express";
import { CreateBrandsController } from "./modules/brands/useCases/createBrand/CreateBrandsController";
import { FindBrandsController } from "./modules/brands/useCases/findBrand/FindBrandsController";
import { CreateCarsController } from "./modules/cars/useCases/createCars/CreateCarsController";
import { FindCarsController } from "./modules/cars/useCases/findCars/FindCarsController";
import { CreateTransmissionController } from "./modules/transmissions/useCases/createTransmission/CreateTransmissionController";


const routes = Router();

const createTransmissionController = new CreateTransmissionController();
const createBrandsController = new CreateBrandsController();
const findBrandsController = new FindBrandsController();
const createCarsController = new CreateCarsController();
const findCarsController = new FindCarsController();

routes.post("/transmissions/", createTransmissionController.handle);

routes.post("/brands/", createBrandsController.handle);
routes.get("/brands/", findBrandsController.handle);

routes.post("/cars/", createCarsController.handle);
routes.get("/cars/", findCarsController.handle);

export { routes };