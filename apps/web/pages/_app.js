import "../styles/globals.css";
import Script from "next/script";
import Footer from "../components/footer";
import { PopUpBanner } from "../components/popupbanner";
import "@fontsource/poppins/900.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/inter/900.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat"></div>
      <Script id="messenger-chat" strategy="lazyOnload">
        {`
        var chatbox = document.getElementById('fb-customer-chat');
        chatbox.setAttribute("page_id", "102191772428762");
        chatbox.setAttribute("attribution", "biz_inbox");
  
        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v12.0'
          });
        };
  
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    `}
      </Script>
      <Script
        src="https://betteruptime.com/widgets/announcement.js"
        dataId="152527"
        async="async"
        type="text/javascript"
      />
      <PopUpBanner />
      <Component {...pageProps} />
      <Footer></Footer>
    </ChakraProvider>
  );
}

export default MyApp;
