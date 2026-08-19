__d("WAWebMessageComposerThemeMatrix.story", [
	"Promise",
	"WAWebChatModel",
	"WAWebComposeBoxPopupPanel.react",
	"WAWebContactCollection",
	"WAWebContactModel",
	"WAWebDrawerManagerContext",
	"WAWebMessageComposer.react",
	"WAWebNoop",
	"WAWebNullFunc",
	"WAWebWidFactory",
	"WDSIconIcCalendarMonth.react",
	"WDSIconIcReply.react",
	"WDSIconWdsIcPrivateProcessingAiLockSparkle.react",
	"WDSText.react",
	"WDSThemes",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useMemo, _ = d.useRef, f = [
		{
			testid: "message-composer-state-empty",
			title: "Empty"
		},
		{
			inputText: "Ready to send",
			testid: "message-composer-state-single-line",
			title: "Single line"
		},
		{
			inputText: "Here is a longer composer draft with emoji text, https://example.com, and @Design Review\nSecond line keeps the input expanded.",
			testid: "message-composer-state-multiline",
			title: "Multiline"
		},
		{
			inputText: "Replying with context",
			testid: "message-composer-state-quote-panel",
			title: "Quoted message",
			topPanels: ["quote"]
		},
		{
			inputText: "https://example.com",
			testid: "message-composer-state-link-preview",
			title: "Link preview",
			topPanels: ["link"]
		},
		{
			inputText: "Replying with a linked source",
			testid: "message-composer-state-stacked-panels",
			title: "Stacked panels",
			topPanels: ["quote", "link"]
		},
		{
			inputText: "Shortcut ready",
			slot: "quick_reply",
			testid: "message-composer-state-quick-reply",
			title: "Quick reply slot"
		},
		{
			hasScheduleSend: !0,
			inputText: "Send later",
			testid: "message-composer-state-schedule",
			title: "Schedule send"
		},
		{
			inputText: "Rewrite this response",
			slot: "wwai",
			testid: "message-composer-state-wwai",
			title: "WWAI slot"
		}
	], g = {
		page: {
			minHeight: "xg6iff7",
			backgroundColor: "xhjsbib",
			color: "x14ug900",
			paddingTop: "xl7twdi",
			paddingInlineEnd: "xyo0t3i",
			paddingBottom: "xvg22vi",
			paddingInlineStart: "xb0esv5",
			$$css: !0
		},
		topPanelIcon: {
			color: "xhslqc4",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		icon: {
			color: "x15rks2t",
			$$css: !0
		}
	};
	function h() {
		var e = new URLSearchParams(window.location.search).get("composer_theme");
		switch (e) {
			case "wds_dark":
			case "wds_smb_light":
			case "wds_smb_dark": return e;
			default: return "wds_light";
		}
	}
	function y(e) {
		switch (e) {
			case "wds_dark": return o("WDSThemes").WDSDarkTheme;
			case "wds_smb_light": return o("WDSThemes").WDSSMBLightTheme;
			case "wds_smb_dark": return o("WDSThemes").WDSSMBDarkTheme;
			case "wds_light": return o("WDSThemes").WDSLightTheme;
		}
	}
	function C() {
		var e = o("WAWebWidFactory").createUserWidOrThrow("22222222222@c.us"), t = new (r("WAWebContactModel"))({
			id: e,
			name: "Theme Screenshot Contact"
		});
		return o("WAWebContactCollection").ContactCollection.add(t), new (o("WAWebChatModel")).Chat({ id: e });
	}
	function b() {
		if (document.getElementById("expressions-panel-container") == null) {
			var e = document.createElement("div");
			e.id = "expressions-panel-container", document.body.appendChild(e);
		}
	}
	function v(e) {
		var t = e.children, n = e.theme;
		return m(function() {
			var e, t = document.documentElement, o = document.body, a = (s || (s = r("stylex")))(y(n)).split(" ").filter(Boolean);
			return (e = t.classList).add.apply(e, a), o.classList.toggle("dark", n === "wds_dark" || n === "wds_smb_dark"), o.classList.toggle("smb-colors", n === "wds_smb_light" || n === "wds_smb_dark"), function() {
				var e;
				(e = t.classList).remove.apply(e, a), o.classList.remove("dark", "smb-colors");
			};
		}, [n]), c.jsx("div", babelHelpers.extends({}, (s || (s = r("stylex"))).props(y(n), g.page), { children: t }));
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = e.isTopmostPanel, n = e.type, o = n === "quote";
		return c.jsx(r("WAWebComposeBoxPopupPanel.react"), {
			isTopmostPanel: t,
			onOmit: r("WAWebNoop"),
			children: c.jsxs("div", {
				className: "x9f619 x78zum5 x6s0dn4 x8a3fw1 x1aj3ljl xh8yej3 x1wiwyrm x16ovd2e x12xbjc7 x1iw51ew xde1mab x14ug900",
				children: [
					c.jsx("div", { className: "x1nb5oqr xkh2ocl xyi3aci xwf5gio x1p453bz x1suzm8a xfn3atn x2lah0s" }),
					o ? c.jsx(r("WDSIconIcReply.react"), { iconXstyle: g.topPanelIcon }) : c.jsx(r("WDSIconIcCalendarMonth.react"), { iconXstyle: g.topPanelIcon }),
					c.jsxs("div", {
						className: "xeuugli",
						children: [c.jsx(r("WDSText.react"), {
							type: "Body2Emphasized",
							colorName: "contentDefault",
							children: o ? "Previous message" : "Example link preview"
						}), c.jsx(r("WDSText.react"), {
							type: "Body3",
							colorName: "contentDeemphasized",
							children: o ? "The deterministic message being answered." : "example.com"
						})]
					})
				]
			})
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t = e.slot;
		return c.jsx("div", {
			"data-testid": t === "quick_reply" ? "message-composer-quick-reply-slot" : "message-composer-wwai-slot",
			className: "x78zum5 x6s0dn4 xl56j7k x100vrsf x1vqgdyp x2lah0s xhslqc4",
			children: t === "quick_reply" ? c.jsx(r("WDSIconIcReply.react"), { iconXstyle: g.icon }) : c.jsx(r("WDSIconWdsIcPrivateProcessingAiLockSparkle.react"), { iconXstyle: g.icon })
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t = e.text;
		return c.jsx("div", {
			"aria-label": "Type a message",
			role: "textbox",
			"data-testid": "message-composer-rich-text-input",
			className: "x9f619 xh8yej3 x16ovd2e x12xbjc7 x1iw51ew xde1mab",
			children: t != null ? t : "Type a message"
		});
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(t) {
		var a, i, l = t.chat, s = t.state, u = _(null), d = _(null), m = _(null), p = (a = s.topPanels) != null ? a : [], f = ((i = s.inputText) != null ? i : "") !== "";
		return c.jsxs("div", {
			"data-testid": s.testid,
			className: "xeuugli",
			children: [c.jsx("div", {
				className: "xefnzgg",
				children: c.jsx(r("WDSText.react"), {
					type: "Body3Emphasized",
					colorName: "contentDeemphasized",
					children: s.title
				})
			}), c.jsxs("div", {
				className: "x9f619 xh8yej3 x1r3qdcx",
				children: [p.length > 0 && c.jsx("div", {
					className: "x9f619 x1uvdrpn x14mko6t",
					children: p.map(function(e, t) {
						return c.jsx(S, {
							isTopmostPanel: t === 0,
							type: e
						}, s.testid + "-" + e);
					})
				}), c.jsx(r("WAWebMessageComposer.react"), {
					chat: l,
					closePttComposer: r("WAWebNoop"),
					expressionsPanelPickerRef: u,
					expressionsPanelWrapperRef: d,
					getCurrentComposeContent: o("WAWebNullFunc").returnNull,
					handleInputFocus: r("WAWebNoop"),
					handleMetaUpDebounced: r("WAWebNoop"),
					handlePanelsGif: r("WAWebNoop"),
					handlePanelsSticker: r("WAWebNoop"),
					handlePanelsStickerFromStore: r("WAWebNoop"),
					handleSendText: r("WAWebNoop"),
					handleTab: r("WAWebNoop"),
					hasTextState: f,
					hasTopPanel: p.length > 0,
					input: c.jsx(L, { text: s.inputText }),
					inputHotkeyRef: m,
					isMessageToBot: !1,
					onPttSend: r("WAWebNoop"),
					onScheduleSend: s.hasScheduleSend === !0 ? r("WAWebNoop") : null,
					pttComposerActive: !1,
					recordingSession: null,
					replaceInputSelection: r("WAWebNoop"),
					richTextInputRef: null,
					startRecording: function() {
						return (e || (e = n("Promise"))).resolve();
					},
					updateTextAfterMediaDrawerClose: r("WAWebNoop"),
					wwaiButton: s.slot != null ? c.jsx(R, { slot: s.slot }) : null
				})]
			})]
		});
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k() {
		b();
		var e = h(), t = p(function() {
			return C();
		}, []);
		return c.jsx(o("WAWebDrawerManagerContext").DrawerManagerContextProvider, { children: c.jsx(v, {
			theme: e,
			children: c.jsx("div", {
				"data-testid": "message-composer-screenshot-matrix",
				className: "x9f619 xrvj5dj xnby9oq x1f0uite xs2akgl xh8yej3 x10xiq2s xvc5jky x11t971q",
				children: f.map(function(e) {
					return c.jsx(E, {
						chat: t,
						state: e
					}, e.testid);
				})
			})
		}) });
	}
	k.displayName = k.name + " [from " + i.id + "]";
	var I = {
		storyName: "WAWebMessageComposerThemeMatrix",
		component: k,
		description: "Deterministic message composer states for consumer and SMB theme screenshot coverage.",
		examples: [function() {
			return c.jsx(k, {});
		}]
	};
	l.default = I;
}), 98);
