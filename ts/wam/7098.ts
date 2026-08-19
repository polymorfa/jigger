export const WamDefenseModeQuarantine = 7098 as const

export interface DefenseModeQuarantineEvent {
  /** field 1, wire `quarantine_action` */
  quarantineAction?: DEFENSEMODEQUARANTINEACTION
  /** field 2, wire `defense_mode_quarantine_event_count` */
  defenseModeQuarantineEventCount?: number
  /** field 3, wire `defense_mode_quarantine_is_capi` */
  defenseModeQuarantineIsCapi?: boolean
  /** field 4, wire `jid_domain` */
  jidDomain?: JIDDOMAINTYPE
}