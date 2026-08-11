export const WamSendDocument = 2172 as const

export interface SendDocumentEvent {
  /** field 1, wire `document_size` */
  documentSize?: string
  /** field 2, wire `document_type` */
  documentType?: DOCUMENTTYPE
  /** field 3, wire `document_ext` */
  documentExt?: string
  /** field 4, wire `document_page_size` */
  documentPageSize?: number
}