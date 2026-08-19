__d("WAWebDialerPadDrawer.react", [
	"fbt",
	"WAWebDialerPad.react",
	"WAWebDialerPadSearchResult.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerUtils",
	"WAWebRichTextField.react",
	"WAWebTabOrder",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useRef, m = c.useState, p = { search: {
		paddingInlineEnd: "x1xnnf8n",
		paddingInlineStart: "x106a9eq",
		color: "x14ug900",
		$$css: !0
	} };
	function _(e) {
		var t = o("react-compiler-runtime").c(29), n = e.entryPoint, a = e.initialPhoneNumber, i = e.onBack, l = e.onCancel, c = e.onContactClick, _ = e.ref, f = e.viewType, g = m(a != null ? a : ""), h = g[0], y = g[1], C = d(null), b;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (b = function(t) {
			var e = t.text;
			y(e);
		}, t[0] = b) : b = t[0];
		var v = b, S;
		t[1] !== h ? (S = function(t) {
			y(t === "backspace" ? h.slice(0, -1) : h + t), C.current != null && C.current.triggerFocus();
		}, t[1] = h, t[2] = S) : S = t[2];
		var R = S, L;
		t[3] !== f ? (L = o("WAWebDrawerUtils").getDrawerHeaderType(f), t[3] = f, t[4] = L) : L = t[4];
		var E = L, k;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (k = {
			surface: "unknown",
			viewName: "dialer-pad"
		}, t[5] = k) : k = t[5];
		var I;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (I = s._(
			/*BTDS*/
			""
		), t[6] = I) : I = t[6];
		var T;
		t[7] !== E || t[8] !== i || t[9] !== l ? (T = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: I,
			type: E,
			onBack: i,
			onCancel: l
		}), t[7] = E, t[8] = i, t[9] = l, t[10] = T) : T = t[10];
		var D;
		t[11] !== h ? (D = u.jsx(o("WAWebRichTextField.react").RichTextField, {
			ref: C,
			containerXstyle: p.search,
			value: h,
			managed: !0,
			theme: "phone-input",
			lineWrap: !1,
			startActive: !0,
			emojiBtnPosition: "none",
			hideFloatingLabel: !0,
			focusOnMount: !0,
			testid: "phone-number-input",
			onChange: v,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_SEARCH
		}), t[11] = h, t[12] = D) : D = t[12];
		var x;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (x = { className: "xy75621 xx6bls6" }, t[13] = x) : x = t[13];
		var $;
		t[14] !== n || t[15] !== c || t[16] !== h ? ($ = u.jsx("div", babelHelpers.extends({}, x, { children: u.jsx(r("WAWebDialerPadSearchResult.react"), {
			searchText: h,
			onResultClick: c,
			entryPoint: n
		}) })), t[14] = n, t[15] = c, t[16] = h, t[17] = $) : $ = t[17];
		var P;
		t[18] !== R ? (P = u.jsx(r("WAWebDialerPad.react"), {
			onClick: R,
			testid: "dialer-pad"
		}), t[18] = R, t[19] = P) : P = t[19];
		var N;
		t[20] !== P || t[21] !== D || t[22] !== $ ? (N = u.jsxs(r("WAWebDrawerBody.react"), { children: [
			D,
			$,
			P
		] }), t[20] = P, t[21] = D, t[22] = $, t[23] = N) : N = t[23];
		var M;
		return t[24] !== _ || t[25] !== N || t[26] !== T || t[27] !== f ? (M = u.jsxs(r("WAWebDrawer.react"), {
			ref: _,
			testid: "dialer-pad-drawer",
			viewType: f,
			tsNavigationData: k,
			children: [T, N]
		}), t[24] = _, t[25] = N, t[26] = T, t[27] = f, t[28] = M) : M = t[28], M;
	}
	l.default = _;
}), 226);
