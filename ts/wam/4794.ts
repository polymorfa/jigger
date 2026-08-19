export const WamPrivacyTipAction = 4794 as const

export interface PrivacyTipActionEvent {
  /** field 1, wire `privacy_tip_action_type` */
  privacyTipActionType?: PRIVACYTIPACTIONTYPE
}