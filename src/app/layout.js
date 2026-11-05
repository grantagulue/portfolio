import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const InterFont = Inter({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
	variable: "--font-Inter",
});

export const metadata = {
	title: "Grant Agulue: Building Scalable Web Applications",
	description:
		"This is my personal portfolio website showcasing my skills and projects as a software engineer.",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({ children }) {
	return (
		<>
			<html lang="en">
				<body className={`${InterFont.className} ${InterFont.variable}`}>
					<Header />
					<PageTransition>{children}</PageTransition>
				</body>
			</html>
		</>
	);
}
