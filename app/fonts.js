import { Rowdies } from "next/font/google";

// Fonte da logo (components/Logo.jsx). O next/font baixa e serve junto com o
// build — nenhuma requisição pro Google em runtime. Rowdies não é variable,
// então o peso precisa ser declarado.
export const rowdies = Rowdies({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});
