import { getModelos } from "@/lib/db";
import CompareClient from "@/components/CompareClient";

export const dynamic = "force-dynamic";

export default async function ComparadorPage() {
  const modelos = await getModelos();
  return <CompareClient modelos={modelos} />;
}
