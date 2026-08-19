__d("WAWebStatusList.react", [
	"fbt",
	"WALogger",
	"WAWebClickable.react",
	"WAWebContactCollection",
	"WAWebContactGetters",
	"WAWebEmptyState.react",
	"WAWebFlatList.react",
	"WAWebFlatListContainer.react",
	"WAWebFlatListController",
	"WAWebFlex.react",
	"WAWebKeyboardTabUtils",
	"WAWebMiscGatingUtils",
	"WAWebModalManager",
	"WAWebNewsletterGatingUtils",
	"WAWebNoop",
	"WAWebOpenStatusQuotedFlow",
	"WAWebPrivacyNarrativeE2EMessage.react",
	"WAWebSectionHeader.react",
	"WAWebStatusCell.react",
	"WAWebStatusCollection",
	"WAWebStatusGatingUtils",
	"WAWebStatusGetters",
	"WAWebStatusViewer.react",
	"WAWebStatusVisibilityUtils",
	"WAWebText.react",
	"WAWebWamEnumStatusRowSection",
	"WAWebWidToJid",
	"react",
	"react-compiler-runtime",
	"useLazyRef",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useMemo, p = d.useState, _ = { paddingInlineEnd10: {
		paddingInlineEnd: "x2vl965",
		$$css: !0
	} }, f = {
		SEC_UNREAD: "SEC_UNREAD",
		SEC_READ: "SEC_READ",
		SEC_MUTED: "SEC_MUTED",
		SEC_E2E_MESSAGE: "SEC_E2E_MESSAGE",
		ROW_STATUS: "ROW_STATUS"
	};
	function g(e) {
		return o("WAWebContactGetters").getIsMe(e.contact) ? o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.MY_STATUS : o("WAWebContactGetters").getCalculatedStatusMute(e.contact) ? o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.MUTED_STORIES : o("WAWebStatusGetters").getHasUnread(e) ? o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.RECENT_STORIES : o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.PREVIOUS_STORIES;
	}
	function h(t) {
		var n = o("react-compiler-runtime").c(26), a = t.data, i = t.onOpenStatus, l = t.onToggleMute, u = t.sessionIdRef, d;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (d = s._(
			/*BTDS*/
			""
		), n[0] = d) : d = n[0];
		var m = d, p;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), n[1] = p) : p = n[1];
		var h = p, C;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (C = o("WAWebStatusGatingUtils").isStatusHideStringEnabled() ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), n[2] = C) : C = n[2];
		var b = C, v;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (v = s._(
			/*BTDS*/
			""
		), n[3] = v) : v = n[3];
		var S = v, R;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (R = s._(
			/*BTDS*/
			""
		), n[4] = R) : R = n[4];
		var L = R;
		switch (a.type) {
			case f.SEC_UNREAD: {
				var E;
				return n[5] === Symbol.for("react.memo_cache_sentinel") ? (E = c.jsx(r("WAWebSectionHeader.react"), {
					header: m,
					uppercase: !1,
					isTransparent: !0
				}), n[5] = E) : E = n[5], E;
			}
			case f.SEC_READ: {
				var k;
				return n[6] === Symbol.for("react.memo_cache_sentinel") ? (k = c.jsx(r("WAWebSectionHeader.react"), {
					header: h,
					isTransparent: !0,
					uppercase: !1,
					testid: "status-list-viewed-section"
				}), n[6] = k) : k = n[6], k;
			}
			case f.SEC_MUTED: {
				var I;
				n[7] === Symbol.for("react.memo_cache_sentinel") ? (I = c.jsx(o("WAWebFlex.react").FlexItem, {
					grow: 1,
					children: c.jsx(r("WAWebSectionHeader.react"), {
						header: b,
						isTransparent: !0,
						uppercase: !1,
						testid: "status-list-mute-section-header"
					})
				}), n[7] = I) : I = n[7];
				var T = a.expanded ? S : L, D;
				n[8] !== T ? (D = c.jsx(o("WAWebText.react").WAWebTextSmall, {
					as: "span",
					color: "teal",
					children: T
				}), n[8] = T, n[9] = D) : D = n[9];
				var x;
				return n[10] !== l || n[11] !== D ? (x = c.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					xstyle: _.paddingInlineEnd10,
					children: [I, c.jsx(o("WAWebFlex.react").FlexItem, {
						grow: 0,
						align: "center",
						children: c.jsx(o("WAWebClickable.react").Clickable, {
							onClick: l,
							children: D
						})
					})]
				}), n[10] = l, n[11] = D, n[12] = x) : x = n[12], x;
			}
			case f.ROW_STATUS: {
				var $;
				n[13] !== a.status ? ($ = g(a.status), n[13] = a.status, n[14] = $) : $ = n[14];
				var P = $, N = a.showRing === !0, M;
				n[15] !== a.index || n[16] !== a.status || n[17] !== i || n[18] !== P || n[19] !== u ? (M = function() {
					if (i) {
						i(a.status, void 0, a.index, P);
						return;
					}
					var e = function() {
						o("WAWebModalManager").ModalManager.openMedia(c.jsx(r("WAWebStatusViewer.react"), {
							initialStatus: a.status,
							initialStatusMsg: void 0,
							closeStatusViewer: y,
							sessionId: u == null ? void 0 : u.current,
							rowIdx: a.index,
							rowSection: P,
							continuousPlay: !0
						}), {
							transition: "status-modal",
							focusType: { type: o("WAWebKeyboardTabUtils").FocusType.CUSTOM }
						});
					};
					if (a.status.id.isNewsletter() && o("WAWebNewsletterGatingUtils").isNewsletterStatusAllEntrypointsEnabled()) {
						var t;
						(t = o("WAWebOpenStatusQuotedFlow").ensureNewsletterStatusLoaded({
							newsletterJid: o("WAWebWidToJid").widToNewsletterJid(a.status.id),
							statusModelId: a.status.id
						})) == null || t.then(e).catch(r("WAWebNoop"));
						return;
					}
					e();
				}, n[15] = a.index, n[16] = a.status, n[17] = i, n[18] = P, n[19] = u, n[20] = M) : M = n[20];
				var w;
				return n[21] !== a.status || n[22] !== N || n[23] !== M ? (w = c.jsx(r("WAWebStatusCell.react"), {
					isModalView: !1,
					status: a.status,
					showRing: N,
					onClick: M,
					contact: a.status.contact
				}), n[21] = a.status, n[22] = N, n[23] = M, n[24] = w) : w = n[24], w;
			}
			case f.SEC_E2E_MESSAGE: {
				var A;
				return n[25] === Symbol.for("react.memo_cache_sentinel") ? (A = c.jsx(o("WAWebPrivacyNarrativeE2EMessage.react").E2eMessageStatusList, {}), n[25] = A) : A = n[25], A;
			}
			default: throw o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["UnknownDataError: invoked from WAWebStatusList"]))), new (o("WAWebFlatList.react")).UnknownDataError(a);
		}
	}
	function y() {
		o("WAWebModalManager").ModalManager.closeMedia();
	}
	function C(e) {
		var t = e.onOpenStatus, n = r("useLazyRef")(function() {
			return new (r("WAWebFlatListController"))();
		}), a = function() {
			return o("WAWebStatusCollection").StatusCollection.getUnexpired({ containsAnyUnreadStatus: !0 });
		}, i = function() {
			return o("WAWebStatusCollection").StatusCollection.getUnexpired({ containsAnyUnreadStatus: !1 });
		}, l = function() {
			var e = a().filter(function(e) {
				return o("WAWebStatusVisibilityUtils").isUserOrTrustedGroupOrNewsletterStatus(e);
			}), t = i().filter(function(e) {
				return o("WAWebStatusVisibilityUtils").isUserOrTrustedGroupOrNewsletterStatus(e);
			}), n = [].concat(e, t).filter(function(e) {
				return o("WAWebContactGetters").getCalculatedStatusMute(e.contact);
			});
			return {
				unread: e,
				read: t,
				muted: n
			};
		}, s = m(l, []), u = s.muted, d = s.read, _ = s.unread, g = p(function() {
			return _.filter(function(e) {
				return !o("WAWebContactGetters").getCalculatedStatusMute(e.contact);
			});
		}), y = g[0], C = g[1], b = p(function() {
			return d.filter(function(e) {
				return !o("WAWebContactGetters").getCalculatedStatusMute(e.contact);
			});
		}), v = b[0], S = b[1], R = p(u), L = R[0], E = R[1], k = p(!1), I = k[0], T = k[1], D = function() {
			var e = l(), t = e.muted, n = e.read, r = e.unread;
			C(r.filter(function(e) {
				return !o("WAWebContactGetters").getCalculatedStatusMute(e.contact);
			})), S(n.filter(function(e) {
				return !o("WAWebContactGetters").getCalculatedStatusMute(e.contact);
			})), E(t);
		};
		o("useWAWebListener").useListener(o("WAWebStatusCollection").StatusCollection, "add remove bulk_add sort change:msgsChanged change:unreadCount", D);
		var x = function() {
			var e = l(), t = e.muted, n = e.read, r = e.unread;
			C(r.filter(function(e) {
				return !o("WAWebContactGetters").getCalculatedStatusMute(e.contact);
			})), S(n.filter(function(e) {
				return !o("WAWebContactGetters").getCalculatedStatusMute(e.contact);
			})), E(t);
		};
		o("useWAWebListener").useListener(o("WAWebContactCollection").ContactCollection, "change:statusMute change:parentStatusMute", x);
		var $ = function() {
			T(!I);
		}, P = 72, N = 72, M = m(function() {
			var e = [];
			return y.length > 0 && (e.push({
				type: f.SEC_UNREAD,
				itemKey: "section-unread",
				height: P
			}), e.push.apply(e, y.map(function(e, t) {
				return {
					type: f.ROW_STATUS,
					itemKey: e.id.toString(),
					height: N,
					status: e,
					index: t
				};
			}))), v.length > 0 && (e.push({
				type: f.SEC_READ,
				itemKey: "section-read",
				height: P
			}), e.push.apply(e, v.map(function(e, t) {
				return {
					type: f.ROW_STATUS,
					itemKey: e.id.toString(),
					height: N,
					status: e,
					index: t
				};
			}))), L.length > 0 && (e.push({
				type: f.SEC_MUTED,
				itemKey: "section-muted",
				height: P,
				expanded: I
			}), I && e.push.apply(e, L.map(function(e, t) {
				return {
					type: f.ROW_STATUS,
					itemKey: e.id.toString(),
					height: N,
					status: e,
					index: t,
					showRing: !0
				};
			}))), o("WAWebMiscGatingUtils").isPrivacyNarrativeV1Enabled() && !o("WAWebNewsletterGatingUtils").isNewsletterStatusProfileRingEnabled() && e.push({
				type: f.SEC_E2E_MESSAGE,
				itemKey: "section-e2e-message"
			}), e;
		}, [
			y,
			v,
			L,
			P,
			N,
			I
		]), w;
		return o("WAWebStatusCollection").StatusCollection.hasSynced() && M.length > 0 ? w = c.jsx(r("WAWebFlatListContainer.react"), {
			className: "x1iyjqo2 xs83m0k xdl72j9 xwxc41k x1odjw0f x122zoth x16jf5lm",
			flatListControllers: [n.current],
			children: c.jsx(o("WAWebFlatList.react").FlatList, {
				itemEnterAnimationsEnabled: !0,
				flatListController: n.current,
				direction: "vertical",
				data: M,
				handleKeyboardNavigation: !0,
				tabIndex: -1,
				role: "list",
				focusableItemSelector: "[data-focusid='status-row-item']",
				renderItem: function(r) {
					return c.jsx(h, {
						data: r,
						onOpenStatus: t,
						onToggleMute: $,
						sessionIdRef: e.sessionIdRef
					});
				}
			})
		}) : w = c.jsx(o("WAWebEmptyState.react").ListStatus, {}), w;
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 226);
