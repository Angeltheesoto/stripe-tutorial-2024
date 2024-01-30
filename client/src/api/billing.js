import axios from "axios";
var server_url = process.env.REACT_APP_SERVER_URL;

// !HANDLE API BILLING CALL
export const createCheckout = async (userCredentials) => {
  let res = await axios.post(
    `${server_url}api/create-checkout-session`,
    userCredentials
  );
  if (res) {
    console.log("response", res);
    const { url, sessionId } = res.data;
    return { url, sessionId };
  } else {
    return `Could not create checkout session: ${res}`;
  }
};

export const sessionDataCall = async (userCredentials) => {
  try {
    const res = await axios.get(
      `${server_url}api/session/status/${userCredentials.sessionId}`
    );
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error fetching session data:", error);
  }
};
