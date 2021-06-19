export class FilterBase {
  key: string ;
  name: string ;
  code: string ;
  cheked: boolean ;
}

export class DurationFilter extends FilterBase {
  duractionCode: string ;
}

export class Filters {
  duration: Array<DurationFilter> ;
  category: Array<FilterBase> ;
  level: Array<FilterBase> ;
}
