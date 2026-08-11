const WamBusinessMute = 1376 // channel: regular

type BusinessMuteEvent struct {
	MuteeId string `wam:"mutee_id"` // field 1
	MuteT string `wam:"mute_t"` // field 2
}