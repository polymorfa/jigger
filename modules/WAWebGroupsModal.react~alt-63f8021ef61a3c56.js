__d("WAWebGroupsModal.react", [
	"fbt",
	"Promise",
	"WAPromiseDelays",
	"WAWebBoolFunc",
	"WAWebChat.react",
	"WAWebCommunityGroupJourneyEventImpl",
	"WAWebEmptyState.react",
	"WAWebGroupMetadataCollection",
	"WAWebL10NAccentFold",
	"WAWebModalsListModal.react",
	"WAWebNoop",
	"WAWebPhoneNumberSearch",
	"WAWebSingleSelection",
	"WAWebWamEnumChatFilterActionTypes",
	"WAWebWamEnumSurfaceType",
	"react",
	"useLazyRef",
	"useWAWebDebouncedCallback"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useState, f = o("WAWebChat.react").ChatFactory(), g = o("WAWebModalsListModal.react").ListModalFactory();
	function h(e) {
		var t = e.active, n = e.chat, r = e.mode, a = e.onClick, i = e.showSpeakerForCag, l = e.subtitle, s = e.type, u, c, m = typeof l != "boolean";
		m && (u = l, c = "group-modal");
		var p = function() {
			m || (s === "subgroup_switcher" && new (o("WAWebCommunityGroupJourneyEventImpl")).CommunityGroupJourneyEvent({
				action: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.GROUP_NAVIGATION,
				surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.COMMUNITY_NAV_SHEET,
				chat: n
			}).commit(), a.call(null, n));
		};
		return d.jsx(f, {
			chat: n,
			mode: r,
			active: t,
			secondary: u,
			noContext: !0,
			theme: c,
			onClick: p,
			overrideCommunityAnnouncementGroupName: !0,
			hiddenSubgroupIcon: "chat-list",
			showSpeakerForCag: i,
			hideTertiaryRow: !0
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(t) {
		var a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = s._(
			/*BTDS*/
			""
		), c = i.onCancel, m = i.chats, f = i.filter, y = f === void 0 ? o("WAWebBoolFunc").returnTrue : f, C = i.onGroup, b = i.mode, v = b === void 0 ? o("WAWebChat.react").Mode.INFO : b, S = i.title, R = S === void 0 ? l : S, L = i.firstRow, E = i.lastRow, k = i.hideSearchBar, I = k === void 0 ? !1 : k, T = i.showSpeakerForCag, D = i.rotateList, x = D === void 0 ? !1 : D, $ = i.tsNavigationData, P = i.type, N = r("useLazyRef")(function() {
			return new (r("WAWebSingleSelection"))([], function(e) {
				return e.toString();
			});
		}), M = _(!0), w = M[0], A = M[1], F = _(void 0), O = F[0], B = F[1];
		p(function() {
			o("WAPromiseDelays").delayMs(300).then(function() {
				return (u || (u = n("Promise"))).all(m.reduce(function(e, t) {
					var n;
					return (n = t.groupMetadata) != null && n.stale && e.push(t.groupMetadata.id), e;
				}, []).map(function(e) {
					return r("WAWebGroupMetadataCollection").update(e).catch(r("WAWebNoop"));
				}));
			}).finally(function() {
				return A(!1);
			});
		}, []);
		var W = function(t, n) {
			y(n.chat) === !0 && C(n.chat);
		}, q = function() {
			var e = [];
			if (w) return e;
			var t = o("WAWebL10NAccentFold").accentFold(O), n = o("WAWebPhoneNumberSearch").numberSearch(t), r = m.filter(function(e) {
				return y(e) && (!t || e.contact.searchMatchExact(t, n));
			});
			return N.current.init(r.filter(function(e) {
				return y(e) === !0;
			}).map(function(e) {
				return e.id;
			})), e = r.map(function(e) {
				return {
					chat: e,
					itemKey: e.id.toString()
				};
			}), e;
		}, U = r("useWAWebDebouncedCallback")(B, 100), V = w ? d.jsx(o("WAWebEmptyState.react").Loading, {}) : d.jsx(o("WAWebEmptyState.react").SearchGroups, {});
		return d.jsx(g, {
			title: R,
			data: q(),
			tsNavigationData: $,
			renderItem: function(t) {
				var e = t.chat;
				return d.jsx(h, {
					chat: e,
					subtitle: y(e),
					active: N.current,
					onClick: C,
					mode: v,
					showSpeakerForCag: T,
					type: P
				});
			},
			emptyState: V,
			selection: N.current,
			rotateList: x,
			onCancel: c,
			onSearch: I ? void 0 : U,
			onSelect: W,
			ref: a,
			searchPlaceholder: s._(
				/*BTDS*/
				""
			),
			firstRows: [L],
			lastRow: E
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);
