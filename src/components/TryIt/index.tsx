import React, { useEffect, useState } from 'react'

import { Input } from '~/components'

import * as S from './styles'

const TryIt = () => {
  const [calculation, setCalculation] = useState<string | number>('')

  const [pureJS, setPureJS] = useState(0)
  const [currencyJS] = useState(0)

  useEffect(() => {
    function handleCalculation() {
      const strCalculation = String(calculation)
      const lastChar = strCalculation.charAt(strCalculation.length - 1)

      const regExp = new RegExp(/\d$/g)

      const lastCharIsANumber = regExp.test(lastChar)

      if (lastCharIsANumber) {
        const pureJSCalc = eval(String(calculation))

        setPureJS(pureJSCalc)
      }
    }

    handleCalculation()
  }, [calculation])

  return (
    <S.Container>
      <Input
        value={calculation}
        label="insira um calculo"
        placeholder="ex. 5.59 - 4"
        onChange={(value: string | number) => setCalculation(value)}
      />

      <span className="mt-2 mb-2 text-4xl leading-none text-primary">=</span>

      <div className="w-full flex items-start justify-between">
        <Input
          disabled
          value={pureJS}
          placeholder="0"
          maxWidth="17rem"
          labelPosition="bottom"
          label="Javascript puro"
          className="text-secondary bg-secondary bg-opacity-20 placeholder-white border-mainBg"
        />

        <Input
          disabled
          placeholder="0"
          maxWidth="17rem"
          value={currencyJS}
          labelPosition="bottom"
          className="text-black bg-primary placeholder-black border-mainBg"
          label={
            <span className="text-primary">
              Com biblioteca{' '}
              <small className="text-3 opacity-30">(currency.js)</small>
            </span>
          }
        />
      </div>
    </S.Container>
  )
}

export default TryIt
