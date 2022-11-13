function hyphenate(string) {
  let newString = string.toLowerCase().replace(' ', '-')
  newString.replace(/[^a-zA-Z0-9 ]/g, '')
  return newString
}

export default hyphenate