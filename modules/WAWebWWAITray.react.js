__d("WAWebWWAITray.react", [
	"fbt",
	"WAWebUseWWAIToneConfig",
	"WAWebWWAIEmptyState.react",
	"WAWebWWAIErrorState.react",
	"WAWebWWAIPrivateProcessingBadge.react",
	"WAWebWWAISuggestionList.react",
	"WAWebWWAIToneSelector.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback, d = "x1uknk9t-B";
	function m(e) {
		var t = o("react-compiler-runtime").c(32), n = e.api, a = e.getComposeText, i = e.onAcceptSuggestion, l = e.onClose, c = o("WAWebUseWWAIToneConfig").useWWAIToneConfig(), d = n.state, m;
		t[0] !== n || t[1] !== a ? (m = function(t) {
			n.changeTone(a(), t);
		}, t[0] = n, t[1] = a, t[2] = m) : m = t[2];
		var _ = m, f;
		t[3] !== n || t[4] !== i ? (f = function(t) {
			n.selectSuggestion(t), i == null || i(t.text);
		}, t[3] = n, t[4] = i, t[5] = f) : f = t[5];
		var g = f, h;
		t[6] !== n || t[7] !== a || t[8] !== d.activeTone ? (h = function() {
			n.changeTone(a(), d.activeTone);
		}, t[6] = n, t[7] = a, t[8] = d.activeTone, t[9] = h) : h = t[9];
		var y = h, C;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (C = { className: "xixxii4 x13vifvy x1o0tod xtijo5x x1ey2m1c xhtitgo" }, t[10] = C) : C = t[10];
		var b;
		t[11] !== l ? (b = u.jsx("div", babelHelpers.extends({}, C, {
			onMouseDown: l,
			role: "none"
		})), t[11] = l, t[12] = b) : b = t[12];
		var v;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (v = { className: "x1n2onr6 xzkaem6 x78zum5 xdt5ytf x8a3fw1 x1p57kb1 xvpt6g3 xdx6fka xvtqlqk x1vd4hg5 x6ikm8r x10wlt62 x16w0wmm x6nvzda x4i4b9w xhl9efl xj65ea0 xkfubxc x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9 xhpbw76 x5hsz1j xa3vuyk x1u6ievf" }, t[13] = v) : v = t[13];
		var S, R;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (S = s._(
			/*BTDS*/
			""
		).toString(), R = { className: "x78zum5 x1q0g3np x1qughib x6s0dn4" }, t[14] = S, t[15] = R) : (S = t[14], R = t[15]);
		var L;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (L = u.jsxs("div", babelHelpers.extends({}, R, {
			"data-testid": "wwai_tray_header",
			children: [u.jsx(r("WDSText.react"), {
				type: "Body2Emphasized",
				colorName: "contentDefault",
				children: s._(
					/*BTDS*/
					""
				)
			}), u.jsx(r("WAWebWWAIPrivateProcessingBadge.react"), {})]
		})), t[16] = L) : L = t[16];
		var E;
		t[17] !== _ || t[18] !== d.activeTone || t[19] !== c ? (E = u.jsx(r("WAWebWWAIToneSelector.react"), {
			activeTone: d.activeTone,
			onToneChange: _,
			tones: c
		}), t[17] = _, t[18] = d.activeTone, t[19] = c, t[20] = E) : E = t[20];
		var k;
		t[21] === Symbol.for("react.memo_cache_sentinel") ? (k = { className: "x1iyjqo2 x1odjw0f x2lwn1j" }, t[21] = k) : k = t[21];
		var I;
		t[22] !== y || t[23] !== g || t[24] !== d ? (I = u.jsx("div", babelHelpers.extends({}, k, { children: u.jsx(p, {
			onRetry: y,
			onSelectSuggestion: g,
			state: d
		}) })), t[22] = y, t[23] = g, t[24] = d, t[25] = I) : I = t[25];
		var T;
		t[26] !== E || t[27] !== I ? (T = u.jsxs("section", babelHelpers.extends({}, v, {
			"data-testid": "wwai_tray",
			"aria-label": S,
			children: [
				L,
				E,
				I
			]
		})), t[26] = E, t[27] = I, t[28] = T) : T = t[28];
		var D;
		return t[29] !== T || t[30] !== b ? (D = u.jsxs(u.Fragment, { children: [b, T] }), t[29] = T, t[30] = b, t[31] = D) : D = t[31], D;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(8), n = e.onRetry, a = e.onSelectSuggestion, i = e.state;
		if (i.state === "error") {
			var l, s = (l = i.error) != null ? l : "unknown", c;
			return t[0] !== n || t[1] !== s ? (c = u.jsx(r("WAWebWWAIErrorState.react"), {
				errorType: s,
				onRetry: n
			}), t[0] = n, t[1] = s, t[2] = c) : c = t[2], c;
		}
		if (i.state === "empty") {
			var d;
			return t[3] === Symbol.for("react.memo_cache_sentinel") ? (d = u.jsx(r("WAWebWWAIEmptyState.react"), {}), t[3] = d) : d = t[3], d;
		}
		var m = i.state === "loading", p;
		return t[4] !== a || t[5] !== i.suggestions || t[6] !== m ? (p = u.jsx(r("WAWebWWAISuggestionList.react"), {
			isLoading: m,
			onSelectSuggestion: a,
			suggestions: i.suggestions
		}), t[4] = a, t[5] = i.suggestions, t[6] = m, t[7] = p) : p = t[7], p;
	}
	l.default = m;
}), 226);
