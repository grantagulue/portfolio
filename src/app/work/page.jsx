"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
	{
		num: "01",
		category: "frontend",
		title: "Jamify",
		description:
			"A project that uses the Quasar framework to create a music clone mobile app, single page app, or browser extension.",
		stack: [{ name: "React" }, { name: "Css 3" }, { name: "Typescript" }],

		// todo: change the image link
		image:
			"https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png",
		live: "https://spotifyclee.vercel.app",
		github: "https://github.com/grant1x",
	},
	{
		num: "02",
		category: "fullstack",
		title: "Pxe",
		description:
			"When you are staying far from your home or when you go on a trip with friends it is very important to track your expenses so that you can manage things according to your budget and not overspent..",
		stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
		// image broken, change the link
		image:
			"data:image/png;base64,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",
		live: "",
		github: "https://github.com/grant1x",
	},
	{
		num: "03",
		category: "frontend",
		title: "BarScan",
		description:
			"Barcodes and QR codes have revolutionized the way we shop. Customers can now use their smartphones to scan a product and obtain information such as the price or where they can purchase it.",
		stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
		// todo: broken image, change link
		image:
			"https://img.magnific.com/premium-vector/barcode-vector-icon-bar-code-black-icon-realistic-barcode_230281-649.jpg?semt=ais_hybrid&w=740&q=80",
		live: "",
		github: "https://github.com/grant1x",
	},
	{
		num: "04",
		category: "frontend",
		title: "Noteboard",
		description:
			"Noteboard - Your Digital Thought Canvas. Visit http://noteboardd.vercel.app to start organizing your digital life today.",
		stack: [
			{ name: "Nextjs" },
			{ name: "tailwindcss" },
			{ name: "typescript" },
			{ name: "firebase" },
		],
		image:
			"https://play-lh.googleusercontent.com/Kb0Ki_fCgnIvgbA6vQopnFH6SGK7d5JDO51b6EuTYLdGcAfiRISs8m8sICxB2sWZCeM",
		live: "https://noteboardd.vercel.app",
		github: "https://github.com/grant1x",
	},
];

const Work = () => {
	const [project, setProject] = useState(projects[0]);

	const handleSlideChange = (swiper) => {
		// get current slide index
		const currentIndex = swiper.activeIndex;
		// update project state based on current slide index
		setProject(projects[currentIndex]);
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { duration: 0.4, ease: "easeIn" },
			}}
			className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 "
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row xl:gap-[30px] ">
					<div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
						<div className="flex flex-col gap-[30px]">
							{/* outline num */}
							<div className="text-8xl leading-none font-semibold text-transparent text-outline">
								{project.num}
							</div>
							{/* project category */}
							<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize ">
								{project.title}
							</h2>
							{/* project description */}
							<p className="text-white/60">{project.description} </p>
							{/* stack */}
							<ul className="flex gap-4">
								{project.stack.map((item, index) => {
									return (
										<li key={index} className="text-xl text-accent">
											{item.name}
											{/**remove the last comma */}
											{index !== project.stack.length - 1 && ","}
										</li>
									);
								})}
							</ul>
							{/**border */}
							<div className="border border-white/20"></div>
							{/**buttons */}
							<div className="flex items-center gap-4">
								{/**live project button */}
								{project.live && (
									<a
										href={project.live}
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Open live project"
									>
										<TooltipProvider delayDuration={100}>
											<Tooltip>
												<TooltipTrigger className="w-[70px] h-[70px] flex justify-center items-center group">
													<BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
												</TooltipTrigger>
												<TooltipContent>
													<p>Live project</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</a>
								)}
								{/**github project button */}
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Open GitHub repository"
								>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-[70px] h-[70px] flex justify-center items-center group">
												<BsGithub className="text-white text-3xl group-hover:text-accent" />
											</TooltipTrigger>
											<TooltipContent>
												<p>Github repository</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</a>
							</div>
						</div>
					</div>
					<div className="w-full xl:w-[50%]">
						<Swiper
							spaceBetween={30}
							slidesPerView={1}
							className="xl:h-[520px] mb-12"
							onSlideChange={handleSlideChange}
						>
							{projects.map((project, index) => {
								return (
									<SwiperSlide key={index} className="w-full">
										<div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 ">
											{/** overlay */}
											<div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
											{/** image */}
											<div className="relative h-full w-full">
												<Image
													src={project.image}
													fill
													className="object-cover"
													alt=""
												/>
											</div>
										</div>
									</SwiperSlide>
								);
							})}
							{/** slider buttons */}
							<WorkSliderBtns
								containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
								btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transistion-all "
							/>
						</Swiper>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Work;
