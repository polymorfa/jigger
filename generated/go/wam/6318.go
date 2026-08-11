const WamPsGroupExitExperienceExitDialogInteraction = 6318 // channel: private

type PsGroupExitExperienceExitDialogInteractionEvent struct {
	PsExitExperienceReportingEnabled bool `wam:"ps_exit_experience_reporting_enabled"` // field 1
	PsGroupExitExperienceEnabled bool `wam:"ps_group_exit_experience_enabled"` // field 2
	PsGroupExitExperienceExitDialogAction PSGROUPEXITEXPERIENCEEXITDIALOGACTIONS `wam:"ps_group_exit_experience_exit_dialog_action"` // field 3
	PsGroupExitExperienceGroupJid string `wam:"ps_group_exit_experience_group_jid"` // field 4
	PsGroupExitExperienceTouchPoint GROUPEXITEXPERIENCEORIGIN `wam:"ps_group_exit_experience_touch_point"` // field 6
}