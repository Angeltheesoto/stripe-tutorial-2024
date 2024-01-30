const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// !CREATE STORE ITEMS
var storeItems = {
  "65973e542916b94401cd546d": {
    // BURGER BLACK
    price: "price_1Ocw1PLkj4DuN8M6sS86np6Q",
  },
  "6597405f2916b94401cd546e": {
    // BURGER WHITE
    price: "price_1Ocw21Lkj4DuN8M6tXOfjyJ6",
  },
  "659740b52916b94401cd546f": {
    // PIZZA BLACK
    price: "price_1Ocw2ULkj4DuN8M6RssOt5KL",
  },
  "659740cf2916b94401cd5470": {
    // PIZZA WHITE
    price: "price_1Ocw2qLkj4DuN8M6FPGCNpk1",
  },
  "659741162916b94401cd5471": {
    // TACO BLACK
    price: "price_1Ocw3GLkj4DuN8M6qAMHs7YF",
  },
  "659741352916b94401cd5472": {
    // TACO WHITE
    price: "price_1Ocw3iLkj4DuN8M6zxIjvvHX",
  },
};

// !SEND SESSIONID AND URL TO CHECKOUT CART
router.post("/create-checkout-session", async (req, res) => {
  try {
    const { items, success_url, cancel_url } = req.body;
    const line_items = items.map((item) => {
      if (!storeItems[item.id]) {
        throw new Error(`Invalid product ID: ${item.id}`);
      }
      return {
        price: storeItems[item.id].price,
        quantity: item.quantity,
      };
    });
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "cashapp"],
      mode: "payment",
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      line_items: line_items,
      success_url: `${success_url}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancel_url,
    });

    res.json({ url: session.url, sessionId: session.id });
  } catch (err) {
    console.log("Create checkout session error:", err);
    res.status(500).json({ err: ` Create checkout session error: ${err}` });
  }
});

// !CHECK SESSION STATUS
router.get("/session/status/:sessionId", async (req, res) => {
  const { sessionId } = req.params;
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    // console.log(session);
    res.json(session);
  } catch (err) {
    res.status(500).json({ err: `Internal Server Error: ${err}` });
  }
});

module.exports = router;
