__d("WAWebContactManagerImportFilePicker.react", [
	"WALogger",
	"WAWebContactManagerSMBUserJourneyLogger",
	"WAWebFilePicker.react",
	"WDSButton.react",
	"WDSIconIcUpload.react",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useRef;
	function d(t) {
		var a = t.acceptTypes, i = t.buttonText, l = t.onFileSelected, s = t.testid, d = c(null), m = function() {
			var e;
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickImportUploadFile(), (e = d.current) == null || e.open();
		}, p = function(r) {
			var t = r.target.files[0];
			t && n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					yield l(t);
				} catch (t) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Error in CM import onFileSelected: ", ""])), t);
				}
			})();
		};
		return u.jsxs(u.Fragment, { children: [u.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcUpload.react"),
			label: i,
			variant: "filled",
			onPress: m,
			testid: s
		}), u.jsx(r("WAWebFilePicker.react"), {
			ref: d,
			mimes: a,
			onChange: p,
			multiple: !1
		})] });
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
