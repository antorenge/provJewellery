// Models

export class ProductDesign {
    sku: string;
    name: string;
    collection: string;
    category: string;
    year: number;
    variance: string;
    color: string;
    size: string;
    shape: string;
    images: Image[];
    drawings: Drawing[];
    bill_of_materials: BillOfMaterial[];
    designers: User[];
}

export class Image {
    id: string;
    file: string;
    label: string;

}

export class Drawing {
    id: string;
    file: string;
    label: string;
}

export class BillOfMaterial {
    material: Material;
    quantity: number;
}

export class Material {
    name: string;
    units_of_measurement: string;
    techniques: string[];
}

export class SignedProductDesign {
    sku: string;
    token: string;
}

export class User {
    id: string;
    first_name: string;
    last_name: string;
    gender: string;
    email: string;
    phone: string;
    picture: string;
    date_joined: string;
    is_active: boolean;
    is_staff: boolean;
}
