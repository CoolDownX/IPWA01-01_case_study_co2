"use client";

import { Heading } from "@/components/heading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import { Text } from "@/components/text";
import { Co2Emission } from "@/types/types";
import { DataFilter } from "@/lib/data-filter";
import { co2_emission_data } from "@/data/data";
import { ActionTypes, ColumnTypes } from "@/enums/enums";

export function EmissionTable({
  emission_data,
}: {
  emission_data: Co2Emission[];
}) {
  let filter = new DataFilter(co2_emission_data);
  filter.applyFilter([
    {
      column: "country",
      action: ActionTypes.remove,
      values: [],
    },
    {
      column: "percentage",
      action: ActionTypes.remove,
      values: [],
    },
  ]);
  console.log(filter.baseData);

  return (
    <>
      <Heading>Global Co2 Data per Country 2023</Heading>
      <Table
        striped
        className="[--gutter:theme(spacing.6)] sm:[--gutter:theme(spacing.8)]"
      >
        <TableHead>
          <TableRow>
            <TableHeader>#</TableHeader>
            {Object.keys(ColumnTypes).map((c) => {
              return (
                <TableHeader>
                  {c.charAt(0).toUpperCase() + c.toLowerCase().slice(1)}
                </TableHeader>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {filter.filteredData.map((entry, index) => {
            return (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  <Text>{index + 1}</Text>
                </TableCell>
                <TableCell className="flex gap-2 font-medium">
                  <Text>{entry.country}</Text>
                </TableCell>
                <TableCell>
                  <Text>{entry.company}</Text>
                </TableCell>
                <TableCell>
                  <Text>{entry.metricTons}</Text>
                </TableCell>
                <TableCell className="text-zinc-500">
                  <Text>
                    {new Intl.NumberFormat("de-DE", {
                      style: "percent",
                    }).format(entry.percentage)}
                  </Text>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
