import React from "react";
import "./About.css";
import aboutUs from "../images/About-Us.png";
function About() {
  return (
    <div>
      <img className="aboutImg" src={aboutUs} alt={aboutUs}></img>
      <h5>
        ShoesShop is all about footwear. We have been in the shoe business for
        over 130 years. Yes, you read that correctly, over a century plus a
        quarter. Today we are proud to offer our best customer service to
        patrons both online here at ShoeStores.com and in our shoe stores in the
        Indianapolis, IN area. For more information about the 130+ history of
        Stout's Footwear, visit our history page. Stout's Footwear, the oldest
        shoe store in the United States and our parent company, proudly opened
        its doors to the world of ecommerce in 2009. Since starting
        ShoeStores.com, we have devoted our energy to providing personable and
        knowledgable customer service with quick free shipping to every
        customer. Excellent customer service is the standard of Stout's Footwear
        and ShoeStores.com that will not be compromised. Our goal is to make
        sure that your demands of quality, style and comfort are fulfilled.
        Style, comfort and quality are the focus of the ShoeStores.com buying
        team. The brands we carry are a reflection of our values which is why we
        search the world for the finest footwear every season. We know that if
        you don't take care of your feet then your whole body suffers. Brands
        such as New Balance, Munro, Ecco, KEEN, Birkenstock and Sorel epitomize
        what we are about. Top-quality styles that are crafted with support,
        style and exquisite materials.
      </h5>
    </div>
  );
}

export default About;
