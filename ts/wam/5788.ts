export const WamNativeContactsNuxEvent = 5788 as const

export interface NativeContactsNuxEventEvent {
  /** field 1, wire `native_contacts_nux_event_type` */
  nativeContactsNuxEventType?: NATIVECONTACTSNUXEVENTTYPE
  /** field 3, wire `native_contacts_nux_entry_point` */
  nativeContactsNuxEntryPoint?: NATIVECONTACTSNUXENTRYPOINT
}