/*
 *
 * Home view
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Img from 'components/Img';
import BottomNavigation from 'components/BottomNavigation';
import Heroimage from './smallgarden-table.jpg';

export default function render() {
  return (
    <div>
      <Helmet
        title="Home"
        meta={[
          { name: 'description', content: 'Description of Home' },
        ]}
      />
      <FormattedMessage {...messages.header} />
      <BottomNavigation />
      <Img src={Heroimage} alt="react-boilerplate - Logo" />
    </div>
  );
}
