__d("WAWebHatchPayloadDebugView.react", [
	"WAWebCopyToClipboard",
	"WAWebHatchPayloadDebugStore",
	"WDSButton.react",
	"WDSIconIcArrowDownward.react",
	"WDSIconIcArrowUpward.react",
	"WDSIconIcChevronDown.react",
	"WDSIconIcChevronRight.react",
	"WDSIconIcContentCopy.react",
	"WDSIconIcDelete.react",
	"WDSText.react",
	"WDSThemes",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebHatchPayloadDebug"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useState, d = {
		container: {
			boxSizing: "x9f619",
			color: "x14ug900",
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			maxWidth: "x193iq5w",
			overflowX: "x6ikm8r",
			rowGap: "x1qvou4u",
			$$css: !0
		},
		typeBadge: {
			borderStartStartRadius: "xbrszos",
			borderStartEndRadius: "xea3l6g",
			borderEndEndRadius: "x18isctg",
			borderEndStartRadius: "x2q3nzr",
			flexShrink: "x2lah0s",
			paddingBottom: "xa0aww2",
			paddingTop: "x1gxa6cn",
			paddingInlineEnd: "x1uc92m",
			paddingInlineStart: "x181vq82",
			$$css: !0
		},
		badgeEvent: {
			backgroundColor: "x1gff4rm",
			$$css: !0
		},
		badgeReq: {
			backgroundColor: "x19ts3uc",
			$$css: !0
		},
		badgeRes: {
			backgroundColor: "x1hzpctz",
			$$css: !0
		}
	};
	function m() {
		var t = o("react-compiler-runtime").c(11), n = r("useWAWebHatchPayloadDebug")(), a;
		if (t[0] !== n) {
			var i = [].concat(n).reverse(), l;
			t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = (e || (e = r("stylex"))).props(o("WDSThemes").WDSSystemTheme, d.container), t[2] = l) : l = t[2];
			var s;
			t[3] === Symbol.for("react.memo_cache_sentinel") ? (s = { className: "x6s0dn4 x9f619 x78zum5 x1q0g3np x1qughib x12xbjc7 x16ovd2e xde1mab x1iw51ew" }, t[3] = s) : s = t[3];
			var c = n.length + " captured", m;
			t[4] !== c ? (m = u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: c
			}), t[4] = c, t[5] = m) : m = t[5];
			var f = n.length === 0, g;
			t[6] !== f ? (g = u.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcDelete.react"),
				"aria-label": "Clear captured Hatch payloads",
				disabled: f,
				onPress: _,
				size: "medium",
				testid: "hatch_payload_debug_clear",
				type: "destructive",
				variant: "borderless"
			}), t[6] = f, t[7] = g) : g = t[7];
			var h;
			t[8] !== m || t[9] !== g ? (h = u.jsxs("div", babelHelpers.extends({}, s, { children: [m, g] })), t[8] = m, t[9] = g, t[10] = h) : h = t[10], a = u.jsxs("div", babelHelpers.extends({}, l, {
				"data-testid": "hatch_payload_debug_view",
				children: [h, i.length === 0 ? u.jsx("div", {
					className: "x9f619 xvpt6g3 x1p57kb1 xvtqlqk xdx6fka",
					"data-testid": "hatch_payload_debug_empty",
					children: u.jsx(r("WDSText.react"), {
						type: "Body1",
						colorName: "contentDefault",
						children: "No Hatch payloads captured yet."
					})
				}) : u.jsx("div", {
					className: "x9f619 x78zum5 xdt5ytf xde1mab x1iw51ew x1qvou4u",
					"data-testid": "hatch_payload_debug_list",
					children: i.map(p)
				})]
			})), t[0] = n, t[1] = a;
		} else a = t[1];
		return a;
	}
	function p(e) {
		return u.jsx(f, { record: e }, e.id);
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _() {
		return r("WAWebHatchPayloadDebugStore").clear();
	}
	function f(t) {
		var n = o("react-compiler-runtime").c(59), a = t.record, i = c(!1), l = i[0], s = i[1], m;
		n[0] !== l || n[1] !== a.raw ? (m = l ? v(a.raw) : null, n[0] = l, n[1] = a.raw, n[2] = m) : m = n[2];
		var p = m, _ = "hatch_payload_debug_detail_" + a.id, f = a.direction === "inbound", S;
		n[3] !== f ? (S = {
			0: { className: "x1h3rtpe x1t7ytsu xct1zlm xyi3aci xwf5gio x1p453bz x1suzm8a x9f619 x78zum5 xdt5ytf xeuugli x6ikm8r x10wlt62 x1bc8xq2" },
			1: { className: "x1h3rtpe x1t7ytsu xct1zlm xyi3aci xwf5gio x1p453bz x1suzm8a x9f619 x78zum5 xdt5ytf xeuugli x6ikm8r x10wlt62 xp78u7u" }
		}[!!f << 0], n[3] = f, n[4] = S) : S = n[4];
		var R;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (R = function() {
			return s(g);
		}, n[5] = R) : R = n[5];
		var L;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (L = { className: "x6s0dn4 x1ubxc9n xjbqb8w x1ejq31n x18oe1m7 x1sy0etr xstzfhl x9f619 x1aj3ljl x1ypdohk x78zum5 x1q0g3np xscbp6u x1xrf6ya xde1mab x1iw51ew x1yc453h xh8yej3" }, n[6] = L) : L = n[6];
		var E;
		n[7] !== f ? (E = {
			0: { className: "x6s0dn4 x78zum5 x2lah0s x18s8g2y" },
			1: { className: "x6s0dn4 x78zum5 x2lah0s x1o3nzto" }
		}[!!f << 0], n[7] = f, n[8] = E) : E = n[8];
		var k;
		n[9] !== f ? (k = f ? u.jsx(r("WDSIconIcArrowDownward.react"), {
			"aria-hidden": !0,
			height: 18,
			width: 18
		}) : u.jsx(r("WDSIconIcArrowUpward.react"), {
			"aria-hidden": !0,
			height: 18,
			width: 18
		}), n[9] = f, n[10] = k) : k = n[10];
		var I;
		n[11] !== E || n[12] !== k ? (I = u.jsx("span", babelHelpers.extends({}, E, { children: k })), n[11] = E, n[12] = k, n[13] = I) : I = n[13];
		var T;
		n[14] !== a.action ? (T = (e || (e = r("stylex"))).props(d.typeBadge, C(a.action)), n[14] = a.action, n[15] = T) : T = n[15];
		var D;
		n[16] !== a.action.type ? (D = a.action.type.toUpperCase(), n[16] = a.action.type, n[17] = D) : D = n[17];
		var x;
		n[18] !== D ? (x = u.jsx(r("WDSText.react"), {
			type: "Body3Emphasized",
			colorName: "contentInverse",
			children: D
		}), n[18] = D, n[19] = x) : x = n[19];
		var $;
		n[20] !== x || n[21] !== T ? ($ = u.jsx("span", babelHelpers.extends({}, T, { children: x })), n[20] = x, n[21] = T, n[22] = $) : $ = n[22];
		var P;
		n[23] === Symbol.for("react.memo_cache_sentinel") ? (P = { className: "x1iyjqo2 xeuugli" }, n[23] = P) : P = n[23];
		var N;
		n[24] !== a.action ? (N = y(a.action), n[24] = a.action, n[25] = N) : N = n[25];
		var M;
		n[26] !== N ? (M = u.jsx("span", babelHelpers.extends({}, P, { children: u.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: "contentDefault",
			children: N
		}) })), n[26] = N, n[27] = M) : M = n[27];
		var w;
		n[28] === Symbol.for("react.memo_cache_sentinel") ? (w = { className: "x6s0dn4 x1s70e7g x78zum5 x1q0g3np x2lah0s" }, n[28] = w) : w = n[28];
		var A = f ? "Incoming" : "Outgoing", F;
		n[29] !== A ? (F = u.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			children: A
		}), n[29] = A, n[30] = F) : F = n[30];
		var O;
		n[31] !== a.capturedAtMs ? (O = new Date(a.capturedAtMs).toLocaleTimeString(), n[31] = a.capturedAtMs, n[32] = O) : O = n[32];
		var B;
		n[33] !== O ? (B = u.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			children: O
		}), n[33] = O, n[34] = B) : B = n[34];
		var W;
		n[35] === Symbol.for("react.memo_cache_sentinel") ? (W = { className: "x6s0dn4 xhslqc4 x78zum5 x2lah0s" }, n[35] = W) : W = n[35];
		var q;
		n[36] !== l ? (q = u.jsx("span", babelHelpers.extends({}, W, { children: l ? u.jsx(r("WDSIconIcChevronDown.react"), {
			"aria-hidden": !0,
			height: 18,
			width: 18
		}) : u.jsx(r("WDSIconIcChevronRight.react"), {
			"aria-hidden": !0,
			height: 18,
			width: 18
		}) })), n[36] = l, n[37] = q) : q = n[37];
		var U;
		n[38] !== F || n[39] !== B || n[40] !== q ? (U = u.jsxs("span", babelHelpers.extends({}, w, { children: [
			F,
			B,
			q
		] })), n[38] = F, n[39] = B, n[40] = q, n[41] = U) : U = n[41];
		var V;
		n[42] !== _ || n[43] !== l || n[44] !== $ || n[45] !== M || n[46] !== U || n[47] !== I ? (V = u.jsxs("button", babelHelpers.extends({
			type: "button",
			onClick: R,
			"aria-expanded": l,
			"aria-controls": _
		}, L, {
			"data-testid": "hatch_payload_debug_row_header",
			children: [
				I,
				$,
				M,
				U
			]
		})), n[42] = _, n[43] = l, n[44] = $, n[45] = M, n[46] = U, n[47] = I, n[48] = V) : V = n[48];
		var H;
		n[49] !== _ || n[50] !== l || n[51] !== p || n[52] !== a.action || n[53] !== a.msgId ? (H = l ? u.jsxs("div", {
			id: _,
			className: "xx42vgk x13fuv20 x178xt8z x9f619 x78zum5 xdt5ytf x14mko6t x1uvdrpn xscbp6u x1xrf6ya x129bwdz",
			children: [
				a.msgId != null && a.msgId !== "" ? u.jsx(h, {
					label: "Message ID",
					value: a.msgId
				}) : null,
				a.action.requestId != null && a.action.requestId !== "" ? u.jsx(h, {
					label: "Request ID",
					value: a.action.requestId
				}) : null,
				u.jsx(r("WDSText.react"), {
					type: "Body3Emphasized",
					colorName: "contentDefault",
					children: "Decoded"
				}),
				u.jsx("pre", {
					className: "xpip370 xbrszos xea3l6g x18isctg x2q3nzr x9f619 xowaa7l x1ey7xld x1ncwhqj xat24cr xdj266r x193iq5w x12xbjc7 x16ovd2e x1nzty39 x12w63v0 x126k92a x1yn0g08",
					children: b(a.action)
				}),
				p != null ? u.jsxs(u.Fragment, { children: [u.jsx(r("WDSText.react"), {
					type: "Body3Emphasized",
					colorName: "contentDefault",
					children: "Raw envelope"
				}), u.jsx("pre", {
					className: "xpip370 xbrszos xea3l6g x18isctg x2q3nzr x9f619 xowaa7l x1ey7xld x1ncwhqj xat24cr xdj266r x193iq5w x12xbjc7 x16ovd2e x1nzty39 x12w63v0 x126k92a x1yn0g08",
					children: p
				})] }) : null
			]
		}) : null, n[49] = _, n[50] = l, n[51] = p, n[52] = a.action, n[53] = a.msgId, n[54] = H) : H = n[54];
		var G;
		return n[55] !== S || n[56] !== V || n[57] !== H ? (G = u.jsxs("div", babelHelpers.extends({}, S, {
			"data-testid": "hatch_payload_debug_row",
			children: [V, H]
		})), n[55] = S, n[56] = V, n[57] = H, n[58] = G) : G = n[58], G;
	}
	function g(e) {
		return !e;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(17), n = e.label, a = e.value, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = { className: "x6s0dn4 x9f619 x1trrmfo x78zum5 x1q0g3np" }, t[0] = i) : i = t[0];
		var l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = { className: "x1iyjqo2 xeuugli xj0a0fe" }, t[1] = l) : l = t[1];
		var s = n + ": ", c;
		t[2] !== s ? (c = u.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			children: s
		}), t[2] = s, t[3] = c) : c = t[3];
		var d;
		t[4] !== a ? (d = u.jsx(r("WDSText.react"), {
			type: "Body3Emphasized",
			colorName: "contentDefault",
			children: a
		}), t[4] = a, t[5] = d) : d = t[5];
		var m;
		t[6] !== c || t[7] !== d ? (m = u.jsxs("span", babelHelpers.extends({}, l, { children: [c, d] })), t[6] = c, t[7] = d, t[8] = m) : m = t[8];
		var p = "Copy " + n, _;
		t[9] !== a ? (_ = function() {
			o("WAWebCopyToClipboard").copyTextToClipboard(a);
		}, t[9] = a, t[10] = _) : _ = t[10];
		var f;
		t[11] !== p || t[12] !== _ ? (f = u.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcContentCopy.react"),
			"aria-label": p,
			onPress: _,
			size: "small",
			testid: "hatch_payload_debug_id_copy",
			variant: "borderless"
		}), t[11] = p, t[12] = _, t[13] = f) : f = t[13];
		var g;
		return t[14] !== m || t[15] !== f ? (g = u.jsxs("div", babelHelpers.extends({}, i, {
			"data-testid": "hatch_payload_debug_id_row",
			children: [m, f]
		})), t[14] = m, t[15] = f, t[16] = g) : g = t[16], g;
	}
	function y(e) {
		return (function(e) {
			if ((typeof e == "object" && e !== null || typeof e == "function") && e.type === "event" && (typeof e.event == "object" && e.event !== null || typeof e.event == "function") && "opKey" in e.event) {
				var t = e.event.opKey;
				return t;
			}
			if ((typeof e == "object" && e !== null || typeof e == "function") && e.type === "req" && (typeof e.request == "object" && e.request !== null || typeof e.request == "function") && "method" in e.request) {
				var n = e.request.method;
				return n;
			}
			if ((typeof e == "object" && e !== null || typeof e == "function") && e.type === "res" && (typeof e.response == "object" && e.response !== null || typeof e.response == "function") && "method" in e.response) {
				var r = e.response.method;
				return r;
			}
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})(e);
	}
	function C(e) {
		return e.type === "event" ? d.badgeEvent : e.type === "req" ? d.badgeReq : e.type === "res" ? d.badgeRes : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e.type);
		})();
	}
	function b(e) {
		var t;
		return (t = JSON.stringify(e, null, 2)) != null ? t : "";
	}
	function v(e) {
		if (e == null) return null;
		try {
			var t, n = JSON.parse(e);
			return (t = JSON.stringify(n, null, 2)) != null ? t : e;
		} catch (t) {
			return e;
		}
	}
	l.default = m;
}), 98);
