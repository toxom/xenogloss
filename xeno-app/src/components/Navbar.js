import React from 'react';

export default function Navbar() {
  return (
    <>
      <div className="sticky-sm-top">Stick to the top on viewports sized SM (small) or wider</div>
      <div className="sticky-md-top">Stick to the top on viewports sized MD (medium) or wider</div>
      <div className="sticky-lg-top">Stick to the top on viewports sized LG (large) or wider</div>
      <div className="sticky-xl-top">Stick to the top on viewports sized XL (extra-large) or wider</div>
    </>
  );
}