export const WamPsIdUpdate = 2862 as const

export interface PsIdUpdateEvent {
  /** field 1, wire `ps_id_key` */
  psIdKey?: number
  /** field 2, wire `ps_id_action` */
  psIdAction?: PSIDACTION
  /** field 3, wire `ps_id_rotation_frequence` */
  psIdRotationFrequence?: number
  /** field 4, wire `is_from_wamsys` */
  isFromWamsys?: boolean
}