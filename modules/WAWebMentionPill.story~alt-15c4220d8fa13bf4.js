__d("WAWebMentionPill.story", [
	"WAWebMentionPill.react",
	"WAWebNoop",
	"react",
	"useWAWebCheckbox"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u() {
		var e, t = (e = o("useWAWebCheckbox")).useCheckBox("isMe", !0), n = t[0], a = t[1], i = e.useCheckBox("isOutgoing", !1), l = i[0], u = i[1], c = e.useCheckBox("isRead", !1), d = c[0], m = c[1], p = e.useCheckBox("isQuoted", !1), _ = p[0], f = p[1];
		return s.jsxs("div", { children: [
			a,
			u,
			m,
			f,
			s.jsx("div", {
				style: { marginTop: 12 },
				children: s.jsx(r("WAWebMentionPill.react"), {
					isMe: n,
					isOutgoing: l,
					isQuoted: _,
					isRead: d,
					onClick: r("WAWebNoop"),
					children: "John Doe"
				})
			})
		] });
	}
	u.displayName = u.name + " [from " + i.id + "]";
	var c = {
		storyName: "WAWebMentionPill",
		component: r("WAWebMentionPill.react"),
		description: "A pill-shaped component for displaying @mentions. Supports color variants based on whether the mention is \"me\" or others, read/unread status, incoming/outgoing direction, and quoted context.",
		examples: [
			{
				example: u,
				title: "Interactive Mention Pill"
			},
			{
				example: function() {
					var e, t;
					return s.jsxs("div", {
						style: {
							display: "flex",
							gap: 8,
							alignItems: "baseline"
						},
						children: [
							s.jsx(e = r("WAWebMentionPill.react"), {
								isMe: !0,
								isOutgoing: !1,
								isRead: !1,
								onClick: t = r("WAWebNoop"),
								children: "You (unread)"
							}),
							s.jsx(e, {
								isMe: !0,
								isOutgoing: !1,
								isRead: !0,
								onClick: t,
								children: "You (read)"
							}),
							s.jsx(e, {
								isMe: !1,
								isOutgoing: !1,
								isRead: !0,
								onClick: t,
								children: "Jane Smith"
							}),
							s.jsx(e, {
								isMe: !0,
								isOutgoing: !0,
								isRead: !0,
								onClick: t,
								children: "You (outgoing)"
							}),
							s.jsx(e, {
								isMe: !0,
								isOutgoing: !1,
								isQuoted: !0,
								isRead: !0,
								onClick: t,
								children: "You (quoted)"
							})
						]
					});
				},
				title: "All variants"
			},
			{
				example: function() {
					var e, t;
					return s.jsxs("div", {
						style: {
							display: "flex",
							flexDirection: "column",
							gap: 12
						},
						children: [
							s.jsxs("div", { children: [
								s.jsx("span", { children: "Incoming (unread): " }),
								s.jsx(e = r("WAWebMentionPill.react"), {
									isMe: !0,
									isOutgoing: !1,
									isRead: !1,
									onClick: t = r("WAWebNoop"),
									children: "You"
								}),
								" mentioned you"
							] }),
							s.jsxs("div", { children: [
								s.jsx("span", { children: "Incoming (read): " }),
								s.jsx(e, {
									isMe: !0,
									isOutgoing: !1,
									isRead: !0,
									onClick: t,
									children: "You"
								}),
								" mentioned you"
							] }),
							s.jsxs("div", { children: [
								s.jsx("span", { children: "Incoming (others): " }),
								"Hey ",
								s.jsx(e, {
									isMe: !1,
									isOutgoing: !1,
									isRead: !0,
									onClick: t,
									children: "Alice"
								}),
								" check this out!"
							] }),
							s.jsxs("div", { children: [
								s.jsx("span", { children: "Outgoing: " }),
								"Hey ",
								s.jsx(e, {
									isMe: !1,
									isOutgoing: !0,
									isRead: !0,
									onClick: t,
									children: "Alice"
								}),
								" and ",
								s.jsx(e, {
									isMe: !0,
									isOutgoing: !0,
									isRead: !0,
									onClick: t,
									children: "You"
								})
							] }),
							s.jsxs("div", { children: [
								s.jsx("span", { children: "Quoted: " }),
								"Hey ",
								s.jsx(e, {
									isMe: !0,
									isOutgoing: !1,
									isQuoted: !0,
									isRead: !0,
									onClick: t,
									children: "You"
								}),
								" mentioned in a quote"
							] })
						]
					});
				},
				title: "Inline with text - all contexts"
			}
		]
	}, d = c;
	l.default = d;
}), 98);
