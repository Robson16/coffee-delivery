import { useState, type FocusEvent, type InputHTMLAttributes } from 'react'
import type { FieldError } from 'react-hook-form'
import { InputContainer, InputMessage, InputWrapper } from './styles'

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  gridArea?: string
  optional?: boolean
  error?: FieldError
}

export function InputText({
  gridArea,
  optional,
  error,
  onFocus,
  onBlur,
  ...rest
}: InputTextProps) {
  const [isFocused, setIsFocused] = useState(false)

  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true)
    onFocus?.(event)
  }

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(false)
    onBlur?.(event)
  }

  return (
    <InputWrapper $gridArea={gridArea}>
      <InputContainer data-state={isFocused ? 'focused' : 'blurred'}>
        <input
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
        />
        {optional ? <span>Opcional</span> : null}
      </InputContainer>

      {error?.message ? <InputMessage>{error.message}</InputMessage> : null}
    </InputWrapper>
  )
}
