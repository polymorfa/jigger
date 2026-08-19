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
	"asyncToGeneratorRuntime",
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
		var t = o("react-compiler-runtime").c(21), a = e.chat, i = e.groupMetadata, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = [
			"id",
			"parentGroup",
			"isUnnamed"
		], t[0] = l) : l = t[0];
		var u = o("useWAWebModelValues").useModelValues(i, l), m = u.id, f = u.isUnnamed, g = u.parentGroup, h = r("useWAWebIAmGroupAdmin")(i), y;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (y = [
			"bulk_add",
			"bulk_remove",
			"reset"
		], t[1] = y) : y = t[1];
		var C;
		t[2] !== i.participants.length ? (C = function() {
			return i.participants.length;
		}, t[2] = i.participants.length, t[3] = C) : C = t[3];
		var b = r("useWAWebEventTargetValue")(i.participants, y, C), v = o("WAWebABProps").getABPropConfigValue("parent_group_min_participants_for_group_entry_point"), S = r("useWAWebUnmountSignal")();
		if (!h || g != null || b < v || i.groupType === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP || !o("WAWebCommunityGatingUtils").communitiesCreationEnabled() || i.isSuspendedOrTerminated()) return null;
		var R;
		t[4] !== m ? (R = function() {
			var e = c.jsx(o("WAWebAddGroupToCommunityFlowLoadable.react").AddGroupToCommunityFlowLoadable, {
				groupToBeLinked: m,
				onEnd: o("WAWebDrawerManager").closeDrawerLeft
			});
			o("WAWebDrawerManager").DrawerManager.openDrawerLeft(e, { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE }), o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.startSession(o("WAWebWamEnumCommunityCreationEntrypointType").COMMUNITY_CREATION_ENTRYPOINT_TYPE.GROUP_INFO), o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.enter(o("WAWebWamEnumCommunityCreationCurrentScreenType").COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.GROUP_INFO);
		}, t[4] = m, t[5] = R) : R = t[5];
		var L = R, E;
		t[6] !== a || t[7] !== L || t[8] !== S ? (E = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				var n = e;
				yield r("WAPromiseRaceAbort")(o("WAWebSetSubjectGroupAction").setGroupSubject(a, n), S).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch(_), o("WAWebModalManager").ModalManager.close(), L();
			});
			return function(n, r) {
				return e.apply(this, arguments);
			};
		})(), t[6] = a, t[7] = L, t[8] = S, t[9] = E) : E = t[9];
		var k = E, I = p, T;
		t[10] !== a || t[11] !== L || t[12] !== k || t[13] !== f ? (T = function() {
			if (f) {
				var e, t, n = s._(
					/*BTDS*/
					""
				);
				o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebNameGroupModal.react"), {
					chat: a,
					subtext: n,
					onCancel: o("WAWebModalManager").closeModalManager,
					onOK: k,
					editable: (e = a.groupMetadata) == null ? void 0 : e.canSetSubject(),
					editRestrictionInfo: (t = a.groupMetadata) != null && t.restrict ? I : void 0
				}));
			} else L();
		}, t[10] = a, t[11] = L, t[12] = k, t[13] = f, t[14] = T) : T = t[14];
		var D = T, x;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (x = c.jsx(o("WAWebCommunitySquircleIcon.react").CommunitySquircleIcon, {
			iconXstyle: d.communitySquircle,
			width: 49,
			height: 49
		}), t[15] = x) : x = t[15];
		var $;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? ($ = c.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, { children: s._(
			/*BTDS*/
			""
		) }), t[16] = $) : $ = t[16];
		var P, N;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (N = c.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, { children: s._(
			/*BTDS*/
			""
		) }), P = c.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
			iconXstyle: d.secondaryColor,
			directional: !0,
			height: 21
		}), t[17] = P, t[18] = N) : (P = t[17], N = t[18]);
		var M;
		return t[19] !== D ? (M = c.jsx(r("WAWebDrawerSection.react"), {
			theme: "no-padding",
			children: c.jsx(r("WAWebCellV2.react"), {
				testid: "group-info-create-community-section",
				detailLeft: x,
				primary: $,
				secondary: N,
				detailRight: P,
				onClick: D,
				size: "medium",
				isRefresh: !0
			})
		}), t[19] = D, t[20] = M) : M = t[20], M;
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
