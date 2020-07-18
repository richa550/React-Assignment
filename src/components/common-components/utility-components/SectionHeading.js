import React from 'react';
import { string } from 'prop-types';

const SectionHeading = ({ heading }) => <h3 className="mb-5">{heading}</h3>;

SectionHeading.propTypes = {
    heading: string.isRequired
};

export { SectionHeading };
