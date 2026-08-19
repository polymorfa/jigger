const WamBusinessUnmute = 1378 // channel: regular

type BusinessUnmuteEvent struct {
	MuteeId string `wam:"mutee_id"` // field 1
}