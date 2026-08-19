__d("WAWebGroupFromGroupSection.react", [
	"fbt",
	"WAWebABProps",
	"WAWebChatInfoDrawerRow.react",
	"WAWebChatInfoDrawerSection.react",
	"WAWebContactGetters",
	"WAWebDrawerManager",
	"WAWebGroupGatingUtils",
	"WAWebGroupType",
	"WAWebKeyboardTabUtils",
	"WAWebNewGroupFlowLoadable",
	"WAWebWamEnumGroupCreateEntryPoint",
	"WDSIconIcGroupAddFilled.react",
	"react",
	"useWAWebEventTargetValue",
	"useWAWebIAmGroupAdmin",
	"useWAWebIAmGroupMember"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { section: {
		paddingInlineStart: "x1c1uobl",
		paddingInlineEnd: "xyri2b",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} };
	function d(e) {
		var t = e.groupMetadata, n = r("useWAWebIAmGroupMember")(t), a = r("useWAWebIAmGroupAdmin")(t), i = r("useWAWebEventTargetValue")(t.participants, [
			"bulk_add",
			"bulk_remove",
			"reset"
		], function() {
			return t.participants.length;
		});
		if (!n || t.groupType === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP || t.groupType === o("WAWebGroupType").GroupType.COMMUNITY || t.isSuspendedOrTerminated() || i > o("WAWebGroupGatingUtils").GFG_GROUP_SIZE_THRESHOLD && !a || !o("WAWebABProps").getABPropConfigValue("group_from_group")) return null;
		var l = function() {
			var e = t.participants.filter(function(e) {
				return !o("WAWebContactGetters").getIsMe(e.contact);
			}).map(function(e) {
				return e.contact;
			});
			o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable, {
				initialParticipants: e,
				sourceGroupMembers: e,
				groupCreateEntryPoint: o("WAWebWamEnumGroupCreateEntryPoint").GROUP_CREATE_ENTRY_POINT.GROUP_FROM_GROUP_ROW,
				onEnd: o("WAWebDrawerManager").closeDrawerLeft,
				onCreateGroup: async function(t) {
					await t, o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
				},
				isSubFlow: !1
			}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
		};
		return u.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
			xstyle: c.section,
			children: u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
				testid: "group-from-group-row",
				icon: u.jsx(r("WDSIconIcGroupAddFilled.react"), {}),
				onClick: l,
				title: u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: s._(
					/*BTDS*/
					""
				) }),
				secondaryTitle: u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowSecondaryTitleRefreshed, { title: s._(
					/*BTDS*/
					""
				) })
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
