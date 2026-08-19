__d("WAWebEmojiText.story", [
	"WAWebButton.react",
	"WAWebEmojiText.react",
	"WAWebFormatConfigurationConversation",
	"WAWebL10N",
	"WAWebShowroomUtils",
	"react",
	"react-compiler-runtime",
	"useWAWebSelect",
	"useWAWebTimeout"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = o("WAWebFormatConfigurationConversation").Conversation({
		parseInlineCode: !0,
		parseLists: !0,
		parseQuotes: !0
	});
	function d(e) {
		var t = o("react-compiler-runtime").c(22), n = e.chunks, r = e.speed, a = u(!0), i = a[0], l = a[1], d = u(0), m = d[0], p = d[1], _;
		t[0] !== m ? (_ = function() {
			return p(m + 1);
		}, t[0] = m, t[1] = _) : _ = t[1];
		var f = o("useWAWebTimeout").useTimeout(_, (r != null ? r : 1) * 1e3), g = f[0], h = f[1], y = m >= n.length;
		!i && !y ? (g(), m === 0 && p(1)) : h();
		var C;
		t[2] !== i ? (C = function() {
			l(!i);
		}, t[2] = i, t[3] = C) : C = t[3];
		var b = C, v;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (v = function() {
			p(0), l(!0);
		}, t[4] = v) : v = t[4];
		var S = v, R;
		if (m > 0) {
			var L;
			t[5] !== n || t[6] !== m ? (L = n.slice(0, m).join(""), t[5] = n, t[6] = m, t[7] = L) : L = t[7];
			var E = L, k = y ? E.length : E.length - n[m - 1].length, I;
			t[8] !== k || t[9] !== E ? (I = s.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: E,
				lastBotEditBodyLength: k,
				formatters: c
			}, k), t[8] = k, t[9] = E, t[10] = I) : I = t[10], R = I;
		}
		var T;
		i ? m === 0 ? T = "Start" : T = "Resume" : T = "Pause";
		var D;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (D = { className: "x1sy10c2 x3aesyq xieb3on xqsn43r x1cnzs8 x1xnnf8n xx6bls6 x106a9eq x12peec7 x16qb05n xi7iut8 x1dm3dyd x1pv694p x1o2sk6j x126k92a" }, t[11] = D) : D = t[11];
		var x;
		t[12] !== b || t[13] !== y || t[14] !== T ? (x = s.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
			onClick: b,
			disabled: y,
			children: T
		}), t[12] = b, t[13] = y, t[14] = T, t[15] = x) : x = t[15];
		var $;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? ($ = s.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
			onClick: S,
			children: "Reset"
		}), t[16] = $) : $ = t[16];
		var P;
		t[17] !== x ? (P = s.jsxs("div", { children: [x, $] }), t[17] = x, t[18] = P) : P = t[18];
		var N;
		return t[19] !== R || t[20] !== P ? (N = s.jsxs("div", babelHelpers.extends({}, D, { children: [P, R] })), t[19] = R, t[20] = P, t[21] = N) : N = t[21], N;
	}
	var m = "{SPLIT}";
	function p(e) {
		return [].concat(e.split(m), ["\n\n===END==="]);
	}
	function _() {
		var e = o("react-compiler-runtime").c(24), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [
			1,
			2,
			5,
			10
		], e[0] = t) : t = e[0];
		var n = o("useWAWebSelect").useSelect("Animation speed (in seconds)", t), r = n[0], a = n[1], i;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (i = { className: "x1sy10c2 x3aesyq xieb3on xqsn43r" }, e[1] = i) : i = e[1];
		var l;
		e[2] === Symbol.for("react.memo_cache_sentinel") ? (l = s.jsx("h2", { children: "Example: Single line" }), e[2] = l) : l = e[2];
		var u;
		e[3] === Symbol.for("react.memo_cache_sentinel") ? (u = p("Lorem ipsum dolor sit amet, consectetur adipiscing elit. " + m + "Sed non ligula at est consectetur *venenatis. " + m + "Vestibulum* ut varius nunc. `Nullam sollicitudin orci quis lacus eleifend, " + m + "in commodo odio pharetra`. Fusce posuere nisi et tincidunt tristique. " + m + "Aliquam a nisl condimentum, blandit quam nec, sagittis arcu."), e[3] = u) : u = e[3];
		var c;
		e[4] !== r ? (c = s.jsxs("div", { children: [l, s.jsx(d, {
			speed: r,
			chunks: u
		})] }), e[4] = r, e[5] = c) : c = e[5];
		var _;
		e[6] === Symbol.for("react.memo_cache_sentinel") ? (_ = s.jsx("h2", { children: "Example: Multilines" }), e[6] = _) : _ = e[6];
		var f;
		e[7] === Symbol.for("react.memo_cache_sentinel") ? (f = p("Lorem ipsum dolor sit amet, consectetur adipiscing elit." + m + "\n\nSed non ligula at est consectetur venenatis." + m + "\n\nVestibulum ut varius nunc. Nullam sollicitudin orci quis lacus eleifend, in commodo odio pharetra." + m + "\n\nFusce posuere nisi et tincidunt tristique." + m + "\n\n```\nAliquam a nisl condimentum, blandit quam nec, sagittis arcu.\nAliquam a nisl condimentum, blandit quam nec, sagittis arcu." + m + "\nAliquam a nisl condimentum, blandit quam nec, sagittis arcu.\nAliquam a nisl condimentum, blandit quam nec, sagittis arcu.\n```"), e[7] = f) : f = e[7];
		var g;
		e[8] !== r ? (g = s.jsxs("div", { children: [_, s.jsx(d, {
			speed: r,
			chunks: f
		})] }), e[8] = r, e[9] = g) : g = e[9];
		var h;
		e[10] === Symbol.for("react.memo_cache_sentinel") ? (h = s.jsx("h2", { children: "Example: Lists" }), e[10] = h) : h = e[10];
		var y;
		e[11] === Symbol.for("react.memo_cache_sentinel") ? (y = p("Lorem ipsum dolor sit amet, consectetur adipiscing elit:" + m + "\n\n* Lorem ipsum dolor sit amet, consectetur adipiscing elit." + m + "\n* Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." + m + "\n* Urna nec tincidunt augue. Praesent eleifend neque eu enim." + m + "\n* Etiam porta sem malesuada magna mollis euismod." + m + "\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit:" + m + "\n\n1. Lorem ipsum dolor sit amet, consectetur adipiscing elit." + m + "\n2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." + m + "\n3. Urna nec tincidunt augue. Praesent eleifend neque eu enim." + m + "\n4. Etiam porta sem malesuada magna mollis euismod."), e[11] = y) : y = e[11];
		var C;
		e[12] !== r ? (C = s.jsxs("div", { children: [h, s.jsx(d, {
			speed: r,
			chunks: y
		})] }), e[12] = r, e[13] = C) : C = e[13];
		var b;
		e[14] === Symbol.for("react.memo_cache_sentinel") ? (b = s.jsx("h2", { children: "Example: List (partial items)" }), e[14] = b) : b = e[14];
		var v;
		e[15] === Symbol.for("react.memo_cache_sentinel") ? (v = p("Lorem ipsum dolor sit amet, consectetur adipiscing elit:" + m + "\n\n* Donec ullamcorper, `felis a pretium" + m + " commodo`, nulla nibh vehicula odio.\n* Nulla varius eu enim et malesuada " + m + "*fames ac turpis* egestas.\n* Vestibulum ante ipsum ```primis in" + m + " faucibus orci``` luctu nibh.\n* Cum sociis" + m + " natoque penatibus et magnisdis" + m + " parturient montes, nascetur" + m + " ridiculus mus. dis parturient" + m + " montes, nascetur ridiculus mus.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit:" + m + "\n\n1. Donec ullamcorper, `felis a pretium" + m + " commodo`, nulla nibh vehicula odio.\n2. Nulla varius eu enim et malesuada " + m + "*fames ac turpis* egestas.\n3. Vestibulum ante ipsum ```primis in" + m + " faucibus orci``` luctu nibh.\n5. Cum sociis" + m + " natoque penatibus et magnisdis" + m + " parturient montes, nascetur" + m + " ridiculus mus. dis parturient" + m + " montes, nascetur ridiculus mus."), e[15] = v) : v = e[15];
		var S;
		e[16] !== r ? (S = s.jsxs("div", { children: [b, s.jsx(d, {
			speed: r,
			chunks: v
		})] }), e[16] = r, e[17] = S) : S = e[17];
		var R;
		return e[18] !== a || e[19] !== C || e[20] !== S || e[21] !== c || e[22] !== g ? (R = s.jsxs("div", babelHelpers.extends({}, i, { children: [
			a,
			c,
			g,
			C,
			S
		] })), e[18] = a, e[19] = C, e[20] = S, e[21] = c, e[22] = g, e[23] = R) : R = e[23], R;
	}
	function f() {
		var e = {
			formatters: c,
			direction: r("WAWebL10N").LR("ltr", "rtl"),
			inferLinesDirection: !0
		}, t = "*LTR direction*\nLTR אָהַבְתָּ אֵת\nLTR אָהַבְתָּ אֵת אָהַבְתָּ אֵת אָהַבְתָּ אֵת אָהַבְתָּ אֵת אָהַבְתָּ אֵת\n\n*RTL direction*\nאָהַבְתָּ אֵת RTL\nאָהַבְתָּ אֵת אָהַבְתָּ אֵת אָהַבְתָּ אֵת אָהַבְתָּ אֵת RTL", n = "----------------------------\n*RTL direction*\nאָהַבְתָּ אֵת *RTL*\n*אָהַבְתָּ אֵת* RTL\n*אָהַבְתָּ אֵת* *RTL*\n_אָהַבְתָּ אֵת_ *RTL*\n~אָהַבְתָּ אֵת~ *RTL*\n`אָהַבְתָּ אֵת` *RTL*\n~_*אָהַבְתָּ אֵת*_~ RTL (nested formats)\n```אָהַבְתָּ אֵת``` RTL (monospace)\n\n*LTR direction*\nltr אָהַבְתָּ אֵת\n*ltr* אָהַבְתָּ אֵת\n*ltr* *אָהַבְתָּ אֵת*\n_ltr_ אָהַבְתָּ אֵת\n~ltr~ אָהַבְתָּ אֵת\n`ltr` אָהַבְתָּ אֵת\n~_*ltr*_~ אָהַבְתָּ אֵת (nested formats)\n```ltr``` אָהַבְתָּ אֵת (monospace)\n\n*Bulleted list*\n* test - LTR\n* אָהַבְתָּ אֵת RTL\n\n*Numbered List*\n1. test - LTR\n2. אָהַבְתָּ אֵת RTL\n\n*Block quote*\n> LTR\n> אָהַבְתָּ אֵת RTL\n\n*Emoji*\n❤️";
		return s.jsxs("div", {
			className: "x1sy10c2 x3aesyq xieb3on xqsn43r",
			children: [s.jsxs("div", { children: [s.jsx("h2", { children: "Plain text" }), s.jsx("div", {
				className: "x1sy10c2 x3aesyq xieb3on xqsn43r x1cnzs8 x1xnnf8n xx6bls6 x106a9eq x12peec7 x16qb05n xi7iut8 x1dm3dyd x1pv694p x1o2sk6j x126k92a",
				children: s.jsx(o("WAWebEmojiText.react").EmojiText, babelHelpers.extends({}, e, { text: t }))
			})] }), s.jsxs("div", { children: [s.jsx("h2", { children: "Formatted text" }), s.jsx("div", {
				className: "x1sy10c2 x3aesyq xieb3on xqsn43r x1cnzs8 x1xnnf8n xx6bls6 x106a9eq x12peec7 x16qb05n xi7iut8 x1dm3dyd x1pv694p x1o2sk6j x126k92a",
				children: s.jsx(o("WAWebEmojiText.react").EmojiText, babelHelpers.extends({}, e, { text: n }))
			})] })]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	var g = {
		storyName: "WAWebEmojiText",
		component: o("WAWebEmojiText.react").EmojiText,
		description: "",
		examples: [{
			example: _,
			title: "Bot Animated Text",
			templateStyle: babelHelpers.extends({}, o("WAWebShowroomUtils").widePreview, { minWidth: 560 })
		}, {
			example: f,
			title: "RTL Text",
			templateStyle: babelHelpers.extends({}, o("WAWebShowroomUtils").widePreview, { minWidth: 560 })
		}]
	};
	l.default = g;
}), 98);
