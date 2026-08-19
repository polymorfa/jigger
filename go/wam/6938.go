const WamPsRichOrderStatusMessageInconsistentPayloadReceived = 6938 // channel: private

type PsRichOrderStatusMessageInconsistentPayloadReceivedEvent struct {
	BusinessJid string `wam:"business_jid"` // field 1
	HasCurrencyChanged bool `wam:"has_currency_changed"` // field 2
	HasHeaderImageChanged bool `wam:"has_header_image_changed"` // field 3
	HasItemImageChanged bool `wam:"has_item_image_changed"` // field 4
	HasItemNameChanged bool `wam:"has_item_name_changed"` // field 5
	HasItemNumberChanged bool `wam:"has_item_number_changed"` // field 6
	HasItemPriceChanged bool `wam:"has_item_price_changed"` // field 7
	HasItemQuantityChanged bool `wam:"has_item_quantity_changed"` // field 8
	HasItemVariantChanged bool `wam:"has_item_variant_changed"` // field 9
}