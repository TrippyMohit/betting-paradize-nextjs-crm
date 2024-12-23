import type { Metadata } from "next";
import Header from "@/components/common/Header";
import SearchBar from "@/components/ui/SearchBar";
import DateFilter from "@/components/ui/DateFilter";

export const metadata: Metadata = {
  title: "CRM - Betting Paradise",
  description: "Betting Paradise CRM.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex-1">
        <Header />
        <div className="px-4 md:px-10 pt-5">
          <div className="w-full md:flex justify-between">
            <div className="w-full md:w-[50%] pb-4">
              <SearchBar />
            </div>
            <div>
              <DateFilter />
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}