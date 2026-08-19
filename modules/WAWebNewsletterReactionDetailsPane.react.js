__d("WAWebNewsletterReactionDetailsPane.react", [
	"fbt",
	"WAWebConnectedPillButtons.react",
	"WAWebEmoji",
	"WAWebFlatList.react",
	"WAWebFlatListContainer.react",
	"WAWebFlatListController",
	"WAWebFlex.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebNewsletterContactsReactionList.react",
	"WAWebNewsletterExtendedGatingUtils",
	"WAWebNewsletterReactionDetailsPaneItem.react",
	"WAWebNewsletterReactionFrontendUtils",
	"WAWebSpinner.react",
	"WAWebText.react",
	"WAWebUserPrefsMeUser",
	"WAWebWidFactory",
	"clamp",
	"react",
	"react-compiler-runtime",
	"sumBy",
	"useLazyRef",
	"useWAWebEventTargetValue",
	"useWAWebNewsletterReactionSenderList"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.createRef, m = c.useEffect, p = c.useRef, _ = c.useState, f = {
		fullWidth: {
			width: "xh8yej3",
			$$css: !0
		},
		header: {
			width: "xh8yej3",
			boxSizing: "x9f619",
			$$css: !0
		},
		marginTop40: {
			marginTop: "x1q9ymp4",
			$$css: !0
		},
		marginBottom4: {
			marginBottom: "x4tpdpg",
			$$css: !0
		},
		marginTop28: {
			marginTop: "xevwqry",
			$$css: !0
		},
		paddingTop20: {
			paddingTop: "x1h678fw",
			$$css: !0
		},
		paddingBottom8: {
			paddingBottom: "x12xbjc7",
			$$css: !0
		},
		paddingHoriz16: {
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	}, g = 53, h = 48;
	function y(e) {
		var t = e.chat, n = e.firstMsg, a = e.handleEmojiClick, i = e.multipleMsgs, l = e.onCloseDetailsPane, c = e.reactionModels, g = _(0), h = g[0], y = g[1], v = p(new Map()), S = r("useLazyRef")(function() {
			return new (r("WAWebFlatListController"))();
		}), R = _("all"), L = R[0], E = R[1], k = o("useWAWebNewsletterReactionSenderList").useNewsletterReactionSenderList(t, n, i), I = k[0], T = k[1], D = k[2], x = k[3], $ = k[4], P = k[5], N = k[6], M = r("useWAWebEventTargetValue")(c, [
			"change:myReaction",
			"change:reactionCountMapTs",
			"remove"
		], function() {
			return o("WAWebNewsletterReactionFrontendUtils").aggregateAndSortReactions(c).reactions.map(function(e) {
				var t = e[0], n = e[1];
				return {
					emoji: t.reactionAggregate,
					count: n,
					myReactions: t.reactionSenders.filter(function(e) {
						return o("WAWebUserPrefsMeUser").isMeAccount(o("WAWebWidFactory").createWid(e.senderUserJid));
					})
				};
			});
		}), w = b({
			album: i,
			facePileImages: I,
			reactions: M
		}), A = function(t) {
			var e = w[t];
			if (e) {
				var n, r = e.itemKey, o = v.current.get(r);
				o == null || (n = o.current) == null || n.focus();
			}
		};
		m(function() {
			A(0);
		}, []);
		var F = function(t) {
			return r("clamp")(t, 0, w.length - 1);
		}, O = function(t) {
			t.preventDefault();
			var e = F(h - 1);
			y(e), A(e);
		}, B = function(t) {
			var e = F(h + 1);
			t.preventDefault(), y(e), A(e);
		}, W = {
			up: O,
			down: B
		}, q, U;
		switch (L) {
			case "all":
				U = u.jsx(C, {
					count: r("sumBy")(M, function(e) {
						return e.count;
					}),
					chat: t,
					multipleMsgs: i
				}), q = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
					role: "list",
					tabIndex: null,
					handlers: W,
					children: u.jsx(o("WAWebFlatList.react").FlatList, {
						data: w,
						direction: "vertical",
						renderItem: function(t) {
							var e = d();
							return v.current.set(t.itemKey, e), u.jsx(r("WAWebNewsletterReactionDetailsPaneItem.react"), babelHelpers.extends({ ref: e }, t, {
								firstMsg: n,
								multipleMsgs: i,
								onClick: a,
								offlineOrServerError: $ || x,
								onCloseDetailsPane: l
							}));
						},
						flatListController: S.current
					})
				});
				break;
			case "contacts":
				U = !$ && !x && !D ? u.jsx(C, {
					count: T.length,
					chat: t,
					multipleMsgs: i
				}) : null, q = D ? u.jsx(o("WAWebFlex.react").FlexRow, {
					justify: "center",
					xstyle: f.marginTop40,
					children: u.jsx(o("WAWebSpinner.react").Spinner, {
						color: "accent",
						size: 24
					})
				}) : u.jsx(r("WAWebNewsletterContactsReactionList.react"), {
					reactionList: T,
					flatListController: S.current,
					reactionSendersServerError: x,
					setReactionSendersServerError: P,
					retryFetchingReactionSenders: N,
					isOffline: $,
					onCloseDetailsPane: l
				});
				break;
		}
		var V = [{
			id: "all",
			title: s._(
				/*BTDS*/
				""
			)
		}, {
			id: "contacts",
			title: s._(
				/*BTDS*/
				""
			)
		}];
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			testid: "newsletter-reaction-details-pane",
			children: [
				o("WAWebNewsletterExtendedGatingUtils").isNewsletterReactionSenderListEnabled(t, i) && u.jsx(o("WAWebFlex.react").FlexRow, {
					xstyle: [
						f.marginBottom4,
						f.marginTop28,
						f.fullWidth
					],
					justify: "center",
					children: u.jsx(r("WAWebConnectedPillButtons.react"), {
						pills: V,
						onChange: function(t) {
							(t === "all" || t === "contacts") && E(t);
						},
						currentlySelected: L
					})
				}),
				U,
				u.jsx(r("WAWebFlatListContainer.react"), {
					className: "xh8yej3 xuyqlj2 x1lumt5c xw2csxc x1odjw0f",
					flatListControllers: [S.current],
					children: q
				})
			]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = o("react-compiler-runtime").c(10), n = e.chat, r = e.count, a = e.multipleMsgs, i;
		t[0] !== r ? (i = s._(
			/*BTDS*/
			"",
			[s._plural(r, "reactions", r)]
		), t[0] = r, t[1] = i) : i = t[1];
		var l = i, c = o("WAWebNewsletterExtendedGatingUtils").isNewsletterReactionSenderListEnabled(n, a) ? "start" : "center", d;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (d = [
			f.paddingTop20,
			f.paddingBottom8,
			f.paddingHoriz16,
			f.header
		], t[2] = d) : d = t[2];
		var m;
		t[3] !== n || t[4] !== l || t[5] !== a ? (m = o("WAWebNewsletterExtendedGatingUtils").isNewsletterReactionSenderListEnabled(n, a) ? u.jsx(o("WAWebText.react").WAWebTextTitle, {
			weight: "semibold",
			children: l
		}) : u.jsx(o("WAWebText.react").WAWebTextLarge, { children: l }), t[3] = n, t[4] = l, t[5] = a, t[6] = m) : m = t[6];
		var p;
		return t[7] !== c || t[8] !== m ? (p = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: c,
			xstyle: d,
			testid: "reaction-count-header",
			children: m
		}), t[7] = c, t[8] = m, t[9] = p) : p = t[9], p;
	}
	function b(e) {
		var t = e.album, n = e.facePileImages, r = e.reactions, a = [];
		return r.forEach(function(e) {
			var r = o("WAWebEmoji").EmojiUtil.getNormalizedOrTofu(e.emoji), i = e.count;
			if (e.myReactions.length > 0) e.myReactions.forEach(function(r) {
				var l;
				a.push({
					emoji: o("WAWebEmoji").EmojiUtil.getNormalizedOrTofu(r.reactionText),
					count: t ? 1 : i,
					parentMsgKey: r.id,
					itemKey: r.id.toString(),
					height: g,
					facePileImages: (l = n.get(e.emoji)) != null ? l : []
				});
			}), t && a.push({
				emoji: r,
				count: i,
				itemKey: e.emoji,
				height: g,
				facePileImages: []
			});
			else {
				var l;
				a.push({
					emoji: r,
					count: i,
					itemKey: e.emoji,
					height: h,
					facePileImages: (l = n.get(e.emoji)) != null ? l : []
				});
			}
		}), a.sort(function(e, t) {
			return e.parentMsgKey != null && t.parentMsgKey != null ? 0 : e.parentMsgKey != null ? -1 : t.parentMsgKey != null ? 1 : t.count - e.count;
		});
	}
	l.default = y;
}), 226);
