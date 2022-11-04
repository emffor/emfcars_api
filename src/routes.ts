import { Router } from "express";
import { CreateTransmissionController } from "./modules/transmissions/useCases/createTransmission/CreateTransmissionController";



const routes = Router();


const createTransmissionController = new CreateTransmissionController();

routes.post("/transmission/", createTransmissionController.handle);

export { routes };