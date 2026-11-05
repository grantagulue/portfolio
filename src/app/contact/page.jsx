"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const info = [
	{
		icon: <FaEnvelope />,
		title: "Email",
		description: "grantagulue@gmail.com",
	},
];

const Contact = () => {
	const [message, setMessage] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const fullBodyText = `From: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;

		const encodedBody = encodeURIComponent(fullBodyText);

		const encodedSubject = encodeURIComponent(
			"Portfolio Website Contact Inquiry",
		);

		window.location.href = `mailto:grantagulue@://gmail.com${encodedSubject}&body=${encodedBody}`;
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { duration: 0.4, ease: "easeIn" },
			}}
			className="py-6"
		>
			<div className="container mx-auto">
				{/** form */}
				<div className="flex flex-col xl:flex-row gap-[30px]">
					<div className="xl:w-[54%] order-2 xl:order-none">
						<form
							className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
							onSubmit={handleSubmit}
						>
							<h3 className="text-4xl text-accent">Contact Me</h3>
							{/* input */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<Input
									type="email"
									placeholder="Email address"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
								<Input
									type="phone"
									placeholder="Phone number"
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
								/>
							</div>
							{/* text area */}
							<Textarea
								className="h-[200px] "
								placeholder="Type your message here."
								value={message}
								onChange={(e) => {
									setMessage(e.target.value);
								}}
							/>
							{/* btn */}
							<Button type="submit" size="md" className="max-w-40">
								Send message
							</Button>
						</form>
					</div>
					<div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
						<ul className="flex flex-col gap-10">
							{info.map((item, index) => {
								return (
									<li key={index} className="flex items-center gap-6">
										<div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center ">
											<div className="text-[28px]">{item.icon}</div>
										</div>
										<div className="flex-1">
											<p className="text-white/60">{item.title}</p>
											<h3 className="text-xl">{item.description}</h3>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Contact;
