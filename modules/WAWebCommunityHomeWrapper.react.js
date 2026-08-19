__d("WAWebCommunityHomeWrapper.react", [
	"$InternalEnum",
	"Promise",
	"WAFilteredCatch",
	"WATimeUtils",
	"WAWebBackendErrors",
	"WAWebChatCollection",
	"WAWebChatCommunityUtils",
	"WAWebCommunityActivityCollection",
	"WAWebCommunityActivityModel",
	"WAWebCommunityGroupJourneyEventImpl",
	"WAWebCommunityNavigation.react",
	"WAWebCommunityTabbedInfoDrawer.react",
	"WAWebDrawerManager",
	"WAWebGroupQueryJob",
	"WAWebLidMigrationUtils",
	"WAWebQuerySubGroupAction",
	"WAWebShowCommunityHomeError",
	"WAWebSuspendedCommunityUtils",
	"WAWebUiActionWamEvent",
	"WAWebUpdateCommunityLastSeenTimestampAction",
	"WAWebUpdateDbForCommunityAction",
	"WAWebUpdateModelsForCommunityAction",
	"WAWebWamAddressingModeUtils",
	"WAWebWamEnumChatFilterActionTypes",
	"WAWebWamEnumSurfaceType",
	"WAWebWamEnumUiActionType",
	"WAWebWamGroupMetricUtils",
	"WAWebWamPrivateStatsUtils",
	"asyncToGeneratorRuntime",
	"gkx",
	"react",
	"useLazyRef",
	"useWAWebCommunityNux",
	"useWAWebEventTargetValue",
	"useWAWebIAmGroupAdmin",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u, c = u || (u = o("react")), d = u.useEffect, m = n("$InternalEnum").Mirrored(["TabbedInfo", "Navigation"]);
	function p(t) {
		var a, i = t.ref, l = babelHelpers.objectWithoutPropertiesLoose(t, e), u = l.jid, p = l.showFullDescription, _ = l.callbacks, f = l.theme, g = f === void 0 ? m.Navigation : f, h = l.hasFetchedSubgroups, y = h === void 0 ? !1 : h, C = l.initialTab, b = C === void 0 ? o("WAWebCommunityTabbedInfoDrawer.react").CommunityInfoTabs.Community : C, v = l.scrollToMemberList, S = r("useWAWebEventTargetValue")(o("WAWebChatCollection").ChatCollection, "add", function() {
			return o("WAWebChatCollection").ChatCollection.get(u);
		}), R = S ? o("WAWebLidMigrationUtils").chatIsLid(S) : null, L = r("useLazyRef")(function() {
			return R != null ? new (o("WAWebUiActionWamEvent")).UiActionWamEvent({
				uiActionType: o("WAWebWamEnumUiActionType").UI_ACTION_TYPE.COMMUNITY_INFO_OPEN,
				uiActionPreloaded: !0,
				isLid: R
			}) : new (o("WAWebUiActionWamEvent")).UiActionWamEvent({
				uiActionType: o("WAWebWamEnumUiActionType").UI_ACTION_TYPE.COMMUNITY_INFO_OPEN,
				uiActionPreloaded: !0
			});
		}), E = r("useWAWebIAmGroupAdmin")(S == null ? void 0 : S.groupMetadata), k = r("useWAWebEventTargetValue")(S == null || (a = S.groupMetadata) == null ? void 0 : a.participants, [
			"bulk_add",
			"bulk_remove",
			"reset",
			"change:isSuperAdmin"
		], function() {
			var e;
			return !!(!(S == null || (e = S.groupMetadata) == null) && e.participants.iAmSuperAdmin());
		});
		d(function() {
			var e = L.current;
			if (e) {
				e.markUiActionT();
				var t = S == null ? void 0 : S.groupMetadata, n = t == null ? void 0 : t.cachedDeviceSizeBucket;
				if (n != null && (e.sizeBucket = n), t) {
					var a = o("WAWebWamAddressingModeUtils").getAddressingModeMetricsFromGroupMetadata(t);
					a != null && (e.localAddressingMode = a);
					var i = o("WAWebWamGroupMetricUtils").getGroupCountMetricsFromGroupMetadata(t);
					e.set(i);
				}
				e.commit(), L.current = void 0, o("WAWebWamPrivateStatsUtils").logUiActionShadowPrivateStatsTestEvents();
			}
			if (!r("gkx")("26258")) {
				var l = o("WAWebChatCollection").ChatCollection.get(u);
				window.community = l;
			}
			var s = g === m.Navigation ? o("WAWebWamEnumSurfaceType").SURFACE_TYPE.COMMUNITY_NAV : o("WAWebWamEnumSurfaceType").SURFACE_TYPE.COMMUNITY_HOME, c = new (o("WAWebCommunityGroupJourneyEventImpl")).CommunityGroupJourneyEvent({
				action: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.VIEW,
				surface: s,
				chat: S
			});
			c.commit();
		}, []);
		var I = function() {
			if (_.onBack) {
				_.onBack();
				return;
			}
			o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
		};
		function T() {
			return D.apply(this, arguments);
		}
		function D() {
			return D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				S && (yield (s || (s = n("Promise"))).all(yield o("WAWebUpdateDbForCommunityAction").databaseUpdatesForDeactivateCommunity(S.id, !1)), o("WAWebUpdateModelsForCommunityAction").updateModelsForDeactivateCommunity(S.id));
			}), D.apply(this, arguments);
		}
		function x() {
			return $.apply(this, arguments);
		}
		function $() {
			return $ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				S && (yield (s || (s = n("Promise"))).all(yield o("WAWebUpdateDbForCommunityAction").databaseUpdatesForExitedCommunity(S.id)), o("WAWebUpdateModelsForCommunityAction").updateModelsForExitedCommunity(S.id));
			}), $.apply(this, arguments);
		}
		d(function() {
			var e, t = o("WAWebChatCollection").ChatCollection.get(u);
			(g === m.Navigation || g === m.TabbedInfo && t != null && (e = t.groupMetadata) != null && e.hasJoined()) && o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({ id: u }).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
				o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(t) || (e.status === 403 || e.status === 404) && (I(), o("WAWebShowCommunityHomeError").showCommunityHomeError(e), e.status === 403 ? x() : e.status === 404 && T());
			})), o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(t) && o("WAWebSuspendedCommunityUtils").openTerminatedCommunityModal();
		}, [u]), o("useWAWebListener").useListener(S == null ? void 0 : S.groupMetadata, "exitParentGroup", I), d(function() {
			if (!y) {
				var e;
				o("WAWebQuerySubGroupAction").queryAndUpdateSubgroupsMetadata(u, S == null || (e = S.groupMetadata) == null ? void 0 : e.joinedSubgroups);
			}
		}, [u, y]), r("useWAWebCommunityNux")(S);
		var P = function() {
			var e = S ? r("WAWebCommunityActivityCollection").getActivityFor(S.id).filter(function(e) {
				return e.type === o("WAWebCommunityActivityModel").ActivityTypeType.SUB_GROUP_LINK || e.type === o("WAWebCommunityActivityModel").ActivityTypeType.NEW_COMMUNITY;
			}) : [];
			return e;
		}, N = r("useWAWebEventTargetValue")(r("WAWebCommunityActivityCollection"), ["add"], function() {
			return P();
		}), M = N, w = M.filter(function(e) {
			return o("WATimeUtils").unixTime() < e.timestamp + o("WAWebCommunityActivityModel").EXPIRATION_TIME_FOR_SUB_GROUP_LINK;
		}), A = w.map(function(e) {
			var t = e.subgroupId;
			return t;
		}), F = function() {
			S != null && S.groupMetadata && o("WAWebUpdateCommunityLastSeenTimestampAction").updateLastSeenTimestamp(S.groupMetadata);
		}, O = function() {
			F(), _.onBack();
		}, B = {
			callbacks: _,
			isAdmin: E
		};
		return g === m.TabbedInfo ? c.jsx(o("WAWebCommunityTabbedInfoDrawer.react").CommunityTabbedInfoDrawer, babelHelpers.extends({
			ref: i,
			initialTab: b,
			showFullDescription: p,
			scrollToMemberList: v,
			parentChat: S
		}, B)) : c.jsx(r("WAWebCommunityNavigation.react"), babelHelpers.extends({
			ref: i,
			highlightedSubgroups: A,
			onBack: O,
			chat: S
		}, B, { isSuperAdmin: k }));
	}
	p.displayName = p.name + " [from " + i.id + "]", l.CommunityHomeTheme = m, l.CommunityHomeWrapper = p;
}), 98);
