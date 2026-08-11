export const WamUnknownStanza = 3448 as const

export interface UnknownStanzaEvent {
  /** field 1, wire `unknown_stanza_tag` */
  unknownStanzaTag?: string
  /** field 2, wire `unknown_stanza_type` */
  unknownStanzaType?: string
  /** field 3, wire `unknown_stanza_drop_reason` */
  unknownStanzaDropReason?: number
}