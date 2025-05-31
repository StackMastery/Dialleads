import { StaticImageData } from "next/image";
import { Building, ShoppingCart, Store } from "lucide-react";
import React from "react";
import RealStateImg from "../public/industry/real.png";
import HomeImg from "../public/industry/ecomm.png";
import EcommImg from "../public/industry/home.png";

export const IndustryData: {
  name?: string;
  icon?: React.ElementType;
  title?: string;
  list?: { name: string; des: string }[];
  image?: StaticImageData;
}[] = [
  {
    name: "Real estate",
    icon: Store,
    title: "Engage and Convert More Homebuyers with AI-Powered Conversations",
    list: [
      {
        name: "Automate Lead Qualification",
        des: "Instantly identify serious buyers and investors with AI-driven conversations.",
      },
      {
        name: "Streamline Scheduling",
        des: "Book property tours and consultations seamlessly with calendar integration.",
      },
      {
        name: "24/7 Customer Support",
        des: "Provide instant responses to inquiries about listings, financing, and availability.",
      },
    ],
    image: RealStateImg,
  },
  {
    name: "E-Commerce",
    icon: ShoppingCart,
    title: "Enhance Customer Experience and Boost Sales with AI Assistance",
    list: [
      {
        name: "Automated Order Assistance",
        des: "Help customers find products, track orders, and process returns effortlessly.",
      },
      {
        name: "Personalized Recommendations:",
        des: "Increase conversions with AI-driven product suggestions based on user preferences.",
      },
      {
        name: "24/7 Customer Support",
        des: "Handle FAQs, resolve issues, and provide instant assistance anytime.",
      },
    ],
    image: HomeImg,
  },
  {
    name: "Home Service",
    icon: Building,
    title: "Optimize Bookings and Customer Engagement with AI-Powered Calls",
    list: [
      {
        name: "Instant Appointment Booking",
        des: "Schedule service calls for plumbing, HVAC, and repairs without delays.",
      },
      {
        name: "Automated Follow-Ups",
        des: "Reduce no-shows and improve customer retention with timely reminders.",
      },
      {
        name: "Emergency Response Assistance",
        des: "Ensure urgent service requests are handled promptly with AI call routing.",
      },
    ],
    image: EcommImg,
  },
];
