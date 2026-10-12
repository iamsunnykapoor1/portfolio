import React from 'react';

export default function BackgroundEffect() {
  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(197,167,112,0.09),transparent_42%),linear-gradient(180deg,#0a0908_0%,#0d0c0a_55%,#0a0908_100%)]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
      <div className="absolute inset-0 luxury-grain" />
      <div className="absolute -top-56 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#c5a770]/[0.035] blur-[120px]" />
    </div>
  );
}
