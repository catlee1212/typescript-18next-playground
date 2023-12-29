import { t, changeLanguage } from 'i18next';
import React, { ReactNode } from 'react';
import i18n from './i18n';

export class TranslationComponentExtended extends React.Component {
  render (): ReactNode {
    const languages: any = {
      en: { nativeName: 'English' },
      de: { nativeName: 'Deutsch' }
    }

    return <div>
      {Object.keys(languages).map((language) =>
        <button key={language} className='button' onClick={() => changeLanguage(language)} disabled={i18n.resolvedLanguage === language}>
          {languages[language].nativeName}
        </button>)
      }
      {this.interpolation()}
      {this.numbers()}
      {this.currency()}
      {this.date()}
      {this.plurals()}
      {this.intervalPlurals()}
    </div>;
  }


  interpolation (): ReactNode {
    return <>
      <h1>{t('headlines.interpolation')}</h1>
      <p>{t('interpolation', { name: 'Martin' })}</p>
      <p>{t('name', { name: 'Martin' })}</p>
      <p>{t('greeting', { name: 'Martin' })}</p>

      <pre>{`t('interpolation', { name: 'Martin' })`}</pre>
    </>;
  }

  numbers (): ReactNode {
    return <> <h1>{t('headlines.numbers')}</h1>
      <p>{t('numbers.intlNumber', { val: 1000.1, minimumFractionDigits: 3 })}</p>
      <pre>{`t('numbers.intlNumber', { val: 1000.1, minimumFractionDigits: 3 })`}</pre>
      <hr />
      <p>{t('numbers.intlNumber', { val: 1000.1, formatParams: { val: { minimumFractionDigits: 3 } } })}</p>
      <pre>{`t('numbers.intlNumber', { val: 1000.1, formatParams: { val: { minimumFractionDigits: 3 } } })`}</pre>
      <hr />
      <p>{t('numbers.intlNumberWithOptions', { val: 2000 })}</p>
      <pre>{`t('numbers.intlNumberWithOptions', { val: 2000 })`}</pre>
      <hr />
      <p>{t('numbers.intlNumberWithOptions', { val: 2000, minimumFractionDigits: 3 })}</p>
      <pre>{`t('numbers.intlNumberWithOptions', { val: 2000, minimumFractionDigits: 3 })`}</pre>
      <hr />
      <p>In this following case I defined the number in the german language format but the text is still english
        {t('numbers.intlNumberWithOptions', { val: 2000, lng: 'de' })}</p>
      <pre>{`t('numbers.intlNumberWithOptions', { val: 2000, lng: 'de' })`}</pre>
    </>;
  }

  currency (): ReactNode {
    return <><h1>{t('headlines.currency')}</h1>
      <p>There might be a dollar euro conversion error. since dollar is not the same amount as euro.</p>
      <hr />
      <p>{t('currency.intlCurrencyWithOptions', { val: 2300 })}</p>
      <pre>{`t('currency.intlCurrencyWithOptions', { val: 2300 })`}</pre>
      <hr />
      <p>{t('currency.intlCurrencyWithOptionsSimplified', { val: 2300 })}</p>
      <pre>{`t('currency.intlCurrencyWithOptionsSimplified', { val: 2300 })`}</pre>
    </>;
  }

  date (): ReactNode {
    return <><h1>{t('headlines.date')}</h1>
      <p>{t('dates.intlDateTime', { val: new Date(), interpolation: { escapeValue: false } })}</p>
      <pre>{`t('dates.intlDateTime', { val: new Date(), interpolation: { escapeValue: false } })`}</pre>
    </>;
  }

  plurals (): ReactNode {
    return <>  <h1>{t('headlines.plurals')}</h1>
      <p>{t('rating.key', { count: 0 })}</p>
      <pre>{`t('rating.key', { count: 0 })`}</pre>
      <hr />
      <p>{t('rating.key', { count: 1 })}</p>
      <pre>{`t('rating.key', { count: 1 })}`}</pre>
      <hr />
      <p>{t('rating.key', { count: 5 })}</p>
      <pre>{`t('rating.key', { count: 5 })`}</pre>
      <hr />
      <p>{t('rating.keyWithCount', { count: 1 })}</p>
      <pre>{`t('rating.keyWithCount', { count: 1 })`}</pre>
      <hr />
      <p>{t('rating.keyWithCount', { count: 0 })}</p>
      <pre>{`t('rating.keyWithCount', { count: 0 })`}</pre>
      <hr />
      <p>{t('rating.keyWithCount', { count: 100 })}</p>
      <pre>{`t('rating.keyWithCount', { count: 100 })`}</pre>
    </>;
  }

  intervalPlurals (): ReactNode {
    return <>
      <h1>{t('headlines.intervalPlurals')}</h1>
      <h3>Key1</h3>
      <pre>{`JSON: "key1_interval": "(1)[one item];(2-7)[a few items];(7-inf)[a lot of items];"`}</pre>
      <hr />
      <p>{t('intervalPlurals.key1_interval', { postProcess: 'interval', count: 1 })}</p>
      <pre>{`t('intervalPlurals.key1_interval', { postProcess: 'interval', count: 1 })`}</pre>
      <hr />
      <p>{t('intervalPlurals.key1_interval', { postProcess: 'interval', count: 4 })}</p>
      <pre>{`t('intervalPlurals.key1_interval', { postProcess: 'interval', count: 4 })`}</pre>
      <hr />
      <p>{t('intervalPlurals.key1_interval', { postProcess: 'interval', count: 100 })}</p>
      <pre>{`t('intervalPlurals.key1_interval', { postProcess: 'interval', count: 100 })`}</pre>
      <br />
      <h3>Key2</h3>
      <pre>{`JSON: "key2_interval": "(1)[one item];(2-7)[a few items];"`}</pre>
      <hr />
      <p>{t('intervalPlurals.key2_interval', { postProcess: 'interval', count: 1 })}</p>
      <pre>{`t('intervalPlurals.key2_interval', { postProcess: 'interval', count: 1 })`}</pre>
      <hr />
      <p>{t('intervalPlurals.key2_interval', { postProcess: 'interval', count: 4 })}</p>
      <pre>{`t('intervalPlurals.key2_interval', { postProcess: 'interval', count: 4 })`}</pre>
      <hr />
      <p>{t('intervalPlurals.key2_interval', { postProcess: 'interval', count: 100 })}</p>
      <pre>{`t('intervalPlurals.key2_interval', { postProcess: 'interval', count: 100 })`}</pre>#


    </>;
  }

}
