import React from 'react'

export default function Footer() {
  return (
      <footer className=" grid grid-cols-2 md:grid-cols-3 gap-4 justify-between py-12 md:py-18  px-8 md:px-14 bg-gray-700">
        <div className="flex flex-col max-w-xs gap-5">
          <h2 className="text-xl font-bold text-white">My Movie</h2>
          <p className="text-white">Sed consequat sapien faus quam bibendum convallis quis in nulla. Pellentesque volutpat odio eget diam cursus semper.</p>
        </div>
        <div className="hidden md:flex flex-col gap-5">
          <h2 className="text-xl font-bold text-white">Quick Links</h2>
          <div className="flex flex-row gap-2 md:gap-24">
            <ul className="text-white">
              <li>About Us</li>
              <li>Support</li>
              <li>License</li>
            </ul>
            <ul className="text-white">
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Product License</li>
          </ul>
          </div>
        </div>
        <div className="flex flex-col max-w-xs gap-5">
          <h2 className="text-xl font-bold text-white">Subscribe Now</h2>
          <h3 className="text-white"> Sed consequat sapien faus quam bibendum convallis.</h3>
        </div>
      </footer>
  )
}
