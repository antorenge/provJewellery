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
    components: ProductDesign[];
    date_created: string;
    date_modified: string;
    created_by: User;
    modified_by: User;
}

export class Image {
    file: string;
    label: string;
}

export class Drawing {
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

export class PurchaseOrder {
    code: string;
    name: string;
    workshop: Workshop;
    products: PurchaseOrderProduct[];
    due_date: string;
    artisans: User[];
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

export class Delivery {
    po_product: PurchaseOrderProduct;
    quantity_delivered: number;
    quantity_received: number;
    date_delivered: string;
    date_received: string;
    delivered_by: User;
    received_by: User;
}

export class Validation {
    item: InventoryItem;
    is_approved: boolean;
    validated_by: User;
    stage: string;
}

export class InventoryItem {
    serial_no: string;
    product: ProductDesign;
    delivery: Delivery;
    wip: WorkInProgress;
}

export class Workshop {
    name: string;
    address: string;
}

export class WorkInProgress {
    product: ProductDesign;
    workshop: Workshop;
    process: string;
    received_items: InventoryItem[];
    quantity_received: number;
    date_received: string;
    received_from: User;
    delivered_items: InventoryItem[];
    quantity_delivered: number;
    date_delivered: string;
    delivered_to: User;
    created_by: User;
    modified_by: User;
}

export class OwnershipTransfer {
    order: PurchaseOrder;
    items: InventoryItem[];
    previous_owner: User;
    current_owner: User;
    date_transferred: string;
    date_created: string;
    date_modified: string;
    created_by: User;
    modified_by: User;
}
