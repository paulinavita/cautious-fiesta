import React, { ReactNode, createContext } from 'react';
import { withTranslation } from 'react-i18next';
import '../lib/i18n';

export const i18nContext = createContext({
  t: (key, data) => {},
  i18n: {}
})

class i18nProvider extends React.Component {
  render () {
    const { t, i18n, children } = this.props
     return (
      <i18nContext.Provider value={{ t, i18n }}>
        { children }
      </i18nContext.Provider>
    )
  }
}

export default withTranslation()(i18nProvider)