__d("WAWebChatUnreadCount.react", [
	"fbt",
	"$InternalEnum",
	"WAWebCountRenderingUtils",
	"WAWebL10N",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(26), a = t.ariaLabel, i = t.count, l = t.maxCount, u = t.ref, p = t.theme, _ = l === void 0 ? 1e3 : l, f;
		if (a != null && a !== "") f = a;
		else if (i > 0) {
			var g;
			n[0] !== i ? (g = s._(
				/*BTDS*/
				"",
				[s._plural(i, "count")]
			), n[0] = i, n[1] = g) : g = n[1], f = g;
		} else {
			var h;
			n[2] === Symbol.for("react.memo_cache_sentinel") ? (h = s._(
				/*BTDS*/
				""
			), n[2] = h) : h = n[2], f = h;
		}
		var y = p === d.Transparent ? "contentDeemphasized" : "contentOnAccent", C = p === d.MissedCalls ? m.missedCallBg : p === d.ChatThread ? m.chatThreadBg : m.defaultBg, b, v, S, R;
		if (n[3] !== C || n[4] !== i || n[5] !== _ || n[6] !== u || n[7] !== p) {
			var L = [m.count, C];
			i >= 10 && (L.push(m.countMorePadding), (p === d.Outlined || p === d.MissedCalls) && L.push(m.outlinePaddingReposition)), p === d.Outlined || p === d.MissedCalls ? L.push(m.outlined) : p === d.Transparent ? L.push(m.transparent) : p === d.QuestionResponses && L.push(m.marginHoriz8);
			var E = p === d.MissedCalls ? "missed-call-counter" : "icon-unread-count", k = p === d.MissedCalls ? "missed_call" : "unread_message", I;
			n[12] !== i || n[13] !== k || n[14] !== _ || n[15] !== p ? (I = p === d.QuestionResponses ? r("WAWebL10N").d(i) : o("WAWebCountRenderingUtils").renderCount(i, _, k), n[12] = i, n[13] = k, n[14] = _, n[15] = p, n[16] = I) : I = n[16], b = I, v = u, S = E, R = (e || (e = r("stylex"))).props(L), n[3] = C, n[4] = i, n[5] = _, n[6] = u, n[7] = p, n[8] = b, n[9] = v, n[10] = S, n[11] = R;
		} else b = n[8], v = n[9], S = n[10], R = n[11];
		var T;
		n[17] !== b || n[18] !== y ? (T = c.jsx(r("WDSText.react"), {
			type: "Body3Emphasized",
			colorName: y,
			xstyle: m.fixWordBreak,
			children: b
		}), n[17] = b, n[18] = y, n[19] = T) : T = n[19];
		var D;
		return n[20] !== v || n[21] !== S || n[22] !== R || n[23] !== T || n[24] !== f ? (D = c.jsx("span", babelHelpers.extends({
			ref: v,
			"data-testid": S
		}, R, {
			"aria-label": f,
			children: T
		})), n[20] = v, n[21] = S, n[22] = R, n[23] = T, n[24] = f, n[25] = D) : D = n[25], D;
	}
	l.UnreadCountTheme = d, l.UnreadCount = p;
}), 226);
