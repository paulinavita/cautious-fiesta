
export const getLeadingZeros = (n: string) => {
  if (Number(n) > 100) return n

  const zeros = ('00'+n).slice(-3)
  return zeros
}
export default getLeadingZeros