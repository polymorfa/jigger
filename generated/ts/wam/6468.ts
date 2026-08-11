export const WamThreadInteractionDataIntegrity = 6468 as const

export interface ThreadInteractionDataIntegrityEvent {
  /** field 1, wire `block_reason` */
  blockReason?: BLOCKREASON
  /** field 2, wire `is_blocked` */
  isBlocked?: boolean
  /** field 3, wire `is_reported` */
  isReported?: boolean
  /** field 4, wire `smb_marketing_messages_spam_reports` */
  smbMarketingMessagesSpamReports?: number
  /** field 5, wire `spam_reports` */
  spamReports?: number
  /** field 6, wire `thread_ds` */
  threadDs?: string
  /** field 7, wire `thread_id` */
  threadId?: string
  /** field 8, wire `thread_id_by_lid` */
  threadIdByLid?: string
  /** field 9, wire `thread_creation_date` */
  threadCreationDate?: string
}