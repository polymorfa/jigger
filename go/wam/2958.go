const WamTestAnonymousDailyId = 2958 // channel: private

type TestAnonymousDailyIdEvent struct {
	PsTestEnumField PSTESTENUMFIELD `wam:"ps_test_enum_field"` // field 1
	PsTestFloatField string `wam:"ps_test_float_field"` // field 2
}