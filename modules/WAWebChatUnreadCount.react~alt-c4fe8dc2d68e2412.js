__d("WAWebChatUnreadCount.react", [
	"fbt",
	"$InternalEnum",
	"WAWebCountRenderingUtils",
	"WAWebL10N",
	"WDSText.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = n("$InternalEnum").Mirrored([
		"Transparent",
		"Outlined",
		"MissedCalls",
		"QuestionResponses",
		"ChatThread"
	]), m = {
		count: {
			display: "x1rg5ohu",
			paddingTop: "x1gxa6cn",
			paddingInlineEnd: "x1j8ymqv",
			paddingBottom: "xa0aww2",
			paddingInlineStart: "x4tra6z",
			color: "x1pse0pq",
			verticalAlign: "x16dsc37",
			height: "xlup9mm",
			minWidth: "x15kz4h8",
			textAlign: "x2b8uid",
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			$$css: !0
		},
		countMorePadding: {
			paddingInlineStart: "x181vq82",
			paddingInlineEnd: "x1uc92m",
			$$css: !0
		},
		outlinePaddingReposition: {
			marginInlineStart: "x165d6jo",
			$$css: !0
		},
		transparent: {
			backgroundColor: "xjbqb8w",
			$$css: !0
		},
		fixWordBreak: {
			wordBreak: "xdnwjd9",
			$$css: !0
		},
		outlined: {
			borderTopWidth: "x1ktv7sr",
			borderInlineEndWidth: "x142x0oa",
			borderBottomWidth: "xv7zg05",
			borderInlineStartWidth: "x12dgle5",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "x1yqpz0i",
			borderInlineEndColor: "x1lebdv1",
			borderBottomColor: "x1454cx3",
			borderInlineStartColor: "x1qppnnw",
			$$css: !0
		},
		defaultBg: {
			backgroundColor: "xyp3urf",
			$$css: !0
		},
		missedCallBg: {
			backgroundColor: "xk0ssx3",
			$$css: !0
		},
		chatThreadBg: {
			backgroundColor: "xfn3atn",
			$$css: !0
		},
		marginHoriz8: {
			marginInlineStart: "x150mmf0",
			marginInlineEnd: "xqf2s3x",
			marginLeft: null,
			marginRight: null,
			$$css: !0
		}
	};
	function p(t) {
		var n = t.ariaLabel, a = t.count, i = t.maxCount, l = i === void 0 ? 1e3 : i, u = t.ref, p = t.theme, _ = "";
		n != null && n !== "" ? _ = n : a > 0 ? _ = s._(
			/*BTDS*/
			"",
			[s._plural(a, "count")]
		) : _ = s._(
			/*BTDS*/
			""
		);
		var f = p === d.Transparent ? "contentDeemphasized" : "contentOnAccent", g = p === d.MissedCalls ? m.missedCallBg : p === d.ChatThread ? m.chatThreadBg : m.defaultBg, h = [m.count, g];
		a >= 10 && (h.push(m.countMorePadding), (p === d.Outlined || p === d.MissedCalls) && h.push(m.outlinePaddingReposition)), p === d.Outlined || p === d.MissedCalls ? h.push(m.outlined) : p === d.Transparent ? h.push(m.transparent) : p === d.QuestionResponses && h.push(m.marginHoriz8);
		var y = p === d.MissedCalls ? "missed-call-counter" : "icon-unread-count", C = p === d.MissedCalls ? "missed_call" : "unread_message", b = p === d.QuestionResponses ? r("WAWebL10N").d(a) : o("WAWebCountRenderingUtils").renderCount(a, l, C);
		return c.jsx("span", babelHelpers.extends({
			ref: u,
			"data-testid": y
		}, (e || (e = r("stylex"))).props(h), {
			"aria-label": _,
			children: c.jsx(r("WDSText.react"), {
				type: "Body3Emphasized",
				colorName: f,
				xstyle: m.fixWordBreak,
				children: b
			})
		}));
	}
	p.displayName = p.name + " [from " + i.id + "]", l.UnreadCountTheme = d, l.UnreadCount = p;
}), 226);
