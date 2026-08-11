pub const WAM_NATIVE_CONTACTS_NUX_EVENT: u32 = 5788;

#[derive(Debug, Default)]
pub struct NativeContactsNuxEventEvent {
    /// field 1, wire `native_contacts_nux_event_type`
    pub native_contacts_nux_event_type: Option<NATIVECONTACTSNUXEVENTTYPE>,
    /// field 3, wire `native_contacts_nux_entry_point`
    pub native_contacts_nux_entry_point: Option<NATIVECONTACTSNUXENTRYPOINT>,
}