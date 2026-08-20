import { getModelos } from "@/lib/db";
import CatalogClient from "@/components/CatalogClient";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const modelos = await getModelos();
  return <CatalogClient modelos={modelos} />;
}
