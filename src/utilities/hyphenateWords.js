function hyphenateWords(string) {
  let newString = string.toLowerCase().replaceAll(' ', '-')
  newString.replace(/[^a-zA-Z0-9-]/g, '')
  return newString
}

export default hyphenateWords