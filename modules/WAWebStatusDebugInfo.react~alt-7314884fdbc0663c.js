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
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = 3600 * 24, d = "wa-web-status-debug-info-open", m = "Status debug info", p = "Toggle status debug info", _ = "Open Debug Info [INTERNAL]", f = "Close", g = "Pause status", h = "Play status", y = "N/A";
	function C(e) {
		var t = e.isNewsletterAdminStatus, n = e.isPaused, o = e.isSentByMe, a = e.msg, i = e.myReactionCount, l = e.onPause, c = e.onPlay, d = e.seenByCount, y = e.statusContact, C = e.viewCount, S = u(function() {
			return E();
		}), R = S[0], L = S[1], T = function() {
			n ? c() : l();
		}, D = function() {
			var e = !R;
			L(e), k(e), e && r("WAWebODS").incr("web.status.debug_info.panel_opened");
		}, x = function() {
			L(!1), k(!1);
		}, $ = v(a, y, o, t, C, d, i);
		return s.jsxs("div", {
			className: "x10l6tqk x1eu8d0j xr0af1x x164b614 x78zum5 xdt5ytf xuk3077",
			"data-testid": "status_debug_info",
			children: [s.jsx(r("WDSTooltip.react"), {
				label: _,
				children: s.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcBugReport.react"),
					variant: "borderless",
					size: "small",
					onPress: D,
					"aria-label": p,
					"aria-pressed": R,
					testid: "status_debug_info_toggle"
				})
			}), R ? s.jsxs("div", {
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
							Icon: r(n ? "WDSIconIcPlayArrowFilled.react" : "WDSIconIcPauseFilled.react"),
							variant: "borderless",
							size: "small",
							onPress: T,
							"aria-label": n ? h : g,
							"aria-pressed": n,
							testid: "status_debug_info_pause"
						}), s.jsx(r("WAWebUnstyledButton.react"), {
							onClick: x,
							"aria-label": f,
							xstyle: I.closeButton,
							children: s.jsx(r("WDSText.react"), {
								type: "Body2",
								colorName: "contentDeemphasized",
								children: f
							})
						})]
					})]
				}), $.map(function(e) {
					return s.jsx(b, { field: e }, e.key);
				})]
			}) : null]
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.field, n = function() {
			o("WAWebCopyToClipboard").copyTextToClipboard(t.value), o("WAWebToastManager").ToastManager.open(s.jsx(o("WAWebToast.react").Toast, { msg: "Field copied" })), r("WAWebODS").incr("web.status.debug_info.field_copied");
		};
		return s.jsxs(r("WAWebUnstyledButton.react"), {
			onClick: n,
			"aria-label": t.label,
			xstyle: I.row,
			testid: "status_debug_info_row_" + t.key,
			children: [s.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				children: t.label
			}), s.jsx(r("WDSText.react"), {
				type: "Body3Emphasized",
				colorName: "contentDefault",
				children: t.value
			})]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e, t, n, r, a, i, l) {
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
				value: S(n, r, a, i)
			},
			{
				key: "my_reaction",
				label: "My reaction",
				value: R(n, l)
			},
			{
				key: "time_to_live",
				label: "Time to live",
				value: L(e.t + c - o("WATimeUtils").unixTime())
			}
		];
	}
	function S(e, t, n, r) {
		return t ? String(n != null ? n : 0) : e ? String(r != null ? r : 0) : y;
	}
	function R(e, t) {
		return e ? y : t > 0 ? String(t) : "None";
	}
	function L(e) {
		if (e <= 0) return "Expired";
		var t = Math.floor(e / 3600), n = Math.floor(e % 3600 / 60);
		return t + "h " + n + "m";
	}
	function E() {
		return r("WAWebLocalStorage") == null ? !1 : r("WAWebLocalStorage").getItem(d) === "true";
	}
	function k(e) {
		r("WAWebLocalStorage") != null && r("WAWebLocalStorage").setItem(d, e ? "true" : "false");
	}
	var I = {
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
