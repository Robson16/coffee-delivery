export function formatCurrency(
  value: number,
  locale: string = 'pt-BR',
  currency: string = 'BRL',
  showCurrencySymbol: boolean = true,
  options?: Intl.NumberFormatOptions,
): string {
  return new Intl.NumberFormat(locale, {
    style: showCurrencySymbol ? 'currency' : 'decimal',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...options,
  }).format(value)
}
