export interface ApiObjectData {
    color?: string;
    capacity?: string | number;
    [key: string]: string | number | undefined;
  }
  
export  interface ApiObject {
    id: string;
    name: string;
    data: ApiObjectData | null;
    createdAt: string;
  }