import { Poppins, Abril_Fatface } from "next/font/google";

const poppins_300 = Poppins({ weight: "300", subsets: ["latin"] });
const poppins_400 = Poppins({ weight: "400", subsets: ["latin"] });
const poppins_700 = Poppins({ weight: "700", subsets: ["latin"] });
const poppins_900 = Poppins({ weight: "900", subsets: ["latin"] });
const abril = Abril_Fatface({ subsets: ["latin"], weight: "400" });

export { poppins_300, poppins_400, poppins_700, poppins_900, abril };
