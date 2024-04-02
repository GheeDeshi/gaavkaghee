import { Poppins } from "next/font/google";

export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "500", "600", "700", "900"],
    variable: "--font-poppins"
})