import React from "react";
import Navbar from "../Component/Navbar";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <section className="w-full h-[80vh] px-62 flex pt-20">
        <div>
          <p>Know when your email is viewed</p>
          <p>Send your first tracked email in 30 seconds - right from Gmail</p>
        </div>
        <div>
          <Image src="/emailTracking.png" alt="" width={600} height={600} />{" "}
        </div>
      </section>
    </div>
  );
}
