const WamVideoTranscoder = 1802 // channel: regular

type VideoTranscoderEvent struct {
	TranscoderAlgorithm VIDEOTRANSCODERALGORITHMTYPE `wam:"transcoder_algorithm"` // field 1
	TranscoderResult VIDEOTRANSCODERRESULTTYPE `wam:"transcoder_result"` // field 2
	TranscoderT string `wam:"transcoder_t"` // field 3
	TranscoderIsPassthrough bool `wam:"transcoder_is_passthrough"` // field 4
	TranscoderContainsVideocomposition bool `wam:"transcoder_contains_videocomposition"` // field 5
	TranscoderHasEdits bool `wam:"transcoder_has_edits"` // field 6
	SourceFileSize string `wam:"source_file_size"` // field 7
	SourceDuration string `wam:"source_duration"` // field 8
	SourceWidth string `wam:"source_width"` // field 9
	SourceHeight string `wam:"source_height"` // field 10
	SourceVideoBitRate string `wam:"source_video_bit_rate"` // field 11
	SourceAudioBitRate string `wam:"source_audio_bit_rate"` // field 12
	SourceFrameRate string `wam:"source_frame_rate"` // field 13
	SourceFormat VIDEOTRANSCODERSOURCEFORMATTYPE `wam:"source_format"` // field 14
	TargetFileSize string `wam:"target_file_size"` // field 15
	TargetDuration string `wam:"target_duration"` // field 16
	TargetWidth string `wam:"target_width"` // field 17
	TargetHeight string `wam:"target_height"` // field 18
	TargetVideoBitRate string `wam:"target_video_bit_rate"` // field 19
	TargetAudioBitRate string `wam:"target_audio_bit_rate"` // field 20
	TargetFrameRate string `wam:"target_frame_rate"` // field 21
	TargetFormat VIDEOTRANSCODERTARGETFORMATTYPE `wam:"target_format"` // field 22
	SourceAudioCodec string `wam:"source_audio_codec"` // field 23
	SourceContainerFormat string `wam:"source_container_format"` // field 24
	SourceFileExtension string `wam:"source_file_extension"` // field 25
	SourceMimeType string `wam:"source_mime_type"` // field 26
	SourceVideoCodec string `wam:"source_video_codec"` // field 27
}