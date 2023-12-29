import { t, changeLanguage } from 'i18next';
import React, { ReactNode } from 'react';
import i18n from './i18n';

interface TranslationState {
  count: number
}
export class TranslationComponent extends React.Component<{}, TranslationState>  {

  constructor (props: any) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render (): ReactNode {
    const languages: any = {
      en: { nativeName: 'English' },
      de: { nativeName: 'Deutsch' }
    }

    return <div>
      {Object.keys(languages).map((language) =>
        <button className='button' key={language} onClick={() => changeLanguage(language)} disabled={i18n.resolvedLanguage === language}>
          {languages[language].nativeName}
        </button>)
      }
      <div>{t('greeting', { name: "Martin" })}</div>
      <p>{t('minimal.todaysDate', { val: new Date(), interpolation: { escapeValue: false } })}
        {t('minimal.simpleText')}
        <span className='catCount'>{t('minimal.plurals.keyWithCount', { count: this.state.count })}</span>
        {t('minimal.currencyNumber', { val: 2300 })}
      </p>
      <button className='buttonCats' onClick={this.moreCats.bind(this, this.state.count)}>{t('minimal.plurals.key', { count: 2 })} </button>
    </div>;
  }

  moreCats (counts: number): void {
    this.setState({ count: counts + 1 })
  }
}
