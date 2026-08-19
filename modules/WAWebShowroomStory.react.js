__d("WAWebShowroomStory.react", [
	"$InternalEnum",
	"WAWebErrorBoundary.react",
	"WAWebExternalLink.react",
	"WAWebShowroomStoryExample.react",
	"WAWebShowroomUtils",
	"err",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = { titleExtrasLink: {
		color: "x14ug900",
		$$css: !0
	} }, c = n("$InternalEnum").Mirrored([
		"ATOM",
		"MOLECULE",
		"UTIL",
		"OTHER"
	]);
	function d(e) {
		var t, n = o("react-compiler-runtime").c(48), a = e.story, i = a.storyName, l, c;
		if (i) {
			var d = String(i) + ".react.js", p;
			n[0] !== d ? (p = m(d), n[0] = d, n[1] = p) : p = n[1];
			var _;
			n[2] !== i || n[3] !== p ? (_ = s.jsxs(s.Fragment, { children: [s.jsxs(o("WAWebExternalLink.react").ExternalLink, {
				href: p,
				xstyle: u.titleExtrasLink,
				children: [i, ".react.js"]
			}), "\xA0 · \xA0"] }), n[2] = i, n[3] = p, n[4] = _) : _ = n[4], l = _;
			var f = String(i) + ".story.js", g;
			n[5] !== f ? (g = m(f), n[5] = f, n[6] = g) : g = n[6];
			var h;
			n[7] !== g ? (h = s.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: g,
				xstyle: u.titleExtrasLink,
				children: "Story source"
			}), n[7] = g, n[8] = h) : h = n[8], c = h;
		}
		var y;
		n[9] === Symbol.for("react.memo_cache_sentinel") ? (y = [], n[9] = y) : y = n[9];
		var C = y;
		if (a.examples.length > 0) {
			var b;
			if (n[10] !== a.examples || n[11] !== a.storyName || n[12] !== i) {
				var v;
				n[14] !== a.storyName || n[15] !== i ? (v = function(t, n) {
					var e;
					if (typeof t == "object" && t.example != null) e = s.jsx(r("WAWebShowroomStoryExample.react"), { example: t }, a.storyName + "-" + n);
					else if (typeof t == "function") {
						var o = t;
						e = s.jsx(o, {});
					} else throw r("err")("Invalid example provided for: " + (i != null ? i : "unknown") + " ");
					return s.jsx("div", { children: e }, n);
				}, n[14] = a.storyName, n[15] = i, n[16] = v) : v = n[16], b = a.examples.map(v), n[10] = a.examples, n[11] = a.storyName, n[12] = i, n[13] = b;
			} else b = n[13];
			C = b;
		}
		var S;
		if (n[17] !== a.description) {
			var R;
			S = typeof a.description == "string" ? o("WAWebShowroomUtils").formatText(a.description) : (R = a.description) != null ? R : "", n[17] = a.description, n[18] = S;
		} else S = n[18];
		var L = S, E;
		n[19] === Symbol.for("react.memo_cache_sentinel") ? (E = { className: "x78zum5 xdt5ytf x5yr21d" }, n[19] = E) : E = n[19];
		var k, I, T;
		n[20] === Symbol.for("react.memo_cache_sentinel") ? (k = { className: "x1c4vz4f x2lah0s xdl72j9 x1p5oq8j xwxc41k xf7qf19 xjfo4ez xso031l x1q0q8m5 x120ee7l" }, I = { className: "x78zum5 x1pha0wt xod5an3" }, T = { className: "xbmvrgn x1q74xe4 xk50ysn x14ug900 x1yrajzq" }, n[20] = k, n[21] = I, n[22] = T) : (k = n[20], I = n[21], T = n[22]);
		var D;
		n[23] !== i ? (D = s.jsx("span", babelHelpers.extends({}, T, {
			"data-testid": "showroom-story-title",
			children: i
		})), n[23] = i, n[24] = D) : D = n[24];
		var x;
		n[25] === Symbol.for("react.memo_cache_sentinel") ? (x = { className: "x1pg5gke xhslqc4 x11njtxf" }, n[25] = x) : x = n[25];
		var $;
		n[26] !== l || n[27] !== c ? ($ = s.jsxs("span", babelHelpers.extends({}, x, { children: [l, c] })), n[26] = l, n[27] = c, n[28] = $) : $ = n[28];
		var P;
		n[29] !== D || n[30] !== $ ? (P = s.jsx("div", babelHelpers.extends({}, k, { children: s.jsxs("div", babelHelpers.extends({}, I, { children: [D, $] })) })), n[29] = D, n[30] = $, n[31] = P) : P = n[31];
		var N, M;
		n[32] === Symbol.for("react.memo_cache_sentinel") ? (N = { className: "x1iyjqo2 xs83m0k xdl72j9 x1p5oq8j xf7qf19 xjfo4ez x1g2khh7 x1odjw0f" }, M = { className: "x78zum5 xdt5ytf xp1r0qw x1ap80js x1iymm2a x6prxxf x37zpob" }, n[32] = N, n[33] = M) : (N = n[32], M = n[33]);
		var w;
		n[34] !== L ? (w = s.jsx("div", babelHelpers.extends({}, M, { children: L })), n[34] = L, n[35] = w) : w = n[35];
		var A = (t = a.storyName) != null ? t : "missing-name", F;
		n[36] === Symbol.for("react.memo_cache_sentinel") ? (F = { className: "x78zum5 xdt5ytf x7oemit" }, n[36] = F) : F = n[36];
		var O;
		n[37] !== C ? (O = s.jsx("div", babelHelpers.extends({}, F, { children: C })), n[37] = C, n[38] = O) : O = n[38];
		var B;
		n[39] !== A || n[40] !== O ? (B = s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "showroom-story",
			sendLogs: !1,
			children: O
		}, A), n[39] = A, n[40] = O, n[41] = B) : B = n[41];
		var W;
		n[42] !== w || n[43] !== B ? (W = s.jsxs("div", babelHelpers.extends({}, N, { children: [w, B] })), n[42] = w, n[43] = B, n[44] = W) : W = n[44];
		var q;
		return n[45] !== P || n[46] !== W ? (q = s.jsxs("div", babelHelpers.extends({}, E, {
			"data-testid": "showroom-story",
			children: [P, W]
		})), n[45] = P, n[46] = W, n[47] = q) : q = n[47], q;
	}
	function m(e) {
		var t = "tbgfl " + e;
		return "https://www.internalfb.com/intern/bunny/?q=" + encodeURIComponent(t);
	}
	l.StorySectionType = c, l.Story = d;
}), 98);
