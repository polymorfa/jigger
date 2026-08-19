__d("WAWebLeaveCommunityAnnouncementGroupPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebModalManager",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.isArchived, n = e.isCommunityCreator, a = e.onArchive, i = e.onClose, l = i != null ? i : o("WAWebModalManager").closeModalManager, c = s._(
			/*BTDS*/
			""
		);
		return n && (c = s._(
			/*BTDS*/
			""
		)), u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, babelHelpers.extends({
			testid: "leave-cag-as-admin-popup",
			onOK: l,
			okText: r("WAWebFbtCommon")("Cancel")
		}, !t && {
			onCancel: a,
			cancelText: r("WAWebFbtCommon")("Archive instead")
		}, { children: c }));
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t = e.isArchived, n = e.onArchive, a = e.onClose, i = a != null ? a : o("WAWebModalManager").closeModalManager;
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, babelHelpers.extends({ testid: "leave-cag-as-admin-popup" }, t ? {
			okText: r("WAWebFbtCommon")("OK"),
			onOK: i
		} : {
			okText: r("WAWebFbtCommon")("Archive instead"),
			onOK: n,
			cancelText: r("WAWebFbtCommon")("OK"),
			onCancel: i
		}, { children: t ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.LeaveCommunityAnnouncementGroupAdminPopup = c, l.LeaveCommunityAnnouncementGroupMemberPopup = d;
}), 226);
