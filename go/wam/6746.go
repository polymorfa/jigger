const WamSmbQpCallHealth = 6746 // channel: regular

type SmbQpCallHealthEvent struct {
	FetchExceptionMessage string `wam:"fetch_exception_message"` // field 1
	FetchMechanism FETCHMECHANISMENUM `wam:"fetch_mechanism"` // field 2
	FetchResult FETCHRESULTENUM `wam:"fetch_result"` // field 3
}