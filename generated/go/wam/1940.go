const WamWebcDbOpen = 1940 // channel: regular

type WebcDbOpenEvent struct {
	WebcDbName string `wam:"webc_db_name"` // field 1
	WebcDbOpenWasSuccess bool `wam:"webc_db_open_was_success"` // field 2
	WebcDbOpenNumAttempts int64 `wam:"webc_db_open_num_attempts"` // field 3
}