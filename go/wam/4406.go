const WamCtwaConsumerDisclosure = 4406 // channel: private

type CtwaConsumerDisclosureEvent struct {
	DisclosureAction DISCLOSUREACTION `wam:"disclosure_action"` // field 1
	DisclosureType DISCLOSURETYPE `wam:"disclosure_type"` // field 2
	CtwaConsumerDisclosureVersion int64 `wam:"ctwa_consumer_disclosure_version"` // field 3
	DisclosureEntryPoint DISCLOSUREENTRYPOINTTYPE `wam:"disclosure_entry_point"` // field 4
	DisclosureContext DISCLOSURECONTEXTTYPE `wam:"disclosure_context"` // field 5
	ThreadIdHmac string `wam:"thread_id_hmac"` // field 6
}