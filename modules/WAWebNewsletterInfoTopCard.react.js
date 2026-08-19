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
	"asyncToGeneratorRuntime",
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
		var t, a = o("react-compiler-runtime").c(22), i = e.chat, l = i.newsletterMetadata, c;
		a[0] !== i ? (c = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				yield o("WAWebFollowNewsletter").followNewsletter(o("WAWebStateUtils").unproxy(i), {
					eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE,
					discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_PROFILE
				});
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), a[0] = i, a[1] = c) : c = a[1];
		var m = c, p;
		a[2] !== i ? (p = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebUnfollowNewsletterConfirmationModal.react").UnfollowNewsletterConfirmationModal, {
				chat: i,
				loggingOptions: {
					eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE,
					discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_PROFILE
				}
			}));
		}, a[2] = i, a[3] = p) : p = a[3];
		var f = p, g = [];
		if ((t = l == null ? void 0 : l.iAmGuest()) != null && t) {
			var h;
			a[4] === Symbol.for("react.memo_cache_sentinel") ? (h = s._(
				/*BTDS*/
				""
			), a[4] = h) : h = a[4];
			var y;
			a[5] !== m ? (y = {
				wdsIcon: r("WDSIconIcAdd.react"),
				onClick: m,
				testid: "channel_info_follow_action_tile",
				title: h
			}, a[5] = m, a[6] = y) : y = a[6], g.push(y);
		} else {
			var C;
			if ((C = l == null ? void 0 : l.iAmSubscriber()) != null && C) {
				var b;
				a[7] === Symbol.for("react.memo_cache_sentinel") ? (b = s._(
					/*BTDS*/
					""
				), a[7] = b) : b = a[7];
				var v;
				a[8] !== f ? (v = {
					wdsIcon: r("WDSIconIcCheck.react"),
					onClick: f,
					testid: "channel_info_unfollow_action_tile",
					title: b
				}, a[8] = f, a[9] = v) : v = a[9], g.push(v);
			}
		}
		var S;
		a[10] === Symbol.for("react.memo_cache_sentinel") ? (S = { linkShareScreen: o("WAWebWamEnumChannelLinkShareScreen").CHANNEL_LINK_SHARE_SCREEN.CHANNEL_INFO }, a[10] = S) : S = a[10];
		var R;
		a[11] !== i ? (R = {
			chat: i,
			linkShareLoggingNavigationParams: S
		}, a[11] = i, a[12] = R) : R = a[12];
		var L = o("useWAWebNewsletterInviteLink").useNewsletterInviteLink(R), E = L[0], k = L[1], I = L[2];
		if (E != null) {
			var T;
			a[13] === Symbol.for("react.memo_cache_sentinel") ? (T = s._(
				/*BTDS*/
				""
			), a[13] = T) : T = a[13];
			var D;
			if (a[14] !== I ? (D = {
				wdsIcon: r("WDSIconIcFastForward.react"),
				onClick: I,
				testid: "channel_info_forward_invite_action_tile",
				title: T
			}, a[14] = I, a[15] = D) : D = a[15], g.push(D), document.queryCommandSupported("copy")) {
				var x;
				a[16] === Symbol.for("react.memo_cache_sentinel") ? (x = o("WAWebCommonNewsletterStrings").getCopyLinkText(), a[16] = x) : x = a[16];
				var $;
				a[17] !== k ? ($ = {
					wdsIcon: r("WDSIconIcLink.react"),
					onClick: k,
					testid: "channel_info_copy_link_action_tile",
					title: x
				}, a[17] = k, a[18] = $) : $ = a[18], g.push($);
			}
		}
		var P = g.map(_), N;
		a[19] === Symbol.for("react.memo_cache_sentinel") ? (N = [d.marginTop25, d.marginBottom10], a[19] = N) : N = a[19];
		var M;
		return a[20] !== P ? (M = u.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			align: "center",
			xstyle: N,
			children: u.jsx(r("WDSActionTileGroup.react"), { children: P })
		}), a[20] = P, a[21] = M) : M = a[21], M;
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
