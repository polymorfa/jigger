const WamWebcChatCreate = 6132 // channel: regular

type WebcChatCreateEvent struct {
	CreationMethod WEBCCHATCREATECREATIONMETHOD `wam:"creation_method"` // field 1
	NoCreated int64 `wam:"no_created"` // field 2
}