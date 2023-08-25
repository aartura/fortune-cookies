import React from "react";
import { Navigation } from "../components/nav";
import { FortuneCookies } from "../components/fortuneCookies";

export default async function ProjectsPage() {
	return (
		<div className="relative pb-16">
			<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Fortune cookies
					</h2>
					<p className="mt-4 text-zinc-400">
						Need a little bit of sage advice or a quick pick-me-up?
						<br />
						Get the wisdom of your fortune cookie without the calories!
					</p>
				</div>
				<div className="w-full h-px bg-zinc-800" />
				<FortuneCookies />
			</div>
		</div>
	);
}
