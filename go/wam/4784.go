const WamWebDbVersionsSource = 4784 // channel: regular

type WebDbVersionsSourceEvent struct {
	WebDbVersionSource WEBDBVERSIONSOURCETYPE `wam:"web_db_version_source"` // field 1
	WebSchemaInitiator WEBSCHEMAINITIATORTYPE `wam:"web_schema_initiator"` // field 2
}