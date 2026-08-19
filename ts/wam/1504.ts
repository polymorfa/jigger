export const WamWebcStorageStat = 1504 as const

export interface WebcStorageStatEvent {
  /** field 1, wire `webc_storage_usage` */
  webcStorageUsage?: number
  /** field 2, wire `webc_storage_quota` */
  webcStorageQuota?: number
  /** field 3, wire `webc_age_of_storage` */
  webcAgeOfStorage?: number
  /** field 4, wire `webc_packing_enabled` */
  webcPackingEnabled?: boolean
}