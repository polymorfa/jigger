__d("WAWebEmojis.story", [
	"WAWebEmoji",
	"WAWebEmoji.react",
	"WAWebEmojiDownloadSuggestions",
	"WAWebMessageLargeEmoji.react",
	"WAWebRichTextField.react",
	"WAWebShowroomUtils",
	"react",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useState;
	function m(e) {
		for (var t = "", n = 0; n < e.length; n++) {
			var r = e.codePointAt(n).toString(16);
			t += r.toUpperCase() + " ";
		}
		return t;
	}
	function p(e) {
		var t = e.emoji, n = e.emojiSearchWords, a = m(t), i = o("WAWebEmoji").EmojiUtil.getGlyphId(t), l = n.map(function(e) {
			return s.jsx("li", { children: e }, e);
		});
		return s.jsxs("tr", { children: [
			s.jsx("td", {
				className: "x889kno x2vl965 x1a8lsjc xe2zdcy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x1exxlbk x2b8uid xxymvpz",
				children: s.jsx("div", {
					className: "x78zum5 x6s0dn4 xl56j7k",
					children: s.jsx(o("WAWebMessageLargeEmoji.react").LargeEmoji, {
						size: o("WAWebMessageLargeEmoji.react").SIZE.LARGE,
						selectable: !1,
						emoji: t
					})
				})
			}),
			s.jsx("td", {
				className: "x889kno x2vl965 x1a8lsjc xe2zdcy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x1exxlbk x2b8uid xxymvpz",
				children: s.jsx(r("WAWebEmoji.react"), {
					element: "span",
					emoji: t,
					size: "small"
				})
			}),
			s.jsx("td", {
				className: "x889kno x2vl965 x1a8lsjc xe2zdcy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x1exxlbk x2b8uid xxymvpz",
				children: a
			}),
			s.jsx("td", {
				className: "x889kno x2vl965 x1a8lsjc xe2zdcy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x1exxlbk x2b8uid xxymvpz",
				children: i
			}),
			s.jsx("td", {
				className: "x889kno x2vl965 x1a8lsjc xe2zdcy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x1exxlbk xxymvpz x1yc453h",
				children: s.jsx("ul", { children: l })
			})
		] });
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.dictionary, n = e.rawEmojiArray, r = [];
		return n.forEach(function(e) {
			var n = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(e);
			if (n != null) {
				var a = [];
				if (t != null) {
					var i;
					a = (i = t.get(n)) != null ? i : [];
				}
				r.push(s.jsx(p, {
					emoji: n,
					emojiSearchWords: a
				}, n));
			}
		}), s.jsxs("table", { children: [s.jsx("thead", { children: s.jsxs("tr", { children: [
			s.jsx("th", {
				className: "x889kno x2vl965 x1a8lsjc xe2zdcy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x1exxlbk x2b8uid xxymvpz",
				children: "Emoji Large"
			}),
			s.jsx("th", {
				className: "x889kno x2vl965 x1a8lsjc xe2zdcy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x1exxlbk x2b8uid xxymvpz",
				children: "Emoji Small"
			}),
			s.jsx("th", {
				className: "x889kno x2vl965 x1a8lsjc xe2zdcy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x1exxlbk x2b8uid xxymvpz",
				children: "Codepoints"
			}),
			s.jsx("th", {
				className: "x889kno x2vl965 x1a8lsjc xe2zdcy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x1exxlbk x2b8uid xxymvpz",
				children: "GlyphId"
			}),
			s.jsx("th", {
				className: "x889kno x2vl965 x1a8lsjc xe2zdcy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x1exxlbk x2b8uid xxymvpz",
				children: "Search Words"
			})
		] }) }), s.jsx("tbody", { children: r })] });
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = new Map();
		return Object.keys(e).forEach(function(n) {
			var r = e[n];
			r.forEach(function(e) {
				var r = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(e);
				if (r != null) {
					var a, i = (a = t.get(r)) != null ? a : [];
					i.push(n), t.set(r, i);
				}
			});
		}), t;
	}
	function g() {
		var e = r("useWAWebUnmountSignal")(), t = d(""), n = t[0], a = t[1], i = d(null), l = i[0], u = i[1];
		c(function() {
			o("WAWebEmojiDownloadSuggestions").downloadEmojiSuggestions().then(function(t) {
				if (!e.aborted) {
					var n = f(t[0]);
					u(n);
				}
			}).catch(function() {});
		}, [e]);
		var m = function(t) {
			a(t.text);
		}, p = [];
		if (n != null && n !== "") {
			var g = o("WAWebEmoji").EmojiUtil.emojiRegex(), h = null, y = n;
			do {
				if (h = g.exec(y), h != null) {
					var C = h[0];
					p.push(C), y = y.slice(h.index + C.length);
				}
				g.lastIndex = 0;
			} while (h != null);
		}
		return s.jsxs("div", {
			className: "x1vd4hg5",
			children: [s.jsx(o("WAWebRichTextField.react").RichTextField, {
				title: "Type emoji to test",
				value: n,
				onChange: m,
				managed: !0,
				emojiBtnPosition: "side"
			}), s.jsx("div", {
				className: "x14rvwrp x10wjd1d x10l6tqk x1anpbxc",
				children: s.jsx(_, {
					rawEmojiArray: p,
					dictionary: l
				})
			})]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	var h = {
		storyName: "WAWebEmojis",
		component: r("WAWebEmoji.react"),
		description: "Displays emoji info based on string",
		examples: [{
			example: function() {
				return s.jsx(g, {});
			},
			title: "Display Emoji info",
			description: "Display emoji info based on text input",
			templateStyle: o("WAWebShowroomUtils").XLTallPreview
		}]
	};
	l.default = h;
}), 98);
