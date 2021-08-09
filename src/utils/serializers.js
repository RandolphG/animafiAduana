import React from 'react';
import Img from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';

const serializers = {
  types: {
    figure: ({ node }) => {
      const fluidProps = getFluidGatsbyImage(
        node.asset._ref,
        { maxWidth: 800 },
        { projectId: '72m24xcw', dataset: 'production' }
      );
      return <Img fluid={fluidProps} alt={node.alt || 'case study'} />;
    },
    // to pass classname to a 'p'
    // block: ({ children }) => <p className="big">{children}</p>,
  },
  marks: {
    /* eslint-disable */
    // link: (props) => <pre>{JSON.stringify(props, null, 2)}</pre>,
    link: ({ children, mark }) => (
      <a href={mark.href} target="_blank" rel="noreferrer">
        {children}
      </a>
    ),
    /* eslint-enable */
  },
};

export default serializers;
