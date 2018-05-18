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
    first_name: string;
    last_name: string;
    gender: string;
    email: string;
    phone: string;
    picture: string;
}

export class ArtisanProduction {
    po_product: PurchaseOrderProduct;
    quantity_produced: number;
    created_by: User;
    modified_by: User;
    location: Location;
    suppliers: Supplier[];
}

export class Supplier {
    material: Material;
    name: string;
    address: string;
    location: Location;
}

export class PurchaseOrderProduct {
    product: ProductDesign;
    quantity_ordered: number;
    unit_price: Money;
}

export class Money {
    amount: number;
    currency: string;
}
