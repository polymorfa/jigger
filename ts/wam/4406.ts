export const WamCtwaConsumerDisclosure = 4406 as const

export interface CtwaConsumerDisclosureEvent {
  /** field 1, wire `disclosure_action` */
  disclosureAction?: DISCLOSUREACTION
  /** field 2, wire `disclosure_type` */
  disclosureType?: DISCLOSURETYPE
  /** field 3, wire `ctwa_consumer_disclosure_version` */
  ctwaConsumerDisclosureVersion?: number
  /** field 4, wire `disclosure_entry_point` */
  disclosureEntryPoint?: DISCLOSUREENTRYPOINTTYPE
  /** field 5, wire `disclosure_context` */
  disclosureContext?: DISCLOSURECONTEXTTYPE
  /** field 6, wire `thread_id_hmac` */
  threadIdHmac?: string
}