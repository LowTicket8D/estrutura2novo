/**
 * Links do funil Perfect Pay / Centerpag.
 * Substitua pelas URLs reais geradas no painel Perfect Pay.
 *
 * Upsells: a Perfect Pay exige o parâmetro ?upsell=true no link para
 * ativar o One Click (cliente não preenche dados de novo). Já aplicado abaixo.
 */

/** Checkout do produto principal (já em uso no projeto) */
export const MAIN_CHECKOUT_URL = "https://go.centerpag.com/PPU38CQ8T2G";

/** Garante que o link de upsell tenha o parâmetro que a Perfect Pay exige */
function withUpsellParam(url: string) {
  return url + (url.includes("?") ? "&" : "?") + "upsell=true";
}

/** Link de checkout do 1º upsell (One Click). Use em /almost. Cole aqui o link que a Perfect Pay gera. */
export const UPSELL_1_CHECKOUT_URL = withUpsellParam("https://go.centerpag.com/PPU38CQ8T4P");

/** Link de checkout do 2º upsell (One Click). Use em /ready. Cole aqui o link que a Perfect Pay gera. */
export const UPSELL_2_CHECKOUT_URL = withUpsellParam("https://go.centerpag.com/SEU_LINK_UPSELL_2");
