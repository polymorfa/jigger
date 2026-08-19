__d("WAWebNewsletterDirectoryCell.react", [
	"WAJids",
	"WATimeUtils",
	"WAWebAppRootInteractionContext.react",
	"WAWebCellV2.react",
	"WAWebCommonNewsletterStrings",
	"WAWebContactGetters",
	"WAWebDetailImage.react",
	"WAWebFocusTracer",
	"WAWebInteractionTracePolicy",
	"WAWebKeyboardHotKeys.react",
	"WAWebName.react",
	"WAWebNewsletterAttributionLogging",
	"WAWebNewsletterDirectoryActionButton.react",
	"WAWebNewsletterDirectoryFilterUtils",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterLoggingUtils",
	"WAWebOpenNewsletterPreviewChat",
	"WAWebOpenStatusQuotedFlow",
	"WAWebStatusCollection",
	"WAWebStatusImageRing.react",
	"WAWebText.react",
	"WAWebWamEnumStatusRowSection",
	"WAWebWamEnumTsSurface",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"useWAWebActiveSelection",
	"useWAWebContactValues",
	"useWAWebListener",
	"useWAWebModelValues",
	"useWAWebNewsletterDiscoveryVisibilityLogger"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useRef, d = u.useState, m = { marginInline10: {
		marginInlineStart: "x1hm9lzh",
		marginInlineEnd: "x1sa5p1d",
		marginLeft: null,
		marginRight: null,
		$$css: !0
	} }, p = 4, _ = { title: {
		display: "x78zum5",
		overflowX: "x6ikm8r",
		overflowY: "x10wlt62",
		$$css: !0
	} };
	function f(e) {
		var t = o("react-compiler-runtime").c(4);
		if (o("WAWebNewsletterGatingUtils").isNewsletterDiscoveryVisibilityLoggingEnabled()) {
			var n;
			return t[0] !== e ? (n = s.jsx(h, babelHelpers.extends({}, e)), t[0] = e, t[1] = n) : n = t[1], n;
		}
		var r;
		return t[2] !== e ? (r = s.jsx(g, babelHelpers.extends({}, e)), t[2] = e, t[3] = r) : r = t[3], r;
	}
	function g(e) {
		var t, n, a, i = o("react-compiler-runtime").c(86), l = e.chatEntryPoint, u = e.directoryFunnelLogger, f = e.index, g = e.newsletter, h = e.newsletterDirectorySectionIndex, y = e.newsletterDirectorySectionName, C = e.onSelect, b = e.active, v;
		i[0] !== e.newsletter.id ? (v = e.newsletter.id.toString(), i[0] = e.newsletter.id, i[1] = v) : v = i[1];
		var S = r("useWAWebActiveSelection")(b, "newsletter-" + v), R = S[0], L = S[1], E = c(), k;
		i[2] === Symbol.for("react.memo_cache_sentinel") ? (k = [
			"name",
			"size",
			"inviteCode",
			"isPreview",
			"statusMetadata"
		], i[2] = k) : k = i[2];
		var I = o("useWAWebModelValues").useOptionalModelValues(g.newsletterMetadata, k), T;
		i[3] === Symbol.for("react.memo_cache_sentinel") ? (T = {
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_NEWSLETTERS_OPEN_CHAT
		}, i[3] = T) : T = i[3];
		var D = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext(T), x = D.failInteraction, $ = D.startInteraction, P = D.stopInteraction, N;
		i[4] === Symbol.for("react.memo_cache_sentinel") ? (N = [o("WAWebContactGetters").getCalculatedStatusMute], i[4] = N) : N = i[4];
		var M = o("useWAWebContactValues").useOptionalContactValues(g.id, N), w = (M == null ? void 0 : M[0]) === !0, A = I != null && o("WATimeUtils").unixTime() - ((t = (n = I.statusMetadata) == null ? void 0 : n.lastStatusSentTime) != null ? t : 0) < o("WATimeUtils").DAY_SECONDS, F;
		i[5] !== A || i[6] !== w ? (F = !w && A && o("WAWebNewsletterGatingUtils").isNewsletterStatusAllEntrypointsEnabled(), i[5] = A, i[6] = w, i[7] = F) : F = i[7];
		var O = F, B;
		i[8] !== O || i[9] !== g.id ? (B = function() {
			var e;
			return (e = O ? o("WAWebStatusCollection").StatusCollection.get(g.id) : null) != null ? e : null;
		}, i[8] = O, i[9] = g.id, i[10] = B) : B = i[10];
		var W = d(B), q = W[0], U = W[1], V;
		i[11] !== O || i[12] !== g.id ? (V = O ? g.id.toString() : "", i[11] = O, i[12] = g.id, i[13] = V) : V = i[13];
		var H = V, G = d(H), z = G[0], j = G[1];
		if (H !== z) {
			var K;
			j(H), U((K = O ? o("WAWebStatusCollection").StatusCollection.get(g.id) : null) != null ? K : null);
		}
		var Q;
		i[14] === Symbol.for("react.memo_cache_sentinel") ? (Q = [
			"add",
			"remove",
			"change:msgsChanged"
		], i[14] = Q) : Q = i[14];
		var X;
		if (i[15] !== g.id ? (X = function(t) {
			if (t.id === g.id) {
				var e;
				U((e = o("WAWebStatusCollection").StatusCollection.get(g.id)) != null ? e : null);
			}
		}, i[15] = g.id, i[16] = X) : X = i[16], o("useWAWebListener").useListener(O ? o("WAWebStatusCollection").StatusCollection : null, Q, X), I == null) return null;
		var Y;
		i[17] !== f || i[18] !== g.id ? (Y = function(t) {
			t.stopPropagation(), o("WAWebOpenStatusQuotedFlow").fetchAndOpenNewsletterStatus({
				event: t,
				newsletterJid: o("WAJids").toNewsletterJid(g.id.toString()),
				statusModelId: g.id,
				rowSection: o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.CHANNEL_DIRECTORY_LIST,
				rowIndex: f
			});
		}, i[17] = f, i[18] = g.id, i[19] = Y) : Y = i[19];
		var J = Y, Z;
		i[20] !== l || i[21] !== u || i[22] !== x || i[23] !== f || i[24] !== g.id || i[25] !== h || i[26] !== y || i[27] !== I.inviteCode || i[28] !== C || i[29] !== e.discoverySurface || i[30] !== $ || i[31] !== P ? (Z = function() {
			$(), u == null || u.logNavigateToNewsletterFromRow(g.id, f), C == null || C(), o("WAWebNewsletterAttributionLogging").NewsletterCoreEventLogger.setNewsletterDirectoryLoggingData({
				directoryCategoryName: y,
				directoryChannelIndex: f,
				directoryCategoryIndex: h
			}), o("WAWebOpenNewsletterPreviewChat").openNewsletterPreviewChat({
				identifier: I.inviteCode,
				chatEntryPoint: l,
				discoverySurface: e.discoverySurface,
				failInteraction: x,
				stopInteraction: P
			});
		}, i[20] = l, i[21] = u, i[22] = x, i[23] = f, i[24] = g.id, i[25] = h, i[26] = y, i[27] = I.inviteCode, i[28] = C, i[29] = e.discoverySurface, i[30] = $, i[31] = P, i[32] = Z) : Z = i[32];
		var ee = Z, te;
		i[33] === Symbol.for("react.memo_cache_sentinel") ? (te = function() {
			r("WAWebFocusTracer").focus(E.current);
		}, i[33] = te) : te = i[33];
		var ne = te, re;
		i[34] !== R ? (re = function() {
			r("WAWebFocusTracer").focus(R.current);
		}, i[34] = R, i[35] = re) : re = i[35];
		var oe = re, ae;
		i[36] !== oe || i[37] !== ee ? (ae = {
			enter: ee,
			space: ee,
			right: ne,
			left: oe
		}, i[36] = oe, i[37] = ee, i[38] = ae) : ae = i[38];
		var ie = ae, le;
		i[39] !== e.discoverySurface ? (le = o("WAWebNewsletterLoggingUtils").getEventSurfaceFromDiscoverySurface(e.discoverySurface), i[39] = e.discoverySurface, i[40] = le) : le = i[40];
		var se;
		i[41] !== l ? (se = o("WAWebNewsletterLoggingUtils").getChannelEntryPoint(l), i[41] = l, i[42] = se) : se = i[42];
		var ue;
		i[43] !== f || i[44] !== h || i[45] !== y || i[46] !== e.discoverySurface || i[47] !== e.newsletterEventUnit || i[48] !== le || i[49] !== se ? (ue = {
			eventSurface: le,
			directoryCategoryIndex: h,
			directoryChannelIndex: f,
			directoryCategoryName: y,
			entryPoint: se,
			discoverySurface: e.discoverySurface,
			eventUnit: e.newsletterEventUnit
		}, i[43] = f, i[44] = h, i[45] = y, i[46] = e.discoverySurface, i[47] = e.newsletterEventUnit, i[48] = le, i[49] = se, i[50] = ue) : ue = i[50];
		var ce = ue, de = (a = e.testid) != null ? a : "newsletter-directory-cell-" + f, me = e.bottomItem === !0 ? null : "bottom-partial", pe;
		i[51] !== g || i[52] !== e.highlightText ? (pe = s.jsx(o("WAWebText.react").WAWebTextTitle, {
			xstyle: _.title,
			children: s.jsx(o("WAWebName.react").Name, {
				chat: g,
				ellipsify: !0,
				highlightText: e.highlightText
			})
		}), i[51] = g, i[52] = e.highlightText, i[53] = pe) : pe = i[53];
		var _e;
		i[54] !== I.size ? (_e = o("WAWebCommonNewsletterStrings").getNewsletterFollowersText(I.size), i[54] = I.size, i[55] = _e) : _e = i[55];
		var fe;
		i[56] !== _e ? (fe = s.jsx(o("WAWebText.react").WAWebTextMuted, { children: _e }), i[56] = _e, i[57] = fe) : fe = i[57];
		var ge;
		i[58] === Symbol.for("react.memo_cache_sentinel") ? (ge = { className: "x1n2onr6" }, i[58] = ge) : ge = i[58];
		var he;
		if (i[59] !== g.id || i[60] !== q) {
			var ye;
			he = q != null && s.jsx(o("WAWebStatusImageRing.react").StatusImageRing, {
				id: g.id,
				size: ((ye = o("WAWebDetailImage.react").getSize(o("WAWebDetailImage.react").DetailImageSize.Small)) != null ? ye : 49) + p,
				stroke: p,
				theme: o("WAWebStatusImageRing.react").RingTheme.ChatList,
				breakRing: !1,
				hideWhenNoUnreadStatuses: !1,
				respectAppTheme: !0
			}), i[59] = g.id, i[60] = q, i[61] = he;
		} else he = i[61];
		var Ce;
		i[62] !== J || i[63] !== g.id || i[64] !== q ? (Ce = q != null ? s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			handlers: {
				enter: J,
				space: J
			},
			role: "button",
			onClick: J,
			children: s.jsx(o("WAWebDetailImage.react").DetailImage, {
				id: g.id,
				size: o("WAWebDetailImage.react").DetailImageSize.Small,
				quality: o("WAWebDetailImage.react").DetailImageQuality.Low,
				showOutline: !1,
				theme: "status_profile_photo_ring",
				tabIndex: 0,
				onClick: J
			})
		}) : s.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: g.id,
			size: o("WAWebDetailImage.react").DetailImageSize.Small,
			quality: o("WAWebDetailImage.react").DetailImageQuality.Low,
			showOutline: !1
		}), i[62] = J, i[63] = g.id, i[64] = q, i[65] = Ce) : Ce = i[65];
		var be;
		i[66] !== he || i[67] !== Ce ? (be = s.jsxs("div", babelHelpers.extends({}, ge, { children: [he, Ce] })), i[66] = he, i[67] = Ce, i[68] = be) : be = i[68];
		var ve;
		i[69] !== u || i[70] !== ce || i[71] !== g ? (ve = s.jsx(r("WAWebNewsletterDirectoryActionButton.react"), {
			ref: E,
			newsletter: g,
			directoryFunnelLogger: u,
			loggingOptions: ce
		}), i[69] = u, i[70] = ce, i[71] = g, i[72] = ve) : ve = i[72];
		var Se;
		i[73] !== L || i[74] !== ee || i[75] !== R || i[76] !== me || i[77] !== pe || i[78] !== fe || i[79] !== be || i[80] !== ve ? (Se = s.jsx(r("WAWebCellV2.react"), {
			ref: R,
			active: L,
			tabIndex: -1,
			onClick: ee,
			colorScheme: "default",
			size: "large",
			border: me,
			containerXStyle: m.marginInline10,
			detailLeftXStyle: o("WDSPaddings.stylex").wdsPaddings.paddingStart12,
			detailRightXStyle: o("WDSPaddings.stylex").wdsPaddings.paddingEnd12,
			primary: pe,
			secondary: fe,
			detailLeft: be,
			detailRight: ve
		}), i[73] = L, i[74] = ee, i[75] = R, i[76] = me, i[77] = pe, i[78] = fe, i[79] = be, i[80] = ve, i[81] = Se) : Se = i[81];
		var Re;
		return i[82] !== ie || i[83] !== de || i[84] !== Se ? (Re = s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			role: "button",
			"data-testid": de,
			handlers: ie,
			children: Se
		}), i[82] = ie, i[83] = de, i[84] = Se, i[85] = Re) : Re = i[85], Re;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(18), n = e.country, a = e.directoryFunnelLogger, i = e.discoverySurface, l = e.index, u = e.listView, c = e.newsletter, d = e.newsletterDirectorySectionIndex, m = e.newsletterDirectorySectionName, p = e.newsletterEventUnit, _ = a == null ? void 0 : a.sessionId, f;
		t[0] !== i || t[1] !== u ? (f = i === o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_DIRECTORY ? o("WAWebNewsletterDirectoryFilterUtils").getNewsletterSelectedPill(u) : void 0, t[0] = i, t[1] = u, t[2] = f) : f = t[2];
		var h;
		t[3] !== n || t[4] !== i || t[5] !== l || t[6] !== c.id.user || t[7] !== d || t[8] !== m || t[9] !== p || t[10] !== _ || t[11] !== f ? (h = {
			cid: c.id.user,
			newsletterEventUnit: p,
			discoverySurface: i,
			newsletterDirectorySectionName: m,
			newsletterIndex: l,
			newsletterDirectorySectionIndex: d,
			newsletterDirectorySessionId: _,
			country: n,
			pillSelected: f
		}, t[3] = n, t[4] = i, t[5] = l, t[6] = c.id.user, t[7] = d, t[8] = m, t[9] = p, t[10] = _, t[11] = f, t[12] = h) : h = t[12];
		var y = r("useWAWebNewsletterDiscoveryVisibilityLogger")(h), C = y[0], b;
		t[13] !== e ? (b = s.jsx(g, babelHelpers.extends({}, e)), t[13] = e, t[14] = b) : b = t[14];
		var v;
		return t[15] !== b || t[16] !== C ? (v = s.jsx("div", {
			ref: C,
			children: b
		}), t[15] = b, t[16] = C, t[17] = v) : v = t[17], v;
	}
	l.default = f;
}), 98);
