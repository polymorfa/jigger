const WamWebDbVersionNonAnonymous = 4816 // channel: regular

type WebDbVersionNonAnonymousEvent struct {
	WebDbName WEBDBNAMETYPE `wam:"web_db_name"` // field 1
	WebDbVersionNumber int64 `wam:"web_db_version_number"` // field 2
}