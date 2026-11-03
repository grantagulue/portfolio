"use client";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import Stats from "@/components/Stats";

const Home = ({ children = "Grant" }) => {
	return (
		<section className="h-full">
			<div className="container mx-auto h-full">
				<div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
					{/* text */}
					<div className="text-center xl:text-left lg:text-left">
						<span className="text-2xl">Software Engineer</span>
						<h1 className="h1">
							Hello, My name is <br />{" "}
							<div className="text-accent">
								{children.split("").map((letter, i) => {
									return (
										<motion.span
											initial={{ y: 0 }}
											whileHover={{ y: -20 }}
											transition={{
												delay: 0.001 * i,
												ease: "easeInOut",
												duration: 0.3,
											}}
											key={i}
											className="inline-block"
										>
											{letter}
										</motion.span>
									);
								})}
							</div>
						</h1>
						<p className="max-w-[500px] mb-9 text-white/80">
							Software Engineer building scalable web applications.
						</p>
						<div className="flex flex-col xl:flex-row items-center gap-8">
							<Button
								variant="outline"
								size="lg"
								className="uppercase flex items-center gap-2"
							>
								<a
									href="https://1drv.ms/w/c/b3539b99af1996b4/IQBfcD0owK3-Sb5vqC6RzFy9AfiK1GkJ6p0WkVWRWC4Ppto?e=qFece3"
									download={"Grant_Agulue_Resume.pdf"}
									className="flex"
								>
									<span>Download Resume </span>
									<FiDownload className="text-xl" />
								</a>
							</Button>
							<div className="mb-8 xl:mb-0">
								<Socials
									containerStyles="flex gap-6"
									iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Stats />
		</section>
	);
};

export default Home;
