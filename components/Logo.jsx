import { rowdies } from "@/app/fonts";

// Wordmark "Carvo". É texto de verdade (Rowdies 700), não desenho — quem chama
// controla o tamanho por font-size e a cor por text-*, como em qualquer texto.
export default function Logo({ className = "" }) {
  return <span className={`${rowdies.className} leading-none ${className}`}>Carvo</span>;
}
