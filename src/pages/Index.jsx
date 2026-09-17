import { useState } from "react";
import { LuxeStyles } from "@/components/hotel/LuxeStyles";
import { Navbar } from "@/components/hotel/Navbar";
import { Hero } from "@/components/hotel/Hero";
import { About } from "@/components/hotel/About";
import { WhyChooseUs } from "@/components/hotel/WhyChooseUs";
import { Rooms } from "@/components/hotel/Rooms";
import { RoomDetails } from "@/components/hotel/RoomDetails";
import { BookingModal } from "@/components/hotel/BookingModal";
import { Gallery } from "@/components/hotel/Gallery";
import { Attractions } from "@/components/hotel/Attractions";
import { FAQ } from "@/components/hotel/FAQ";
import { CTA } from "@/components/hotel/CTA";
import { Footer } from "@/components/hotel/Footer";

export function Index() {
  const [booking, setBooking] = useState(false);
  const [details, setDetails] = useState(false);

  const openBooking = () => setBooking(true);

  return (
    <div className="gk-root">
      <LuxeStyles />
      <Navbar onBook={openBooking} />
      <main>
        <Hero onBook={openBooking} />
        <About />
        <WhyChooseUs />
        <Rooms onBook={openBooking} onDetails={() => setDetails(true)} />
        <Gallery />
        <Attractions />
        <FAQ />
        <CTA onBook={openBooking} />
      </main>
      <Footer />
      <RoomDetails open={details} onClose={() => setDetails(false)} onBook={openBooking} />
      <BookingModal open={booking} onClose={() => setBooking(false)} />
    </div>
  );
}

export default Index;
