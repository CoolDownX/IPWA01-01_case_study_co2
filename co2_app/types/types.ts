import { ActionTypes, ColumnTypes, OrderTypes } from "@/enums/enums";

export interface Co2Emission {
  country: string;
  company: string;
  metricTons: number;
  percentage: number;
}

export type SortingInstruction = {
  column: ColumnTypes;
  order: OrderTypes;
};

export type FilterInstruction = {
  column: keyof Co2Emission;
  action: ActionTypes;
  values: any[];
};
