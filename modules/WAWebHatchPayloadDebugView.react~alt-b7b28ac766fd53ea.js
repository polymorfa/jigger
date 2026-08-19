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
		var t = r("useWAWebHatchPayloadDebug")(), n = [].concat(t).reverse();
		return u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSThemes").WDSSystemTheme, d.container), {
			"data-testid": "hatch_payload_debug_view",
			children: [u.jsxs("div", {
				className: "x6s0dn4 x9f619 x78zum5 x1q0g3np x1qughib x12xbjc7 x16ovd2e xde1mab x1iw51ew",
				children: [u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					children: t.length + " captured"
				}), u.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcDelete.react"),
					"aria-label": "Clear captured Hatch payloads",
					disabled: t.length === 0,
					onPress: function() {
						return r("WAWebHatchPayloadDebugStore").clear();
					},
					size: "medium",
					testid: "hatch_payload_debug_clear",
					type: "destructive",
					variant: "borderless"
				})]
			}), n.length === 0 ? u.jsx("div", {
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
				children: n.map(function(e) {
					return u.jsx(p, { record: e }, e.id);
				})
			})]
		}));
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(t) {
		var n = t.record, o = c(!1), a = o[0], i = o[1], l = a ? y(n.raw) : null, s = "hatch_payload_debug_detail_" + n.id, m = n.direction === "inbound";
		return u.jsxs("div", babelHelpers.extends({}, {
			0: { className: "x1h3rtpe x1t7ytsu xct1zlm xyi3aci xwf5gio x1p453bz x1suzm8a x9f619 x78zum5 xdt5ytf xeuugli x6ikm8r x10wlt62 x1bc8xq2" },
			1: { className: "x1h3rtpe x1t7ytsu xct1zlm xyi3aci xwf5gio x1p453bz x1suzm8a x9f619 x78zum5 xdt5ytf xeuugli x6ikm8r x10wlt62 xp78u7u" }
		}[!!m << 0], {
			"data-testid": "hatch_payload_debug_row",
			children: [u.jsxs("button", {
				type: "button",
				onClick: function() {
					return i(function(e) {
						return !e;
					});
				},
				"aria-expanded": a,
				"aria-controls": s,
				className: "x6s0dn4 x1ubxc9n xjbqb8w x1ejq31n x18oe1m7 x1sy0etr xstzfhl x9f619 x1aj3ljl x1ypdohk x78zum5 x1q0g3np xscbp6u x1xrf6ya xde1mab x1iw51ew x1yc453h xh8yej3",
				"data-testid": "hatch_payload_debug_row_header",
				children: [
					u.jsx("span", babelHelpers.extends({}, {
						0: { className: "x6s0dn4 x78zum5 x2lah0s x18s8g2y" },
						1: { className: "x6s0dn4 x78zum5 x2lah0s x1o3nzto" }
					}[!!m << 0], { children: m ? u.jsx(r("WDSIconIcArrowDownward.react"), {
						"aria-hidden": !0,
						height: 18,
						width: 18
					}) : u.jsx(r("WDSIconIcArrowUpward.react"), {
						"aria-hidden": !0,
						height: 18,
						width: 18
					}) })),
					u.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.typeBadge, g(n.action)), { children: u.jsx(r("WDSText.react"), {
						type: "Body3Emphasized",
						colorName: "contentInverse",
						children: n.action.type.toUpperCase()
					}) })),
					u.jsx("span", {
						className: "x1iyjqo2 xeuugli",
						children: u.jsx(r("WDSText.react"), {
							type: "Body2Emphasized",
							colorName: "contentDefault",
							children: f(n.action)
						})
					}),
					u.jsxs("span", {
						className: "x6s0dn4 x1s70e7g x78zum5 x1q0g3np x2lah0s",
						children: [
							u.jsx(r("WDSText.react"), {
								type: "Body3",
								colorName: "contentDeemphasized",
								children: m ? "Incoming" : "Outgoing"
							}),
							u.jsx(r("WDSText.react"), {
								type: "Body3",
								colorName: "contentDeemphasized",
								children: new Date(n.capturedAtMs).toLocaleTimeString()
							}),
							u.jsx("span", {
								className: "x6s0dn4 xhslqc4 x78zum5 x2lah0s",
								children: a ? u.jsx(r("WDSIconIcChevronDown.react"), {
									"aria-hidden": !0,
									height: 18,
									width: 18
								}) : u.jsx(r("WDSIconIcChevronRight.react"), {
									"aria-hidden": !0,
									height: 18,
									width: 18
								})
							})
						]
					})
				]
			}), a ? u.jsxs("div", {
				id: s,
				className: "xx42vgk x13fuv20 x178xt8z x9f619 x78zum5 xdt5ytf x14mko6t x1uvdrpn xscbp6u x1xrf6ya x129bwdz",
				children: [
					n.msgId != null && n.msgId !== "" ? u.jsx(_, {
						label: "Message ID",
						value: n.msgId
					}) : null,
					n.action.requestId != null && n.action.requestId !== "" ? u.jsx(_, {
						label: "Request ID",
						value: n.action.requestId
					}) : null,
					u.jsx(r("WDSText.react"), {
						type: "Body3Emphasized",
						colorName: "contentDefault",
						children: "Decoded"
					}),
					u.jsx("pre", {
						className: "xpip370 xbrszos xea3l6g x18isctg x2q3nzr x9f619 xowaa7l x1ey7xld x1ncwhqj xat24cr xdj266r x193iq5w x12xbjc7 x16ovd2e x1nzty39 x12w63v0 x126k92a x1yn0g08",
						children: h(n.action)
					}),
					l != null ? u.jsxs(u.Fragment, { children: [u.jsx(r("WDSText.react"), {
						type: "Body3Emphasized",
						colorName: "contentDefault",
						children: "Raw envelope"
					}), u.jsx("pre", {
						className: "xpip370 xbrszos xea3l6g x18isctg x2q3nzr x9f619 xowaa7l x1ey7xld x1ncwhqj xat24cr xdj266r x193iq5w x12xbjc7 x16ovd2e x1nzty39 x12w63v0 x126k92a x1yn0g08",
						children: l
					})] }) : null
				]
			}) : null]
		}));
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.label, n = e.value;
		return u.jsxs("div", {
			className: "x6s0dn4 x9f619 x1trrmfo x78zum5 x1q0g3np",
			"data-testid": "hatch_payload_debug_id_row",
			children: [u.jsxs("span", {
				className: "x1iyjqo2 xeuugli xj0a0fe",
				children: [u.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: "contentDeemphasized",
					children: t + ": "
				}), u.jsx(r("WDSText.react"), {
					type: "Body3Emphasized",
					colorName: "contentDefault",
					children: n
				})]
			}), u.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcContentCopy.react"),
				"aria-label": "Copy " + t,
				onPress: function() {
					o("WAWebCopyToClipboard").copyTextToClipboard(n);
				},
				size: "small",
				testid: "hatch_payload_debug_id_copy",
				variant: "borderless"
			})]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
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
	function g(e) {
		return e.type === "event" ? d.badgeEvent : e.type === "req" ? d.badgeReq : e.type === "res" ? d.badgeRes : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e.type);
		})();
	}
	function h(e) {
		var t;
		return (t = JSON.stringify(e, null, 2)) != null ? t : "";
	}
	function y(e) {
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
