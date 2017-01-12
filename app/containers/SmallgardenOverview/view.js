/*
 *
 * SmallgardenOverview view
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function render() {
  return (
    <div>
      <Helmet
        title="SmallgardenOverview"
        meta={[
          { name: 'description', content: 'Description of SmallgardenOverview' },
        ]}
      />
      <FormattedMessage {...messages.header} />
    </div>
  );
}
