__d("WAWebCommentsBubbleContainer.react", [
	"fbt",
	"WAWebAddOnBubble.react",
	"WAWebAddOnBubblesContainerConditions",
	"WAWebCmd",
	"WAWebCommentFrontendUtils",
	"WAWebCommentsModal.react",
	"WAWebFlexBox.react",
	"WAWebModalManager",
	"WAWebMsgCollection",
	"WAWebReplyRefreshedIcon.react",
	"WAWebStateUtils",
	"react",
	"react-compiler-runtime",
	"useWAWebCommentReplyCount"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		paddingInlineStart1: {
			paddingInlineStart: "x18pi947",
			$$css: !0
		},
		paddingInlineEnd3: {
			paddingInlineEnd: "x1im30kd",
			$$css: !0
		}
	}, d = { container: {
		fontSize: "x1f6kntn",
		color: "xhslqc4",
		$$css: !0
	} };
	function m(e) {
		var t = o("react-compiler-runtime").c(14), n = e.msgIds, a = o("WAWebAddOnBubblesContainerConditions").useHasCommentsBubble(n), i;
		t[0] !== n ? (i = p(n), t[0] = n, t[1] = i) : i = t[1];
		var l = i, m = o("useWAWebCommentReplyCount").useWAWebCommentReplyCount(l);
		if (!a) return null;
		var _;
		t[2] !== n ? (_ = function() {
			var e = [];
			for (var t of n) {
				var a = o("WAWebMsgCollection").MsgCollection.get(t);
				a && e.push(a);
			}
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebCommentsModal.react"), { parentMsgs: e }));
		}, t[2] = n, t[3] = _) : _ = t[3];
		var f = _, g;
		t[4] !== l || t[5] !== f ? (g = function() {
			return o("WAWebCommentFrontendUtils").isAlbumMessageContainer(l) ? o("WAWebCmd").Cmd.openMediaViewerForAlbumMedia(o("WAWebStateUtils").unproxy(l[0])) : f();
		}, t[4] = l, t[5] = f, t[6] = g) : g = t[6];
		var h = g, y;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsx(o("WAWebReplyRefreshedIcon.react").ReplyRefreshedIcon, {
			width: 20,
			height: 20,
			displayInline: !0,
			directional: !0
		}), t[7] = y) : y = t[7];
		var C = y, b;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (b = [
			d.container,
			c.paddingInlineStart1,
			c.paddingInlineEnd3
		], t[8] = b) : b = t[8];
		var v;
		t[9] !== m ? (v = u.jsx(r("WAWebAddOnBubble.react"), { children: u.jsxs(o("WAWebFlexBox.react").FlexRow, {
			xstyle: b,
			align: "center",
			columnGap: 2,
			justify: "center",
			children: [C, s._(
				/*BTDS*/
				"",
				[s._plural(m, "count")]
			)]
		}) }), t[9] = m, t[10] = v) : v = t[10];
		var S;
		return t[11] !== h || t[12] !== v ? (S = u.jsx("button", {
			onClick: h,
			children: v
		}), t[11] = h, t[12] = v, t[13] = S) : S = t[13], S;
	}
	function p(e) {
		var t = [];
		for (var n of e) {
			var r = o("WAWebMsgCollection").MsgCollection.get(n);
			r != null && t.push(r);
		}
		return t;
	}
	l.default = m;
}), 226);
