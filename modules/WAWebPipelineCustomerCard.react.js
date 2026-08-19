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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useMemo;
	function d(e) {
		var t = o("react-compiler-runtime").c(61), n = e.customer, a = e.onClick, i = e.stage, l;
		t[0] !== n.chatJid ? (l = o("WAWebContactCollection").ContactCollection.get(n.chatJid), t[0] = n.chatJid, t[1] = l) : l = t[1];
		var c = l, d, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I;
		if (t[2] !== c || t[3] !== n || t[4] !== a || t[5] !== i) {
			var T = c != null ? o("WAWebFrontendContactGetters").getDisplayName(c) : "", D;
			if (t[22] !== n.acquisitionSource) {
				var x;
				D = n.acquisitionSource != null && (x = o("WAWebAcquisitionSourceNames").getAcquisitionSourceDisplayName(n.acquisitionSource)) != null ? x : "", t[22] = n.acquisitionSource, t[23] = D;
			} else D = t[23];
			var $ = D, P = o("WAWebChatCollection").ChatCollection.get(n.chatJid), N = P == null ? void 0 : P.t, M = o("WAWebLeadStageNames").getLeadStageName(i);
			d = o("WAWebPipelineDragAndDrop.react").PipelineDraggableCard, y = String(n.id), C = i, t[24] === Symbol.for("react.memo_cache_sentinel") ? (L = { className: "x78zum5 x1q0g3np x6s0dn4 x1aj3ljl x150mmf0 xqf2s3x xjpr12u x16ovd2e x12xbjc7 x12w63v0 x1nzty39 xyi3aci xwf5gio x1p453bz x1suzm8a x1280gxy x1ypdohk" }, t[24] = L) : L = t[24], E = "pipeline-customer-card", t[25] !== n || t[26] !== a ? (k = function() {
				return a(n);
			}, t[25] = n, t[26] = a, t[27] = k) : k = t[27], I = "button", p = 0, t[28] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
				/*BTDS*/
				""
			), t[28] = _) : _ = t[28], f = s._(
				/*BTDS*/
				"",
				[s._param("customer name", T), s._param("lead stage name", M)]
			), t[29] !== n || t[30] !== a ? (g = function(t) {
				(t.key === "Enter" || t.key === " ") && (t.preventDefault(), a(n));
			}, t[29] = n, t[30] = a, t[31] = g) : g = t[31], t[32] !== c ? (h = c != null && u.jsx(r("WAWebContactImage.react"), {
				contact: c,
				size: 40
			}), t[32] = c, t[33] = h) : h = t[33];
			var w;
			t[34] === Symbol.for("react.memo_cache_sentinel") ? (b = { className: "x78zum5 xdt5ytf x1dbijih xeuugli x98rzlu" }, w = { className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft" }, t[34] = w, t[35] = b) : (w = t[34], b = t[35]), t[36] !== T ? (v = u.jsx("div", babelHelpers.extends({}, w, { children: u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDefault",
				children: T
			}) })), t[36] = T, t[37] = v) : v = t[37], t[38] !== $ ? (S = $ !== "" && u.jsx("div", {
				className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft",
				children: u.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: "contentDeemphasized",
					children: $
				})
			}), t[38] = $, t[39] = S) : S = t[39], R = N != null && u.jsx("div", {
				className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft",
				children: u.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: "contentDeemphasized",
					children: s._(
						/*BTDS*/
						"",
						[s._param("date", m(N))]
					)
				})
			}), t[2] = c, t[3] = n, t[4] = a, t[5] = i, t[6] = d, t[7] = p, t[8] = _, t[9] = f, t[10] = g, t[11] = h, t[12] = y, t[13] = C, t[14] = b, t[15] = v, t[16] = S, t[17] = R, t[18] = L, t[19] = E, t[20] = k, t[21] = I;
		} else d = t[6], p = t[7], _ = t[8], f = t[9], g = t[10], h = t[11], y = t[12], C = t[13], b = t[14], v = t[15], S = t[16], R = t[17], L = t[18], E = t[19], k = t[20], I = t[21];
		var A;
		t[40] !== b || t[41] !== v || t[42] !== S || t[43] !== R ? (A = u.jsxs("div", babelHelpers.extends({}, b, { children: [
			v,
			S,
			R
		] })), t[40] = b, t[41] = v, t[42] = S, t[43] = R, t[44] = A) : A = t[44];
		var F;
		t[45] !== p || t[46] !== _ || t[47] !== f || t[48] !== g || t[49] !== h || t[50] !== A || t[51] !== L || t[52] !== E || t[53] !== k || t[54] !== I ? (F = u.jsxs("div", babelHelpers.extends({}, L, {
			"data-testid": E,
			onClick: k,
			role: I,
			tabIndex: p,
			"aria-roledescription": _,
			"aria-label": f,
			onKeyDown: g,
			children: [h, A]
		})), t[45] = p, t[46] = _, t[47] = f, t[48] = g, t[49] = h, t[50] = A, t[51] = L, t[52] = E, t[53] = k, t[54] = I, t[55] = F) : F = t[55];
		var O;
		return t[56] !== d || t[57] !== y || t[58] !== C || t[59] !== F ? (O = u.jsx(d, {
			customerId: y,
			stage: C,
			children: F
		}), t[56] = d, t[57] = y, t[58] = C, t[59] = F, t[60] = O) : O = t[60], O;
	}
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
