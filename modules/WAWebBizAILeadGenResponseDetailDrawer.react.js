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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p = m || (m = o("react")), _ = m, f = _.useCallback, g = _.useEffect, h = _.useMemo, y = _.useRef, C = e !== void 0 ? e : e = n("WAWebBizAILeadGenResponseDetailDrawerMarkSeenMutation.graphql"), b = { body: {
		paddingInlineStart: "x1iw51ew",
		paddingInlineEnd: "xde1mab",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} };
	function v(e) {
		var t, a, i, l, c = o("react-compiler-runtime").c(28), d = e.onBack, m = e.ref, _ = e.responseRef, f = o("CometRelay").useFragment(u !== void 0 ? u : u = n("WAWebBizAILeadGenResponseDetailDrawer_response.graphql"), _);
		(t = f.consumer_uid) == null || t.pn, (a = f.consumer_uid) == null || a.lid;
		var h = (i = f.consumer_uid) == null ? void 0 : i.pn, v = (l = f.consumer_uid) == null ? void 0 : l.lid, E;
		c[0] !== h || c[1] !== v ? (E = o("WAWebBizAILeadGenUtils").getConsumerWid(h, v), c[0] = h, c[1] = v, c[2] = E) : E = c[2];
		var T = E, D;
		c[3] !== f.customer_info ? (D = I(f.customer_info), c[3] = f.customer_info, c[4] = D) : D = c[4];
		var x = D, $ = o("CometRelay").useMutation(C), P = $[0], N = y(!1), M, w;
		c[5] !== P || c[6] !== f.has_seen || c[7] !== f.id ? (M = function() {
			var e = f.id;
			N.current || f.has_seen === !0 || e == null || (N.current = !0, P({
				onError: k,
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
		}, w = [
			P,
			f.has_seen,
			f.id
		], c[5] = P, c[6] = f.has_seen, c[7] = f.id, c[8] = M, c[9] = w) : (M = c[8], w = c[9]), g(M, w);
		var A = L, F;
		c[10] !== T ? (F = function() {
			T != null && o("WAWebFindChatAction").findOrCreateLatestChat(T, "createChat").then(R).catch(S);
		}, c[10] = T, c[11] = F) : F = c[11];
		var O = F, B;
		c[12] === Symbol.for("react.memo_cache_sentinel") ? (B = s._(
			/*BTDS*/
			""
		), c[12] = B) : B = c[12];
		var W;
		c[13] !== d ? (W = p.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: B,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: d
		}), c[13] = d, c[14] = W) : W = c[14];
		var q;
		if (c[15] !== x) {
			var U;
			c[17] === Symbol.for("react.memo_cache_sentinel") ? (U = function(t, n) {
				return p.jsxs("div", {
					"data-testid": "lead-gen-response-field-" + n,
					role: "button",
					tabIndex: 0,
					"aria-label": s._(
						/*BTDS*/
						"",
						[s._param("label", t.label)]
					).toString(),
					onClick: function() {
						return A(t.value);
					},
					onKeyDown: function(n) {
						(n.key === "Enter" || n.key === " ") && (n.preventDefault(), A(t.value));
					},
					className: "xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x78zum5 xdt5ytf x16ovd2e x12xbjc7 x1iw51ew xde1mab x1ubxc9n",
					children: [p.jsx("div", {
						className: "x1nbhmlj",
						children: p.jsx(r("WDSText.react"), {
							colorName: "contentDeemphasized",
							type: "Body3",
							children: t.label
						})
					}), p.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body1",
						children: t.value
					})]
				}, t.label + "-" + n);
			}, c[17] = U) : U = c[17], q = x.map(U), c[15] = x, c[16] = q;
		} else q = c[16];
		var V;
		c[18] !== q ? (V = p.jsx(r("WAWebDrawerBody.react"), {
			xstyle: b.body,
			children: q
		}), c[18] = q, c[19] = V) : V = c[19];
		var H;
		c[20] !== O || c[21] !== T ? (H = T != null ? p.jsx("div", {
			className: "xx42vgk x13fuv20 x178xt8z x9f619 x78zum5 x1xrf6ya xscbp6u x1iw51ew xde1mab xh8yej3",
			children: p.jsx(r("WDSButton.react"), {
				variant: "outline",
				size: "medium",
				widthMode: "flexible",
				label: s._(
					/*BTDS*/
					""
				),
				onPress: O,
				testid: "lead-gen-response-detail-go-to-chat"
			})
		}) : null, c[20] = O, c[21] = T, c[22] = H) : H = c[22];
		var G;
		return c[23] !== m || c[24] !== V || c[25] !== H || c[26] !== W ? (G = p.jsxs(r("WAWebDrawer.react"), {
			ref: m,
			testid: "biz-ai-lead-gen-response-detail-drawer",
			children: [
				W,
				V,
				H
			]
		}), c[23] = m, c[24] = V, c[25] = H, c[26] = W, c[27] = G) : G = c[27], G;
	}
	function S(e) {
		o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["BizAI lead gen go to chat failed"]))).catching(r("getErrorSafe")(e)).sendLogs("biz-ai-lead-gen-go-to-chat-error"), o("WAWebBizAiSaveUtils").showErrorToast();
	}
	function R(e) {
		var t = e.chat;
		o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(), o("WAWebCmd").Cmd.openChatBottom({
			chat: t,
			chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Deeplink
		});
	}
	function L(e) {
		o("WAWebCopyToClipboard").copyTextToClipboard(e).then(E);
	}
	function E(e) {
		e && o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }));
	}
	function k(e) {
		o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["BizAI lead gen mark seen mutation failed"]))).catching(r("getErrorSafe")(e)).sendLogs("biz-ai-lead-gen-mark-seen-error");
	}
	function I(e) {
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
