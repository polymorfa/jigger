__d("WAWebNewsletterInfoTopCard.react", [
	"fbt",
	"WAWebCommonNewsletterEnums",
	"WAWebCommonNewsletterStrings",
	"WAWebCopyPasteSelectable.react",
	"WAWebDrawerSection.react",
	"WAWebFlex.react",
	"WAWebFollowNewsletter",
	"WAWebL10N",
	"WAWebModalManager",
	"WAWebNewsletterInfoPhoto.react",
	"WAWebNewsletterInfoSubject.react",
	"WAWebStateUtils",
	"WAWebText.react",
	"WAWebUnfollowNewsletterConfirmationModal.react",
	"WAWebWamEnumChannelEventSurface",
	"WAWebWamEnumChannelLinkShareScreen",
	"WAWebWamEnumTsSurface",
	"WDSActionTile.react",
	"WDSActionTileGroup.react",
	"WDSIconIcAdd.react",
	"WDSIconIcCheck.react",
	"WDSIconIcFastForward.react",
	"WDSIconIcLink.react",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues",
	"useWAWebNewsletterInviteLink"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback, d = {
		marginBottom7: {
			marginBottom: "xwoyzhm",
			$$css: !0
		},
		marginTop25: {
			marginTop: "x1e1m7ul",
			$$css: !0
		},
		marginBottom10: {
			marginBottom: "xyorhqc",
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(32), n = e.adminFunnelLogger, a = e.chat, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = [
			"size",
			"privacy",
			"terminated",
			"isSuspendedOrTerminated",
			"membershipType",
			"inviteCode"
		], t[0] = i) : i = t[0];
		var l = o("useWAWebModelValues").useOptionalModelValues(a.newsletterMetadata, i), c;
		t[1] !== (l == null ? void 0 : l.privacy) ? (c = (l == null ? void 0 : l.privacy) === o("WAWebCommonNewsletterEnums").NewsletterPrivacy.Private ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[1] = l == null ? void 0 : l.privacy, t[2] = c) : c = t[2];
		var m = c;
		if (l != null && l.terminated) {
			var _;
			t[3] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
				/*BTDS*/
				""
			), t[3] = _) : _ = t[3], m = _;
		}
		var f;
		t[4] !== l ? (f = (l == null ? void 0 : l.size) != null ? o("WAWebCommonNewsletterStrings").getNewsletterFollowersText(l.size, !0) : null, t[4] = l, t[5] = f) : f = t[5];
		var g = f, h;
		t[6] !== l ? (h = (l == null ? void 0 : l.isSuspendedOrTerminated) || !(l != null && l.iAmAdminOrOwner()), t[6] = l, t[7] = h) : h = t[7];
		var y;
		t[8] !== n || t[9] !== a || t[10] !== h ? (y = u.jsx(r("WAWebNewsletterInfoPhoto.react"), {
			chat: a,
			xstyle: d.marginBottom7,
			readOnly: h,
			adminFunnelLogger: n,
			showOutline: !0
		}), t[8] = n, t[9] = a, t[10] = h, t[11] = y) : y = t[11];
		var C;
		t[12] !== n || t[13] !== a ? (C = u.jsx(r("WAWebNewsletterInfoSubject.react"), {
			chat: a,
			adminFunnelLogger: n
		}), t[12] = n, t[13] = a, t[14] = C) : C = t[14];
		var b;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (b = { className: "x1evy7pa x1kgmq87 x2b8uid" }, t[15] = b) : b = t[15];
		var v;
		t[16] !== (l == null ? void 0 : l.isSuspendedOrTerminated) || t[17] !== g ? (v = l != null && l.isSuspendedOrTerminated ? null : u.jsxs(u.Fragment, { children: [r("WAWebL10N").isRTL() ? " - " : " · ", g] }), t[16] = l == null ? void 0 : l.isSuspendedOrTerminated, t[17] = g, t[18] = v) : v = t[18];
		var S;
		t[19] !== m || t[20] !== v ? (S = u.jsx("div", babelHelpers.extends({ "data-testid": "newsletter-info-top-card-subtitle" }, b, { children: u.jsx(o("WAWebCopyPasteSelectable.react").SelectableSpan, {
			dir: "auto",
			selectable: !0,
			children: u.jsxs(o("WAWebText.react").WAWebTextTitle, {
				color: "secondary",
				children: [m, v]
			})
		}) })), t[19] = m, t[20] = v, t[21] = S) : S = t[21];
		var R;
		t[22] !== y || t[23] !== C || t[24] !== S ? (R = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			children: [
				y,
				C,
				S
			]
		}), t[22] = y, t[23] = C, t[24] = S, t[25] = R) : R = t[25];
		var L;
		t[26] !== a || t[27] !== (l == null ? void 0 : l.isSuspendedOrTerminated) ? (L = l != null && l.isSuspendedOrTerminated ? null : u.jsx(p, { chat: a }), t[26] = a, t[27] = l == null ? void 0 : l.isSuspendedOrTerminated, t[28] = L) : L = t[28];
		var E;
		return t[29] !== R || t[30] !== L ? (E = u.jsxs(r("WAWebDrawerSection.react"), {
			theme: "padding-small-refreshed",
			children: [R, L]
		}), t[29] = R, t[30] = L, t[31] = E) : E = t[31], E;
	}
	function p(e) {
		var t, n = o("react-compiler-runtime").c(22), a = e.chat, i = a.newsletterMetadata, l;
		n[0] !== a ? (l = async function() {
			await o("WAWebFollowNewsletter").followNewsletter(o("WAWebStateUtils").unproxy(a), {
				eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE,
				discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_PROFILE
			});
		}, n[0] = a, n[1] = l) : l = n[1];
		var c = l, m;
		n[2] !== a ? (m = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebUnfollowNewsletterConfirmationModal.react").UnfollowNewsletterConfirmationModal, {
				chat: a,
				loggingOptions: {
					eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE,
					discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_PROFILE
				}
			}));
		}, n[2] = a, n[3] = m) : m = n[3];
		var p = m, f = [];
		if ((t = i == null ? void 0 : i.iAmGuest()) != null && t) {
			var g;
			n[4] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
				/*BTDS*/
				""
			), n[4] = g) : g = n[4];
			var h;
			n[5] !== c ? (h = {
				wdsIcon: r("WDSIconIcAdd.react"),
				onClick: c,
				testid: "channel_info_follow_action_tile",
				title: g
			}, n[5] = c, n[6] = h) : h = n[6], f.push(h);
		} else {
			var y;
			if ((y = i == null ? void 0 : i.iAmSubscriber()) != null && y) {
				var C;
				n[7] === Symbol.for("react.memo_cache_sentinel") ? (C = s._(
					/*BTDS*/
					""
				), n[7] = C) : C = n[7];
				var b;
				n[8] !== p ? (b = {
					wdsIcon: r("WDSIconIcCheck.react"),
					onClick: p,
					testid: "channel_info_unfollow_action_tile",
					title: C
				}, n[8] = p, n[9] = b) : b = n[9], f.push(b);
			}
		}
		var v;
		n[10] === Symbol.for("react.memo_cache_sentinel") ? (v = { linkShareScreen: o("WAWebWamEnumChannelLinkShareScreen").CHANNEL_LINK_SHARE_SCREEN.CHANNEL_INFO }, n[10] = v) : v = n[10];
		var S;
		n[11] !== a ? (S = {
			chat: a,
			linkShareLoggingNavigationParams: v
		}, n[11] = a, n[12] = S) : S = n[12];
		var R = o("useWAWebNewsletterInviteLink").useNewsletterInviteLink(S), L = R[0], E = R[1], k = R[2];
		if (L != null) {
			var I;
			n[13] === Symbol.for("react.memo_cache_sentinel") ? (I = s._(
				/*BTDS*/
				""
			), n[13] = I) : I = n[13];
			var T;
			if (n[14] !== k ? (T = {
				wdsIcon: r("WDSIconIcFastForward.react"),
				onClick: k,
				testid: "channel_info_forward_invite_action_tile",
				title: I
			}, n[14] = k, n[15] = T) : T = n[15], f.push(T), document.queryCommandSupported("copy")) {
				var D;
				n[16] === Symbol.for("react.memo_cache_sentinel") ? (D = o("WAWebCommonNewsletterStrings").getCopyLinkText(), n[16] = D) : D = n[16];
				var x;
				n[17] !== E ? (x = {
					wdsIcon: r("WDSIconIcLink.react"),
					onClick: E,
					testid: "channel_info_copy_link_action_tile",
					title: D
				}, n[17] = E, n[18] = x) : x = n[18], f.push(x);
			}
		}
		var $ = f.map(_), P;
		n[19] === Symbol.for("react.memo_cache_sentinel") ? (P = [d.marginTop25, d.marginBottom10], n[19] = P) : P = n[19];
		var N;
		return n[20] !== $ ? (N = u.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			align: "center",
			xstyle: P,
			children: u.jsx(r("WDSActionTileGroup.react"), { children: $ })
		}), n[20] = $, n[21] = N) : N = n[21], N;
	}
	function _(e, t) {
		var n = e.onClick, o = e.testid, a = e.title, i = e.wdsIcon;
		return u.jsx(r("WDSActionTile.react"), {
			Icon: i,
			onPress: function() {
				return void n();
			},
			label: a,
			testid: o
		}, t);
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = m;
}), 226);
