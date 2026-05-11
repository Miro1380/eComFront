import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer style={{ backgroundColor: "white", color: "#ccc", fontFamily: "'Georgia', serif" }}>
      
      {/* Main Footer */}
      <div className="container py-5 mt-5">
        <div className="row gy-4">

          {/* Column 1 - Brand */}
          <div className="col-md-3">
            <h4 style={{ color: "#fff", letterSpacing: "3px", fontFamily: "Georgia, serif", fontWeight: "bold" }}>
            <span style={{ color:  "#000000" }}>STORE</span>
            </h4>
            <p style={{ fontSize: "0.85rem", lineHeight: "1.7", marginTop: "12px" }}>
              Curated goods for the discerning shopper. Quality you can feel, style you can trust.
            </p>
            {/* Payment Icons */}
            <div className="d-flex gap-2 mt-3 flex-wrap">
              {["VISA", "MC", "AMEX", "PayPal"].map((p) => (
                <span
                  key={p}
                  style={{
                    border: "1px solid #444",
                    borderRadius: "4px",
                    padding: "2px 7px",
                    fontSize: "0.65rem",
                    color: "#aaa",
                    letterSpacing: "1px",
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2 - Shop */}
          <div className="col-md-2 offset-md-1">
            <h6 style={{ color: "#fff", letterSpacing: "2px", fontSize: "0.75rem", textTransform: "uppercase", marginBottom: "16px" }}>
              Shop
            </h6>
            <ul className="list-unstyled" style={{ fontSize: "0.88rem" }}>
              {["New Arrivals", "Best Sellers", "Sale", "Men", "Women", "Accessories"].map((item) => (
                <li key={item} className="mb-2">
                  <a href="#" style={{ color: "#aaa", textDecoration: "none" }}
                    onMouseEnter={e => e.target.style.color = "#c9a96e"}
                    onMouseLeave={e => e.target.style.color = "#aaa"}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Customer Service */}
          <div className="col-md-2">
            <h6 style={{ color: "#fff", letterSpacing: "2px", fontSize: "0.75rem", textTransform: "uppercase", marginBottom: "16px" }}>
              Support
            </h6>
            <ul className="list-unstyled" style={{ fontSize: "0.88rem" }}>
              {["FAQ", "Shipping Policy", "Returns & Exchanges", "Track My Order", "Contact Us", "Size Guide"].map((item) => (
                <li key={item} className="mb-2">
                  <a href="#" style={{ color: "#aaa", textDecoration: "none" }}
                    onMouseEnter={e => e.target.style.color = "#c9a96e"}
                    onMouseLeave={e => e.target.style.color = "#aaa"}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Newsletter + Social */}
          <div className="col-md-3 offset-md-1">
            <h6 style={{ color: "#fff", letterSpacing: "2px", fontSize: "0.75rem", textTransform: "uppercase", marginBottom: "16px" }}>
              Stay Connected
            </h6>
            <p style={{ fontSize: "0.85rem", marginBottom: "12px" }}>
              Get early access to new drops and exclusive offers.
            </p>

            {subscribed ? (
              <p style={{ color: "#2372c6", fontSize: "0.85rem" }}>✓ You're on the list!</p>
            ) : (
              <form onSubmit={handleSubscribe}>
                <div className="d-flex">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #444",
                      color: "#fff",
                      padding: "8px 12px",
                      margin:"0.5rem",
                      fontSize: "0.8rem",
                      flex: 1,
                      outline: "none",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#2877b8",
                      border: "none",
                      color: "#111",
                      padding: "8px 14px",
                      margin:"0.5rem",
                      fontSize: "0.75rem",
                      fontWeight: "bold",
                      letterSpacing: "1px",
                      cursor: "pointer",
                      borderRadius: "0.5rem",
                    }}
                  >
                    JOIN
                  </button>
                </div>
              </form>
            )}

            {/* Social Icons */}
            <div className="d-flex gap-3 mt-4">
              {[
                { label: "IG", title: "Instagram" },
                { label: "FB", title: "Facebook" },
                { label: "TK", title: "TikTok" },
                { label: "PT", title: "Pinterest" },
              ].map(({ label, title }) => (
                <a
                  key={label}
                  href="#"
                  title={title}
                  style={{
                    width: "34px",
                    height: "34px",
                    border: "1px solid #444",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#aaa",
                    fontSize: "0.65rem",
                    textDecoration: "none",
                    letterSpacing: "0.5px",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "#c9a96e";
                    e.currentTarget.style.color = "#c9a96e";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "#444";
                    e.currentTarget.style.color = "#aaa";
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid #2a2a2a" }}>
        <div className="container py-3 d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <p style={{ fontSize: "0.75rem", color: "#555", margin: 0 }}>
            © 2025 LuxeStore. All rights reserved.
          </p>
          <div className="d-flex gap-3">
            {["Privacy Policy", "Terms of Service", "Accessibility"].map((item) => (
              <a key={item} href="#" style={{ color: "#555", fontSize: "0.75rem", textDecoration: "none" }}
                onMouseEnter={e => e.target.style.color = "#888"}
                onMouseLeave={e => e.target.style.color = "#555"}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}