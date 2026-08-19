export const WamLidMigrationDaily = 5842 as const

export interface LidMigrationDailyEvent {
  /** field 1, wire `completed_migrations` */
  completedMigrations?: string
  /** field 2, wire `number_of_pnh_ctwa_threads_known_mapping` */
  numberOfPnhCtwaThreadsKnownMapping?: number
  /** field 3, wire `number_of_pnh_ctwa_threads_missing_mapping` */
  numberOfPnhCtwaThreadsMissingMapping?: number
  /** field 4, wire `number_of_split_threads` */
  numberOfSplitThreads?: number
  /** field 5, wire `number_of_pn_chats_without_mapping` */
  numberOfPnChatsWithoutMapping?: number
  /** field 6, wire `number_of_user_chats_without_account_lid` */
  numberOfUserChatsWithoutAccountLid?: number
  /** field 7, wire `lid_migration_source` */
  lidMigrationSource?: LIDMIGRATIONSOURCETYPE
  /** field 8, wire `number_of_chats_with_client_assigned_lid` */
  numberOfChatsWithClientAssignedLid?: number
  /** field 9, wire `number_of_deprecated_chats` */
  numberOfDeprecatedChats?: number
  /** field 10, wire `number_of_lid_broadcast_lists` */
  numberOfLidBroadcastLists?: number
  /** field 11, wire `number_of_lid_groups` */
  numberOfLidGroups?: number
  /** field 12, wire `number_of_pn_broadcast_lists` */
  numberOfPnBroadcastLists?: number
  /** field 13, wire `number_of_pn_groups` */
  numberOfPnGroups?: number
  /** field 14, wire `number_of_regular_pn_chats` */
  numberOfRegularPnChats?: number
  /** field 15, wire `number_of_cag_groups` */
  numberOfCagGroups?: number
  /** field 16, wire `number_of_cag_lid_groups` */
  numberOfCagLidGroups?: number
  /** field 17, wire `number_of_lid_only_groups` */
  numberOfLidOnlyGroups?: number
  /** field 18, wire `number_of_mixed_pn_lid_groups` */
  numberOfMixedPnLidGroups?: number
  /** field 19, wire `number_of_pn_only_groups` */
  numberOfPnOnlyGroups?: number
  /** field 20, wire `number_of_pn_only_groups_not_member` */
  numberOfPnOnlyGroupsNotMember?: number
  /** field 21, wire `number_of_pn_only_groups_not_member_all_mapped` */
  numberOfPnOnlyGroupsNotMemberAllMapped?: number
  /** field 22, wire `number_of_pn_only_groups_not_member_unmapped_contacts` */
  numberOfPnOnlyGroupsNotMemberUnmappedContacts?: number
  /** field 23, wire `number_of_pn_only_groups_not_member_unmapped_out_contacts` */
  numberOfPnOnlyGroupsNotMemberUnmappedOutContacts?: number
}