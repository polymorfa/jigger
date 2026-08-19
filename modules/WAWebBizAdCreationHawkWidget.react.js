__d("WAWebBizAdCreationHawkWidget.react", [
	"fbt",
	"CometRelay",
	"WAWebBizAdCreationConfigContext",
	"WAWebBizAdCreationDraftIDContext",
	"WAWebBizAdCreationHawkExpandableRow.react",
	"WAWebBizAdCreationHawkRowStyles",
	"WAWebBizAdCreationHawkSection.react",
	"WAWebBizAdCreationHawkTableRow.react",
	"WAWebBizAdCreationValidateSpecContext",
	"WAWebCopyPasteSelectable.react",
	"WAWebFlex.react",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebBizAdCreationIdentityContext",
	"withWAWebBizAdCreationSpecContext"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useContext, p = d.useState;
	function _(t) {
		var n = o("react-compiler-runtime").c(71), a = t.adAccountData, i = t.adgroupSpecs, l = t.audienceData, u = t.budgetOptions, d = t.currentLocallyUploadedMediaCollection, _ = t.defaultBudget, g = t.dsaData, h = t.durationData, y = t.lwiAudiences, C = t.placementData, b = t.selectedBudget, v = p(!1), S = v[0], R = v[1], L;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (L = {}, n[0] = L) : L = n[0];
		var E = p(L), k = E[0], I = E[1], T = m(r("WAWebBizAdCreationConfigContext")), D = m(r("WAWebBizAdCreationDraftIDContext")), x = m(r("WAWebBizAdCreationValidateSpecContext")), $ = r("useWAWebBizAdCreationIdentityContext")(), P;
		n[1] !== ($ == null ? void 0 : $.relayEnvironment) ? (P = function() {
			var e = $ == null ? void 0 : $.relayEnvironment;
			if (e == null) return "N/A";
			try {
				return o("CometRelay").getActorID(e);
			} catch (e) {
				return "N/A";
			}
		}, n[1] = $ == null ? void 0 : $.relayEnvironment, n[2] = P) : P = n[2];
		var N = P, M;
		n[3] !== S ? (M = function() {
			R(!S);
		}, n[3] = S, n[4] = M) : M = n[4];
		var w = M, A;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (A = function(t) {
			I(function(e) {
				var n;
				return babelHelpers.extends({}, e, (n = {}, n[t] = !e[t], n));
			});
		}, n[5] = A) : A = n[5];
		var F = A, O;
		n[6] !== a ? (O = {
			label: "Ad Account Data",
			value: a
		}, n[6] = a, n[7] = O) : O = n[7];
		var B;
		n[8] !== i ? (B = {
			label: "Adgroup Specs",
			value: i
		}, n[8] = i, n[9] = B) : B = n[9];
		var W;
		n[10] !== l ? (W = {
			label: "Audience Data (selected audience)",
			value: l
		}, n[10] = l, n[11] = W) : W = n[11];
		var q;
		n[12] !== g ? (q = {
			label: "DSA Data",
			value: g
		}, n[12] = g, n[13] = q) : q = n[13];
		var U;
		n[14] !== y ? (U = {
			label: "LWI Audiences",
			value: y
		}, n[14] = y, n[15] = U) : U = n[15];
		var V;
		n[16] !== C ? (V = {
			label: "Placement Data",
			value: C
		}, n[16] = C, n[17] = V) : V = n[17];
		var H;
		n[18] !== b ? (H = {
			label: "Selected Budget",
			value: b
		}, n[18] = b, n[19] = H) : H = n[19];
		var G;
		n[20] !== u ? (G = {
			label: "Budget Options",
			value: u
		}, n[20] = u, n[21] = G) : G = n[21];
		var z;
		n[22] !== _ ? (z = {
			label: "Default Budget",
			value: _
		}, n[22] = _, n[23] = z) : z = n[23];
		var j;
		n[24] !== h.durationInDays ? (j = {
			label: "Duration In Days",
			value: h.durationInDays
		}, n[24] = h.durationInDays, n[25] = j) : j = n[25];
		var K;
		n[26] !== h.initialDurationInDays ? (K = {
			label: "Default Duration In Days",
			value: h.initialDurationInDays
		}, n[26] = h.initialDurationInDays, n[27] = K) : K = n[27];
		var Q;
		n[28] !== V || n[29] !== H || n[30] !== G || n[31] !== z || n[32] !== j || n[33] !== K || n[34] !== O || n[35] !== B || n[36] !== W || n[37] !== q || n[38] !== U ? (Q = [
			O,
			B,
			W,
			q,
			U,
			V,
			H,
			G,
			z,
			j,
			K
		], n[28] = V, n[29] = H, n[30] = G, n[31] = z, n[32] = j, n[33] = K, n[34] = O, n[35] = B, n[36] = W, n[37] = q, n[38] = U, n[39] = Q) : Q = n[39];
		var X = Q, Y;
		if (n[40] !== (T == null ? void 0 : T.entryMode) || n[41] !== (T == null ? void 0 : T.entryPoint) || n[42] !== (T == null ? void 0 : T.flow) || n[43] !== (T == null ? void 0 : T.flowID) || n[44] !== (T == null ? void 0 : T.pageID) || n[45] !== (T == null ? void 0 : T.product) || n[46] !== d || n[47] !== D || n[48] !== k || n[49] !== N || n[50] !== w || n[51] !== $ || n[52] !== S || n[53] !== X || n[54] !== (x == null ? void 0 : x.isValidating) || n[55] !== (x == null ? void 0 : x.notices)) {
			var J, Z, ee, te, ne = (J = d == null ? void 0 : d.getPreviewableMedias()) != null ? J : [], re = ne.map(f), oe = [
				{
					label: "Boosted Component Product",
					value: T == null ? void 0 : T.product
				},
				{
					label: "Entrypoint",
					value: T == null ? void 0 : T.entryPoint
				},
				{
					label: "Entry Mode",
					value: T == null ? void 0 : T.entryMode
				},
				{
					label: "Page ID",
					value: T == null ? void 0 : T.pageID
				},
				{
					label: "Flow",
					value: T == null ? void 0 : T.flow
				},
				{
					label: "Flow ID",
					value: T == null ? void 0 : T.flowID
				}
			], ae = function() {
				return $ == null ? "N/A" : $.strongRelayEnvironment != null ? "Not required" : "Required";
			}, ie = [
				{
					label: "Account Type",
					value: (Z = $ == null ? void 0 : $.accountType) != null ? Z : "Not set"
				},
				{
					label: "Actor ID",
					value: N()
				},
				{
					label: "WAA Eligible",
					value: $ != null && $.isWAAEligible ? "Yes" : "No"
				},
				{
					label: "Email Verification Status",
					value: ae()
				}
			], le = [{
				label: "Is Validating",
				value: (ee = x == null ? void 0 : x.isValidating) != null ? ee : !1
			}, {
				label: "Notices",
				value: (te = x == null ? void 0 : x.notices) != null ? te : {}
			}], se;
			n[57] !== S ? (se = {
				0: { className: "xx42vgk xbogo7e x120ee7l x1vb5itz xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x6ikm8r x10wlt62" },
				1: { className: "xx42vgk xbogo7e x120ee7l x1vb5itz xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x6ikm8r x10wlt62 x1egiwwb" }
			}[!!S << 0], n[57] = S, n[58] = se) : se = n[58];
			var ue;
			n[59] === Symbol.for("react.memo_cache_sentinel") ? (ue = { className: "x6s0dn4 x1280gxy x120ee7l x1q0q8m5 xso031l x1ypdohk x1xrf6ya xscbp6u xf7dkkf xv54qhq" }, n[59] = ue) : ue = n[59];
			var ce;
			n[60] !== w ? (ce = function(t) {
				(t.key === "Enter" || t.key === " ") && (t.preventDefault(), w());
			}, n[60] = w, n[61] = ce) : ce = n[61];
			var de;
			n[62] === Symbol.for("react.memo_cache_sentinel") ? (de = c.jsx("span", {
				className: "x14ug900 x1f6kntn x117nqv4 x1hx0egp",
				children: s._(
					/*BTDS*/
					""
				)
			}), n[62] = de) : de = n[62];
			var me;
			n[63] !== S ? (me = {
				0: { className: "xhslqc4 x1pg5gke x150mmf0 x7p49u4 xd7bwuw x1jaox4c" },
				1: { className: "xhslqc4 x1pg5gke x150mmf0 x1jaox4c x1iffjtl" }
			}[!!S << 0], n[63] = S, n[64] = me) : me = n[64];
			var pe;
			n[65] !== me ? (pe = c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "all",
				children: [de, c.jsx("span", babelHelpers.extends({}, me, { children: "▶" }))]
			}), n[65] = me, n[66] = pe) : pe = n[66];
			var _e;
			n[67] !== w || n[68] !== ce || n[69] !== pe ? (_e = c.jsx("div", babelHelpers.extends({}, ue, {
				onClick: w,
				onKeyDown: ce,
				role: "button",
				tabIndex: 0,
				children: pe
			})), n[67] = w, n[68] = ce, n[69] = pe, n[70] = _e) : _e = n[70], Y = c.jsxs("div", babelHelpers.extends({}, se, { children: [_e, S ? c.jsxs(o("WAWebCopyPasteSelectable.react").SelectableDiv, {
				className: "xw2csxc x1odjw0f x1p57kb1 xvpt6g3 xf7dkkf xv54qhq x1hx0egp x162x9ue",
				selectable: !0,
				children: [
					c.jsx(r("WAWebBizAdCreationHawkSection.react"), {
						title: s._(
							/*BTDS*/
							""
						),
						children: X.map(function(e, t) {
							var n = e.label, o = e.value;
							return c.jsx(r("WAWebBizAdCreationHawkExpandableRow.react"), {
								expandedJsonFields: k,
								fieldKeyPrefix: "spec",
								isLast: t === X.length - 1,
								label: n,
								toggleJsonField: F,
								value: o
							}, n);
						})
					}),
					c.jsx(r("WAWebBizAdCreationHawkSection.react"), {
						title: s._(
							/*BTDS*/
							""
						),
						children: oe.map(function(e, t) {
							var n = e.label, o = e.value;
							return c.jsx(r("WAWebBizAdCreationHawkTableRow.react"), {
								isLast: t === oe.length - 1,
								label: n,
								value: o
							}, n);
						})
					}),
					c.jsx(r("WAWebBizAdCreationHawkSection.react"), {
						title: s._(
							/*BTDS*/
							""
						),
						children: re.length === 0 ? c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(r("WAWebBizAdCreationHawkRowStyles").row), { children: c.jsx(o("WAWebFlex.react").FlexRow, {
							align: "start",
							justify: "all",
							children: c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(r("WAWebBizAdCreationHawkRowStyles").label), { children: s._(
								/*BTDS*/
								""
							) }))
						}) })) : re.map(function(e, t) {
							var n = e.label, o = e.value;
							return c.jsx(r("WAWebBizAdCreationHawkExpandableRow.react"), {
								expandedJsonFields: k,
								fieldKeyPrefix: "media",
								isLast: t === re.length - 1,
								label: n,
								toggleJsonField: F,
								value: o
							}, n);
						})
					}),
					c.jsx(r("WAWebBizAdCreationHawkSection.react"), {
						title: s._(
							/*BTDS*/
							""
						),
						children: ie.map(function(e, t) {
							var n = e.label, o = e.value;
							return c.jsx(r("WAWebBizAdCreationHawkTableRow.react"), {
								isLast: t === ie.length - 1,
								label: n,
								value: o
							}, n);
						})
					}),
					c.jsx(r("WAWebBizAdCreationHawkSection.react"), {
						title: s._(
							/*BTDS*/
							""
						),
						children: le.map(function(e, t) {
							var n = e.label, o = e.value;
							return c.jsx(r("WAWebBizAdCreationHawkExpandableRow.react"), {
								expandedJsonFields: k,
								fieldKeyPrefix: "validation",
								isLast: t === le.length - 1,
								label: n,
								toggleJsonField: F,
								value: o
							}, n);
						})
					}),
					c.jsx(r("WAWebBizAdCreationHawkSection.react"), {
						title: s._(
							/*BTDS*/
							""
						),
						children: c.jsx(r("WAWebBizAdCreationHawkTableRow.react"), {
							isLast: !0,
							label: "Draft ID",
							value: D.draftID
						})
					})
				]
			}) : null] })), n[40] = T == null ? void 0 : T.entryMode, n[41] = T == null ? void 0 : T.entryPoint, n[42] = T == null ? void 0 : T.flow, n[43] = T == null ? void 0 : T.flowID, n[44] = T == null ? void 0 : T.pageID, n[45] = T == null ? void 0 : T.product, n[46] = d, n[47] = D, n[48] = k, n[49] = N, n[50] = w, n[51] = $, n[52] = S, n[53] = X, n[54] = x == null ? void 0 : x.isValidating, n[55] = x == null ? void 0 : x.notices, n[56] = Y;
		} else Y = n[56];
		return Y;
	}
	function f(e) {
		return {
			label: "Media " + e.id,
			value: {
				fullPreview: e.fullPreview,
				id: e.id,
				type: e.type
			}
		};
	}
	var g = r("withWAWebBizAdCreationSpecContext")(_, function(e) {
		return {
			adAccountData: e.adAccountData,
			adgroupSpecs: e.adgroupSpecs,
			audienceData: e.audienceData,
			budgetOptions: e.budgetData.budgetOptions,
			currentLocallyUploadedMediaCollection: e.currentLocallyUploadedMediaCollection,
			defaultBudget: e.budgetData.defaultBudget,
			dsaData: e.dsaData,
			durationData: e.durationData,
			lwiAudiences: e.lwiAudiences,
			placementData: e.placementData,
			selectedBudget: e.budgetData.budget
		};
	});
	l.default = g;
}), 226);
