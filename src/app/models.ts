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
    signed: string;
}
