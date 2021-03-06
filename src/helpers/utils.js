export const formatNumber = number => {
  return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', minimumFractionDigits: 2 }).format(number)
}

export const buildSortedQuery = (key, args) => {
  return args
    .map(item => {
      return window.encodeURIComponent(key) +
              '=' +
              window.encodeURIComponent(item)
    })
    .join('&')
}
