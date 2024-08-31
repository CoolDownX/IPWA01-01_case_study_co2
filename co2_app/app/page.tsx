import { co2_emission_data } from "@/data/data";
import { EmissionTable } from "@/components/emission-table";
import { DataFilter } from "@/lib/data-filter";

export default function Home() {
  return (
    <main className="flex w-full justify-center py-40 md:py-60">
      <div className={"flex w-full max-w-7xl flex-col"}>
        <EmissionTable emission_data={co2_emission_data} />
      </div>
    </main>
  );
}
