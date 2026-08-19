__d("MWV2SecureFileAttachmentErrorPlaceholder.react", [
	"MWChatFileStatusIcon.react",
	"MWFileUtils",
	"MWXTextPairing.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useEffect;
	function c(e) {
		var t, n = o("react-compiler-runtime").c(24), a = e.file, i = e.isRetryableError, l = e.mediaRenderQpl, c = e.onRetry, d = (t = a.filename) != null ? t : o("MWFileUtils").PLACEHOLDER_FILENAME, m;
		n[0] !== d ? (m = d.toString(), n[0] = d, n[1] = m) : m = n[1];
		var p = m, _;
		n[2] !== a ? (_ = o("MWFileUtils").getFileSize(a), n[2] = a, n[3] = _) : _ = n[3];
		var f = _, g, h;
		n[4] !== i || n[5] !== l ? (g = function() {
			l == null || l.addPoint("render-file-error-placeholder", { bool: { is_retryable_error: i } });
		}, h = [l, i], n[4] = i, n[5] = l, n[6] = g, n[7] = h) : (g = n[6], h = n[7]), u(g, h);
		var y;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (y = { className: "x6s0dn4 x78zum5 x87ps6o" }, n[8] = y) : y = n[8];
		var C;
		n[9] !== i || n[10] !== c ? (C = s.jsx(r("MWChatFileStatusIcon.react"), {
			isError: !0,
			isRetryableError: i,
			onRetry: c
		}), n[9] = i, n[10] = c, n[11] = C) : C = n[11];
		var b;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (b = { className: "x1x80s81 x1iyjqo2 x1s688f xz9dl7a xsag5q8 x1g0dm76 xv54qhq x13faqbe" }, n[12] = b) : b = n[12];
		var v;
		n[13] !== p ? (v = s.jsx(r("MWXTextPairing.react"), {
			headline: p,
			headlineColor: "disabled",
			headlineLineLimit: 3,
			level: 4
		}), n[13] = p, n[14] = v) : v = n[14];
		var S;
		n[15] === Symbol.for("react.memo_cache_sentinel") ? (S = { className: "x1x80s81 x889kno" }, n[15] = S) : S = n[15];
		var R;
		n[16] !== f ? (R = s.jsx("div", babelHelpers.extends({}, S, { children: s.jsx(r("MWXTextPairing.react"), {
			body: f,
			bodyColor: "disabled",
			bodyLineLimit: 1,
			level: 4
		}) })), n[16] = f, n[17] = R) : R = n[17];
		var L;
		n[18] !== R || n[19] !== v ? (L = s.jsxs("div", babelHelpers.extends({}, b, { children: [v, R] })), n[18] = R, n[19] = v, n[20] = L) : L = n[20];
		var E;
		return n[21] !== L || n[22] !== C ? (E = s.jsxs("div", babelHelpers.extends({}, y, {
			"data-testid": void 0,
			children: [C, L]
		})), n[21] = L, n[22] = C, n[23] = E) : E = n[23], E;
	}
	l.default = c;
}), 98);
