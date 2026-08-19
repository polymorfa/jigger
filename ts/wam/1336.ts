export const WamMemoryStat = 1336 as const

export interface MemoryStatEvent {
  /** field 1, wire `working_set_size` */
  workingSetSize?: string
  /** field 2, wire `working_set_peak_size` */
  workingSetPeakSize?: string
  /** field 3, wire `private_bytes` */
  privateBytes?: string
  /** field 4, wire `shared_bytes` */
  sharedBytes?: string
  /** field 5, wire `process_type` */
  processType?: string
  /** field 6, wire `uptime` */
  uptime?: string
  /** field 7, wire `has_verified_number` */
  hasVerifiedNumber?: boolean
  /** field 8, wire `num_messages` */
  numMessages?: string
  /** field 14, wire `app_context` */
  appContext?: string
  /** field 15, wire `app_context_bitfield` */
  appContextBitfield?: number
}