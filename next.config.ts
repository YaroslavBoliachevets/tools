import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "kdtu.tech",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
