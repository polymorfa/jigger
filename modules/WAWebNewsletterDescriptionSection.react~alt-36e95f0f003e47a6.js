__d("WAWebNewsletterDescriptionSection.react", [
	"fbt",
	"WALogger",
	"WAWebActionToast.react",
	"WAWebChatGetters",
	"WAWebChatInfoDescriptionSection.react",
	"WAWebClock",
	"WAWebCmd",
	"WAWebEditNewsletterMetadataAction",
	"WAWebFbtCommon",
	"WAWebFrontendChatGetters",
	"WAWebToastManager",
	"WAWebWamEnumChannelAdminAction",
	"err",
	"react",
	"react-compiler-runtime",
	"useWAWebChatValues",
	"useWAWebEventTargetValue",
	"useWAWebListener",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useRef, _ = d.useState;
	function f(e) {
		var t = o("react-compiler-runtime").c(30), n = e.adminFunnelLogger, a = e.chat, i = e.focusOnMount, l = _(i != null ? i : !1), u = l[0], d = l[1], m;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (m = [
			o("WAWebChatGetters").getId,
			o("WAWebChatGetters").getIsNewsletter,
			o("WAWebChatGetters").getId,
			o("WAWebFrontendChatGetters").getNewsletterMetadata
		], t[0] = m) : m = t[0], o("useWAWebChatValues").useChatValues(a.id, m);
		var f;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (f = [
			"description",
			"creationTime",
			"membershipType"
		], t[1] = f) : f = t[1];
		var h = o("useWAWebModelValues").useOptionalModelValues(a.newsletterMetadata, f), y;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (y = ["change:description"], t[2] = y) : y = t[2];
		var C;
		t[3] !== (h == null ? void 0 : h.description) ? (C = function() {
			return (h == null ? void 0 : h.description) || "";
		}, t[3] = h == null ? void 0 : h.description, t[4] = C) : C = t[4];
		var b = r("useWAWebEventTargetValue")(h, y, C), v;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (v = function() {
			d(!0);
		}, t[5] = v) : v = t[5], o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "edit_newsletter_description", v);
		var S = _(b), R = S[0], L = S[1], E = p(b), k;
		t[6] !== n || t[7] !== R ? (k = function() {
			R !== E.current && (E.current = R, n.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_DESCRIPTION_SET));
		}, t[6] = n, t[7] = R, t[8] = k) : k = t[8];
		var I = k, T;
		t[9] !== n || t[10] !== a || t[11] !== I ? (T = async function(t, r) {
			var e = r === void 0 ? "" : r;
			I(), n.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_CONFIRMATION_TAP), await g({
				chat: a,
				desc: e,
				adminFunnelLogger: n,
				setIsEditing: d
			});
		}, t[9] = n, t[10] = a, t[11] = I, t[12] = T) : T = t[12];
		var D = T;
		if (h == null) return null;
		var x;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (x = s._(
			/*BTDS*/
			""
		), t[13] = x) : x = t[13];
		var $ = x, P = h.creationTime, N;
		t[14] !== P || t[15] !== h.creationTime ? (N = P != null ? o("WAWebClock").Clock.newsletterDescriptionCreatedStr(h.creationTime) : null, t[14] = P, t[15] = h.creationTime, t[16] = N) : N = t[16];
		var M = N, w;
		if (t[17] !== h) {
			var A;
			w = (A = h == null ? void 0 : h.iAmAdminOrOwner()) != null ? A : !1, t[17] = h, t[18] = w;
		} else w = t[18];
		var F;
		t[19] !== I ? (F = function() {
			I(), d(!1);
		}, t[19] = I, t[20] = F) : F = t[20];
		var O;
		return t[21] !== a || t[22] !== M || t[23] !== b || t[24] !== i || t[25] !== D || t[26] !== u || t[27] !== w || t[28] !== F ? (O = c.jsx(r("WAWebChatInfoDescriptionSection.react"), {
			description: b,
			bulletPointsEnabled: !1,
			expandedFormattingEnabled: !1,
			chat: a,
			testid: "newsletter-info-drawer-description-title-input",
			containerTestId: "newsletter-info-drawer-description-container",
			emptyValuePlaceholder: $,
			inputPlaceholder: $,
			creationString: M,
			canSetDescription: w,
			setDescriptionAction: D,
			onChange: L,
			onBlur: F,
			setIsEditing: u,
			focusOnMount: i,
			preventBlankDescription: !0
		}), t[21] = a, t[22] = M, t[23] = b, t[24] = i, t[25] = D, t[26] = u, t[27] = w, t[28] = F, t[29] = O) : O = t[29], O;
	}
	function g(t) {
		var n, a = t.chat, i = t.desc, l = i === void 0 ? "" : i, u = t.adminFunnelLogger, d = t.setIsEditing, m = t.toastId, p = m === void 0 ? o("WAWebActionToast.react").genId() : m;
		if (/\s/.test(l) && l.trim().length === 0) return Promise.reject(r("err")("Blank space channel description"));
		var _ = o("WAWebEditNewsletterMetadataAction").editNewsletterMetadataAction(a, { editDescription: !0 }, { description: l }), f = (n = a.newsletterMetadata) == null ? void 0 : n.description, h = new (o("WAWebActionToast.react")).ActionType(s._(
			/*BTDS*/
			""
		)), y = _.then(function() {
			u.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_SUCCESS);
			var e = f ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
			return new (o("WAWebActionToast.react")).ActionType(e, {
				actionText: r("WAWebFbtCommon")("Undo"),
				actionHandler: function() {
					return g({
						chat: a,
						desc: f,
						adminFunnelLogger: u,
						toastId: p
					});
				}
			});
		}).catch(function(t) {
			return u.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_FAILURE), o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["channel:handleEditDescription dropped"]))), new (o("WAWebActionToast.react")).ActionType(s._(
				/*BTDS*/
				""
			), {
				actionText: r("WAWebFbtCommon")("Try again"),
				actionHandler: function() {
					return g({
						chat: a,
						desc: f,
						adminFunnelLogger: u,
						toastId: p
					});
				}
			});
		}).finally(function() {
			d && d(!1);
		});
		return o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebActionToast.react").ActionToast, {
			id: p,
			initialAction: h,
			pendingAction: y
		})), _;
	}
	l.default = f;
}), 226);
