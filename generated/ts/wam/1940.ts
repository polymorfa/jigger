export const WamWebcDbOpen = 1940 as const

export interface WebcDbOpenEvent {
  /** field 1, wire `webc_db_name` */
  webcDbName?: string
  /** field 2, wire `webc_db_open_was_success` */
  webcDbOpenWasSuccess?: boolean
  /** field 3, wire `webc_db_open_num_attempts` */
  webcDbOpenNumAttempts?: number
}