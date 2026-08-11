export const WamAndroidMessageSendPerf = 1994 as const

export interface AndroidMessageSendPerfEvent {
  /** field 1, wire `duration_t` */
  durationT?: string
  /** field 2, wire `send_stage` */
  sendStage?: CLIENTMESSAGESENDSTAGE
  /** field 3, wire `media_type` */
  mediaType?: MEDIATYPE
  /** field 4, wire `message_type` */
  messageType?: MESSAGETYPE
  /** field 8, wire `is_message_forward` */
  isMessageForward?: boolean
  /** field 9, wire `is_message_fanout` */
  isMessageFanout?: boolean
  /** field 10, wire `send_retry_count` */
  sendRetryCount?: number
  /** field 11, wire `duration_abs` */
  durationAbs?: string
  /** field 12, wire `duration_relative` */
  durationRelative?: string
  /** field 13, wire `send_count` */
  sendCount?: number
  /** field 14, wire `network_was_disconnected` */
  networkWasDisconnected?: boolean
  /** field 15, wire `fetch_prekeys` */
  fetchPrekeys?: boolean
  /** field 16, wire `app_restart` */
  appRestart?: boolean
  /** field 17, wire `group_size_bucket` */
  groupSizeBucket?: CLIENTGROUPSIZEBUCKET
  /** field 18, wire `jobs_in_queue` */
  jobsInQueue?: number
  /** field 19, wire `threads_in_execution` */
  threadsInExecution?: number
  /** field 20, wire `target_device_group_size_bucket` */
  targetDeviceGroupSizeBucket?: CLIENTGROUPSIZEBUCKET
  /** field 21, wire `fetch_prekeys_percentage` */
  fetchPrekeysPercentage?: number
  /** field 23, wire `sender_key_distribution_count_percentage` */
  senderKeyDistributionCountPercentage?: number
  /** field 24, wire `is_revoke_message` */
  isRevokeMessage?: boolean
  /** field 25, wire `sessions_missing_when_composing` */
  sessionsMissingWhenComposing?: boolean
  /** field 26, wire `device_size_bucket` */
  deviceSizeBucket?: SIZEBUCKET
  /** field 27, wire `is_e2e_backfill` */
  isE2eBackfill?: boolean
  /** field 28, wire `prekeys_eligible_for_prallel_processing` */
  prekeysEligibleForPrallelProcessing?: boolean
  /** field 29, wire `is_view_once` */
  isViewOnce?: boolean
  /** field 30, wire `message_is_first_user_message` */
  messageIsFirstUserMessage?: boolean
  /** field 31, wire `message_is_invisible` */
  messageIsInvisible?: boolean
  /** field 32, wire `bucketed_sender_key_distribution_count_percentage` */
  bucketedSenderKeyDistributionCountPercentage?: number
  /** field 33, wire `is_directed_message` */
  isDirectedMessage?: boolean
  /** field 34, wire `phone_cores` */
  phoneCores?: number
  /** field 35, wire `bucketed_sender_key_distribution_hash_time` */
  bucketedSenderKeyDistributionHashTime?: number
  /** field 36, wire `device_count` */
  deviceCount?: number
  /** field 37, wire `participant_count` */
  participantCount?: number
  /** field 38, wire `type_of_group` */
  typeOfGroup?: TYPEOFGROUPENUM
  /** field 39, wire `receiver_device_count` */
  receiverDeviceCount?: number
  /** field 40, wire `sender_device_count` */
  senderDeviceCount?: number
  /** field 41, wire `is_lid` */
  isLid?: boolean
  /** field 42, wire `edit_type` */
  editType?: EDITTYPE
  /** field 44, wire `running_tasks` */
  runningTasks?: string
  /** field 45, wire `invisible_message_category` */
  invisibleMessageCategory?: INVISIBLEMESSAGECATEGORYTYPE
  /** field 46, wire `user_to_device_size_bucket` */
  userToDeviceSizeBucket?: string
  /** field 47, wire `agent_engagement_type` */
  agentEngagementType?: AGENTENGAGEMENTENUMTYPE
  /** field 48, wire `bot_type` */
  botType?: BOTTYPE
  /** field 49, wire `is_pq` */
  isPq?: boolean
  /** field 50, wire `message_send_result` */
  messageSendResult?: MESSAGESENDRESULTTYPE
}