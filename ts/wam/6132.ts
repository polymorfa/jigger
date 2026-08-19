export const WamWebcChatCreate = 6132 as const

export interface WebcChatCreateEvent {
  /** field 1, wire `creation_method` */
  creationMethod?: WEBCCHATCREATECREATIONMETHOD
  /** field 2, wire `no_created` */
  noCreated?: number
}