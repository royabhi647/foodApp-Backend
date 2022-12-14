let SK =
  "sk_test_51M9QrVSACskp9GIgl5yqwwJsDiHnV0niCuhL4J9e1ut6i7BI3mTEImkhWv6VtEf1dYn4Ch7nVHwXaBMu8SCp7K8S00ZkArvkqc";
const stripe = require("stripe")(SK);
const planModel = require("../models/planModel");
const userModel = require("../models/userModel");

module.exports.createSession = async function (req, res) {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          name: plan.name,
          // name: "HealthyFood101",
          // description: plan.description,
          amount: "1234",
          currency: "inr",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.protocol}://${req.get("host")}/profile`,
      cancel_url: `${req.protocol}://${req.get("host")}/profile`,
    });
    res.redirect(303, session.url);
  } catch (err) {
    res.json({
      err: err.message,
    });
  }
};
