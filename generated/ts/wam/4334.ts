export const WamTsNavigation = 4334 as const

export interface TsNavigationEvent {
  /** field 1, wire `group_size` */
  groupSize?: number
  /** field 2, wire `navigation_destination` */
  navigationDestination?: TSSURFACE
  /** field 3, wire `navigation_source` */
  navigationSource?: TSSURFACE
  /** field 4, wire `relative_timestamp_ms` */
  relativeTimestampMs?: number
  /** field 5, wire `ts_session_id` */
  tsSessionId?: number
  /** field 6, wire `type_of_group` */
  typeOfGroup?: TYPEOFGROUPENUM
  /** field 7, wire `thread_type` */
  threadType?: THREADTYPE
  /** field 19, wire `cid` */
  cid?: string
  /** field 20, wire `smb_catalog_business_vertical` */
  smbCatalogBusinessVertical?: string
  /** field 21, wire `smb_catalog_is_catalog_visible` */
  smbCatalogIsCatalogVisible?: boolean
  /** field 22, wire `smb_catalog_is_toggle_cart` */
  smbCatalogIsToggleCart?: boolean
  /** field 23, wire `entry_point_conversation_initiated` */
  entryPointConversationInitiated?: ENTRYPOINTCONVERSATIONINITIATED
  /** field 24, wire `entry_point_conversion_app` */
  entryPointConversionApp?: string
  /** field 25, wire `entry_point_conversion_source` */
  entryPointConversionSource?: string
  /** field 26, wire `is_cloudapi` */
  isCloudapi?: boolean
  /** field 27, wire `is_onpremises` */
  isOnpremises?: boolean
  /** field 28, wire `is_smb` */
  isSmb?: boolean
  /** field 29, wire `is_catalog_visible` */
  isCatalogVisible?: boolean
  /** field 30, wire `is_meta_ai_thread` */
  isMetaAiThread?: boolean
  /** field 31, wire `referrer_action` */
  referrerAction?: REFERRERACTION
  /** field 32, wire `ts_timestamp_ms` */
  tsTimestampMs?: number
  /** field 33, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 34, wire `navigation_destination_product_area` */
  navigationDestinationProductArea?: PRODUCTAREA
  /** field 35, wire `navigation_destination_view_name` */
  navigationDestinationViewName?: string
  /** field 36, wire `is_canonical_ent_present` */
  isCanonicalEntPresent?: boolean
  /** field 37, wire `trace_id_int` */
  traceIdInt?: number
  /** field 38, wire `canonical_ent_last_validation_ts_ms` */
  canonicalEntLastValidationTsMs?: number
  /** field 39, wire `ai_session_id` */
  aiSessionId?: string
  /** field 40, wire `network_radio_type_event_level` */
  networkRadioTypeEventLevel?: RADIOTYPE
  /** field 41, wire `network_is_wifi_op_number` */
  networkIsWifiOpNumber?: number
  /** field 42, wire `network_radio_type_op_number` */
  networkRadioTypeOpNumber?: number
  /** field 43, wire `network_is_wifi_canonical_op_number` */
  networkIsWifiCanonicalOpNumber?: number
  /** field 44, wire `network_radio_type_canonical_op_number` */
  networkRadioTypeCanonicalOpNumber?: number
}