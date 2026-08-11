const WamPsGroupExitExperienceExitDeleteConfirmationDialogUiInteraction = 6316 // channel: private

type PsGroupExitExperienceExitDeleteConfirmationDialogUiInteractionEvent struct {
	PsGroupExitExperienceDeleteConfirmationDialogAction PSGROUPEXITEXPERIENCEDELETECONFIRMATIONDIALOGACTIONS `wam:"ps_group_exit_experience_delete_confirmation_dialog_action"` // field 1
	PsGroupExitExperienceGroupJid string `wam:"ps_group_exit_experience_group_jid"` // field 2
	PsGroupExitExperienceTouchPoint GROUPEXITEXPERIENCEORIGIN `wam:"ps_group_exit_experience_touch_point"` // field 4
}