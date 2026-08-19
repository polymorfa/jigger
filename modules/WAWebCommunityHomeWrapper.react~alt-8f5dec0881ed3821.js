__d("WAWebCommunityHomeWrapper.react", [
	"$InternalEnum",
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
	"gkx",
	"react",
	"useLazyRef",
	"useWAWebCommunityNux",
	"useWAWebEventTargetValue",
	"useWAWebIAmGroupAdmin",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s.useEffect, d = n("$InternalEnum").Mirrored(["TabbedInfo", "Navigation"]);
	function m(t) {
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.jid, s = i.showFullDescription, m = i.callbacks, p = i.theme, _ = p === void 0 ? d.Navigation : p, f = i.hasFetchedSubgroups, g = f === void 0 ? !1 : f, h = i.initialTab, y = h === void 0 ? o("WAWebCommunityTabbedInfoDrawer.react").CommunityInfoTabs.Community : h, C = i.scrollToMemberList, b = r("useWAWebEventTargetValue")(o("WAWebChatCollection").ChatCollection, "add", function() {
			return o("WAWebChatCollection").ChatCollection.get(l);
		}), v = b ? o("WAWebLidMigrationUtils").chatIsLid(b) : null, S = r("useLazyRef")(function() {
			return v != null ? new (o("WAWebUiActionWamEvent")).UiActionWamEvent({
				uiActionType: o("WAWebWamEnumUiActionType").UI_ACTION_TYPE.COMMUNITY_INFO_OPEN,
				uiActionPreloaded: !0,
				isLid: v
			}) : new (o("WAWebUiActionWamEvent")).UiActionWamEvent({
				uiActionType: o("WAWebWamEnumUiActionType").UI_ACTION_TYPE.COMMUNITY_INFO_OPEN,
				uiActionPreloaded: !0
			});
		}), R = r("useWAWebIAmGroupAdmin")(b == null ? void 0 : b.groupMetadata), L = r("useWAWebEventTargetValue")(b == null || (n = b.groupMetadata) == null ? void 0 : n.participants, [
			"bulk_add",
			"bulk_remove",
			"reset",
			"change:isSuperAdmin"
		], function() {
			var e;
			return !!(!(b == null || (e = b.groupMetadata) == null) && e.participants.iAmSuperAdmin());
		});
		c(function() {
			var e = S.current;
			if (e) {
				e.markUiActionT();
				var t = b == null ? void 0 : b.groupMetadata, n = t == null ? void 0 : t.cachedDeviceSizeBucket;
				if (n != null && (e.sizeBucket = n), t) {
					var a = o("WAWebWamAddressingModeUtils").getAddressingModeMetricsFromGroupMetadata(t);
					a != null && (e.localAddressingMode = a);
					var i = o("WAWebWamGroupMetricUtils").getGroupCountMetricsFromGroupMetadata(t);
					e.set(i);
				}
				e.commit(), S.current = void 0, o("WAWebWamPrivateStatsUtils").logUiActionShadowPrivateStatsTestEvents();
			}
			if (!r("gkx")("26258")) {
				var s = o("WAWebChatCollection").ChatCollection.get(l);
				window.community = s;
			}
			var u = _ === d.Navigation ? o("WAWebWamEnumSurfaceType").SURFACE_TYPE.COMMUNITY_NAV : o("WAWebWamEnumSurfaceType").SURFACE_TYPE.COMMUNITY_HOME, c = new (o("WAWebCommunityGroupJourneyEventImpl")).CommunityGroupJourneyEvent({
				action: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.VIEW,
				surface: u,
				chat: b
			});
			c.commit();
		}, []);
		var E = function() {
			if (m.onBack) {
				m.onBack();
				return;
			}
			o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
		};
		async function k() {
			b && (await Promise.all(await o("WAWebUpdateDbForCommunityAction").databaseUpdatesForDeactivateCommunity(b.id, !1)), o("WAWebUpdateModelsForCommunityAction").updateModelsForDeactivateCommunity(b.id));
		}
		async function I() {
			b && (await Promise.all(await o("WAWebUpdateDbForCommunityAction").databaseUpdatesForExitedCommunity(b.id)), o("WAWebUpdateModelsForCommunityAction").updateModelsForExitedCommunity(b.id));
		}
		c(function() {
			var e, t = o("WAWebChatCollection").ChatCollection.get(l);
			(_ === d.Navigation || _ === d.TabbedInfo && t != null && (e = t.groupMetadata) != null && e.hasJoined()) && o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({ id: l }).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
				o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(t) || (e.status === 403 || e.status === 404) && (E(), o("WAWebShowCommunityHomeError").showCommunityHomeError(e), e.status === 403 ? I() : e.status === 404 && k());
			})), o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(t) && o("WAWebSuspendedCommunityUtils").openTerminatedCommunityModal();
		}, [l]), o("useWAWebListener").useListener(b == null ? void 0 : b.groupMetadata, "exitParentGroup", E), c(function() {
			if (!g) {
				var e;
				o("WAWebQuerySubGroupAction").queryAndUpdateSubgroupsMetadata(l, b == null || (e = b.groupMetadata) == null ? void 0 : e.joinedSubgroups);
			}
		}, [l, g]), r("useWAWebCommunityNux")(b);
		var T = function() {
			var e = b ? r("WAWebCommunityActivityCollection").getActivityFor(b.id).filter(function(e) {
				return e.type === o("WAWebCommunityActivityModel").ActivityTypeType.SUB_GROUP_LINK || e.type === o("WAWebCommunityActivityModel").ActivityTypeType.NEW_COMMUNITY;
			}) : [];
			return e;
		}, D = r("useWAWebEventTargetValue")(r("WAWebCommunityActivityCollection"), ["add"], function() {
			return T();
		}), x = D, $ = x.filter(function(e) {
			return o("WATimeUtils").unixTime() < e.timestamp + o("WAWebCommunityActivityModel").EXPIRATION_TIME_FOR_SUB_GROUP_LINK;
		}), P = $.map(function(e) {
			var t = e.subgroupId;
			return t;
		}), N = function() {
			b != null && b.groupMetadata && o("WAWebUpdateCommunityLastSeenTimestampAction").updateLastSeenTimestamp(b.groupMetadata);
		}, M = function() {
			N(), m.onBack();
		}, w = {
			callbacks: m,
			isAdmin: R
		};
		return _ === d.TabbedInfo ? u.jsx(o("WAWebCommunityTabbedInfoDrawer.react").CommunityTabbedInfoDrawer, babelHelpers.extends({
			ref: a,
			initialTab: y,
			showFullDescription: s,
			scrollToMemberList: C,
			parentChat: b
		}, w)) : u.jsx(r("WAWebCommunityNavigation.react"), babelHelpers.extends({
			ref: a,
			highlightedSubgroups: P,
			onBack: M,
			chat: b
		}, w, { isSuperAdmin: L }));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.CommunityHomeTheme = d, l.CommunityHomeWrapper = m;
}), 98);
