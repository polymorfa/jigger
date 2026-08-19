__d("WAWebEmojiText.story", [
	"WAWebButton.react",
	"WAWebEmojiText.react",
	"WAWebFormatConfigurationConversation",
	"WAWebL10N",
	"WAWebShowroomUtils",
	"react",
	"useWAWebSelect",
	"useWAWebTimeout"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = o("WAWebFormatConfigurationConversation").Conversation({
		parseInlineCode: !0,
		parseLists: !0,
		parseQuotes: !0
	});
	function d(e) {
		var t = e.chunks, n = e.speed, r = u(!0), a = r[0], i = r[1], l = u(0), d = l[0], m = l[1], p = o("useWAWebTimeout").useTimeout(function() {
			return m(d + 1);
		}, (n != null ? n : 1) * 1e3), _ = p[0], f = p[1], g = d >= t.length;
		!a && !g ? (_(), d === 0 && m(1)) : f();
		var h = function() {
			i(!a);
		}, y = function() {
			m(0), i(!0);
		}, C;
		if (d > 0) {
			var b = t.slice(0, d).join(""), v = g ? b.length : b.length - t[d - 1].length;
			C = s.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: b,
				lastBotEditBodyLength: v,
				formatters: c
			}, v);
		}
		var S;
		return a ? d === 0 ? S = "Start" : S = "Resume" : S = "Pause", s.jsxs("div", {
			className: "x1sy10c2 x3aesyq xieb3on xqsn43r x1cnzs8 x1xnnf8n xx6bls6 x106a9eq x12peec7 x16qb05n xi7iut8 x1dm3dyd x1pv694p x1o2sk6j x126k92a",
			children: [s.jsxs("div", { children: [s.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
				onClick: h,
				disabled: g,
				children: S
			}), s.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
				onClick: y,
				children: "Reset"
			})] }), C]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	var m = "{SPLIT}";
	function p(e) {
		return [].concat(e.split(m), ["\n\n===END==="]);
	}
	function _() {
		var e = o("useWAWebSelect").useSelect("Animation speed (in seconds)", [
			1,
			2,
			5,
			10
		]), t = e[0], n = e[1];
		return s.jsxs("div", {
			className: "x1sy10c2 x3aesyq xieb3on xqsn43r",
			children: [
				n,
				s.jsxs("div", { children: [s.jsx("h2", { children: "Example: Single line" }), s.jsx(d, {
					speed: t,
					chunks: p("Lorem ipsum dolor sit amet, consectetur adipiscing elit. " + m + "Sed non ligula at est consectetur *venenatis. " + m + "Vestibulum* ut varius nunc. `Nullam sollicitudin orci quis lacus eleifend, " + m + "in commodo odio pharetra`. Fusce posuere nisi et tincidunt tristique. " + m + "Aliquam a nisl condimentum, blandit quam nec, sagittis arcu.")
				})] }),
				s.jsxs("div", { children: [s.jsx("h2", { children: "Example: Multilines" }), s.jsx(d, {
					speed: t,
					chunks: p("Lorem ipsum dolor sit amet, consectetur adipiscing elit." + m + "\n\nSed non ligula at est consectetur venenatis." + m + "\n\nVestibulum ut varius nunc. Nullam sollicitudin orci quis lacus eleifend, in commodo odio pharetra." + m + "\n\nFusce posuere nisi et tincidunt tristique." + m + "\n\n```\nAliquam a nisl condimentum, blandit quam nec, sagittis arcu.\nAliquam a nisl condimentum, blandit quam nec, sagittis arcu." + m + "\nAliquam a nisl condimentum, blandit quam nec, sagittis arcu.\nAliquam a nisl condimentum, blandit quam nec, sagittis arcu.\n```")
				})] }),
				s.jsxs("div", { children: [s.jsx("h2", { children: "Example: Lists" }), s.jsx(d, {
					speed: t,
					chunks: p("Lorem ipsum dolor sit amet, consectetur adipiscing elit:" + m + "\n\n* Lorem ipsum dolor sit amet, consectetur adipiscing elit." + m + "\n* Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." + m + "\n* Urna nec tincidunt augue. Praesent eleifend neque eu enim." + m + "\n* Etiam porta sem malesuada magna mollis euismod." + m + "\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit:" + m + "\n\n1. Lorem ipsum dolor sit amet, consectetur adipiscing elit." + m + "\n2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." + m + "\n3. Urna nec tincidunt augue. Praesent eleifend neque eu enim." + m + "\n4. Etiam porta sem malesuada magna mollis euismod.")
				})] }),
				s.jsxs("div", { children: [s.jsx("h2", { children: "Example: List (partial items)" }), s.jsx(d, {
					speed: t,
					chunks: p("Lorem ipsum dolor sit amet, consectetur adipiscing elit:" + m + "\n\n* Donec ullamcorper, `felis a pretium" + m + " commodo`, nulla nibh vehicula odio.\n* Nulla varius eu enim et malesuada " + m + "*fames ac turpis* egestas.\n* Vestibulum ante ipsum ```primis in" + m + " faucibus orci``` luctu nibh.\n* Cum sociis" + m + " natoque penatibus et magnisdis" + m + " parturient montes, nascetur" + m + " ridiculus mus. dis parturient" + m + " montes, nascetur ridiculus mus.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit:" + m + "\n\n1. Donec ullamcorper, `felis a pretium" + m + " commodo`, nulla nibh vehicula odio.\n2. Nulla varius eu enim et malesuada " + m + "*fames ac turpis* egestas.\n3. Vestibulum ante ipsum ```primis in" + m + " faucibus orci``` luctu nibh.\n5. Cum sociis" + m + " natoque penatibus et magnisdis" + m + " parturient montes, nascetur" + m + " ridiculus mus. dis parturient" + m + " montes, nascetur ridiculus mus.")
				})] })
			]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
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
