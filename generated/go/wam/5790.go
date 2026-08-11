const WamWebcMessageProcessingPerf = 5790 // channel: regular

type WebcMessageProcessingPerfEvent struct {
	DecryptionT int64 `wam:"decryption_t"` // field 1
	IsOffline bool `wam:"is_offline"` // field 2
	ParsingT int64 `wam:"parsing_t"` // field 3
	PostProcessingT int64 `wam:"post_processing_t"` // field 4
	PreProcessingT int64 `wam:"pre_processing_t"` // field 5
	ProcessingT int64 `wam:"processing_t"` // field 6
	DbStoringT int64 `wam:"db_storing_t"` // field 7
	LidProcessingT int64 `wam:"lid_processing_t"` // field 8
	ReportTokenValidationT int64 `wam:"report_token_validation_t"` // field 9
}