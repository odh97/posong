'use client';
import { useEffect } from 'react';

/**
 * Google Analytics & Google Tag Manager 컴포넌트
 * - Prod GA/GTM (G-xxx, GTM-xxx): 운영 환경
 *
 * - Dev (B2C/B2B) GA/GTM (G-xxx, GTM-xxx): 개발 환경
 */

const GoogleAnalytics = () => {
  // GTM noscript를 body에 직접 추가
  const userID = '';
  useEffect(() => {
    let noscriptB2C;

    const noscriptB2C = document.createElement('noscript');
    noscriptB2C.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-xxx" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

    document.body.insertBefore(noscriptB2C, document.body.firstChild);

    // cleanup
    return () => {
      if (noscriptB2C && noscriptB2C.parentNode) {
        noscriptB2C.parentNode.removeChild(noscriptB2C);
      }
    };
  }, []);

  return (
    <>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('set', {'user_id': ${userID}});
        
        `}
      </script>
      {/* ========== 새 Google Analytics (개발 환경)========== */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-xxx"></script>
      <script>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-xxx');
        `}
      </script>

      <script>
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-xxx');
        `}
      </script>
    </>
  );
};

export default GoogleAnalytics;
