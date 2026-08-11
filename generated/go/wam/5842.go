const WamLidMigrationDaily = 5842 // channel: regular

type LidMigrationDailyEvent struct {
	CompletedMigrations string `wam:"completed_migrations"` // field 1
	NumberOfPnhCtwaThreadsKnownMapping int64 `wam:"number_of_pnh_ctwa_threads_known_mapping"` // field 2
	NumberOfPnhCtwaThreadsMissingMapping int64 `wam:"number_of_pnh_ctwa_threads_missing_mapping"` // field 3
	NumberOfSplitThreads int64 `wam:"number_of_split_threads"` // field 4
	NumberOfPnChatsWithoutMapping int64 `wam:"number_of_pn_chats_without_mapping"` // field 5
	NumberOfUserChatsWithoutAccountLid int64 `wam:"number_of_user_chats_without_account_lid"` // field 6
	LidMigrationSource LIDMIGRATIONSOURCETYPE `wam:"lid_migration_source"` // field 7
	NumberOfChatsWithClientAssignedLid int64 `wam:"number_of_chats_with_client_assigned_lid"` // field 8
	NumberOfDeprecatedChats int64 `wam:"number_of_deprecated_chats"` // field 9
	NumberOfLidBroadcastLists int64 `wam:"number_of_lid_broadcast_lists"` // field 10
	NumberOfLidGroups int64 `wam:"number_of_lid_groups"` // field 11
	NumberOfPnBroadcastLists int64 `wam:"number_of_pn_broadcast_lists"` // field 12
	NumberOfPnGroups int64 `wam:"number_of_pn_groups"` // field 13
	NumberOfRegularPnChats int64 `wam:"number_of_regular_pn_chats"` // field 14
	NumberOfCagGroups int64 `wam:"number_of_cag_groups"` // field 15
	NumberOfCagLidGroups int64 `wam:"number_of_cag_lid_groups"` // field 16
	NumberOfLidOnlyGroups int64 `wam:"number_of_lid_only_groups"` // field 17
	NumberOfMixedPnLidGroups int64 `wam:"number_of_mixed_pn_lid_groups"` // field 18
	NumberOfPnOnlyGroups int64 `wam:"number_of_pn_only_groups"` // field 19
	NumberOfPnOnlyGroupsNotMember int64 `wam:"number_of_pn_only_groups_not_member"` // field 20
	NumberOfPnOnlyGroupsNotMemberAllMapped int64 `wam:"number_of_pn_only_groups_not_member_all_mapped"` // field 21
	NumberOfPnOnlyGroupsNotMemberUnmappedContacts int64 `wam:"number_of_pn_only_groups_not_member_unmapped_contacts"` // field 22
	NumberOfPnOnlyGroupsNotMemberUnmappedOutContacts int64 `wam:"number_of_pn_only_groups_not_member_unmapped_out_contacts"` // field 23
}