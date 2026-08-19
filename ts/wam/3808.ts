export const WamPnhRequestRevealAction = 3808 as const

export interface PnhRequestRevealActionEvent {
  /** field 1, wire `pnh_action` */
  pnhAction?: PNHACTIONTYPE
  /** field 2, wire `pnh_chat_party` */
  pnhChatParty?: PNHMESSAGECHATPARTY
  /** field 3, wire `pnh_chat_type` */
  pnhChatType?: PNHCHATTYPETYPE
  /** field 4, wire `pnh_entry_point` */
  pnhEntryPoint?: PNHENTRYPOINTTYPE
  /** field 5, wire `thread_id` */
  threadId?: string
}