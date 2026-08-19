__d("WAWebBizAILeadGenResponseDetailDrawer.react", [
	"fbt",
	"CometRelay",
	"WALogger",
	"WAWebBizAILeadGenResponseDetailDrawerMarkSeenMutation.graphql",
	"WAWebBizAILeadGenResponseDetailDrawer_response.graphql",
	"WAWebBizAILeadGenUtils",
	"WAWebBizAiSaveUtils",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebCopyToClipboard",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManager",
	"WAWebFindChatAction",
	"WAWebToast.react",
	"WAWebToastManager",
	"WDSButton.react",
	"WDSText.react",
	"getErrorSafe",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p = m || (m = o("react")), _ = m, f = _.useCallback, g = _.useEffect, h = _.useMemo, y = _.useRef, C = e !== void 0 ? e : e = n("WAWebBizAILeadGenResponseDetailDrawerMarkSeenMutation.graphql"), b = { body: {
		paddingInlineStart: "x1iw51ew",
		paddingInlineEnd: "xde1mab",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} };
	function v(e) {
		var t, a, i = e.onBack, l = e.ref, m = e.responseRef, _ = o("CometRelay").useFragment(u !== void 0 ? u : u = n("WAWebBizAILeadGenResponseDetailDrawer_response.graphql"), m), v = h(function() {
			var e, t;
			return o("WAWebBizAILeadGenUtils").getConsumerWid((e = _.consumer_uid) == null ? void 0 : e.pn, (t = _.consumer_uid) == null ? void 0 : t.lid);
		}, [(t = _.consumer_uid) == null ? void 0 : t.pn, (a = _.consumer_uid) == null ? void 0 : a.lid]), R = h(function() {
			return S(_.customer_info);
		}, [_.customer_info]), L = o("CometRelay").useMutation(C), E = L[0], k = y(!1);
		g(function() {
			var e = _.id;
			k.current || _.has_seen === !0 || e == null || (k.current = !0, E({
				onError: function(t) {
					o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["BizAI lead gen mark seen mutation failed"]))).catching(r("getErrorSafe")(t)).sendLogs("biz-ai-lead-gen-mark-seen-error");
				},
				optimisticUpdater: function(n) {
					var t;
					(t = n.get(e)) == null || t.setValue(!0, "has_seen");
				},
				updater: function(n) {
					var t;
					(t = n.get(e)) == null || t.setValue(!0, "has_seen");
				},
				variables: { input: { lead_gen_data_ids: [e] } }
			}));
		}, [
			E,
			_.has_seen,
			_.id
		]);
		var I = f(function(e) {
			o("WAWebCopyToClipboard").copyTextToClipboard(e).then(function(e) {
				e && o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
			});
		}, []), T = f(function() {
			v != null && o("WAWebFindChatAction").findOrCreateLatestChat(v, "createChat").then(function(e) {
				var t = e.chat;
				o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(), o("WAWebCmd").Cmd.openChatBottom({
					chat: t,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Deeplink
				});
			}).catch(function(e) {
				o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["BizAI lead gen go to chat failed"]))).catching(r("getErrorSafe")(e)).sendLogs("biz-ai-lead-gen-go-to-chat-error"), o("WAWebBizAiSaveUtils").showErrorToast();
			});
		}, [v]);
		return p.jsxs(r("WAWebDrawer.react"), {
			ref: l,
			testid: "biz-ai-lead-gen-response-detail-drawer",
			children: [
				p.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: s._(
						/*BTDS*/
						""
					),
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
					onBack: i
				}),
				p.jsx(r("WAWebDrawerBody.react"), {
					xstyle: b.body,
					children: R.map(function(e, t) {
						return p.jsxs("div", {
							"data-testid": "lead-gen-response-field-" + t,
							role: "button",
							tabIndex: 0,
							"aria-label": s._(
								/*BTDS*/
								"",
								[s._param("label", e.label)]
							).toString(),
							onClick: function() {
								return I(e.value);
							},
							onKeyDown: function(n) {
								(n.key === "Enter" || n.key === " ") && (n.preventDefault(), I(e.value));
							},
							className: "xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x78zum5 xdt5ytf x16ovd2e x12xbjc7 x1iw51ew xde1mab x1ubxc9n",
							children: [p.jsx("div", {
								className: "x1nbhmlj",
								children: p.jsx(r("WDSText.react"), {
									colorName: "contentDeemphasized",
									type: "Body3",
									children: e.label
								})
							}), p.jsx(r("WDSText.react"), {
								colorName: "contentDefault",
								type: "Body1",
								children: e.value
							})]
						}, e.label + "-" + t);
					})
				}),
				v != null ? p.jsx("div", {
					className: "xx42vgk x13fuv20 x178xt8z x9f619 x78zum5 x1xrf6ya xscbp6u x1iw51ew xde1mab xh8yej3",
					children: p.jsx(r("WDSButton.react"), {
						variant: "outline",
						size: "medium",
						widthMode: "flexible",
						label: s._(
							/*BTDS*/
							""
						),
						onPress: T,
						testid: "lead-gen-response-detail-go-to-chat"
					})
				}) : null
			]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		if (e == null || e === "") return [];
		var t;
		try {
			t = JSON.parse(e);
		} catch (e) {
			return [];
		}
		if (t == null || typeof t != "object") return [];
		var n = [];
		for (var r of Object.entries(t)) {
			var o = r[0], a = r[1], i = a == null ? "" : String(a);
			i !== "" && n.push({
				label: o,
				value: i
			});
		}
		return n;
	}
	l.default = v;
}), 226);
