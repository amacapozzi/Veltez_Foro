import { useEffect, useState } from "react";

export function isVpn() {
  const [vpn, setVpn] = useState(false);
  const [isVpnLoading, setIsVpnLoading] = useState(false);

  let ip = "77.111.246.46";

  const ENDPOINT = "https://proxycheck.io/v2";

  const OPTIONS = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      mode: "no-cors",
    },
  };
  useEffect(() => {
    const handleIsVpn = async () => {
      setIsVpnLoading(true);
      await fetch(`${ENDPOINT}/${ip}?vpn=1&asn=1`, {
        ...OPTIONS,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data[ip].proxy === "yes") {
            setVpn(true);
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setIsVpnLoading(false));
    };

    handleIsVpn();
  }, []);

  return { vpn, isVpnLoading };
}
