const WamPsGroupExitExperienceGroupAction = 6332 // channel: private

type PsGroupExitExperienceGroupActionEvent struct {
	PsGroupExitExperienceAction PSGROUPEXITEXPERIENCEACTIONS `wam:"ps_group_exit_experience_action"` // field 1
	PsGroupExitExperienceEnabled bool `wam:"ps_group_exit_experience_enabled"` // field 2
	PsGroupExitExperienceGroupJid string `wam:"ps_group_exit_experience_group_jid"` // field 3
	PsGroupExitExperienceTouchPoint GROUPEXITEXPERIENCEORIGIN `wam:"ps_group_exit_experience_touch_point"` // field 4
}