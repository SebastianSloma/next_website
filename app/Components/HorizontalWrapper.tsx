'use client';

import React from 'react';

interface Props {
	children: React.ReactNode;
}

const HorizontalWrapper = ({ children }: Props) => {
	return <div>{children}</div>;
};

export default HorizontalWrapper;
