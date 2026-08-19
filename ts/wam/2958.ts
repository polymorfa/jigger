export const WamTestAnonymousDailyId = 2958 as const

export interface TestAnonymousDailyIdEvent {
  /** field 1, wire `ps_test_enum_field` */
  psTestEnumField?: PSTESTENUMFIELD
  /** field 2, wire `ps_test_float_field` */
  psTestFloatField?: string
}