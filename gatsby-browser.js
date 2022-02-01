// gatsby-browser.js
import React from 'react';

import Layout from './src/components/Layout'

import './src/styles/reset.css'

import './src/styles/index.css'

export const wrapRootElement = ({ element }) => {
  return (
    <Layout>{element}</Layout>
  );
}