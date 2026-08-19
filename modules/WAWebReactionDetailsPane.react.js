__d("WAWebReactionDetailsPane.react", [
	"fbt",
	"WAArrayDifferenceWith",
	"WAWebAutoCarouselMenuMenu.react",
	"WAWebEmojiText.react",
	"WAWebFlatListController",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebL10N",
	"WAWebNoop",
	"WAWebPanelsMenuContainer.react",
	"WAWebReactionDetailsList.react",
	"WAWebReactionEmoji.react",
	"WAWebReactionUserJourneyLogger",
	"WAWebReactionsUtils",
	"WAWebUserPrefsMeUser",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useLazyRef",
	"useWAWebIsKeyboardUser",
	"useWAWebReactions"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useRef, _ = d.useState, f = {
		emojiCount: {
			marginTop: "xdj266r",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xat24cr",
			marginInlineStart: "x1lziwak",
			display: "x1rg5ohu",
			height: "xt7dq6l",
			fontSize: "x6prxxf",
			lineHeight: "x1fc57z9",
			$$css: !0
		},
		emoji: {
			color: "x14ug900",
			marginInlineEnd: "x1p8j9ns",
			imageRendering: "x1k0y4fr",
			$$css: !0
		},
		buttonStyle: {
			width: "x187nhsf",
			$$css: !0
		},
		willChange: {
			willChange: "x1so62im",
			$$css: !0
		}
	}, g = "_all_", h = function(t, n) {
		var e;
		if ((e = t.current) != null && e.hasFocus()) {
			var r;
			(r = n.current) == null || r.focus();
		} else {
			var o;
			(o = t.current) == null || o.focus();
		}
	}, y = function(t, n) {
		t === void 0 && (t = []);
		var e = (t != null ? t : []).filter(function(e) {
			return n.some(function(t) {
				return e.isEqual(t);
			});
		}), r = o("WAArrayDifferenceWith").differenceWith(n, t != null ? t : [], function(e, t) {
			return e.isEqual(t);
		});
		return e.concat.apply(e, r);
	};
	function C(e) {
		var t = e.isAggregated, n = e.msgIds, a = e.onCloseDetailsPane, i = e.onEmpty, l = e.reactionsModels, s = _(0), u = s[0], d = s[1], C = _(0), v = C[0], S = C[1], R = r("useLazyRef")(function() {
			return new (r("WAWebFlatListController"))();
		}), L = p(null), E = p(null), k = p(null), I = r("useWAWebIsKeyboardUser")(), T = I.isKeyboardUser;
		m(function() {
			var e, t;
			S((e = (t = k.current) == null ? void 0 : t.clientHeight) != null ? e : 0);
		}, []);
		var D = function(t, n) {
			var e, r, a = o("WAWebReactionsUtils").getReactionAggregates(t), i = [], l = [], s = [], u = function(t, n) {
				var e = t.reactionSenders;
				if (e.length) {
					var r = y(n, e);
					r.forEach(function(e) {
						o("WAWebUserPrefsMeUser").isSerializedWidMe(e.senderUserJid) ? l.push(e) : i.push(e);
					}), s.push({
						emoji: o("WAWebReactionsUtils").getReactionForDisplay(t),
						reactions: r
					});
				}
			};
			n == null || n.forEach(function(e) {
				var t = a.findIndex(function(t) {
					return t.reactionAggregate === e.emoji;
				}), n = t !== -1 ? a.splice(t, 1)[0] : void 0;
				n && u(n, e.reactions);
			}), a.forEach(function(e) {
				u(e);
			});
			var c = y((e = n == null || (r = n[0]) == null ? void 0 : r.reactions) != null ? e : [], i);
			return c.unshift.apply(c, l), c.length && s.unshift({
				emoji: g,
				reactions: c
			}), s;
		}, x = _(D(l)), $ = x[0], P = x[1], N = function(t) {
			var e, n = T && !!((e = L.current) != null && e.hasFocus()), r = D(t, $);
			if (r.length < $.length && d(Math.max(0, u - 1)), P(r), n) {
				var o;
				(o = L.current) == null || o.focus();
			}
		};
		if (r("useWAWebReactions")(n, N), m(function() {
			$.length === 0 && (i == null || i());
		}, [i, $]), $.length === 0) return null;
		var M = function(t, n) {
			d(t), R.current.setScrollFromStart(0), o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.selectTabInReactionDetails();
		}, w = $[u].reactions, A = {
			"shift+tab": function(t) {
				t.preventDefault(), h(E, L);
			},
			tab: function(t) {
				t.preventDefault(), h(E, L);
			}
		}, F = {};
		return v && (F.height = v), c.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
			handlers: A,
			tabIndex: null,
			children: [
				c.jsx(r("WAWebAutoCarouselMenuMenu.react"), {
					ref: E,
					numItems: $.length,
					onItemClick: M,
					renderItem: function(t) {
						return c.jsx(b, { tab: $[t] });
					},
					selectedIndex: u,
					buttonStyle: f.buttonStyle,
					theme: o("WAWebPanelsMenuContainer.react").MenuContainerTheme.REACTIONS_CONTAINER
				}),
				c.jsx("div", { className: "x3x0x6p xjm9jq1" }),
				c.jsx(o("WAWebFlex.react").FlexColumn, {
					ref: k,
					style: F,
					children: c.jsx(r("WAWebReactionDetailsList.react"), {
						ref: L,
						senders: w,
						flatListController: R.current,
						onCloseDetailsPane: a || r("WAWebNoop"),
						isAggregated: t
					})
				})
			]
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(t) {
		var n = o("react-compiler-runtime").c(11), a = t.tab, i = a.emoji, l = a.reactions, u;
		n[0] !== i || n[1] !== l.length ? (u = i === g ? c.jsx("div", {
			className: "xdj266r xat24cr x1lziwak x1rg5ohu xt7dq6l x6prxxf x1fc57z9 x14ug900 xbelrpt",
			children: c.jsx(o("WAWebEmojiText.react").EmojiText, { text: s._(
				/*BTDS*/
				"",
				[s._plural(l.length)]
			) })
		}) : c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(f.emojiCount, f.emoji, o("WAWebReactionEmoji.react").tabScale), { children: c.jsx(o("WAWebReactionEmoji.react").ReactionEmoji, { reaction: i }) })), n[0] = i, n[1] = l.length, n[2] = u) : u = n[2];
		var d;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (d = { className: "xdj266r xat24cr x1lziwak x1rg5ohu xt7dq6l x6prxxf x1fc57z9 xhslqc4 xmpx0yj" }, n[3] = d) : d = n[3];
		var m;
		n[4] !== l.length ? (m = r("WAWebL10N").n(l.length), n[4] = l.length, n[5] = m) : m = n[5];
		var p;
		n[6] !== m ? (p = c.jsx("div", babelHelpers.extends({ "data-testid": "total-emoji-count" }, d, { children: m })), n[6] = m, n[7] = p) : p = n[7];
		var _;
		return n[8] !== u || n[9] !== p ? (_ = c.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			children: c.jsxs(r("WAWebFlexItem.react"), {
				xstyle: f.willChange,
				children: [u, p]
			})
		}), n[8] = u, n[9] = p, n[10] = _) : _ = n[10], _;
	}
	l.default = C;
}), 226);
