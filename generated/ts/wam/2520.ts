export const WamMdAppStateDirtyBits = 2520 as const

export interface MdAppStateDirtyBitsEvent {
  /** field 2, wire `dirty_bits_false_positive` */
  dirtyBitsFalsePositive?: boolean
}