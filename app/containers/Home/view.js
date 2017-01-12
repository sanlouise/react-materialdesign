/*
 *
 * Home view
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import BottomNavigation from 'components/BottomNavigation';

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
    </div>
  );
}
