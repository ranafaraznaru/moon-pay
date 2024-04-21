import { loadMoonPay } from "@moonpay/moonpay-js";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const handleMoonPay = async () => {
    try {
      const moonPay = await loadMoonPay();
      console.log("moonPay", moonPay);

      const moonPaySdk = moonPay({
        flow: "sell",
        environment: "sandbox",
        variant: "overlay",
        params: {
          apiKey: "pk_test_Mr1ThXeZR4gIKRy9DHAoltZpDkwLT",
          theme: "dark",
          quoteCurrencyCode: "usd",
          baseCurrencyAmount: ".01",
          defaultBaseCurrencyCode: "eth",
        },
      });
      moonPaySdk.show();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleMoonPay();
  }, []);
  return <div>{/* <div style={{ width: "50%" }}>{widget.show()}</div> */}</div>;
}

export default App;
