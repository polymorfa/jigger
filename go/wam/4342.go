const WamSuspendedGroupDelete = 4342 // channel: private

type SuspendedGroupDeleteEvent struct {
	DeleteBtnSource DELETESUSPENDEDGROUPBTN `wam:"delete_btn_source"` // field 1
}