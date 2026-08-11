const WamMdLabelSyncTracking = 7638 // channel: regular

type MdLabelSyncTrackingEvent struct {
	LabelSyncDeviceRole LABELSYNCDEVICEROLETYPE `wam:"label_sync_device_role"` // field 1
	LabelSyncDirection LABELSYNCDIRECTIONTYPE `wam:"label_sync_direction"` // field 2
	LabelSyncHasPending bool `wam:"label_sync_has_pending"` // field 3
	LabelSyncHash string `wam:"label_sync_hash"` // field 4
	LabelSyncIsCapiHosted bool `wam:"label_sync_is_capi_hosted"` // field 5
	LabelSyncIsLabeled bool `wam:"label_sync_is_labeled"` // field 6
	LabelSyncResult LABELSYNCRESULTTYPE `wam:"label_sync_result"` // field 7
	LabelSyncTimestamp int64 `wam:"label_sync_timestamp"` // field 8
	LabelSyncType LABELSYNCTYPEENUM `wam:"label_sync_type"` // field 9
	LabelSyncPredefinedId int64 `wam:"label_sync_predefined_id"` // field 10
}