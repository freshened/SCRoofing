export const ENCODED_EMAIL = "bW9jLmduaWZvb3JkYXJub2N0cmF1dHNAb2ZuaQ=="

export function decodeEmail(encoded: string): string {
  try {
    const decoded = atob(encoded)
    const reversed = decoded.split("").reverse().join("")
    return reversed
  } catch {
    return ""
  }
}

