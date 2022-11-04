import { Router } from "express";
import { CreateBrandsController } from "./modules/brands/useCases/createBrand/CreateBrandsController";
import { FindBrandsController } from "./modules/brands/useCases/findBrand/FindBrandsController";
import { UpdateBrandsController } from "./modules/brands/useCases/updateBrand/UpdateBrandsController";
import { UpdateBrandsUseCase } from "./modules/brands/useCases/updateBrand/UpdateBrandsUseCase";
import { CreateCarsController } from "./modules/cars/useCases/createCars/CreateCarsController";
import { FindCarsController } from "./modules/cars/useCases/findCars/FindCarsController";
import { UpdateCarsController } from "./modules/cars/useCases/updateCars/UpdateCarsController";
import { CreateTransmissionController } from "./modules/transmissions/useCases/createTransmission/CreateTransmissionController";
import { FindAllTransmissionController } from "./modules/transmissions/useCases/findAllTransmissions/FindAllTransmissionController";
import { FindTransmissionController } from "./modules/transmissions/useCases/findTransmission/findTransmissionController";
import { UpdateTransmissionsController } from "./modules/transmissions/useCases/updateTransmission/UpdateTransmissionsController";



const routes = Router();

const createTransmissionController = new CreateTransmissionController();
const findTransmissionController = new FindTransmissionController();
const findAllTransmissionController = new FindAllTransmissionController();
const updateTransmissionController = new UpdateTransmissionsController();

const createBrandsController = new CreateBrandsController();
const findBrandsController = new FindBrandsController();
const updateBrandsController = new UpdateBrandsController();

const createCarsController = new CreateCarsController();
const findCarsController = new FindCarsController();
const updateCarsController = new UpdateCarsController();

routes.post("/transmissions/", createTransmissionController.handle);
routes.get("/transmissions/", findTransmissionController.handle);
routes.get("/transmissions/cars", findAllTransmissionController.handle);
routes.put("/transmissions/:id", updateTransmissionController.handle);

routes.post("/brands/", createBrandsController.handle);
routes.get("/brands/", findBrandsController.handle);
routes.put("/brands/:id", updateBrandsController.handle);

routes.post("/cars/", createCarsController.handle);
routes.get("/cars/", findCarsController.handle);
routes.put("/cars/:id", updateCarsController.handle);

export { routes };