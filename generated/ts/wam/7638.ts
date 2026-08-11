export const WamMdLabelSyncTracking = 7638 as const

export interface MdLabelSyncTrackingEvent {
  /** field 1, wire `label_sync_device_role` */
  labelSyncDeviceRole?: LABELSYNCDEVICEROLETYPE
  /** field 2, wire `label_sync_direction` */
  labelSyncDirection?: LABELSYNCDIRECTIONTYPE
  /** field 3, wire `label_sync_has_pending` */
  labelSyncHasPending?: boolean
  /** field 4, wire `label_sync_hash` */
  labelSyncHash?: string
  /** field 5, wire `label_sync_is_capi_hosted` */
  labelSyncIsCapiHosted?: boolean
  /** field 6, wire `label_sync_is_labeled` */
  labelSyncIsLabeled?: boolean
  /** field 7, wire `label_sync_result` */
  labelSyncResult?: LABELSYNCRESULTTYPE
  /** field 8, wire `label_sync_timestamp` */
  labelSyncTimestamp?: number
  /** field 9, wire `label_sync_type` */
  labelSyncType?: LABELSYNCTYPEENUM
  /** field 10, wire `label_sync_predefined_id` */
  labelSyncPredefinedId?: number
}