__d("WAWebNewsletterIntegritySection.react", [
	"fbt",
	"WAWebChatInfoDrawerRow.react",
	"WAWebChatInfoDrawerSection.react",
	"WAWebCommonNewsletterStrings",
	"WAWebContactCollection",
	"WAWebDeleteIcon.react",
	"WAWebModalManager",
	"WAWebNewsletterDismissAdminPopup.react",
	"WAWebNewsletterGatingUtils",
	"WAWebPersonArrowIcon.react",
	"WAWebReportNewsletterPopup.react",
	"WAWebSpamConstants",
	"WAWebUnfollowNewsletterConfirmationModal.react",
	"WAWebWamEnumChannelEventSurface",
	"WAWebWamEnumTsSurface",
	"WDSIconIcDoNotDisturbOn.react",
	"WDSIconIcLogout.react",
	"WDSIconIcThumbDown.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback, d = {
		dangerIcon: {
			color: "xqnyt8g",
			$$css: !0
		},
		accentIcon: {
			color: "xo1mcw5",
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(19), n = e.chat, r = e.onDeleteNewsletter, a = e.onTransferNewsletterOwnership, i = e.xstyle, l;
		t[0] !== n ? (l = u.jsx(_, { chat: n }), t[0] = n, t[1] = l) : l = t[1];
		var s = l, c;
		t[2] !== n ? (c = u.jsx(p, { chat: n }), t[2] = n, t[3] = c) : c = t[3];
		var d = c, m;
		t[4] !== n || t[5] !== a ? (m = u.jsx(g, {
			chat: n,
			onTransferOwnership: a
		}), t[4] = n, t[5] = a, t[6] = m) : m = t[6];
		var y = m, C;
		t[7] !== n || t[8] !== r ? (C = u.jsx(h, {
			chat: n,
			onDeleteNewsletter: r
		}), t[7] = n, t[8] = r, t[9] = C) : C = t[9];
		var b = C, v;
		t[10] !== n ? (v = u.jsx(f, { chat: n }), t[10] = n, t[11] = v) : v = t[11];
		var S = v, R;
		return t[12] !== b || t[13] !== S || t[14] !== d || t[15] !== y || t[16] !== s || t[17] !== i ? (R = u.jsxs(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerButtonsSection, {
			xstyle: i,
			children: [
				s,
				S,
				y,
				b,
				d
			]
		}), t[12] = b, t[13] = S, t[14] = d, t[15] = y, t[16] = s, t[17] = i, t[18] = R) : R = t[18], R;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(8), n = e.chat, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = [
			"suspended",
			"terminated",
			"isSuspendedOrTerminated"
		], t[0] = a) : a = t[0];
		var i = o("useWAWebModelValues").useOptionalModelValues(n.newsletterMetadata, a);
		if (i != null && i.isSuspendedOrTerminated) return null;
		var l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
			/*BTDS*/
			""
		), t[1] = l) : l = t[1];
		var c = l, m;
		t[2] !== n ? (m = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebReportNewsletterPopup.react"), {
				chat: n,
				spamFlow: o("WAWebSpamConstants").SpamFlow.NewsletterInfoReport
			}));
		}, t[2] = n, t[3] = m) : m = t[3];
		var p = m, _;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = u.jsx(r("WDSIconIcThumbDown.react"), { iconXstyle: d.dangerIcon }), t[4] = _) : _ = t[4];
		var f;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (f = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: u.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "secondaryNegativeEmphasized",
			children: c
		}) }), t[5] = f) : f = t[5];
		var g;
		return t[6] !== p ? (g = u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
			testid: "newsletter-integrity-report-button",
			icon: _,
			onClick: p,
			title: f
		}), t[6] = p, t[7] = g) : g = t[7], g;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(7), n = e.chat, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = ["membershipType"], t[0] = a) : a = t[0];
		var i = o("useWAWebModelValues").useOptionalModelValues(n.newsletterMetadata, a), l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
			/*BTDS*/
			""
		), t[1] = l) : l = t[1];
		var c = l, m;
		t[2] !== n ? (m = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebUnfollowNewsletterConfirmationModal.react").UnfollowNewsletterConfirmationModal, {
				chat: n,
				loggingOptions: {
					eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE,
					discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_PROFILE
				}
			}));
		}, t[2] = n, t[3] = m) : m = t[3];
		var p = m, _;
		if (t[4] !== p || t[5] !== i) {
			var f;
			_ = (f = i == null ? void 0 : i.iAmSubscriber()) != null && f ? u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
				testid: "li-unfollow-newsletter",
				icon: u.jsx(r("WDSIconIcLogout.react"), {
					directional: !0,
					iconXstyle: d.dangerIcon
				}),
				onClick: p,
				title: u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: u.jsx(r("WDSText.react"), {
					type: "Body1",
					colorName: "secondaryNegativeEmphasized",
					children: c
				}) })
			}) : null, t[4] = p, t[5] = i, t[6] = _;
		} else _ = t[6];
		return _;
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(8), n = e.chat, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = ["membershipType"], t[0] = a) : a = t[0];
		var i = o("useWAWebModelValues").useOptionalModelValues(n.newsletterMetadata, a), l;
		t[1] !== n ? (l = function() {
			var e = o("WAWebContactCollection").ContactCollection.getMeContact();
			e != null && o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebNewsletterDismissAdminPopup.react"), {
				newsletter: n,
				isMe: !0,
				contact: e
			}));
		}, t[1] = n, t[2] = l) : l = t[2];
		var c = l;
		if (!(i != null && i.iAmAdmin()) || !o("WAWebNewsletterGatingUtils").isNewsletterCreationEnabled()) return null;
		var m;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (m = s._(
			/*BTDS*/
			""
		), t[3] = m) : m = t[3];
		var p = m, _;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = u.jsx(r("WDSIconIcDoNotDisturbOn.react"), { iconXstyle: d.dangerIcon }), t[4] = _) : _ = t[4];
		var f;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (f = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: u.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "secondaryNegativeEmphasized",
			children: p
		}) }), t[5] = f) : f = t[5];
		var g;
		return t[6] !== c ? (g = u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
			testid: "li-dismiss-youself-as-admin-newsletter",
			icon: _,
			onClick: c,
			title: f
		}), t[6] = c, t[7] = g) : g = t[7], g;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(6), n = e.chat, a = e.onTransferOwnership, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = ["membershipType", "suspended"], t[0] = i) : i = t[0];
		var l = o("useWAWebModelValues").useOptionalModelValues(n.newsletterMetadata, i), s;
		if (t[1] !== l) {
			var c;
			s = ((c = l == null ? void 0 : l.iAmOwner()) != null ? c : !1) && !(l != null && l.suspended), t[1] = l, t[2] = s;
		} else s = t[2];
		var m = s, p;
		return t[3] !== m || t[4] !== a ? (p = m ? u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
			testid: "li-transfer-newsletter-ownership",
			icon: u.jsx(o("WAWebPersonArrowIcon.react").PersonArrowIcon, {
				directional: !0,
				iconXstyle: d.accentIcon
			}),
			onClick: a,
			title: u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: u.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentActionEmphasized",
				children: o("WAWebCommonNewsletterStrings").getNewsletterTransferOwnershipText()
			}) })
		}) : null, t[3] = m, t[4] = a, t[5] = p) : p = t[5], p;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(4), n = e.chat, a = e.onDeleteNewsletter, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = ["membershipType"], t[0] = i) : i = t[0];
		var l = o("useWAWebModelValues").useOptionalModelValues(n.newsletterMetadata, i), s;
		if (t[1] !== l || t[2] !== a) {
			var c;
			s = (c = l == null ? void 0 : l.iAmOwner()) != null && c ? u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
				testid: "li-delete-newsletter",
				icon: u.jsx(o("WAWebDeleteIcon.react").DeleteIcon, {
					directional: !0,
					iconXstyle: d.dangerIcon
				}),
				onClick: a,
				title: u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: u.jsx(r("WDSText.react"), {
					type: "Body1",
					colorName: "secondaryNegativeEmphasized",
					children: o("WAWebCommonNewsletterStrings").getDeleteChannelText()
				}) })
			}) : null, t[1] = l, t[2] = a, t[3] = s;
		} else s = t[3];
		return s;
	}
	l.default = m;
}), 226);
