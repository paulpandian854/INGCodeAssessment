export interface JWTRESPONSE {
    code: number,
    message: string
}

export interface VEHICLES {
    _id: number,
    make: string,
    model: string,
    year_model: number,
    price: number,
    licensed: boolean,
    date_added: any,
    wareHo?: any,
    index?: number
}

export interface CARDETAILS {
    _id: string,
    name: string,
    location: {
        lat: string,
        long: string
    },
    cars: {
        location: string,
        vehicles: VEHICLES[]
    }
}
