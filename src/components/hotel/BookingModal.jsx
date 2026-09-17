import { useState } from "react";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { Modal } from "./Modal";
import { ROOM } from "./Rooms";
import { HOTEL, T, body, heading } from "./theme";

export function BookingModal({ open, onClose }) {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");

  const close = () => {
    onClose();
    setTimeout(() => setDone(false), 300);
  };

  const submit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setName(String(data.get("name") ?? ""));
    setDone(true);
  };

  return (
    <Modal open={open} onClose={close} title={done ? "Request received" : "Reserve your stay"} width={760}>
      {done ? (
        <div className="text-center py-4">
          <div className="mx-auto gk-ico mb-3" style={{ color: T.goldDeep }} aria-hidden>
            <FiCheckCircle />
          </div>
          <h3 style={{ ...heading, fontSize: "1.8rem", marginBottom: ".6rem" }}>Thank you{name ? `, ${name.split(" ")[0]}` : ""}</h3>
          <p style={{ ...body, maxWidth: 440, margin: "0 auto 1.6rem" }}>
            Your booking request for the {ROOM.name} has been noted. Our front desk will confirm availability by phone
            within a few hours. For anything urgent, call {HOTEL.phone}.
          </p>
          <button type="button" className="gk-btn gk-btn-dark" onClick={close}>
            Close
          </button>
        </div>
      ) : (
        <form onSubmit={submit} noValidate={false}>
          <p style={{ ...body, marginBottom: "1.5rem" }}>
            {ROOM.name} {"\u00B7"} {ROOM.price} per night. Tell us your dates and we will hold the suite for you.
          </p>
          <div className="row g-3">
            <div className="col-12 col-md-4">
              <label className="gk-label" htmlFor="checkin">Check-in</label>
              <input className="gk-input" id="checkin" name="checkin" type="date" required />
            </div>
            <div className="col-12 col-md-4">
              <label className="gk-label" htmlFor="checkout">Check-out</label>
              <input className="gk-input" id="checkout" name="checkout" type="date" required />
            </div>
            <div className="col-12 col-md-4">
              <label className="gk-label" htmlFor="guests">Number of guests</label>
              <select className="gk-input" id="guests" name="guests" defaultValue="2" required>
                <option value="1">1 guest</option>
                <option value="2">2 guests</option>
                <option value="3">3 guests</option>
              </select>
            </div>
            <div className="col-12 col-md-6">
              <label className="gk-label" htmlFor="name">Full name</label>
              <input className="gk-input" id="name" name="name" type="text" autoComplete="name" placeholder="Your name" required />
            </div>
            <div className="col-12 col-md-6">
              <label className="gk-label" htmlFor="phone">Phone number</label>
              <input className="gk-input" id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 " required />
            </div>
            <div className="col-12">
              <label className="gk-label" htmlFor="email">Email address</label>
              <input className="gk-input" id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
            </div>
            <div className="col-12">
              <label className="gk-label" htmlFor="request">Special request</label>
              <textarea className="gk-input" id="request" name="request" rows={3} placeholder="Early check-in, airport pickup, extra bed…" />
            </div>
          </div>
          <button type="submit" className="gk-btn gk-btn-gold mt-4">
            Confirm Booking <FiArrowRight aria-hidden />
          </button>
        </form>
      )}
    </Modal>
  );
}
