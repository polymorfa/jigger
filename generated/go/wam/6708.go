const WamDangerousFileOpenStatsV2 = 6708 // channel: private

type DangerousFileOpenStatsV2Event struct {
	HarmfulFileWarningClickthroughAction HARMFULFILEWARNINGCLICKTHROUGHACTION `wam:"harmful_file_warning_clickthrough_action"` // field 1
	HarmfulFileWarningSenderRelationship HARMFULFILEWARNINGSENDERRELATIONSHIP `wam:"harmful_file_warning_sender_relationship"` // field 2
}