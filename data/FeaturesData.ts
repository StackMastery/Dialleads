import { StaticImageData } from "next/image";
import MagicUri from "../public/features/magic.png";
import CostUri from "../public/features/cost.png";
import AnalayticsUri from "../public/features/analytics.png";
import GlobalUri from "../public/features/global.png";

export const FeaturesData: {
  name?: string;
  icon: StaticImageData;
  des: string;
}[] = [
  {
    name: "Easy Setup",
    des: "Quickly and effortlessly connect AI voice assistants to your CRM and streamline all your calls.",
    icon: MagicUri,
  },
  {
    name: "Save Costs",
    des: "Automate routine customer calls and free your team’s valuable time for more important tasks.",
    icon: CostUri,
  },
  {
    name: "Scale Fast",
    des: "Manage an extensive volume of customer interactions without incurring high costs or upfront fees.",
    icon: AnalayticsUri,
  },
  {
    name: "24/7 Support",
    des: "AI voice agents work around the clock to ensure your business never misses a single important call.",
    icon: GlobalUri,
  },
];
