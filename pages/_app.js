import "../src/styles/index.scss";
import { AnimatePresence } from "framer-motion";

import Header from "../src/componants/Header/header";

function MyApp({ Component, pageProps, router }) {
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  return (
    <div>
      <Header />

      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
//  <ApolloProvider client={client}>
// </ApolloProvider>
{
  /* <Loading loading={loading} />; */
}
