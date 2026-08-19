const WamNativeContactsNuxEvent = 5788 // channel: regular

type NativeContactsNuxEventEvent struct {
	NativeContactsNuxEventType NATIVECONTACTSNUXEVENTTYPE `wam:"native_contacts_nux_event_type"` // field 1
	NativeContactsNuxEntryPoint NATIVECONTACTSNUXENTRYPOINT `wam:"native_contacts_nux_entry_point"` // field 3
}