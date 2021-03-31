import { VEHICLES } from "../interface/garage-details.interface";

export interface ProductInterface {
    name: string;
    jwt: string[];
    cardDetails: VEHICLES[];
  }