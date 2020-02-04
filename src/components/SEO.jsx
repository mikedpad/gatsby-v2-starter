import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ description: propsDescription, meta, title: propsTitle }) => {
  const {
    site: {
      siteMetadata: {
        title: siteTitle,
        description: siteDescription,
        author,
        manifest: { lang },
      },
    },
  } = useStaticQuery(graphql`
    query SEOQuery {
      site {
        siteMetadata {
          title
          description
          author
          manifest {
            lang
          }
        }
      }
    }
  `);

  const title = propsTitle ? `${propsTitle} - ${siteTitle}` : siteTitle;
  const description = propsDescription || siteDescription;

  return (
    <Helmet
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(meta)}
    >
      <html lang={lang} />
      <title>{title}</title>
    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

SEO.defaultProps = {
  meta: [],
  description: ``,
  title: null,
};
