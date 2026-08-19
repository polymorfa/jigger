__d("WAWebReactionsBubble.react", [
	"WAArrayDifferenceBy",
	"WADeepEquals",
	"WAWebAddOnBubble.react",
	"WAWebFlexItem.react",
	"WAWebReactionEmojiAnimated",
	"WAWebReactionsUtils",
	"WAWebRollerCounter.react",
	"react",
	"useWAWebDebouncedCallback",
	"useWAWebPrevious",
	"useWAWebTimeout"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.memo, d = u.useLayoutEffect, m = u.useRef, p = u.useState, _ = 100, f = { reactionItem: {
		marginTop: "xdj266r",
		marginInlineEnd: "x14z9mp",
		marginBottom: "xat24cr",
		marginInlineStart: "x1lziwak",
		textAlign: "x2b8uid",
		fontSize: "x1jchvi3",
		lineHeight: "x1fc57z9",
		$$css: !0
	} };
	function g(e, t) {
		var n = o("WAArrayDifferenceBy").differenceBy(t || [], e || [], function(e) {
			return e.reactionAggregate;
		}), r = o("WAArrayDifferenceBy").differenceBy(e || [], t || [], function(e) {
			return e.reactionAggregate;
		});
		return {
			added: n,
			removed: r
		};
	}
	function h(e) {
		var t = {
			timestamp: 0,
			reactionAgg: ""
		};
		return e.forEach(function(e) {
			e.reactionSenders.forEach(function(n) {
				t.timestamp < n.timestamp && (t.timestamp = n.timestamp, t.reactionAgg = e.reactionAggregate);
			});
		}), t;
	}
	function y(e) {
		var t = e.isFirstData, n = e.reactions, a = e.reactionsAggregateCount, i = m(null), l = m(n), u = m(!0), c = r("useWAWebPrevious")(n), y = p([]), C = y[0], b = y[1], v = p([]), S = v[0], R = v[1], L = p([]), E = L[0], k = L[1], I = m(!1), T = m(null), D = m(null);
		i.current == null && (i.current = c != null ? c : null), l.current = n, d(function() {
			var e = T.current, r = D.current;
			if (T.current = n, D.current = a, t === !1 && !o("WADeepEquals").deepEqual(e, n)) {
				var i = r != null && r > a;
				if (!i) {
					var l = g(e, n), s = l.added;
					if (s.length !== 0) {
						var u = [], c = s.find(function(e) {
							return e.reactionByMe;
						});
						if (c != null) u = [c];
						else {
							var d = h(n);
							u = s.filter(function(e) {
								return e.reactionAggregate === d.reactionAgg;
							});
						}
						u.length > 0 && b(u);
					}
				}
			}
		}, [
			t,
			n,
			a
		]);
		var x = o("useWAWebTimeout").useTimeout(function() {
			R(l.current);
		}, o("WAWebReactionEmojiAnimated").ANIMATION_REMOVE_LENGTH + 1), $ = x[0], P = x[1], N = r("useWAWebDebouncedCallback")(function() {
			var e = g(i.current, l.current), n = e.removed;
			!o("WADeepEquals").deepEqual(n, E) && t === !1 && k(n), n.length === 0 ? R(l.current) : $(), i.current = null, u.current = !1;
		}, _);
		o("WADeepEquals").deepEqual(c, n) || N();
		var M = S.length === 0 && n.length > 0 ? n : S, w = M.map(function(e) {
			var t = E.includes(e), n = t ? {
				shouldRemoveAnimation: t,
				animationFinished: function() {
					P(), R(l.current);
				}
			} : null, a = o("WAWebReactionsUtils").getReactionForDisplay(e), i = C.includes(e);
			return s.jsx(r("WAWebFlexItem.react"), {
				xstyle: f.reactionItem,
				testid: "reaction-bubble-item",
				children: s.jsx(o("WAWebReactionEmojiAnimated").ReactionEmojiAnimated, {
					reaction: a,
					shouldAnimate: i,
					removeAnimation: n
				})
			}, a);
		}), A = s.jsx(r("WAWebRollerCounter.react"), {
			counter: a,
			shouldAnimate: t === !1,
			rollerCounterOptions: {
				showAggregateMax: !0,
				showOneToTwoAnimation: !0
			}
		}), F = g(i.current, l.current), O = F.added, B = t === !1 && u.current && (O.length > 0 || I.current);
		I.current = B;
		var W = function() {
			I.current = !1;
		};
		return s.jsxs(r("WAWebAddOnBubble.react"), {
			shouldAnimateBubble: B,
			onAnimationEnd: W,
			children: [w, A]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e, t) {
		return o("WADeepEquals").deepEqual(e, t);
	}
	var b = c(y, C);
	l.default = b;
}), 98);
