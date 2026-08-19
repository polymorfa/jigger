__d("WAWebStatusDebugInfo.react", [
	"WATimeUtils",
	"WAWebAck",
	"WAWebCopyToClipboard",
	"WAWebFrontendContactGetters",
	"WAWebLocalStorage",
	"WAWebODS",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUnstyledButton.react",
	"WDSButton.react",
	"WDSIconIcBugReport.react",
	"WDSIconIcPauseFilled.react",
	"WDSIconIcPlayArrowFilled.react",
	"WDSText.react",
	"WDSTooltip.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = 3600 * 24, d = "wa-web-status-debug-info-open", m = "Status debug info", p = "Toggle status debug info", _ = "Open Debug Info [INTERNAL]", f = "Close", g = "Pause status", h = "Play status", y = "N/A";
	function C(e) {
		var t = o("react-compiler-runtime").c(23), n = e.isNewsletterAdminStatus, a = e.isPaused, i = e.isSentByMe, l = e.msg, c = e.myReactionCount, d = e.onPause, y = e.onPlay, C = e.seenByCount, S = e.statusContact, L = e.viewCount, E = u(v), k = E[0], I = E[1], x;
		t[0] !== a || t[1] !== d || t[2] !== y ? (x = function() {
			a ? y() : d();
		}, t[0] = a, t[1] = d, t[2] = y, t[3] = x) : x = t[3];
		var $ = x, P;
		t[4] !== k ? (P = function() {
			var e = !k;
			I(e), T(e), e && r("WAWebODS").incr("web.status.debug_info.panel_opened");
		}, t[4] = k, t[5] = P) : P = t[5];
		var N = P, M;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (M = function() {
			I(!1), T(!1);
		}, t[6] = M) : M = t[6];
		var w = M, A;
		if (t[7] !== N || t[8] !== $ || t[9] !== n || t[10] !== k || t[11] !== a || t[12] !== i || t[13] !== l || t[14] !== c || t[15] !== C || t[16] !== S || t[17] !== L) {
			var F = R(l, S, i, n, L, C, c), O;
			t[19] === Symbol.for("react.memo_cache_sentinel") ? (O = { className: "x10l6tqk x1eu8d0j xr0af1x x164b614 x78zum5 xdt5ytf xuk3077" }, t[19] = O) : O = t[19];
			var B;
			t[20] !== N || t[21] !== k ? (B = s.jsx(r("WDSTooltip.react"), {
				label: _,
				children: s.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcBugReport.react"),
					variant: "borderless",
					size: "small",
					onPress: N,
					"aria-label": p,
					"aria-pressed": k,
					testid: "status_debug_info_toggle"
				})
			}), t[20] = N, t[21] = k, t[22] = B) : B = t[22], A = s.jsxs("div", babelHelpers.extends({}, O, {
				"data-testid": "status_debug_info",
				children: [B, k ? s.jsxs("div", {
					className: "xav9cv8 x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x1hfn5x7 xyi3aci xwf5gio x1p453bz x1suzm8a x1280gxy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz",
					"data-testid": "status_debug_info_panel",
					children: [s.jsxs("div", {
						className: "x78zum5 x1qughib x6s0dn4 x4tpdpg",
						children: [s.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDefault",
							children: m
						}), s.jsxs("div", {
							className: "x78zum5 x1q0g3np x6s0dn4 x129bwdz x1trrmfo",
							children: [s.jsx(r("WDSButton.react"), {
								Icon: r(a ? "WDSIconIcPlayArrowFilled.react" : "WDSIconIcPauseFilled.react"),
								variant: "borderless",
								size: "small",
								onPress: $,
								"aria-label": a ? h : g,
								"aria-pressed": a,
								testid: "status_debug_info_pause"
							}), s.jsx(r("WAWebUnstyledButton.react"), {
								onClick: w,
								"aria-label": f,
								xstyle: D.closeButton,
								children: s.jsx(r("WDSText.react"), {
									type: "Body2",
									colorName: "contentDeemphasized",
									children: f
								})
							})]
						})]
					}), F.map(b)]
				}) : null]
			})), t[7] = N, t[8] = $, t[9] = n, t[10] = k, t[11] = a, t[12] = i, t[13] = l, t[14] = c, t[15] = C, t[16] = S, t[17] = L, t[18] = A;
		} else A = t[18];
		return A;
	}
	function b(e) {
		return s.jsx(S, { field: e }, e.key);
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v() {
		return I();
	}
	function S(e) {
		var t = o("react-compiler-runtime").c(12), n = e.field, a;
		t[0] !== n.value ? (a = function() {
			o("WAWebCopyToClipboard").copyTextToClipboard(n.value), o("WAWebToastManager").ToastManager.open(s.jsx(o("WAWebToast.react").Toast, { msg: "Field copied" })), r("WAWebODS").incr("web.status.debug_info.field_copied");
		}, t[0] = n.value, t[1] = a) : a = t[1];
		var i = a, l = "status_debug_info_row_" + n.key, u;
		t[2] !== n.label ? (u = s.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			children: n.label
		}), t[2] = n.label, t[3] = u) : u = t[3];
		var c;
		t[4] !== n.value ? (c = s.jsx(r("WDSText.react"), {
			type: "Body3Emphasized",
			colorName: "contentDefault",
			children: n.value
		}), t[4] = n.value, t[5] = c) : c = t[5];
		var d;
		return t[6] !== n.label || t[7] !== i || t[8] !== l || t[9] !== u || t[10] !== c ? (d = s.jsxs(r("WAWebUnstyledButton.react"), {
			onClick: i,
			"aria-label": n.label,
			xstyle: D.row,
			testid: l,
			children: [u, c]
		}), t[6] = n.label, t[7] = i, t[8] = l, t[9] = u, t[10] = c, t[11] = d) : d = t[11], d;
	}
	function R(e, t, n, r, a, i, l) {
		return [
			{
				key: "message_id",
				label: "Message ID",
				value: e.id.toString()
			},
			{
				key: "type",
				label: "Type",
				value: e.type
			},
			{
				key: "sender",
				label: "Sender",
				value: o("WAWebFrontendContactGetters").getFormattedName(t) + " (" + t.id.toString() + ")"
			},
			{
				key: "posted",
				label: "Posted",
				value: new Date(e.t * 1e3).toLocaleString()
			},
			{
				key: "view_acknowledged",
				label: "View acknowledged",
				value: e.ack >= o("WAWebAck").ACK.READ ? "Yes" : "No"
			},
			{
				key: "views",
				label: "Views",
				value: L(n, r, a, i)
			},
			{
				key: "my_reaction",
				label: "My reaction",
				value: E(n, l)
			},
			{
				key: "time_to_live",
				label: "Time to live",
				value: k(e.t + c - o("WATimeUtils").unixTime())
			}
		];
	}
	function L(e, t, n, r) {
		return t ? String(n != null ? n : 0) : e ? String(r != null ? r : 0) : y;
	}
	function E(e, t) {
		return e ? y : t > 0 ? String(t) : "None";
	}
	function k(e) {
		if (e <= 0) return "Expired";
		var t = Math.floor(e / 3600), n = Math.floor(e % 3600 / 60);
		return t + "h " + n + "m";
	}
	function I() {
		return r("WAWebLocalStorage") == null ? !1 : r("WAWebLocalStorage").getItem(d) === "true";
	}
	function T(e) {
		r("WAWebLocalStorage") != null && r("WAWebLocalStorage").setItem(d, e ? "true" : "false");
	}
	var D = {
		closeButton: {
			cursor: "x1ypdohk",
			$$css: !0
		},
		row: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			alignItems: "x1cy8zhl",
			width: "xh8yej3",
			paddingTop: "x1tiyuxx",
			paddingBottom: "x1nbhmlj",
			rowGap: "x1b73lln",
			columnGap: "x46w9ns",
			cursor: "x1ypdohk",
			textAlign: "x1yc453h",
			$$css: !0
		}
	};
	l.default = C;
}), 98);
