__d("WAWebBizAiThreadControlFab.react", [
	"fbt",
	"WAWebBizAiAgentGating",
	"WAWebClickable.react",
	"WAWebCmd",
	"WAWebGenAiAgentLogEvents",
	"WDSIconWdsIcAiFilled.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = {
		button: {
			background: "x11g6tue",
			borderTopStyle: "x1ejq31n",
			borderInlineEndStyle: "x18oe1m7",
			borderBottomStyle: "x1sy0etr",
			borderInlineStartStyle: "xstzfhl",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			cursor: "x1ypdohk",
			$$css: !0
		},
		aiIconXstyle: {
			color: "xhslqc4",
			$$css: !0
		},
		aiIconHover: {
			color: "xpwljn7",
			$$css: !0
		}
	};
	function m() {
		var e = o("react-compiler-runtime").c(2), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = { className: "xixxii4 xo2byzu x15a21lv xpip370 xowaa7l xhtitgo x1tiyuxx x1nbhmlj xmzvs34 xf159sx x78zum5 x6s0dn4 xl56j7k xuxw1ft x6ikm8r x10wlt62 xlyipyv x1ncir08 x1pg5gke x1d3mw78 x1p4m5qa xbrszos xea3l6g x18isctg x2q3nzr x1ay2l74" }, e[0] = t) : t = e[0];
		var n;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsx("div", babelHelpers.extends({}, t, {
			"data-testid": "biz_ai_thread_control_fab_info_bar",
			children: s._(
				/*BTDS*/
				""
			)
		})), e[1] = n) : n = e[1], n;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(14), n = e.chat, a = c(!1), i = a[0], l = a[1], p;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (p = function() {
			l(!0);
		}, t[0] = p) : p = t[0];
		var _ = p, f;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (f = function() {
			l(!1);
		}, t[1] = f) : f = t[1];
		var g = f;
		o("WAWebGenAiAgentLogEvents").useLogViewGenAiAgentAutoReplyFab();
		var h;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (h = s._(
			/*BTDS*/
			""
		), t[2] = h) : h = t[2];
		var y;
		t[3] !== n ? (y = function() {
			o("WAWebGenAiAgentLogEvents").logClickGenAiAgentAutoReplyFab(), o("WAWebCmd").Cmd.changeAiReplyStatus(n, o("WAWebBizAiAgentGating").isAiReplyFabConfirmModalEnabled());
		}, t[3] = n, t[4] = y) : y = t[4];
		var C;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (C = { className: "xixxii4 xhjxwu4 x9q68il xhtitgo x1useyqa xsdox4t x1c9tyrk xeusxvb x1pahc9y x1ertn4p x27vdmw x16w0wmm xs7yr5k x78zum5 xl56j7k x6s0dn4 x15g2dp1" }, t[5] = C) : C = t[5];
		var b = i ? d.aiIconHover : d.aiIconXstyle, v;
		t[6] !== b ? (v = u.jsx("div", babelHelpers.extends({}, C, {
			"data-testid": "biz_ai_thread_control_fab_button",
			onMouseEnter: _,
			onMouseLeave: g,
			children: u.jsx(r("WDSIconWdsIcAiFilled.react"), {
				width: 24,
				height: 24,
				iconXstyle: b
			})
		})), t[6] = b, t[7] = v) : v = t[7];
		var S;
		t[8] !== i ? (S = i && u.jsx(m, {}), t[8] = i, t[9] = S) : S = t[9];
		var R;
		return t[10] !== y || t[11] !== v || t[12] !== S ? (R = u.jsxs(o("WAWebClickable.react").Clickable, {
			as: "button",
			xstyle: d.button,
			ariaLabel: h,
			onClick: y,
			tabIndex: 0,
			children: [v, S]
		}), t[10] = y, t[11] = v, t[12] = S, t[13] = R) : R = t[13], R;
	}
	l.WAWebBizAiThreadControlFab = p;
}), 226);
