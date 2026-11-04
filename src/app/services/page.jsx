"use client";

import { motion } from "framer-motion";

const services = [
	{
		title: "Frontend",
		description:
			"Building intuitive, pixel-perfect web applications with a focus on seamless user experience, clean architecture, and modern frontend technologies.",
		href: "",
	},
	{
		title: "Backend",
		description:
			"Developing secure, scalable backend APIs and data systems designed to handle heavy loads and complex processing seamlessly behind the scenes.",
		href: "",
	},
	{
		title: "Systems",
		description: "Engineering core system infrastructure and distributed workflows optimized for maximum speed, fault tolerance, and efficiency.",
	},
];

const Services = () => {
	return (
		<section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ">
			<div className="container mx-auto">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.4,
							ease: "easeIn",
						},
					}}
					className="grid grid-cols-1 md:grid-cols-2 gap-[60px] "
				>
					{services.map((service, index) => {
						return (
							<div
								key={index}
								className="flex-1 flex flex-col justify-center gap-6 group"
							>
								{/* top */}
								<div className="w-full flex justify-between items-center">
									<div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
										{index + 1}
									</div>
								</div>
								{/* title */}
								<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
									{service.title}
								</h2>
								{/* description */}
								<p className="text-white/60">{service.description} </p>
								{/* border */}
								<div className="border-b border-white/20 w-full"></div>
							</div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
};

export default Services;