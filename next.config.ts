import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/docker_certification",
        destination:
          "https://www.linkedin.com/learning/certificates/8013aa11ef502a118f9985defe0cb5294b1090f78ba3d99c8b24e3fc9755ef6f?trk=share_certificate ",
        permanent: false, 
      },
    ];
  },
};

export default nextConfig;
