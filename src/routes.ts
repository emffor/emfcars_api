import { Router } from "express";
import { CreateBrandsController } from "./modules/brands/useCases/createBrand/CreateBrandsController";
import { FindAllBrandController } from "./modules/brands/useCases/findAllBrand/FindAllBrandController";
import { FindBrandsController } from "./modules/brands/useCases/findBrand/FindBrandsController";
import { RemoveBrandController } from "./modules/brands/useCases/removeBrand/RemoveBrandController";
import { UpdateBrandsController } from "./modules/brands/useCases/updateBrand/UpdateBrandsController";
import { UpdateBrandsUseCase } from "./modules/brands/useCases/updateBrand/UpdateBrandsUseCase";
import { CreateCarsController } from "./modules/cars/useCases/createCars/CreateCarsController";
import { FindCarsController } from "./modules/cars/useCases/findCars/FindCarsController";
import { RemoveCarsController } from "./modules/cars/useCases/removeCars/RemoveCarsController";
import { UpdateCarsController } from "./modules/cars/useCases/updateCars/UpdateCarsController";
import { CreateTransmissionController } from "./modules/transmissions/useCases/createTransmission/CreateTransmissionController";
import { FindAllTransmissionController } from "./modules/transmissions/useCases/findAllTransmissions/FindAllTransmissionController";
import { FindTransmissionController } from "./modules/transmissions/useCases/findTransmission/findTransmissionController";
import { RemoveTransmissionController } from "./modules/transmissions/useCases/removeTransmissions/removeTransmissionsController";
import { UpdateTransmissionsController } from "./modules/transmissions/useCases/updateTransmission/UpdateTransmissionsController";

const routes = Router();

const createTransmissionController = new CreateTransmissionController();
const findTransmissionController = new FindTransmissionController();
const findAllTransmissionController = new FindAllTransmissionController();
const updateTransmissionController = new UpdateTransmissionsController();
const removeTransmissionController = new RemoveTransmissionController();

const createBrandsController = new CreateBrandsController();
const findBrandsController = new FindBrandsController();
const findAllBrandController = new FindAllBrandController();
const updateBrandsController = new UpdateBrandsController();
const removeBrandController = new RemoveBrandController();

const createCarsController = new CreateCarsController();
const findCarsController = new FindCarsController();
const updateCarsController = new UpdateCarsController();
const removeCarsController = new RemoveCarsController();

routes.post("/transmissions/", createTransmissionController.handle);
routes.get("/transmissions/", findTransmissionController.handle);
routes.get("/transmissions/cars", findAllTransmissionController.handle);
routes.put("/transmissions/:id", updateTransmissionController.handle);
routes.delete("/transmissions/:id", removeTransmissionController.handle);

routes.post("/brands/", createBrandsController.handle);
routes.get("/brands/", findBrandsController.handle);
routes.get("/brands/cars", findAllBrandController.handle);
routes.put("/brands/:id", updateBrandsController.handle);
routes.delete("/brands/:id", removeBrandController.handle);

routes.post("/cars/", createCarsController.handle);
routes.get("/cars/", findCarsController.handle);
routes.put("/cars/:id", updateCarsController.handle);
routes.delete("/cars/:id", removeCarsController.handle);

export { routes };