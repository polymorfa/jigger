__d("WAWebCommentsModal.react", [
	"fbt",
	"WAWebChatGroupUtils",
	"WAWebCommentComposeBox.react",
	"WAWebCommentFrontendUtils",
	"WAWebCommentList.react",
	"WAWebDrawerHeader.react",
	"WAWebErrorBoundary.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebFrontendMsgGetters",
	"WAWebMarkAddOnsAsReadAction",
	"WAWebMessageAddOnType",
	"WAWebModal.react",
	"WAWebModalManager",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebCommentMessages",
	"useWAWebCommentModalListeners",
	"useWAWebCommentReplyCount"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useRef, _ = {
		paddingBlock6: {
			paddingTop: "x1yrsyyn",
			paddingBottom: "x10b6aqq",
			$$css: !0
		},
		paddingInline10: {
			paddingInlineStart: "xe2zdcy",
			paddingInlineEnd: "x2vl965",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	}, f = {
		content: {
			maxHeight: "x3d5gib",
			$$css: !0
		},
		pillContainer: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			textAlign: "x2b8uid",
			$$css: !0
		},
		pill: {
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			color: "xsztnxe",
			backgroundColor: "x4pcxzf",
			alignItems: "x6s0dn4",
			textAlign: "x2b8uid",
			$$css: !0
		},
		footer: {
			bottom: "x1ey2m1c",
			position: "x7wzq59",
			$$css: !0
		},
		emptyState: {
			paddingTop: "x11408do",
			paddingBottom: "x1ej9moc",
			$$css: !0
		}
	};
	function g(t) {
		var n = o("react-compiler-runtime").c(27), a = t.parentMsgs, i = a[0], l;
		n[0] !== a ? (l = a.map(C), n[0] = a, n[1] = l) : l = n[1];
		var u = o("useWAWebCommentMessages").useHydrateAndAggregateComments(l), d = o("WAWebFrontendMsgGetters").getChat(i), g = o("WAWebMarkAddOnsAsReadAction").useMarkAddOnsAsRead(), v;
		n[2] !== i ? (v = [i], n[2] = i, n[3] = v) : v = n[3];
		var S = o("useWAWebCommentReplyCount").useWAWebCommentReplyCount(v), R = p(null), L;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (L = function() {
			if (R.current != null) {
				var e = R.current.scrollHeight;
				R.current.scrollTo({
					top: e,
					behavior: "smooth"
				});
			}
		}, n[4] = L) : L = n[4];
		var E = L, k;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (k = { scrollReplyModalToBottom: E }, n[5] = k) : k = n[5], r("useWAWebCommentModalListeners")(k);
		var I, T;
		n[6] !== u || n[7] !== g ? (I = function() {
			var e = u.filter(y);
			e.length !== 0 && g({
				addOnType: o("WAWebMessageAddOnType").MessageAddOnType.Comment,
				addOns: e.map(h)
			});
		}, T = [u, g], n[6] = u, n[7] = g, n[8] = I, n[9] = T) : (I = n[8], T = n[9]), m(I, T);
		var D;
		n[10] === Symbol.for("react.memo_cache_sentinel") ? (D = s._(
			/*BTDS*/
			""
		), n[10] = D) : D = n[10];
		var x = D, $ = o("WAWebModal.react").Modal, P = o("WAWebModal.react").ModalTheme, N = o("WAWebErrorBoundary.react").ErrorBoundary, M = "comments-modal", w;
		n[11] === Symbol.for("react.memo_cache_sentinel") ? (w = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: s._(
				/*BTDS*/
				""
			),
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
			onCancel: o("WAWebModalManager").closeModalManager
		}), n[11] = w) : w = n[11];
		var A;
		n[12] !== u || n[13] !== a || n[14] !== S ? (A = u.length > 0 ? c.jsxs("div", {
			className: "x3d5gib x14aock7 x1rife3k",
			ref: R,
			children: [b(S, u.length) ? c.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: [
					o("WDSPaddings.stylex").wdsPaddings.paddingVer16,
					o("WDSPaddings.stylex").wdsPaddings.paddingHor24,
					f.pillContainer
				],
				children: c.jsx(r("WAWebFlexItem.react"), {
					xstyle: [
						_.paddingBlock6,
						_.paddingInline10,
						f.pill
					],
					children: x
				})
			}) : null, c.jsx(o("WAWebFlex.react").FlexColumn, {
				className: (e || (e = r("stylex")))(o("WDSPaddings.stylex").wdsPaddings.paddingVer8, o("WDSPaddings.stylex").wdsPaddings.paddingHor16, f.content),
				align: "stretch",
				children: c.jsx(r("WAWebCommentList.react"), {
					comments: u,
					isAlbumMsg: o("WAWebCommentFrontendUtils").isAlbumMessageContainer(a)
				})
			})]
		}) : c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(f.emptyState, o("WDSPaddings.stylex").wdsPaddings.paddingHor24), { children: [c.jsx("div", {
			className: "x2b8uid x1w7chpp x1jchvi3 xk50ysn",
			children: s._(
				/*BTDS*/
				""
			)
		}), c.jsx("div", {
			className: "x2b8uid xhslqc4 x1f6kntn xo1l8bm",
			children: s._(
				/*BTDS*/
				""
			)
		})] })), n[12] = u, n[13] = a, n[14] = S, n[15] = A) : A = n[15];
		var F = !o("WAWebChatGroupUtils").isDeactivatedCommunityAnnouncementGroup(d) && !o("WAWebChatGroupUtils").isSuspendedCommunityAnnouncementGroup(d) && a != null && a.length === 1 ? c.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: [f.footer, o("WDSPaddings.stylex").wdsPaddings.paddingTop8],
			children: c.jsx(r("WAWebCommentComposeBox.react"), { parent: i })
		}) : null, O;
		n[16] !== w || n[17] !== A || n[18] !== F ? (O = c.jsxs(c.Fragment, { children: [
			w,
			A,
			F
		] }), n[16] = w, n[17] = A, n[18] = F, n[19] = O) : O = n[19];
		var B;
		n[20] !== N || n[21] !== O ? (B = c.jsx(N, {
			name: M,
			children: O
		}), n[20] = N, n[21] = O, n[22] = B) : B = n[22];
		var W;
		return n[23] !== $ || n[24] !== B || n[25] !== P.Comments ? (W = c.jsx($, {
			type: P.Comments,
			children: B
		}), n[23] = $, n[24] = B, n[25] = P.Comments, n[26] = W) : W = n[26], W;
	}
	function h(e) {
		return {
			msgKey: e.id,
			sender: e.author.toString()
		};
	}
	function y(e) {
		return !e.read;
	}
	function C(e) {
		return e.id;
	}
	function b(e, t) {
		return e !== t;
	}
	l.default = g;
}), 226);
