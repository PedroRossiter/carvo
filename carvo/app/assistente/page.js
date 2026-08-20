import { getModelos } from "@/lib/db";
import ChatAssistant from "@/components/ChatAssistant";

export const dynamic = "force-dynamic";

export default async function AssistentePage() {
  const modelos = await getModelos();
  return <ChatAssistant modelos={modelos} />;
}
