import React from 'react';
import { string } from 'prop-types';

const UserName = ({ heading }) => <span className="ml-5">{heading}</span>;

UserName.propTypes = {
    heading: string.isRequired
};

export { UserName };
