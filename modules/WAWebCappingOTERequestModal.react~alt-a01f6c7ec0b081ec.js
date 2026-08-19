__d("WAWebCappingOTERequestModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebIndividualNewChatMessageCappingLimitUtils",
	"WAWebIndividualNewChatMessageCappingLogEvents",
	"WAWebMexRequestOTEJob",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWDSRichTextField.react",
	"WAWebWamEnumSurfaceType",
	"WDSBaseRadio.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState, p = [
		{
			value: "MESSAGE_CUSTOMERS",
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			value: "MESSAGE_EMPLOYEES",
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			value: "MESSAGE_NEW_PERSONAL_CONTACTS",
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			value: "NEW_PHONE",
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			value: "INVITATION",
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			value: "OTHER",
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		}
	];
	function _() {
		var e = m(null), t = e[0], n = e[1], a = m(""), i = a[0], l = a[1], c = m(!1), _ = c[0], f = c[1];
		d(function() {
			o("WAWebIndividualNewChatMessageCappingLogEvents").logView(o("WAWebWamEnumSurfaceType").SURFACE_TYPE.MESSAGE_CAPPING_OTE_WITH_REASON_SELECTION, JSON.stringify(o("WAWebIndividualNewChatMessageCappingLimitUtils").getCappingData() || {}));
		}, []);
		var g = async function() {
			if (!_) {
				f(!0), o("WAWebIndividualNewChatMessageCappingLogEvents").logClick(o("WAWebWamEnumSurfaceType").SURFACE_TYPE.MESSAGE_CAPPING_OTE_WITH_REASON_SELECTION, "submit", JSON.stringify(babelHelpers.extends({ selected_reason: t }, o("WAWebIndividualNewChatMessageCappingLimitUtils").getCappingData() || {})));
				try {
					var e = await o("WAWebMexRequestOTEJob").mexRequestOTE(t, t === "OTHER" ? i : null);
					if (e != null) {
						var n, r;
						await o("WAWebIndividualNewChatMessageCappingLimitUtils").updateCappingDataFromOTEResponse(e);
						var a = (n = (r = o("WAWebIndividualNewChatMessageCappingLimitUtils").getCappingData()) == null ? void 0 : r.total_quota) != null ? n : 0;
						o("WAWebModalManager").closeModalManager();
						var l = a > 0 ? s._(
							/*BTDS*/
							"",
							[s._param("limit", a, [0])]
						) : s._(
							/*BTDS*/
							""
						);
						o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: l }));
					} else o("WAWebModalManager").closeModalManager(), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
				} catch (e) {
					o("WAWebModalManager").closeModalManager(), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
				}
			}
		}, h = function() {
			o("WAWebIndividualNewChatMessageCappingLogEvents").logClick(o("WAWebWamEnumSurfaceType").SURFACE_TYPE.MESSAGE_CAPPING_OTE_WITH_REASON_SELECTION, "skip", JSON.stringify(o("WAWebIndividualNewChatMessageCappingLimitUtils").getCappingData() || {})), o("WAWebModalManager").closeModalManager();
		};
		return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			type: o("WAWebModal.react").ModalTheme.IndividualNewChatMessageCapped,
			buttonsDirection: "vertical",
			buttonWidth: "fill",
			okText: s._(
				/*BTDS*/
				""
			),
			cancelText: s._(
				/*BTDS*/
				""
			),
			onOK: g,
			onCancel: h,
			okDisabled: _ || t == null,
			children: [
				u.jsxs("div", {
					className: "xdx6fka xvtqlqk x12xbjc7",
					children: [u.jsx(r("WDSText.react"), {
						type: "Headline1",
						colorName: "contentDefault",
						textAlign: "center",
						testid: "ote-request-title",
						children: s._(
							/*BTDS*/
							""
						)
					}), u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						textAlign: "center",
						testid: "ote-request-subtitle",
						children: s._(
							/*BTDS*/
							""
						)
					})]
				}),
				u.jsx("div", { children: u.jsx("div", {
					role: "radiogroup",
					children: p.map(function(e) {
						var o = e.label, a = e.value;
						return u.jsxs("label", {
							htmlFor: "ote-reason-" + a.toLowerCase(),
							className: "x78zum5 x6s0dn4 x1qvou4u x1s70e7g x1tiyuxx x1nbhmlj x1ypdohk",
							children: [u.jsx(r("WDSBaseRadio.react"), {
								id: "ote-reason-" + a.toLowerCase(),
								value: a,
								name: "oteReason",
								checked: t === a,
								onChange: function() {
									return n(a);
								}
							}), u.jsx(r("WDSText.react"), {
								type: "Body1",
								colorName: "contentDefault",
								children: o()
							})]
						}, a);
					})
				}) }),
				t === "OTHER" && u.jsx("div", {
					className: "x16ovd2e",
					children: u.jsx(r("WAWebWDSRichTextField.react"), {
						label: s._(
							/*BTDS*/
							""
						),
						placeholder: s._(
							/*BTDS*/
							""
						),
						initialText: i,
						onValueChange: l,
						maxLength: 999,
						rows: 3,
						testid: "messaging_capping_ote_reason_textfield"
					})
				})
			]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.CappingOTERequestModal = _;
}), 226);
