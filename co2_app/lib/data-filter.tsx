import {
  Co2Emission,
  FilterInstruction,
  SortingInstruction,
} from "@/types/types";

export class DataFilter {
  public filteredData: Co2Emission[] = [];
  public sorting: SortingInstruction[] = [];
  public filter: FilterInstruction[] = [];
  public baseData: Co2Emission[];

  constructor(baseData: Co2Emission[]) {
    this.baseData = baseData;
    this.filteredData = [...this.baseData];
  }

  applyFilter(filter: FilterInstruction[]) {
    let temp_filtered_values: Co2Emission[] = [...this.baseData];
    let to_delete: number[] = [];
    filter.map((f) => {
      temp_filtered_values.map((e, index) => {
        if (Object.keys(e).includes(f.column)) {
          if (f.values.includes(e[f.column])) {
            to_delete.push(index);
            console.log(`Comparing ${e[f.column]} to ${f.values}`);
          }
        }
      });
    });

    console.log(to_delete);
    console.log(this.baseData);

    temp_filtered_values = temp_filtered_values.filter(
      (d, index) => !to_delete.includes(index),
    );

    this.filter = filter;
    this.filteredData = temp_filtered_values;
  }
}
