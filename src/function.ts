import type { Fn, Nullable } from './types'

/**
 * Call every function in an array
 */
export function batchInvoke(functions: Nullable<Fn>[]) {
  functions.forEach(fn => fn && fn())
}

/**
 * Call the function, returning the result
 */
export function invoke<T>(fn: () => T): T {
  return fn()
}

/**
 * Pass the value through the callback, and return the value
 *
 * @example
 * ```
 * function createUser(name: string): User {
 *   return tap(new User, user => {
 *     user.name = name
 *   })
 * }
 * ```
 */
export function tap<T>(value: T, callback: (value: T) => void): T {
  callback(value)
  return value
}
