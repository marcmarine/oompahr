export const normalizeText = (text: string): string => {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

export const getGenderName = (gender: 'M' | 'F') => {
  switch (gender) {
    case 'M':
      return 'male'
    case 'F':
      return 'female'
  }
}
