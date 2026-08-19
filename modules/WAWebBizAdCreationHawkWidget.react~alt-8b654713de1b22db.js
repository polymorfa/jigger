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
	"stylex",
	"useWAWebBizAdCreationIdentityContext",
	"withWAWebBizAdCreationSpecContext"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useContext, p = d.useState;
	function _(t) {
		var n, a, i, l, u = t.adAccountData, d = t.adgroupSpecs, _ = t.audienceData, f = t.budgetOptions, g = t.currentLocallyUploadedMediaCollection, h = t.defaultBudget, y = t.dsaData, C = t.durationData, b = t.lwiAudiences, v = t.placementData, S = t.selectedBudget, R = p(!1), L = R[0], E = R[1], k = p({}), I = k[0], T = k[1], D = m(r("WAWebBizAdCreationConfigContext")), x = m(r("WAWebBizAdCreationDraftIDContext")), $ = m(r("WAWebBizAdCreationValidateSpecContext")), P = r("useWAWebBizAdCreationIdentityContext")(), N = function() {
			var e = P == null ? void 0 : P.relayEnvironment;
			if (e == null) return "N/A";
			try {
				return o("CometRelay").getActorID(e);
			} catch (e) {
				return "N/A";
			}
		}, M = function() {
			E(!L);
		}, w = function(t) {
			T(function(e) {
				var n;
				return babelHelpers.extends({}, e, (n = {}, n[t] = !e[t], n));
			});
		}, A = [
			{
				label: "Ad Account Data",
				value: u
			},
			{
				label: "Adgroup Specs",
				value: d
			},
			{
				label: "Audience Data (selected audience)",
				value: _
			},
			{
				label: "DSA Data",
				value: y
			},
			{
				label: "LWI Audiences",
				value: b
			},
			{
				label: "Placement Data",
				value: v
			},
			{
				label: "Selected Budget",
				value: S
			},
			{
				label: "Budget Options",
				value: f
			},
			{
				label: "Default Budget",
				value: h
			},
			{
				label: "Duration In Days",
				value: C.durationInDays
			},
			{
				label: "Default Duration In Days",
				value: C.initialDurationInDays
			}
		], F = (n = g == null ? void 0 : g.getPreviewableMedias()) != null ? n : [], O = F.map(function(e) {
			return {
				label: "Media " + e.id,
				value: {
					fullPreview: e.fullPreview,
					id: e.id,
					type: e.type
				}
			};
		}), B = [
			{
				label: "Boosted Component Product",
				value: D == null ? void 0 : D.product
			},
			{
				label: "Entrypoint",
				value: D == null ? void 0 : D.entryPoint
			},
			{
				label: "Entry Mode",
				value: D == null ? void 0 : D.entryMode
			},
			{
				label: "Page ID",
				value: D == null ? void 0 : D.pageID
			},
			{
				label: "Flow",
				value: D == null ? void 0 : D.flow
			},
			{
				label: "Flow ID",
				value: D == null ? void 0 : D.flowID
			}
		], W = function() {
			return P == null ? "N/A" : P.strongRelayEnvironment != null ? "Not required" : "Required";
		}, q = [
			{
				label: "Account Type",
				value: (a = P == null ? void 0 : P.accountType) != null ? a : "Not set"
			},
			{
				label: "Actor ID",
				value: N()
			},
			{
				label: "WAA Eligible",
				value: P != null && P.isWAAEligible ? "Yes" : "No"
			},
			{
				label: "Email Verification Status",
				value: W()
			}
		], U = [{
			label: "Is Validating",
			value: (i = $ == null ? void 0 : $.isValidating) != null ? i : !1
		}, {
			label: "Notices",
			value: (l = $ == null ? void 0 : $.notices) != null ? l : {}
		}];
		return c.jsxs("div", babelHelpers.extends({}, {
			0: { className: "xx42vgk xbogo7e x120ee7l x1vb5itz xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x6ikm8r x10wlt62" },
			1: { className: "xx42vgk xbogo7e x120ee7l x1vb5itz xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x6ikm8r x10wlt62 x1egiwwb" }
		}[!!L << 0], { children: [c.jsx("div", {
			className: "x6s0dn4 x1280gxy x120ee7l x1q0q8m5 xso031l x1ypdohk x1xrf6ya xscbp6u xf7dkkf xv54qhq",
			onClick: M,
			onKeyDown: function(t) {
				(t.key === "Enter" || t.key === " ") && (t.preventDefault(), M());
			},
			role: "button",
			tabIndex: 0,
			children: c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "all",
				children: [c.jsx("span", {
					className: "x14ug900 x1f6kntn x117nqv4 x1hx0egp",
					children: s._(
						/*BTDS*/
						""
					)
				}), c.jsx("span", babelHelpers.extends({}, {
					0: { className: "xhslqc4 x1pg5gke x150mmf0 x7p49u4 xd7bwuw x1jaox4c" },
					1: { className: "xhslqc4 x1pg5gke x150mmf0 x1jaox4c x1iffjtl" }
				}[!!L << 0], { children: "▶" }))]
			})
		}), L ? c.jsxs(o("WAWebCopyPasteSelectable.react").SelectableDiv, {
			className: "xw2csxc x1odjw0f x1p57kb1 xvpt6g3 xf7dkkf xv54qhq x1hx0egp x162x9ue",
			selectable: !0,
			children: [
				c.jsx(r("WAWebBizAdCreationHawkSection.react"), {
					title: s._(
						/*BTDS*/
						""
					),
					children: A.map(function(e, t) {
						var n = e.label, o = e.value;
						return c.jsx(r("WAWebBizAdCreationHawkExpandableRow.react"), {
							expandedJsonFields: I,
							fieldKeyPrefix: "spec",
							isLast: t === A.length - 1,
							label: n,
							toggleJsonField: w,
							value: o
						}, n);
					})
				}),
				c.jsx(r("WAWebBizAdCreationHawkSection.react"), {
					title: s._(
						/*BTDS*/
						""
					),
					children: B.map(function(e, t) {
						var n = e.label, o = e.value;
						return c.jsx(r("WAWebBizAdCreationHawkTableRow.react"), {
							isLast: t === B.length - 1,
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
					children: O.length === 0 ? c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(r("WAWebBizAdCreationHawkRowStyles").row), { children: c.jsx(o("WAWebFlex.react").FlexRow, {
						align: "start",
						justify: "all",
						children: c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(r("WAWebBizAdCreationHawkRowStyles").label), { children: s._(
							/*BTDS*/
							""
						) }))
					}) })) : O.map(function(e, t) {
						var n = e.label, o = e.value;
						return c.jsx(r("WAWebBizAdCreationHawkExpandableRow.react"), {
							expandedJsonFields: I,
							fieldKeyPrefix: "media",
							isLast: t === O.length - 1,
							label: n,
							toggleJsonField: w,
							value: o
						}, n);
					})
				}),
				c.jsx(r("WAWebBizAdCreationHawkSection.react"), {
					title: s._(
						/*BTDS*/
						""
					),
					children: q.map(function(e, t) {
						var n = e.label, o = e.value;
						return c.jsx(r("WAWebBizAdCreationHawkTableRow.react"), {
							isLast: t === q.length - 1,
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
					children: U.map(function(e, t) {
						var n = e.label, o = e.value;
						return c.jsx(r("WAWebBizAdCreationHawkExpandableRow.react"), {
							expandedJsonFields: I,
							fieldKeyPrefix: "validation",
							isLast: t === U.length - 1,
							label: n,
							toggleJsonField: w,
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
						value: x.draftID
					})
				})
			]
		}) : null] }));
	}
	_.displayName = _.name + " [from " + i.id + "]";
	var f = r("withWAWebBizAdCreationSpecContext")(_, function(e) {
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
	l.default = f;
}), 226);
