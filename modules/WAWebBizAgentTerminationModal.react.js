__d("WAWebBizAgentTerminationModal.react", [
	"fbt",
	"WALogger",
	"WAWebAuthAgentConsumerJourneyLogger",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebConfirmPopup.react",
	"WAWebFindChatAction",
	"WAWebModalManager",
	"WAWebWidFactory",
	"getErrorSafe",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = c || (c = o("react")), m = c.useEffect;
	function p(e, t, n) {
		var r = o("react-compiler-runtime").c(5), a, i;
		r[0] !== e || r[1] !== n || r[2] !== t ? (a = function() {
			o("WAWebAuthAgentConsumerJourneyLogger").logBottomSheetImpression(e, t, null, n);
		}, i = [
			e,
			t,
			n
		], r[0] = e, r[1] = n, r[2] = t, r[3] = a, r[4] = i) : (a = r[3], i = r[4]), m(a, i);
	}
	function _(t) {
		var n = o("react-compiler-runtime").c(32), a = t.businessJid, i = t.obaPhoneNumber, l = t.offboardingType, u = t.parentCompanyName;
		p(a, u, l);
		var c;
		n[0] !== i ? (c = function() {
			var t;
			try {
				t = o("WAWebWidFactory").createUserWidOrThrow(i);
			} catch (t) {
				var n = t;
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["agent-termination-modal: invalid obaPhoneNumber"]))).catching(r("getErrorSafe")(n)).sendLogs("agent-termination-invalid-oba");
				return;
			}
			o("WAWebModalManager").ModalManager.close(), o("WAWebFindChatAction").findOrCreateLatestChat(t, "agentOffboardTermination").then(g).catch(f);
		}, n[0] = i, n[1] = c) : c = n[1];
		var m = c, _ = u !== "", h;
		n[2] !== _ || n[3] !== u ? (h = _ ? s._(
			/*BTDS*/
			"",
			[s._param("companyName", u)]
		) : s._(
			/*BTDS*/
			""
		), n[2] = _, n[3] = u, n[4] = h) : h = n[4];
		var y = h, C;
		n[5] !== _ || n[6] !== u ? (C = _ ? s._(
			/*BTDS*/
			"",
			[s._param("companyName", u)]
		) : s._(
			/*BTDS*/
			""
		), n[5] = _, n[6] = u, n[7] = C) : C = n[7];
		var b = C, v;
		n[8] !== _ || n[9] !== u ? (v = _ ? s._(
			/*BTDS*/
			"",
			[s._param("companyName", u)]
		) : s._(
			/*BTDS*/
			""
		), n[8] = _, n[9] = u, n[10] = v) : v = n[10];
		var S = v, R;
		n[11] === Symbol.for("react.memo_cache_sentinel") ? (R = s._(
			/*BTDS*/
			""
		), n[11] = R) : R = n[11];
		var L = R, E;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (E = { className: "x2b8uid" }, n[12] = E) : E = n[12];
		var k;
		n[13] !== b ? (k = d.jsx("div", babelHelpers.extends({ "data-testid": "agent-termination-modal-title" }, E, { children: d.jsx("strong", { children: b }) })), n[13] = b, n[14] = k) : k = n[14];
		var I;
		n[15] === Symbol.for("react.memo_cache_sentinel") ? (I = { className: "x78zum5 xdt5ytf xp1r0qw xw7yly9 x1yc453h" }, n[15] = I) : I = n[15];
		var T, D, x;
		n[16] === Symbol.for("react.memo_cache_sentinel") ? (x = { className: "x1cy8zhl x78zum5 x1q0g3np xtqikln" }, T = d.jsx("span", {
			className: "x2lah0s xr9ek0c",
			children: "⊘"
		}), D = { className: "x1iyjqo2 xs83m0k x1t1x2f9" }, n[16] = T, n[17] = D, n[18] = x) : (T = n[16], D = n[17], x = n[18]);
		var $;
		n[19] !== S ? ($ = d.jsxs("div", babelHelpers.extends({ "data-testid": "agent-termination-modal-bullet-1" }, x, { children: [T, d.jsx("span", babelHelpers.extends({}, D, { children: S }))] })), n[19] = S, n[20] = $) : $ = n[20];
		var P;
		n[21] === Symbol.for("react.memo_cache_sentinel") ? (P = d.jsxs("div", {
			"data-testid": "agent-termination-modal-bullet-2",
			className: "x1cy8zhl x78zum5 x1q0g3np xtqikln",
			children: [d.jsx("span", {
				className: "x2lah0s xr9ek0c",
				children: "✕"
			}), d.jsx("span", {
				className: "x1iyjqo2 xs83m0k x1t1x2f9",
				children: L
			})]
		}), n[21] = P) : P = n[21];
		var N;
		n[22] !== $ ? (N = d.jsxs("div", babelHelpers.extends({ "data-testid": "agent-termination-modal-bullets" }, I, { children: [$, P] })), n[22] = $, n[23] = N) : N = n[23];
		var M;
		n[24] !== N || n[25] !== k ? (M = d.jsxs(d.Fragment, { children: [k, N] }), n[24] = N, n[25] = k, n[26] = M) : M = n[26];
		var w = M, A;
		n[27] === Symbol.for("react.memo_cache_sentinel") ? (A = s._(
			/*BTDS*/
			""
		), n[27] = A) : A = n[27];
		var F;
		return n[28] !== w || n[29] !== y || n[30] !== m ? (F = d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "agent-termination-modal",
			onOK: o("WAWebModalManager").closeModalManager,
			okText: A,
			cancelText: y,
			onCancel: m,
			children: w
		}), n[28] = w, n[29] = y, n[30] = m, n[31] = F) : F = n[31], F;
	}
	function f(e) {
		o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["agent-termination-modal: failed to navigate to company chat"]))).catching(r("getErrorSafe")(e)).sendLogs("agent-termination-nav-failed");
	}
	function g(e) {
		var t = e.chat;
		return o("WAWebCmd").Cmd.openChatFromUnread({
			chat: t,
			chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.ContactInfo
		});
	}
	l.default = _;
}), 226);
