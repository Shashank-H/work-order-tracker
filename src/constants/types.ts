
export interface Order {
  order_id: number;
  filename: string;
  upload_date: number;
  // file: File;
}

export interface OrderItem extends Order{
  progress?: number;
  // isSelected?: boolean;
}

export interface ProgressMetadata {
  order_id: number;
  progress: number;
}