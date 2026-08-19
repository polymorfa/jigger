__d("WAWebGroupInfoCreateCommunitySection.react", [
	"fbt",
	"WAAbortError",
	"WALogger",
	"WAPromiseRaceAbort",
	"WAWebABProps",
	"WAWebAddGroupToCommunityFlowLoadable.react",
	"WAWebCellV2.react",
	"WAWebChevronIcon.react",
	"WAWebCommunityCreationFlowMetricUtils",
	"WAWebCommunityGatingUtils",
	"WAWebCommunitySquircleIcon.react",
	"WAWebConfirmPopup.react",
	"WAWebDrawerManager",
	"WAWebDrawerSection.react",
	"WAWebFbtCommon",
	"WAWebGroupType",
	"WAWebKeyboardTabUtils",
	"WAWebModalManager",
	"WAWebNameGroupModal.react",
	"WAWebNoop",
	"WAWebSetSubjectGroupAction",
	"WAWebText.react",
	"WAWebWamEnumCommunityCreationCurrentScreenType",
	"WAWebWamEnumCommunityCreationEntrypointType",
	"react",
	"react-compiler-runtime",
	"useWAWebEventTargetValue",
	"useWAWebIAmGroupAdmin",
	"useWAWebModelValues",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = {
		communitySquircle: {
			color: "x1v5yvga",
			$$css: !0
		},
		secondaryColor: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(21), n = e.chat, a = e.groupMetadata, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = [
			"id",
			"parentGroup",
			"isUnnamed"
		], t[0] = i) : i = t[0];
		var l = o("useWAWebModelValues").useModelValues(a, i), u = l.id, m = l.isUnnamed, f = l.parentGroup, g = r("useWAWebIAmGroupAdmin")(a), h;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (h = [
			"bulk_add",
			"bulk_remove",
			"reset"
		], t[1] = h) : h = t[1];
		var y;
		t[2] !== a.participants.length ? (y = function() {
			return a.participants.length;
		}, t[2] = a.participants.length, t[3] = y) : y = t[3];
		var C = r("useWAWebEventTargetValue")(a.participants, h, y), b = o("WAWebABProps").getABPropConfigValue("parent_group_min_participants_for_group_entry_point"), v = r("useWAWebUnmountSignal")();
		if (!g || f != null || C < b || a.groupType === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP || !o("WAWebCommunityGatingUtils").communitiesCreationEnabled() || a.isSuspendedOrTerminated()) return null;
		var S;
		t[4] !== u ? (S = function() {
			var e = c.jsx(o("WAWebAddGroupToCommunityFlowLoadable.react").AddGroupToCommunityFlowLoadable, {
				groupToBeLinked: u,
				onEnd: o("WAWebDrawerManager").closeDrawerLeft
			});
			o("WAWebDrawerManager").DrawerManager.openDrawerLeft(e, { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE }), o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.startSession(o("WAWebWamEnumCommunityCreationEntrypointType").COMMUNITY_CREATION_ENTRYPOINT_TYPE.GROUP_INFO), o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.enter(o("WAWebWamEnumCommunityCreationCurrentScreenType").COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.GROUP_INFO);
		}, t[4] = u, t[5] = S) : S = t[5];
		var R = S, L;
		t[6] !== n || t[7] !== R || t[8] !== v ? (L = async function(t, a) {
			var e = t;
			await r("WAPromiseRaceAbort")(o("WAWebSetSubjectGroupAction").setGroupSubject(n, e), v).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch(_), o("WAWebModalManager").ModalManager.close(), R();
		}, t[6] = n, t[7] = R, t[8] = v, t[9] = L) : L = t[9];
		var E = L, k = p, I;
		t[10] !== n || t[11] !== R || t[12] !== E || t[13] !== m ? (I = function() {
			if (m) {
				var e, t, a = s._(
					/*BTDS*/
					""
				);
				o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebNameGroupModal.react"), {
					chat: n,
					subtext: a,
					onCancel: o("WAWebModalManager").closeModalManager,
					onOK: E,
					editable: (e = n.groupMetadata) == null ? void 0 : e.canSetSubject(),
					editRestrictionInfo: (t = n.groupMetadata) != null && t.restrict ? k : void 0
				}));
			} else R();
		}, t[10] = n, t[11] = R, t[12] = E, t[13] = m, t[14] = I) : I = t[14];
		var T = I, D;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (D = c.jsx(o("WAWebCommunitySquircleIcon.react").CommunitySquircleIcon, {
			iconXstyle: d.communitySquircle,
			width: 49,
			height: 49
		}), t[15] = D) : D = t[15];
		var x;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (x = c.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, { children: s._(
			/*BTDS*/
			""
		) }), t[16] = x) : x = t[16];
		var $, P;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (P = c.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, { children: s._(
			/*BTDS*/
			""
		) }), $ = c.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
			iconXstyle: d.secondaryColor,
			directional: !0,
			height: 21
		}), t[17] = $, t[18] = P) : ($ = t[17], P = t[18]);
		var N;
		return t[19] !== T ? (N = c.jsx(r("WAWebDrawerSection.react"), {
			theme: "no-padding",
			children: c.jsx(r("WAWebCellV2.react"), {
				testid: "group-info-create-community-section",
				detailLeft: D,
				primary: x,
				secondary: P,
				detailRight: $,
				onClick: T,
				size: "medium",
				isRefresh: !0
			})
		}), t[19] = T, t[20] = N) : N = t[20], N;
	}
	function p() {
		o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: o("WAWebModalManager").closeModalManager,
			okText: r("WAWebFbtCommon")("OK"),
			children: s._(
				/*BTDS*/
				""
			)
		}));
	}
	function _(t) {
		o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["name_group_modal:onSetSubject failed"])));
	}
	l.default = m;
}), 226);
