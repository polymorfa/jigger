const WamWebcStorageStat = 1504 // channel: regular

type WebcStorageStatEvent struct {
	WebcStorageUsage int64 `wam:"webc_storage_usage"` // field 1
	WebcStorageQuota int64 `wam:"webc_storage_quota"` // field 2
	WebcAgeOfStorage int64 `wam:"webc_age_of_storage"` // field 3
	WebcPackingEnabled bool `wam:"webc_packing_enabled"` // field 4
}