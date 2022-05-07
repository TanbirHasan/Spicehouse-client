import React from 'react';

const Footer = () => {
    return (
      <div className="flex lg:flex-row lg:items-center lg:px-28 py-16 bg-slate-900 sm:flex flex-col px-5 justify-start">
        <div className="lg:w-2/4 text-white sm:my-3">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD3ZnZYHk_51eXAx0ppLx1nO2HFfmYDhiPS1ZGgNvRX0P9xf_dlqQDsOhliYS5iKyJFcs&usqp=CAU" />
          <p>
            We are the best for spice service, we are always availbale for any
            kind of product we have all facility
          </p>
          <p>Email : XYZ@gmail.com</p>
        </div>
        <div className="lg:w-1/4 text-white sm:w-full my-5">
          <h3 className="text-3xl pb-1">Explore</h3>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/4 text-white ">
          <h3 className="text-3xl pb-1">Visit</h3>
          <p>
            Jl. Gubeng Kertajaya VII raya no 47, Gubeng, Airlangga, Kota
            Surabaya East Java, Indonesia. 60286
          </p>
          <p>Phone : +628 126 126 0070</p>
        </div>
      </div>
    );
};

export default Footer;