__d("WAWebBizAiThreadControlFab.react", [
	"fbt",
	"WAWebBizAiAgentGating",
	"WAWebClickable.react",
	"WAWebCmd",
	"WAWebGenAiAgentLogEvents",
	"WDSIconWdsIcAiFilled.react",
	"react"
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
		return u.jsx("div", {
			className: "xixxii4 xo2byzu x15a21lv xpip370 xowaa7l xhtitgo x1tiyuxx x1nbhmlj xmzvs34 xf159sx x78zum5 x6s0dn4 xl56j7k xuxw1ft x6ikm8r x10wlt62 xlyipyv x1ncir08 x1pg5gke x1d3mw78 x1p4m5qa xbrszos xea3l6g x18isctg x2q3nzr x1ay2l74",
			"data-testid": "biz_ai_thread_control_fab_info_bar",
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.chat, n = c(!1), a = n[0], i = n[1];
		function l() {
			i(!0);
		}
		function p() {
			i(!1);
		}
		return o("WAWebGenAiAgentLogEvents").useLogViewGenAiAgentAutoReplyFab(), u.jsxs(o("WAWebClickable.react").Clickable, {
			as: "button",
			xstyle: d.button,
			ariaLabel: s._(
				/*BTDS*/
				""
			),
			onClick: function() {
				o("WAWebGenAiAgentLogEvents").logClickGenAiAgentAutoReplyFab(), o("WAWebCmd").Cmd.changeAiReplyStatus(t, o("WAWebBizAiAgentGating").isAiReplyFabConfirmModalEnabled());
			},
			tabIndex: 0,
			children: [u.jsx("div", {
				className: "xixxii4 xhjxwu4 x9q68il xhtitgo x1useyqa xsdox4t x1c9tyrk xeusxvb x1pahc9y x1ertn4p x27vdmw x16w0wmm xs7yr5k x78zum5 xl56j7k x6s0dn4 x15g2dp1",
				"data-testid": "biz_ai_thread_control_fab_button",
				onMouseEnter: l,
				onMouseLeave: p,
				children: u.jsx(r("WDSIconWdsIcAiFilled.react"), {
					width: 24,
					height: 24,
					iconXstyle: a ? d.aiIconHover : d.aiIconXstyle
				})
			}), a && u.jsx(m, {})]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.WAWebBizAiThreadControlFab = p;
}), 226);
