__d("WAWebContactManagerImportFilePicker.react", [
	"WALogger",
	"WAWebContactManagerSMBUserJourneyLogger",
	"WAWebFilePicker.react",
	"WDSButton.react",
	"WDSIconIcUpload.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useRef;
	function d(t) {
		var n = t.acceptTypes, a = t.buttonText, i = t.onFileSelected, l = t.testid, s = c(null), d = function() {
			var e;
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickImportUploadFile(), (e = s.current) == null || e.open();
		}, m = function(n) {
			var t = n.target.files[0];
			t && (async function() {
				try {
					await i(t);
				} catch (t) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Error in CM import onFileSelected: ", ""])), t);
				}
			})();
		};
		return u.jsxs(u.Fragment, { children: [u.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcUpload.react"),
			label: a,
			variant: "filled",
			onPress: d,
			testid: l
		}), u.jsx(r("WAWebFilePicker.react"), {
			ref: s,
			mimes: n,
			onChange: m,
			multiple: !1
		})] });
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
