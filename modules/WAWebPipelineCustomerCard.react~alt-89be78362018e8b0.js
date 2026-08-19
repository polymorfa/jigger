__d("WAWebPipelineCustomerCard.react", [
	"fbt",
	"WAWebAcquisitionSourceNames",
	"WAWebChatCollection",
	"WAWebContactCollection",
	"WAWebContactImage.react",
	"WAWebFrontendContactGetters",
	"WAWebLeadStageNames",
	"WAWebPipelineDragAndDrop.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useMemo;
	function d(e) {
		var t, n = e.customer, a = e.onClick, i = e.stage, l = c(function() {
			return o("WAWebContactCollection").ContactCollection.get(n.chatJid);
		}, [n.chatJid]), d = l != null ? o("WAWebFrontendContactGetters").getDisplayName(l) : "", p = n.acquisitionSource != null && (t = o("WAWebAcquisitionSourceNames").getAcquisitionSourceDisplayName(n.acquisitionSource)) != null ? t : "", _ = o("WAWebChatCollection").ChatCollection.get(n.chatJid), f = _ == null ? void 0 : _.t, g = o("WAWebLeadStageNames").getLeadStageName(i);
		return u.jsx(o("WAWebPipelineDragAndDrop.react").PipelineDraggableCard, {
			customerId: String(n.id),
			stage: i,
			children: u.jsxs("div", {
				className: "x78zum5 x1q0g3np x6s0dn4 x1aj3ljl x150mmf0 xqf2s3x xjpr12u x16ovd2e x12xbjc7 x12w63v0 x1nzty39 xyi3aci xwf5gio x1p453bz x1suzm8a x1280gxy x1ypdohk",
				"data-testid": "pipeline-customer-card",
				onClick: function() {
					return a(n);
				},
				role: "button",
				tabIndex: 0,
				"aria-roledescription": s._(
					/*BTDS*/
					""
				),
				"aria-label": s._(
					/*BTDS*/
					"",
					[s._param("customer name", d), s._param("lead stage name", g)]
				),
				onKeyDown: function(t) {
					(t.key === "Enter" || t.key === " ") && (t.preventDefault(), a(n));
				},
				children: [l != null && u.jsx(r("WAWebContactImage.react"), {
					contact: l,
					size: 40
				}), u.jsxs("div", {
					className: "x78zum5 xdt5ytf x1dbijih xeuugli x98rzlu",
					children: [
						u.jsx("div", {
							className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft",
							children: u.jsx(r("WDSText.react"), {
								type: "Body2",
								colorName: "contentDefault",
								children: d
							})
						}),
						p !== "" && u.jsx("div", {
							className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft",
							children: u.jsx(r("WDSText.react"), {
								type: "Body3",
								colorName: "contentDeemphasized",
								children: p
							})
						}),
						f != null && u.jsx("div", {
							className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft",
							children: u.jsx(r("WDSText.react"), {
								type: "Body3",
								colorName: "contentDeemphasized",
								children: s._(
									/*BTDS*/
									"",
									[s._param("date", m(f))]
								)
							})
						})
					]
				})]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = new Date(e * 1e3);
		return t.toLocaleDateString(void 0, {
			month: "short",
			day: "numeric",
			year: "numeric"
		});
	}
	l.default = d;
}), 226);
