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
	function m(t) {
		var n = t.chat, a = t.groupMetadata, i = o("useWAWebModelValues").useModelValues(a, [
			"id",
			"parentGroup",
			"isUnnamed"
		]), l = i.id, u = i.isUnnamed, m = i.parentGroup, p = r("useWAWebIAmGroupAdmin")(a), _ = r("useWAWebEventTargetValue")(a.participants, [
			"bulk_add",
			"bulk_remove",
			"reset"
		], function() {
			return a.participants.length;
		}), f = o("WAWebABProps").getABPropConfigValue("parent_group_min_participants_for_group_entry_point"), g = r("useWAWebUnmountSignal")();
		if (!p || m != null || _ < f || a.groupType === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP || !o("WAWebCommunityGatingUtils").communitiesCreationEnabled() || a.isSuspendedOrTerminated()) return null;
		var h = function() {
			var e = c.jsx(o("WAWebAddGroupToCommunityFlowLoadable.react").AddGroupToCommunityFlowLoadable, {
				groupToBeLinked: l,
				onEnd: o("WAWebDrawerManager").closeDrawerLeft
			});
			o("WAWebDrawerManager").DrawerManager.openDrawerLeft(e, { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE }), o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.startSession(o("WAWebWamEnumCommunityCreationEntrypointType").COMMUNITY_CREATION_ENTRYPOINT_TYPE.GROUP_INFO), o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.enter(o("WAWebWamEnumCommunityCreationCurrentScreenType").COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.GROUP_INFO);
		}, y = async function(a, i) {
			var t = a;
			await r("WAPromiseRaceAbort")(o("WAWebSetSubjectGroupAction").setGroupSubject(n, t), g).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch(function(t) {
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["name_group_modal:onSetSubject failed"])));
			}), o("WAWebModalManager").ModalManager.close(), h();
		}, C = function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				onOK: o("WAWebModalManager").closeModalManager,
				okText: r("WAWebFbtCommon")("OK"),
				children: s._(
					/*BTDS*/
					""
				)
			}));
		}, b = function() {
			if (u) {
				var e, t, a = s._(
					/*BTDS*/
					""
				);
				o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebNameGroupModal.react"), {
					chat: n,
					subtext: a,
					onCancel: o("WAWebModalManager").closeModalManager,
					onOK: y,
					editable: (e = n.groupMetadata) == null ? void 0 : e.canSetSubject(),
					editRestrictionInfo: (t = n.groupMetadata) != null && t.restrict ? C : void 0
				}));
			} else h();
		};
		return c.jsx(r("WAWebDrawerSection.react"), {
			theme: "no-padding",
			children: c.jsx(r("WAWebCellV2.react"), {
				testid: "group-info-create-community-section",
				detailLeft: c.jsx(o("WAWebCommunitySquircleIcon.react").CommunitySquircleIcon, {
					iconXstyle: d.communitySquircle,
					width: 49,
					height: 49
				}),
				primary: c.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, { children: s._(
					/*BTDS*/
					""
				) }),
				secondary: c.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, { children: s._(
					/*BTDS*/
					""
				) }),
				detailRight: c.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
					iconXstyle: d.secondaryColor,
					directional: !0,
					height: 21
				}),
				onClick: b,
				size: "medium",
				isRefresh: !0
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
