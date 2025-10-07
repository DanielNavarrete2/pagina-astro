interface SocialLink{
  name: string;
  href: string;
  icon: string;
  hoverColor: string; // clase de Tailwind para el hover
}

interface SocialSection{
  title: string;
  links: SocialLink[];
}

export const SocialData: SocialSection = {
  title: "Síguenos", // <-- ¡Aquí está el título!
  links: [
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: "/assets/intagram logo.png",
      hoverColor: "hover:text-pink-500",
    },
    {
      name: "X",
      href: "https://x.com",
      icon: "/assets/x logo.png",
      hoverColor: "hover:text-blue-400",
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: "/assets/facebook logo.png",
      hoverColor: "hover:text-blue-600",
    },
  ],
};