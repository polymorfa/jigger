__d("WAFlowsComponentToVersion.react", [
	"WAFlowsComponentSchemasV400",
	"WAFlowsComponentSchemasV401",
	"WAFlowsComponentSchemasV600",
	"WAFlowsComponentSchemasV602",
	"WAFlowsComponentsSchemaV701",
	"WAFlowsDatePicker.react",
	"WAFlowsDatePickerV500.react"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		switch (e) {
			case 100:
			case 101:
			case 110:
			case 120:
			case 200:
			case 201:
			case 202:
			case 299:
			case 300:
			case 301:
			case 302:
			case 400:
			case 401: return {
				Component: o("WAFlowsDatePicker.react").WAFlowsDatePicker,
				SCHEMA: o("WAFlowsDatePicker.react").SCHEMA,
				TYPE: o("WAFlowsDatePicker.react").TYPE
			};
			case 500:
			case 501:
			case 502:
			case 600:
			case 601:
			case 602:
			case 603:
			case 700:
			case 701:
			case 702:
			case 703:
			case 704: return {
				Component: o("WAFlowsDatePickerV500.react").WAFlowsDatePickerV500,
				SCHEMA: o("WAFlowsDatePickerV500.react").SCHEMA,
				TYPE: o("WAFlowsDatePickerV500.react").TYPE
			};
		}
	}
	var s = function(t, n) {
		return t === "RadioButtonsGroup" ? o("WAFlowsComponentSchemasV400").WAFlowsRadioButtonsGroupV400Schema : t === "CheckboxGroup" ? o("WAFlowsComponentSchemasV400").WAFlowsCheckboxGroupV400Schema : n;
	}, u = function(t, n) {
		return t === "RadioButtonsGroup" ? o("WAFlowsComponentSchemasV401").WAFlowsRadioButtonsGroupV401Schema : t === "CheckboxGroup" ? o("WAFlowsComponentSchemasV401").WAFlowsCheckboxGroupV401Schema : t === "Dropdown" ? o("WAFlowsComponentSchemasV401").WAFlowsDropdownV401Schema : n;
	}, c = function(t, n) {
		return t === "RadioButtonsGroup" ? o("WAFlowsComponentSchemasV600").WAFlowsRadioButtonsGroupV600Schema : t === "CheckboxGroup" ? o("WAFlowsComponentSchemasV600").WAFlowsCheckboxGroupV600Schema : t === "Dropdown" ? o("WAFlowsComponentSchemasV600").WAFlowsDropdownV600Schema : t === "OptIn" ? o("WAFlowsComponentSchemasV600").WAFlowsOptInV600Schema : t === "EmbeddedLink" ? o("WAFlowsComponentSchemasV600").WAFlowsEmbeddedLinkV600Schema : n;
	}, d = function(t, n) {
		return t === "RadioButtonsGroup" ? o("WAFlowsComponentSchemasV600").WAFlowsRadioButtonsGroupV600Schema : t === "CheckboxGroup" ? o("WAFlowsComponentSchemasV600").WAFlowsCheckboxGroupV600Schema : t === "Dropdown" ? o("WAFlowsComponentSchemasV600").WAFlowsDropdownV600Schema : t === "OptIn" ? o("WAFlowsComponentSchemasV600").WAFlowsOptInV600Schema : t === "EmbeddedLink" ? o("WAFlowsComponentSchemasV600").WAFlowsEmbeddedLinkV600Schema : t === "TextInput" ? o("WAFlowsComponentSchemasV602").WAFlowsTextInputV602Schema : n;
	}, m = function(t, n) {
		return t === "ChipsSelector" ? o("WAFlowsComponentsSchemaV701").WAFlowsChipsSelectorV701Schema : t === "ImageCarousel" ? o("WAFlowsComponentsSchemaV701").WAFlowsImageCarouselV701Schema : d(t, n);
	}, p = function(t, n, r) {
		switch (r) {
			case 100:
			case 101:
			case 110:
			case 120:
			case 200:
			case 201:
			case 202:
			case 299:
			case 300:
			case 301:
			case 302: return n;
			case 400: return s(t, n);
			case 401:
			case 500:
			case 501:
			case 502: return u(t, n);
			case 600:
			case 601: return c(t, n);
			case 602:
			case 603:
			case 700: return d(t, n);
			case 701:
			case 702:
			case 703:
			case 704: return m(t, n);
		}
	};
	l.getDatePicker = e, l.getComponentSchemaByVersion = p;
}), 98);
