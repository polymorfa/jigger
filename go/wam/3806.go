const WamPnhDaily = 3806 // channel: regular

type PnhDailyEvent struct {
	CommunityId string `wam:"community_id"` // field 1
	PnhIndicatorClicksChat int64 `wam:"pnh_indicator_clicks_chat"` // field 2
	PnhIndicatorClicksInfoScreen int64 `wam:"pnh_indicator_clicks_info_screen"` // field 3
	ReactionDeleteCount int64 `wam:"reaction_delete_count"` // field 4
	ReactionOpenTrayCount int64 `wam:"reaction_open_tray_count"` // field 5
	TypeOfGroup TYPEOFGROUPENUM `wam:"type_of_group"` // field 6
	MappingMissing int64 `wam:"mapping_missing"` // field 7
	TotalContacts int64 `wam:"total_contacts"` // field 8
}