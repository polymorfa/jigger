pub const WAM_NOTIFICATION_DELIVERY: u32 = 3748;

#[derive(Debug, Default)]
pub struct NotificationDeliveryEvent {
    /// field 1, wire `client_message_id`
    pub client_message_id: Option<String>,
    /// field 2, wire `notification_action`
    pub notification_action: Option<NOTIFICATIONACTIONTYPE>,
    /// field 3, wire `notification_delivery_t`
    pub notification_delivery_t: Option<i64>,
    /// field 4, wire `notification_destination`
    pub notification_destination: Option<NOTIFICATIONDESTINATIONTYPE>,
    /// field 5, wire `notification_id`
    pub notification_id: Option<String>,
    /// field 6, wire `notification_source`
    pub notification_source: Option<NOTIFICATIONSOURCETYPE>,
    /// field 7, wire `thread_id`
    pub thread_id: Option<String>,
    /// field 8, wire `ui_notification_type`
    pub ui_notification_type: Option<NOTIFICATIONTYPEENUM>,
    /// field 9, wire `peripheral_device_origin`
    pub peripheral_device_origin: Option<PERIPHERALDEVICETYPE>,
    /// field 10, wire `push_to_notif_t`
    pub push_to_notif_t: Option<String>,
    /// field 11, wire `is_silenced`
    pub is_silenced: Option<bool>,
    /// field 12, wire `triggered_by_offline_message`
    pub triggered_by_offline_message: Option<bool>,
    /// field 13, wire `trace_id_int`
    pub trace_id_int: Option<i64>,
    /// field 14, wire `channel_milestone_value`
    pub channel_milestone_value: Option<i64>,
    /// field 15, wire `cid`
    pub cid: Option<String>,
    /// field 16, wire `post_id`
    pub post_id: Option<String>,
}