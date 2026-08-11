const WamOrderDetailsActionsSmb = 3456 // channel: regular

type OrderDetailsActionsSmbEvent struct {
	AcceptedPayMethods string `wam:"accepted_pay_methods"` // field 1
	ActionCategory string `wam:"action_category"` // field 2
	ExtraAttributes string `wam:"extra_attributes"` // field 3
	HasAddedPrice bool `wam:"has_added_price"` // field 4
	HasCatalog bool `wam:"has_catalog"` // field 5
	HasNote bool `wam:"has_note"` // field 6
	OrderDetailEntryPoint string `wam:"order_detail_entry_point"` // field 7
	OrderDetailsCreationAction ORDERDETAILSCREATIONACTION `wam:"order_details_creation_action"` // field 8
	PaymentStatus bool `wam:"payment_status"` // field 9
	PaymentType string `wam:"payment_type"` // field 10
	OrderEligibleToSend bool `wam:"order_eligible_to_send"` // field 11
	SharingOrderStatusEvents bool `wam:"sharing_order_status_events"` // field 12
	EntryPointConversionSource string `wam:"entry_point_conversion_source"` // field 13
	LastMessageDirection LASTMESSAGEDIRECTION `wam:"last_message_direction"` // field 14
	MessageDepth int64 `wam:"message_depth"` // field 15
	ThreadIdHmac string `wam:"thread_id_hmac"` // field 16
}