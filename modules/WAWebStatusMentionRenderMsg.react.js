__d("WAWebStatusMentionRenderMsg.react", [
	"fbt",
	"WAWebMediaThumbnail.react",
	"WAWebMessageSpacerText.react",
	"WAWebMessageTextBubble.react",
	"WAWebModalManager",
	"WAWebStatusGatingUtils",
	"WAWebStatusMediaMsgUtils",
	"WAWebStatusMentionFormatMsgText",
	"WAWebStatusMsgLookup",
	"WAWebStatusQuotedFlowLoadable",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUnsupportedMessage",
	"WAWebUserPrefsMeUser",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.chat, n = e.displayAuthor, a = e.msg, i = a.safe(), l = i.id.fromMe, c = i.subtype === "status_group_mention_message", p = t.formattedTitle, _ = l ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			"",
			[s._param("name", p)]
		), f = r("WAWebStatusMentionFormatMsgText")({
			msg: a,
			options: {}
		}), g;
		if (l) {
			var h;
			g = (h = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) != null ? h : o("WAWebUserPrefsMeUser").getMaybeMePnUser();
		} else c ? g = i.id.participant : g = t.id;
		var y = a.quotedStanzaID;
		if (g == null || !o("WAWebStatusGatingUtils").isStatusMentionMessageEnabled()) return u.jsx(r("WAWebUnsupportedMessage"), {
			msg: i,
			displayAuthor: n,
			hideUpdateButton: !0
		});
		function C() {
			if (!(g == null || y == null)) {
				var e = o("WAWebStatusMsgLookup").findStatusMsgByStanzaId(g, y);
				if (e == null) {
					m();
					return;
				}
				o("WAWebModalManager").ModalManager.openMedia(u.jsx(o("WAWebStatusQuotedFlowLoadable").StatusQuotedFlowLoadable, {
					status: e.statusModel,
					msgKey: e.msg.id,
					onMsgNotFound: m,
					onClose: function() {
						return o("WAWebModalManager").ModalManager.closeMedia();
					}
				}), { transition: "quoted-status-modal" });
			}
		}
		return u.jsxs(r("WAWebMessageTextBubble.react"), {
			msg: i,
			displayAuthor: n,
			children: [u.jsxs("div", {
				className: "x78zum5 x1q0g3np x6s0dn4 xbrszos xea3l6g x18isctg x2q3nzr x1bu39yj x6ikm8r x10wlt62 x1198e8h x1aorv3j x13m54ha xw01apr x1ypdohk",
				onClick: C,
				onKeyDown: function(t) {
					(t.key === "Enter" || t.key === " ") && (t.preventDefault(), C());
				},
				"data-testid": "status_mention_msg_bubble",
				role: "button",
				tabIndex: 0,
				children: [u.jsxs("div", {
					className: "x78zum5 xdt5ytf x1iyjqo2 x123j3cw xde1mab x1ykpatu x12w63v0 xeuugli x6ikm8r x10wlt62",
					children: [u.jsx("div", {
						className: "x1nxh6w3 x1s688f x14ug900 x17fgdl5 x6ikm8r x10wlt62 xlyipyv xuxw1ft",
						children: _
					}), u.jsx("span", {
						className: "x190qgfh xhslqc4 x1xxsxie x6ikm8r x10wlt62 xlyipyv x104kibb x1h7i4cw x1ua5tub",
						children: f
					})]
				}), u.jsx(d, {
					statusPosterWid: g,
					quotedStanzaID: y
				})]
			}), u.jsx(r("WAWebMessageSpacerText.react"), { msg: a })]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t = o("react-compiler-runtime").c(8), n = e.quotedStanzaID, a = e.statusPosterWid, i;
		t[0] !== n || t[1] !== a ? (i = a != null && n != null ? o("WAWebStatusMediaMsgUtils").findStatusMediaMsg(a, n) : null, t[0] = n, t[1] = a, t[2] = i) : i = t[2];
		var l = i;
		if (l == null) return null;
		var s;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (s = { className: "xjp7ctv" }, t[3] = s) : s = t[3];
		var c, d;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (c = "x2lah0s x1fxk84t x1dnml7z x6ikm8r x10wlt62 xea3l6g x18isctg", d = "xh8yej3 x5yr21d x18d0r48 x1xsqp64", t[4] = c, t[5] = d) : (c = t[4], d = t[5]);
		var m;
		return t[6] !== l ? (m = u.jsx("div", babelHelpers.extends({ "data-testid": "status_mention_thumbnail" }, s, { children: u.jsx(r("WAWebMediaThumbnail.react"), {
			msg: l,
			containerClassName: c,
			childClassName: d
		}) })), t[6] = l, t[7] = m) : m = t[7], m;
	}
	function m() {
		o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }));
	}
	l.default = c;
}), 226);
