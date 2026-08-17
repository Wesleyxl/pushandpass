export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(iso))
}

export function formatDateTime(iso: string): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(iso))
}

export function formatDayMonth(iso: string): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
  }).format(new Date(iso))
}

export function relativeFromNow(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime()
  const hours = Math.round(diff / 3_600_000)
  if (hours < 24) return `há ${Math.max(1, hours)} hora${hours === 1 ? '' : 's'}`
  const days = Math.round(hours / 24)
  return `há ${days} dia${days === 1 ? '' : 's'}`
}

export function flagEmoji(countryCode: string): string {
  return countryCode
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
}
