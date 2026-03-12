"use client";


const upsellClass = "flex flex-auto justify-center items-center overflow-hidden -mr-3 min-h-[180px]";
const blackClass = "scale-110 !max-h-48 upsell";

type Props = {
  black?: boolean;
  /** URL do checkout do upsell na Perfect Pay (link one-click). Configure no painel Perfect Pay. */
  upsellCheckoutUrl: string;
  /** Texto do botão CTA */
  ctaText?: string;
  /** URL do botão manual "pular oferta" (ex.: próximo upsell ou /thanks). Conforme orientação do mentor. */
  skipUrl?: string;
  /** Texto do link para pular oferta */
  skipLabel?: string;
};

export default function PerfectPayUpsell({
  black = false,
  upsellCheckoutUrl,
  ctaText = "Sim, quero garantir o acesso vitalício",
  skipUrl,
  skipLabel = "Não quero, continuar",
}: Props) {
  const upsellClassName = black ? `${upsellClass} ${blackClass}` : upsellClass;

  return (
    <div className="flex flex-col items-center gap-3 rounded-xl shadow-lg relative overflow-hidden border-4 border-green-500 bg-[#F7F9FA]">
      {black && (
        <>
          <div className="flex top-0 w-full justify-center items-end absolute text-center px-5 pt-5 pb-3 z-50 text-gray-950 bg-[#F7F9FA]">
            <span className="text-xs font-semibold uppercase">¡Toca el botón para recibir ahora! 👇</span>
          </div>
          <div className="flex bottom-0 w-full justify-center items-start absolute text-center px-5 pt-3 pb-5 z-50 text-gray-950 bg-[#F7F9FA]">
            <span className="text-xs font-semibold uppercase">¡Estamos ansiosos por comenzar! 🎉</span>
          </div>
        </>
      )}
      <div className={upsellClassName}>
        <a
          href={upsellCheckoutUrl}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors shadow-lg"
        >
          {ctaText}
        </a>
      </div>
      {skipUrl && (
        <a
          href={skipUrl}
          className="text-sm text-gray-600 hover:underline pb-2"
        >
          {skipLabel}
        </a>
      )}
    </div>
  );
}
