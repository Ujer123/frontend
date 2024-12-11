import React from "react";

function Shipping() {
  return (
    <section>
      <div className="bg-black w-[100%] pt-32 pb-10 text-white text-center ">
        Home / Shipping Policy
      </div>
      <div className=" container mt-16 mx-auto">
        <h1 className="text-center font-bold">SHIPPING POLICY</h1>
        <p className="mt-8">
        We offer shipping to various locations worldwide. Our shipping times may vary based on your location, but typically, orders will be processed within 1-3 business days.
        </p>
        <div className="my-8">
            <p>Standard Shipping: Delivery takes 5-10 business days.</p>
            <p>Express Shipping: Delivery takes 2-5 business days.</p>
            <p>Shipping fees will be calculated at checkout based on your location and the shipping method chosen. Once your order has shipped, you will</p>
            <p>Receive a confirmation email with tracking information.</p>
        </div>
      </div>
    </section>
  );
}

export default Shipping;
