import Link from "next/link";


// Subcomponent for Footer Columns
export const FooterColumn: React.FC<{ title: string; links: string[] }> = ({
    title,
    links,
  }) => (
    <div className="md:max-w-xs">
      <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">{title}</h3>
      <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
        {links.map((text, index) => (
          <li key={index}>
            <Link href="/" className="hover:text-white transition-colors">
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );