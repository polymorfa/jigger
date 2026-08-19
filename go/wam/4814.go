const WamWebDbLoadFromVersionFailureNonAnonymous = 4814 // channel: regular

type WebDbLoadFromVersionFailureNonAnonymousEvent struct {
	WebDbLoader WEBDBLOADERTYPE `wam:"web_db_loader"` // field 1
	WebDbName WEBDBNAMETYPE `wam:"web_db_name"` // field 2
}