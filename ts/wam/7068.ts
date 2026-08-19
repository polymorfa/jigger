export const WamDialogEvent = 7068 as const

export interface DialogEventEvent {
  /** field 1, wire `dialog_event_source` */
  dialogEventSource?: string
  /** field 2, wire `dialog_event_type` */
  dialogEventType?: DIALOGEVENTTYPE
  /** field 3, wire `dialog_name` */
  dialogName?: DIALOGNAMETYPE
}