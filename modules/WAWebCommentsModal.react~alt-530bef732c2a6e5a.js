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
		var n = t.parentMsgs, a = n[0], i = o("useWAWebCommentMessages").useHydrateAndAggregateComments(n.map(function(e) {
			return e.id;
		})), l = o("WAWebFrontendMsgGetters").getChat(a), u = o("WAWebMarkAddOnsAsReadAction").useMarkAddOnsAsRead(), d = o("useWAWebCommentReplyCount").useWAWebCommentReplyCount([a]), g = p(null), y = function() {
			if (g.current != null) {
				var e = g.current.scrollHeight;
				g.current.scrollTo({
					top: e,
					behavior: "smooth"
				});
			}
		};
		r("useWAWebCommentModalListeners")({ scrollReplyModalToBottom: y }), m(function() {
			var e = i.filter(function(e) {
				return !e.read;
			});
			e.length !== 0 && u({
				addOnType: o("WAWebMessageAddOnType").MessageAddOnType.Comment,
				addOns: e.map(function(e) {
					return {
						msgKey: e.id,
						sender: e.author.toString()
					};
				})
			});
		}, [i, u]);
		var C = s._(
			/*BTDS*/
			""
		);
		return c.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Comments,
			children: c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
				name: "comments-modal",
				children: c.jsxs(c.Fragment, { children: [
					c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
						title: s._(
							/*BTDS*/
							""
						),
						type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
						onCancel: o("WAWebModalManager").closeModalManager
					}),
					i.length > 0 ? c.jsxs("div", {
						className: "x3d5gib x14aock7 x1rife3k",
						ref: g,
						children: [h(d, i.length) ? c.jsx(o("WAWebFlex.react").FlexColumn, {
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
								children: C
							})
						}) : null, c.jsx(o("WAWebFlex.react").FlexColumn, {
							className: (e || (e = r("stylex")))(o("WDSPaddings.stylex").wdsPaddings.paddingVer8, o("WDSPaddings.stylex").wdsPaddings.paddingHor16, f.content),
							align: "stretch",
							children: c.jsx(r("WAWebCommentList.react"), {
								comments: i,
								isAlbumMsg: o("WAWebCommentFrontendUtils").isAlbumMessageContainer(n)
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
					})] })),
					!o("WAWebChatGroupUtils").isDeactivatedCommunityAnnouncementGroup(l) && !o("WAWebChatGroupUtils").isSuspendedCommunityAnnouncementGroup(l) && n != null && n.length === 1 ? c.jsx(o("WAWebFlex.react").FlexColumn, {
						xstyle: [f.footer, o("WDSPaddings.stylex").wdsPaddings.paddingTop8],
						children: c.jsx(r("WAWebCommentComposeBox.react"), { parent: a })
					}) : null
				] })
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e, t) {
		return e !== t;
	}
	l.default = g;
}), 226);
