export const WamCadminDemote = 3426 as const

export interface CadminDemoteEvent {
  /** field 1, wire `cadmin_demote_origin` */
  cadminDemoteOrigin?: CADMINDEMOTEORIGINTYPE
  /** field 2, wire `cadmin_demote_result` */
  cadminDemoteResult?: CADMINDEMOTERESULTTYPE
  /** field 4, wire `is_last_cadmin_or_creator` */
  isLastCadminOrCreator?: boolean
}