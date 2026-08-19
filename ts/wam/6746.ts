export const WamSmbQpCallHealth = 6746 as const

export interface SmbQpCallHealthEvent {
  /** field 1, wire `fetch_exception_message` */
  fetchExceptionMessage?: string
  /** field 2, wire `fetch_mechanism` */
  fetchMechanism?: FETCHMECHANISMENUM
  /** field 3, wire `fetch_result` */
  fetchResult?: FETCHRESULTENUM
}