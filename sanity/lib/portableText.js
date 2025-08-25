// sanity/lib/portableText.js
import Image from "next/image";

export const ptComponents = {
  types: {
    image: ({ value }) => {
      const url = value?.asset?.url;
      if (!url) return null;
      return (
        <div className="my-4">
          <Image
            src={url}
            alt={value.alt || "Post image"}
            width={1200}
            height={800}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || "#";
      const external = /^https?:\/\//i.test(href);
      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="text-sky-600 underline underline-offset-2"
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-bold my-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold my-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold my-3">{children}</h3>,
    normal: ({ children }) => <p className="my-3 leading-7">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-sky-500 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 my-3 space-y-1">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 my-3 space-y-1">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
};
