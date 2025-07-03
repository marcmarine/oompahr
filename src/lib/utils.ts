export const normalize = (str: string) => str.toLowerCase()

export const getGenderName = (gender: 'M' | 'F') => {
  switch (gender) {
    case 'M':
      return 'male'
    case 'F':
      return 'female'
  }
}
