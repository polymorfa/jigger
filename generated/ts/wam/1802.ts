export const WamVideoTranscoder = 1802 as const

export interface VideoTranscoderEvent {
  /** field 1, wire `transcoder_algorithm` */
  transcoderAlgorithm?: VIDEOTRANSCODERALGORITHMTYPE
  /** field 2, wire `transcoder_result` */
  transcoderResult?: VIDEOTRANSCODERRESULTTYPE
  /** field 3, wire `transcoder_t` */
  transcoderT?: string
  /** field 4, wire `transcoder_is_passthrough` */
  transcoderIsPassthrough?: boolean
  /** field 5, wire `transcoder_contains_videocomposition` */
  transcoderContainsVideocomposition?: boolean
  /** field 6, wire `transcoder_has_edits` */
  transcoderHasEdits?: boolean
  /** field 7, wire `source_file_size` */
  sourceFileSize?: string
  /** field 8, wire `source_duration` */
  sourceDuration?: string
  /** field 9, wire `source_width` */
  sourceWidth?: string
  /** field 10, wire `source_height` */
  sourceHeight?: string
  /** field 11, wire `source_video_bit_rate` */
  sourceVideoBitRate?: string
  /** field 12, wire `source_audio_bit_rate` */
  sourceAudioBitRate?: string
  /** field 13, wire `source_frame_rate` */
  sourceFrameRate?: string
  /** field 14, wire `source_format` */
  sourceFormat?: VIDEOTRANSCODERSOURCEFORMATTYPE
  /** field 15, wire `target_file_size` */
  targetFileSize?: string
  /** field 16, wire `target_duration` */
  targetDuration?: string
  /** field 17, wire `target_width` */
  targetWidth?: string
  /** field 18, wire `target_height` */
  targetHeight?: string
  /** field 19, wire `target_video_bit_rate` */
  targetVideoBitRate?: string
  /** field 20, wire `target_audio_bit_rate` */
  targetAudioBitRate?: string
  /** field 21, wire `target_frame_rate` */
  targetFrameRate?: string
  /** field 22, wire `target_format` */
  targetFormat?: VIDEOTRANSCODERTARGETFORMATTYPE
  /** field 23, wire `source_audio_codec` */
  sourceAudioCodec?: string
  /** field 24, wire `source_container_format` */
  sourceContainerFormat?: string
  /** field 25, wire `source_file_extension` */
  sourceFileExtension?: string
  /** field 26, wire `source_mime_type` */
  sourceMimeType?: string
  /** field 27, wire `source_video_codec` */
  sourceVideoCodec?: string
}