__d("WAWebBizMerchantDetailsDrawer.react", [
	"fbt",
	"WALogger",
	"WAWebBizComplianceUtil",
	"WAWebBusinessProfileCollection",
	"WAWebComplianceInfo.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = ["ref"], c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useState;
	function f(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, u), i = a.contactId, l = _(void 0), c = l[0], m = l[1], f = _(!0), g = f[0], h = f[1];
		p(function() {
			var t = async function() {
				var t = await o("WAWebBusinessProfileCollection").BusinessProfileCollection.update(i, { getMerchantCompliance: !0 }), n = Array.isArray(t) ? t[0] : t, r = n.serialize();
				r ? (m(r.legalEntityDetails || void 0), h(!1)) : o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["compliance: cannot fetch business details (", ")"])), i.toString());
			};
			t();
		}, []);
		var y = c != null ? c : {}, C = y.customerCareDetails, b = y.entityName, v = y.grievanceOfficerDetails, S = o("WAWebBizComplianceUtil").getEntityTypeText(c);
		return d.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			theme: "striped",
			tsNavigationData: {
				surface: "unknown",
				viewName: "biz-merchant-details"
			},
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onCancel: a.onClose
			}), d.jsx(r("WAWebDrawerBody.react"), {
				theme: g ? "center-content" : void 0,
				children: g ? d.jsx(o("WAWebComplianceInfo.react").ComplianceInfoLoading, {}) : d.jsxs(d.Fragment, { children: [
					d.jsxs(o("WAWebComplianceInfo.react").ComplianceInfoGroup, { children: [d.jsx(o("WAWebComplianceInfo.react").ComplianceInfoPrimitiveField, {
						value: b,
						label: s._(
							/*BTDS*/
							""
						)
					}), d.jsx(o("WAWebComplianceInfo.react").ComplianceInfoPrimitiveField, {
						value: S,
						label: s._(
							/*BTDS*/
							""
						)
					})] }),
					d.jsxs(o("WAWebComplianceInfo.react").ComplianceInfoGroup, {
						title: s._(
							/*BTDS*/
							""
						),
						children: [
							d.jsx(o("WAWebComplianceInfo.react").ComplianceInfoPrimitiveField, {
								value: C == null ? void 0 : C.mobileNumber,
								label: s._(
									/*BTDS*/
									""
								),
								forceLTR: !0
							}),
							d.jsx(o("WAWebComplianceInfo.react").ComplianceInfoPrimitiveField, {
								value: C == null ? void 0 : C.landlineNumber,
								label: s._(
									/*BTDS*/
									""
								),
								forceLTR: !0
							}),
							d.jsx(o("WAWebComplianceInfo.react").ComplianceInfoPrimitiveField, {
								value: C == null ? void 0 : C.email,
								label: s._(
									/*BTDS*/
									""
								)
							})
						]
					}),
					d.jsxs(o("WAWebComplianceInfo.react").ComplianceInfoGroup, {
						title: s._(
							/*BTDS*/
							""
						),
						children: [
							d.jsx(o("WAWebComplianceInfo.react").ComplianceInfoPrimitiveField, {
								value: v == null ? void 0 : v.name,
								label: s._(
									/*BTDS*/
									""
								)
							}),
							d.jsx(o("WAWebComplianceInfo.react").ComplianceInfoPrimitiveField, {
								value: v == null ? void 0 : v.mobileNumber,
								label: s._(
									/*BTDS*/
									""
								),
								forceLTR: !0
							}),
							d.jsx(o("WAWebComplianceInfo.react").ComplianceInfoPrimitiveField, {
								value: v == null ? void 0 : v.landlineNumber,
								label: s._(
									/*BTDS*/
									""
								)
							}),
							d.jsx(o("WAWebComplianceInfo.react").ComplianceInfoPrimitiveField, {
								value: v == null ? void 0 : v.email,
								label: s._(
									/*BTDS*/
									""
								)
							})
						]
					})
				] })
			})]
		}, "merchant-details-modal");
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
