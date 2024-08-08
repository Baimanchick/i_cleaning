export type ServiceOption = {
  label: string;
  value: string;
  price: number | string;
};

export type Service = {
  options: ServiceOption[];
  defaultPrice?: number;
};

export type Services = {
  carpet: Service;
  matresses: Service;
  sofas: Service;
  curtainsAndBlinds: Service;
  generalCleaning: Service;
  deepCleaning: Service;
  AirConditionerClening: Service;
};
