import Service from "../models/service/service.model";
import ServiceContent from "../models/service/serviceContent.model";
import {
  createOne,
  deleteOne,
  getAll,
  updateOne,
} from "./common/factory.controller";

/* Service Content */
export const getAllServiceContent = getAll(ServiceContent);

export const createServiceContent = createOne(ServiceContent);

export const updateServiceContent = updateOne(ServiceContent);

export const deleteServiceContent = deleteOne(ServiceContent);

/* Services */

export const getAllServices = getAll(Service);

export const createServices = createOne(Service);

export const updateServices = updateOne(Service);

export const deleteService = deleteOne(Service);
