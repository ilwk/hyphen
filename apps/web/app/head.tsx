interface SiteConfig {
  name: string;
  description: string;
  links: {
    github: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'hyphen',
  description: 'React best practices',
  links: {
    github: 'https://github.com/ilwk',
  },
};

export default function Head() {
  const url = 'http://localhost:3000';
  const ogUrl = new URL(`${url}/og.jpg`);

  return (
    <>
      <title>Hyphen</title>
      <meta charSet="utf-8" />
      <meta name="description" content={siteConfig.description} />

      <meta
        content="width=device-width, initial-scale=1"
        name="viewport"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteConfig.name} />
      <meta
        property="og:description"
        content={siteConfig.description}
      />
      <meta property="og:url" content={url?.toString()} />
      <meta property="og:image" content={ogUrl.toString()} />
      <meta name="twitter:title" content={siteConfig.name} />
      <meta
        name="twitter:description"
        content={siteConfig.description}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url?.toString()} />
      <meta name="twitter:image" content={ogUrl.toString()} />
    </>
  );
}
