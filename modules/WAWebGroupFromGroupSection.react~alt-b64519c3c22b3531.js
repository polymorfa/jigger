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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(10), n = e.groupMetadata, a = r("useWAWebIAmGroupMember")(n), i = r("useWAWebIAmGroupAdmin")(n), l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = [
			"bulk_add",
			"bulk_remove",
			"reset"
		], t[0] = l) : l = t[0];
		var d;
		t[1] !== n.participants.length ? (d = function() {
			return n.participants.length;
		}, t[1] = n.participants.length, t[2] = d) : d = t[2];
		var f = r("useWAWebEventTargetValue")(n.participants, l, d);
		if (!a || n.groupType === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP || n.groupType === o("WAWebGroupType").GroupType.COMMUNITY || n.isSuspendedOrTerminated() || f > o("WAWebGroupGatingUtils").GFG_GROUP_SIZE_THRESHOLD && !i || !o("WAWebABProps").getABPropConfigValue("group_from_group")) return null;
		var g;
		t[3] !== n.participants ? (g = function() {
			var e = n.participants.filter(_).map(p);
			o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable, {
				initialParticipants: e,
				sourceGroupMembers: e,
				groupCreateEntryPoint: o("WAWebWamEnumGroupCreateEntryPoint").GROUP_CREATE_ENTRY_POINT.GROUP_FROM_GROUP_ROW,
				onEnd: o("WAWebDrawerManager").closeDrawerLeft,
				onCreateGroup: m,
				isSubFlow: !1
			}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
		}, t[3] = n.participants, t[4] = g) : g = t[4];
		var h = g, y;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsx(r("WDSIconIcGroupAddFilled.react"), {}), t[5] = y) : y = t[5];
		var C;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: s._(
			/*BTDS*/
			""
		) }), t[6] = C) : C = t[6];
		var b;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (b = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowSecondaryTitleRefreshed, { title: s._(
			/*BTDS*/
			""
		) }), t[7] = b) : b = t[7];
		var v;
		return t[8] !== h ? (v = u.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
			xstyle: c.section,
			children: u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
				testid: "group-from-group-row",
				icon: y,
				onClick: h,
				title: C,
				secondaryTitle: b
			})
		}), t[8] = h, t[9] = v) : v = t[9], v;
	}
	async function m(e) {
		await e, o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
	}
	function p(e) {
		return e.contact;
	}
	function _(e) {
		return !o("WAWebContactGetters").getIsMe(e.contact);
	}
	l.default = d;
}), 226);
