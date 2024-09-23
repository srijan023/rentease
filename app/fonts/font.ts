import { Lato, Playfair_Display } from "next/font/google";

const lato_400 = Lato({ weight: "400", subsets: ["latin"] });
const lato_700 = Lato({ weight: "700", subsets: ["latin"] });
const lato_900 = Lato({ weight: "900", subsets: ["latin"] });
const playfair_400 = Playfair_Display({ subsets: ["latin"], weight: "400" });
const playfair_800 = Playfair_Display({ subsets: ["latin"], weight: "800" });
const playfair_900 = Playfair_Display({ subsets: ["latin"], weight: "900" });

export {
  lato_400,
  lato_700,
  lato_900,
  playfair_400,
  playfair_800,
  playfair_900,
};
